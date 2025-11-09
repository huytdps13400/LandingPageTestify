# Community Tester - Marketing Landing Page

A professional, responsive marketing landing site for the Community Tester App, built with Vite, React, TypeScript, and modern web technologies.

## 🚀 Features

### Core Functionality
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **React Router v6**: Client-side routing for `/`, `/policy`, and `/terms`
- **GSAP Animations**: Smooth scroll-triggered animations with performance fallbacks
- **DOMPurify Integration**: Secure HTML rendering for legal pages
- **SEO Optimized**: Meta tags, Open Graph, and structured content

### Design & UX
- **Hero Section**: Eye-catching gradient background with phone mockups
- **Features Section**: Comprehensive feature showcase with scroll animations
- **Testimonials**: Carousel with real user reviews and community stats
- **CTA Section**: Prominent call-to-action with micro-interactions
- **Footer**: Complete with social links, legal pages, and newsletter signup

### Performance & Accessibility
- **Lazy Loading**: Images load as needed for better performance
- **Performance Detection**: Animations disabled on low-end devices
- **Accessibility**: Semantic HTML, ARIA labels, and keyboard navigation
- **Bundle Optimization**: Code splitting and tree-shaking

## 🛠 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Animations**: GSAP + ScrollTrigger
- **Security**: DOMPurify for HTML sanitization
- **Deployment**: Vercel/Netlify ready

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup
```bash
# Clone the repository
git clone <repository-url>
cd community-tester-landing

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:3000`

## 🏗 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Main hero section
│   ├── Features.tsx    # Features showcase
│   ├── Testimonials.tsx # User testimonials
│   ├── CTA.tsx         # Call-to-action section
│   ├── Footer.tsx      # Site footer
│   └── PhoneMockup.tsx # Device mockup component
├── pages/              # Route components
│   ├── Home.tsx        # Landing page
│   ├── Policy.tsx      # Privacy policy page
│   └── Terms.tsx       # Terms of service page
├── types/              # TypeScript definitions
├── constants/          # Application constants
│   └── html.ts         # Policy/Terms HTML content
├── styles/             # Global styles
│   └── index.css       # Tailwind + custom CSS
└── main.tsx            # Application entry point
```

## 🔧 Configuration

### Tailwind CSS
The project uses a custom Tailwind configuration with:
- Primary color: `#2B6CB0` (blue)
- Inter font family as default
- Custom animations and utilities

### Vite Configuration
- Path aliases configured (`@` → `src`)
- Code splitting for optimal bundles
- Performance optimizations enabled

### Environment Variables
Create a `.env` file for any environment-specific configuration:
```env
VITE_APP_URL=https://your-domain.com
VITE_API_URL=https://api.your-domain.com
```

## 🎨 DOMPurify Integration

### How HTML Content is Sanitized

The Policy and Terms pages use a secure approach for rendering HTML content:

1. **Content Storage**: HTML content is stored in `src/constants/html.ts`
2. **Sanitization**: DOMPurify sanitizes content before rendering
3. **Safe Rendering**: Uses `dangerouslySetInnerHTML` with sanitized content

### Example Implementation

```typescript
// src/constants/html.ts
export const HTML_POLICY = `
<div class="prose prose-lg max-w-none">
  <h1>Privacy Policy</h1>
  <!-- Your HTML content here -->
</div>
`

// src/pages/Policy.tsx
import DOMPurify from 'dompurify'
import { HTML_POLICY } from '../constants/html'

const Policy: React.FC = () => {
  const sanitizedContent = DOMPurify.sanitize(HTML_POLICY)
  
  return (
    <div 
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
    />
  )
}
```

### Security Features
- **XSS Prevention**: All HTML is sanitized before rendering
- **Trusted Content**: Only sanitized, pre-approved content is rendered
- **No User Input**: Policy/terms content is hardcoded, not user-generated

## 🎬 GSAP Animations

### Animation Features
- **ScrollTrigger**: Animations activate as elements enter viewport
- **Performance Fallbacks**: Disabled on low-end devices and prefers-reduced-motion
- **Staggered Animations**: Multiple elements animate in sequence
- **Parallax Effects**: Hero section background parallax

### Animation Examples

#### Hero Phone Mockups
```typescript
// Phone mockups animate in with rotation and stagger
useEffect(() => {
  gsap.to(phoneElement, {
    opacity: 1,
    y: 0,
    rotation: -8,
    duration: 1,
    delay: 0.5,
    ease: "back.out(1.2)"
  })
}, [])
```

#### Scroll-Triggered Features
```typescript
// Features fade up as they enter viewport
gsap.fromTo(featureCards, {
  opacity: 0,
  y: 50,
  scale: 0.9
}, {
  opacity: 1,
  y: 0,
  scale: 1,
  duration: 0.6,
  stagger: 0.1,
  scrollTrigger: {
    trigger: featuresContainer,
    start: 'top 70%'
  }
})
```

### Performance Considerations
- Animations are disabled when `document.body.classList.contains('animations-disabled')`
- Hardware concurrency detection for low-performance devices
- Prefers-reduced-motion media query support

## 🚀 Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Development Guidelines
- **TypeScript**: Strict mode enabled, use proper type definitions
- **Components**: Functional components with hooks
- **Styling**: Tailwind utilities preferred, custom CSS for complex cases
- **Animations**: Use GSAP for complex animations, CSS for simple ones
- **Performance**: Lazy load images, optimize bundles, consider performance

## 🌐 Deployment

### Vercel Deployment
1. Push code to GitHub/GitLab
2. Connect repository to Vercel
3. Build settings:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Environment Variables: Add any required env vars
5. Deploy automatically on push

### Netlify Deployment
1. Build command: `npm run build`
2. Publish directory: `dist`
3. Node version: 18 or higher
4. Environment variables in Netlify dashboard

### Manual Deployment
```bash
# Build the project
npm run build

# The dist/ folder contains the built files
# Deploy the contents of dist/ to your hosting provider
```

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

### Mobile-First Approach
- Base styles target mobile devices
- Progressive enhancement for larger screens
- Touch-optimized interactions
- Optimized typography scaling

## ♿ Accessibility

### Features
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **ARIA Labels**: Screen reader support for interactive elements
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Visible focus indicators
- **Color Contrast**: WCAG AA compliant color combinations

### Testing Accessibility
```bash
# Use browser dev tools or automated tools
npm run build
npm run preview
# Test with screen readers and keyboard navigation
```

## 🔧 Customization

### Colors
Edit `tailwind.config.cjs` to change the color scheme:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#2B6CB0', // Change primary color
      },
    },
  },
}
```

### Content
- **Features**: Edit feature data in `src/components/Features.tsx`
- **Testimonials**: Update testimonials in `src/components/Testimonials.tsx`
- **Legal Content**: Modify HTML in `src/constants/html.ts`

### Styling
- Modify `src/index.css` for global styles
- Component-specific styles use Tailwind classes
- Custom animations defined in CSS

## 🐛 Troubleshooting

### Common Issues

**Build Errors**
- Ensure Node.js 18+ is installed
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`

**GSAP Animations Not Working**
- Check browser console for errors
- Verify ScrollTrigger is registered
- Ensure animations aren't disabled for performance

**Images Not Loading**
- Verify image paths are correct
- Check that assets are in public/ or src/assets/
- Ensure proper MIME types on server

**Routing Issues (404s)**
- Configure server for SPA routing
- Add redirects for /policy and /terms routes

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For questions or support:
- Email: support@communitytester.app
- Documentation: [Link to docs]
- GitHub Issues: [Link to issues]

---

**Built with ❤️ for the developer community**
