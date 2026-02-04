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
      en: 'Expense Implementation Specialist',
      pl: 'Expense Implementation Specialist',
    },
    description: {
      en: 'Java/JavaScript Developer\n' +
        '\n' +
        'Over the past years, I have gained extensive experience in developing and maintaining modern software systems with Java (Spring Boot) and JavaScript (React). My role goes beyond coding — I actively contribute to improving processes, mentoring, and automation.\n' +
        '\n' +
        'Key highlights:\n' +
        '- Designed and implemented new systems, supported by unit testing and CI/CD pipelines.\n' +
        '- Led service migrations from JEE to modern Spring Boot architectures.\n' +
        '- Worked with Linux servers, handling deployment and maintenance.\n' +
        '- Provided consulting and internal trainings to share knowledge and improve team efficiency.\n' +
        '- Automated processes using AI-powered solutions and custom scripts, improving workflow and reducing manual effort.',
      pl: 'Java/JavaScript Developer\n' +
        '\n' +
        'Na przestrzeni ostatnich lat zdobyłem szerokie doświadczenie w rozwoju i utrzymaniu systemów opartych o Javę oraz JavaScript. Moja praca wykracza poza samo programowanie – angażuję się również w usprawnianie procesów, szkolenia zespołów oraz automatyzację.\n' +
        '\n' +
        'Najważniejsze osiągnięcia:\n' +
        '\n' +
        '- Projektowanie i implementacja systemów wspieranych przez testy jednostkowe i pipeline’y CI/CD.\n' +
        '- Przeprowadzanie migracji serwisów z JEE do nowoczesnych architektur Spring Boot.\n' +
        '- Obsługa i administracja serwerów Linuxowych (deployment, monitoring, utrzymanie).\n' +
        '- Doradztwo techniczne i prowadzenie szkoleń wewnętrznych, wspierających rozwój zespołu.\n' +
        '- Automatyzacja procesów przy użyciu rozwiązań AI i własnych skryptów, co usprawniło pracę i zredukowało manualne zadania.',
    },
    startDate: '2022-09',
    endDate: null,
    location: {
      en: 'Warsaw, Poland',
      pl: 'Warszawa, Polska',
    },
    technologies: ['Java', 'Spring Boot', 'JavaScript', 'Graal VM', 'Python', 'SQL', 'Git', 'Linux', 'CI/CD', 'Docker', 'AI automation'],
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
