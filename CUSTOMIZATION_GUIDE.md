# Advanced Customization Guide

This guide will help you customize and extend your portfolio website beyond the basics.

## 🎨 Design Customization

### 1. Custom Color Scheme

To completely change the color scheme, edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#your-lightest-shade',
        100: '#...',
        // ... through
        900: '#your-darkest-shade',
      },
      accent: {
        // Add a secondary color palette
        500: '#accent-color',
      }
    },
  },
}
```

Popular color schemes:
- **Blue/Purple**: Already implemented (default)
- **Green/Teal**: Change primary to green shades
- **Orange/Red**: Use warm tones for a bold look
- **Monochrome**: Use grays with one accent color

### 2. Custom Fonts

Replace the current fonts in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

Then update `tailwind.config.js`:

```javascript
fontFamily: {
  sans: ['YourFont', 'system-ui', 'sans-serif'],
  display: ['YourDisplayFont', 'system-ui', 'sans-serif'],
}
```

Popular font combinations:
- **Inter + Poppins** (current)
- **Roboto + Montserrat**
- **Open Sans + Raleway**
- **SF Pro + New York** (Apple style)

### 3. Animation Customization

Add more animations in `tailwind.config.js`:

```javascript
animation: {
  'bounce-slow': 'bounce 3s infinite',
  'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  'spin-slow': 'spin 3s linear infinite',
}
```

### 4. Glassmorphism Effect Strength

Modify the glass effect in `src/index.css`:

```css
.glass {
  /* More blur */
  @apply bg-white/50 dark:bg-gray-800/50 backdrop-blur-2xl;
  
  /* Less blur */
  @apply bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm;
}
```

## 🔧 Feature Extensions

### 1. Add Blog Section

Create `src/components/Blog.tsx`:

```tsx
import { Calendar, Clock } from 'lucide-react'

interface BlogPost {
  title: string
  excerpt: string
  date: string
  readTime: string
  link: string
  tags: string[]
}

const Blog = ({ posts }: { posts: BlogPost[] }) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-12">
        Latest <span className="text-gradient">Articles</span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, idx) => (
          <article key={idx} className="glass glass-hover rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-2">{post.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
            <div className="flex gap-4 text-sm text-gray-500 mb-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" /> {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" /> {post.readTime}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span key={tag} className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 rounded text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Blog
```

### 2. Add Testimonials Section

```tsx
import { Quote } from 'lucide-react'

interface Testimonial {
  name: string
  role: string
  company: string
  content: string
  image?: string
}

const Testimonials = ({ testimonials }: { testimonials: Testimonial[] }) => {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12">
        What People <span className="text-gradient">Say</span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, idx) => (
          <div key={idx} className="glass glass-hover rounded-2xl p-6">
            <Quote className="w-8 h-8 text-primary-500 mb-4" />
            <p className="text-gray-700 dark:text-gray-300 mb-6">{t.content}</p>
            <div>
              <p className="font-semibold">{t.name}</p>
              <p className="text-sm text-gray-600">{t.role} at {t.company}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
```

### 3. Add Loading Animation

Create `src/components/LoadingScreen.tsx`:

```tsx
import { useEffect, useState } from 'react'

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])

  if (!loading) return null

  return (
    <div className="fixed inset-0 bg-gray-950 z-50 flex items-center justify-center">
      <div className="text-6xl font-bold text-gradient animate-pulse">
        GPU
      </div>
    </div>
  )
}

export default LoadingScreen
```

### 4. Add Progress Bar

```tsx
import { useEffect, useState } from 'react'

const ProgressBar = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      const current = window.scrollY
      setProgress((current / total) * 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-800 z-50">
      <div 
        className="h-full bg-gradient-to-r from-primary-500 to-blue-600 transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
```

### 5. Connect Contact Form to Backend

Using **EmailJS**:

```bash
npm install @emailjs/browser
```

```tsx
import emailjs from '@emailjs/browser'

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  
  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formData,
      'YOUR_PUBLIC_KEY'
    )
    alert('Message sent successfully!')
  } catch (error) {
    alert('Failed to send message.')
  }
}
```

Using **FormSpree**:

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
  
  if (response.ok) {
    alert('Message sent!')
  }
}
```

### 6. Add Google Analytics

In `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 7. Add Page Transitions

```bash
npm install framer-motion
```

```tsx
import { motion } from 'framer-motion'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

// Wrap sections
<motion.section
  variants={pageVariants}
  initial="initial"
  animate="animate"
  exit="exit"
>
  {/* content */}
</motion.section>
```

## 📊 Performance Optimization

### 1. Lazy Load Images

```tsx
<img 
  src="/image.jpg" 
  loading="lazy"
  alt="description"
/>
```

### 2. Code Splitting

```tsx
import { lazy, Suspense } from 'react'

const Projects = lazy(() => import('./components/Projects'))

<Suspense fallback={<div>Loading...</div>}>
  <Projects />
</Suspense>
```

### 3. Image Optimization

Use WebP format and compress images:
- [TinyPNG](https://tinypng.com/)
- [Squoosh](https://squoosh.app/)

## 🎯 SEO Enhancements

### 1. Add Sitemap

Create `public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yoursite.com/</loc>
    <lastmod>2025-01-01</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

### 2. Add robots.txt

Create `public/robots.txt`:

```
User-agent: *
Allow: /
Sitemap: https://yoursite.com/sitemap.xml
```

### 3. Open Graph Tags

Add to `index.html`:

```html
<meta property="og:title" content="Your Name - Portfolio" />
<meta property="og:description" content="Your description" />
<meta property="og:image" content="/og-image.jpg" />
<meta property="og:url" content="https://yoursite.com" />
<meta name="twitter:card" content="summary_large_image" />
```

## 🔒 Best Practices

1. **Accessibility**: Add proper ARIA labels
2. **Performance**: Keep bundle size < 200KB
3. **Mobile First**: Test on mobile devices
4. **Browser Support**: Test on Chrome, Firefox, Safari
5. **Loading Speed**: Aim for < 3s load time
6. **SEO**: Use semantic HTML
7. **Security**: Sanitize form inputs
8. **Analytics**: Track user behavior
9. **Error Handling**: Add error boundaries
10. **Version Control**: Commit regularly

## 🚀 Advanced Features to Add

- [ ] Dark mode persistence
- [ ] Multi-language support (i18n)
- [ ] Search functionality
- [ ] Print-friendly CSS
- [ ] PWA support
- [ ] RSS feed for blog
- [ ] Sitemap generation
- [ ] 404 page
- [ ] Cookie consent
- [ ] Accessibility checker

## 📚 Resources

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Web.dev Best Practices](https://web.dev)

Happy customizing! 🎨

