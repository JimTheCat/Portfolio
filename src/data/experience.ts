import type { Experience } from '../types/data';

// ============================================
// EXPERIENCE CONFIGURATION
// ============================================

export const experienceData: Experience[] = [
  {
    id: 'exp-1',
    company: 'Astek',
    logo: '/companies/astek_logo.jpg',
    position: {
      en: 'Java / Fullstack Developer',
      pl: 'Java / Fullstack Developer',
    },
    description: {
      en: 'Mid-Level Java / Fullstack Developer\n' +
        '\n' +
        'Designing, developing and maintaining scalable enterprise applications with Java (Spring Boot) on the backend and Angular / TypeScript on the frontend. Active contributor to process improvements, mentoring and automation.\n' +
        '\n' +
        'Key highlights:\n' +
        '- Designed and implemented backend systems in Java & Spring Boot, supported by JUnit unit tests and automated CI/CD pipelines.\n' +
        '- Led service migrations from legacy JEE to modern Spring Boot, improving maintainability and deployment speed.\n' +
        '- Built and consumed REST APIs; integrated with Oracle relational database.\n' +
        '- Managed Linux server deployments, maintenance and DevOps operations using Docker containers.\n' +
        '- Provided consulting and conducted internal training sessions, mentoring junior developers.\n' +
        '- Automated repetitive workflows using AI-powered tools, MCP servers and custom Python scripts, reducing manual effort and engineering toil.',
      pl: 'Mid-Level Java / Fullstack Developer\n' +
        '\n' +
        'Projektowanie, rozwój i utrzymanie skalowalnych aplikacji enterprise w oparciu o Javę (Spring Boot) na backendzie oraz Angular / TypeScript na frontendzie. Aktywnie wspieram usprawnianie procesów, mentoring i automatyzację.\n' +
        '\n' +
        'Najważniejsze osiągnięcia:\n' +
        '\n' +
        '- Projektowanie i implementacja systemów backendowych w Java & Spring Boot, wspartych testami JUnit i pipeline’ami CI/CD.\n' +
        '- Migracje serwisów z legacy JEE do nowoczesnego Spring Boot, poprawiające utrzymanie i tempo wdrożeń.\n' +
        '- Budowa i integracja REST API; praca z relacyjną bazą Oracle.\n' +
        '- Wdrożenia i utrzymanie serwerów Linux oraz operacje DevOps z wykorzystaniem kontenerów Docker.\n' +
        '- Doradztwo techniczne i prowadzenie szkoleń wewnętrznych, mentoring młodszych deweloperów.\n' +
        '- Automatyzacja powtarzalnych procesów z użyciem narzędzi AI, serwerów MCP i autorskich skryptów Pythonowych.',
    },
    startDate: '2022-09',
    endDate: null,
    location: {
      en: 'Warsaw, Poland',
      pl: 'Warszawa, Polska',
    },
    technologies: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'REST API', 'JUnit', 'Oracle', 'Python', 'SQL', 'Git', 'Linux', 'Docker', 'CI/CD', 'MCP servers'],
    type: 'freelance',
  },
];
