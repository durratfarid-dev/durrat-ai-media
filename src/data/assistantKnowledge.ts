import { AssistantLanguage, UGCIntakeData } from '../types';

export interface LocalizedStrings {
  title: string;
  tagline: string;
  statusOnline: string;
  privacyNotice: string;
  clearChat: string;
  clearConfirm: string;
  minimize: string;
  close: string;
  inputPlaceholder: string;
  send: string;
  greetingHeader: string;
  greetingPrompt: string;
  ugcInitialAck: string;
  ugcSummaryTitle: string;
  isEverythingCorrect: string;
  yesSubmit: string;
  editInfo: string;
  thankYouSubmission: string;
  emailTeamNotice: string;
  emailButtonLabel: string;
  viewCourseButton: string;
  contactUsButton: string;
  joinWhatsAppButton: string;
  aiCourseSummary: string;
  socialCourseSummary: string;
  contactSummary: string;
  paymentPolicyResponse: string;
  unknownInfoFallback: string;
  typingIndicator: string;
}

export const assistantTranslations: Record<AssistantLanguage, LocalizedStrings> = {
  en: {
    title: 'Durrat AI Assistant',
    tagline: 'AI • UGC • Social Media Support',
    statusOnline: 'Official Customer Intake',
    privacyNotice: 'Please do not share passwords, OTPs, card numbers or other sensitive information.',
    clearChat: 'Reset Chat',
    clearConfirm: 'Clear conversation and start over?',
    minimize: 'Minimize',
    close: 'Close',
    inputPlaceholder: 'Type your message or response...',
    send: 'Send',
    greetingHeader: 'Welcome to Durrat AI Media',
    greetingPrompt: 'How can we help you today?',
    ugcInitialAck: "Great! We can help create a professional UGC-style advertisement for your brand. I’ll ask you a few quick questions so our team can understand your project.",
    ugcSummaryTitle: 'Here is your UGC Ad Request:',
    isEverythingCorrect: 'Is everything correct?',
    yesSubmit: 'Yes, Submit Request',
    editInfo: 'Edit Information',
    thankYouSubmission: 'Thank you! Your UGC Ad request has been received. Our Durrat AI Media team will review your requirements and contact you by email.',
    emailTeamNotice: 'Please click the email button below to send your request directly to our team at durratfarid@gmail.com.',
    emailButtonLabel: 'Email Durrat AI Media',
    viewCourseButton: 'View Course',
    contactUsButton: 'Contact Us',
    joinWhatsAppButton: 'Join Our WhatsApp Channel',
    aiCourseSummary: `The "AI Prompting + AI Video" Course includes:

• AI Prompting:
  - Writing effective prompts
  - Image generation prompts
  - Character prompts & consistent character creation
  - Creative prompts & advanced prompting techniques

• AI Video:
  - AI video generation & workflows
  - Image-to-video & Text-to-video
  - Character animation & story video creation
  - Cinematic scenes & video prompt writing

• Target Audience: Content creators, beginners, social media creators, freelancers, digital marketers, and AI enthusiasts.

Pricing details and current intake availability can be confirmed directly on our course page or with our team.`,
    socialCourseSummary: `The "Social Media Mastery" Course covers:

• YouTube: Channel setup, content strategy, Shorts, long-form videos, titles & thumbnails, audience growth, monetization basics.
• Facebook: Page setup, Reels, content strategy, audience growth, monetization basics.
• Instagram: Reels, content creation, profile optimization, hashtags, audience growth, engagement strategy.

Focused on practical frameworks to build an engaged audience and understand social algorithms.`,
    contactSummary: `Durrat AI Media Direct Contact:

• Email: durratfarid@gmail.com
• WhatsApp Channel: Official updates, AI tools & creative strategies.

Feel free to send us an email directly or join our WhatsApp community below!`,
    paymentPolicyResponse: `Official bank transfer details for course enrollments are available on our website's Payment page. 

Payment details can also be provided directly by the Durrat AI Media team upon registration.
Please note: We never ask for sensitive credentials such as card numbers, PINs, or OTPs.`,
    unknownInfoFallback: "I don't have that information yet. Please contact the Durrat AI Media team at durratfarid@gmail.com.",
    typingIndicator: 'Durrat AI Assistant is typing...',
  },

  ar: {
    title: 'مساعد درّة للذكاء الاصطناعي',
    tagline: 'دعم درّة للوسائط الذكية • إعلانات UGC • سوشيال ميديا',
    statusOnline: 'المساعد الذكي لخدمة العملاء',
    privacyNotice: 'يرجى عدم مشاركة كلمات المرور أو رموز التحقق (OTP) أو أرقام البطاقات المصرفية أو البيانات الحساسة.',
    clearChat: 'بدء محادثة جديدة',
    clearConfirm: 'هل ترغب في إعادة ضبط المحادثة والبدء من جديد؟',
    minimize: 'تصغير',
    close: 'إغلاق',
    inputPlaceholder: 'اكتب رسالتك أو إجابتك هنا...',
    send: 'إرسال',
    greetingHeader: 'مرحباً بك في درّة للوسائط الذكية',
    greetingPrompt: 'كيف يمكننا مساعدتك اليوم؟',
    ugcInitialAck: 'رائع جداً! يسعدنا مساعدتك في إنشاء إعلانات UGC احترافية ومميزة لعلامتك التجارية. سأطرح عليك بعض الأسئلة السريعة ليتمكن فريقنا من فهم مشروعك بدقة.',
    ugcSummaryTitle: 'إليك ملخص طلب إعلان UGC الخاص بك:',
    isEverythingCorrect: 'هل جميع المعلومات صحيحة ومكتملة؟',
    yesSubmit: 'نعم، إرسال الطلب',
    editInfo: 'تعديل البيانات',
    thankYouSubmission: 'شكراً لك! تم استلام طلب إعلان UGC الخاص بك بنجاح. سيقوم فريق درّة للوسائط الذكية بمراجعة المتطلبات والتواصل معك عبر البريد الإلكتروني.',
    emailTeamNotice: 'يرجى النقر على زر البريد الإلكتروني أدناه لإرسال تفاصيل طلبك مباشرة إلى فريقنا على durratfarid@gmail.com.',
    emailButtonLabel: 'مراسلة درّة للوسائط الذكية',
    viewCourseButton: 'عرض تفاصيل الدورة',
    contactUsButton: 'تواصل معنا',
    joinWhatsAppButton: 'الانضمام لقناة الواتساب',
    aiCourseSummary: `دورة "أوامر الذكاء الاصطناعي وفيديو AI" تشمل:

• أوامر الذكاء الاصطناعي (AI Prompting):
  - كتابة الأوامر الاحترافية والفعّالة
  - أوامر توليد الصور والشخصيات
  - إنشاء شخصيات متناسقة وثابتة (Consistent Characters)
  - تقنيات الأوامر المتقدمة والإبداعية

• فيديو الذكاء الاصطناعي (AI Video):
  - توليد الفيديو بالذكاء الاصطناعي ومسارات العمل
  - تحويل الصور إلى فيديو وتحويل النصوص إلى فيديو
  - تحريك الشخصيات وصناعة مقاطع القصص والمشاهد السينمائية
  - كتابة برومبتات الفيديو الاحترافية

• لمن هذه الدورة: صُنّاع المحتوى، المبتدئون، المستقلون (Freelancers)، المسوقون الرقميون، وكل مهتم بتقنيات الذكاء الاصطناعي.`,
    socialCourseSummary: `دورة "احتراف السوشيال ميديا" تشمل:

• يوتيوب (YouTube): إنشاء وتجهيز القناة، استراتيجية المحتوى، مقاطع الشورتس (Shorts)، الفيديوهات الطويلة، العناوين والصور المصغرة، نمو الجمهور، وأساسيات تحقيق الدخل.
• فيسبوك (Facebook): إعداد وتجهيز الصفحة، مقاطع الريلز (Reels)، استراتيجية المحتوى، جذب المتابعين، وأساسيات الدخل.
• إنستغرام (Instagram): مقاطع الريلز، صناعة المحتوى، تحسين الحساب (Bio & Optimization)، الهاشتاقات، وتنمية التفاعل.`,
    contactSummary: `معلومات التواصل المباشر مع درّة للوسائط الذكية:

• البريد الإلكتروني: durratfarid@gmail.com
• قناة الواتساب الرسمية: لمتابعة أحدث أدوات الذكاء الاصطناعي واستراتيجيات صناعة المحتوى.

يسعدنا تواصلك معنا مباشرة عبر البريد الإلكتروني أو الانضمام لقناتنا على الواتساب!`,
    paymentPolicyResponse: `بيانات التحويل البنكي الرسمية للتسجيل في الدورات متوفرة في صفحة "الدفع" بالموقع. 

كما يمكن تزويدك بالتفاصيل المصرفية مباشرة من قبل فريق درّة للوسائط الذكية عند التسجيل.
ملاحظة هامة: نحن لا نطلب إطلاقاً بيانات مصرفية سرية مثل أرقام بطاقات الائتمان أو رموز الأمان (CVV/OTP).`,
    unknownInfoFallback: 'هذه المعلومة غير متوفرة لدي حالياً. يرجى التواصل مباشرة مع فريق درّة للوسائط الذكية عبر البريد الإلكتروني durratfarid@gmail.com.',
    typingIndicator: 'مساعد درّة يكتب الآن...',
  },

  ur: {
    title: 'درّة اے آئی اسسٹنٹ',
    tagline: 'درّة اے آئی میڈیا سپورٹ • یو جی سی • سوشل میڈیا',
    statusOnline: 'کسٹمر انٹیک و سپورٹ اسسٹنٹ',
    privacyNotice: 'براہ کرم پاس ورڈز، او ٹی پی (OTP)، کارڈ نمبرز یا دیگر حساس معلومات ہرگز شیئر نہ کریں۔',
    clearChat: 'نئی گفتگو',
    clearConfirm: 'کیا آپ موجودہ گفتگو ختم کر کے دوبارہ شروع کرنا چاہتے ہیں؟',
    minimize: 'چھوٹا کریں',
    close: 'بند کریں',
    inputPlaceholder: 'اپنا پیغام یا جواب یہاں ٹائپ کریں...',
    send: 'بھیجیں',
    greetingHeader: 'درّة اے آئی میڈیا میں خوش آمدید',
    greetingPrompt: 'آج ہم آپ کی کیا مدد کر سکتے ہیں؟',
    ugcInitialAck: 'بہت خوب! ہم آپ کے برانڈ کے لیے شاندار اور پیشہ ورانہ یو جی سی (UGC) اسٹائل ویڈیو اشتہارات تیار کرنے میں مکمل مدد فراہم کرتے ہیں۔ میں آپ سے چند مختصر سوالات پوچھوں گا تاکہ ہماری ٹیم آپ کے پروجیکٹ کو اچھی طرح سمجھ سکے۔',
    ugcSummaryTitle: 'آپ کی یو جی سی ایڈ کی درخواست کی تفصیلات:',
    isEverythingCorrect: 'کیا تمام معلومات درست ہیں؟',
    yesSubmit: 'جی ہاں، درخواست بھیجیں',
    editInfo: 'معلومات تبدیل کریں',
    thankYouSubmission: 'شکریہ! آپ کی یو جی سی ایڈ کی درخواست موصول ہو گئی ہے۔ درّة اے آئی میڈیا کی ٹیم جلد آپ کی ضروریات کا جائزہ لے کر ای میل کے ذریعے رابطہ کرے گی۔',
    emailTeamNotice: 'براہ کرم نیچے دیے گئے ای میل بٹن پر کلک کر کے اپنی تفصیلات ہماری ٹیم (durratfarid@gmail.com) کو بھیجیں۔',
    emailButtonLabel: 'درّة اے آئی میڈیا کو ای میل کریں',
    viewCourseButton: 'کورس دیکھیں',
    contactUsButton: 'ہم سے رابطہ کریں',
    joinWhatsAppButton: 'واٹس ایپ چینل جوائن کریں',
    aiCourseSummary: `"اے آئی پرامپٹنگ + اے آئی ویڈیو" کورس میں شامل ہے:

• اے آئی پرامپٹنگ (AI Prompting):
  - مؤثر اور کارآمد پرامپٹس لکھنا
  - امیج جنریشن پرامپٹس
  - کیریکٹر پرامپٹس اور مستقل کردار سازی (Consistent Characters)
  - تخلیقی اور ایڈوانس پرامپٹنگ تکنیکس

• اے آئی ویڈیو (AI Video):
  - اے آئی ویڈیو جنریشن اور مکمل ورک فلو
  - امیج سے ویڈیو اور ٹیکسٹ سے ویڈیو بنانا
  - کیریکٹر اینیمیشن اور اسٹوری ویڈیوز
  - سینیمیٹک مناظر اور ویڈیو پرامپٹ رائٹنگ

• یہ کورس کن کے لیے ہے: کنٹینٹ کریئیٹرز، مبتدی (Beginners)، فری لانسرز، ڈیجیٹل مارکیٹرز اور اے آئی سیکھنے کے خواہشمند افراد۔`,
    socialCourseSummary: `"سوشل میڈیا ماسٹری" کورس میں شامل ہے:

• یوٹیوب (YouTube): چینل سیٹ اپ، کنٹینٹ اسٹریٹجی، شارٹس (Shorts)، لمبی ویڈیوز، ٹائٹل و تھمب نیلز، آڈینس گروتھ اور مونیٹائزیشن کی بنیادی باتیں۔
• فیس بک (Facebook): پیج سیٹ اپ، ریلز (Reels)، کنٹینٹ پلان، فالوورز بڑھانا اور آمدنی کے طریقے۔
• انسٹاگرام (Instagram): ریلز، پروفائل آپٹیمائزیشن، ہیش ٹیگز، انگیجمنٹ اور آڈینس گروتھ۔`,
    contactSummary: `درّة اے آئی میڈیا سے براہ راست رابطے کی معلومات:

• ای میل: durratfarid@gmail.com
• واٹس ایپ چینل: نئی اپڈیٹس اور اے آئی اسٹریٹجیز کے لیے۔

آپ براہ راست ہمیں ای میل کر سکتے ہیں یا نیچے دیے گئے بٹن سے واٹس ایپ چینل جوائن کر سکتے ہیں!`,
    paymentPolicyResponse: `کورس فیس کی بینک ٹرانسفر تفصیلات ویب سائٹ کے "Payment" پیج پر موجود ہیں۔

رجسٹریشن کے وقت بینک تفصیلات درّة اے آئی میڈیا کی ٹیم بھی براہ راست فراہم کرتی ہے۔
نوٹ: ہم کبھی بھی آپ کے اے ٹی ایم پن، پاس ورڈز یا کارڈ نمبرز جیسی حساس معلومات نہیں مانگتے۔`,
    unknownInfoFallback: 'یہ معلومات فی الحال میرے پاس موجود نہیں ہیں۔ براہ کرم درّة اے آئی میڈیا کی ٹیم سے ای میل پر رابطہ فرمائیں: durratfarid@gmail.com۔',
    typingIndicator: 'درّة اسسٹنٹ ٹائپ کر رہا ہے...',
  },
};

// 13 UGC Questions in all 3 languages
export interface UGCQuestionDef {
  key: keyof Omit<UGCIntakeData, 'service'>;
  question: Record<AssistantLanguage, string>;
  quickReplies?: Record<AssistantLanguage, string[]>;
}

export const ugcQuestionsList: UGCQuestionDef[] = [
  {
    key: 'name',
    question: {
      en: '1. What is your Full Name?',
      ar: '1. ما هو اسمك الكامل الكريم؟',
      ur: '1. آپ کا پورا نام کیا ہے؟',
    },
  },
  {
    key: 'brand',
    question: {
      en: '2. What is your Business / Brand Name?',
      ar: '2. ما هو اسم شركتك أو علامتك التجارية (Brand)؟',
      ur: '2. آپ کے بزنس یا برانڈ کا نام کیا ہے؟',
    },
  },
  {
    key: 'email',
    question: {
      en: '3. What is your Email Address so our team can reach you?',
      ar: '3. ما هو بريدك الإلكتروني لنتواصل معك؟',
      ur: '3. آپ کا ای میل ایڈریس کیا ہے؟',
    },
  },
  {
    key: 'product',
    question: {
      en: '4. What is your Product or Service?',
      ar: '4. ما هو المنتج أو الخدمة التي تقدمها؟',
      ur: '4. آپ کی پراڈکٹ یا سروس کیا ہے؟',
    },
  },
  {
    key: 'promotion',
    question: {
      en: '5. What do you want the video to promote? (e.g. Launch offer, key benefits, seasonal sale)',
      ar: '5. ما الذي ترغب في أن يركز عليه الفيديو الإعلاني؟ (مثال: عرض إطلاق، مميزات المنتج، تخفيضات)',
      ur: '5. آپ ویڈیو میں کس چیز کی تشہیر کرنا چاہتے ہیں؟ (مثلاً نئی آفر، پراڈکٹ کے فوائد، سیل)',
    },
  },
  {
    key: 'targetAudience',
    question: {
      en: '6. Who is your Target Audience? (e.g. Young professionals, parents, fitness lovers)',
      ar: '6. من هو جمهورك المستهدف؟ (مثال: الشباب، الأمهات، المهتمون باللياقة، رواد الأعمال)',
      ur: '6. آپ کی ٹارگٹ آڈینس کون ہے؟ (مثلاً نوجوان، پیشہ ور افراد، گھریلو خواتین)',
    },
    quickReplies: {
      en: ['Broad Audience', 'Young Adults (18-30)', 'E-commerce Buyers', 'B2B / Professionals'],
      ar: ['جمهور عام واسع', 'الشباب (18-30)', 'متسوقو المتاجر الإلكترونية', 'رواد أعمال وشركات'],
      ur: ['عام ناظرین', 'نوجوان (18-30)', 'آن لائن خریدار', 'پیشہ ور افراد و کمپنیاں'],
    },
  },
  {
    key: 'videoLength',
    question: {
      en: '7. What is your Preferred Video Length?',
      ar: '7. ما هي مدة الفيديو المفضلة لديك؟',
      ur: '7. ویڈیو کی پسندیدہ لمبائی کیا ہے؟',
    },
    quickReplies: {
      en: ['15 Seconds (Quick Hook)', '30 Seconds (Standard UGC)', '60 Seconds (Detailed Review)'],
      ar: ['15 ثانية (خطاف سريع)', '30 ثانية (إعلان UGC قياسي)', '60 ثانية (مراجعة مفصلة)'],
      ur: ['15 سیکنڈ (کوئیک ہک)', '30 سیکنڈ (معیاری یو جی سی)', '60 سیکنڈ (تفصیلی ریویو)'],
    },
  },
  {
    key: 'numberOfVideos',
    question: {
      en: '8. How many videos do you need?',
      ar: '8. كم عدد مقاطع الفيديو التي تحتاجها؟',
      ur: '8. آپ کو کتنی ویڈیوز درکار ہیں؟',
    },
    quickReplies: {
      en: ['1 Video', '2-3 Videos (A/B Testing)', '5+ Videos (Campaign Batch)'],
      ar: ['فيديو واحد (1)', '2 إلى 3 فيديوهات (لاختبار A/B)', '5 فيديوهات فأكثر (حزمة حملة إعلانية)'],
      ur: ['1 ویڈیو', '2 سے 3 ویڈیوز (ٹیسٹنگ کے لیے)', '5 یا اس سے زیادہ ویڈیوز'],
    },
  },
  {
    key: 'ugcStyle',
    question: {
      en: '9. What is your Preferred UGC Style?',
      ar: '9. ما هو نمط إعلان UGC المفضل لديك؟',
      ur: '9. آپ کا پسندیدہ یو جی سی اسٹائل کون سا ہے؟',
    },
    quickReplies: {
      en: ['Unboxing & Review', 'Problem / Solution Hook', 'TikTok Native Trend', 'AI-Powered Creative'],
      ar: ['فتح الصندوق ومراجعة المنتج (Unboxing)', 'مشكلة وحل (Problem/Solution)', 'نمط تيك توك رائج (Trend)', 'إعلان مدعوم بالذكاء الاصطناعي'],
      ur: ['ان باکسنگ و ریویو', 'مسئلہ اور حل (Problem-Solution)', 'ٹک ٹاک ٹرینڈ اسٹائل', 'اے آئی تخلیقی ایڈ'],
    },
  },
  {
    key: 'mainMessage',
    question: {
      en: '10. What is your Main Message or Call-to-Action (Offer)?',
      ar: '10. ما هي الرسالة الأساسية أو العرض / الدعوة لاتخاذ إجراء (Call to Action)؟',
      ur: '10. آپ کا بنیادی پیغام یا آفر (Call to Action) کیا ہے؟',
    },
  },
  {
    key: 'deadline',
    question: {
      en: '11. What is your Target Deadline?',
      ar: '11. ما هو الموعد النهائي المطلوب لتسليم العمل؟',
      ur: '11. کام مکمل کرنے کی ڈیڈ لائن کیا ہے؟',
    },
    quickReplies: {
      en: ['Within 1 Week (Urgent)', 'Within 2 Weeks (Standard)', 'Flexible Deadline'],
      ar: ['خلال أسبوع (عاجل)', 'خلال أسبوعين (قياسي)', 'مرن حسب الاتفاق'],
      ur: ['1 ہفتے کے اندر (فوری)', '2 ہفتوں کے اندر', 'لچکدار (Flexible)'],
    },
  },
  {
    key: 'budget',
    question: {
      en: '12. What is your estimated Budget Range?',
      ar: '12. ما هي ميزانيتك المقدرة للمشروع؟',
      ur: '12. آپ کا متوقع بجٹ کتنا ہے؟',
    },
    quickReplies: {
      en: ['Starter Budget', 'Flexible / Discuss with Team', 'Custom Agency Package'],
      ar: ['ميزانية مبدئية', 'مرنة / مناقشة مع الفريق', 'حزمة احترافية متكاملة'],
      ur: ['ابتدائی بجٹ', 'لچکدار / ٹیم سے بات چیت', 'کسٹم ایجنسی پیکیج'],
    },
  },
  {
    key: 'additionalRequirements',
    question: {
      en: '13. Any Additional Requirements or Notes for our team?',
      ar: '13. هل لديك أي متطلبات أو ملاحظات إضافية لفريق العمل؟',
      ur: '13. کیا ٹیم کے لیے کوئی اضافی ہدایات یا ضروریات ہیں؟',
    },
    quickReplies: {
      en: ['No additional requirements', 'Provide music & captions', 'Multiple aspect ratios (9:16 & 1:1)'],
      ar: ['لا توجد متطلبات إضافية', 'تضمين موسيقى وكتابة نصية (Captions)', 'مقاسات متعددة (9:16 و 1:1)'],
      ur: ['کوئی اضافی شرط نہیں', 'میوزک اور کیپشنز شامل کریں', 'مختلف سائز (9:16 اور 1:1)'],
    },
  },
];

export const initialOptionsList = [
  {
    action: 'select_service_ugc',
    labels: {
      en: '🎥 UGC Ad Making',
      ar: '🎥 إنتاج إعلانات UGC',
      ur: '🎥 یو جی سی ایڈ سروس',
    },
  },
  {
    action: 'select_service_ai_course',
    labels: {
      en: '🤖 AI Prompting + AI Video Course',
      ar: '🤖 دورة أوامر الذكاء الاصطناعي وفيديو AI',
      ur: '🤖 اے آئی پرامپٹنگ + ویڈیو کورس',
    },
  },
  {
    action: 'select_service_social_course',
    labels: {
      en: '📱 Social Media Course',
      ar: '📱 دورة احتراف السوشيال ميديا',
      ur: '📱 سوشل میڈیا کورس',
    },
  },
  {
    action: 'select_service_contact',
    labels: {
      en: '✉️ Contact Durrat AI Media',
      ar: '✉️ تواصل مع درّة للوسائط الذكية',
      ur: '✉️ درّة اے آئی میڈیا سے رابطہ',
    },
  },
];
