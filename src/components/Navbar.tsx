import React, { useState } from 'react';
import { PageId } from '../types';
import { useConfig } from '../context/ConfigContext';
import { useLanguage } from '../context/LanguageContext';
import { NavbarLanguageSelector } from './NavbarLanguageSelector';
import { 
  Menu, 
  X, 
  Sparkles, 
  Video, 
  Share2, 
  CreditCard, 
  Mail, 
  Settings2,
  ExternalLink,
  MapPin,
  MessageCircle
} from 'lucide-react';
import { openWhatsAppSelector } from './FloatingWhatsApp';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenQuickEdit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenQuickEdit }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { config } = useConfig();
  const { t, isRTL } = useLanguage();

  const navItems: { id: PageId; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: t.nav.home, icon: null },
    { id: 'ugc', label: t.nav.ugc, icon: <Video className="w-4 h-4 mx-1 text-cyan-400" /> },
    { id: 'ai-course', label: t.nav.aiCourse, icon: <Sparkles className="w-4 h-4 mx-1 text-cyan-400" /> },
    { id: 'social-course', label: t.nav.socialCourse, icon: <Share2 className="w-4 h-4 mx-1 text-cyan-400" /> },
    { id: 'payment', label: t.nav.payment, icon: <CreditCard className="w-4 h-4 mx-1 text-slate-400" /> },
    { id: 'contact', label: t.nav.contact, icon: <Mail className="w-4 h-4 mx-1 text-slate-400" /> },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Tagline */}
          <button
            id="nav-brand-button"
            onClick={() => handleNavClick('home')}
            className="flex flex-col items-start text-left rtl:text-right group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-md py-1 cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
              <span className="text-xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                {config.brandName}
              </span>
            </div>
            <span className="text-[11px] font-medium tracking-wider uppercase text-slate-400 pl-4.5 rtl:pl-0 rtl:pr-4.5">
              {config.tagline}
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 rtl:space-x-reverse xl:space-x-2" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`inline-flex items-center px-3.5 py-2 text-sm font-medium rounded-lg transition-all cursor-pointer ${
                    isActive
                      ? 'text-cyan-400 bg-slate-900 border border-slate-700/80 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Desktop Action Buttons & Language Selector */}
          <div className="hidden lg:flex items-center space-x-2.5 rtl:space-x-reverse">
            {/* Scalable Multi-Language Selector */}
            <NavbarLanguageSelector />

            {/* Quick Edit Config Button for Site Owner */}
            <button
              id="nav-quick-edit-btn"
              onClick={onOpenQuickEdit}
              title="Edit prices, bank details, and contact info"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-400 hover:text-cyan-300 hover:bg-slate-900 border border-slate-800 rounded-lg transition-colors cursor-pointer"
            >
              <Settings2 className="w-3.5 h-3.5" />
              <span>{t.nav.quickEdit}</span>
            </button>

            {/* Highlighted CTA: "Get UGC Ad" */}
            <button
              id="nav-get-ugc-cta"
              onClick={() => handleNavClick('ugc')}
              className="relative inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-[0_0_20px_rgba(6,182,212,0.35)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-all duration-200 cursor-pointer"
            >
              {t.services.cards.ugc.cta}
            </button>
          </div>

          {/* Mobile Menu Button & Quick Language */}
          <div className="flex items-center gap-2 lg:hidden">
            <NavbarLanguageSelector />

            <button
              id="mobile-quick-edit-btn"
              onClick={onOpenQuickEdit}
              className="p-2 text-slate-400 hover:text-cyan-400 rounded-lg border border-slate-800 bg-slate-900/60 cursor-pointer"
              title="Edit Details"
            >
              <Settings2 className="w-4 h-4" />
            </button>

            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-slate-400 hover:text-white hover:bg-slate-900 rounded-lg border border-slate-800 focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-slate-950/98 px-4 pt-3 pb-6 space-y-2">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                id={`mobile-nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-4 py-3 text-sm font-medium rounded-lg text-left rtl:text-right transition-colors cursor-pointer ${
                  isActive
                    ? 'text-cyan-400 bg-slate-900 border border-slate-800'
                    : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
                }`}
              >
                <div className="flex items-center">
                  {item.icon}
                  <span>{item.label}</span>
                </div>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
              </button>
            );
          })}

          <div className="pt-3 border-t border-slate-800/80 space-y-2">
            <button
              id="mobile-get-ugc-cta"
              onClick={() => handleNavClick('ugc')}
              className="w-full py-3 px-4 text-center font-semibold text-sm text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-md transition-colors cursor-pointer"
            >
              {t.services.cards.ugc.cta}
            </button>
            <button
              id="mobile-whatsapp-btn"
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                openWhatsAppSelector();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-medium text-emerald-400 hover:text-emerald-300 bg-emerald-950/30 border border-emerald-800/50 rounded-lg transition-colors cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>{t.common.whatsappChat}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
