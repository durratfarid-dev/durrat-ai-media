import React from 'react';
import { PageId } from '../types';
import { useConfig } from '../context/ConfigContext';
import { useLanguage } from '../context/LanguageContext';
import { openWhatsAppSelector } from '../components/FloatingWhatsApp';
import { 
  MapPin, 
  Star, 
  Smartphone, 
  Video, 
  Bot, 
  TrendingUp, 
  Heart, 
  Flame, 
  MessageCircle, 
  ArrowRight, 
  CheckCircle2, 
  ExternalLink, 
  Sparkles, 
  Phone, 
  Navigation, 
  Store, 
  Clock, 
  Search, 
  Check, 
  ShieldCheck, 
  Share2, 
  Play, 
  Users
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { config } = useConfig();
  const { t, isRTL } = useLanguage();

  const handleScrollToServices = () => {
    const el = document.getElementById('services-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToGoogleMaps = () => {
    const el = document.getElementById('google-business-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 9 Visual Stickers/Badges connected directly to multi-language translation
  const heroStickers = [
    {
      id: 'maps-pin',
      icon: <MapPin className="w-4 h-4 text-rose-400" />,
      badge: t.hero.stickers.mapsPin,
      color: 'from-rose-500/20 to-amber-500/20 border-rose-500/40 text-rose-300',
    },
    {
      id: 'google-review',
      icon: <Star className="w-4 h-4 text-amber-400 fill-amber-400" />,
      badge: t.hero.stickers.review,
      color: 'from-amber-500/20 to-yellow-500/20 border-amber-500/40 text-amber-300',
    },
    {
      id: 'smartphone',
      icon: <Smartphone className="w-4 h-4 text-sky-400" />,
      badge: t.hero.stickers.mobile,
      color: 'from-sky-500/20 to-blue-500/20 border-sky-500/40 text-sky-300',
    },
    {
      id: 'video-camera',
      icon: <Video className="w-4 h-4 text-cyan-400" />,
      badge: t.hero.stickers.ugcVideo,
      color: 'from-cyan-500/20 to-teal-500/20 border-cyan-500/40 text-cyan-300',
    },
    {
      id: 'ai-robot',
      icon: <Bot className="w-4 h-4 text-purple-400" />,
      badge: t.hero.stickers.aiRobot,
      color: 'from-purple-500/20 to-indigo-500/20 border-purple-500/40 text-purple-300',
    },
    {
      id: 'growth-arrow',
      icon: <TrendingUp className="w-4 h-4 text-emerald-400" />,
      badge: t.hero.stickers.growth,
      color: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/40 text-emerald-300',
    },
    {
      id: 'trust-heart',
      icon: <Heart className="w-4 h-4 text-red-400 fill-red-400" />,
      badge: t.hero.stickers.trust,
      color: 'from-rose-500/20 to-red-500/20 border-rose-500/40 text-rose-300',
    },
    {
      id: 'trending-fire',
      icon: <Flame className="w-4 h-4 text-orange-400 fill-orange-400" />,
      badge: t.hero.stickers.trending,
      color: 'from-orange-500/20 to-amber-500/20 border-orange-500/40 text-orange-300',
    },
    {
      id: 'whatsapp-chat',
      icon: <MessageCircle className="w-4 h-4 text-emerald-400 fill-emerald-400/30" />,
      badge: t.hero.stickers.whatsapp,
      color: 'from-emerald-500/20 to-green-500/20 border-emerald-500/40 text-emerald-300',
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-20 overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-8 sm:pt-14 md:pt-20 overflow-hidden">
        {/* Friendly ambient colored glow accents */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[320px] sm:w-[650px] h-[250px] sm:h-[350px] bg-cyan-500/15 blur-[100px] sm:blur-[140px] rounded-full" />
          <div className="absolute top-44 -left-20 w-[240px] sm:w-[400px] h-[240px] sm:h-[350px] bg-emerald-500/10 blur-[100px] sm:blur-[130px] rounded-full" />
          <div className="absolute top-36 -right-20 w-[240px] sm:w-[420px] h-[240px] sm:h-[350px] bg-purple-600/15 blur-[100px] sm:blur-[140px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-6 sm:space-y-8">
            
            {/* Friendly Market Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-sm backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-xs font-semibold tracking-wide text-slate-200">
                {t.hero.marketBadge}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse hidden sm:inline-block" />
            </div>

            {/* Main Friendly Headline */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.18]">
                {t.hero.headline}
              </h1>

              {/* Subheadline */}
              <p className="text-lg sm:text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-emerald-300 to-amber-300">
                {t.hero.subheadline}
              </p>

              {/* Short Simple Line */}
              <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto px-2">
                {t.hero.description}
              </p>
            </div>

            {/* Two Large Friendly CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 pt-2 max-w-md sm:max-w-none mx-auto">
              <button
                id="hero-whatsapp-talk-btn"
                type="button"
                onClick={openWhatsAppSelector}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 sm:px-9 py-4 text-base sm:text-lg font-bold text-white bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 rounded-2xl shadow-[0_10px_25px_rgba(16,185,129,0.35)] hover:shadow-[0_12px_30px_rgba(16,185,129,0.5)] transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <MessageCircle className="w-6 h-6 fill-current text-white shrink-0" />
                <span>{t.hero.whatsappCta}</span>
              </button>

              <button
                id="hero-services-dekhein-btn"
                onClick={handleScrollToServices}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 sm:px-9 py-4 text-base sm:text-lg font-bold text-slate-100 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-cyan-400/60 rounded-2xl shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Flame className="w-5 h-5 text-amber-400 fill-amber-400 shrink-0" />
                <span>{t.hero.servicesCta}</span>
              </button>
            </div>

            {/* VISUAL STICKERS & BADGES AROUND HERO */}
            <div className="pt-4 sm:pt-6">
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-4xl mx-auto">
                {heroStickers.map((sticker) => (
                  <div
                    key={sticker.id}
                    className={`inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl border bg-gradient-to-r ${sticker.color} bg-slate-950/80 backdrop-blur-md shadow-sm text-xs sm:text-sm font-semibold transition-all duration-200 hover:scale-105 cursor-default select-none`}
                  >
                    <span className="shrink-0">{sticker.icon}</span>
                    <span className="whitespace-nowrap">{sticker.badge}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Friendly Local Business Banner */}
            <div className="pt-4 max-w-3xl mx-auto">
              <div className="rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/90 border border-slate-800 p-3.5 sm:p-4 text-xs sm:text-sm text-slate-300 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left rtl:sm:text-right">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-950 border border-emerald-800/80 flex items-center justify-center text-emerald-400 shrink-0">
                    <Store className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">{t.hero.shopOwnerBannerTitle}</span>
                    <span className="text-slate-400 text-xs">{t.hero.shopOwnerBannerSubtitle}</span>
                  </div>
                </div>
                <button
                  onClick={handleScrollToGoogleMaps}
                  className="w-full sm:w-auto px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 font-semibold text-xs border border-slate-700 transition-colors flex items-center justify-center gap-1.5 shrink-0 cursor-pointer"
                >
                  <MapPin className="w-3.5 h-3.5 text-rose-400" />
                  <span>{t.hero.shopOwnerBannerBtn}</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. HOMEPAGE 4 LARGE VISUAL SERVICE CARDS */}
      <section id="services-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/70 text-cyan-400 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.services.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.services.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            {t.services.subtitle}
          </p>
        </div>

        {/* 4 Large Visual Cards (2x2 on desktop, stacked on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* CARD 1: 📍 Google Business Profile */}
          <div 
            id="service-card-google-maps"
            className="group relative bg-gradient-to-b from-slate-900/90 to-slate-950 border-2 border-slate-800 hover:border-emerald-500/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-xl hover:shadow-[0_0_35px_rgba(16,185,129,0.2)] text-left rtl:text-right"
          >
            <div>
              {/* Card Header & Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 rounded-2xl bg-emerald-950/80 border border-emerald-700/60 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform shadow-inner">
                  <MapPin className="w-9 h-9 text-rose-400" />
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/90 text-emerald-300 border border-emerald-700/50 text-xs font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{t.services.cards.googleMaps.tag}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-2.5 flex items-center gap-2">
                <span>{t.services.cards.googleMaps.title}</span>
              </h3>

              {/* Simple Sentence */}
              <p className="text-slate-300 text-base leading-relaxed mb-6 font-medium">
                {t.services.cards.googleMaps.sentence}
              </p>

              {/* Visual Feature Tags */}
              <div className="grid grid-cols-2 gap-2 mb-8 text-xs text-slate-300">
                {t.services.cards.googleMaps.pills.map((pill, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 rounded-xl bg-slate-950/70 border border-slate-800">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate">{pill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button
              id="card-google-maps-btn"
              onClick={handleScrollToGoogleMaps}
              className="w-full py-4 px-5 text-center font-bold text-base text-white bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 rounded-2xl transition-all shadow-md cursor-pointer flex items-center justify-center gap-2.5 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>{t.services.cards.googleMaps.cta}</span>
              <ArrowRight className="w-5 h-5 rtl:rotate-180" />
            </button>
          </div>

          {/* CARD 2: 🎥 UGC Ads */}
          <div 
            id="service-card-ugc"
            className="group relative bg-gradient-to-b from-slate-900/90 to-slate-950 border-2 border-slate-800 hover:border-cyan-500/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-xl hover:shadow-[0_0_35px_rgba(6,182,212,0.2)] text-left rtl:text-right"
          >
            <div>
              {/* Card Header & Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 rounded-2xl bg-cyan-950/80 border border-cyan-700/60 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform shadow-inner">
                  <Video className="w-9 h-9 text-cyan-400" />
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/90 text-cyan-300 border border-cyan-700/50 text-xs font-bold">
                  <Flame className="w-3.5 h-3.5 text-orange-400 fill-orange-400" />
                  <span>{t.services.cards.ugc.tag}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-2.5 flex items-center gap-2">
                <span>{t.services.cards.ugc.title}</span>
              </h3>

              {/* Simple Sentence */}
              <p className="text-slate-300 text-base leading-relaxed mb-6 font-medium">
                {t.services.cards.ugc.sentence}
              </p>

              {/* Visual Feature Tags */}
              <div className="grid grid-cols-2 gap-2 mb-8 text-xs text-slate-300">
                {t.services.cards.ugc.pills.map((pill, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 rounded-xl bg-slate-950/70 border border-slate-800">
                    <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span className="truncate">{pill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button
              id="card-get-ugc-btn"
              onClick={() => onNavigate('ugc')}
              className="w-full py-4 px-5 text-center font-bold text-base text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-2xl transition-all shadow-md cursor-pointer flex items-center justify-center gap-2.5 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>{t.services.cards.ugc.cta}</span>
              <ArrowRight className="w-5 h-5 text-slate-950 rtl:rotate-180" />
            </button>
          </div>

          {/* CARD 3: 🤖 AI Video */}
          <div 
            id="service-card-ai"
            className="group relative bg-gradient-to-b from-slate-900/90 to-slate-950 border-2 border-slate-800 hover:border-purple-500/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-xl hover:shadow-[0_0_35px_rgba(168,85,247,0.2)] text-left rtl:text-right"
          >
            <div>
              {/* Card Header & Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 rounded-2xl bg-purple-950/80 border border-purple-700/60 flex items-center justify-center text-purple-400 group-hover:scale-105 transition-transform shadow-inner">
                  <Bot className="w-9 h-9 text-purple-400" />
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/90 text-purple-300 border border-purple-700/50 text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                  <span>{t.services.cards.aiVideo.tag}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-2.5 flex items-center gap-2">
                <span>{t.services.cards.aiVideo.title}</span>
              </h3>

              {/* Simple Sentence */}
              <p className="text-slate-300 text-base leading-relaxed mb-6 font-medium">
                {t.services.cards.aiVideo.sentence}
              </p>

              {/* Visual Feature Tags */}
              <div className="grid grid-cols-2 gap-2 mb-8 text-xs text-slate-300">
                {t.services.cards.aiVideo.pills.map((pill, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 rounded-xl bg-slate-950/70 border border-slate-800">
                    <Check className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span className="truncate">{pill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button
              id="card-view-ai-course-btn"
              onClick={() => onNavigate('ai-course')}
              className="w-full py-4 px-5 text-center font-bold text-base text-white bg-purple-600 hover:bg-purple-500 rounded-2xl transition-all shadow-md cursor-pointer flex items-center justify-center gap-2.5 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>{t.services.cards.aiVideo.cta}</span>
              <ArrowRight className="w-5 h-5 rtl:rotate-180" />
            </button>
          </div>

          {/* CARD 4: 📱 Social Media */}
          <div 
            id="service-card-social"
            className="group relative bg-gradient-to-b from-slate-900/90 to-slate-950 border-2 border-slate-800 hover:border-pink-500/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-xl hover:shadow-[0_0_35px_rgba(244,63,94,0.2)] text-left rtl:text-right"
          >
            <div>
              {/* Card Header & Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 rounded-2xl bg-pink-950/80 border border-pink-700/60 flex items-center justify-center text-pink-400 group-hover:scale-105 transition-transform shadow-inner">
                  <Smartphone className="w-9 h-9 text-pink-400" />
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-950/90 text-pink-300 border border-pink-700/50 text-xs font-bold">
                  <TrendingUp className="w-3.5 h-3.5 text-pink-400" />
                  <span>{t.services.cards.socialMedia.tag}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-2.5 flex items-center gap-2">
                <span>{t.services.cards.socialMedia.title}</span>
              </h3>

              {/* Simple Sentence */}
              <p className="text-slate-300 text-base leading-relaxed mb-6 font-medium">
                {t.services.cards.socialMedia.sentence}
              </p>

              {/* Visual Feature Tags */}
              <div className="grid grid-cols-2 gap-2 mb-8 text-xs text-slate-300">
                {t.services.cards.socialMedia.pills.map((pill, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 rounded-xl bg-slate-950/70 border border-slate-800">
                    <Check className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                    <span className="truncate">{pill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button
              id="card-view-social-course-btn"
              onClick={() => onNavigate('social-course')}
              className="w-full py-4 px-5 text-center font-bold text-base text-white bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 rounded-2xl transition-all shadow-md cursor-pointer flex items-center justify-center gap-2.5 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>{t.services.cards.socialMedia.cta}</span>
              <ArrowRight className="w-5 h-5 rtl:rotate-180" />
            </button>
          </div>

        </div>
      </section>

      {/* 3. DEDICATED SERVICE: 📍 GOOGLE BUSINESS PROFILE SECTION */}
      <section id="google-business-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950 border-2 border-emerald-500/30 p-6 sm:p-10 lg:p-12 shadow-2xl overflow-hidden text-left rtl:text-right">
          
          {/* Subtle Google Colors Accent line at top */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-red-500 via-yellow-500 to-green-500" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-700/60 text-emerald-300 text-xs font-bold">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
                <span>{t.googleBusiness.badge}</span>
              </div>

              {/* Title & Subtitle */}
              <div className="space-y-3">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                  {t.googleBusiness.title}
                </h2>
                <p className="text-lg sm:text-xl font-bold text-emerald-300">
                  {t.googleBusiness.subtitle}
                </p>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {t.googleBusiness.description}
                </p>
              </div>

              {/* The 8 Simple Service Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {t.googleBusiness.features.map((point, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-950/80 border border-slate-800/90 text-slate-200 text-xs sm:text-sm font-medium hover:border-emerald-500/40 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {/* Crucial Ethical Policy Notice regarding verification */}
              <div className="p-3.5 rounded-xl bg-slate-950/90 border border-slate-800 text-xs text-slate-400 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  {t.googleBusiness.importantNotice}
                </p>
              </div>

              {/* CTA Action */}
              <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-2">
                <button
                  id="google-maps-service-whatsapp-btn"
                  type="button"
                  onClick={openWhatsAppSelector}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 rounded-2xl shadow-[0_8px_20px_rgba(16,185,129,0.3)] transition-all transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <MapPin className="w-5 h-5 text-rose-300 fill-rose-300/40" />
                  <span>{t.googleBusiness.cta}</span>
                </button>

                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full sm:w-auto px-6 py-4 text-sm font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 rounded-2xl transition-colors cursor-pointer"
                >
                  {t.common.contactUs}
                </button>
              </div>

            </div>

            {/* Right Interactive Visual Mockup Column (Google Maps Simulated Shop Profile) */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 sm:p-5 shadow-2xl space-y-4">
                
                {/* Search Bar Simulation */}
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900 border border-slate-700/80 text-xs text-slate-400">
                  <Search className="w-4 h-4 text-slate-400 shrink-0" />
                  <span className="text-slate-200 font-medium truncate">{t.googleBusiness.mockup.searchPlaceholder}</span>
                </div>

                {/* Simulated Shop Listing Card */}
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3.5">
                  
                  {/* Shop Name & Pin */}
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 text-[10px] font-bold border border-emerald-800/70">
                          {t.googleBusiness.mockup.verifiedBadge}
                        </span>
                        <span className="text-[11px] text-slate-400 font-medium">{t.googleBusiness.mockup.businessType}</span>
                      </div>
                      <h4 className="text-lg font-bold text-white mt-1">
                        {t.googleBusiness.mockup.sampleName}
                      </h4>
                      <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-rose-400" />
                        <span>{t.googleBusiness.mockup.sampleLocation}</span>
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                      <Store className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Rating Simulation */}
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-bold text-white">5.0</span>
                    <div className="flex text-amber-400">
                      {'★'.repeat(5)}
                    </div>
                    <span className="text-slate-400 text-[11px]">{t.googleBusiness.mockup.sampleRating}</span>
                  </div>

                  {/* Operational Status */}
                  <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{t.googleBusiness.mockup.timing}</span>
                  </div>

                  {/* Four Quick Action Buttons (Call, Directions, Share, Website) */}
                  <div className="grid grid-cols-4 gap-2 pt-1">
                    <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-center flex flex-col items-center gap-1 hover:border-emerald-500/50 transition-colors">
                      <Phone className="w-4 h-4 text-emerald-400" />
                      <span className="text-[10px] text-slate-300 font-medium">{t.common.call}</span>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-center flex flex-col items-center gap-1 hover:border-emerald-500/50 transition-colors">
                      <Navigation className="w-4 h-4 text-sky-400" />
                      <span className="text-[10px] text-slate-300 font-medium">{t.common.directions}</span>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-center flex flex-col items-center gap-1 hover:border-emerald-500/50 transition-colors">
                      <Share2 className="w-4 h-4 text-purple-400" />
                      <span className="text-[10px] text-slate-300 font-medium">{t.common.share}</span>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-center flex flex-col items-center gap-1 hover:border-emerald-500/50 transition-colors">
                      <ExternalLink className="w-4 h-4 text-cyan-400" />
                      <span className="text-[10px] text-slate-300 font-medium">{t.common.website}</span>
                    </div>
                  </div>

                  {/* Photo & Catalog Thumbnails Simulation */}
                  <div className="pt-2 border-t border-slate-800/80">
                    <div className="text-[10px] uppercase font-bold text-slate-400 mb-1.5 flex items-center justify-between">
                      <span>{t.googleBusiness.mockup.photosLabel}</span>
                      <span className="text-emerald-400">100% {t.common.verified}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-1.5">
                      <div className="h-14 rounded-lg bg-slate-800/80 flex items-center justify-center text-[10px] text-slate-300 border border-slate-700">
                        {t.googleBusiness.mockup.frontView}
                      </div>
                      <div className="h-14 rounded-lg bg-slate-800/80 flex items-center justify-center text-[10px] text-slate-300 border border-slate-700">
                        {t.googleBusiness.mockup.insideShop}
                      </div>
                      <div className="h-14 rounded-lg bg-slate-800/80 flex items-center justify-center text-[10px] text-slate-300 border border-slate-700">
                        {t.googleBusiness.mockup.topProducts}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. COMPREHENSIVE SERVICE GUIDE & SEO EXPLANATORY CONTENT */}
      <section id="service-guide-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900/40 border border-slate-800/80 p-6 sm:p-10 lg:p-12 space-y-10 text-left rtl:text-right">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/70 text-cyan-400 text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.serviceGuide.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
              {t.serviceGuide.title}
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              {t.serviceGuide.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* 1. UGC Ads */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-pink-500/40 transition-colors flex flex-col justify-between space-y-5">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-pink-500/20 text-pink-400 border border-pink-500/30 flex items-center justify-center">
                  <Video className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white leading-snug">
                  {t.serviceGuide.ugc.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {t.serviceGuide.ugc.description}
                </p>
                <ul className="space-y-2 pt-2 text-xs sm:text-sm text-slate-300">
                  {t.serviceGuide.ugc.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-2">
                <button
                  id="guide-ugc-action-btn"
                  onClick={() => onNavigate('ugc')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-white bg-pink-600 hover:bg-pink-500 rounded-xl transition-all cursor-pointer"
                >
                  <span>{t.serviceGuide.ugc.cta}</span>
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </button>
              </div>
            </div>

            {/* 2. AI Video Creation */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/40 transition-colors flex flex-col justify-between space-y-5">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center">
                  <Bot className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white leading-snug">
                  {t.serviceGuide.aiVideo.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {t.serviceGuide.aiVideo.description}
                </p>
                <ul className="space-y-2 pt-2 text-xs sm:text-sm text-slate-300">
                  {t.serviceGuide.aiVideo.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-2">
                <button
                  id="guide-ai-video-action-btn"
                  onClick={() => onNavigate('ai-course')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all cursor-pointer"
                >
                  <span>{t.serviceGuide.aiVideo.cta}</span>
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </button>
              </div>
            </div>

            {/* 3. Social Media Marketing */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-purple-500/40 transition-colors flex flex-col justify-between space-y-5">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30 flex items-center justify-center">
                  <Share2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white leading-snug">
                  {t.serviceGuide.socialMedia.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {t.serviceGuide.socialMedia.description}
                </p>
                <ul className="space-y-2 pt-2 text-xs sm:text-sm text-slate-300">
                  {t.serviceGuide.socialMedia.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-2">
                <button
                  id="guide-social-media-action-btn"
                  onClick={() => onNavigate('social-course')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-white bg-purple-600 hover:bg-purple-500 rounded-xl transition-all cursor-pointer"
                >
                  <span>{t.serviceGuide.socialMedia.cta}</span>
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </button>
              </div>
            </div>

            {/* 4. Google Business Profile & Local SEO */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500/40 transition-colors flex flex-col justify-between space-y-5">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white leading-snug">
                  {t.serviceGuide.googleMaps.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {t.serviceGuide.googleMaps.description}
                </p>
                <ul className="space-y-2 pt-2 text-xs sm:text-sm text-slate-300">
                  {t.serviceGuide.googleMaps.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-2">
                <button
                  id="guide-google-maps-action-btn"
                  onClick={handleScrollToGoogleMaps}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all cursor-pointer"
                >
                  <span>{t.serviceGuide.googleMaps.cta}</span>
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 3-STEP PROCESS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900/60 border border-slate-800 p-6 sm:p-10 lg:p-12 space-y-8 text-center sm:text-left rtl:sm:text-right">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              {t.steps.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
              {t.steps.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              {t.steps.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Step 1 */}
            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3 relative hover:border-slate-700 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center font-black text-base">
                1
              </div>
              <h3 className="text-lg font-bold text-white">
                {t.steps.step1Title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {t.steps.step1Desc}
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3 relative hover:border-slate-700 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 flex items-center justify-center font-black text-base">
                2
              </div>
              <h3 className="text-lg font-bold text-white">
                {t.steps.step2Title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {t.steps.step2Desc}
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3 relative hover:border-slate-700 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/40 flex items-center justify-center font-black text-base">
                3
              </div>
              <h3 className="text-lg font-bold text-white">
                {t.steps.step3Title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {t.steps.step3Desc}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. WHY DURRAT AI MEDIA SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900/60 border border-slate-800/80 p-6 sm:p-10 lg:p-12 space-y-8 text-left rtl:text-right">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
              {t.whyUs.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              {t.whyUs.title}
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              {t.whyUs.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.whyUs.points.map((point, index) => (
              <div 
                key={index}
                className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 transition-colors space-y-2.5"
              >
                <div className="w-9 h-9 rounded-lg bg-cyan-950/60 border border-cyan-800/60 flex items-center justify-center text-cyan-400">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-white">
                  {point.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {point.desc}
                </p>
              </div>
            ))}

            {/* Sixth highlight card: Commercial Market Expertise */}
            <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 transition-colors space-y-2.5">
              <div className="w-9 h-9 rounded-lg bg-emerald-950/60 border border-emerald-800/60 flex items-center justify-center text-emerald-400">
                <Store className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-white">
                {t.whyUs.localMarketTitle}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {t.whyUs.localMarketDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CALL TO ACTION WITH DIRECT WHATSAPP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-slate-800 p-8 sm:p-12 lg:p-14 text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-semibold tracking-widest text-emerald-400 uppercase">
              {t.bottomCta.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              {t.bottomCta.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {t.bottomCta.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            {/* WhatsApp Button */}
            <button
              id="bottom-cta-whatsapp-btn"
              type="button"
              onClick={openWhatsAppSelector}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 rounded-2xl shadow-[0_8px_25px_rgba(16,185,129,0.35)] transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-current text-white" />
              <span>{t.bottomCta.whatsappBtn}</span>
            </button>

            {/* Contact Us Page */}
            <button
              id="bottom-cta-contact-btn"
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-8 py-4 text-base font-bold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-2xl transition-all cursor-pointer"
            >
              {t.bottomCta.contactBtn}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
