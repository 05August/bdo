import en from './en.json';
import vi from './vi.json';

export type Lang = 'en' | 'vi';

export const LOCALES: Lang[] = ['en', 'vi'];
export const DEFAULT_LOCALE: Lang = 'vi';

const messages: Record<Lang, Record<string, unknown>> = { en, vi };

export function getTranslations(lang: Lang): Record<string, unknown> {
  return messages[lang] ?? messages[DEFAULT_LOCALE];
}

/** Lấy chuỗi dịch theo key dạng "nav.home" */
export function t(lang: Lang, key: string): string {
  const obj = messages[lang] ?? messages[DEFAULT_LOCALE];
  const value = key.split('.').reduce<unknown>((acc, part) => {
    if (acc !== null && typeof acc === 'object' && part in acc) {
      return (acc as Record<string, unknown>)[part];
    }
    return undefined;
  }, obj);
  return typeof value === 'string' ? value : key;
}

export function isLang(s: string): s is Lang {
  return LOCALES.includes(s as Lang);
}
