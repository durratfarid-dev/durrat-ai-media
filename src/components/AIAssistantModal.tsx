import React, { useState, useEffect, useRef } from 'react';
import { PageId, AssistantLanguage, UGCIntakeData, ChatMessage, AssistantAction } from '../types';
import { 
  assistantTranslations, 
  ugcQuestionsList, 
  initialOptionsList 
} from '../data/assistantKnowledge';
import { useConfig } from '../context/ConfigContext';
import { 
  Bot, 
  X, 
  Minus, 
  Send, 
  RotateCcw, 
  Mail, 
  MessageCircle, 
  ExternalLink, 
  Check, 
  Copy, 
  Globe, 
  Sparkles, 
  AlertCircle, 
  ShieldCheck,
  CheckCircle2,
  Edit3,
  ArrowRight
} from 'lucide-react';

interface AIAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: PageId) => void;
}

export const AIAssistantModal: React.FC<AIAssistantModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
}) => {
  const { config } = useConfig();

  // Assistant states
  const [language, setLanguage] = useState<AssistantLanguage | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [copiedSummary, setCopiedSummary] = useState(false);

  // UGC intake step tracker (-1 = not in UGC intake; 0 to 12 = asking questions; 13 = summary review; 14 = submitted)
  const [ugcStep, setUgcStep] = useState<number>(-1);
  const ugcStepRef = useRef<number>(-1);
  const [editingFieldKey, setEditingFieldKey] = useState<keyof Omit<UGCIntakeData, 'service'> | null>(null);

  const initialEmptyUgcData: UGCIntakeData = {
    service: 'UGC Ad Making',
    name: '',
    brand: '',
    email: '',
    product: '',
    promotion: '',
    targetAudience: '',
    videoLength: '',
    numberOfVideos: '',
    ugcStyle: '',
    mainMessage: '',
    deadline: '',
    budget: '',
    additionalRequirements: '',
  };

  // Structured UGC Intake Object
  const [ugcData, setUgcData] = useState<UGCIntakeData>(initialEmptyUgcData);
  const ugcDataRef = useRef<UGCIntakeData>(initialEmptyUgcData);

  const updateUgcData = (newData: UGCIntakeData) => {
    ugcDataRef.current = newData;
    setUgcData(newData);
  };

  const updateUgcStep = (newStep: number) => {
    ugcStepRef.current = newStep;
    setUgcStep(newStep);
  };

  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const t = language ? assistantTranslations[language] : assistantTranslations.en;
  const isRTL = language === 'ar' || language === 'ur';

  // Scroll to bottom on new messages
  useEffect(() => {
    if (isOpen && !isMinimized) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, isOpen, isMinimized]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && !isMinimized && language) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, isMinimized, language]);

  // Initial welcome message requesting language selection
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      initChat();
    }
  }, [isOpen]);

  const initChat = () => {
    setLanguage(null);
    updateUgcStep(-1);
    updateUgcData(initialEmptyUgcData);
    setEditingFieldKey(null);
    setMessages([
      {
        id: 'welcome-lang-picker',
        sender: 'assistant',
        text: 'Welcome to Durrat AI Media! Please select your preferred language to begin:\n\nمرحباً بك في درّة للوسائط الذكية! يرجى اختيار لغتك المفضلة:\n\nدرّة اے آئی میڈیا میں خوش آمدید! براہ کرم اپنی پسندیدہ زبان منتخب کریں:',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        quickReplies: [
          { label: 'English 🇬🇧', action: 'set_lang_en', payload: 'en' },
          { label: 'العربية 🇸🇦', action: 'set_lang_ar', payload: 'ar' },
          { label: 'اردو 🇵🇰', action: 'set_lang_ur', payload: 'ur' },
        ],
      },
    ]);
  };

  const handleSelectLanguage = (lang: AssistantLanguage) => {
    setLanguage(lang);
    const trans = assistantTranslations[lang];

    const langName = lang === 'en' ? 'English' : lang === 'ar' ? 'العربية' : 'اردو';

    const userConfirmMsg: ChatMessage = {
      id: `lang-choice-${Date.now()}`,
      sender: 'user',
      text: langName,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const mainOptions = initialOptionsList.map((opt) => ({
      label: opt.labels[lang],
      action: opt.action,
    }));

    const greetingMsg: ChatMessage = {
      id: `greeting-${Date.now()}`,
      sender: 'assistant',
      text: `${trans.greetingPrompt}`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      quickReplies: mainOptions,
    };

    setMessages((prev) => [...prev, userConfirmMsg, greetingMsg]);
  };

  // Add Assistant Response Helper with brief typing simulation
  const addAssistantResponse = (
    text: string, 
    quickReplies?: Array<{ label: string; action: string; payload?: any }>,
    actions?: AssistantAction[],
    summary?: UGCIntakeData
  ) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: `asst-${Date.now()}`,
          sender: 'assistant',
          text,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          quickReplies,
          actions,
          ugcSummary: summary,
        },
      ]);
    }, 450);
  };

  // Start UGC Intake Flow (accepts pre-extracted data and custom introductory acknowledgment)
  const startUgcFlow = (
    currLang: AssistantLanguage,
    initialData?: Partial<UGCIntakeData>,
    customIntro?: string
  ) => {
    const trans = assistantTranslations[currLang];
    
    // Initialize base data with any extracted values
    const baseData: UGCIntakeData = {
      service: 'UGC Ad Making',
      name: '',
      brand: '',
      email: '',
      product: '',
      promotion: '',
      targetAudience: '',
      videoLength: '',
      numberOfVideos: '',
      ugcStyle: '',
      mainMessage: '',
      deadline: '',
      budget: '',
      additionalRequirements: '',
      ...(initialData || {}),
    };

    updateUgcData(baseData);
    setEditingFieldKey(null);

    // Find first question whose value is not yet provided
    const firstMissingIdx = ugcQuestionsList.findIndex((q) => !baseData[q.key]?.trim());
    const stepToStart = firstMissingIdx !== -1 ? firstMissingIdx : 0;
    updateUgcStep(stepToStart);

    const targetQuestion = ugcQuestionsList[stepToStart];
    const questionText = targetQuestion.question[currLang];

    const introText = customIntro || trans.ugcInitialAck;
    const combinedMessage = `${introText}\n\n${questionText}`;

    const quickReplies = targetQuestion.quickReplies
      ? targetQuestion.quickReplies[currLang].map((r) => ({ label: r, action: 'ugc_answer', payload: r }))
      : undefined;

    addAssistantResponse(combinedMessage, quickReplies);
  };

  // Process User Input during UGC Intake (asks one question at a time and skips already-answered fields)
  const handleUgcAnswer = (answer: string, currLang: AssistantLanguage) => {
    const activeStep = ugcStepRef.current >= 0 ? ugcStepRef.current : ugcStep;
    if (activeStep < 0 || activeStep >= ugcQuestionsList.length) return;

    const currentQuestion = ugcQuestionsList[activeStep];
    const key = currentQuestion.key;

    // Update state object with this answer
    const currentStored = ugcDataRef.current;
    const updatedData: UGCIntakeData = {
      ...currentStored,
      [key]: answer.trim(),
    };

    // If the answer also happened to provide an email and email wasn't set yet
    const emailMatch = answer.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
    if (emailMatch && !updatedData.email) {
      updatedData.email = emailMatch[0];
    }

    updateUgcData(updatedData);

    // Find the next missing question starting strictly after the current step
    let nextStepIndex = -1;
    for (let i = activeStep + 1; i < ugcQuestionsList.length; i++) {
      const qKey = ugcQuestionsList[i].key;
      if (!updatedData[qKey] || !updatedData[qKey].trim()) {
        nextStepIndex = i;
        break;
      }
    }

    // If no missing question after current step, verify if any earlier question was skipped
    if (nextStepIndex === -1) {
      for (let i = 0; i < ugcQuestionsList.length; i++) {
        const qKey = ugcQuestionsList[i].key;
        if (!updatedData[qKey] || !updatedData[qKey].trim()) {
          nextStepIndex = i;
          break;
        }
      }
    }

    if (nextStepIndex !== -1) {
      // Advance to next missing question
      updateUgcStep(nextStepIndex);
      const nextQuestion = ugcQuestionsList[nextStepIndex];
      const quickReplies = nextQuestion.quickReplies
        ? nextQuestion.quickReplies[currLang].map((r) => ({ label: r, action: 'ugc_answer', payload: r }))
        : undefined;

      addAssistantResponse(nextQuestion.question[currLang], quickReplies);
    } else {
      // Completed all questions -> show summary review
      showUgcSummary(updatedData, currLang);
    }
  };

  // Display summary review of UGC request
  const showUgcSummary = (data: UGCIntakeData, currLang: AssistantLanguage) => {
    const trans = assistantTranslations[currLang];
    updateUgcStep(13); // Review state

    const summaryText = `${trans.ugcSummaryTitle}

• Name: ${data.name || 'N/A'}
• Brand: ${data.brand || 'N/A'}
• Email: ${data.email || 'N/A'}
• Product/Service: ${data.product || 'N/A'}
• Promotion: ${data.promotion || 'N/A'}
• Target Audience: ${data.targetAudience || 'N/A'}
• Video Length: ${data.videoLength || 'N/A'}
• Number of Videos: ${data.numberOfVideos || 'N/A'}
• UGC Style: ${data.ugcStyle || 'N/A'}
• Main Message: ${data.mainMessage || 'N/A'}
• Deadline: ${data.deadline || 'N/A'}
• Budget: ${data.budget || 'N/A'}
• Additional Requirements: ${data.additionalRequirements || 'None'}

${trans.isEverythingCorrect}`;

    addAssistantResponse(
      summaryText,
      [
        { label: `✅ ${trans.yesSubmit}`, action: 'submit_ugc_final' },
        { label: `✏️ ${trans.editInfo}`, action: 'edit_ugc_menu' },
      ],
      undefined,
      data
    );
  };

  // Handle Edit Information Menu
  const handleEditUgcMenu = (currLang: AssistantLanguage) => {
    const editOptions = ugcQuestionsList.map((q) => ({
      label: q.question[currLang].split('.')[0] + '. ' + q.key.toUpperCase(),
      action: 'edit_ugc_field',
      payload: q.key,
    }));

    addAssistantResponse(
      currLang === 'ar'
        ? 'ما هي المعلومة التي ترغب في تعديلها؟'
        : currLang === 'ur'
        ? 'آپ کس معلومات میں تبدیلی کرنا چاہتے ہیں؟'
        : 'Which information would you like to update?',
      editOptions
    );
  };

  // Handle Selecting a Specific Field to Edit
  const handleSelectFieldToEdit = (fieldKey: keyof Omit<UGCIntakeData, 'service'>, currLang: AssistantLanguage) => {
    setEditingFieldKey(fieldKey);
    const questionDef = ugcQuestionsList.find((q) => q.key === fieldKey);
    if (!questionDef) return;

    const quickReplies = questionDef.quickReplies
      ? questionDef.quickReplies[currLang].map((r) => ({ label: r, action: 'save_edited_field', payload: r }))
      : undefined;

    addAssistantResponse(
      `${currLang === 'ar' ? 'أدخل القيمة الجديدة لـ:' : currLang === 'ur' ? 'نئی تفصیل درج کریں:' : 'Please enter the updated value for:'} ${questionDef.question[currLang]}`,
      quickReplies
    );
  };

  // Save the Edited Field Value and return to summary
  const handleSaveEditedField = (newVal: string, currLang: AssistantLanguage) => {
    if (!editingFieldKey) return;

    const currentStored = ugcDataRef.current;
    const updatedData: UGCIntakeData = {
      ...currentStored,
      [editingFieldKey]: newVal.trim(),
    };
    updateUgcData(updatedData);
    setEditingFieldKey(null);

    // Re-show updated summary
    showUgcSummary(updatedData, currLang);
  };

  // Handle Final Submission of UGC request
  const handleSubmitUgcFinal = async (currLang: AssistantLanguage) => {
    const trans = assistantTranslations[currLang];
    updateUgcStep(14); // Submitted state

    const currentSubmission = ugcDataRef.current;

    // Generate formatted email body
    const emailSubject = encodeURIComponent('UGC Ad Request — Durrat AI Media');
    const emailBody = encodeURIComponent(`UGC Ad Request — Durrat AI Media

Customer Name: ${currentSubmission.name}
Brand Name: ${currentSubmission.brand}
Email: ${currentSubmission.email}
Product/Service: ${currentSubmission.product}
Promotion Goal: ${currentSubmission.promotion}
Target Audience: ${currentSubmission.targetAudience}
Preferred Video Length: ${currentSubmission.videoLength}
Number of Videos: ${currentSubmission.numberOfVideos}
Preferred UGC Style: ${currentSubmission.ugcStyle}
Main Message / Offer: ${currentSubmission.mainMessage}
Deadline: ${currentSubmission.deadline}
Budget: ${currentSubmission.budget}
Additional Requirements: ${currentSubmission.additionalRequirements}

Generated by Durrat AI Assistant (Client Intake JSON available)`);

    const mailtoLink = `mailto:${config.contactEmail}?subject=${emailSubject}&body=${emailBody}`;

    // Send payload to server intake route
    try {
      fetch('/api/ugc-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(currentSubmission),
      }).catch((e) => console.log('Intake endpoint ping:', e));
    } catch {
      // Graceful fallback
    }

    const postSubmitText = `${trans.thankYouSubmission}\n\n${trans.emailTeamNotice}`;

    addAssistantResponse(
      postSubmitText,
      undefined,
      [
        {
          label: trans.emailButtonLabel,
          actionType: 'mailto',
          url: mailtoLink,
        },
        {
          label: trans.joinWhatsAppButton,
          actionType: 'link',
          url: config.whatsAppChannelUrl,
        },
        {
          label: currLang === 'ar' ? 'العودة للقائمة الرئيسية' : currLang === 'ur' ? 'مین مینو' : 'Main Menu',
          actionType: 'restart',
        },
      ]
    );
  };

  // Course Flow: AI Prompting + AI Video
  const handleAICourseFlow = (currLang: AssistantLanguage) => {
    const trans = assistantTranslations[currLang];
    addAssistantResponse(
      trans.aiCourseSummary,
      undefined,
      [
        {
          label: trans.viewCourseButton,
          actionType: 'navigate',
          pageId: 'ai-course',
        },
        {
          label: trans.contactUsButton,
          actionType: 'navigate',
          pageId: 'contact',
        },
        {
          label: currLang === 'ar' ? 'القائمة الرئيسية' : currLang === 'ur' ? 'مین مینو' : 'Main Menu',
          actionType: 'restart',
        },
      ]
    );
  };

  // Course Flow: Social Media
  const handleSocialCourseFlow = (currLang: AssistantLanguage) => {
    const trans = assistantTranslations[currLang];
    addAssistantResponse(
      trans.socialCourseSummary,
      undefined,
      [
        {
          label: trans.viewCourseButton,
          actionType: 'navigate',
          pageId: 'social-course',
        },
        {
          label: trans.contactUsButton,
          actionType: 'navigate',
          pageId: 'contact',
        },
        {
          label: currLang === 'ar' ? 'القائمة الرئيسية' : currLang === 'ur' ? 'مین مینو' : 'Main Menu',
          actionType: 'restart',
        },
      ]
    );
  };

  // Contact Flow
  const handleContactFlow = (currLang: AssistantLanguage) => {
    const trans = assistantTranslations[currLang];
    addAssistantResponse(
      trans.contactSummary,
      undefined,
      [
        {
          label: trans.emailButtonLabel,
          actionType: 'mailto',
          url: `mailto:${config.contactEmail}?subject=${encodeURIComponent('Inquiry — Durrat AI Media')}`,
        },
        {
          label: trans.joinWhatsAppButton,
          actionType: 'link',
          url: config.whatsAppChannelUrl,
        },
        {
          label: currLang === 'ar' ? 'القائمة الرئيسية' : currLang === 'ur' ? 'مین مینو' : 'Main Menu',
          actionType: 'restart',
        },
      ]
    );
  };

  // Handle Quick Reply Clicks
  const handleQuickReply = (action: string, payload?: any) => {
    const currLang = language || 'en';

    if (action.startsWith('set_lang_')) {
      const selected = action.replace('set_lang_', '') as AssistantLanguage;
      handleSelectLanguage(selected);
      return;
    }

    if (action === 'select_service_ugc') {
      startUgcFlow(currLang);
      return;
    }

    if (action === 'select_service_ai_course') {
      handleAICourseFlow(currLang);
      return;
    }

    if (action === 'select_service_social_course') {
      handleSocialCourseFlow(currLang);
      return;
    }

    if (action === 'select_service_contact') {
      handleContactFlow(currLang);
      return;
    }

    if (action === 'ugc_answer') {
      const answer = String(payload || '');
      setMessages((prev) => [
        ...prev,
        {
          id: `user-${Date.now()}`,
          sender: 'user',
          text: answer,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
      handleUgcAnswer(answer, currLang);
      return;
    }

    if (action === 'edit_ugc_menu') {
      handleEditUgcMenu(currLang);
      return;
    }

    if (action === 'edit_ugc_field') {
      const field = payload as keyof Omit<UGCIntakeData, 'service'>;
      handleSelectFieldToEdit(field, currLang);
      return;
    }

    if (action === 'save_edited_field') {
      const val = String(payload || '');
      setMessages((prev) => [
        ...prev,
        {
          id: `user-${Date.now()}`,
          sender: 'user',
          text: val,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
      handleSaveEditedField(val, currLang);
      return;
    }

    if (action === 'submit_ugc_final') {
      handleSubmitUgcFinal(currLang);
      return;
    }
  };

  // Handle Action Button Clicks (Navigations, Links, Mailto)
  const handleActionClick = (action: AssistantAction) => {
    if (action.actionType === 'navigate' && action.pageId) {
      onNavigate(action.pageId);
    } else if (action.actionType === 'mailto' && action.url) {
      window.location.href = action.url;
    } else if (action.actionType === 'link' && action.url) {
      window.open(action.url, '_blank', 'noopener,noreferrer');
    } else if (action.actionType === 'restart') {
      const currLang = language || 'en';
      updateUgcStep(-1);
      updateUgcData(initialEmptyUgcData);
      setEditingFieldKey(null);
      const trans = assistantTranslations[currLang];
      const mainOptions = initialOptionsList.map((opt) => ({
        label: opt.labels[currLang],
        action: opt.action,
      }));
      addAssistantResponse(trans.greetingPrompt, mainOptions);
    }
  };

  // Helper: Detect language from message text if not yet selected or switched
  const detectLanguageFromMessage = (text: string, currentLang: AssistantLanguage | null): AssistantLanguage => {
    const urduCharRegex = /[\u0679\u0686\u0688\u0691\u06BA\u06BE\u06D2]/;
    const urduWords = /\b(چاہیے|چاہئے|کپڑوں|بنوانا|مجھے|ہمیں|ہے|ہیں|کیجیے|کریں|درکار|شکریہ|ایڈ|پروڈکٹ|ویڈیو)\b/;
    if (urduCharRegex.test(text) || urduWords.test(text)) {
      return 'ur';
    }

    const arabicRegex = /[\u0600-\u06FF]/;
    if (arabicRegex.test(text)) {
      return 'ar';
    }

    if (currentLang) return currentLang;
    return 'en';
  };

  // Helper: Extract business and product details from natural language messages
  const extractDetailsFromMessage = (text: string): { product?: string; brand?: string; email?: string } => {
    const extracted: { product?: string; brand?: string; email?: string } = {};
    const t = text.trim();

    // 1. Email extraction
    const emailMatch = t.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
    if (emailMatch) {
      extracted.email = emailMatch[0];
    }

    // 2. Explicit intimate apparel check (bras, panties, lingerie, underwear, sleepwear, swimwear)
    const intimateMatch = t.match(/\b(bras?\s+and\s+panties|bra\s+and\s+panty|bra|panties|panty|lingerie|underwear|sleepwear|intimate\s+wear|nightwear|swimwear)\b/i);
    if (intimateMatch) {
      const raw = intimateMatch[0].toLowerCase();
      if (raw.includes('bra') && (raw.includes('pantie') || raw.includes('panty'))) {
        extracted.product = 'Bra and panties';
      } else {
        extracted.product = raw.charAt(0).toUpperCase() + raw.slice(1);
      }
    }

    // 3. Explicit clothing & apparel check
    if (!extracted.product) {
      const clothMatch = t.match(/\b(clothing\s+brand|apparel\s+brand|fashion\s+brand|clothing|apparel|dresses|shoes|skincare|cosmetics|supplements)\b/i);
      if (clothMatch) {
        const c = clothMatch[0].toLowerCase();
        extracted.product = c.charAt(0).toUpperCase() + c.slice(1);
      }
    }

    // 4. Pattern: "ad/video for [product]"
    if (!extracted.product) {
      const enMatch = t.match(/(?:ads?|advertisements?|video\s+ads?|ugc(?:\s+video|\s+ad)?|promote|promoting)\s+(?:for|about|of)?\s*(?:my|our|a|the)?\s*([a-zA-Z0-9\s&,/-]+)/i);
      if (enMatch && enMatch[1]) {
        let prod = enMatch[1].trim();
        prod = prod.replace(/\b(and\s+my|with|please|urgently|asap|can\s+you).*/i, '').trim();
        prod = prod.replace(/^(my|our|a|an|the)\s+/i, '').trim();
        
        const isGeneric = /^(product|products|service|services|brand|business|item|items)$/i.test(prod);
        if (!isGeneric && prod.length > 2) {
          extracted.product = prod.charAt(0).toUpperCase() + prod.slice(1);
        }
      }
    }

    // 5. Arabic product pattern: "إعلان لـ [المنتج]"
    if (!extracted.product) {
      const arMatch = t.match(/(?:إعلان|اعلان|فيديو)\s+(?:لـ?|عن|حق)\s*([^.,!؟\n]+)/);
      if (arMatch && arMatch[1]) {
        let prod = arMatch[1].trim();
        const isGeneric = /^(منتجي|منتجاتي|متجري|بضاعتي|خدمتي|المنتج|منتج)$/.test(prod);
        if (!isGeneric && prod.length > 2) {
          extracted.product = prod;
        }
      }
    }

    // 6. Urdu product pattern: "[کپڑوں] کے لیے اشتہار"
    if (!extracted.product) {
      const urMatch = t.match(/([^.,!؟\n]+?)\s*کے\s*لیے\s*(?:اشتہار|ایڈ|ugc|ویڈیو)/);
      if (urMatch && urMatch[1]) {
        let prod = urMatch[1].trim();
        const isGeneric = /^(اپنے\s+پروڈکٹ|پروڈکٹ|میری\s+چیزیں|کاروبار)$/.test(prod);
        if (!isGeneric && prod.length > 2) {
          extracted.product = prod;
        }
      }
    }

    // 7. Brand pattern if user explicitly states brand name
    const brandMatch = t.match(/(?:brand|company|business)\s+(?:is|called|named)?\s*([a-zA-Z0-9\s&'-]+)/i);
    if (brandMatch && brandMatch[1]) {
      const b = brandMatch[1].trim();
      if (b.length > 1 && !/^(my|our|the|a)$/i.test(b)) {
        extracted.brand = b.charAt(0).toUpperCase() + b.slice(1);
      }
    }

    return extracted;
  };

  // Helper: Classify User Intent from message
  const classifyUserIntent = (
    text: string
  ): 'greeting' | 'ugc_info' | 'ugc_intent' | 'ai_course' | 'social_course' | 'pricing' | 'payment' | 'contact' | 'general' => {
    const t = text.toLowerCase().trim();

    // 1. GREETING Intent
    const greetingEn = /^(hi|hello|hey|good\s*(morning|afternoon|evening)|howdy|hiya|sup|greetings)[\s!.,?]*$/i;
    const greetingAr = /^(مرحبا|مرحباً|أهلا|اهلا|أهلاً|سلام|السلام عليكم|هلا|صباح الخير|مساء الخير)[\s!.,؟]*$/;
    const greetingUr = /^(ہیلو|سلام|السلام علیکم|آداب|صبح بخیر|شام بخیر)[\s!.,؟]*$/;

    if (greetingEn.test(t) || greetingAr.test(t) || greetingUr.test(t)) {
      return 'greeting';
    }

    // 2. UGC INFO Intent (Asking about UGC ads generally without ordering/creating)
    const isInfoEn =
      /\b(information|info|details|what is|what are|explain|tell me about|how does.*work)\b.*\b(ugc|ads?|video)/i.test(t) ||
      /\b(ugc|ads?|video ads?)\b.*\b(information|info|details)\b/i.test(t);
    const isInfoAr = /(معلومات|تفاصيل|وش هو|ما هو|ما هي|كيف يعمل|ايش هو)\s*.*(ugc|إعلان|اعلان)/.test(t);
    const isInfoUr = /(معلومات|تفصیلات|کیا ہے|کیسے کام کرتا ہے)\s*.*(ugc|یو جی سی|ایڈ|اشتہار)/.test(t);

    if (isInfoEn || isInfoAr || isInfoUr) {
      return 'ugc_info';
    }

    // 3. UGC INTENT (User indicates they want, need, or are requesting an ad, video ad, or promotion)
    const ugcIntentEn =
      /\b(need|want|make|create|shoot|produce|order|book|run|get)\b.*\b(ad|ads|advertisement|advertisements|ugc|video ad|commercial|promo video)\b/i.test(t) ||
      /\b(ads?|video ads?|ugc)\s+for\s+(my|our|a|the)?\b/i.test(t) ||
      /\b(promote|promoting|advertise|advertising)\s+(my|our|a|the)?\b/i.test(t) ||
      /\bstart\s+(ugc|ad|an ad|campaign)\b/i.test(t) ||
      /\b(bra and panties|bra|panties|lingerie|underwear|clothing brand|apparel)\b.*\b(ad|ads|ugc|video)\b/i.test(t) ||
      /\b(ad|ads|ugc|video)\b.*\b(bra and panties|bra|panties|lingerie|underwear|clothing brand|apparel)\b/i.test(t);

    const ugcIntentAr =
      /(أبغى|ابغى|أريد|اريد|أبي|ابي|محتاج|محتاجة|بدي|بدينا|نحتاج|سوي|اعمل|اصنع|نبي)\s*(لي|لنا)?\s*(إعلان|اعلان|فيديو|ugc|حملة)/.test(t) ||
      /(إعلان|اعلان|فيديو)\s*لـ?(منتجي|منتجاتي|ملابسي|متجري|براندي|ماركتي|حسابي|مشروعي|ملابس)/.test(t) ||
      /(أبغى|ابغى|أريد|اريد|محتاج|بدي)\s*(إعلان|اعلان)\s*(ugc)?/.test(t) ||
      /(ترويج|تسويق|إشهار)\s*(لـ|حق)?\s*(منتجي|منتجاتي|متجري|بضاعتي)/.test(t);

    const ugcIntentUr =
      /(اشتہار|ایڈ|ویڈیو)\s*(چاہیے|چاہئے|بنوانا|بنانا|کروانا)/.test(t) ||
      /(اشتہار|ایڈ|ویڈیو)\s*(بنانا ہے|بنوانا ہے)/.test(t) ||
      /(پروڈکٹ|کپڑوں|برانڈ|چیزوں|کاروبار)\s*کے\s*لیے\s*(اشتہار|ایڈ|ugc|ویڈیو)/.test(t) ||
      /(ugc|یو جی سی)\s*(ایڈ|اشتہار)\s*چاہیے/.test(t) ||
      /(مجھے|ہمیں)\s*.*(اشتہار|ایڈ|ویڈیو)/.test(t);

    if (ugcIntentEn || ugcIntentAr || ugcIntentUr) {
      return 'ugc_intent';
    }

    // 4. AI Course
    if (
      /\b(ai course|prompting|ai video course|prompt engineering|learn ai)\b/i.test(t) ||
      /(دورة ai|كورس ai|تعلم الذكاء الاصطناعي)/.test(t) ||
      /(اے آئی کورس|پرامپٹنگ|ویڈیو کورس)/.test(t)
    ) {
      return 'ai_course';
    }

    // 5. Social Media Course
    if (
      /\b(social media course|youtube course|instagram course|facebook course)\b/i.test(t) ||
      /(دورة السوشيال ميديا|يوتيوب|انستقرام|فيسبوك)/.test(t) ||
      /(سوشل میڈیا کورس|یوٹیوب|فیس بک|انسٹاگرام)/.test(t)
    ) {
      return 'social_course';
    }

    // 6. Pricing
    if (
      /\b(price|pricing|cost|how much|fee|rates)\b/i.test(t) ||
      /(سعر|كم السعر|تكلفة|رسوم)/.test(t) ||
      /(قیمت|فیس|کتنے پیسے)/.test(t)
    ) {
      return 'pricing';
    }

    // 7. Payment
    if (
      /\b(payment|bank|iban|transfer|wire|account number)\b/i.test(t) ||
      /(دفع|بنك|ايبان|حساب بنكي|تحويل)/.test(t) ||
      /(ادائیگی|بینک|اکاؤنٹ|پیسے کیسے بھیجیں)/.test(t)
    ) {
      return 'payment';
    }

    // 8. Contact
    if (
      /\b(contact|email|whatsapp|phone|reach you)\b/i.test(t) ||
      /(تواصل|ايميل|واتساب|رقم)/.test(t) ||
      /(رابطہ|ای میل|واٹس ایپ)/.test(t)
    ) {
      return 'contact';
    }

    return 'general';
  };

  // Helper: Warm greeting response explaining services
  const handleGreetingResponse = (currLang: AssistantLanguage) => {
    const greetingText =
      currLang === 'ar'
        ? 'أهلاً بك! 👋 مرحباً بك في درّة للوسائط الذكية. يسعدني مساعدتك في إعلانات UGC، دورة أوامر الذكاء الاصطناعي وفيديو AI، ودورات السوشيال ميديا. كيف يمكنني خدمتك اليوم؟'
        : currLang === 'ur'
        ? 'ہیلو! 👋 درّة اے آئی میڈیا میں خوش آمدید۔ میں یو جی سی (UGC) اشتہارات، اے آئی پرامپٹنگ و ویڈیو کورس، اور سوشل میڈیا کورسز میں آپ کی رہنمائی کر سکتا ہوں۔ آپ کس بارے میں جاننا چاہتے ہیں؟'
        : 'Hi! 👋 Welcome to Durrat AI Media. I can help you with UGC Ads, AI Prompting + AI Video, and Social Media courses. What would you like to know?';

    const options = [
      {
        label: currLang === 'ar' ? '🎥 بدء طلب إعلان UGC' : currLang === 'ur' ? '🎥 یو جی سی ایڈ شروع کریں' : '🎥 Start UGC Ad Request',
        action: 'select_service_ugc',
      },
      {
        label: currLang === 'ar' ? '🤖 دورة AI وفيديو' : currLang === 'ur' ? '🤖 اے آئی و ویڈیو کورس' : '🤖 AI Prompting + AI Video Course',
        action: 'select_service_ai_course',
      },
      {
        label: currLang === 'ar' ? '📱 دورة السوشيال ميديا' : currLang === 'ur' ? '📱 سوشل میڈیا کورس' : '📱 Social Media Course',
        action: 'select_service_social_course',
      },
      {
        label: currLang === 'ar' ? '✉️ تواصل معنا' : currLang === 'ur' ? '✉️ ہم سے رابطہ کریں' : '✉️ Contact Durrat AI Media',
        action: 'select_service_contact',
      },
    ];

    addAssistantResponse(greetingText, options);
  };

  // Helper: General UGC Information Response
  const handleUgcInfoResponse = (currLang: AssistantLanguage) => {
    const infoText =
      currLang === 'ar'
        ? `تتخصص درّة للوسائط الذكية في إنتاج إعلانات UGC (محتوى ينشئه المستخدم) احترافية وعالية التحويل للمتاجر والعلامات التجارية والمنتجات:

• ما نقوم بإنتاجه: إعلانات فيديو قصيرة وخطافات تسويقية (15-30 ثانية)، إعلانات ريلز لإنستغرام وتيك توك وفيسبوك، أنماط فتح الصندوق ومراجعة المنتج (Unboxing & Reviews)، فيديوهات المشكلة والحل، وإعلانات إبداعية مدعومة بالذكاء الاصطناعي.
• آلية العمل: تخبرنا عن منتجك والجمهور المستهدف، يتولى فريقنا كتابة النص وإنتاج الفيديو بالكامل، وتستلم فيديوهاتك الإعلانية جاهزة للنشر وحملات الإعلانات.

هل ترغب في بدء طلب إعلان UGC الآن؟`
        : currLang === 'ur'
        ? `درّة اے آئی میڈیا برانڈز، ای کامرس اور پراڈکٹس کے لیے اعلیٰ معیار کے یو جی سی (UGC) ویڈیو اشتہارات تیار کرنے میں مہارت رکھتی ہے:

• ہم کیا بناتے ہیں: مختصر ویڈیو اشتہارات (15-30 سیکنڈز ہکس)، ٹک ٹاک، فیس بک اور انسٹاگرام ریلز ایڈز، ان باکسنگ و ریویوز، مسئلہ اور حل پر مبنی ویڈیوز، اور جدید اے آئی ایڈز۔
• طریقہ کار: آپ اپنی پراڈکٹ اور ہدف بتاتے ہیں، ہماری تخلیقی ٹیم اسکرپٹ اور ویڈیو تیار کرتی ہے، اور آپ کو ریڈی ٹو پبلش ویڈیو اشتہارات موصول ہوتے ہیں۔

کیا آپ یو جی سی ایڈ کی درخواست جمع کروانا چاہتے ہیں؟`
        : `Durrat AI Media specializes in high-converting UGC (User-Generated Content) video ads tailored for brands, e-commerce, and products:

• What we create: Short-form video ads (15-30s hooks), TikTok & Instagram Reels ads, Facebook ads, Unboxing & Review styles, Problem/Solution videos, and AI-powered creatives.
• Workflow: You share your product details and target audience, our creative team scripts and produces your custom UGC video, and you receive ready-to-launch ad assets.

Would you like to start your UGC Ad request now?`;

    const options = [
      {
        label: currLang === 'ar' ? '🎥 بدء طلب إعلان UGC' : currLang === 'ur' ? '🎥 یو جی سی ایڈ شروع کریں' : '🎥 Start UGC Ad Request',
        action: 'select_service_ugc',
      },
      {
        label: currLang === 'ar' ? '✉️ تواصل معنا' : currLang === 'ur' ? '✉️ رابطہ کریں' : '✉️ Contact Us',
        action: 'select_service_contact',
      },
    ];

    addAssistantResponse(infoText, options);
  };

  // Handle Sending a Freeform Message
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    const text = inputVal.trim();
    if (!text) return;

    // Detect language from user input (or fallback to current language)
    const effectiveLang = detectLanguageFromMessage(text, language);
    if (!language || (effectiveLang !== language && (effectiveLang === 'ar' || effectiveLang === 'ur'))) {
      setLanguage(effectiveLang);
    }
    const currLang = effectiveLang;
    const trans = assistantTranslations[currLang];

    // Append user message
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal('');

    // 1. If currently editing a specific UGC field
    if (editingFieldKey) {
      handleSaveEditedField(text, currLang);
      return;
    }

    // 2. If in the middle of UGC intake questionnaire (0 to 12)
    if (ugcStep >= 0 && ugcStep < ugcQuestionsList.length) {
      handleUgcAnswer(text, currLang);
      return;
    }

    // 3. If in UGC summary review step (step 13)
    if (ugcStep === 13) {
      const lower = text.toLowerCase();
      if (lower.includes('yes') || lower.includes('نعم') || lower.includes('جی') || lower.includes('submit')) {
        handleSubmitUgcFinal(currLang);
      } else {
        handleEditUgcMenu(currLang);
      }
      return;
    }

    // 4. Intent Classification when neutral (ugcStep === -1)
    const intent = classifyUserIntent(text);

    // Intent A: Warm Greeting
    if (intent === 'greeting') {
      handleGreetingResponse(currLang);
      return;
    }

    // Intent B: Explicit UGC Ad Intent -> Immediately enter UGC Intake Flow
    if (intent === 'ugc_intent') {
      const extracted = extractDetailsFromMessage(text);
      
      const customIntro =
        currLang === 'ar'
          ? 'بالتأكيد! يسعدنا مساعدتك في إنشاء إعلانات UGC احترافية ومميزة لمنتجاتك. دعنا نبدأ ببعض التفاصيل.'
          : currLang === 'ur'
          ? 'بالکل! ہم آپ کے پروڈکٹس کے لیے شاندار اور پیشہ ورانہ یو جی سی (UGC) ویڈیو اشتہارات تیار کر سکتے ہیں۔ آئیے چند مختصر تفصیلات سے آغاز کرتے ہیں۔'
          : 'Absolutely. We can help create a professional UGC-style ad for your products. Let’s start with a few details.';

      startUgcFlow(currLang, extracted, customIntro);
      return;
    }

    // Intent C: General UGC Information inquiry
    if (intent === 'ugc_info') {
      handleUgcInfoResponse(currLang);
      return;
    }

    // Intent D: AI Prompting & AI Video Course
    if (intent === 'ai_course') {
      handleAICourseFlow(currLang);
      return;
    }

    // Intent E: Social Media Course
    if (intent === 'social_course') {
      handleSocialCourseFlow(currLang);
      return;
    }

    // Intent F: Pricing inquiries
    if (intent === 'pricing') {
      addAssistantResponse(
        currLang === 'ar'
          ? 'أسعار إعلانات UGC والدورات يتم تحديدها وتخصيصها بحسب متطلبات المشروع والتسجيل. يمكنك التواصل مباشرة مع فريقنا عبر البريد الإلكتروني durratfarid@gmail.com للحصول على عرض السعر المناسب.'
          : currLang === 'ur'
          ? 'یو جی سی اشتہارات اور کورسز کی فیس کی تفصیلات پروجیکٹ کے تقاضوں کے مطابق طے کی جاتی ہیں۔ براہ کرم درست معلومات کے لیے ہماری ٹیم سے durratfarid@gmail.com پر رابطہ فرمائیں۔'
          : 'UGC ad pricing and course enrollments are customized to your project scope. Please check our course pages or contact our team directly at durratfarid@gmail.com for exact package pricing.',
        [{ label: trans.contactUsButton, action: 'select_service_contact' }]
      );
      return;
    }

    // Intent G: Payment policy
    if (intent === 'payment') {
      addAssistantResponse(
        trans.paymentPolicyResponse,
        undefined,
        [
          {
            label: '💳 ' + (currLang === 'ar' ? 'عرض صفحة الدفع' : currLang === 'ur' ? 'ادائیگی کا صفحہ دیکھیں' : 'View Payment Page'),
            actionType: 'navigate',
            pageId: 'payment',
          },
        ]
      );
      return;
    }

    // Intent H: Contact
    if (intent === 'contact') {
      handleContactFlow(currLang);
      return;
    }

    // 5. General inquiries: Call backend /api/chat (Gemini API with fallback)
    setIsTyping(true);
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          language: currLang,
          history: messages.slice(-6).map((m) => ({
            role: m.sender === 'user' ? 'user' : 'model',
            text: m.text,
          })),
          ugcData: ugcStep >= 0 ? ugcData : undefined,
        }),
      });

      const data = await response.json();
      setIsTyping(false);

      if (data && data.reply) {
        addAssistantResponse(data.reply);
      } else {
        handleLocalKnowledgeFallback(text, currLang);
      }
    } catch {
      setIsTyping(false);
      handleLocalKnowledgeFallback(text, currLang);
    }
  };

  // Safe client-side rule-based knowledge fallback (never invents data)
  const handleLocalKnowledgeFallback = (query: string, currLang: AssistantLanguage) => {
    const trans = assistantTranslations[currLang];

    // Default unknown answer fallback with direct helpful actions
    addAssistantResponse(
      trans.unknownInfoFallback,
      [
        { label: '🎥 ' + (currLang === 'ar' ? 'طلب إعلان UGC' : currLang === 'ur' ? 'یو جی سی ایڈ' : 'Start UGC Ad Request'), action: 'select_service_ugc' },
        { label: '✉️ ' + trans.contactUsButton, action: 'select_service_contact' },
      ]
    );
  };

  // Copy Summary to Clipboard
  const handleCopySummary = (summaryData: UGCIntakeData) => {
    const text = `Durrat AI Media - UGC Ad Request
Name: ${summaryData.name}
Brand: ${summaryData.brand}
Email: ${summaryData.email}
Product/Service: ${summaryData.product}
Promotion Goal: ${summaryData.promotion}
Target Audience: ${summaryData.targetAudience}
Video Length: ${summaryData.videoLength}
Number of Videos: ${summaryData.numberOfVideos}
UGC Style: ${summaryData.ugcStyle}
Main Message: ${summaryData.mainMessage}
Deadline: ${summaryData.deadline}
Budget: ${summaryData.budget}
Additional Requirements: ${summaryData.additionalRequirements}`;

    navigator.clipboard.writeText(text);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <aside 
      aria-label="Durrat AI Assistant Chat Window"
      className={`fixed z-50 transition-all duration-300 ${
        isMinimized 
          ? 'bottom-6 right-6 w-80' 
          : 'bottom-4 right-4 sm:bottom-6 sm:right-6 w-[calc(100vw-2rem)] sm:w-[460px] max-w-[95vw] h-[85vh] max-h-[720px]'
      }`}
    >
      <div className="w-full h-full flex flex-col rounded-2xl sm:rounded-3xl bg-slate-950 border border-slate-800 shadow-[0_12px_45px_rgba(0,0,0,0.85),0_0_25px_rgba(6,182,212,0.15)] overflow-hidden">
        
        {/* 1. ASSISTANT HEADER */}
        <div className="bg-slate-900/95 border-b border-slate-800/80 px-4 py-3 sm:px-5 sm:py-3.5 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-cyan-950/80 border border-cyan-700/60 flex items-center justify-center text-cyan-400 shrink-0 shadow-inner">
              <Bot className="w-5 h-5 text-cyan-300" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <h2 className="text-sm font-bold text-white tracking-tight truncate">
                  {t.title}
                </h2>
              </div>
              <p className="text-[11px] text-cyan-400/90 truncate font-mono">
                {t.statusOnline}
              </p>
            </div>
          </div>

          {/* Controls: Language switch, Reset, Minimize, Close */}
          <div className="flex items-center gap-1 shrink-0">
            {/* Language Dropdown Selector */}
            <div className="relative group">
              <button
                type="button"
                className="p-1.5 rounded-lg bg-slate-800/70 hover:bg-slate-800 text-slate-300 hover:text-white text-xs flex items-center gap-1 border border-slate-700/60 transition-colors"
                title="Change Language / تغيير اللغة / زبان تبدیل کریں"
              >
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-[11px] uppercase font-bold tracking-wider">
                  {language ? language.toUpperCase() : 'EN'}
                </span>
              </button>
              <div className="absolute right-0 top-full mt-1 hidden group-hover:flex flex-col bg-slate-900 border border-slate-800 rounded-xl p-1 shadow-xl z-10 w-28">
                <button
                  type="button"
                  onClick={() => handleSelectLanguage('en')}
                  className={`px-3 py-1.5 text-left text-xs rounded-lg transition-colors ${language === 'en' ? 'bg-cyan-950 text-cyan-300 font-bold' : 'text-slate-300 hover:bg-slate-800'}`}
                >
                  English 🇬🇧
                </button>
                <button
                  type="button"
                  onClick={() => handleSelectLanguage('ar')}
                  className={`px-3 py-1.5 text-right text-xs rounded-lg transition-colors ${language === 'ar' ? 'bg-cyan-950 text-cyan-300 font-bold' : 'text-slate-300 hover:bg-slate-800'}`}
                >
                  العربية 🇸🇦
                </button>
                <button
                  type="button"
                  onClick={() => handleSelectLanguage('ur')}
                  className={`px-3 py-1.5 text-right text-xs rounded-lg transition-colors ${language === 'ur' ? 'bg-cyan-950 text-cyan-300 font-bold' : 'text-slate-300 hover:bg-slate-800'}`}
                >
                  اردو 🇵🇰
                </button>
              </div>
            </div>

            {/* Clear / Restart Chat */}
            <button
              type="button"
              onClick={initChat}
              className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
              title={t.clearChat}
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>

            {/* Minimize */}
            <button
              type="button"
              onClick={() => setIsMinimized(!isMinimized)}
              className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
              title={t.minimize}
            >
              <Minus className="w-3.5 h-3.5" />
            </button>

            {/* Close */}
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-red-950/40 text-slate-400 hover:text-red-400 transition-colors"
              title={t.close}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* BODY AREA (Only when not minimized) */}
        {!isMinimized && (
          <>
            {/* Privacy Notice Banner */}
            <div className="bg-slate-900/60 border-b border-slate-800/60 px-4 py-2 flex items-center gap-2 text-[11px] text-slate-400 shrink-0">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span className="truncate">{t.privacyNotice}</span>
            </div>

            {/* 2. CHAT MESSAGES SCROLLABLE CONTAINER */}
            <div 
              className={`flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 text-sm leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}
              dir={isRTL ? 'rtl' : 'ltr'}
            >
              {messages.map((msg) => {
                const isUser = msg.sender === 'user';
                return (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} space-y-1.5 animate-fadeIn`}
                  >
                    <div className="flex items-center gap-2 px-1">
                      <span className="text-[10px] text-slate-500 font-mono">{msg.timestamp}</span>
                      <span className="text-[10px] text-slate-400 font-semibold">
                        {isUser ? 'You' : t.title}
                      </span>
                    </div>

                    {/* Bubble Content */}
                    <div
                      className={`max-w-[90%] sm:max-w-[85%] rounded-2xl px-4 py-3 shadow-md whitespace-pre-wrap ${
                        isUser
                          ? 'bg-cyan-500 text-slate-950 font-medium rounded-tr-none shadow-[0_2px_12px_rgba(6,182,212,0.25)]'
                          : 'bg-slate-900 text-slate-100 border border-slate-800 rounded-tl-none leading-relaxed'
                      }`}
                    >
                      {msg.text}

                      {/* Render Summary Card if attached */}
                      {msg.ugcSummary && (
                        <div className="mt-3 pt-3 border-t border-slate-800/80 space-y-2">
                          <div className="flex items-center justify-between text-xs text-cyan-400 font-bold">
                            <span>{ugcData.brand || 'UGC Project'} Brief</span>
                            <button
                              type="button"
                              onClick={() => handleCopySummary(msg.ugcSummary!)}
                              className="inline-flex items-center gap-1 text-[11px] text-slate-300 hover:text-white bg-slate-800/80 px-2 py-1 rounded"
                            >
                              {copiedSummary ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                              <span>{copiedSummary ? 'Copied' : 'Copy'}</span>
                            </button>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Render Action Buttons if available */}
                    {msg.actions && msg.actions.length > 0 && (
                      <div className={`pt-2 flex flex-wrap gap-2 ${isUser ? 'justify-end' : 'justify-start'}`}>
                        {msg.actions.map((act, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => handleActionClick(act)}
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all shadow-sm cursor-pointer bg-cyan-400 hover:bg-cyan-300 text-slate-950"
                          >
                            {act.actionType === 'mailto' && <Mail className="w-3.5 h-3.5" />}
                            {act.actionType === 'link' && <MessageCircle className="w-3.5 h-3.5" />}
                            {act.actionType === 'navigate' && <ArrowRight className="w-3.5 h-3.5" />}
                            {act.actionType === 'restart' && <RotateCcw className="w-3.5 h-3.5" />}
                            <span>{act.label}</span>
                            {act.actionType === 'link' && <ExternalLink className="w-3 h-3 opacity-70" />}
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Render Quick Replies if available */}
                    {msg.quickReplies && msg.quickReplies.length > 0 && (
                      <div className={`pt-2 flex flex-wrap gap-2 ${isUser ? 'justify-end' : 'justify-start'}`}>
                        {msg.quickReplies.map((qr, qrIdx) => (
                          <button
                            key={qrIdx}
                            type="button"
                            onClick={() => handleQuickReply(qr.action, qr.payload)}
                            className="text-xs px-3 py-1.5 rounded-full bg-slate-900/90 hover:bg-slate-850 text-cyan-300 hover:text-cyan-200 border border-slate-800 hover:border-cyan-700/60 transition-colors shadow-sm cursor-pointer"
                          >
                            {qr.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex items-center gap-2 text-slate-400 text-xs px-2 py-1">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                  <span className="text-[11px] text-slate-400 font-mono ml-1">{t.typingIndicator}</span>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* 3. INPUT FORM */}
            <form
              onSubmit={handleSendMessage}
              className="p-3 sm:p-4 bg-slate-900 border-t border-slate-800 shrink-0"
              dir={isRTL ? 'rtl' : 'ltr'}
            >
              <div className="flex items-center gap-2 bg-slate-950 border border-slate-800 rounded-xl px-3 py-1.5 focus-within:border-cyan-400 transition-colors">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder={
                    editingFieldKey 
                      ? (isRTL ? 'أدخل التعديل هنا...' : 'Enter new value here...') 
                      : t.inputPlaceholder
                  }
                  className="flex-1 bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none py-1.5"
                />
                <button
                  type="submit"
                  disabled={!inputVal.trim() || isTyping}
                  className="p-2 rounded-lg bg-cyan-400 hover:bg-cyan-300 disabled:opacity-40 disabled:hover:bg-cyan-400 text-slate-950 transition-all cursor-pointer shrink-0"
                  title={t.send}
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </aside>
  );
};
