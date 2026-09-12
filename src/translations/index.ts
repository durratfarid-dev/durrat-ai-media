import { TranslationSchema } from './types';
import { en } from './en';
import { ar } from './ar';
import { ur } from './ur';
import { hi } from './hi';
import { bn } from './bn';
import { id } from './id';
import { tr } from './tr';

export * from './types';
export * from './languages';

export const translations: Record<string, TranslationSchema> = {
  en,
  ar,
  ur,
  hi,
  bn,
  id,
  tr,
};

/**
 * Extensible translation registry
 * Anyone can register additional languages at runtime or import time simply by calling registerLanguage.
 */
export function registerLanguage(code: string, translation: TranslationSchema) {
  translations[code] = translation;
}

/**
 * Deep merge fallback so that if a newly added language is missing any keys,
 * it safely falls back to English without throwing errors or breaking the UI.
 */
export function getTranslation(code: string): TranslationSchema {
  const chosen = translations[code] || translations['en'];
  if (code === 'en') return en;

  // Fallback to English if a key is undefined
  return {
    common: { ...en.common, ...(chosen.common || {}) },
    nav: { ...en.nav, ...(chosen.nav || {}) },
    hero: {
      ...en.hero,
      ...(chosen.hero || {}),
      stickers: { ...en.hero.stickers, ...(chosen.hero?.stickers || {}) },
    },
    services: {
      ...en.services,
      ...(chosen.services || {}),
      cards: {
        googleMaps: { ...en.services.cards.googleMaps, ...(chosen.services?.cards?.googleMaps || {}) },
        ugc: { ...en.services.cards.ugc, ...(chosen.services?.cards?.ugc || {}) },
        aiVideo: { ...en.services.cards.aiVideo, ...(chosen.services?.cards?.aiVideo || {}) },
        socialMedia: { ...en.services.cards.socialMedia, ...(chosen.services?.cards?.socialMedia || {}) },
      },
    },
    googleBusiness: {
      ...en.googleBusiness,
      ...(chosen.googleBusiness || {}),
      features: chosen.googleBusiness?.features?.length ? chosen.googleBusiness.features : en.googleBusiness.features,
      mockup: { ...en.googleBusiness.mockup, ...(chosen.googleBusiness?.mockup || {}) },
    },
    steps: { ...en.steps, ...(chosen.steps || {}) },
    whyUs: {
      ...en.whyUs,
      ...(chosen.whyUs || {}),
      points: chosen.whyUs?.points?.length ? chosen.whyUs.points : en.whyUs.points,
    },
    bottomCta: { ...en.bottomCta, ...(chosen.bottomCta || {}) },
    ugcPage: {
      ...en.ugcPage,
      ...(chosen.ugcPage || {}),
      form: { ...en.ugcPage.form, ...(chosen.ugcPage?.form || {}) },
    },
    aiCoursePage: { ...en.aiCoursePage, ...(chosen.aiCoursePage || {}) },
    socialCoursePage: { ...en.socialCoursePage, ...(chosen.socialCoursePage || {}) },
    paymentPage: { ...en.paymentPage, ...(chosen.paymentPage || {}) },
    contactPage: { ...en.contactPage, ...(chosen.contactPage || {}) },
    footer: { ...en.footer, ...(chosen.footer || {}) },
    assistant: { ...en.assistant, ...(chosen.assistant || {}) },
  };
}
