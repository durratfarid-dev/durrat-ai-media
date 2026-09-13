import React, { useState, useRef, useEffect } from 'react';
import { useConfig } from '../context/ConfigContext';
import { X } from 'lucide-react';

/**
 * Event helper to allow any CTA on the website to open the WhatsApp selection popup
 */
export const openWhatsAppSelector = () => {
  window.dispatchEvent(new CustomEvent('open-whatsapp-popup'));
};

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413Z" />
  </svg>
);

export const FloatingWhatsApp: React.FC = () => {
  const { config } = useConfig();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Listen for external trigger events (e.g. from CTA buttons across pages)
  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-whatsapp-popup', handleOpen);
    return () => window.removeEventListener('open-whatsapp-popup', handleOpen);
  }, []);

  // Close when clicking outside of the popup container
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
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

  const links = config.whatsAppLinks;

  return (
    <aside
      ref={containerRef}
      aria-label="WhatsApp Contact Quick Access"
      className="fixed bottom-20 sm:bottom-22 right-4 sm:right-6 z-40 select-none"
    >
      {/* SELECTION POPUP / MENU */}
      {isOpen && (
        <div
          id="whatsapp-options-popup"
          role="dialog"
          aria-label="WhatsApp Chat Options"
          className="absolute bottom-full mb-3 right-0 w-64 sm:w-72 rounded-2xl bg-slate-900/98 backdrop-blur-xl border border-slate-700/80 shadow-[0_12px_40px_rgba(0,0,0,0.65)] p-3 sm:p-4 space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-200"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-2.5 border-b border-slate-800">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
              <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <WhatsAppIcon className="w-3.5 h-3.5" />
              </div>
              <span>WhatsApp</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close WhatsApp menu"
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Clean 2-Option List */}
          <div className="space-y-2">
            {/* Option 1 */}
            <a
              id="whatsapp-direct-option-1"
              href={links.chat1}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 w-full p-3 rounded-xl bg-slate-950/70 hover:bg-emerald-950/50 border border-slate-800 hover:border-emerald-500/50 text-white transition-all group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-lg bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all shrink-0">
                <WhatsAppIcon className="w-5 h-5" />
              </div>
              <span className="font-semibold text-sm text-slate-100 group-hover:text-emerald-300 transition-colors">
                WhatsApp
              </span>
            </a>

            {/* Option 2 */}
            <a
              id="whatsapp-direct-option-2"
              href={links.chat2}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 w-full p-3 rounded-xl bg-slate-950/70 hover:bg-emerald-950/50 border border-slate-800 hover:border-emerald-500/50 text-white transition-all group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-lg bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all shrink-0">
                <WhatsAppIcon className="w-5 h-5" />
              </div>
              <span className="font-semibold text-sm text-slate-100 group-hover:text-emerald-300 transition-colors">
                WhatsApp
              </span>
            </a>
          </div>
        </div>
      )}

      {/* MAIN FLOATING BUTTON */}
      <button
        id="floating-whatsapp-chat-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Chat on WhatsApp"
        className="group relative flex items-center gap-2 px-4 sm:px-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm tracking-wide shadow-[0_4px_20px_rgba(16,185,129,0.4)] hover:shadow-[0_4px_25px_rgba(16,185,129,0.55)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer backdrop-blur-md"
      >
        <span className="whitespace-nowrap">💬 Chat on WhatsApp</span>
      </button>
    </aside>
  );
};
