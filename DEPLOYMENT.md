# Deployment Guide

## Quick Start

Your portfolio is now ready for deployment! The development server is running at `http://localhost:5174/`

## Pre-Deployment Checklist

### 1. Customize Content
- [ ] Update personal information in `src/components/HeroContent.jsx`
- [ ] Add your projects in `src/pages/ProjectDetails.jsx`
- [ ] Update contact information in `src/components/Contact.jsx`
- [ ] Replace social media links throughout components
- [ ] Add your actual profile image URL in `src/components/HeroImage.jsx`

### 2. Test Everything
- [ ] Test all navigation links
- [ ] Verify theme toggle works
- [ ] Check mobile responsiveness
- [ ] Test project detail pages
- [ ] Verify contact form UI
- [ ] Test smooth scrolling

### 3. Build for Production
```bash
npm run build
```

## Deployment Options

### Option 1: Vercel (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Deploy automatically

### Option 2: Netlify
1. Build the project: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `dist` folder
4. Your site is live!

### Option 3: GitHub Pages
1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

### Option 4: Firebase Hosting
1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Initialize Firebase:
   ```bash
   firebase init hosting
   ```

3. Build and deploy:
   ```bash
   npm run build
   firebase deploy
   ```

## Environment Variables

Create a `.env` file for production:
```env
VITE_APP_TITLE="Your Name - Portfolio"
VITE_CONTACT_EMAIL="your.email@example.com"
VITE_GITHUB_URL="https://github.com/yourusername"
```

## Performance Optimization

### Image Optimization
- Compress images using [TinyPNG](https://tinypng.com/)
- Use WebP format for better compression
- Add lazy loading for images

### SEO Optimization
- Update meta tags in `index.html`
- Add Open Graph tags
- Create a sitemap.xml
- Add robots.txt

### Analytics (Optional)
Add Google Analytics to `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

## Custom Domain Setup

### For Vercel:
1. Go to your project dashboard
2. Click "Domains"
3. Add your custom domain
4. Update DNS records as instructed

### For Netlify:
1. Go to Site Settings > Domain Management
2. Add custom domain
3. Update DNS records

## Troubleshooting

### Build Errors
- Check for missing dependencies: `npm install`
- Clear cache: `rm -rf node_modules package-lock.json && npm install`
- Check for TypeScript errors: `npm run type-check`

### Deployment Issues
- Ensure all environment variables are set
- Check build output in `dist` folder
- Verify all imports are correct
- Test production build locally: `npm run preview`

## Maintenance

### Regular Updates
- Update dependencies: `npm update`
- Check for security vulnerabilities: `npm audit`
- Test after updates: `npm run dev`

### Content Updates
- Projects: Update `src/pages/ProjectDetails.jsx`
- Skills: Modify `src/components/Skills.jsx`
- Experience: Edit `src/components/Experience.jsx`

## Support

If you encounter any issues:
1. Check the browser console for errors
2. Verify all dependencies are installed
3. Ensure Node.js version compatibility
4. Check the GitHub repository for updates

---

🎉 **Congratulations!** Your portfolio is ready to showcase your work to the world!