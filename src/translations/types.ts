export type TextDirection = 'ltr' | 'rtl';

export interface LanguageConfig {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  dir: TextDirection;
  isComingSoon?: boolean;
}

export interface TranslationSchema {
  common: {
    language: string;
    moreLanguages: string;
    moreLanguagesDesc: string;
    verified: string;
    openNow: string;
    close: string;
    back: string;
    viewAll: string;
    learnMore: string;
    getStarted: string;
    contactUs: string;
    joinWhatsApp: string;
    whatsappChat: string;
    exploreServices: string;
    step: string;
    call: string;
    directions: string;
    share: string;
    website: string;
    reviews: string;
    popular: string;
    loading: string;
  };
  nav: {
    home: string;
    ugc: string;
    aiCourse: string;
    socialCourse: string;
    payment: string;
    contact: string;
    quickEdit: string;
    selectLanguage: string;
  };
  hero: {
    marketBadge: string;
    headline: string;
    subheadline: string;
    description: string;
    whatsappCta: string;
    servicesCta: string;
    shopOwnerBannerTitle: string;
    shopOwnerBannerSubtitle: string;
    shopOwnerBannerBtn: string;
    stickers: {
      mapsPin: string;
      review: string;
      mobile: string;
      ugcVideo: string;
      aiRobot: string;
      growth: string;
      trust: string;
      trending: string;
      whatsapp: string;
    };
  };
  services: {
    badge: string;
    title: string;
    subtitle: string;
    cards: {
      googleMaps: {
        tag: string;
        title: string;
        sentence: string;
        cta: string;
        pills: [string, string, string, string];
      };
      ugc: {
        tag: string;
        title: string;
        sentence: string;
        cta: string;
        pills: [string, string, string, string];
      };
      aiVideo: {
        tag: string;
        title: string;
        sentence: string;
        cta: string;
        pills: [string, string, string, string];
      };
      socialMedia: {
        tag: string;
        title: string;
        sentence: string;
        cta: string;
        pills: [string, string, string, string];
      };
    };
  };
  googleBusiness: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    importantNotice: string;
    cta: string;
    mockup: {
      searchPlaceholder: string;
      verifiedBadge: string;
      businessType: string;
      sampleName: string;
      sampleLocation: string;
      sampleRating: string;
      timing: string;
      photosLabel: string;
      frontView: string;
      insideShop: string;
      topProducts: string;
    };
  };
  steps: {
    badge: string;
    title: string;
    subtitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
  };
  whyUs: {
    badge: string;
    title: string;
    subtitle: string;
    points: {
      title: string;
      desc: string;
    }[];
    localMarketTitle: string;
    localMarketDesc: string;
  };
  bottomCta: {
    badge: string;
    title: string;
    description: string;
    whatsappBtn: string;
    contactBtn: string;
  };
  ugcPage: {
    badge: string;
    title: string;
    subtitle: string;
    serviceListTitle: string;
    howItWorksTitle: string;
    packagesTitle: string;
    orderFormTitle: string;
    orderFormDesc: string;
    form: {
      fullName: string;
      brandName: string;
      email: string;
      productService: string;
      targetAudience: string;
      videoLength: string;
      videoStyle: string;
      mainMessage: string;
      scriptNotes: string;
      numberOfVideos: string;
      additionalReq: string;
      submitBtn: string;
    };
  };
  aiCoursePage: {
    badge: string;
    title: string;
    subtitle: string;
    promptingModule: string;
    videoModule: string;
    audienceTitle: string;
    enrollCta: string;
    enrollNotice: string;
  };
  socialCoursePage: {
    badge: string;
    title: string;
    subtitle: string;
    youtubeModule: string;
    facebookModule: string;
    instagramModule: string;
    enrollCta: string;
  };
  paymentPage: {
    badge: string;
    title: string;
    subtitle: string;
    bankTransferTitle: string;
    bankName: string;
    accountName: string;
    iban: string;
    reference: string;
    verificationInstructions: string;
    step1: string;
    step2: string;
    step3: string;
  };
  contactPage: {
    badge: string;
    title: string;
    subtitle: string;
    formTitle: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    sendBtn: string;
    copyBtn: string;
    copiedBtn: string;
    directWhatsApp: string;
    emailUsDirectly: string;
  };
  footer: {
    about: string;
    navigation: string;
    servicesAndCourses: string;
    contactTitle: string;
    copyright: string;
    rightsReserved: string;
  };
  assistant: {
    triggerBtn: string;
  };
}
