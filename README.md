# Kushagra Singh - Portfolio

A modern React-based portfolio website with dark mode support, smooth animations, and responsive design.

## Features

✨ **Modern Design** - Clean and professional UI with Bootstrap 5  
🎨 **Dark Mode** - Toggle between light and dark themes with localStorage persistence  
⚡ **Smooth Animations** - AOS (Animate On Scroll) and typing effects  
📱 **Responsive** - Mobile-friendly design  
🚀 **Fast** - Built with React and optimized for performance  

## Tech Stack

- **React 18** - UI library
- **Bootstrap 5** - CSS framework
- **AOS** - Scroll animations
- **localStorage** - Theme persistence

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx       - Navigation bar with theme toggle
│   ├── Hero.jsx         - Hero section with typing effect
│   ├── About.jsx        - About me section
│   ├── Projects.jsx     - Projects showcase
│   ├── Skills.jsx       - Skills section
│   ├── Education.jsx    - Education & certifications
│   ├── Contact.jsx      - Contact form
│   ├── Footer.jsx       - Footer
│   └── TypingEffect.jsx - Typing animation component
├── styles/
│   └── index.css        - Global styles
├── App.jsx              - Main app component
└── index.js             - React entry point

public/
├── index.html           - HTML template
├── white_photo.jpg      - Profile photo
└── kushagraSingh_CSE_GLAU.pdf - Resume
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Make sure your static assets are in the `public/` folder:
   - `white_photo.jpg` (profile photo)
   - `kushagraSingh_CSE_GLAU.pdf` (resume)

### Development

Run the development server:
```bash
npm start
```

The app will open at `http://localhost:3000`

### Building for Production

Create an optimized production build:
```bash
npm run build
```

The build folder will contain your optimized files ready for deployment.

## Customization

### Update Personal Information
Edit the following files:
- `src/components/Hero.jsx` - Name, location, contact info
- `src/components/About.jsx` - About description
- `src/components/Projects.jsx` - Project details
- `src/components/Skills.jsx` - Technical and professional skills
- `src/components/Education.jsx` - Education and certifications
- `src/components/Contact.jsx` - Contact details

### Update Colors
Edit the CSS variables in `src/styles/index.css`:
```css
:root {
  --accent: #0d6efd;        /* Primary blue */
  --bg: #0f1723;            /* Dark background */
  --muted: #6b7280;         /* Gray text */
}
```

## Deployment

### Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`

### Vercel
```bash
npm i -g vercel
vercel
```

### GitHub Pages
Update `package.json`:
```json
"homepage": "https://yourusername.github.io/portfolio"
```

Then:
```bash
npm run build
npm run deploy
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your own portfolio.

## Author

Kushagra Singh - [LinkedIn](https://www.linkedin.com/in/kushagra-singh-344b72250) | [GitHub](https://github.com/kushagra790)
