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
      en: 'Languages',
      pl: 'Języki',
    },
    skills: [
      { name: 'Java (8/11/17+)', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'JavaScript (ES6+)', level: 85 },
      { name: 'Python', level: 70 },
      { name: 'SQL', level: 85 },
    ],
  },
  {
    category: {
      en: 'Backend',
      pl: 'Backend',
    },
    skills: [
      { name: 'Spring Boot', level: 90 },
      { name: 'Spring Security', level: 80 },
      { name: 'Spring Data JPA / Hibernate', level: 85 },
      { name: 'REST API', level: 90 },
      { name: 'WebSockets', level: 75 },
      { name: 'Gradle', level: 75 },
      { name: 'RabbitMQ', level: 65 },
    ],
  },
  {
    category: {
      en: 'Frontend',
      pl: 'Frontend',
    },
    skills: [
      { name: 'React', level: 80 },
      { name: 'Angular', level: 75 },
      { name: 'TypeScript', level: 85 },
      { name: 'Mantine UI', level: 75 },
      { name: 'HTML5 / CSS3', level: 85 },
    ],
  },
  {
    category: {
      en: 'Databases',
      pl: 'Bazy danych',
    },
    skills: [
      { name: 'Oracle 21c', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'SQLite', level: 75 },
    ],
  },
  {
    category: {
      en: 'DevOps & Cloud',
      pl: 'DevOps i Chmura',
    },
    skills: [
      { name: 'Docker', level: 85 },
      { name: 'Linux (Ubuntu / RedHat)', level: 80 },
      { name: 'CI/CD (Jenkins, GitHub Actions)', level: 80 },
      { name: 'Oracle Cloud Infrastructure', level: 65 },
      { name: 'Bash scripting', level: 70 },
    ],
  },
  {
    category: {
      en: 'Testing',
      pl: 'Testowanie',
    },
    skills: [
      { name: 'JUnit', level: 85 },
      { name: 'Unit Testing', level: 85 },
      { name: 'Integration Testing', level: 75 },
      { name: 'TDD', level: 70 },
    ],
  },
  {
    category: {
      en: 'Tools',
      pl: 'Narzędzia',
    },
    skills: [
      { name: 'Git', level: 90 },
      { name: 'BitBucket / GitHub', level: 85 },
      { name: 'Jira / Confluence', level: 80 },
      { name: 'IntelliJ IDEA', level: 90 },
      { name: 'VS Code', level: 80 },
    ],
  },
];
