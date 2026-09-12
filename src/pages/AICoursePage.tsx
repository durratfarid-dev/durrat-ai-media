import React from 'react';
import { PageId } from '../types';
import { useConfig } from '../context/ConfigContext';
import { useLanguage } from '../context/LanguageContext';
import { aiCourseCurriculum } from '../data/siteConfig';
import { 
  Sparkles, 
  Video, 
  CheckCircle2, 
  UserCheck, 
  ArrowRight, 
  CreditCard, 
  Layers, 
  Cpu, 
  Sliders, 
  ShieldCheck,
  Info
} from 'lucide-react';

interface AICoursePageProps {
  onNavigate: (page: PageId) => void;
}

export const AICoursePage: React.FC<AICoursePageProps> = ({ onNavigate }) => {
  const { config } = useConfig();
  const { t, isRTL } = useLanguage();

  const handleJoinCourse = () => {
    onNavigate('payment');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-24 pb-24 text-left rtl:text-right">
      {/* 1. HERO HEADER */}
      <section className="relative pt-12 md:pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/80 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Masterclass Training</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            {t.services.cards.aiVideo.title} <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">
              Masterclass
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {t.services.cards.aiVideo.sentence}
          </p>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="ai-course-join-hero-btn"
              onClick={handleJoinCourse}
              className="w-full sm:w-auto px-8 py-3.5 text-sm font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>{t.services.cards.aiVideo.cta}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </button>
            <button
              id="ai-course-curriculum-scroll-btn"
              onClick={() => document.getElementById('ai-curriculum')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-700/80 rounded-xl transition-all"
            >
              View Syllabus
            </button>
          </div>
        </div>
      </section>

      {/* 2. COURSE SECTIONS: AI Prompting & AI Video */}
      <section id="ai-curriculum" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            Comprehensive Curriculum
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Core Modules
          </h2>
          <p className="text-sm text-slate-400">
            From granular prompt phrasing to cinematic scene synthesis and motion physics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* SECTION 1: AI Prompting */}
          <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-8 sm:p-10 space-y-6 hover:border-slate-700 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                  Module 01
                </span>
                <h3 className="text-2xl font-bold text-white">AI Prompting</h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Master the exact linguistic engineering and parameter controls required to generate high-fidelity, photorealistic, and commercially usable visual assets.
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Topics Covered:
              </h4>
              <ul className="space-y-3">
                {aiCourseCurriculum.prompting.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* SECTION 2: AI Video */}
          <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-8 sm:p-10 space-y-6 hover:border-slate-700 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400">
                <Video className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                  Module 02
                </span>
                <h3 className="text-2xl font-bold text-white">AI Video</h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Transform static generations into dynamic, cinematic video sequences with coherent physics, character continuity, and director-level camera work.
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Topics Covered:
              </h4>
              <ul className="space-y-3">
                {aiCourseCurriculum.video.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHO IS THIS COURSE FOR? */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900/50 border border-slate-800 p-8 sm:p-12 lg:p-14">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
              Ideal Candidates
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Who Is This Course For?
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Designed with clear frameworks accessible to beginners and potent for working professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {aiCourseCurriculum.targetAudience.map((audience, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800/80 flex items-center gap-3.5 hover:border-cyan-500/40 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-cyan-950/60 border border-cyan-800/60 flex items-center justify-center text-cyan-400 shrink-0">
                  <UserCheck className="w-4 h-4" />
                </div>
                <span className="text-sm font-semibold text-slate-200">
                  {audience}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. COURSE PRICING SECTION (Placeholder clearly labeled) */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 border-2 border-cyan-500/60 p-8 sm:p-12 shadow-[0_0_35px_rgba(6,182,212,0.15)] text-center space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
              Enrollment & Access
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              AI Prompting + AI Video Masterclass
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Complete access to full prompting frameworks, video generation pipelines, and direct instructor feedback.
            </p>
          </div>

          {/* Price with clear placeholder */}
          <div className="py-4 border-y border-slate-800 max-w-sm mx-auto space-y-1">
            <span className="text-xs text-slate-400 block font-medium">
              Course Price:
            </span>
            <div className="flex items-center justify-center gap-2">
              <span className="text-4xl sm:text-5xl font-extrabold text-white">
                {config.prices.aiCourse}
              </span>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                Placeholder
              </span>
            </div>
            <span className="text-[11px] text-slate-400 block pt-1">
              One-time payment • Lifetime syllabus access
            </span>
          </div>

          {/* Action Button: "Join AI Course" */}
          <div className="pt-2">
            <button
              id="join-ai-course-action-btn"
              onClick={handleJoinCourse}
              className="w-full sm:w-auto min-w-[260px] py-4 px-8 text-center font-bold text-base text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all cursor-pointer inline-flex items-center justify-center gap-2"
            >
              <CreditCard className="w-5 h-5 text-slate-950" />
              <span>Join AI Course</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[11px] text-slate-400">
            Clicking Join AI Course will direct you to the secure Course Payment transfer section with bank instructions.
          </p>
        </div>
      </section>
    </div>
  );
};
