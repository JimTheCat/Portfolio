import type { ProjectFilter } from '../types/data';

// ============================================
// PROJECTS CONFIGURATION
// ============================================

export const projectFilters: ProjectFilter[] = [
  { id: 'all',       label: { pl: 'Wszystkie', en: 'All' } },
  { id: 'backend',   label: { pl: 'Backend',   en: 'Backend' } },
  { id: 'frontend',  label: { pl: 'Frontend',  en: 'Frontend' } },
  { id: 'fullstack', label: { pl: 'Fullstack', en: 'Fullstack' } },
  { id: 'tools',     label: { pl: 'Narzędzia', en: 'Tools' } },
];
