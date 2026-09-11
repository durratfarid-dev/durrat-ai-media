import React, { useState } from 'react';
import { useConfig } from '../context/ConfigContext';
import { ugcServicesList, ugcSteps } from '../data/siteConfig';
import { UGCAdFormData } from '../types';
import { 
  Video, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Mail, 
  Copy, 
  Check, 
  ExternalLink,
  Info,
  Clock,
  Layers,
  Send,
  HelpCircle
} from 'lucide-react';

export const UGCPage: React.FC = () => {
  const { config } = useConfig();

  const [formData, setFormData] = useState<UGCAdFormData>({
    fullName: '',
    brandName: '',
    email: '',
    productOrService: '',
    targetAudience: '',
    preferredVideoLength: '30-45 seconds (Recommended)',
    videoStyle: 'Authentic Review / Creator Unboxing',
    mainMessage: '',
    scriptOrProductInfo: '',
    numberOfVideos: '1 Video',
    additionalRequirements: '',
  });

  const [submittedModal, setSubmittedModal] = useState(false);
  const [copiedText, setCopiedText] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateEmailBody = () => {
    return `Hello Durrat AI Media team,

I would like to request a professional UGC Ad for my brand. Here are the details:

• Full Name: ${formData.fullName || 'Not specified'}
• Business / Brand Name: ${formData.brandName || 'Not specified'}
• Email Address: ${formData.email || 'Not specified'}
• Product or Service: ${formData.productOrService || 'Not specified'}
• Target Audience: ${formData.targetAudience || 'Not specified'}
• Preferred Video Length: ${formData.preferredVideoLength}
• Video Style: ${formData.videoStyle}
• Main Message: ${formData.mainMessage || 'Not specified'}
• Script / Product Information: ${formData.scriptOrProductInfo || 'Not specified'}
• Number of Videos: ${formData.numberOfVideos}
• Additional Requirements: ${formData.additionalRequirements || 'None'}

Please review my request and let me know the next steps. Thank you!`;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`UGC Ad Request - ${formData.brandName || formData.fullName || 'New Brand'}`);
    const body = encodeURIComponent(generateEmailBody());
    const mailtoUrl = `mailto:${config.contactEmail}?subject=${subject}&body=${body}`;

    // Open mail client
    window.location.href = mailtoUrl;

    // Show confirmation modal with copy option in case mail client didn't launch
    setSubmittedModal(true);
  };

  const handleDirectEmailClick = () => {
    const subject = encodeURIComponent(`Inquiry: UGC Ad Creation - Durrat AI Media`);
    const body = encodeURIComponent(`Hi Durrat AI Media,\n\nI am interested in having UGC video ads made for my business.\n\nPlease contact me back.\n\nThank you!`);
    window.location.href = `mailto:${config.contactEmail}?subject=${subject}&body=${body}`;
  };

  const handleCopyInquiry = () => {
    navigator.clipboard.writeText(generateEmailBody());
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2500);
  };

  const scrollToFormWithPackage = (pkgName: string) => {
    setFormData((prev) => ({
      ...prev,
      additionalRequirements: `Selected package interest: ${pkgName}. ${prev.additionalRequirements}`.trim(),
    }));
    const el = document.getElementById('ugc-request-form-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-24 pb-24">
      {/* 1. HERO HEADER */}
      <section className="relative pt-12 md:pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/80 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Video className="w-3.5 h-3.5" />
            <span>Premier Agency Service</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Professional UGC Ads <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">
              for Your Brand
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We create engaging UGC-style video advertisements designed to capture attention and promote your product or service.
          </p>

          <div className="pt-2 flex items-center justify-center gap-4">
            <button
              id="ugc-hero-scroll-form-btn"
              onClick={() => {
                document.getElementById('ugc-request-form-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3.5 text-sm font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all cursor-pointer"
            >
              Request UGC Ad Now
            </button>
          </div>
        </div>
      </section>

      {/* 2. "WHAT WE CREATE" SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            Formats & Ad Types
          </h2>
          <p className="text-3xl font-extrabold text-white tracking-tight">
            What We Create
          </p>
          <p className="text-sm text-slate-400">
            Tailored creative formats built specifically for modern social ad feeds and conversion-driven campaigns.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ugcServicesList.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900 transition-all duration-200 space-y-3 group"
            >
              <div className="w-10 h-10 rounded-lg bg-cyan-950/80 border border-cyan-800/70 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                <Video className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. "HOW IT WORKS" SECTION (4 Steps) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900/50 border border-slate-800 p-8 sm:p-12 lg:p-14">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
              Streamlined Process
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              How It Works
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              A clear, four-step workflow from your initial concept to your ready-to-run video ad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {ugcSteps.map((stepItem, idx) => (
              <div
                key={idx}
                className="relative p-6 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-950/80 text-cyan-400 border border-cyan-800/60">
                    {stepItem.step}
                  </span>
                  <span className="text-slate-700 font-mono text-xs">0{idx + 1}</span>
                </div>
                <h3 className="text-base font-bold text-white pt-2">
                  {stepItem.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {stepItem.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PRICING PACKAGES SECTION (With Placeholders clearly labeled) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            Flexible Investment
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            UGC Ad Packages
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Choose a package that fits your ad budget. Prices below are configurable placeholders.
          </p>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] text-slate-400">
            <Info className="w-3.5 h-3.5 text-cyan-400" />
            <span>Note: Package prices are placeholders and can be adjusted anytime.</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* PACKAGE 1: Starter */}
          <div 
            id="pkg-starter-card"
            className="rounded-2xl bg-slate-900/70 border border-slate-800 p-8 flex flex-col justify-between space-y-6 hover:border-slate-700 transition-colors"
          >
            <div>
              <span className="text-xs font-mono uppercase text-slate-400 font-semibold tracking-wider">
                Entry Tier
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">Starter</h3>

              {/* Price with clear placeholder badge */}
              <div className="mt-4 pb-4 border-b border-slate-800">
                <span className="text-xs text-slate-400 block mb-0.5">Starting Price:</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-white tracking-tight">
                    {config.prices.ugcStarter}
                  </span>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    Placeholder
                  </span>
                </div>
              </div>

              {/* Package points */}
              <ul className="space-y-3 pt-4 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="font-semibold text-white">1 UGC Ad</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Short-form video</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Basic editing</span>
                </li>
              </ul>
            </div>

            <button
              id="choose-starter-pkg-btn"
              onClick={() => scrollToFormWithPackage('Starter (1 UGC Ad)')}
              className="w-full py-3 px-4 rounded-xl text-center text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 hover:text-cyan-300 border border-slate-700 transition-colors cursor-pointer"
            >
              Select Starter
            </button>
          </div>

          {/* PACKAGE 2: Professional (Featured) */}
          <div 
            id="pkg-professional-card"
            className="relative rounded-2xl bg-slate-900 border-2 border-cyan-400/80 p-8 flex flex-col justify-between space-y-6 shadow-[0_0_30px_rgba(6,182,212,0.15)]"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-cyan-400 text-slate-950 text-[10px] font-extrabold uppercase tracking-wider shadow">
              Most Popular
            </div>

            <div>
              <span className="text-xs font-mono uppercase text-cyan-400 font-semibold tracking-wider">
                Growth Tier
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">Professional</h3>

              {/* Price with clear placeholder badge */}
              <div className="mt-4 pb-4 border-b border-slate-800">
                <span className="text-xs text-slate-400 block mb-0.5">Starting Price:</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-cyan-400 tracking-tight">
                    {config.prices.ugcProfessional}
                  </span>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                    Placeholder
                  </span>
                </div>
              </div>

              {/* Package points */}
              <ul className="space-y-3 pt-4 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="font-semibold text-white">Multiple UGC Ads</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Professional editing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Social media optimized</span>
                </li>
              </ul>
            </div>

            <button
              id="choose-professional-pkg-btn"
              onClick={() => scrollToFormWithPackage('Professional (Multiple UGC Ads)')}
              className="w-full py-3 px-4 rounded-xl text-center text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 shadow-lg transition-colors cursor-pointer"
            >
              Select Professional
            </button>
          </div>

          {/* PACKAGE 3: Business */}
          <div 
            id="pkg-business-card"
            className="rounded-2xl bg-slate-900/70 border border-slate-800 p-8 flex flex-col justify-between space-y-6 hover:border-slate-700 transition-colors"
          >
            <div>
              <span className="text-xs font-mono uppercase text-slate-400 font-semibold tracking-wider">
                Enterprise & Scaling
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">Business</h3>

              {/* Price with clear placeholder badge */}
              <div className="mt-4 pb-4 border-b border-slate-800">
                <span className="text-xs text-slate-400 block mb-0.5">Price Structure:</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-white tracking-tight">
                    {config.prices.ugcBusiness}
                  </span>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    Custom
                  </span>
                </div>
              </div>

              {/* Package points */}
              <ul className="space-y-3 pt-4 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="font-semibold text-white">Multiple videos</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Custom requirements</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Brand-focused content</span>
                </li>
              </ul>
            </div>

            <button
              id="choose-business-pkg-btn"
              onClick={() => scrollToFormWithPackage('Business (Custom Videos)')}
              className="w-full py-3 px-4 rounded-xl text-center text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 hover:text-cyan-300 border border-slate-700 transition-colors cursor-pointer"
            >
              Request Custom Quote
            </button>
          </div>
        </div>
      </section>

      {/* 5. UGC AD REQUEST FORM */}
      <section id="ugc-request-form-section" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl p-6 sm:p-10 lg:p-12">
          <div className="space-y-3 mb-8 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800 text-cyan-400 text-xs font-bold uppercase tracking-wider">
              <Send className="w-3.5 h-3.5" />
              <span>Direct Production Inquiry</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              UGC Ad Request
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Fill out this project brief. Submitting this form will prepare and send your inquiry directly to{' '}
              <strong className="text-slate-200">{config.contactEmail}</strong>.
            </p>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Field 1: Full Name */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Full Name <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Alex Johnson"
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              {/* Field 2: Business / Brand Name */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Business / Brand Name <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="text"
                  name="brandName"
                  required
                  value={formData.brandName}
                  onChange={handleChange}
                  placeholder="e.g. Lumina Health / EcoBottle"
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              {/* Field 3: Email Address */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Email Address <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              {/* Field 4: Product or Service */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Product or Service <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="text"
                  name="productOrService"
                  required
                  value={formData.productOrService}
                  onChange={handleChange}
                  placeholder="e.g. Skincare Serum / Mobile App / SaaS"
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              {/* Field 5: Target Audience */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Target Audience
                </label>
                <input
                  type="text"
                  name="targetAudience"
                  value={formData.targetAudience}
                  onChange={handleChange}
                  placeholder="e.g. Women 22-38 interested in wellness"
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              {/* Field 6: Preferred Video Length */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Preferred Video Length
                </label>
                <select
                  name="preferredVideoLength"
                  value={formData.preferredVideoLength}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                >
                  <option value="15-20 seconds (Short Hook)">15-20 seconds (Short Hook)</option>
                  <option value="30-45 seconds (Recommended)">30-45 seconds (Recommended standard)</option>
                  <option value="60 seconds (Comprehensive review)">60 seconds (Comprehensive review)</option>
                  <option value="Multiple lengths">Multiple lengths</option>
                </select>
              </div>

              {/* Field 7: Video Style */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Video Style
                </label>
                <select
                  name="videoStyle"
                  value={formData.videoStyle}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                >
                  <option value="Authentic Review / Creator Unboxing">Authentic Review / Creator Unboxing</option>
                  <option value="Problem / Solution Direct Response">Problem / Solution Direct Response</option>
                  <option value="TikTok Trend / High Energy">TikTok Trend / High Energy</option>
                  <option value="Instagram Aesthetic / Lifestyle">Instagram Aesthetic / Lifestyle</option>
                  <option value="AI-Powered UGC Video">AI-Powered UGC Video</option>
                </select>
              </div>

              {/* Field 10: Number of Videos */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Number of Videos
                </label>
                <select
                  name="numberOfVideos"
                  value={formData.numberOfVideos}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                >
                  <option value="1 Video">1 Video</option>
                  <option value="2-3 Videos (A/B Hook Testing)">2-3 Videos (A/B Hook Testing)</option>
                  <option value="5+ Videos (Campaign Batch)">5+ Videos (Campaign Batch)</option>
                  <option value="Ongoing Monthly Retainer">Ongoing Monthly Retainer</option>
                </select>
              </div>
            </div>

            {/* Field 8: Main Message */}
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Main Message
              </label>
              <input
                type="text"
                name="mainMessage"
                value={formData.mainMessage}
                onChange={handleChange}
                placeholder="What is the single most important takeaway or offer for viewers?"
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>

            {/* Field 9: Script / Product Information */}
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Script / Product Information
              </label>
              <textarea
                name="scriptOrProductInfo"
                rows={3}
                value={formData.scriptOrProductInfo}
                onChange={handleChange}
                placeholder="Provide links to product page, key benefits, feature list, or existing talking points."
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>

            {/* Field 11: Additional Requirements */}
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Additional Requirements
              </label>
              <textarea
                name="additionalRequirements"
                rows={2}
                value={formData.additionalRequirements}
                onChange={handleChange}
                placeholder="Specific music vibe, captions style, deadline, brand assets or notes."
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                id="submit-ugc-request-btn"
                className="w-full py-4 px-6 text-center font-bold text-base text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Request UGC Ad</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </form>

          {/* "Prefer Email?" Section */}
          <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-950/60 p-5 rounded-2xl">
            <div>
              <span className="text-xs text-slate-400 block">Prefer Direct Email?</span>
              <p className="text-sm font-semibold text-white font-mono">
                {config.contactEmail}
              </p>
            </div>
            <button
              type="button"
              id="prefer-email-send-ugc-btn"
              onClick={handleDirectEmailClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-400 hover:text-cyan-300 text-xs font-bold border border-slate-700 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Send UGC Request</span>
            </button>
          </div>
        </div>
      </section>

      {/* Confirmation Modal when form is submitted */}
      {submittedModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-lg bg-slate-900 border border-slate-700 rounded-2xl p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2 text-cyan-400 font-bold text-base">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>UGC Ad Request Prepared</span>
              </div>
              <button
                onClick={() => setSubmittedModal(false)}
                className="text-slate-400 hover:text-white text-sm"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Your UGC request is formatted to send directly to <strong>{config.contactEmail}</strong>. If your email app did not open automatically, you can copy the full inquiry text or launch it manually below:
            </p>

            <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl max-h-40 overflow-y-auto text-[11px] font-mono text-slate-300 whitespace-pre-wrap">
              {generateEmailBody()}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                onClick={handleCopyInquiry}
                className="w-full sm:w-1/2 py-2.5 px-3 text-xs font-semibold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl border border-slate-700 flex items-center justify-center gap-1.5 transition-colors"
              >
                {copiedText ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copiedText ? 'Copied to Clipboard!' : 'Copy Inquiry Text'}</span>
              </button>

              <a
                href={`mailto:${config.contactEmail}?subject=${encodeURIComponent(`UGC Ad Request - ${formData.brandName || formData.fullName}`)}&body=${encodeURIComponent(generateEmailBody())}`}
                className="w-full sm:w-1/2 py-2.5 px-3 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl text-center transition-colors flex items-center justify-center gap-1.5"
              >
                <Mail className="w-4 h-4" />
                <span>Open in Email App</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
