import type { Education } from '../types/data';

// ============================================
// EDUCATION CONFIGURATION
// ============================================

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
      en: 'Completed engineering studies in Computer Science with a specialization in Database Systems.',
      pl: 'Ukończone studia inżynierskie na kierunku Informatyka, specjalność: Systemy Baz Danych.',
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
