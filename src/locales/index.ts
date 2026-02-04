import { en } from './en';

const translations = {
  en,
};

export type LocaleCode = keyof typeof translations;

let currentLocale: LocaleCode = 'en';

export const setLocale = (locale: LocaleCode) => {
  currentLocale = locale;
};

export const locale: typeof en = new Proxy(en, {
  get(target, section: keyof typeof en) {
    return translations[currentLocale][section];
  },
});
