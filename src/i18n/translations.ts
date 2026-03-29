export type Locale = 'en' | 'nb';
export const defaultLocale: Locale = 'en';
export const languages: Record<Locale, string> = { en: 'English', nb: 'Norsk' };

const translations: Record<Locale, Record<string, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.blog': 'Blog',
    'nav.articles': 'Articles',
    'nav.products': 'Products',
    'nav.services': 'Services',
    'footer.tagline': 'Built with purpose.',
    'footer.copyright': '© {year} All rights reserved.',
    'cta.contact': 'Contact Us',
    'cta.learnMore': 'Learn More',
    'cta.getStarted': 'Get Started',
    'cookie.message': 'We use cookies to improve your experience.',
    'cookie.accept': 'Accept',
    'cookie.decline': 'Decline',
    'newsletter.placeholder': 'you@example.com',
    'newsletter.subscribe': 'Subscribe',
    'newsletter.success': 'Thanks for subscribing!',
    'newsletter.error': 'Something went wrong. Please try again.',
    'share.twitter': 'Share on X',
    'share.linkedin': 'Share on LinkedIn',
    'share.facebook': 'Share on Facebook',
    'share.copy': 'Copy link',
    'share.copied': 'Copied!',
  },
  nb: {
    'nav.home': 'Hjem',
    'nav.about': 'Om oss',
    'nav.contact': 'Kontakt',
    'nav.blog': 'Blogg',
    'nav.articles': 'Artikler',
    'nav.products': 'Produkter',
    'nav.services': 'Tjenester',
    'footer.tagline': 'Bygget med mening.',
    'footer.copyright': '© {year} Alle rettigheter reservert.',
    'cta.contact': 'Kontakt oss',
    'cta.learnMore': 'Les mer',
    'cta.getStarted': 'Kom i gang',
    'cookie.message': 'Vi bruker informasjonskapsler for å forbedre opplevelsen din.',
    'cookie.accept': 'Godta',
    'cookie.decline': 'Avslå',
    'newsletter.placeholder': 'deg@eksempel.no',
    'newsletter.subscribe': 'Abonner',
    'newsletter.success': 'Takk for at du abonnerer!',
    'newsletter.error': 'Noe gikk galt. Prøv igjen.',
    'share.twitter': 'Del på X',
    'share.linkedin': 'Del på LinkedIn',
    'share.facebook': 'Del på Facebook',
    'share.copy': 'Kopier lenke',
    'share.copied': 'Kopiert!',
  },
};

export type TranslationKey = keyof (typeof translations)['en'];

export function t(locale: Locale, key: string, vars?: Record<string, string>): string {
  let text = translations[locale]?.[key] ?? translations[defaultLocale]?.[key] ?? key;
  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      text = text.replace(`{${k}}`, v);
    }
  }
  return text;
}

export function getLocaleFromUrl(url: URL): Locale {
  const [, segment] = url.pathname.split('/');
  if (segment === 'nb') return 'nb';
  return 'en';
}

export function localePath(locale: Locale, path: string): string {
  if (locale === defaultLocale) return path;
  return `/${locale}${path}`;
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === 'en' ? 'nb' : 'en';
}
