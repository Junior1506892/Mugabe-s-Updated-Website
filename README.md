# Gardens Website - Complete Multi-Page Site

A beautiful, fully responsive gardening website with dark/light theme toggle and separate pages for all content.

## 🌟 Features

### Core Features
- ✅ **Dark/Light Theme Toggle** - Persistent theme preference saved in localStorage
- ✅ **Fully Responsive Design** - Works perfectly on mobile, tablet, and desktop
- ✅ **Smooth Animations** - Fade-in effects and hover animations throughout
- ✅ **Accessibility** - WCAG compliant with skip links and ARIA labels
- ✅ **Modern Design** - Clean, professional aesthetic with custom fonts

### Pages Included

#### Main Navigation Pages
1. **index.html** - Homepage with hero section and feature preview
2. **boxes.html** - Subscription boxes with comparison table
3. **activities.html** - Expert advice and gardening activities
4. **gallery.html** - Community garden photo gallery
5. **about.html** - About us and why choose Gardens
6. **contact.html** - Contact form with validation

#### Resource Pages (Footer Links)
7. **monthly-checklist.html** - Seasonal gardening tasks
8. **plant-diary.html** - Plant tracking guide
9. **blog.html** - Blog articles and tips
10. **faq.html** - Frequently asked questions
11. **delivery-info.html** - Delivery process with visual guide

#### Legal Pages (Footer Links)
12. **privacy-policy.html** - Privacy information
13. **terms-of-service.html** - Terms and conditions
14. **shipping-policy.html** - Shipping information
15. **accessibility.html** - Accessibility statement
16. **cookie-policy.html** - Cookie usage policy

## 📁 File Structure

```
/
├── index.html              # Homepage
├── boxes.html              # Subscription boxes
├── activities.html         # Activities & advice
├── gallery.html            # Photo gallery
├── about.html              # About page
├── contact.html            # Contact form
├── delivery-info.html      # Delivery information
├── [9 more resource pages]
├── styles.css              # Main stylesheet
├── pages.css               # Additional page styles
├── script.js               # JavaScript functionality
└── README.md               # This file
```

## 🎨 Design System

### Color Palette

**Light Theme:**
- Primary Green: `#2d5016`
- Secondary Green: `#4a7c2c`
- Accent Terra: `#c67b5c`
- Accent Sage: `#9cad8c`
- Background: `#fefdfb`
- Text: `#3a2a1a`

**Dark Theme:**
- Primary Green: `#6fb33f`
- Secondary Green: `#8fd158`
- Accent Terra: `#ff9b7a`
- Background: `#1a1816`
- Text: `#e8e4dc`

### Typography
- **Headers:** Fraunces (Serif)
- **Body:** Karla (Sans-serif)

## 🚀 Getting Started

### Installation
1. Download all files to a folder
2. Open `index.html` in a web browser
3. No build process required - pure HTML/CSS/JS!

### Customization

#### Change Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-green: #2d5016;
    --secondary-green: #4a7c2c;
    /* Add your colors */
}
```

#### Add Content
- Edit HTML files directly
- Images are loaded from Unsplash (replace URLs as needed)
- Form submissions are handled in `script.js`

## 🌙 Theme Toggle

The theme toggle button is fixed in the top-right corner:
- Click to switch between light and dark modes
- Preference is saved in browser localStorage
- Theme persists across page refreshes

## 📱 Responsive Breakpoints

- **Mobile:** < 640px
- **Tablet:** 641px - 968px  
- **Desktop:** > 969px

## ✨ Special Features

### Delivery Info Page
- Visual process guide with numbered steps
- Delivery time illustrations
- Region-specific information

### Subscription Boxes
- Comparison table for all box types
- Subscribe buttons with modal popups
- Custom box inquiry option

### Contact Form
- Form validation
- Success message animation
- Multiple inquiry types

### Gallery
- Hover overlays with member information
- Responsive grid layout
- Image zoom on hover

## 🔧 JavaScript Features

### Implemented Functionality
- Theme toggle with localStorage
- Mobile menu toggle
- Smooth scrolling to anchors
- Form validation and submission
- Intersection observer animations
- Subscribe button modals
- Active nav link highlighting

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Customization Tips

### Adding New Pages
1. Copy an existing page HTML
2. Update the title and content
3. Add link in footer/navigation
4. Ensure script.js is included

### Changing Images
Replace image URLs in HTML:
```html
<img src="YOUR-IMAGE-URL" alt="Description">
```

### Modifying Forms
Edit form fields in `contact.html` and handle submission in `script.js`

## 🎯 SEO & Performance

- Semantic HTML5 markup
- Optimized images with lazy loading
- Meta descriptions on all pages
- Fast load times (no dependencies)
- Mobile-friendly responsive design

## 🔒 Accessibility Features

- Skip to main content links
- ARIA labels and roles
- Keyboard navigation support
- High contrast mode support
- Reduced motion support
- Focus indicators

## 📧 Contact Form Integration

To connect the contact form to a backend:

1. Update `script.js` form handler
2. Replace `console.log()` with actual POST request
3. Example with fetch:
```javascript
fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {'Content-Type': 'application/json'}
})
```

## 🎨 Design Philosophy

This website follows modern web design principles:
- Clean, minimalist aesthetic
- Generous whitespace
- Consistent spacing system
- Thoughtful color palette
- Typography hierarchy
- Smooth animations
- Mobile-first approach

## 📚 Additional Resources

- Google Fonts: Fraunces & Karla
- Unsplash for placeholder images
- Pure CSS animations (no libraries)

## 🐛 Known Issues & Limitations

- Forms don't actually submit (demo only)
- Subscribe buttons show modal (not connected to backend)
- Some resource pages have placeholder content
- Images loaded from external CDNs

## 🔄 Future Enhancements

Potential additions:
- Blog post CMS integration
- User account system
- Payment processing
- Inventory management
- Email newsletter signup
- Advanced search
- Multi-language support

## 📄 License

This is a demonstration project. Customize freely for your needs.

## 💡 Credits

- Design & Development: Custom build
- Fonts: Google Fonts (Fraunces & Karla)
- Images: Unsplash & placeholder services

---

**Need Help?** All pages are fully functional HTML/CSS/JS with no build process required. Simply open index.html in any modern browser!
