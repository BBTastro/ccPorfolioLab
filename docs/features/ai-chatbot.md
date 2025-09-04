# AI Chatbot Integration

## Overview

The AI chatbot feature provides visitors with an interactive way to learn about the portfolio owner's professional background, skills, and experience. Built using OpenAI's GPT models, the chatbot is specifically trained on resume and cover letter content to provide accurate, relevant responses.

## What This Feature Does

- **Professional Q&A**: Answers questions about experience, skills, projects, and availability
- **Context-Aware Responses**: Uses resume and cover letter content as knowledge base
- **Conversation Memory**: Maintains context across multiple messages in a session
- **Rate Limiting**: Prevents abuse with request throttling
- **Accessible Interface**: Fully keyboard navigable with screen reader support

## How It Works

### Frontend Components
1. **Chat Widget** (`index.html` lines 340-390): Floating button and panel interface
2. **JavaScript Handler** (`script.js` lines 300-450): Message handling and UI updates
3. **CSS Styling** (`styles.css` lines 800-1000): Responsive chat interface design

### Backend Processing
1. **API Endpoint** (`api/chat.js`): Vercel serverless function
2. **Input Validation**: Sanitizes and validates user messages
3. **OpenAI Integration**: Sends contextual prompts to GPT model
4. **Response Processing**: Returns formatted AI responses

## Key Components and Files

### Frontend Files
- **HTML Structure**: Chat widget markup in `index.html`
- **JavaScript Logic**: Chat functionality in `script.js`
- **CSS Styles**: Chat interface styles in `styles.css`

### Backend Files
- **API Function**: `api/chat.js` - Main serverless function
- **Configuration**: Environment variables for OpenAI API

### State Management
- **Local Storage**: Persists chat history across sessions
- **Session Memory**: Maintains conversation context
- **Rate Limiting**: Prevents excessive API usage

## Usage Examples

### Basic Chat Interaction
```javascript
// User sends message
sendChatMessage("What's your experience with React?");

// AI responds based on portfolio context
// "I have 5+ years of experience with React, including..."
```

### Customizing AI Context
```javascript
// Update portfolio context in script.js
const PORTFOLIO_CONTEXT = `
RESUME SUMMARY:
Senior Front-End Engineer with expertise in React, Node.js...

KEY SKILLS:
- React & Next.js
- TypeScript
- UI/UX Design

EXPERIENCE HIGHLIGHTS:
- Created design systems
- Improved user engagement by 40%
`;
```

### Modifying Chat Behavior
```javascript
// Update API configuration in api/chat.js
const CONFIG = {
  OPENAI_MODEL: 'gpt-4', // Use GPT-4 for better responses
  OPENAI_TEMPERATURE: 0.3, // Lower for more focused answers
  OPENAI_MAX_TOKENS: 300, // Limit response length
};
```

## Configuration Requirements

### Environment Variables
- `OPENAI_API_KEY` - OpenAI API key (required)

### API Settings
- **Model**: GPT-3.5-turbo (configurable to GPT-4)
- **Temperature**: 0.3 (focused, factual responses)
- **Max Tokens**: 300 (concise answers)
- **Rate Limit**: 10 requests per minute per IP

## System Prompt

The AI is guided by a comprehensive system prompt that:
- Restricts responses to professional topics only
- Encourages visitors to contact directly for detailed discussions
- Maintains professional but conversational tone
- Redirects off-topic questions back to career-related topics

```javascript
const SYSTEM_PROMPT = `You are a helpful AI assistant representing a creative director and senior front-end engineer's portfolio website. Your role is to answer questions about their professional experience, skills, projects, and availability based ONLY on the provided resume and cover letter context.

IMPORTANT GUIDELINES:
1. Only answer questions related to professional background
2. If asked about unrelated topics, politely decline and redirect
3. Be conversational but professional in tone
4. Keep responses concise and relevant (under 200 words)
5. Encourage visitors to reach out directly for detailed discussions`;
```

## Security Features

### Input Sanitization
- HTML tag stripping to prevent XSS attacks
- Message length limits (500 characters)
- Content validation and filtering

### Rate Limiting
- IP-based request throttling
- Configurable limits per time window
- Automatic cleanup of old rate limit data

### API Security
- Environment variable protection for API keys
- CORS headers for cross-origin requests
- Error handling without exposing sensitive information

## Accessibility Features

### Keyboard Navigation
- Tab navigation through all chat elements
- Enter key to send messages
- Escape key to close chat panel

### Screen Reader Support
- ARIA labels for all interactive elements
- Live region for new messages
- Semantic HTML structure

### Visual Accessibility
- High contrast color scheme
- Focus indicators on all interactive elements
- Responsive design for all screen sizes

## Performance Optimizations

### Frontend
- Debounced input handling
- Efficient DOM updates
- Local storage for chat history
- Lazy loading of chat interface

### Backend
- Optimized OpenAI API calls
- Request caching where appropriate
- Efficient rate limiting implementation
- Error handling and fallbacks

## Error Handling

### Frontend Errors
- Network connectivity issues
- API timeout handling
- User-friendly error messages
- Graceful degradation

### Backend Errors
- OpenAI API failures
- Rate limiting responses
- Input validation errors
- Server-side error logging

## Monitoring and Analytics

### Usage Metrics
- Message volume tracking
- Response time monitoring
- Error rate analysis
- User engagement patterns

### Performance Monitoring
- API response times
- Success/failure rates
- Resource usage tracking
- Cost optimization insights

## Future Enhancements

### Advanced Features
- **Streaming Responses**: Real-time message streaming
- **File Attachments**: Support for resume/portfolio uploads
- **Multi-language**: Support for multiple languages
- **Voice Interface**: Speech-to-text and text-to-speech

### Integration Options
- **CRM Integration**: Lead capture and follow-up
- **Analytics**: Detailed conversation analytics
- **A/B Testing**: Different conversation flows
- **Personalization**: Tailored responses based on visitor behavior

## Troubleshooting

### Common Issues
1. **Chat not responding**: Check OpenAI API key configuration
2. **Rate limiting**: Implement user feedback for rate limits
3. **Context loss**: Verify chat history persistence
4. **Mobile issues**: Test responsive design on actual devices

### Debugging
- Browser console for frontend errors
- Vercel function logs for backend issues
- Network tab for API call inspection
- Local storage inspection for chat history
