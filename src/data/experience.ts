// ============================================
// EXPERIENCE CONFIGURATION
// ============================================

export interface Experience {
  id: string;
  company: string;
  logo?: string; // Place logo in public/companies folder
  position: {
    en: string;
    pl: string;
  };
  description: {
    en: string;
    pl: string;
  };
  startDate: string; // Format: "YYYY-MM" or "YYYY"
  endDate: string | null; // null means "Present"
  location: {
    en: string;
    pl: string;
  };
  technologies: string[];
  type: 'full-time' | 'part-time' | 'contract' | 'freelance' | 'internship';
}

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
  }
];

// Helper function to format date range
export const formatDateRange = (
  startDate: string,
  endDate: string | null,
  locale: 'en' | 'pl'
): string => {
  const formatDate = (date: string): string => {
    const [year, month] = date.split('-');
    if (!month) return year;
    
    const monthNames = {
      en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      pl: ['Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze', 'Lip', 'Sie', 'Wrz', 'Paź', 'Lis', 'Gru'],
    };
    
    return `${monthNames[locale][parseInt(month) - 1]} ${year}`;
  };
  
  const start = formatDate(startDate);
  const end = endDate ? formatDate(endDate) : (locale === 'pl' ? 'Obecnie' : 'Present');
  
  return `${start} - ${end}`;
};

// Helper function to calculate duration
export const calculateDuration = (
  startDate: string,
  endDate: string | null,
  locale: 'en' | 'pl'
): string => {
  const start = new Date(startDate + '-01');
  const end = endDate ? new Date(endDate + '-01') : new Date();
  
  const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  
  if (locale === 'pl') {
    if (years === 0) return `${remainingMonths} mies.`;
    if (remainingMonths === 0) return `${years} ${years === 1 ? 'rok' : years < 5 ? 'lata' : 'lat'}`;
    return `${years} ${years === 1 ? 'rok' : years < 5 ? 'lata' : 'lat'} ${remainingMonths} mies.`;
  } else {
    if (years === 0) return `${remainingMonths} mo`;
    if (remainingMonths === 0) return `${years} yr${years > 1 ? 's' : ''}`;
    return `${years} yr${years > 1 ? 's' : ''} ${remainingMonths} mo`;
  }
};
