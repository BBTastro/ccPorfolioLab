# Creative Portfolio Website

A modern, accessible, and performant portfolio website built with vanilla HTML, CSS, and JavaScript. Features a clean monospace design inspired by shadcn/ui design tokens, with an AI-powered chatbot for visitor interaction.

## ✨ Features

- **Vanilla Stack**: Pure HTML, CSS, and JavaScript - no frameworks required
- **Modern Design**: Monospace typography with shadcn/ui inspired design tokens
- **AI Chatbot**: OpenAI-powered assistant that answers questions about your experience
- **Fully Accessible**: WCAG 2.1 compliant with keyboard navigation and screen reader support
- **Responsive Design**: Optimized for all screen sizes (320px to desktop)
- **Dark/Light Mode**: Automatic theme detection with manual toggle
- **Performance Optimized**: Minimal JavaScript, optimized assets, fast loading
- **SEO Ready**: Proper meta tags, semantic HTML, social media optimization

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ (for Vercel CLI and development)
- OpenAI API key
- Vercel account (for deployment)

### Local Development

1. **Clone and setup**
   ```bash
   git clone <your-repo>
   cd portfolio-website
   ```

2. **Install Vercel CLI** (if not already installed)
   ```bash
   npm install -g vercel
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   ```

   **Where to get your OpenAI API key:**
   - Visit [OpenAI API](https://platform.openai.com/api-keys)
   - Create an account or sign in
   - Generate a new API key
   - Copy the key to your `.env.local` file

4. **Start development server**
   ```bash
   vercel dev
   ```

   Your site will be available at `http://localhost:3000`

### Alternative: Static Development

If you don't need the AI chat functionality during development:

```bash
# Serve static files (any HTTP server works)
python -m http.server 8000
# or
npx serve .
```

## 📝 Content Customization

### 1. Personal Information

**Update the following locations with your information:**

**In `index.html`:**
- Line 6-8: Update title and meta description
- Line 14-16: Update Open Graph meta tags
- Line 21-24: Update Twitter meta tags
- Line 48: Update hero title and highlight text
- Line 52-57: Update hero description
- Line 59-66: Update skill chips
- Contact section (lines 280-320): Update email, location, social links

**In `script.js`:**
- Lines 25-60: Update `PORTFOLIO_CONTEXT` with your actual resume and cover letter content
- Line 280: Update email address for copy functionality

### 2. Work Portfolio & Reels

**In `index.html`, update the Work section (lines 120-180):**
```html
<article class="work-item" tabindex="0">
  <div class="work-content">
    <h3 class="work-title">Your Project Title</h3>
    <p class="work-description">Brief description of your project</p>
    <div class="work-tags">
      <span class="tag">Technology</span>
      <span class="tag">Used</span>
    </div>
  </div>
  <div class="work-link">
    <a href="https://your-project-url.com" class="external-link">
      <span class="link-text">View Project</span>
      <span class="link-icon" aria-hidden="true">↗</span>
    </a>
  </div>
</article>
```

**Update the Reels section (lines 190-230):**
```html
<article class="reel-item" tabindex="0">
  <div class="reel-thumbnail">
    <div class="reel-placeholder" aria-hidden="true">▶</div>
  </div>
  <div class="reel-content">
    <h3 class="reel-title">Your Reel Title</h3>
    <p class="reel-description">Brief description of your reel</p>
  </div>
  <a href="https://your-reel-url.com" class="reel-link">
    <span class="link-icon" aria-hidden="true">↗</span>
  </a>
</article>
```

### 3. Upcoming Projects

**In `script.js`, update the `MODAL_DATA` object (lines 70-95):**
```javascript
const MODAL_DATA = {
  'project-id': {
    title: 'Your Project Title',
    description: 'Detailed project description...',
    status: 'In Development', // or 'Planning', 'Concept'
    timeline: 'Expected completion date',
    gallery: ['Asset descriptions or URLs']
  }
};
```

**In `index.html`, update project cards to match your project IDs.**

### 4. AI Chat Context

**Update the AI chatbot knowledge base in `script.js` (lines 25-60):**

Replace the `PORTFOLIO_CONTEXT` variable with your actual resume and cover letter content:

```javascript
const PORTFOLIO_CONTEXT = `
RESUME SUMMARY:
[Paste your resume summary here]

KEY SKILLS:
[List your key skills]

EXPERIENCE HIGHLIGHTS:
[Paste your key experience points]

COVER LETTER EXCERPT:
[Paste relevant cover letter content]

AVAILABILITY: [Your availability status]
LOCATION: [Your location]
`;
```

## 🚀 Deployment

### Deploy to Vercel

1. **Connect your repository to Vercel:**
   ```bash
   vercel
   ```

2. **Set environment variables in Vercel:**
   - Go to your Vercel dashboard
   - Select your project
   - Go to Settings → Environment Variables
   - Add: `OPENAI_API_KEY` with your OpenAI API key

3. **Deploy:**
   ```bash
   vercel --prod
   ```

### Alternative Deployment Options

**Netlify:**
1. Connect your Git repository to Netlify
2. Set build command: `echo "Static site - no build needed"`
3. Set publish directory: `/`
4. Add environment variable: `OPENAI_API_KEY`

**GitHub Pages (without AI chat):**
1. Push to GitHub
2. Enable GitHub Pages in repository settings
3. AI chat won't work without serverless functions

## 🎨 Customization

### Design Tokens

All design tokens are defined in `styles.css` (lines 10-60). Customize:

```css
:root {
  /* Colors */
  --bg: #0b0b0c;
  --fg: #e7e7ea;
  --accent: #9ae6b4; /* Your brand color */
  
  /* Spacing */
  --space-4: 16px;
  
  /* Typography */
  --font-mono: 'Your-Preferred-Font', monospace;
}
```

### Adding New Sections

1. Add HTML structure in `index.html`
2. Add corresponding styles in `styles.css`
3. Update navigation in both HTML and JavaScript
4. Add any interactive functionality in `script.js`

## 🔧 Configuration

### OpenAI Chat Settings

Modify chat behavior in `api/chat.js`:

```javascript
const CONFIG = {
  OPENAI_MODEL: 'gpt-3.5-turbo', // or 'gpt-4'
  OPENAI_TEMPERATURE: 0.3, // 0-1, lower = more focused
  OPENAI_MAX_TOKENS: 300, // Response length limit
  MAX_REQUESTS_PER_MINUTE: 10, // Rate limiting
};
```

### Performance Settings

Adjust performance settings in `script.js`:

```javascript
const CONFIG = {
  SCROLL_OFFSET: 80, // Navigation scroll offset
  SMOOTH_SCROLL_DURATION: 1000, // Scroll animation duration
  MAX_MESSAGE_LENGTH: 500, // Chat message limit
};
```

## 🧪 Testing

### Accessibility Testing

1. **Keyboard Navigation**: Tab through all interactive elements
2. **Screen Reader**: Test with NVDA, JAWS, or VoiceOver
3. **Color Contrast**: Ensure 4.5:1 ratio minimum
4. **Focus Indicators**: Verify visible focus states

### Performance Testing

```bash
# Lighthouse audit
npx lighthouse http://localhost:3000 --output html

# Bundle size analysis
npx bundlesize
```

### Browser Testing

Test in:
- Chrome/Edge (Chromium)
- Firefox
- Safari
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Troubleshooting

### Common Issues

**Chat not working:**
- Verify `OPENAI_API_KEY` is set correctly
- Check browser console for API errors
- Ensure Vercel functions are deployed

**Styles not loading:**
- Check file paths are correct
- Verify CSS file exists and is accessible
- Check for CSS syntax errors

**JavaScript errors:**
- Open browser developer tools
- Check console for error messages
- Verify all script dependencies are loaded

**Mobile responsiveness:**
- Test on actual devices
- Use browser developer tools device simulation
- Check viewport meta tag is present

## 📚 Resources

- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [OpenAI API Documentation](https://platform.openai.com/docs)
- [Vercel Deployment Guide](https://vercel.com/docs)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

**Need help?** Open an issue or contact [your-email@domain.com]