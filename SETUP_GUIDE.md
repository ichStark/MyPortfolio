# Portfolio Website - Setup Guide

## 🚀 Quick Start (5 minutes)

Follow these steps to get your portfolio website up and running:

### Step 1: Install Dependencies

```bash
npm install
```

This will install all required packages:
- React 18.2.0
- TypeScript
- Vite
- Tailwind CSS
- Lucide React (icons)
- Framer Motion (animations)

### Step 2: Start Development Server

```bash
npm run dev
```

Your portfolio will be available at `http://localhost:5173`

### Step 3: Customize Your Content

Edit `src/data/portfolio.ts` to update all your personal information:

#### Personal Information
```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  tagline: "Your tagline",
  email: "your.email@example.com",
  phone: "your-phone",
  linkedin: "your-linkedin-url",
  github: "your-github-url",
  resumeUrl: "path-to-your-resume.pdf"
}
```

#### Add Your Projects
```typescript
export const projects = [
  {
    title: "Project Name",
    description: "Project description",
    tech: ["Tech1", "Tech2"],
    highlights: ["Achievement 1", "Achievement 2"],
    github: "github-url",
    demo: "demo-url",
    featured: true
  }
]
```

#### Update Experience
```typescript
export const experience = [
  {
    title: "Job Title",
    company: "Company Name",
    duration: "Start - End Date",
    location: "Location",
    type: "Full-time / Internship",
    achievements: ["Achievement 1", "Achievement 2"]
  }
]
```

### Step 4: Add Your Profile Picture (Optional)

Replace the placeholder in `src/components/Hero.tsx`:

1. Add your image to the `public` folder (e.g., `public/profile.jpg`)
2. Update the Hero component to use your image:

```tsx
<img 
  src="/profile.jpg" 
  alt={personalInfo.name}
  className="w-full h-full rounded-full object-cover"
/>
```

### Step 5: Build for Production

```bash
npm run build
```

The optimized build will be in the `dist` folder.

## 🎨 Customization Options

### Change Theme Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: {
    500: '#your-color',
    600: '#your-darker-color',
    // ... other shades
  }
}
```

### Modify Sections

All sections are in `src/components/`:
- `Hero.tsx` - Landing section
- `About.tsx` - About and education
- `Experience.tsx` - Work experience timeline
- `Projects.tsx` - Project showcase
- `Skills.tsx` - Technical skills
- `Certifications.tsx` - Certifications
- `Awards.tsx` - Awards and achievements
- `Publications.tsx` - Research publications
- `Contact.tsx` - Contact form
- `Footer.tsx` - Footer section

### Dark/Light Mode

The theme toggle is already implemented! The default is dark mode, but users can switch using the moon/sun icon in the navbar.

## 📦 Deployment Options

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Vercel will auto-detect Vite and deploy

### Deploy to Netlify

1. Build: `npm run build`
2. Drag and drop the `dist` folder to [netlify.com](https://netlify.com)

### Deploy to GitHub Pages

1. Install: `npm install --save-dev gh-pages`
2. Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/repository-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```
3. Run: `npm run deploy`

## 🐛 Troubleshooting

### Port Already in Use
If port 5173 is busy, Vite will automatically use another port.

### Dependencies Not Installing
Try:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
Make sure you're using Node.js 18 or higher:
```bash
node --version
```

## 📱 Features Included

✅ Responsive design (mobile, tablet, desktop)
✅ Dark/Light mode toggle
✅ Glassmorphism effects
✅ Smooth scroll animations
✅ SEO optimized
✅ Fast loading (Vite)
✅ Type-safe (TypeScript)
✅ Modern icons (Lucide React)
✅ Contact form
✅ Social media links
✅ Professional layout

## 🎯 Next Steps

1. **Add Analytics**: Integrate Google Analytics or Plausible
2. **Add Blog**: Create a blog section using Markdown
3. **Contact Form**: Connect form to EmailJS or FormSpree
4. **Resume Download**: Add your PDF resume to the public folder
5. **Add Animations**: Enhance with more Framer Motion animations
6. **SEO**: Add meta tags for better SEO
7. **Performance**: Optimize images and add lazy loading

## 💡 Tips

- Keep your content concise and impactful
- Use high-quality images
- Update your projects regularly
- Add quantifiable achievements (percentages, numbers)
- Keep the design clean and professional
- Test on different devices
- Get feedback from peers

## 📞 Support

If you encounter any issues:
1. Check the browser console for errors
2. Verify all data in `portfolio.ts` is correct
3. Make sure all dependencies are installed
4. Try clearing the cache: `npm run dev -- --force`

## 🌟 Making It Yours

This is your portfolio! Feel free to:
- Add new sections
- Change colors and fonts
- Modify animations
- Add more interactive elements
- Integrate with APIs
- Add a blog section
- Include testimonials

Happy coding! 🚀

