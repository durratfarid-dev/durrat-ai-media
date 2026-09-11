import React from 'react';
import { PageId } from '../types';
import { useConfig } from '../context/ConfigContext';
import { whyChooseUsPoints } from '../data/siteConfig';
import { 
  Video, 
  Sparkles, 
  Share2, 
  ArrowRight, 
  CheckCircle2, 
  Play, 
  Layers, 
  TrendingUp, 
  MessageCircle, 
  ExternalLink,
  Flame,
  ShieldCheck,
  Cpu,
  MonitorSmartphone,
  Eye
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { config } = useConfig();

  const handleScrollToServices = () => {
    const el = document.getElementById('services-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-24 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 md:pt-20 lg:pt-24 overflow-hidden">
        {/* Subtle high-tech ambient gradient */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full" />
          <div className="absolute top-48 right-10 w-[400px] h-[300px] bg-blue-600/10 blur-[140px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            {/* Business & Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-semibold tracking-wide text-slate-200 uppercase">
                {config.brandName}
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-xs font-medium tracking-wider text-cyan-400">
                {config.tagline}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Create Better Content. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
                Grow Your Brand.
              </span>{' '}
              Learn AI.
            </h1>

            {/* Short Description */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
              Professional UGC ads, AI content creation, and practical social media training.
            </p>

            {/* Main CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                id="hero-get-ugc-btn"
                onClick={() => onNavigate('ugc')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] transition-all duration-200 cursor-pointer"
              >
                <Video className="w-5 h-5 text-slate-950" />
                <span>Get UGC Ad</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <button
                id="hero-explore-courses-btn"
                onClick={handleScrollToServices}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all duration-200 cursor-pointer"
              >
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span>Explore Courses</span>
              </button>
            </div>
          </div>

          {/* PROFESSIONAL VISUAL SECTION */}
          {/* Representing AI content creation, UGC advertising, social media and digital creativity */}
          <div className="mt-14 max-w-5xl mx-auto">
            <div className="relative rounded-2xl bg-slate-900/80 border border-slate-800 shadow-2xl p-4 sm:p-6 lg:p-8 backdrop-blur-xl">
              {/* Studio Header Bar */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-xs font-medium text-slate-400 ml-2 font-mono">
                    Durrat AI Media • Creative Engine Workspace
                  </span>
                </div>
                <div className="hidden sm:flex items-center gap-3 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    UGC Pipeline Active
                  </span>
                  <span className="text-slate-700">|</span>
                  <span className="text-cyan-400 font-mono">4K 60FPS AI Video</span>
                </div>
              </div>

              {/* Visual Showcase Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
                {/* Visual Card 1: UGC Ad Showcase */}
                <div className="bg-slate-950/70 border border-slate-800/90 rounded-xl p-4 flex flex-col justify-between space-y-4 hover:border-cyan-500/40 transition-colors">
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                      <span className="inline-flex items-center gap-1 font-semibold text-cyan-400 uppercase tracking-wider text-[10px]">
                        <Video className="w-3.5 h-3.5" />
                        UGC Ad Creative
                      </span>
                      <span className="px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 text-[10px] font-bold border border-emerald-800/60">
                        +380% ROAS
                      </span>
                    </div>
                    {/* Simulated High-Converting UGC Phone Screen */}
                    <div className="relative aspect-[9/12] w-full rounded-lg bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 flex flex-col justify-between p-3 overflow-hidden">
                      <div className="flex justify-between items-start">
                        <span className="px-2 py-0.5 rounded bg-slate-950/90 text-white text-[10px] font-mono border border-slate-700">
                          Hook: 0-3s
                        </span>
                        <div className="w-6 h-6 rounded-full bg-slate-800/80 flex items-center justify-center text-cyan-400">
                          <Eye className="w-3 h-3" />
                        </div>
                      </div>

                      <div className="text-center py-4">
                        <div className="w-12 h-12 mx-auto rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400 mb-2">
                          <Play className="w-5 h-5 fill-cyan-400" />
                        </div>
                        <p className="text-xs font-semibold text-white">Product Demo & Review</p>
                        <p className="text-[10px] text-slate-400 mt-0.5">Direct-Response Vertical Format</p>
                      </div>

                      <div className="bg-slate-900/90 p-2 rounded border border-slate-800 text-[11px] text-slate-300">
                        <div className="flex justify-between text-[10px] text-slate-400 mb-1">
                          <span>Audience Retention</span>
                          <span className="text-emerald-400 font-bold">87.4%</span>
                        </div>
                        <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-cyan-400 h-full w-[87%]" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 leading-snug">
                    Authentic UGC ads engineered to bypass ad fatigue and convert scrollers into buyers.
                  </p>
                </div>

                {/* Visual Card 2: AI Prompting & AI Video */}
                <div className="bg-slate-950/70 border border-slate-800/90 rounded-xl p-4 flex flex-col justify-between space-y-4 hover:border-cyan-500/40 transition-colors">
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                      <span className="inline-flex items-center gap-1 font-semibold text-cyan-400 uppercase tracking-wider text-[10px]">
                        <Cpu className="w-3.5 h-3.5" />
                        AI Video Generation
                      </span>
                      <span className="px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-400 text-[10px] font-mono border border-cyan-800/60">
                        Gen-AI Pipeline
                      </span>
                    </div>

                    <div className="aspect-[9/12] w-full rounded-lg bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-3 flex flex-col justify-between">
                      <div className="space-y-2">
                        <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                          Prompt Matrix
                        </div>
                        <div className="p-2 rounded bg-slate-950 border border-slate-800 text-[10px] text-cyan-300 font-mono leading-relaxed">
                          "Cinematic macro studio lighting, 8k textures, consistent character motion, dynamic camera pan..."
                        </div>
                      </div>

                      <div className="space-y-1.5 py-2">
                        <div className="flex items-center justify-between text-[10px] text-slate-400">
                          <span>Image-to-Video Engine</span>
                          <span className="text-cyan-400 font-mono">Ready</span>
                        </div>
                        <div className="flex items-center justify-between text-[10px] text-slate-400">
                          <span>Consistent Characters</span>
                          <span className="text-emerald-400 font-mono">Matched</span>
                        </div>
                        <div className="flex items-center justify-between text-[10px] text-slate-400">
                          <span>Cinematic Lighting</span>
                          <span className="text-cyan-400 font-mono">Photoreal</span>
                        </div>
                      </div>

                      <div className="p-2 rounded bg-slate-900/90 border border-slate-800 text-center">
                        <span className="text-[10px] text-slate-300 font-medium">
                          Multi-Model Mastery: Midjourney, Runway, Kling, Sora workflows
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 leading-snug">
                    Master modern AI generation techniques for characters, story scenes, and visual effects.
                  </p>
                </div>

                {/* Visual Card 3: Social Media Growth & Monetization */}
                <div className="bg-slate-950/70 border border-slate-800/90 rounded-xl p-4 flex flex-col justify-between space-y-4 hover:border-cyan-500/40 transition-colors">
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                      <span className="inline-flex items-center gap-1 font-semibold text-cyan-400 uppercase tracking-wider text-[10px]">
                        <TrendingUp className="w-3.5 h-3.5" />
                        Multi-Platform Growth
                      </span>
                      <span className="px-2 py-0.5 rounded bg-blue-950/80 text-blue-400 text-[10px] font-bold border border-blue-800/60">
                        YouTube • Meta • IG
                      </span>
                    </div>

                    <div className="aspect-[9/12] w-full rounded-lg bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-3 flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="p-2.5 rounded bg-slate-950 border border-slate-800 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded bg-rose-950/80 text-rose-400 flex items-center justify-center text-[10px] font-bold">
                              YT
                            </div>
                            <span className="text-[11px] font-medium text-white">YouTube Shorts</span>
                          </div>
                          <span className="text-[10px] text-emerald-400 font-mono font-bold">+140K Views</span>
                        </div>

                        <div className="p-2.5 rounded bg-slate-950 border border-slate-800 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded bg-pink-950/80 text-pink-400 flex items-center justify-center text-[10px] font-bold">
                              IG
                            </div>
                            <span className="text-[11px] font-medium text-white">Instagram Reels</span>
                          </div>
                          <span className="text-[10px] text-emerald-400 font-mono font-bold">+94% Reach</span>
                        </div>

                        <div className="p-2.5 rounded bg-slate-950 border border-slate-800 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded bg-blue-950/80 text-blue-400 flex items-center justify-center text-[10px] font-bold">
                              FB
                            </div>
                            <span className="text-[11px] font-medium text-white">Facebook Reels</span>
                          </div>
                          <span className="text-[10px] text-emerald-400 font-mono font-bold">Monetized</span>
                        </div>
                      </div>

                      <div className="p-2 rounded bg-slate-900/90 border border-slate-800 text-[11px] text-slate-300">
                        <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">
                          Key Focus
                        </div>
                        <p className="text-[10px] text-slate-300 leading-snug">
                          Viral hooks, thumbnail strategy, audience growth & monetization setups.
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 leading-snug">
                    Turn attention into scalable reach and sustainable monetization channels.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THREE MAIN SERVICE CARDS */}
      <section id="services-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            Our Core Offerings
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            High-Impact Services & Practical Training
          </p>
          <p className="text-sm text-slate-400">
            Whether you need custom UGC ads for your business or want to master AI & social content creation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* CARD 1: UGC Ad Making */}
          <div 
            id="service-card-ugc"
            className="group relative bg-slate-900/70 hover:bg-slate-900 border border-slate-800 hover:border-cyan-500/60 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
          >
            <div>
              <div className="w-14 h-14 rounded-xl bg-cyan-950/70 border border-cyan-800/60 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-105 transition-transform">
                <Video className="w-7 h-7" />
              </div>
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-cyan-950 text-cyan-400 border border-cyan-800/70 mb-3">
                Main Service
              </span>
              <h3 className="text-2xl font-bold text-white mb-3">
                UGC Ad Making
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Professional UGC-style ads created for brands, products and businesses.
              </p>
              <ul className="space-y-2 mb-8 text-xs text-slate-400">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>High-converting direct response hooks</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Optimized for TikTok, Instagram & Facebook Ads</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Professional editing, captions & formatting</span>
                </li>
              </ul>
            </div>

            <button
              id="card-get-ugc-btn"
              onClick={() => onNavigate('ugc')}
              className="w-full py-3 px-4 text-center font-bold text-sm text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Get UGC Ad</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* CARD 2: AI Prompting + AI Video */}
          <div 
            id="service-card-ai"
            className="group relative bg-slate-900/70 hover:bg-slate-900 border border-slate-800 hover:border-cyan-500/60 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
          >
            <div>
              <div className="w-14 h-14 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-105 transition-transform">
                <Sparkles className="w-7 h-7" />
              </div>
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-800 text-slate-300 border border-slate-700 mb-3">
                Online Training
              </span>
              <h3 className="text-2xl font-bold text-white mb-3">
                AI Prompting + AI Video
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Learn how to create powerful AI images, videos, characters, stories and creative content.
              </p>
              <ul className="space-y-2 mb-8 text-xs text-slate-400">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Writing effective image & video prompts</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Consistent characters & story animation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Text-to-video & cinematic scene workflows</span>
                </li>
              </ul>
            </div>

            <button
              id="card-view-ai-course-btn"
              onClick={() => onNavigate('ai-course')}
              className="w-full py-3 px-4 text-center font-semibold text-sm text-white bg-slate-800 hover:bg-slate-700 hover:text-cyan-300 border border-slate-700 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>View Course</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* CARD 3: Social Media */}
          <div 
            id="service-card-social"
            className="group relative bg-slate-900/70 hover:bg-slate-900 border border-slate-800 hover:border-cyan-500/60 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
          >
            <div>
              <div className="w-14 h-14 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-105 transition-transform">
                <Share2 className="w-7 h-7" />
              </div>
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-800 text-slate-300 border border-slate-700 mb-3">
                Online Training
              </span>
              <h3 className="text-2xl font-bold text-white mb-3">
                Social Media
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Learn YouTube, Facebook and Instagram content creation, growth and monetization.
              </p>
              <ul className="space-y-2 mb-8 text-xs text-slate-400">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>YouTube Shorts & long-form strategies</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Facebook Reels & page monetization basics</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Instagram engagement & profile optimization</span>
                </li>
              </ul>
            </div>

            <button
              id="card-view-social-course-btn"
              onClick={() => onNavigate('social-course')}
              className="w-full py-3 px-4 text-center font-semibold text-sm text-white bg-slate-800 hover:bg-slate-700 hover:text-cyan-300 border border-slate-700 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>View Course</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. WHY DURRAT AI MEDIA? SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900/60 border border-slate-800/80 p-8 sm:p-12 lg:p-16">
          <div className="max-w-3xl mb-12 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400">
              Built For Serious Results
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Why Durrat AI Media?
            </h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              We combine real hands-on UGC advertising execution with actionable, modern digital education so you can scale your brand or master in-demand creator skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUsPoints.map((point, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-colors space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-950/60 border border-cyan-800/60 flex items-center justify-center text-cyan-400">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-white">
                  {point.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {point.desc}
                </p>
              </div>
            ))}

            {/* Sixth highlight card: Fast Turnaround & High Quality */}
            <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-colors space-y-3">
              <div className="w-10 h-10 rounded-lg bg-cyan-950/60 border border-cyan-800/60 flex items-center justify-center text-cyan-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white">
                Reliable Production Standards
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Direct communication, transparent revisions, and strict adherence to social advertising best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STRONG CTA & WHATSAPP CHANNEL SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-slate-800 p-8 sm:p-12 lg:p-16 text-center space-y-8">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase">
              Take The Next Step
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Ready to Create, Grow and Earn?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Let's create high-converting UGC ads for your business or start your journey in AI and social media mastery today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* CTA Button: Contact Us */}
            <button
              id="cta-contact-us-btn"
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-8 py-4 text-base font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl shadow-[0_0_25px_rgba(6,182,212,0.35)] transition-all cursor-pointer"
            >
              Contact Us
            </button>

            {/* WhatsApp Channel Button */}
            <a
              id="cta-join-whatsapp-channel-btn"
              href={config.whatsAppChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-emerald-400 hover:text-emerald-300 bg-emerald-950/40 hover:bg-emerald-950/60 border border-emerald-800/80 rounded-xl transition-all shadow-md"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              <span>Join Our WhatsApp Channel</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
