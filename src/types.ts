export type PageId = 'home' | 'ugc' | 'ai-course' | 'social-course' | 'contact' | 'payment';

export interface UGCAdFormData {
  fullName: string;
  brandName: string;
  email: string;
  productOrService: string;
  targetAudience: string;
  preferredVideoLength: string;
  videoStyle: string;
  mainMessage: string;
  scriptOrProductInfo: string;
  numberOfVideos: string;
  additionalRequirements: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface UGCPackage {
  id: string;
  name: string;
  priceLabel: string;
  isCustom?: boolean;
  features: string[];
  description: string;
  badge?: string;
}

export interface BankDetails {
  bankName: string;
  accountName: string;
  iban: string;
  paymentReference: string;
}

export interface SiteConfig {
  brandName: string;
  tagline: string;
  contactEmail: string;
  whatsAppLinks: {
    chat1: string;
    chat2: string;
  };
  prices: {
    ugcStarter: string;
    ugcProfessional: string;
    ugcBusiness: string;
    aiCourse: string;
    socialMediaCourse: string;
  };
  bankDetails: BankDetails;
}

export type AssistantLanguage = 'en' | 'ar' | 'ur';

export interface UGCIntakeData {
  service: string;
  name: string;
  brand: string;
  email: string;
  product: string;
  promotion: string;
  targetAudience: string;
  videoLength: string;
  numberOfVideos: string;
  ugcStyle: string;
  mainMessage: string;
  deadline: string;
  budget: string;
  additionalRequirements: string;
}

export interface AssistantAction {
  label: string;
  actionType: 'navigate' | 'mailto' | 'link' | 'restart' | 'edit-ugc' | 'submit-ugc' | 'whatsapp';
  pageId?: PageId;
  url?: string;
  payload?: any;
}

export interface ChatMessage {
  id: string;
  sender: 'assistant' | 'user';
  text: string;
  timestamp: string;
  quickReplies?: Array<{ label: string; action: string; payload?: any }>;
  actions?: AssistantAction[];
  ugcSummary?: UGCIntakeData;
}
