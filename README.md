# Portfolio Website - Gautam Prasad Upadhyay

A modern, premium portfolio website built with React, TypeScript, and Tailwind CSS featuring a beautiful dark/light mode toggle, glassmorphism effects, and smooth animations.

## ✨ Features

- 🎨 **Modern Design**: Premium UI with glassmorphism effects and smooth animations
- 🌓 **Dark/Light Mode**: Seamless theme switching with persistent preferences
- 📱 **Fully Responsive**: Optimized for all devices from mobile to desktop
- ⚡ **Performance Optimized**: Fast load times and smooth interactions
- 🎯 **SEO Friendly**: Proper meta tags and semantic HTML
- 🎭 **Smooth Animations**: Fade-in, slide, and hover effects using Tailwind CSS
- 💼 **Professional Sections**: Hero, About, Experience, Projects, Skills, Certifications, Awards, Publications, and Contact

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 3.4
- **Icons**: Lucide React
- **Animations**: Tailwind CSS Animations
- **Fonts**: Inter & Poppins (Google Fonts)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn installed

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The build output will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Certifications.tsx
│   │   ├── Awards.tsx
│   │   ├── Publications.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── portfolio.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── index.html
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── package.json
```

## 🎨 Customization

### Update Personal Information

Edit `src/data/portfolio.ts` to update:
- Personal information (name, email, phone, links)
- About section
- Experience details
- Projects
- Skills
- Certifications
- Awards
- Publications

### Modify Theme Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: {
    // Customize your primary color palette
  },
},
```

### Add Profile Picture

Replace the placeholder in `src/components/Hero.tsx` with your actual image:

```tsx
<img src="/your-image.jpg" alt="Profile" />
```

## 📱 Sections

1. **Hero**: Introduction with profile picture, name, title, and CTAs
2. **About**: Professional summary and education
3. **Experience**: Work history with timeline layout
4. **Projects**: Featured projects with tech stack and highlights
5. **Skills**: Technical skills categorized by domain
6. **Certifications**: Professional certifications and credentials
7. **Awards**: Achievements and hackathon wins
8. **Publications**: Research papers and articles
9. **Contact**: Contact form and social links

## 🌐 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will auto-detect Vite and deploy

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Gautam Prasad Upadhyay**
- LinkedIn: [gautamupadhyay](https://linkedin.com/in/gautamupadhyay)
- GitHub: [gautam-upadhyay](https://github.com/gautam-upadhyay)
- Email: gautamupadhyay408@gmail.com

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons from Lucide React
- Fonts from Google Fonts

