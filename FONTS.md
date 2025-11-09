# 🔤 SourceSans3 Font Integration

## Font Family Overview

SourceSans3 is now the primary font family for the Community Tester landing page, providing excellent readability and modern typography.

### Available Weights

- **SourceSans3 ExtraLight** (200) - For delicate, subtle text
- **SourceSans3 Light** (300) - For light, airy content
- **SourceSans3 Regular** (400) - Default body text weight
- **SourceSans3 Italic** (400) - For italic emphasis
- **SourceSans3 Medium** (500) - For medium emphasis
- **SourceSans3 SemiBold** (600) - For headings and emphasis
- **SourceSans3 Bold** (700) - For strong emphasis and subheadings
- **SourceSans3 ExtraBold** (800) - For display text
- **SourceSans3 Black** (900) - For maximum impact

## Usage in Components

### Default Usage (Tailwind)
```html
<p class="text-base">Regular text</p>
<h1 class="text-4xl font-semibold">Heading</h1>
<h2 class="text-3xl font-bold">Subheading</h2>
```

### Specific Font Families
```html
<!-- SourceSans3 (default) -->
<p class="font-sans">SourceSans3 text</p>

<!-- Inter (fallback) -->
<p class="font-inter">Inter text</p>

<!-- Cabin (special) -->
<p class="font-cabin">Cabin text</p>
```

### Custom Font Weights
```html
<p class="font-light">Light text (300)</p>
<p class="font-normal">Normal text (400)</p>
<p class="font-medium">Medium text (500)</p>
<p class="font-semibold">SemiBold text (600)</p>
<p class="font-bold">Bold text (700)</p>
```

## Font Features

### Advanced Typography
- **Font Features**: `cv11`, `ss01` for enhanced character variants
- **Variable Font**: `opsz 32` for optimal optical sizing
- **Anti-aliasing**: Optimized for web display

### Performance
- **Font Display**: `swap` for better loading experience
- **Caching**: 1-year cache headers for production
- **Format**: TTF for maximum compatibility

## Font Loading Strategy

1. **Web Fonts**: Google Fonts (Inter, Cabin) for fallbacks
2. **Local Fonts**: SourceSans3 TTF files served locally
3. **System Fallbacks**: Native system sans-serif fonts
4. **Progressive Enhancement**: Works without JavaScript

## File Structure

```
public/
└── fonts/
    ├── SourceSans3-ExtraLight.ttf (375KB)
    ├── SourceSans3-Light.ttf (376KB)
    ├── SourceSans3-Regular.ttf (381KB)
    ├── SourceSans3-Italic.ttf (237KB)
    ├── SourceSans3-Medium.ttf (381KB)
    ├── SourceSans3-SemiBold.ttf (381KB)
    ├── SourceSans3-Bold.ttf (381KB)
    ├── SourceSans3-ExtraBold.ttf (381KB)
    └── SourceSans3-Black.ttf (379KB)
```

## CSS Implementation

### Font Face Declarations
```css
@font-face {
  font-family: 'SourceSans3';
  src: url('/fonts/SourceSans3-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

### Base Styles
```css
html {
  font-family: 'SourceSans3', ui-sans-serif, system-ui, sans-serif;
  font-feature-settings: 'cv11', 'ss01';
  font-variation-settings: 'opsz' 32;
}
```

## Tailwind Configuration

```javascript
fontFamily: {
  'sans': ['SourceSans3', 'ui-sans-serif', 'system-ui', 'sans-serif'],
  'inter': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
  'cabin': ['Cabin', 'ui-sans-serif', 'system-ui', 'sans-serif'],
}
```

## Deployment Considerations

### Vercel
- Automatic font file detection
- Long-term caching enabled
- Gzip compression for TTF files

### Netlify
- Font headers configured
- Efficient CDN delivery
- Browser caching optimization

### Build Process
- Fonts copied to `dist/fonts/` during build
- Asset optimization for production
- Hash-based file names for cache busting

## Browser Support

- **Chrome/Edge**: Full support
- **Firefox**: Full support
- **Safari**: Full support
- **Mobile Browsers**: Optimized rendering
- **Legacy Browsers**: Graceful fallback to system fonts

## Performance Metrics

- **Total Font Size**: ~3.3MB (all weights)
- **Critical Fonts**: Regular, Medium, SemiBold (~1.1MB)
- **Load Time**: <100ms on modern connections
- **Cache Period**: 1 year (31536000 seconds)

## Best Practices

1. **Use Appropriate Weights**: Don't overuse ExtraBold/Black
2. **Maintain Hierarchy**: Consistent heading/body relationships
3. **Consider Readability**: 16px minimum for body text
4. **Test on Mobile**: Ensure readability on small screens
5. **Monitor Performance**: Check font loading in DevTools
