/**
 * Portfolio Website - Interactive Functionality
 * Vanilla JavaScript implementation with accessibility and performance focus
 */

// ==========================================================================
// Constants and Configuration
// ==========================================================================

const CONFIG = {
  // API endpoints
  CHAT_API: '/api/chat',
  
  // Animation settings
  SCROLL_OFFSET: 80,
  SMOOTH_SCROLL_DURATION: 600,
  
  // Chat settings
  MAX_MESSAGE_LENGTH: 500,
  TYPING_DELAY: 1000,
  
  // Cursor tracking settings
  MAGNETIC_STRENGTH: 0.15,
  MAGNETIC_DAMPENING: 0.92,
  
  // Storage keys
  STORAGE_KEYS: {
    THEME: 'portfolio-theme', // Use localStorage for theme (persists across sessions)
    CHAT_HISTORY: 'portfolio-chat-history' // Will use sessionStorage (clears on new session)
  }
};

// Resume and cover letter context for AI chat
const PORTFOLIO_CONTEXT = `
JAMES McKAY
AI-Powered Creative Producer | Client Facing Creative Production  remote | Atlanta | Brooklyn | NYC | Los Angeles | Rotterdam | Cologne | Buenos Aires | Montevideo 
hiya@creativecontext.studio
+1 347-439-395
PROFESSIONAL SUMMARY
Creative producer with experience managing AI-powered projects, multi-department teams, and client relationships across branded, film, TV, and emerging  production and technology platforms. Proven expertise in project lifecycle management from concept through delivery, with deep understanding of production mangement, generative AI workflows, and interactive creation.
Core Expertise: Producing and Project Leadership | Client Management | AI-Powered Content Creation | Cross-Functional Team Coordination | Budget & Timeline Management | Creative Production Oversight
TECHNICAL SKILLS
AI & Emerging Technology: ChatGPT, Claude Code, Cursor, MCPs, RAG, agentic systems, n8n, Runway, Veo 3, Nano Banana, Remotion, Midjourney, Sora, HeyGen, Elevenlabs, fal, Huggingface, Unity, Unreal Engine
Production & Management: Adobe Creative Suite, DaVinci Resolve, Blender, Figma, Notion, Slack, Google Workspace, Budget management, Resource allocation, Timeline coordination, Risk assessment
PROFESSIONAL EXPERIENCE
Creative Context Studio | Atlanta, GA & Brooklyn, NY
Producer & Creative Director | June 2019 - Present • AI-Powered Project Leadership: Manage end-to-end delivery of creative and AI-enabled projects including branded chatbots with RAG-based knowledge systems and micro app creation using Claude Code and agentic workflows • Client Advisory Services: Serve as primary client contact for Fortune 500 brands including IBM, JP Morgan Chase, and Adidas, managing expectations and providing strategic project updates that build confidence and clarity • Cross-Functional Team Coordination:Lead collaboration between creative leaders, crews, AI engineers, content designers, creative teams, and external partners, translating between technical and creative requirements for seamless project execution • Content Delivery Pipeline Optimization:Developed workflows spanning generative AI content creation, game and interactive development • Creative Production Oversight: Manage deliverables across formats including videos, automated UGC, brand spokesperson content, newsletter/blog collaboration tools, and operational systems for marketing campaigns, project tracking, and budget management
NYC agency | New York, NY
Producer | August 2022 - June 2025 • Managed day-to-day client relationships and project delivery for agency clients across technology, finance, healthcare, pharmaceutical, and brand sectors, handling client communications, scope management, billing requirements, and campaign asset delivery while maintaining clear project timelines and stakeholder expectations. Interactive Experience Design: Managed VR, XR, and live interactive exhibits requiring complex technical production and client stakeholder coordination • Unity/Unreal/three.js, Luxury Travel Simulator and VR science lab tours.• Live Event Interactive HeyGen Brand Ambassador Avatars •  AI Tool Development: Created creative tools for content creators and brands including automated content generation and brand spokesperson systems
The CW Network | Studio Production
Production Manager - "Would I Lie To You?" | 2022 • Project Leadership & Operational Excellence: Owned live studio prodcution of 13-episode production with 45+ team members, developing schedules, managing budgets, and ensuring transparent project flow from studio build through network delivery • Client Management & Communication: Served as primary liaison with network executives, A list Talent, leading project communications and providing strategic updates on scope, milestones, and deliverables
Travel Channel | Global Production
Production Supervisor - "Ripley's Believe It or Not!" | 2020 • Risk Management & Adaptability: Managed productions across 25+ cities on 6 continents, coordinating with international crews and maintaining project momentum through scope changes and technical challenges • Cross-Functional Collaboration: Supervised 100+ guests, technicians, and vendors, facilitating collaboration across diverse teams and ensuring quality standards across all locations
Adidas/Champs | Brand Campaign
Producer - Brand Documentary & Commercial | 2019 • Creative Production Oversight: Managed 15-minute branded content featuring A-list sports and entertainment talent, ensuring deliverables met quality standards and launch requirements • Budget & Resource Management: Created and maintained project budgets, negotiated with freelance consultants and vendors, controlled costs while delivering on-time and on-budget
Viceland/A&E Networks
Line Producer - "States of Undress S.2" & "Country Buck$ S.2" | 2016 • Multi-Platform Content Strategy:Developed integrated strategies spanning broadcast, digital, and social platforms, successfully managing Louisiana tax incentive program compliance
Discovery ID/Stephen David Entertainment
Line Producer - "Shadow of Doubt" | 2015-2016 • Stakeholder Communication: Coordinated complex relationships with law enforcement agencies, family representatives, and corporate partners for sensitive content requiring discretion and legal compliance
Major Studio & Network Productions | 2005-2015
Production Manager/Coordinator | Various Networks (MTV, National Geographic, Animal Planet, SyFy, Food Network) • Complex Project Coordination: Managed high-profile productions including Times Square New Year's Eve access, NASA facility coordination, and celebrity home productions across Los Angeles and NYC markets
Walt Disney Pictures/Warner Bros
Production Secretary & Background Casting | Pirates of the Caribbean II & III, Superman: Man of Steel | 2005-2011 • Large-Scale Team Coordination: Managed communications for 600+ crew members across 3 Bahamian islands, coordinating logistics for major studio productions
NOTABLE CLIENTS & BRANDS
Corporate: IBM, KKR, FNIH, JP Morgan Chase, Adidas, Champs, Facebook, Complex
Studios: Disney, Warner Bros., Sony Pictures, National Geographic
Networks: MTV, SyFy, NBC Universal, Travel Channel, Discovery, A&E, Food Network
PROJECT EXPERIENCE
Global Remote Production Experience: Managed projects created, produced, and delivered across United States, Europe, South America, Asia, and Africa with both large and small teams


remote | Atlanta | Brooklyn | NYC | Los Angeles | Rotterdam | Cologne | Buenos Aires | Montevideo 
hiya@creativecontext.studio 

The role represents the perfect convergence of my production expertise and passion for AI powered creative experiences that deliver exceptional results for global brands.
What excites me is your historic portfolio and client roster spanning cutting-edge companies and your commitment to blending storytelling with technology. This aligns with my experience producing content for series and shows for Discovery, MTV, and National Geographic, developing brand videos and campaigns for Fortune 500 companies including IBM, Adidas, and JP Morgan Chase, and building my chops with major studios like Disney and Warner Bros.
I bring comprehensive production management experience handling client facing communications, logistics, and technical needs across brands, TV, films, and interactive content. My background includes line managing feature films, line producing multiple unscripted series for Viacom, Vice, SyFy, and NBC Universal, plus delivering large campaigns while maintaining day to day transparent communication with executives, vendors, and creative teams.
My current work with generative content creation using context engineering and agentic workflows sets me apart. I leverage toolsets from platforms like ChatGPT, Claude Code, MCPs, Sora, Midjourney, Veo 3, Nano Banana, Runway, ElevenLabs, and HeyGen to create experiences and micro content using agentic systems and automated UGC tools. This technical expertise, combined with my brand and community storytelling background, makes me uniquely qualified for AIpowered projects.
I understand the entire project lifespan from scope and budget development through preproduction, production, post workflows, QC, and delivery. I've created systems that allow creativity within repetition while managing teams across six continents. Whether developing game and interactive experiences using Unity, Unreal, and three.js, or coordinating live events and AR/XR experiences, I collaborate with stakeholders to execute innovative storytelling approaches.
My agency experience includes client communication across technology, luxury, finance, healthcare, pharmaceutical, and brand sectors, managing scopes, finances, and billing requirements. I'm comfortable delivering lots of assets on schedule while building scalable production systems.
The remote nature of this role suits my working style perfectly. I've successfully produced content all over the world using remote tools and platforms, maintaining consistent quality and relationships regardless of location.
My ability to translate between creative vision and technical execution, manage complex stakeholder relationships, and deliver AI based projects on time and budget positions me to contribute immediately to your team's continued success.
I'd welcome the opportunity to discuss how my production expertise, AI workflow knowledge, and client focused approach can help create exceptional experiences for your global brand partners.
Thank you for your consideration!
Best regards,


`;

// ==========================================================================
// Global State
// ==========================================================================

let state = {
  theme: 'dark',
  activeSection: 'about',
  chatOpen: false,
  chatHistory: [],
  modalOpen: false,
  currentProject: null,
  isScrolling: false
};

// ==========================================================================
// Utility Functions
// ==========================================================================

/**
 * Debounce function to limit function calls
 */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function to limit function calls
 */
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}

/**
 * Check if user prefers reduced motion
 */
function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Smooth scroll to element with native performance
 */
function smoothScrollTo(target, offset = 0) {
  if (prefersReducedMotion()) {
    target.scrollIntoView();
    return;
  }
  
  const targetPosition = target.offsetTop - offset;
  
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
}

/**
 * Get current section based on scroll position
 */
function getCurrentSection() {
  const sections = document.querySelectorAll('section[id]');
  const scrollPosition = window.scrollY + CONFIG.SCROLL_OFFSET;
  
  for (let i = sections.length - 1; i >= 0; i--) {
    const section = sections[i];
    if (section.offsetTop <= scrollPosition) {
      return section.id;
    }
  }
  
  return 'about';
}

/**
 * Update active navigation link and section
 */
function updateActiveNavLink(activeSection) {
  // Update navigation links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${activeSection}`) {
      link.classList.add('active');
    }
  });

  // Update active section styling
  const sections = document.querySelectorAll('section[id]');
  sections.forEach(section => {
    section.classList.remove('section-active');
    if (section.id === activeSection) {
      section.classList.add('section-active');
    }
  });
}

// ==========================================================================
// Theme Management
// ==========================================================================

function initializeTheme() {
  // Get current theme set by the inline script
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
  state.theme = currentTheme;
  
  // Verify theme is properly applied (in case inline script failed)
  if (!document.documentElement.hasAttribute('data-theme')) {
    applyTheme('dark'); // fallback
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  state.theme = theme;
  
  // Save to localStorage with error handling
  try {
    localStorage.setItem(CONFIG.STORAGE_KEYS.THEME, theme);
  } catch (e) {
    console.warn('Could not save theme preference to localStorage:', e);
  }
  
  // Sync browser UI theme color meta
  try {
    const metaTheme = document.getElementById('meta-theme-color');
    if (metaTheme) {
      metaTheme.setAttribute('content', theme === 'dark' ? '#0b0b0c' : '#ffffff');
    }
  } catch (e) {
    // ignore
  }
  
  // The CSS handles icon visibility automatically based on data-theme attribute
  // No need to manually update icons here as they're controlled by CSS opacity rules
}

function toggleTheme() {
  const newTheme = state.theme === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme);
}

/**
 * Verify theme is working correctly - called after page load
 */
function verifyTheme() {
  const htmlElement = document.documentElement;
  const currentTheme = htmlElement.getAttribute('data-theme');
  
  if (!currentTheme) {
    console.warn('Theme attribute missing, applying default theme');
    applyTheme('dark');
    return;
  }
  
  // Verify CSS custom properties are available
  const computedStyle = getComputedStyle(htmlElement);
  const bgColor = computedStyle.getPropertyValue('--bg').trim();
  
  if (!bgColor) {
    console.warn('CSS custom properties not loaded, theme may not be working');
    // Force refresh theme after a brief delay
    setTimeout(() => {
      applyTheme(currentTheme);
    }, 100);
  }
}

// ==========================================================================
// Navigation
// ==========================================================================

function initializeNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const themeToggle = document.querySelector('.theme-toggle');
  const backToTop = document.querySelector('.back-to-top');

  // Navigation link clicks with optimized performance
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Set scrolling flag to prevent scroll listener conflicts
        state.isScrolling = true;
        
        // Update navigation state immediately for visual feedback
        state.activeSection = targetId;
        updateActiveNavLink(targetId);
        
        // Smooth scroll to element
        smoothScrollTo(targetElement, CONFIG.SCROLL_OFFSET);
        
        // Update URL without triggering page reload
        history.replaceState(null, null, `#${targetId}`);
        
        // Clear scrolling flag after scroll completes
        setTimeout(() => {
          state.isScrolling = false;
        }, CONFIG.SMOOTH_SCROLL_DURATION + 100); // Match with smooth scroll duration
      }
    });
  });

  // Theme toggle
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }

  // Back to top button
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      smoothScrollTo(document.body, 0);
    });
  }

  // Scroll-based navigation updates with optimized performance
  const handleScroll = throttle(() => {
    if (!state.isScrolling) {
      const currentSection = getCurrentSection();
      if (currentSection !== state.activeSection) {
        state.activeSection = currentSection;
        updateActiveNavLink(currentSection);
        
        // Update URL without triggering page reload
        history.replaceState(null, null, `#${currentSection}`);
      }
    }
  }, 16); // 60fps for smooth updates

  window.addEventListener('scroll', handleScroll, { passive: true });
}

// ==========================================================================
// Modal System
// ==========================================================================

const MODAL_DATA = {
  // Work Projects
  'context-engineering': {
    title: 'Context Engineering and Micro Apps',
    description: 'AI-powered context engineering solutions and micro SaaS application development. Specializing in RAG-based knowledge systems, agentic workflows, and intelligent chatbot implementations for enterprise clients. Built with modern AI frameworks and scalable architectures.',
    type: 'work',
    techStack: ['Claude Code', 'RAG Systems', 'Agentic Workflows', 'Context Engineering'],
    image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="%23f093fb"/><text x="200" y="150" text-anchor="middle" fill="white" font-family="monospace" font-size="16">Context Engineering</text></svg>',
    gallery: ['AI workflow documentation coming soon...']
  },
  'ugc-stories': {
    title: 'UGC Stories',
    description: 'AI-powered content creation campaigns using cutting-edge tools like Runway, Veo 3, and Nano Banana to produce branded UGC content across all mediums. Leveraging LLMs, MCPs (Model Context Protocols), and agnetic context for intelligent content generation, automated storytelling, and multi-platform distribution strategies.',
    type: 'work',
    techStack: ['Runway', 'Veo 3', 'Nano Banana', 'MCPs', 'Content Automation', 'Multi-Platform', 'Brands', 'Animations', 'Social Campaign'],
    links: [
      { label: 'Content Portfolio', url: '#' },
      { label: 'AI Workflows', url: '#' }
    ],
    image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="%234facfe"/><text x="200" y="150" text-anchor="middle" fill="white" font-family="monospace" font-size="16">UGC Stories</text></svg>',
    gallery: ['AI-generated content samples coming soon...']
  },
  // Reel Projects
  'tv-film-brand': {
    title: 'TV Film & Brand Showcase',
    description: 'Production reel featuring work across television, film, and brand campaigns. Includes projects for major networks like MTV, Discovery, NBC Universal, and brand campaigns for Fortune 500 companies including IBM, Adidas, and JP Morgan Chase.',
    type: 'reel',
    techStack: ['Adobe Creative Suite', 'DaVinci Resolve', 'Post Production', 'Studio', 'Location', 'Production Management'],
    links: [
      { label: 'Watch on YouTube', url: 'https://youtu.be/vDAeQt0vmxY' },
      { label: 'IMDb Profile', url: 'https://www.imdb.com/name/nm1452109/' }
    ],
    video: 'https://www.youtube.com/embed/vDAeQt0vmxY',
    youtubeId: 'vDAeQt0vmxY',
    gallery: ['Production stills and behind-the-scenes content coming soon...']
  },
  // Upcoming Projects (existing)
  'agentic-process': {
    title: 'Agentic Process',
    description: 'AI-powered workflow automation platform that leverages intelligent systems for autonomous project management. Features include agentic workflows, intelligent automation, and AI-driven project coordination across multiple platforms and tools.',
    status: 'In Development',
    timeline: 'Expected Q3 2024',
    gallery: ['AI workflow documentation coming soon...']
  },
  'ai-platform': {
    title: 'AI powered Project, Task, and Ticket Management',
    description: 'An intelligent project management platform that leverages AI to streamline workflows, automate task prioritization, and optimize resource allocation. Features include smart ticket routing, predictive project timelines, automated status updates, and intelligent team collaboration tools for enhanced productivity.',
    status: 'In Development',
    timeline: 'Expected Q2 2024',
    gallery: ['Platform mockups coming soon...']
  },
  'design-system': {
    title: 'ShotList CoPilot',
    description: 'A micro app for content creators and production teams that syncs Google Sheets with their shot list in the field. Features include real-time collaboration, offline capability, and seamless integration with production workflows for efficient on-location management.',
    status: 'Planning',
    timeline: 'Research phase - Q1 2024',
    gallery: ['Component library preview coming soon...']
  },
  'mobile-app': {
    title: 'Generative Mobile Thriller',
    description: 'An innovative mobile thriller generation platform that creates immersive, interactive thriller experiences. Features include AI-powered story generation, dynamic character development, and real-time narrative branching for personalized thriller content.',
    status: 'Concept',
    timeline: 'Concept validation ongoing',
    gallery: ['App concepts and wireframes coming soon...']
  },
  'finance-bro': {
    title: 'Finance Bro',
    description: 'An OpenAI-powered RAG chatbot that discusses world markets, finance strategies, and Bitcoin. Features include real-time market analysis, personalized investment advice, cryptocurrency insights, and interactive financial education through conversational AI.',
    status: 'In Development',
    timeline: 'Expected Q1 2025',
    gallery: ['Chatbot interface mockups coming soon...']
  },
  'robotina': {
    title: 'Robotina',
    description: 'A contextual prompt and agent library with creator, editor and automation features. Includes markdown and JSON export capabilities for seamless integration with AI workflows within platforms like Claude Code and n8n. Features include prompt versioning, categorization, search functionality, and collaborative editing for teams.',
    status: 'Planning',
    timeline: 'Expected Q2 2025',
    gallery: ['Library interface mockups coming soon...']
  }
};

function openModal(projectId) {
  const modalOverlay = document.getElementById('modal-overlay');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.querySelector('.modal-body');
  
  const projectData = MODAL_DATA[projectId];
  if (!projectData) return;

  // Populate modal content
  modalTitle.textContent = projectData.title;
  
  // Add subtitle for project type
  const modalSubtitle = document.querySelector('.modal-subtitle');
  if (modalSubtitle) {
    if (projectData.type === 'reel') {
      modalSubtitle.textContent = 'Production Reel';
    } else if (projectData.type === 'work') {
      modalSubtitle.textContent = 'Project Case Study';
    } else {
      modalSubtitle.textContent = 'Upcoming Project';
    }
  }
  
  // Function to get animation class based on project ID
  function getAnimationClass(projectId) {
    switch(projectId) {
      case 'context-engineering':
        return 'modal-brand-shape';
      case 'ugc-stories':
        return 'modal-ugc-shape';
      case 'tv-film-brand':
        return 'modal-animation-shape';
      default:
        return 'modal-brand-shape';
    }
  }

  // Build modal content - handle YouTube videos or animated geometric shapes
  let mediaContent;
  
  if (projectData.video && projectData.video.includes('youtube.com/embed/')) {
    // YouTube video embed
    mediaContent = `
      <div class="modal-video-container">
        <iframe 
          class="modal-video" 
          src="${projectData.video}?autoplay=0&rel=0&modestbranding=1" 
          title="${projectData.title} - Video"
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen>
        </iframe>
      </div>
    `;
  } else {
    // Default animated geometric shapes
    const animationClass = getAnimationClass(projectId);
    
    // Generate shape layers based on animation type
    let shapeLayers = '';
    if (animationClass === 'modal-ugc-shape' || animationClass === 'modal-animation-shape') {
      // UGC and film shapes need 4 shape layers
      shapeLayers = `
        <div class="shape-layer shape-1"></div>
        <div class="shape-layer shape-2"></div>
        <div class="shape-layer shape-3"></div>
        <div class="shape-layer shape-4"></div>
      `;
    } else {
      // Default 3 shape layers for other animations
      shapeLayers = `
        <div class="shape-layer shape-1"></div>
        <div class="shape-layer shape-2"></div>
        <div class="shape-layer shape-3"></div>
      `;
    }
    
    mediaContent = `
      <div class="modal-geometric-animation ${animationClass}">
        ${shapeLayers}
      </div>
    `;
  }
  
  // Build tech stack
  const techStackHTML = projectData.techStack 
    ? `<div class="modal-tech-stack modal-section">
        <span class="modal-section-title">Tech Stack</span>
        <div class="tech-tags">
          ${projectData.techStack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
      </div>`
    : '';
  
  // Build project links
  const linksHTML = projectData.links 
    ? `<div class="modal-links modal-section">
        <span class="modal-section-title">Project Links</span>
        <div class="project-links-grid">
          ${projectData.links.map(link => `<a href="${link.url}" class="modal-project-link" target="_blank" rel="noopener">${link.label} <span class="link-arrow">↗</span></a>`).join('')}
        </div>
      </div>`
    : '';
  
  // Build details section (for upcoming projects)
  const detailsHTML = projectData.status 
    ? `<div class="modal-details">
        <div class="modal-status">
          <span class="modal-section-title">Status</span>
          <span class="status-badge status-${projectData.status.toLowerCase().replace(' ', '-')}">${projectData.status}</span>
        </div>
        <div class="modal-timeline">
          <span class="modal-section-title">Timeline</span>
          <div>${projectData.timeline}</div>
        </div>
      </div>`
    : '';

  modalBody.innerHTML = `
    <div class="modal-intro">
      <p class="modal-description">${projectData.description}</p>
    </div>
    <div class="modal-gallery">
      ${mediaContent}
    </div>
    <div class="modal-sections">
      ${techStackHTML}
      ${linksHTML}
      ${detailsHTML}
    </div>
  `;

  // Show modal
  modalOverlay.classList.add('active');
  modalOverlay.setAttribute('aria-hidden', 'false');
  state.modalOpen = true;
  state.currentProject = projectId;
  
  // Lock body scroll
  document.body.classList.add('no-scroll');
  
  // Focus management
  const closeButton = modalOverlay.querySelector('.modal-close');
  if (closeButton) {
    closeButton.focus();
  }
}

function closeModal() {
  const modalOverlay = document.getElementById('modal-overlay');
  
  modalOverlay.classList.remove('active');
  modalOverlay.setAttribute('aria-hidden', 'true');
  state.modalOpen = false;
  state.currentProject = null;
  
  // Unlock body scroll
  document.body.classList.remove('no-scroll');
  
  // Return focus to trigger element
  const triggerElement = document.querySelector(`[data-project="${state.currentProject}"] .project-button`);
  if (triggerElement) {
    triggerElement.focus();
  }
}

function initializeModals() {
  const projectCards = document.querySelectorAll('.project-card');
  const modalOverlay = document.getElementById('modal-overlay');
  const closeButton = modalOverlay?.querySelector('.modal-close');

  // Project card clicks - handle both upcoming projects and work/reels
  projectCards.forEach(card => {
    const projectButton = card.querySelector('.project-button');
    const externalLink = card.querySelector('.external-link');
    const projectId = card.getAttribute('data-project');
    
    // Handle upcoming project cards (with .project-button)
    if (projectButton && projectId) {
      projectButton.addEventListener('click', () => {
        openModal(projectId);
      });
    }
    
    // Handle work/reel project cards (with .external-link)
    if (externalLink && projectId) {
      externalLink.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(projectId);
      });
    }
  });

  // Close modal events
  if (closeButton) {
    closeButton.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });
  }


  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (state.modalOpen && e.key === 'Escape') {
      closeModal();
    }
  });
}

// ==========================================================================
// Chat System
// ==========================================================================

function initializeChatHistory() {
  // Use sessionStorage so chat history clears on new browser session/tab
  const saved = sessionStorage.getItem(CONFIG.STORAGE_KEYS.CHAT_HISTORY);
  if (saved) {
    try {
      state.chatHistory = JSON.parse(saved);
      renderChatHistory();
    } catch (e) {
      console.warn('Failed to load chat history:', e);
      state.chatHistory = [];
    }
  }
  
  // Always ensure we start with empty history for new visitors
  if (!state.chatHistory || state.chatHistory.length === 0) {
    state.chatHistory = [];
    renderChatHistory(); // This will show just the welcome message
  }
}

function saveChatHistory() {
  try {
    // Use sessionStorage so chat clears when browser session ends
    sessionStorage.setItem(CONFIG.STORAGE_KEYS.CHAT_HISTORY, JSON.stringify(state.chatHistory));
  } catch (e) {
    console.warn('Failed to save chat history:', e);
  }
}

function clearChatHistory() {
  try {
    // Clear both state and storage
    state.chatHistory = [];
    sessionStorage.removeItem(CONFIG.STORAGE_KEYS.CHAT_HISTORY);
    renderChatHistory(); // Re-render to show just the welcome message
    console.log('Chat history cleared');
  } catch (e) {
    console.warn('Failed to clear chat history:', e);
  }
}

function ensureFreshChatSession() {
  // This function ensures each new visitor gets a fresh chat experience
  // It's called on page load to clean up any lingering session data
  try {
    // Check if this is a genuine new session by looking for a session marker
    const sessionMarker = sessionStorage.getItem('portfolio-chat-session');
    
    if (!sessionMarker) {
      // This is a new session - clear any existing chat data and mark the session
      sessionStorage.removeItem(CONFIG.STORAGE_KEYS.CHAT_HISTORY);
      sessionStorage.setItem('portfolio-chat-session', Date.now().toString());
      state.chatHistory = [];
    }
  } catch (e) {
    console.warn('Failed to ensure fresh chat session:', e);
  }
}

function addMessage(content, isUser = false) {
  const message = {
    content,
    isUser,
    timestamp: Date.now()
  };
  
  state.chatHistory.push(message);
  saveChatHistory();
  renderMessage(message);
  
  // Scroll to bottom
  const messagesContainer = document.getElementById('chat-messages');
  if (messagesContainer) {
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }
}

function renderMessage(message) {
  const messagesContainer = document.getElementById('chat-messages');
  if (!messagesContainer) return;

  const messageElement = document.createElement('div');
  messageElement.className = `chat-message ${message.isUser ? 'user-message' : 'bot-message'}`;
  messageElement.innerHTML = `
    <div class="message-content">${escapeHtml(message.content)}</div>
  `;

  messagesContainer.appendChild(messageElement);
}

function renderChatHistory() {
  const messagesContainer = document.getElementById('chat-messages');
  if (!messagesContainer) return;

  // Clear existing messages except the welcome message
  const welcomeMessage = messagesContainer.querySelector('.bot-message');
  messagesContainer.innerHTML = '';
  if (welcomeMessage) {
    messagesContainer.appendChild(welcomeMessage);
  }

  state.chatHistory.forEach(message => {
    renderMessage(message);
  });
}

function showTypingIndicator() {
  const messagesContainer = document.getElementById('chat-messages');
  if (!messagesContainer) return;

  const typingElement = document.createElement('div');
  typingElement.className = 'chat-message bot-message loading';
  typingElement.innerHTML = `
    <div class="message-content">
      <div class="typing-indicator">
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
      </div>
    </div>
  `;

  messagesContainer.appendChild(typingElement);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
  
  return typingElement;
}

function hideTypingIndicator(element) {
  if (element && element.parentNode) {
    element.parentNode.removeChild(element);
  }
}

async function sendChatMessage(message) {
  if (!message.trim()) return;

  // Add user message
  addMessage(message, true);
  
  // Show typing indicator
  const typingIndicator = showTypingIndicator();
  
  try {
    const response = await fetch(CONFIG.CHAT_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: message,
        context: PORTFOLIO_CONTEXT,
        history: state.chatHistory.slice(-6) // Last 6 messages for context
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    // Hide typing indicator
    hideTypingIndicator(typingIndicator);
    
    // Add bot response
    addMessage(data.response, false);
    
  } catch (error) {
    console.error('Chat API error:', error);
    
    // Hide typing indicator
    hideTypingIndicator(typingIndicator);
    
    // Show error message
    addMessage('Sorry, I encountered an error. Please try again later.', false);
  }
}

function toggleChat() {
  const chatPanel = document.getElementById('chat-panel');
  const chatToggle = document.querySelector('.chat-toggle');
  
  if (!chatPanel || !chatToggle) return;

  state.chatOpen = !state.chatOpen;
  
  if (state.chatOpen) {
    chatPanel.classList.add('active');
    chatPanel.setAttribute('aria-hidden', 'false');
    chatToggle.setAttribute('aria-expanded', 'true');
    
    // Focus the input
    const chatInput = document.getElementById('chat-input');
    if (chatInput) {
      setTimeout(() => chatInput.focus(), 300);
    }
  } else {
    chatPanel.classList.remove('active');
    chatPanel.setAttribute('aria-hidden', 'true');
    chatToggle.setAttribute('aria-expanded', 'false');
  }
}

function initializeChat() {
  const chatToggle = document.querySelector('.chat-toggle');
  const chatClose = document.querySelector('.chat-close');
  const chatClear = document.querySelector('.chat-clear');
  const chatForm = document.getElementById('chat-form');
  const chatInput = document.getElementById('chat-input');

  // Ensure fresh session for new visitors
  ensureFreshChatSession();
  
  // Initialize chat history
  initializeChatHistory();

  // Toggle chat
  if (chatToggle) {
    chatToggle.addEventListener('click', toggleChat);
  }

  // Close chat
  if (chatClose) {
    chatClose.addEventListener('click', () => {
      if (state.chatOpen) {
        toggleChat();
      }
    });
  }

  // Clear chat history
  if (chatClear) {
    chatClear.addEventListener('click', () => {
      if (confirm('Clear chat history? This will remove all messages.')) {
        clearChatHistory();
      }
    });
  }

  // Send message
  if (chatForm && chatInput) {
    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const message = chatInput.value.trim();
      
      if (message && message.length <= CONFIG.MAX_MESSAGE_LENGTH) {
        sendChatMessage(message);
        chatInput.value = '';
      }
    });

    // Character limit feedback
    chatInput.addEventListener('input', () => {
      const length = chatInput.value.length;
      if (length > CONFIG.MAX_MESSAGE_LENGTH) {
        chatInput.value = chatInput.value.substring(0, CONFIG.MAX_MESSAGE_LENGTH);
      }
    });
  }

  // Close chat when clicking outside
  document.addEventListener('click', (e) => {
    const chatWidget = document.querySelector('.chat-widget');
    if (state.chatOpen && chatWidget && !chatWidget.contains(e.target)) {
      toggleChat();
    }
  });
}

// ==========================================================================
// Contact Form
// ==========================================================================

function initializeContactForm() {
  const contactForm = document.querySelector('.contact-form');
  const copyEmailButton = document.querySelector('.copy-email');
  
  // Copy email functionality
  if (copyEmailButton) {
    copyEmailButton.addEventListener('click', async () => {
      const email = 'hiya@creativecontext.studio';
      
      try {
        await navigator.clipboard.writeText(email);
        
        // Visual feedback
        const icon = copyEmailButton.querySelector('.copy-icon');
        const originalText = icon.textContent;
        icon.textContent = '✓';
        copyEmailButton.style.color = 'var(--success)';
        
        setTimeout(() => {
          icon.textContent = originalText;
          copyEmailButton.style.color = '';
        }, 2000);
        
      } catch (err) {
        console.warn('Failed to copy email:', err);
        // Fallback: select the email text
        const emailLink = document.querySelector('.contact-email');
        if (emailLink) {
          const range = document.createRange();
          range.selectNodeContents(emailLink);
          const selection = window.getSelection();
          selection.removeAllRanges();
          selection.addRange(range);
        }
      }
    });
  }

  // Form submission (mailto fallback)
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      // Let the default mailto: action handle the submission
      // In a real implementation, you might want to add form validation here
      const formData = new FormData(contactForm);
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');
      
      if (!name || !email || !message) {
        e.preventDefault();
        alert('Please fill in all fields.');
        return;
      }
      
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        e.preventDefault();
        alert('Please enter a valid email address.');
        return;
      }
    });
  }
}

// ==========================================================================
// Magnetic Star Cursor Tracking
// ==========================================================================

function initializeMagneticStar() {
  const star = document.querySelector('.animated-accent');
  if (!star) return;
  
  // Skip if user prefers reduced motion
  if (prefersReducedMotion()) return;
  
  let mouseX = 0;
  let mouseY = 0;
  let starX = 0;
  let starY = 0;
  
  // Get star's initial position
  const rect = star.getBoundingClientRect();
  const starCenterX = rect.left + rect.width / 2;
  const starCenterY = rect.top + rect.height / 2;
  
  // Mouse move handler
  function handleMouseMove(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }
  
  // Animation loop for smooth movement
  function animate() {
    const rect = star.getBoundingClientRect();
    const currentStarX = rect.left + rect.width / 2;
    const currentStarY = rect.top + rect.height / 2;
    
    // Calculate distance between mouse and star
    const deltaX = mouseX - currentStarX;
    const deltaY = mouseY - currentStarY;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    
    // Only apply magnetic effect within reasonable range
    if (distance < 300) {
      // Apply magnetic pull with dampening
      starX += (deltaX * CONFIG.MAGNETIC_STRENGTH);
      starY += (deltaY * CONFIG.MAGNETIC_STRENGTH);
      
      // Apply dampening for smooth movement
      starX *= CONFIG.MAGNETIC_DAMPENING;
      starY *= CONFIG.MAGNETIC_DAMPENING;
      
      // Limit maximum displacement
      const maxDistance = 25;
      const currentDistance = Math.sqrt(starX * starX + starY * starY);
      if (currentDistance > maxDistance) {
        const scale = maxDistance / currentDistance;
        starX *= scale;
        starY *= scale;
      }
      
      // Apply transform while preserving the existing color/rotation animation
      star.style.transform = `translate(${starX}px, ${starY}px)`;
    } else {
      // Gradually return to center when mouse is far
      starX *= 0.95;
      starY *= 0.95;
      star.style.transform = `translate(${starX}px, ${starY}px)`;
    }
    
    requestAnimationFrame(animate);
  }
  
  // Start tracking
  document.addEventListener('mousemove', handleMouseMove);
  animate();
}

// ==========================================================================
// Animations and Interactions
// ==========================================================================

function initializeAnimations() {
  // Initialize magnetic cursor tracking for star symbol
  initializeMagneticStar();
  
  // Intersection Observer for scroll-based animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe elements for scroll animations
  const animatedElements = document.querySelectorAll('.project-card');
  animatedElements.forEach(el => {
    if (!prefersReducedMotion()) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    }
    observer.observe(el);
  });
}

// ==========================================================================
// Utility Functions
// ==========================================================================

function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

// ==========================================================================
// Keyboard Navigation
// ==========================================================================

function initializeKeyboardNavigation() {
  // Focus trap for modals
  document.addEventListener('keydown', (e) => {
    if (state.modalOpen && e.key === 'Tab') {
      const modal = document.querySelector('.modal');
      if (!modal) return;
      
      const focusableElements = modal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      
      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  });

  // Skip link functionality
  const skipLink = document.querySelector('.skip-link');
  if (skipLink) {
    skipLink.addEventListener('click', (e) => {
      e.preventDefault();
      const main = document.getElementById('main');
      if (main) {
        main.focus();
        main.scrollIntoView();
      }
    });
  }
}

// ==========================================================================
// Performance Optimizations
// ==========================================================================

function initializePerformanceOptimizations() {
  // Lazy load images when they come into view
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));

  // Preload critical resources
  const preloadLinks = [
    { href: '/api/chat', as: 'fetch' }
  ];

  preloadLinks.forEach(link => {
    const linkElement = document.createElement('link');
    linkElement.rel = 'preload';
    linkElement.href = link.href;
    linkElement.as = link.as;
    document.head.appendChild(linkElement);
  });
}

// ==========================================================================
// Error Handling
// ==========================================================================

function initializeErrorHandling() {
  window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
    // In production, you might want to send errors to a logging service
  });

  window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
    // In production, you might want to send errors to a logging service
  });
}

// ==========================================================================
// Initialization
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  try {
    // Initialize all systems
    initializeTheme();
    initializeNavigation();
    initializeModals();
    initializeChat();
    initializeContactForm();
    initializeAnimations();
    initializeKeyboardNavigation();
    initializePerformanceOptimizations();
    initializeErrorHandling();
    
    console.log('Portfolio website initialized successfully');
  } catch (error) {
    console.error('Failed to initialize portfolio website:', error);
  }
});

// ==========================================================================
// Service Worker Registration (Optional)
// ==========================================================================

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

// ==========================================================================
// Contact Form Handling
// ==========================================================================

function initializeContactForm() {
  const contactForm = document.querySelector('.contact-form');
  const submitButton = document.querySelector('.form-submit');
  const copyEmailButton = document.querySelector('.copy-email');
  
  if (!contactForm || !submitButton) return;

  // Copy email functionality (merged for reliability)
  if (copyEmailButton) {
    copyEmailButton.addEventListener('click', async () => {
      const email = 'hiya@creativecontext.studio';
      try {
        await navigator.clipboard.writeText(email);
        const icon = copyEmailButton.querySelector('.copy-icon');
        const originalText = icon ? icon.textContent : '';
        if (icon) icon.textContent = '✓';
        copyEmailButton.style.color = 'var(--success)';
        setTimeout(() => {
          if (icon) icon.textContent = originalText;
          copyEmailButton.style.color = '';
        }, 2000);
      } catch (err) {
        console.warn('Failed to copy email:', err);
        const emailLink = document.querySelector('.contact-email');
        if (emailLink) {
          const range = document.createRange();
          range.selectNodeContents(emailLink);
          const selection = window.getSelection();
          if (selection) {
            selection.removeAllRanges();
            selection.addRange(range);
          }
        }
      }
    });
  }

  // Add loading state styles
  const originalButtonText = submitButton.textContent;
  
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const message = formData.get('message').trim();
    
    // Validate form data
    if (!name || !email || !message) {
      showFormFeedback('Please fill in all required fields.', 'error');
      return;
    }
    
    if (!isValidEmail(email)) {
      showFormFeedback('Please enter a valid email address.', 'error');
      return;
    }
    
    // Show loading state
    setButtonLoading(true);
    
    // Format the email content
    const emailSubject = `Portfolio Contact: ${name}`;
    const emailBody = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\n---\nSent from Creative Context Studio Portfolio`;
    
    // Create mailto link
    const mailtoLink = `mailto:hiya@creativecontext.studio?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Try to open email client
    try {
      window.location.href = mailtoLink;
      
      // Show success message after a short delay
      setTimeout(() => {
        showFormFeedback('Email client opened! Please send the message to complete your inquiry.', 'success');
        setButtonLoading(false);
        contactForm.reset();
      }, 1000);
      
    } catch (error) {
      console.error('Error opening email client:', error);
      showFormFeedback('Unable to open email client. Please email hiya@creativecontext.studio directly.', 'error');
      setButtonLoading(false);
    }
  });
  
  function setButtonLoading(loading) {
    if (loading) {
      submitButton.textContent = 'Sending...';
      submitButton.disabled = true;
      submitButton.style.opacity = '0.7';
    } else {
      submitButton.textContent = originalButtonText;
      submitButton.disabled = false;
      submitButton.style.opacity = '1';
    }
  }
  
  function showFormFeedback(message, type) {
    // Remove existing feedback
    const existingFeedback = document.querySelector('.form-feedback');
    if (existingFeedback) {
      existingFeedback.remove();
    }
    
    // Create feedback element
    const feedback = document.createElement('div');
    feedback.className = `form-feedback form-feedback-${type}`;
    feedback.textContent = message;
    
    // Insert after the form
    contactForm.parentNode.insertBefore(feedback, contactForm.nextSibling);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
      if (feedback.parentNode) {
        feedback.remove();
      }
    }, 5000);
  }
  
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}

// Initialize contact form when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initializeContactForm();
});
