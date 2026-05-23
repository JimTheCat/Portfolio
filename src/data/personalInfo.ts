import type { Stat } from '../types/data';

// ============================================
// PORTFOLIO DATA CONFIGURATION
// ============================================

export const personalInfo = {
  name: 'Patryk Kłosiński',
  handle: '@jimthecat',
  // Roles for typewriter effect - only the prefix changes, "Developer" stays fixed
  rolePrefixes: ['Mid Java', 'Fullstack', 'Spring Boot', 'React'],
  roleSuffix: 'Developer',
  email: 'klosinski.patryk2137@gmail.com',
  timezone: 'CET (UTC+1)',
  location: {
    en: 'Warsaw, Poland',
    pl: 'Warszawa, Polska',
  },
  available: {
    en: 'Open to opportunities',
    pl: 'Dostępny do współpracy',
  },
  avatar: '/avatar.jpg', // Place your avatar in public folder
  cvUrl: '/cv.pdf', // Place your CV in public folder
  githubUsername: 'jimthecat', // Your GitHub username

  // Markdown-ish bio (**bold** is rendered as <strong>)
  bio: {
    pl: 'Tworzę skalowalne aplikacje **enterprise** od backendu w **Spring Boot** po frontendy w **React** i **Angular**. Lubię dobrze zaprojektowane API, świadomy DevOps i automatyzację - wszędzie tam, gdzie powtarzalna praca może odpaść.',
    en: "I build scalable **enterprise** applications - from **Spring Boot** backends to **React** and **Angular** frontends. I'm drawn to well-shaped APIs, deliberate DevOps, and automating away the repetitive parts.",
  },
  bio2: {
    pl: 'Aktualnie pracuję jako **Mid Java / Fullstack Developer** i kończę magistra z Informatyki. Mentoruję juniorów, automatyzuję procesy z użyciem AI i lubię pisać czysty, dobrze przetestowany kod.',
    en: "Currently a **Mid Java / Fullstack Developer**, finishing my Master's in Computer Science. I mentor juniors, automate workflows with AI tooling, and care about clean, well-tested code.",
  },

  // Social links
  social: {
    github: 'https://github.com/jimthecat',
    linkedin: 'https://linkedin.com/in/kłosiński-patryk',
    email: 'mailto:klosinski.patryk2137@gmail.com',
  },

  // Stats for About section
  stats: [
    { value: 3, plus: true, label: { pl: 'Lata doświadczenia', en: 'Years experience' } },
    { value: 10, plus: true, label: { pl: 'Projekty', en: 'Projects shipped' } },
    { value: 25, plus: true, label: { pl: 'Technologii', en: 'Technologies' } },
    { value: 100, suffix: '%', label: { pl: 'Coffee / day', en: 'Coffee / day' } },
  ] as Stat[],
};
