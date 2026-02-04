# 🚀 Portfolio - Patryk Kłosiński

A modern, responsive portfolio website built with React and TypeScript, showcasing my skills as a Backend/Fullstack Developer.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![Mantine](https://img.shields.io/badge/Mantine-8-339AF0?logo=mantine&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg)

## ✨ Features

- 🌓 **Dark/Light Mode** - automatic system preference detection with manual toggle option
- 🌍 **Internationalization (i18n)** - support for Polish and English languages
- 📱 **Responsive Design** - optimized for all devices
- ⚡ **Animations** - smooth animations powered by Framer Motion
- 🔗 **GitHub API Integration** - automatic project fetching from GitHub
- ⌨️ **Typewriter Effect** - dynamic role presentation in the hero section

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library
- **TypeScript** - static typing
- **Vite** - bundler and dev server
- **Mantine UI** - component library
- **Framer Motion** - animations
- **i18next** - internationalization
- **Tabler Icons** - icons

### Development Tools
- **ESLint** - code linting
- **TypeScript ESLint** - TypeScript rules for ESLint

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   └── layout/          # Header, Footer
├── data/                # Static data (experience, skills, etc.)
├── features/            # Page sections
│   ├── about/           # About Me section
│   ├── contact/         # Contact section
│   ├── education/       # Education section
│   ├── experience/      # Experience section
│   ├── hero/            # Hero section
│   ├── projects/        # Projects section
│   └── skills/          # Skills section
├── hooks/               # Custom hooks
├── i18n/                # i18n configuration and translations
│   └── locales/         # Translation files (en.ts, pl.ts)
├── theme/               # Mantine theme configuration
└── types/               # TypeScript types
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/jimthecat/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Starts the development server |
| `npm run build` | Builds the app for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Lint the codebase |

## ⚙️ Configuration

### Personal Data

Edit the `src/data/personalInfo.ts` file to customize your information:

```typescript
export const personalInfo = {
  name: 'Your Name',
  email: 'your@email.com',
  githubUsername: 'your-github',
  // ...
};
```

### Translations

Translation files are located in `src/i18n/locales/`:
- `en.ts` - English
- `pl.ts` - Polish

### Assets

Place your files in the `public/` folder:
- `avatar.jpg` - Your profile picture
- `cv.pdf` - Your CV for download
- `companies/` - Company logos from experience
- `education/` - University/school logos

## 🌐 Deployment

### GitHub Pages (Automatic)

This project includes a GitHub Actions workflow for automatic deployment:

1. Push your code to the `main` branch
2. Go to repository **Settings** → **Pages**
3. Under "Build and deployment", select **GitHub Actions** as the source
4. The site will be available at `https://yourusername.github.io/portfolio/`

### Other Platforms

The app is also ready to be deployed on:
- Vercel
- Netlify
- Cloudflare Pages

```bash
# Build for production
npm run build

# Production files are located in the dist/ folder
```

## 📄 License

This project is licensed under the [MIT License](LICENSE) - feel free to use it as a base for your own portfolio.

---

<p align="center">
  Built with ❤️ by <a href="https://github.com/jimthecat">Patryk Kłosiński</a>
</p>
