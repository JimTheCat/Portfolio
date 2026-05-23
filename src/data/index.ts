// ── Data ─────────────────────────────────────────────────────────────────────
export { personalInfo } from './personalInfo';
export { skillsData } from './skills';
export { experienceData } from './experience';
export { educationData } from './education';
export { projectFilters } from './projects';
export { navItems } from './navigation';

// ── Types (re-exported from central registry) ────────────────────────────────
export type {
  Stat,
  Skill,
  SkillCategory,
  EmploymentType,
  Experience,
  EducationStatus,
  Education,
  ProjectTag,
  ProjectFilter,
  NavItem,
} from '../types/data';

// ── Date utils (re-exported for consumers' convenience) ──────────────────────
export { formatDateRange, calculateDuration } from '../utils/dateFormatter';
