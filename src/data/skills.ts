// ============================================
// SKILLS CONFIGURATION
// ============================================

export interface Skill {
  name: string;
  icon?: string;
  level: number; // 1-100
}

export interface SkillCategory {
  category: {
    en: string;
    pl: string;
  };
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    category: {
      en: 'Backend',
      pl: 'Backend',
    },
    skills: [
      { name: 'Java', level: 90 },
      { name: 'Spring Boot', level: 85 },
      { name: 'Python', level: 70 },
      { name: 'REST API', level: 90 },
      { name: 'GraphQL', level: 65 },
    ],
  },
  {
    category: {
      en: 'Frontend',
      pl: 'Frontend',
    },
    skills: [
      { name: 'TypeScript', level: 85 },
      { name: 'React', level: 80 },
      { name: 'HTML/CSS', level: 85 },
      { name: 'Tailwind CSS', level: 75 },
      { name: 'Angular', level: 60 },
    ],
  },
  {
    category: {
      en: 'Databases',
      pl: 'Bazy danych',
    },
    skills: [
      { name: 'Oracle', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'Redis', level: 70 },
      { name: 'Elasticsearch', level: 60 },
    ],
  },
  {
    category: {
      en: 'Tools & DevOps',
      pl: 'Narzędzia i DevOps',
    },
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 85 },
      { name: 'CI/CD', level: 80 },
      { name: 'Linux', level: 80 },
      { name: 'AWS', level: 70 },
    ],
  },
];
