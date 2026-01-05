# Portfolio Setup Guide

## Installation Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── components/
│   ├── About.jsx           # About me section with journey & stats
│   ├── Contact.jsx         # Contact form & information
│   ├── Education.jsx       # Education timeline
│   ├── Experience.jsx      # Work experience cards
│   ├── Footer.jsx          # Footer with links & social
│   ├── Hero.jsx            # Hero section wrapper
│   ├── HeroContent.jsx     # Hero text & CTA buttons
│   ├── HeroImage.jsx       # Animated profile image
│   ├── Logo.jsx            # Brand logo component
│   ├── Navbar.jsx          # Navigation wrapper
│   ├── NavigationLinks.jsx # Nav links with mobile menu
│   ├── Projects.jsx        # Projects grid with filtering
│   ├── Skills.jsx          # Skills with progress bars
│   ├── SocialLinks.jsx     # Social media icons
│   └── ThemeToggle.jsx     # Dark/light mode toggle
├── pages/
│   └── ProjectDetails.jsx  # Individual project pages
├── App.jsx                 # Main app with routing
├── main.jsx               # React entry point
└── index.css              # Global styles & utilities
```

## Features Implemented

### ✅ Navigation
- Responsive navbar with smooth scroll
- Animated mobile menu
- Theme toggle with persistence

### ✅ Hero Section
- Professional designation & intro
- Animated profile image with orbiting elements
- Resume button with "coming soon" toast
- Dual CTA buttons (Portfolio & Resume)

### ✅ About Section
- Programming journey narrative
- Work interests & personality
- Statistics counter animation
- Scroll-triggered animations

### ✅ Skills Section
- Categorized skills (Frontend, Backend, Tools)
- Animated progress bars
- Card-based layout with icons

### ✅ Education Section
- Timeline layout with alternating cards
- Achievement badges
- Scroll animations

### ✅ Experience Section
- Professional experience cards
- Technology tags
- Achievement highlights

### ✅ Projects Section
- Featured project grid
- Project categories
- "View Details" navigation to individual pages

### ✅ Project Details Pages
- Comprehensive project information
- Tech stack display
- Live demo & GitHub links
- Challenges & future improvements
- Image gallery

### ✅ Contact Section
- Contact information cards
- Contact form (UI only)
- Social media links
- Animated entry effects

### ✅ Footer
- Quick navigation links
- Contact information
- Social media icons
- Back to top button

## Technologies Used

- **React 18** - Component-based UI
- **React Router** - Client-side routing
- **Framer Motion** - Smooth animations
- **Lenis** - Smooth scrolling
- **Tailwind CSS** - Utility-first styling
- **React Hot Toast** - Notifications
- **Font Awesome** - Icons
- **Google Fonts** - Typography (Syne & Space Grotesk)

## Design Features

- **Consistent Design Language** - Maintains existing color palette & typography
- **Smooth Animations** - Framer Motion for scroll-triggered animations
- **Responsive Design** - Mobile-first approach
- **Dark/Light Theme** - Persistent theme switching
- **Performance Optimized** - Lazy loading & optimized animations

## Customization

### Colors
Update colors in `tailwind.config.js`:
```javascript
colors: {
  primary: "#F3C96B",           // Golden yellow
  "primary-dark": "#d9b35e",   // Darker golden
  "background-light": "#F9FAFB", // Light background
  "background-dark": "#0f0f0f",  // Dark background
  // ... other colors
}
```

### Content
- Update personal information in component files
- Replace placeholder images with your own
- Modify project data in `ProjectDetails.jsx`
- Update social media links throughout components

### Animations
- Adjust animation timing in Framer Motion components
- Modify Lenis smooth scroll settings in `App.jsx`
- Customize CSS animations in `index.css`

## Production Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to your preferred platform**
   - Vercel: `vercel --prod`
   - Netlify: Drag & drop `dist` folder
   - GitHub Pages: Use GitHub Actions

## Next Steps

1. Replace placeholder content with your actual information
2. Add your real project images and data
3. Connect contact form to a backend service
4. Add Google Analytics or other tracking
5. Optimize images for better performance
6. Add more projects to the portfolio

## Support

The portfolio is built with modern React patterns and follows best practices for maintainability and performance. All animations respect user preferences for reduced motion, and the design is fully accessible.