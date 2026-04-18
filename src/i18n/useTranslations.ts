import ru from './ru.json';
import en from './en.json';

export const languages = {
  ru: 'RU',
  en: 'EN',
} as const;

export const defaultLang = 'ru' as const;
export const showDefaultLang = false;

const translations = { ru, en } as const;

export type Lang = keyof typeof translations;
export type Translations = (typeof translations)[Lang];

export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split('/');
  if (maybeLang && maybeLang in translations) {
    return maybeLang as Lang;
  }
  return defaultLang;
}

export function useTranslations(lang: Lang): Translations {
  return translations[lang];
}

export function getLocalizedPath(path: string, lang: Lang): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return cleanPath;
  if (cleanPath === '/') return `/${lang}`;
  return `/${lang}${cleanPath}`;
}

export function getAlternatePath(currentPath: string, targetLang: Lang): string {
  const stripped = currentPath.replace(/^\/en(?=\/|$)/, '') || '/';
  return getLocalizedPath(stripped, targetLang);
}
