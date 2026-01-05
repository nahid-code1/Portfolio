# Jackson Clark - Portfolio Website

A modern, responsive portfolio website built with React.js, Tailwind CSS, and Framer Motion. Features smooth animations, dark/light theme toggle, and a complete project showcase.

## 🚀 Live Demo

Visit the live portfolio: [Your Portfolio URL]

## ✨ Features

- **Responsive Design** - Works perfectly on all devices
- **Dark/Light Theme** - Toggle with persistent storage
- **Smooth Animations** - Framer Motion powered animations
- **Smooth Scrolling** - Lenis integration for buttery smooth scrolling
- **Project Showcase** - Detailed project pages with galleries
- **Contact Form** - Ready-to-connect contact section
- **SEO Optimized** - Meta tags and semantic HTML
- **Performance Optimized** - Fast loading and smooth interactions

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Scrolling**: Lenis Smooth Scroll
- **Notifications**: React Hot Toast
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Syne & Space Grotesk)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `src/components/HeroContent.jsx` - Name, title, description
- `src/components/About.jsx` - About me content
- `src/components/Contact.jsx` - Contact information
- `src/components/Footer.jsx` - Footer details

### Projects
Add your projects in `src/pages/ProjectDetails.jsx`:
```javascript
const projectsData = {
  1: {
    title: "Your Project Title",
    description: "Project description",
    technologies: ["React", "Node.js"],
    // ... other project details
  }
}
```

### Colors & Styling
Modify colors in `tailwind.config.js`:
```javascript
colors: {
  primary: "#F3C96B",           // Your brand color
  "primary-dark": "#d9b35e",   // Darker variant
  // ... other colors
}
```

### Social Links
Update social media links in:
- `src/components/SocialLinks.jsx`
- `src/components/Contact.jsx`
- `src/components/Footer.jsx`

## 📁 Project Structure

```
src/
├── components/
│   ├── About.jsx           # About section
│   ├── Contact.jsx         # Contact form & info
│   ├── Education.jsx       # Education timeline
│   ├── Experience.jsx      # Work experience
│   ├── Footer.jsx          # Footer component
│   ├── Hero.jsx            # Hero section
│   ├── HeroContent.jsx     # Hero text content
│   ├── HeroImage.jsx       # Hero image with animation
│   ├── Logo.jsx            # Logo component
│   ├── Navbar.jsx          # Navigation bar
│   ├── NavigationLinks.jsx # Navigation links
│   ├── Projects.jsx        # Projects grid
│   ├── Skills.jsx          # Skills section
│   ├── SocialLinks.jsx     # Social media links
│   └── ThemeToggle.jsx     # Theme switcher
├── pages/
│   └── ProjectDetails.jsx  # Individual project pages
├── App.jsx                 # Main app component
├── main.jsx               # Entry point
└── index.css              # Global styles
```

## 🎯 Sections

1. **Hero** - Introduction with animated profile image
2. **About** - Personal story and statistics
3. **Skills** - Technical skills with progress bars
4. **Education** - Educational background timeline
5. **Experience** - Professional experience cards
6. **Projects** - Portfolio showcase with detail pages
7. **Contact** - Contact form and information
8. **Footer** - Links and additional information

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Deploy: `npm run deploy`

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Adding New Sections
1. Create component in `src/components/`
2. Add to `src/App.jsx`
3. Update navigation in `src/components/NavigationLinks.jsx`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Framer Motion](https://www.framer.com/motion/) for animations
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Lenis](https://lenis.studiofreight.com/) for smooth scrolling
- [Unsplash](https://unsplash.com/) for placeholder images
- [Font Awesome](https://fontawesome.com/) for icons

## 📞 Contact

Jackson Clark - [jackson.clark@email.com](mailto:jackson.clark@email.com)

Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)

---

⭐ Star this repository if you found it helpful!