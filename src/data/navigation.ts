import type { NavItem } from '../types/data';

// ============================================
// NAVIGATION CONFIGURATION
// ============================================

export const navItems: NavItem[] = [
  { id: 'home',       label: { pl: 'Start',         en: 'Home' } },
  { id: 'about',      label: { pl: 'O mnie',        en: 'About' } },
  { id: 'skills',     label: { pl: 'Umiejętności',  en: 'Skills' } },
  { id: 'experience', label: { pl: 'Doświadczenie', en: 'Experience' } },
  { id: 'education',  label: { pl: 'Edukacja',      en: 'Education' } },
  { id: 'projects',   label: { pl: 'Projekty',      en: 'Projects' } },
  { id: 'contact',    label: { pl: 'Kontakt',        en: 'Contact' } },
];
