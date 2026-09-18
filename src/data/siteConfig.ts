import { SiteConfig } from '../types';

/**
 * Durrat AI Media - Central Editable Configuration
 * All prices, bank details, contact emails, and copy can be customized here.
 */
const PREFILLED_MESSAGE = encodeURIComponent(
  'Hello Durrat AI Media, I would like to know more about your services.'
);

export const WHATSAPP_LINKS = {
  chat1: `https://wa.me/966576908190?text=${PREFILLED_MESSAGE}`,
};

export const defaultSiteConfig: SiteConfig = {
  brandName: 'Durrat AI Media',
  tagline: 'AI • UGC • Social Media',
  contactEmail: 'durratfarid@gmail.com',
  whatsAppLinks: WHATSAPP_LINKS,
  prices: {
    ugcStarter: 'Add Price', // Placeholder: e.g., "$99" or "$150"
    ugcProfessional: 'Add Price', // Placeholder: e.g., "$249" or "$399"
    ugcBusiness: 'Custom Pricing', // Custom pricing package
    aiCourse: 'Add Price', // Placeholder: e.g., "$120" or "$199"
    socialMediaCourse: 'Add Price', // Placeholder: e.g., "$99" or "$150"
  },
  bankDetails: {
    bankName: 'ADD BANK NAME',
    accountName: 'ADD ACCOUNT NAME',
    iban: 'ADD IBAN',
    paymentReference: 'ADD REFERENCE',
  },
};

export const googleBusinessServicePoints = [
  'Business Profile Setup',
  'Google Maps Listing Assistance',
  'Business Information Setup',
  'Category & Services Setup',
  'Photos & Logo Setup',
  'Profile Optimization',
  'Verification Guidance',
  'Existing Profile Assistance',
];

export const ugcServicesList = [
  { title: 'Product UGC Ads', desc: 'Authentic hands-on reviews, unboxing, and real demonstration videos that build instant trust.' },
  { title: 'Social Media Ads', desc: 'High-converting ad creatives formatted for optimal engagement across social ad networks.' },
  { title: 'Short-form Video Ads', desc: 'Fast-paced, hook-driven 15-30s vertical clips built for quick conversion and retention.' },
  { title: 'Instagram Reels Ads', desc: 'Aesthetic, trend-aware vertical reels that blend natively into Instagram feeds.' },
  { title: 'Facebook Ads', desc: 'Direct-response storytelling and problem-solution angles designed for high ROI campaigns.' },
  { title: 'TikTok-style UGC Ads', desc: 'High-energy native TikTok-style formats with authentic creators and trending hooks.' },
  { title: 'AI-powered UGC Ads', desc: 'Cutting-edge AI-assisted generation, voice cloning, visual enhancement and quick iterations.' },
  { title: 'Promotional Videos', desc: 'Brand-focused promotional videos highlighting unique selling propositions and offers.' },
];

export const ugcSteps = [
  {
    step: 'Step 1',
    title: 'Tell Us About Your Product',
    desc: 'Provide your product or service details, target audience, and the key selling angles you want highlighted.',
  },
  {
    step: 'Step 2',
    title: 'Share Your Requirements',
    desc: 'Specify your preferred video length, styling format, script notes, and the number of video variations required.',
  },
  {
    step: 'Step 3',
    title: 'We Create Your UGC Ad',
    desc: 'Our team crafts high-retention hooks, records or generates the UGC footage, and applies professional editing.',
  },
  {
    step: 'Step 4',
    title: 'Receive Your Final Video',
    desc: 'Get your high-definition, platform-optimized UGC ads ready to launch on TikTok, Instagram, and Facebook ads.',
  },
];

export const aiCourseCurriculum = {
  prompting: [
    'Writing effective prompts',
    'Image generation prompts',
    'Character prompts',
    'Consistent character creation',
    'Creative prompts',
    'Advanced prompting techniques',
  ],
  video: [
    'AI video generation',
    'Image-to-video',
    'Text-to-video',
    'Character animation',
    'Story video creation',
    'Cinematic scenes',
    'Video prompt writing',
    'AI video workflow',
  ],
  targetAudience: [
    'Content creators',
    'Beginners',
    'Social media creators',
    'Freelancers',
    'Digital marketers',
    'People interested in AI content creation',
  ],
};

export const socialCourseCurriculum = {
  youtube: [
    'Channel setup',
    'Content strategy',
    'Shorts',
    'Long-form videos',
    'Titles and thumbnails',
    'Audience growth',
    'Monetization basics',
  ],
  facebook: [
    'Page setup',
    'Reels',
    'Content strategy',
    'Audience growth',
    'Monetization basics',
  ],
  instagram: [
    'Reels',
    'Content creation',
    'Profile optimization',
    'Hashtags',
    'Audience growth',
    'Engagement strategy',
  ],
};

export const whyChooseUsPoints = [
  {
    title: 'Practical AI Skills',
    desc: 'Hands-on training focusing on real-world workflows that you can immediately apply to client projects or your brand.',
  },
  {
    title: 'Professional UGC Content',
    desc: 'Direct-response, high-retention video creatives designed by creators who understand social algorithms.',
  },
  {
    title: 'Social Media Knowledge',
    desc: 'Proven growth and monetization frameworks across YouTube, Facebook, and Instagram.',
  },
  {
    title: 'Easy-to-Follow Learning',
    desc: 'Structured, step-by-step masterclasses without fluff, technical overwhelm, or generic theories.',
  },
  {
    title: 'Creative Digital Solutions',
    desc: 'Modern fusion of human creativity and AI acceleration to produce standout digital assets at scale.',
  },
];
