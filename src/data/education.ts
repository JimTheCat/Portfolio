// ============================================
// EDUCATION CONFIGURATION
// ============================================

export interface Education {
  id: string;
  institution: string;
  logo?: string; // Place logo in public/education folder
  degree: {
    en: string;
    pl: string;
  };
  field: {
    en: string;
    pl: string;
  };
  description?: {
    en: string;
    pl: string;
  };
  startDate: string; // Format: "YYYY-MM" or "YYYY"
  endDate: string | null; // null means "Present" / "In progress"
  location: {
    en: string;
    pl: string;
  };
  status: 'completed' | 'in-progress';
}

export const educationData: Education[] = [
  {
    id: 'edu-2',
    institution: 'Polsko-Japońska Akademia Technik Komputerowych',
    logo: '/education/PJATK_PL_sygnet.jpg',
    degree: {
      en: "Master's Degree",
      pl: 'Magister',
    },
    field: {
      en: 'Computer Science',
      pl: 'Informatyka',
    },
    description: {
      en: 'Continuing education to obtain a Master\'s degree in Computer Science.',
      pl: 'Kontynuacja nauki w celu uzyskania tytułu magistra informatyki.',
    },
    startDate: '2025-03',
    endDate: null,
    location: {
      en: 'Warsaw, Poland',
      pl: 'Warszawa, Polska',
    },
    status: 'in-progress',
  },
  {
    id: 'edu-1',
    institution: 'Polsko-Japońska Akademia Technik Komputerowych',
    logo: '/education/PJATK_PL_sygnet.jpg',
    degree: {
      en: "Bachelor's Degree (Engineer)",
      pl: 'Inżynier',
    },
    field: {
      en: 'Computer Science',
      pl: 'Informatyka',
    },
    description: {
      en: 'Completed engineering studies in Computer Science with focus on software development and modern technologies.',
      pl: 'Ukończone studia inżynierskie na kierunku Informatyka z naciskiem na tworzenie oprogramowania i nowoczesne technologie.',
    },
    startDate: '2021-10',
    endDate: '2025-02',
    location: {
      en: 'Warsaw, Poland',
      pl: 'Warszawa, Polska',
    },
    status: 'completed',
  },
];

