import React from 'react';
import { Bot, Sparkles } from 'lucide-react';

interface FloatingAssistantButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export const FloatingAssistantButton: React.FC<FloatingAssistantButtonProps> = ({
  isOpen,
  onClick,
}) => {
  if (isOpen) return null;

  return (
    <aside aria-label="Durrat AI Assistant Quick Access" className="fixed bottom-6 right-6 z-40">
      <button
        id="floating-durrat-ai-assistant-btn"
        onClick={onClick}
        className="group relative flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-full bg-slate-900/95 hover:bg-slate-850 text-cyan-300 hover:text-cyan-200 border border-cyan-500/50 hover:border-cyan-400 shadow-[0_4px_25px_rgba(6,182,212,0.35)] hover:shadow-[0_4px_30px_rgba(6,182,212,0.55)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
        title="Open Durrat AI Assistant"
      >
        {/* Ambient background pulse */}
        <span className="absolute -inset-0.5 rounded-full bg-cyan-500/20 blur-sm group-hover:bg-cyan-500/30 transition-all -z-10" />

        {/* Live indicator dot */}
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400" />
        </span>

        {/* Button Text */}
        <span className="text-xs sm:text-sm font-bold tracking-wide text-white">
          🤖 Durrat AI Assistant
        </span>
      </button>
    </aside>
  );
};
