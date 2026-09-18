import React, { useEffect } from 'react';
import { useConfig } from '../context/ConfigContext';
import { WHATSAPP_LINKS } from '../data/siteConfig';

/**
 * Event helper to allow any CTA on the website to open the remaining WhatsApp contact option
 */
export const openWhatsAppSelector = () => {
  if (typeof window !== 'undefined') {
    window.open(WHATSAPP_LINKS.chat1, '_blank', 'noopener,noreferrer');
  }
};

export const FloatingWhatsApp: React.FC = () => {
  const { config } = useConfig();
  const link = config.whatsAppLinks?.chat1 || WHATSAPP_LINKS.chat1;

  // Listen for trigger events (e.g. from CTA buttons across pages)
  useEffect(() => {
    const handleOpen = () => {
      window.open(link, '_blank', 'noopener,noreferrer');
    };
    window.addEventListener('open-whatsapp-popup', handleOpen);
    return () => window.removeEventListener('open-whatsapp-popup', handleOpen);
  }, [link]);

  const handleChat = () => {
    if (typeof window !== 'undefined') {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <aside
      aria-label="WhatsApp Contact Quick Access"
      className="fixed bottom-20 sm:bottom-22 right-4 sm:right-6 z-40 select-none"
    >
      {/* Hidden direct reference for programmatic verification */}
      <a
        id="whatsapp-direct-option-1"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="sr-only"
        aria-hidden="true"
        tabIndex={-1}
      >
        WhatsApp
      </a>

      {/* MAIN FLOATING BUTTON */}
      <button
        id="floating-whatsapp-chat-btn"
        type="button"
        onClick={handleChat}
        data-href={link}
        aria-label="Chat on WhatsApp"
        className="group relative flex items-center gap-2 px-4 sm:px-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm tracking-wide shadow-[0_4px_20px_rgba(16,185,129,0.4)] hover:shadow-[0_4px_25px_rgba(16,185,129,0.55)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer backdrop-blur-md"
      >
        <span className="whitespace-nowrap">💬 Chat on WhatsApp</span>
      </button>
    </aside>
  );
};

