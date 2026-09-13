import React from 'react';
import { PageId } from '../types';
import { useConfig } from '../context/ConfigContext';
import { useLanguage } from '../context/LanguageContext';
import { Mail, MessageCircle, ArrowUpRight } from 'lucide-react';
import { openWhatsAppSelector } from './FloatingWhatsApp';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { config } = useConfig();
  const { t } = useLanguage();

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
              {t.footer.about}
            </p>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              {t.footer.navigation}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  id="footer-link-home"
                  onClick={() => handleLinkClick('home')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  id="footer-link-ugc"
                  onClick={() => handleLinkClick('ugc')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  {t.nav.ugc}
                </button>
              </li>
              <li>
                <button
                  id="footer-link-ai"
                  onClick={() => handleLinkClick('ai-course')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  {t.nav.aiCourse}
                </button>
              </li>
              <li>
                <button
                  id="footer-link-social"
                  onClick={() => handleLinkClick('social-course')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  {t.nav.socialCourse}
                </button>
              </li>
              <li>
                <button
                  id="footer-link-payment"
                  onClick={() => handleLinkClick('payment')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  {t.nav.payment}
                </button>
              </li>
              <li>
                <button
                  id="footer-link-contact"
                  onClick={() => handleLinkClick('contact')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Channel Column */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              {t.footer.contactTitle}
            </h3>
            <div className="space-y-3 text-sm">
              <div>
                <span className="block text-xs text-slate-400 mb-1">{t.contactPage.emailUsDirectly}:</span>
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
                <span className="block text-xs text-slate-400 mb-1">{t.common.whatsappChat}:</span>
                <button
                  id="footer-whatsapp-link"
                  type="button"
                  onClick={openWhatsAppSelector}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-950/40 border border-emerald-800/60 text-emerald-400 hover:text-emerald-300 hover:bg-emerald-950/60 transition-all font-medium text-xs cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>{t.common.whatsappChat}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 mx-0.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p id="footer-copyright">
            © 2026 {config.brandName}. {t.footer.copyright}
          </p>
          <div className="flex items-center space-x-4 rtl:space-x-reverse text-slate-400">
            <span>{t.footer.rightsReserved}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
