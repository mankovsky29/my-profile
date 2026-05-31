You are an expert Frontend Engineer and UI/UX Designer. Your task is to generate the complete code for a premium, highly professional personal portfolio website for a Senior Developer, Tech Lead, and Solutions Architect with extensive Azure certification and upcoming product ventures.

### 1. Architectural & Technical Constraints
- **Stack:** React using Tailwind CSS for styling. 
- **Deployment:** The site must be completely static (Jamstack/SPA style) with zero server-side dependencies. It must be perfectly optimized for static hosting (e.g., Azure Static Web Apps, GitHub Pages).
- **Output:** Provide clean, modular, and fully production-ready code. Ensure all icons are pulled from a standard library like `lucid-react` or inline SVGs. Do not use external image assets; use CSS effects, abstract SVG patterns, or clean typography placeholders instead.
- **Responsiveness:** Mobile-first architecture. Fluid layouts that adapt beautifully from small mobile screens to 4K displays.

### 2. UI/UX & Design Aesthetic
- **Theme:** Dark Mode by default with a high-quality "Dev-centric" aesthetic (subtle borders, monospace accents, deep grays/blacks with vibrant blue/cyan/violet highlights for interactive elements).
- **Light Theme Switcher:** Implement a fully functional light/dark mode toggle. The light theme must remain minimalistic, shifting to clean typography, soft grays, and ample whitespace (Swiss minimalist style).
- **Transitions:** Include smooth CSS transitions for theme toggling and hover states.

### 3. Website Structure & Navigation
Build a single-page scrolling application with a sticky navigation bar. Include the following structural sections:

- **Hero Section:** High-impact, creative but professional header introducing the profile (Tech Lead / Architect). Use a clean typewriter effect or subtle interactive micro-animation to give it a "creative developer" edge without being gaudy.
- **About / Core Expertise:** A scannable visual layout highlighting core strengths (e.g., Cloud Architecture, System Design, Scalable Web Systems, .NET/React ecosystem).
- **Azure Certifications Grid:** A distinct, sleek showcase of Microsoft Azure Certifications. Use clean cards with badge-like styling that dynamically adjust to the selected theme.
- **Products & Labs (UX-Optimized):** To elegantly handle a growing portfolio of upcoming apps/sites, implement a "Labs & Products" grid. 
  - *UX Strategy:* Present these as interactive "Product Cards".
  - *States:* Use explicit status tags ("Live", "Beta", "In Development") so the user immediately understands what is ready to test versus what is a conceptual preview. Include a short description, tech stack tags, and a link/placeholder action button.
- **Experience Timeline:** A minimalistic vertical or horizontal interactive timeline showing career progression.
- **Contact / Digital Footprint:** Clean footer or section with social links (GitHub, LinkedIn) and a copy-to-clipboard email utility button.

### 4. Code Generation Rules
- Write complete, un-truncated components. 
- Ensure all state hooks (like the theme toggle) work smoothly out of the box.
- Use Semantic HTML5 elements (`<nav>`, `<main>`, `<section>`, `<footer>`).
- Include brief inline comments explaining key layout choices or structural logic.