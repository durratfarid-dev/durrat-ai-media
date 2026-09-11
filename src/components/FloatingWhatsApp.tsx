import React from 'react';
import { useConfig } from '../context/ConfigContext';
import { MessageCircle, ExternalLink } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const { config } = useConfig();

  return (
    <aside aria-label="WhatsApp Channel Quick Access" className="fixed bottom-20 right-6 z-40">
      <a
        id="floating-whatsapp-channel-btn"
        href={config.whatsAppChannelUrl}
        target="_blank"
        rel="noopener noreferrer"
        title="Join Durrat AI Media WhatsApp Channel"
        className="group flex items-center gap-2 px-3.5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-[0_4px_15px_rgba(16,185,129,0.35)] hover:shadow-[0_4px_20px_rgba(16,185,129,0.5)] transition-all duration-300 transform hover:-translate-y-0.5"
      >
        <MessageCircle className="w-4 h-4 fill-current" />
        <span className="text-[11px] font-bold tracking-wide hidden sm:inline">
          WhatsApp Channel
        </span>
        <ExternalLink className="w-3 h-3 opacity-80 group-hover:opacity-100 hidden sm:inline" />
      </a>
    </aside>
  );
};
