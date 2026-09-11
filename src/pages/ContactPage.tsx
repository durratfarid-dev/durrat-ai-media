import React, { useState } from 'react';
import { useConfig } from '../context/ConfigContext';
import { ContactFormData } from '../types';
import { 
  Mail, 
  MessageCircle, 
  Send, 
  ExternalLink, 
  CheckCircle2, 
  Copy, 
  Check, 
  Sparkles,
  MapPin,
  Clock
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { config } = useConfig();

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
    <div className="space-y-24 pb-24">
      {/* 1. HERO HEADER */}
      <section className="relative pt-12 md:pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/80 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Inquiries</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Let's Work Together
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Reach out for UGC ad commissions, corporate workshops, or private course enrollment questions.
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
                  <span className="text-xs text-slate-400 block mb-1">Email Inquiries:</span>
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
                  <span className="text-xs text-slate-400 block mb-2">Response Expectation:</span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    We typically respond to new UGC production briefs and student enrollment inquiries within 12–24 business hours.
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp Channel Card */}
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-emerald-400">
                <MessageCircle className="w-5 h-5" />
                <h3 className="text-base font-bold text-white">
                  Join Our WhatsApp Channel
                </h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Stay updated with the latest AI tools, UGC trend alerts, and creative strategies directly on WhatsApp.
              </p>
              <a
                id="contact-whatsapp-channel-btn"
                href={config.whatsAppChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-950/60 hover:bg-emerald-950/90 text-emerald-400 hover:text-emerald-300 border border-emerald-800/80 font-bold text-xs transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Join Our WhatsApp Channel</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Send a Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Complete the form below and we will get back to you promptly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Field: Name */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Your Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                {/* Field: Email */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Your Email Address <span className="text-cyan-400">*</span>
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
                    Subject <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. UGC Ad Inquiry / Course Question"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                {/* Field: Message */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can Durrat AI Media help you?"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    id="submit-contact-form-btn"
                    className="w-full py-4 px-6 text-center font-bold text-sm text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.35)] transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-slate-950" />
                    <span>Send Message</span>
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
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-slate-200 hover:text-white"
                  >
                    {copiedText ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedText ? 'Copied to Clipboard!' : 'Copy Message'}</span>
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
