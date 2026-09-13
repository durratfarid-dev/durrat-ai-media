import React, { useState } from 'react';
import { useConfig } from '../context/ConfigContext';
import { useLanguage } from '../context/LanguageContext';
import { ContactFormData } from '../types';
import { openWhatsAppSelector } from '../components/FloatingWhatsApp';
import { 
  Mail, 
  MessageCircle, 
  Send, 
  ExternalLink, 
  CheckCircle2, 
  Copy, 
  Check 
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { config } = useConfig();
  const { t } = useLanguage();

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedText, setCopiedText] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateEmailBody = () => {
    return `Hello Durrat AI Media,

Name: ${formData.name || 'Not provided'}
Email: ${formData.email || 'Not provided'}
Subject: ${formData.subject || 'General Inquiry'}

Message:
${formData.message || 'No message provided.'}

Sent from Durrat AI Media Website Contact Form.`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${config.contactEmail}?subject=${encodeURIComponent(formData.subject || 'Inquiry - Durrat AI Media')}&body=${encodeURIComponent(generateEmailBody())}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(generateEmailBody());
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2500);
  };

  return (
    <div className="space-y-24 pb-24 text-left rtl:text-right">
      {/* 1. HERO HEADER */}
      <section className="relative pt-12 md:pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/80 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>{t.contactPage.badge}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            {t.contactPage.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {t.contactPage.subtitle}
          </p>
        </div>
      </section>

      {/* 2. CONTACT CONTENT GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Brand Info & Direct Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                  <h2 className="text-2xl font-bold text-white tracking-tight">
                    {config.brandName}
                  </h2>
                </div>
                <p className="text-xs uppercase tracking-wider text-cyan-400 font-medium mt-1">
                  {config.tagline}
                </p>
              </div>

              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-xs text-slate-400 block mb-1">{t.contactPage.emailUsDirectly}:</span>
                  <a
                    id="contact-info-email-link"
                    href={`mailto:${config.contactEmail}`}
                    className="inline-flex items-center gap-2 text-white hover:text-cyan-400 font-mono text-sm font-semibold transition-colors"
                  >
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <span>{config.contactEmail}</span>
                  </a>
                </div>

                <div className="pt-2 border-t border-slate-800">
                  <span className="text-xs text-slate-400 block mb-2">{t.contactPage.directWhatsApp}:</span>
                  <button
                    type="button"
                    onClick={openWhatsAppSelector}
                    className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium text-xs cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{t.common.whatsappChat}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* WhatsApp Chat Card */}
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-emerald-400">
                <MessageCircle className="w-5 h-5" />
                <h3 className="text-base font-bold text-white">
                  {t.common.whatsappChat}
                </h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {t.whyUs.localMarketDesc}
              </p>
              <button
                id="contact-whatsapp-chat-btn"
                type="button"
                onClick={openWhatsAppSelector}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-950/60 hover:bg-emerald-950/90 text-emerald-400 hover:text-emerald-300 border border-emerald-800/80 font-bold text-xs transition-all shadow-sm cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.common.whatsappChat}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {t.contactPage.formTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  {t.contactPage.subtitle}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Field: Name */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    {t.contactPage.name} <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                {/* Field: Email */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    {t.contactPage.email} <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                {/* Field: Subject */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    {t.contactPage.subject} <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                {/* Field: Message */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    {t.contactPage.message} <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    id="submit-contact-form-btn"
                    className="w-full py-4 px-6 text-center font-bold text-sm text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.35)] transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-slate-950 rtl:rotate-180" />
                    <span>{t.contactPage.sendBtn}</span>
                  </button>
                </div>
              </form>

              {submitted && (
                <div className="p-4 rounded-xl bg-slate-950 border border-cyan-800/80 space-y-2 animate-fadeIn">
                  <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Email client opened with your message!</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    If your email software did not launch automatically, you can copy the message and send directly to{' '}
                    <strong className="text-white">{config.contactEmail}</strong>:
                  </p>
                  <button
                    onClick={handleCopyMessage}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-slate-200 hover:text-white cursor-pointer"
                  >
                    {copiedText ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedText ? t.contactPage.copiedBtn : t.contactPage.copyBtn}</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
