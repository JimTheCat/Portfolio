type Locale = 'en' | 'pl';

const MONTH_NAMES: Record<Locale, string[]> = {
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  pl: ['Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze', 'Lip', 'Sie', 'Wrz', 'Paź', 'Lis', 'Gru'],
};

const formatDate = (date: string, locale: Locale): string => {
  const [year, month] = date.split('-');
  if (!month) return year;
  return `${MONTH_NAMES[locale][parseInt(month) - 1]} ${year}`;
};

export const formatDateRange = (
  startDate: string,
  endDate: string | null,
  locale: Locale
): string => {
  const start = formatDate(startDate, locale);
  const end = endDate ? formatDate(endDate, locale) : (locale === 'pl' ? 'obecnie' : 'present');
  return `${start} - ${end}`;
};

export const calculateDuration = (
  startDate: string,
  endDate: string | null,
  locale: Locale
): string => {
  const start = new Date(startDate + '-01');
  const end = endDate ? new Date(endDate + '-01') : new Date();

  const totalMonths =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (locale === 'pl') {
    if (years === 0) return `${months} mies.`;
    const yLabel = years === 1 ? 'rok' : years < 5 ? 'lata' : 'lat';
    return months === 0 ? `${years} ${yLabel}` : `${years} ${yLabel} ${months} mies.`;
  } else {
    if (years === 0) return `${months} mo`;
    const yLabel = `yr${years > 1 ? 's' : ''}`;
    return months === 0 ? `${years} ${yLabel}` : `${years} ${yLabel} ${months} mo`;
  }
};
