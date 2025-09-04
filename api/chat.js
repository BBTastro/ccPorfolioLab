/**
 * Vercel Serverless Function - AI Chat API
 * Handles OpenAI integration for portfolio chatbot
 */

const { Configuration, OpenAIApi } = require('openai');

// Rate limiting storage (in production, use Redis or similar)
const rateLimitStore = new Map();

// Configuration
const CONFIG = {
  MAX_REQUESTS_PER_MINUTE: 10,
  MAX_MESSAGE_LENGTH: 500,
  MAX_HISTORY_LENGTH: 6,
  OPENAI_MODEL: 'gpt-3.5-turbo',
  OPENAI_TEMPERATURE: 0.3,
  OPENAI_MAX_TOKENS: 300,
};

// System prompt for the AI assistant
const SYSTEM_PROMPT = `You are a helpful AI assistant representing a creative director and senior front-end engineer's portfolio website. Your role is to answer questions about their professional experience, skills, projects, and availability based ONLY on the provided resume and cover letter context.

IMPORTANT GUIDELINES:
1. Only answer questions related to the person's professional background, skills, experience, projects, and career
2. If asked about unrelated topics (weather, news, general knowledge, etc.), politely decline and redirect to professional topics
3. Be conversational but professional in tone
4. Keep responses concise and relevant (under 200 words)
5. If you don't have specific information in the context, say so honestly
6. Encourage visitors to reach out directly for more detailed discussions

SAMPLE RESPONSES FOR OFF-TOPIC QUESTIONS:
- "I'm here to help you learn about [Name]'s professional background and experience. What would you like to know about their skills or projects?"
- "I can only discuss professional topics related to this portfolio. Is there something specific about their work experience you'd like to know?"

Remember: Stay focused on professional topics and encourage meaningful career-related conversations.`;

/**
 * Simple rate limiting implementation
 */
function checkRateLimit(clientId) {
  const now = Date.now();
  const minute = Math.floor(now / 60000);
  const key = `${clientId}:${minute}`;
  
  const count = rateLimitStore.get(key) || 0;
  if (count >= CONFIG.MAX_REQUESTS_PER_MINUTE) {
    return false;
  }
  
  rateLimitStore.set(key, count + 1);
  
  // Clean up old entries
  for (const [k] of rateLimitStore) {
    const [, keyMinute] = k.split(':');
    if (parseInt(keyMinute) < minute - 5) {
      rateLimitStore.delete(k);
    }
  }
  
  return true;
}

/**
 * Validate and sanitize input
 */
function validateInput(body) {
  if (!body || typeof body !== 'object') {
    return { error: 'Invalid request body' };
  }

  const { message, context, history } = body;

  if (!message || typeof message !== 'string') {
    return { error: 'Message is required and must be a string' };
  }

  if (message.length > CONFIG.MAX_MESSAGE_LENGTH) {
    return { error: `Message too long. Maximum ${CONFIG.MAX_MESSAGE_LENGTH} characters.` };
  }

  if (!context || typeof context !== 'string') {
    return { error: 'Context is required' };
  }

  // Sanitize message (basic HTML stripping)
  const sanitizedMessage = message.replace(/<[^>]*>/g, '').trim();
  
  if (!sanitizedMessage) {
    return { error: 'Message cannot be empty' };
  }

  // Validate history
  let sanitizedHistory = [];
  if (history && Array.isArray(history)) {
    sanitizedHistory = history
      .slice(-CONFIG.MAX_HISTORY_LENGTH)
      .filter(msg => msg && typeof msg.content === 'string' && typeof msg.isUser === 'boolean')
      .map(msg => ({
        content: msg.content.replace(/<[^>]*>/g, '').trim(),
        isUser: msg.isUser
      }));
  }

  return {
    message: sanitizedMessage,
    context: context.trim(),
    history: sanitizedHistory
  };
}

/**
 * Build conversation messages for OpenAI
 */
function buildConversationMessages(message, context, history) {
  const messages = [
    {
      role: 'system',
      content: `${SYSTEM_PROMPT}\n\nCONTEXT (Resume and Cover Letter):\n${context}`
    }
  ];

  // Add conversation history
  history.forEach(msg => {
    messages.push({
      role: msg.isUser ? 'user' : 'assistant',
      content: msg.content
    });
  });

  // Add current message
  messages.push({
    role: 'user',
    content: message
  });

  return messages;
}

/**
 * Call OpenAI API
 */
async function callOpenAI(messages) {
  const apiKey = process.env.OPENAI_API_KEY;
  
  if (!apiKey) {
    throw new Error('OpenAI API key not configured');
  }

  const configuration = new Configuration({
    apiKey: apiKey,
  });

  const openai = new OpenAIApi(configuration);

  try {
    const response = await openai.createChatCompletion({
      model: CONFIG.OPENAI_MODEL,
      messages: messages,
      temperature: CONFIG.OPENAI_TEMPERATURE,
      max_tokens: CONFIG.OPENAI_MAX_TOKENS,
      presence_penalty: 0.1,
      frequency_penalty: 0.1,
    });

    if (!response.data.choices || response.data.choices.length === 0) {
      throw new Error('No response from OpenAI');
    }

    return response.data.choices[0].message.content.trim();
  } catch (error) {
    console.error('OpenAI API error:', error.response?.data || error.message);
    
    if (error.response?.status === 429) {
      throw new Error('AI service temporarily unavailable due to high demand. Please try again in a moment.');
    } else if (error.response?.status === 401) {
      throw new Error('AI service configuration error.');
    } else {
      throw new Error('AI service temporarily unavailable. Please try again later.');
    }
  }
}

/**
 * Main API handler
 */
module.exports = async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Get client identifier for rate limiting
    const clientId = req.headers['x-forwarded-for'] || req.connection.remoteAddress || 'unknown';
    
    // Check rate limit
    if (!checkRateLimit(clientId)) {
      return res.status(429).json({ 
        error: 'Too many requests. Please wait a moment before trying again.' 
      });
    }

    // Validate input
    const validation = validateInput(req.body);
    if (validation.error) {
      return res.status(400).json({ error: validation.error });
    }

    const { message, context, history } = validation;

    // Build conversation messages
    const messages = buildConversationMessages(message, context, history);

    // Call OpenAI
    const aiResponse = await callOpenAI(messages);

    // Return response
    return res.status(200).json({
      response: aiResponse,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Chat API error:', error);
    
    return res.status(500).json({
      error: error.message || 'Internal server error. Please try again later.'
    });
  }
};
