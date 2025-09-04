I'm working with an agentic coding boilerplate project that includes authentication, database integration, and AI capabilities. Here's what's already set up:

## Current Agentic Coding Boilerplate Structure

- **Authentication**: Better Auth with Google OAuth integration
- **Database**: Drizzle ORM with PostgreSQL setup
- **AI Integration**: Vercel AI SDK with OpenAI integration
- **UI**: shadcn/ui components with Tailwind CSS
- **Current Routes**:
  - `/` - Home page with setup instructions and feature overview
  - `/dashboard` - Protected dashboard page (requires authentication)
  - `/chat` - AI chat interface (requires OpenAI API key)

## Important Context

This is an **agentic coding boilerplate/starter template** - all existing pages and components are meant to be examples and should be **completely replaced** to build the actual AI-powered application.

### CRITICAL: You MUST Override All Boilerplate Content

**DO NOT keep any boilerplate components, text, or UI elements unless explicitly requested.** This includes:

- **Remove all placeholder/demo content** (setup checklists, welcome messages, boilerplate text)
- **Replace the entire navigation structure** - don't keep the existing site header or nav items
- **Override all page content completely** - don't append to existing pages, replace them entirely
- **Remove or replace all example components** (setup-checklist, starter-prompt-modal, etc.)
- **Replace placeholder routes and pages** with the actual application functionality

### Required Actions:

1. **Start Fresh**: Treat existing components as temporary scaffolding to be removed
2. **Complete Replacement**: Build the new application from scratch using the existing tech stack
3. **No Hybrid Approach**: Don't try to integrate new features alongside existing boilerplate content
4. **Clean Slate**: The final application should have NO trace of the original boilerplate UI or content

The only things to preserve are:

- **All installed libraries and dependencies** (DO NOT uninstall or remove any packages from package.json)
- **Authentication system** (but customize the UI/flow as needed)
- **Database setup and schema** (but modify schema as needed for your use case)
- **Core configuration files** (next.config.ts, tsconfig.json, tailwind.config.ts, etc.)
- **Build and development scripts** (keep all npm/pnpm scripts in package.json)

## Tech Stack

- Next.js 15 with App Router
- TypeScript
- Tailwind CSS
- Better Auth for authentication
- Drizzle ORM + PostgreSQL
- Vercel AI SDK
- shadcn/ui components
- Lucide React icons

## Component Development Guidelines

**Always prioritize shadcn/ui components** when building the application:

1. **First Choice**: Use existing shadcn/ui components from the project
2. **Second Choice**: Install additional shadcn/ui components using `pnpm dlx shadcn@latest add <component-name>`
3. **Last Resort**: Only create custom components or use other libraries if shadcn/ui doesn't provide a suitable option

The project already includes several shadcn/ui components (button, dialog, avatar, etc.) and follows their design system. Always check the [shadcn/ui documentation](https://ui.shadcn.com/docs/components) for available components before implementing alternatives.

## What I Want to Build

You are a creative director, senior front-end engineer and brand designer. Build a quirky, on-brand, single-page portfolio website that distills the provided resume and cover letter into a clean, modern, monochrome-leaning aesthetic with tasteful CSS animations and a “shadcn/ui”-inspired design language (tokens, spacing, radius, surfaces). Use only vanilla HTML, CSS, and JavaScript for the front end. Use a Vercel serverless function to proxy the OpenAI API (no API key on the client). Deliver production-ready code and a short README with deploy steps.

Inputs:

- RESUME: [PASTE FULL RESUME HERE]
- COVER_LETTER: [PASTE FULL COVER LETTER HERE]
- LINKS_TO_REELS_&_PAST_WORK: [will ADD URLS + short labels in later request - add placeholders for now]

- UPCOMING_PROJECTS: [ADD modal window with project name, 1–2 sentence blurb, status, optional asset URL]
- CONTACT: [email, calendly or contact form endpoint, location, social links]

Tech/constraints:

- Front end: vanilla HTML + CSS + JS (no frameworks)
- Hosting: Vercel
- Design: emulate shadcn/ui tokens without React/Tailwind; define CSS variables for radius, spacing, surface/foreground colors, shadows; prefer a monospaced primary typeface (e.g., “IBM Plex Mono”, “JetBrains Mono”, or “Space Mono”)
- Animations: subtle and quirky; avoid performance-heavy effects; prefer transform/opacity; respect reduced-motion
- Accessibility: Light / Dark Mode, keyboard navigable, semantic HTML, focus states, sufficient contrast
- Performance: minimal JS, defer scripts, compress assets; responsive from 320px→desktop
- SEO: basic meta tags, social share image, sensible titles

Required features/sections:

1. Sticky top navigation with anchors to: About, Work, Reels, Projects, Contact. Sizing and spacing influenced by shadcn tokens. Hover/focus micro-interactions.
2. Hero/About: distilled summary synthesized from RESUME + COVER_LETTER (tone: confident, witty, concise). Include a quirky animated accent (subtle CSS keyframe, no parallax).
3. Work & Reels:
    - Grid/list of LINKS_TO_PAST_WORK and REELS with thumbnails or badges.
    - Each item has a short label, description tooltip/hover card, external link icon, and keyboard-focusable cards.
4. Upcoming Projects “Showcase”:
    - Responsive card grid.
    - Clicking a card opens a modal popup window (accessible dialog) with project details, gallery slot, and a “Follow/Notify” placeholder CTA.
    - Support multiple modals; ESC/overlay click closes; trap focus; restore focus on close.
5. AI Chatbot:
    - Floating chat widget (bottom-right) with a toggle button; opens a panel with messages, input box, and send action.
    - The bot answers questions strictly about RESUME and COVER_LETTER (experience, skills, projects, achievements, availability) and should refuse unrelated topics.
    - Client sends user messages to a Vercel serverless endpoint `/api/chat` which calls OpenAI with system prompt + condensed context derived from RESUME + COVER_LETTER. Do not expose the API key in client code.
    - Maintain lightweight session context on the server by threading recent messages (small memory). On the client, persist minimal chat history in `localStorage` (opt-out for private mode).
    - Knowledge base to be updated in the future - for now use resume and cover letter.
6. Contact:
    - Prominent email CTA and small form (name, email, message) that submits via `mailto:` fallback. Include external links to socials. Add copyable email.
7. Footer: tiny, quiet, with back-to-top link; consistent tokens.

Deliverables (files and structure):

- index.html
- styles.css (define shadcn-like CSS variables: colors, spacing scale, radius, shadow, transition)
- script.js (nav interactions, modals, chatbot widget, reduced-motion support)
- api/chat.js (Vercel serverless function using OpenAI; read `OPENAI_API_KEY` from env; simple input validation; safe system prompt; small rolling context)
- public/ (any icons or social images)
- [README.md](http://readme.md/) (setup, env, run, deploy instructions)

Implementation details:

- Design tokens (example – adjust to a tasteful mono look):
:root {
--bg: #0b0b0c;
--fg: #e7e7ea;
--muted-fg: #b5b5bb;
--card: #111114;
--border: #2a2a30;
--accent: #9ae6b4; /* subtle quirky pop */
--radius-sm: 6px;
--radius-md: 10px;
--radius-lg: 16px;
--space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px; --space-6: 24px; --space-8: 32px;
--shadow-1: 0 1px 2px rgba(0,0,0,.3), 0 2px 8px rgba(0,0,0,.25);
--transition-1: 220ms cubic-bezier(.2,.8,.2,1);
}
    - Typography: system mono with fallback; tighter letter-spacing for headings; comfortable line-height for body.
    - Components: cards have gentle hover lift (translateY(-2px), shadow change); focus rings using `-accent`.
- Animations:
    - Respect `prefers-reduced-motion`. Provide a CSS class to disable animations.
    - Use keyframes for subtle background accent (e.g., animated dotted underline on headings, or a gentle rotating accent glyph).
- Modals:
    - Aria-compliant dialog with proper labelling, focus trap, scroll lock, ESC to close.
- Chatbot:
    - System prompt constrains scope to RESUME + COVER_LETTER. If asked unrelated questions, reply briefly and steer back.
    - Temperature low for factual answers; slightly higher for tone when summarizing.
    - Return streaming optional; if implemented, append tokens progressively.
    - Rate-limit basic (e.g., 1 msg/sec).
- Security:
    - Validate inputs on `/api/chat`. Strip HTML. Limit message length. No key in client.
- Content:
    - Synthesize an “About” paragraph (80–120 words) from RESUME + COVER_LETTER.
    - Extract key skills and achievements as compact chips/tags.
    - Summarize each WORK/REEL link to a single sentence tooltip/hover.
- Copy tone:
    - Crisp, witty, slightly quirky, confident, never cringy.

Acceptance criteria:

- Builds and runs locally with `vercel dev` or a simple static server + Vercel functions.
- No console errors; lighthouse reasonable on performance/accessibility.
- All links and modals keyboard accessible; focus states visible.
- Chatbot answers only from provided resume/cover; declines unrelated queries.
- Works well on mobile (≤360px) through desktop widths.

README must include:

- How to set `OPENAI_API_KEY`
- How to run locally and deploy to Vercel
- Where to paste RESUME/COVER in code (e.g., a `context.js` or constants section in `script.js` or `api/chat.js`)
- How to update LINKS_TO_PAST_WORK, REELS, UPCOMING_PROJECTS, CONTACT


## Request

Please help me transform this boilerplate into my actual application. **You MUST completely replace all existing boilerplate code** to match my project requirements. The current implementation is just temporary scaffolding that should be entirely removed and replaced.

## Final Reminder: COMPLETE REPLACEMENT REQUIRED

🚨 **IMPORTANT**: Do not preserve any of the existing boilerplate UI, components, or content. The user expects a completely fresh application that implements their requirements from scratch. Any remnants of the original boilerplate (like setup checklists, welcome screens, demo content, or placeholder navigation) indicate incomplete implementation.

**Success Criteria**: The final application should look and function as if it was built from scratch for the specific use case, with no evidence of the original boilerplate template.

## Post-Implementation Documentation

After completing the implementation, you MUST document any new features or significant changes in the `/docs/features/` directory:

1. **Create Feature Documentation**: For each major feature implemented, create a markdown file in `/docs/features/` that explains:

   - What the feature does
   - How it works
   - Key components and files involved
   - Usage examples
   - Any configuration or setup required

2. **Update Existing Documentation**: If you modify existing functionality, update the relevant documentation files to reflect the changes.

3. **Document Design Decisions**: Include any important architectural or design decisions made during implementation.

This documentation helps maintain the project and assists future developers working with the codebase.
