import { LanguageConfig } from './types';

export const supportedLanguages: LanguageConfig[] = [
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇬🇧',
    dir: 'ltr',
  },
  {
    code: 'ar',
    name: 'Arabic',
    nativeName: 'العربية',
    flag: '🇸🇦',
    dir: 'rtl',
  },
  {
    code: 'ur',
    name: 'Urdu',
    nativeName: 'اردو',
    flag: '🇵🇰',
    dir: 'rtl',
  },
  {
    code: 'hi',
    name: 'Hindi',
    nativeName: 'हिन्दी',
    flag: '🇮🇳',
    dir: 'ltr',
  },
  {
    code: 'bn',
    name: 'Bengali',
    nativeName: 'বাংলা',
    flag: '🇧🇩',
    dir: 'ltr',
  },
  {
    code: 'id',
    name: 'Indonesian',
    nativeName: 'Bahasa Indonesia',
    flag: '🇮🇩',
    dir: 'ltr',
  },
  {
    code: 'tr',
    name: 'Turkish',
    nativeName: 'Türkçe',
    flag: '🇹🇷',
    dir: 'ltr',
  },
];

export const upcomingLanguages: { name: string; nativeName: string; flag: string }[] = [
  { name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  { name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
  { name: 'Malay', nativeName: 'Bahasa Melayu', flag: '🇲🇾' },
  { name: 'Filipino', nativeName: 'Tagalog', flag: '🇵🇭' },
  { name: 'Russian', nativeName: 'Русский', flag: '🇷🇺' },
  { name: 'Chinese', nativeName: '中文', flag: '🇨🇳' },
];
