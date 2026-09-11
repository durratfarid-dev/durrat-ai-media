import React from 'react';
import { PageId } from '../types';
import { useConfig } from '../context/ConfigContext';
import { socialCourseCurriculum } from '../data/siteConfig';
import { 
  Share2, 
  CheckCircle2, 
  ArrowRight, 
  CreditCard, 
  PlaySquare, 
  Facebook, 
  Instagram, 
  TrendingUp,
  Sparkles
} from 'lucide-react';

interface SocialMediaCoursePageProps {
  onNavigate: (page: PageId) => void;
}

export const SocialMediaCoursePage: React.FC<SocialMediaCoursePageProps> = ({ onNavigate }) => {
  const { config } = useConfig();

  const handleJoinCourse = () => {
    onNavigate('payment');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-24 pb-24">
      {/* 1. HERO HEADER */}
      <section className="relative pt-12 md:pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/80 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Share2 className="w-3.5 h-3.5" />
            <span>Growth & Monetization Masterclass</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Social Media <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">
              Mastery
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Learn how to create content and build your presence on YouTube, Facebook and Instagram.
          </p>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="social-course-join-hero-btn"
              onClick={handleJoinCourse}
              className="w-full sm:w-auto px-8 py-3.5 text-sm font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Join Social Media Course</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              id="social-course-curriculum-scroll-btn"
              onClick={() => document.getElementById('social-modules')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-700/80 rounded-xl transition-all"
            >
              Explore 3 Platforms
            </button>
          </div>
        </div>
      </section>

      {/* 2. THREE SUBSECTIONS: YouTube, Facebook, Instagram */}
      <section id="social-modules" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            Platform-Specific Strategies
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            The 3 Big Channels
          </h2>
          <p className="text-sm text-slate-400">
            Master the distinct audience psychologies, algorithms, and revenue engines of each dominant ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* SUBSECTION 1: YouTube */}
          <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-8 flex flex-col justify-between hover:border-red-500/40 transition-colors">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-red-950/70 border border-red-800/60 flex items-center justify-center text-red-400">
                  <PlaySquare className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-red-400 uppercase tracking-wider font-semibold">
                    Channel Pillar
                  </span>
                  <h3 className="text-2xl font-bold text-white">YouTube</h3>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Build long-term discoverability through search optimization, compelling video packaging, and high-retention editing.
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Curriculum:
                </h4>
                <ul className="space-y-2.5">
                  {socialCourseCurriculum.youtube.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* SUBSECTION 2: Facebook */}
          <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-8 flex flex-col justify-between hover:border-blue-500/40 transition-colors">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-950/70 border border-blue-800/60 flex items-center justify-center text-blue-400">
                  <Facebook className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-blue-400 uppercase tracking-wider font-semibold">
                    Meta Pillar
                  </span>
                  <h3 className="text-2xl font-bold text-white">Facebook</h3>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Leverage viral shareability, high-converting short reels, and professional page monetization features.
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Curriculum:
                </h4>
                <ul className="space-y-2.5">
                  {socialCourseCurriculum.facebook.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* SUBSECTION 3: Instagram */}
          <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-8 flex flex-col justify-between hover:border-pink-500/40 transition-colors">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-pink-950/70 border border-pink-800/60 flex items-center justify-center text-pink-400">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-pink-400 uppercase tracking-wider font-semibold">
                    Visual Pillar
                  </span>
                  <h3 className="text-2xl font-bold text-white">Instagram</h3>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Turn your Instagram profile into a high-trust personal brand and customer acquisition funnel with Reels and stories.
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Curriculum:
                </h4>
                <ul className="space-y-2.5">
                  {socialCourseCurriculum.instagram.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COURSE PRICING SECTION (Placeholder clearly labeled) */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 border-2 border-cyan-500/60 p-8 sm:p-12 shadow-[0_0_35px_rgba(6,182,212,0.15)] text-center space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
              Complete Training Bundle
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Social Media Mastery Course
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Full breakdown across YouTube, Facebook & Instagram strategies, monetization blueprints, and workflow templates.
            </p>
          </div>

          {/* Price with clear placeholder */}
          <div className="py-4 border-y border-slate-800 max-w-sm mx-auto space-y-1">
            <span className="text-xs text-slate-400 block font-medium">
              Course Price:
            </span>
            <div className="flex items-center justify-center gap-2">
              <span className="text-4xl sm:text-5xl font-extrabold text-white">
                {config.prices.socialMediaCourse}
              </span>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                Placeholder
              </span>
            </div>
            <span className="text-[11px] text-slate-400 block pt-1">
              One-time payment • Complete lifetime curriculum
            </span>
          </div>

          {/* Action Button: "Join Social Media Course" */}
          <div className="pt-2">
            <button
              id="join-social-course-action-btn"
              onClick={handleJoinCourse}
              className="w-full sm:w-auto min-w-[280px] py-4 px-8 text-center font-bold text-base text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all cursor-pointer inline-flex items-center justify-center gap-2"
            >
              <CreditCard className="w-5 h-5 text-slate-950" />
              <span>Join Social Media Course</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[11px] text-slate-400">
            Clicking Join Social Media Course will take you to the Course Payment section with banking and verification instructions.
          </p>
        </div>
      </section>
    </div>
  );
};
