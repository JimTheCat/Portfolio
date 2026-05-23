// ============================================
// CENTRAL TYPE REGISTRY
// ============================================

// personalInfo
export interface Stat {
  value: number;
  plus?: boolean;
  suffix?: string;
  label: {
    en: string;
    pl: string;
  };
}

// skills
export interface Skill {
  name: string;
  icon?: string;
  level: number; // 1–100
}

export interface SkillCategory {
  category: {
    en: string;
    pl: string;
  };
  skills: Skill[];
}

// experience
export type EmploymentType = 'full-time' | 'part-time' | 'contract' | 'freelance' | 'internship';

export interface Experience {
  id: string;
  company: string;
  logo?: string;
  position: { en: string; pl: string };
  description: { en: string; pl: string };
  startDate: string; // "YYYY-MM" | "YYYY"
  endDate: string | null; // null = "Present"
  location: { en: string; pl: string };
  technologies: string[];
  type: EmploymentType;
}

// education
export type EducationStatus = 'completed' | 'in-progress';

export interface Education {
  id: string;
  institution: string;
  logo?: string;
  degree: { en: string; pl: string };
  field: { en: string; pl: string };
  description?: { en: string; pl: string };
  startDate: string;
  endDate: string | null;
  location: { en: string; pl: string };
  status: EducationStatus;
}

// projects
export type ProjectTag = 'backend' | 'frontend' | 'fullstack' | 'tools';

export interface Project {
  name: string;
  desc: { en: string; pl: string };
  tags: string[];
  lang: string;
  stars: number;
  forks: number;
  tag: ProjectTag;
  url?: string;
}

export interface ProjectFilter {
  id: 'all' | ProjectTag;
  label: { en: string; pl: string };
}

// navigation
export interface NavItem {
  id: string;
  label: { en: string; pl: string };
}
