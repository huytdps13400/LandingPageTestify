# 🚀 Deployment Guide

## Vercel Deployment (Recommended)

### Method 1: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to production
npm run deploy:vercel
```

### Method 2: GitHub Integration
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically deploy on every push

### Method 3: Manual Upload
1. Build the project: `npm run build`
2. Upload the `dist` folder to Vercel

## Asset Issues Fix

The following configurations have been added to fix asset serving issues:

### 1. `vercel.json`
- SPA routing configuration
- Asset caching headers
- Proper redirects for client-side routing

### 2. `netlify.toml`
- Alternative configuration for Netlify
- Asset headers and redirects
- Build configuration

### 3. `public/_redirects`
- Fallback routing for SPAs
- Ensures all routes serve index.html

### 4. `.vercelignore`
- Excludes unnecessary files from deployment
- Optimizes build size

## Build Verification

Before deploying, verify your build:
```bash
npm run build
ls -la dist/assets/  # Should contain icon.png
```

## Environment Variables (if needed)
Create `.env.production` for production builds:
```
VITE_APP_TITLE=Community Tester
VITE_APP_DESCRIPTION=Streamline Your App Testing Process
```

## Troubleshooting

### Assets not loading
1. Check that `public/assets/icon.png` exists
2. Verify `dist/assets/icon.png` after build
3. Ensure proper caching headers in hosting platform

### 404 on page refresh
1. Verify `_redirects` file exists
2. Check hosting platform supports SPA routing
3. Ensure proper rewrites configuration

### Build failures
1. Clear node_modules: `rm -rf node_modules && npm install`
2. Check TypeScript errors: `npm run lint`
3. Verify all dependencies are installed

## Platform-Specific Notes

### Vercel
- Automatically detects Vite projects
- No additional configuration needed
- Uses `vercel.json` for custom routing

### Netlify
- Uses `netlify.toml` for configuration
- `_redirects` file provides fallback routing
- Build command: `npm run build`

### GitHub Pages
- Requires base URL configuration in `vite.config.ts`
- Use `npm run build` and deploy `dist` folder
- Enable GitHub Actions for automatic deployment

### Firebase Hosting
- Use Firebase CLI to deploy
- Configure `firebase.json` for SPA routing
- Build with `npm run build` first
