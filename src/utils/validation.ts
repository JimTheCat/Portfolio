export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const isValidEmail = (value: string): boolean => EMAIL_REGEX.test(value);
export const isValidName = (value: string): boolean => value.trim().length >= 2;
export const isValidMessage = (value: string): boolean => value.trim().length >= 10;
