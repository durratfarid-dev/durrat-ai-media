import React from 'react';
import { PageId } from '../types';
import { useConfig } from '../context/ConfigContext';
import { Mail, MessageCircle, ExternalLink, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { config } = useConfig();

  const handleLinkClick = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
              <span className="text-xl font-bold tracking-tight text-white">
                {config.brandName}
              </span>
            </div>
            <p className="text-xs uppercase tracking-widest text-cyan-400/90 font-medium">
              {config.tagline}
            </p>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Professional UGC ad making for brands and businesses, paired with practical online training in AI prompting, AI video creation, and high-impact social media growth.
            </p>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  id="footer-link-home"
                  onClick={() => handleLinkClick('home')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  id="footer-link-ugc"
                  onClick={() => handleLinkClick('ugc')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  UGC Ads
                </button>
              </li>
              <li>
                <button
                  id="footer-link-ai"
                  onClick={() => handleLinkClick('ai-course')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  AI + AI Video
                </button>
              </li>
              <li>
                <button
                  id="footer-link-social"
                  onClick={() => handleLinkClick('social-course')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Social Media
                </button>
              </li>
              <li>
                <button
                  id="footer-link-payment"
                  onClick={() => handleLinkClick('payment')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Course Payment
                </button>
              </li>
              <li>
                <button
                  id="footer-link-contact"
                  onClick={() => handleLinkClick('contact')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Channel Column */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Direct Communication
            </h3>
            <div className="space-y-3 text-sm">
              <div>
                <span className="block text-xs text-slate-400 mb-1">Email Inquiries:</span>
                <a
                  id="footer-email-link"
                  href={`mailto:${config.contactEmail}`}
                  className="inline-flex items-center gap-2 text-slate-200 hover:text-cyan-400 font-mono transition-colors"
                >
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>{config.contactEmail}</span>
                </a>
              </div>

              <div>
                <span className="block text-xs text-slate-400 mb-1">WhatsApp Channel:</span>
                <a
                  id="footer-whatsapp-link"
                  href={config.whatsAppChannelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-950/40 border border-emerald-800/60 text-emerald-400 hover:text-emerald-300 hover:bg-emerald-950/60 transition-all font-medium text-xs"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Join Our WhatsApp Channel</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p id="footer-copyright">
            © 2026 {config.brandName}. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-slate-400">
            <span>AI • UGC • Social Media</span>
            <span className="inline-block w-1 h-1 rounded-full bg-slate-700" />
            <span>Digital Agency & Online Training</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
