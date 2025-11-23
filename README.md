# Purpose Building Systems - Modern Website

A cutting-edge, modern website for Purpose Building Systems built with industry-leading technologies and best practices.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment Ready**: Optimized for Vercel, Netlify, or any modern hosting platform

## ✨ Features

### Modern Design
- **Gradient Themes**: Beautiful gradient color schemes with primary (blue) and accent (orange) colors
- **Smooth Animations**: Engaging animations using Framer Motion
- **Responsive Design**: Fully responsive across all device sizes
- **Glass Morphism**: Modern glass effects and backdrop blur
- **Card Hover Effects**: Interactive hover states with smooth transitions

### Sections
1. **Hero Section**: Eye-catching hero with animated background, floating icons, and key statistics
2. **Services**: Comprehensive service offerings with icon cards and feature highlights
3. **About**: Company information with achievements and mission statement
4. **Projects**: Portfolio showcase with image galleries and project details
5. **Contact**: Professional contact form with company information
6. **Footer**: Complete footer with links, services, and social media

### Performance & SEO
- ✅ Optimized images and lazy loading
- ✅ SEO-friendly meta tags
- ✅ Semantic HTML structure
- ✅ Fast page loads with Next.js optimization
- ✅ Mobile-first responsive design
- ✅ Accessibility considerations

### Best Practices Implemented
- ✅ TypeScript for type safety
- ✅ Component-based architecture
- ✅ Clean, maintainable code structure
- ✅ Modern CSS with Tailwind utilities
- ✅ Smooth scroll behavior
- ✅ Mobile navigation menu
- ✅ Form validation ready structure

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation Steps

1. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

3. **Open in Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

4. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

## 📁 Project Structure

```
purpose-building-system/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main homepage
│   └── globals.css         # Global styles and Tailwind
├── components/
│   ├── Navigation.tsx      # Sticky navigation with mobile menu
│   ├── Hero.tsx           # Hero section with animations
│   ├── Services.tsx       # Services showcase
│   ├── About.tsx          # About company section
│   ├── Projects.tsx       # Portfolio/projects section
│   ├── Contact.tsx        # Contact form and info
│   └── Footer.tsx         # Footer with links
├── public/                # Static assets
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize the color scheme:
- **Primary**: Blue shades (currently `#0ea5e9` - `#0c4a6e`)
- **Accent**: Orange shades (currently `#f97316` - `#7c2d12`)

### Content
- Update text content in each component file
- Replace placeholder images in `Projects.tsx` with actual project images
- Modify contact information in `Contact.tsx` and `Footer.tsx`
- Update company details in `About.tsx`

### SEO
Edit metadata in `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: "Your Title",
  description: "Your Description",
  keywords: ["your", "keywords"],
};
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project to Vercel
3. Deploy with one click

### Netlify
1. Connect your repository
2. Build command: `npm run build`
3. Publish directory: `.next`

### Other Platforms
- Build the project: `npm run build`
- Start server: `npm start`
- Ensure Node.js environment is available

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Development

### Adding New Sections
1. Create component in `components/` directory
2. Import and add to `app/page.tsx`
3. Update navigation links in `Navigation.tsx`

### Styling Guidelines
- Use Tailwind utility classes
- Custom utilities available: `text-gradient`, `glass-effect`, `card-hover`
- Animations defined in `tailwind.config.ts`

## 📝 License

Private project for Purpose Building Systems

## 🤝 Support

For questions or support, contact the development team.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
