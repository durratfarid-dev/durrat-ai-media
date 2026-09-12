import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { upcomingLanguages } from '../translations';
import { Globe, Check, ChevronUp, Plus, Sparkles, X } from 'lucide-react';

export const FloatingLanguageSelector: React.FC = () => {
  const { language, setLanguage, languages, currentLangMeta } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [showMoreModal, setShowMoreModal] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close when clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (code: string) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div ref={menuRef} className="fixed bottom-6 left-4 sm:left-6 z-40 select-none">
      {/* LANGUAGE SELECTION POPOVER */}
      {isOpen && (
        <div 
          className="absolute bottom-16 left-0 w-72 sm:w-80 rounded-2xl bg-slate-900/95 backdrop-blur-xl border border-slate-700/90 shadow-[0_10px_35px_rgba(0,0,0,0.6)] p-3 space-y-2 animate-in fade-in slide-in-from-bottom-3 duration-200"
        >
          <div className="flex items-center justify-between px-2 py-1.5 border-b border-slate-800">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
              <Globe className="w-4 h-4 text-cyan-400" />
              <span>Select Language / زبان منتخب کریں</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Active Language List */}
          <div className="max-h-64 overflow-y-auto space-y-1 pr-1 custom-scrollbar">
            {languages.map((lang) => {
              const isSelected = lang.code === language;
              return (
                <button
                  key={lang.code}
                  onClick={() => handleSelect(lang.code)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isSelected
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl leading-none">{lang.flag}</span>
                    <div className="text-left rtl:text-right">
                      <span className="block font-semibold">{lang.nativeName}</span>
                      <span className="block text-[11px] text-slate-400 font-normal">
                        {lang.name}
                      </span>
                    </div>
                  </div>
                  {isSelected && (
                    <div className="w-5 h-5 rounded-full bg-cyan-400/20 flex items-center justify-center text-cyan-400">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* More Languages Option */}
          <div className="pt-1.5 border-t border-slate-800">
            <button
              onClick={() => {
                setShowMoreModal(true);
                setIsOpen(false);
              }}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-cyan-300 bg-slate-950/70 hover:bg-slate-800/90 border border-slate-800 hover:border-cyan-500/40 transition-all group"
            >
              <div className="flex items-center gap-2">
                <Plus className="w-4 h-4 text-cyan-400 group-hover:rotate-90 transition-transform duration-200" />
                <span>➕ More Languages / المزيد من اللغات</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-400">
                Coming Soon
              </span>
            </button>
          </div>
        </div>
      )}

      {/* FLOATING TRIGGER BUTTON */}
      <button
        id="floating-language-trigger-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change Website Language"
        className="group flex items-center gap-2.5 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-full bg-slate-900/95 hover:bg-slate-850 text-slate-200 hover:text-white border border-slate-700/80 hover:border-cyan-400/70 shadow-[0_4px_25px_rgba(0,0,0,0.5)] hover:shadow-[0_4px_30px_rgba(6,182,212,0.3)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer backdrop-blur-md"
      >
        <span className="text-base leading-none">{currentLangMeta.flag}</span>
        <Globe className="w-4 h-4 text-cyan-400 animate-spin-slow" />
        <span className="text-xs sm:text-sm font-bold tracking-wide">
          {currentLangMeta.nativeName}
        </span>
        <ChevronUp className={`w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* MORE LANGUAGES MODAL */}
      {showMoreModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
          <div className="w-full max-w-md rounded-3xl bg-slate-900 border border-slate-700 p-6 space-y-5 shadow-2xl text-left rtl:text-right">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2 text-white font-bold text-lg">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span>More Languages Expanding</span>
              </div>
              <button
                onClick={() => setShowMoreModal(false)}
                className="p-1 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              Our translation architecture is built to support all regional and global dialects. We are actively expanding full native translations for:
            </p>

            <div className="grid grid-cols-2 gap-2 max-h-56 overflow-y-auto pr-1">
              {upcomingLanguages.map((up) => (
                <div 
                  key={up.name}
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs font-medium text-slate-300"
                >
                  <span className="text-lg leading-none">{up.flag}</span>
                  <div>
                    <span className="block font-semibold text-white">{up.nativeName}</span>
                    <span className="text-[10px] text-slate-400">{up.name}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 rounded-2xl bg-cyan-950/40 border border-cyan-800/60 text-xs text-cyan-300">
              💡 Need a custom translation for your corporate team? Message us directly on WhatsApp!
            </div>

            <button
              onClick={() => setShowMoreModal(false)}
              className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm transition-colors"
            >
              Got It
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
