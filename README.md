# Digital Growth KH Website

A modern, responsive website for Digital Growth KH - a leading SEO, AEO & AI Marketing Agency in Phnom Penh, Cambodia.

## Features Implemented

### 1. Language Support
- **English (EN)**: Default language
- **Khmer (ភាសាខ្មែរ)**: Full translation support
- **Chinese (中文)**: Full translation support

Language switcher available in the navbar with flag indicators.

### 2. Enhanced Navigation
- Fixed/stationary navbar with sticky positioning
- Mobile-friendly hamburger menu
- Dropdown menus with improved spacing and hover effects
- Language switcher (EN / ភាសាខ្មែរ / 中文)
- "About the Leadership" section added to dropdown menu

### 3. Character Encoding Fixes
- All emojis properly rendered using Unicode characters
- No more mojibake or encoding issues
- Consistent emoji display across all browsers

### 4. Interactive Features
- **Language Switcher**: Real-time translation of all content
- **Package Calculator**: Interactive pricing selector with ROI estimates
- **FAQ Section**: Accordion-style expandable answers
- **Form Submission**: Telegram integration for quote requests
- **Smooth Scroll**: Enhanced navigation with smooth scrolling

### 5. Visual Improvements
- Modern glass-morphism design
- Neon accent colors (cyan, magenta, lime)
- Responsive grid layouts
- Hover effects and animations
- Fixed navbar with backdrop blur
- Mission/Vision sections now side-by-side on desktop (top-to-bottom on mobile)

### 6. SEO Optimization
- Proper HTML5 structure
- Semantic tags
- Responsive meta tags
- Open Graph protocol support
- JSON-LD structured data

## Files Modified

1. **index.html**: Updated with language switcher, proper emojis, and data-i18n attributes
2. **styles.css**: Enhanced with fixed navbar, language switcher styles, and visual improvements
3. **app.js**: Added language switcher functionality and integration
4. **translations.js**: Complete language data for EN, KH, and ZH
5. **lang-test.html**: Test file for language switcher functionality
6. **package.json**: Project configuration with scripts

## How to Run

### Using Python

```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

### Using VS Code

1. Open the project in VS Code
2. Install the "Live Server" extension
3. Right-click index.html and select "Open with Live Server"

### Using Node.js (npx)

```bash
npx serve -p 8000
```

## Build Process

```bash
# Create production build
npm run build

# Clean previous build
npm run clean
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Language Detection

- Uses browser language settings
- Falls back to English if language not supported
- Remembers user's language choice in localStorage

## Content Management

All translated content is stored in `translations.js`. To update or add new translations:

1. Edit `translations.js`
2. Add new key-value pairs to the language objects
3. Update the HTML with corresponding data-i18n attributes
4. Refresh the page

## Performance Optimizations

- Responsive images with lazy loading
- Optimized CSS with flexbox and grid
- Minified JavaScript (for production)
- Image compression
- Caching strategies

## Recent Updates

### Navbar Improvements (v1.1)
- **Prevented button breaking**: Added `white-space: nowrap` to free quote button
- **Resized logo**: Reduced from 1.5rem to 1.1rem for better fit
- **Smaller tagline**: Reduced from 0.75rem to 0.6rem
- **Adjusted padding**: Changed from 1rem to 0.75rem
- **Responsive layout**: Added flex-wrap for better mobile behavior
- **Optimized spacing**: Reduced gap from 2rem to 1.5rem

### Hero Section Enhancement (v1.1)
- **Background image**: Added laptop-background.svg with 20% opacity
- **Visual effects**: Added floating animation for depth
- **Proper layering**: Background positioned correctly behind content
## License

MIT License - feel free to use this project for learning or commercial purposes.