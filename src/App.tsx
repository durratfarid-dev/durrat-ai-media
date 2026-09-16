import React, { useState, useEffect, useRef } from 'react';
import { PageId } from './types';
import { ConfigProvider } from './context/ConfigContext';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { FloatingAssistantButton } from './components/FloatingAssistantButton';
import { FloatingLanguageSelector } from './components/FloatingLanguageSelector';
import { AIAssistantModal } from './components/AIAssistantModal';
import { QuickEditModal } from './components/QuickEditModal';

import { HomePage } from './pages/HomePage';
import { UGCPage } from './pages/UGCPage';
import { AICoursePage } from './pages/AICoursePage';
import { SocialMediaCoursePage } from './pages/SocialMediaCoursePage';
import { ContactPage } from './pages/ContactPage';
import { PaymentPage } from './pages/PaymentPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>(() => {
    const cleanPath = window.location.pathname.replace(/^\/+|\/+$/g, '') as PageId;
    const validPages: PageId[] = ['home', 'ugc', 'ai-course', 'social-course', 'contact', 'payment'];
    if (validPages.includes(cleanPath)) {
      return cleanPath;
    }
    const hash = window.location.hash.replace('#', '') as PageId;
    return validPages.includes(hash) ? hash : 'home';
  });

  const [isQuickEditOpen, setIsQuickEditOpen] = useState(false);
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);

  // Sync hash and path with page
  useEffect(() => {
    const handleUrlChange = () => {
      const cleanPath = window.location.pathname.replace(/^\/+|\/+$/g, '') as PageId;
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = ['home', 'ugc', 'ai-course', 'social-course', 'contact', 'payment'];
      if (validPages.includes(cleanPath)) {
        setCurrentPage(cleanPath);
      } else if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    window.addEventListener('hashchange', handleUrlChange);
    window.addEventListener('popstate', handleUrlChange);
    return () => {
      window.removeEventListener('hashchange', handleUrlChange);
      window.removeEventListener('popstate', handleUrlChange);
    };
  }, []);

  // Google Analytics 4 (GA4): Track page views across client-side route transitions
  const isFirstMount = useRef(true);
  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      const pagePath = currentPage === 'home' ? '/' : `/${currentPage}`;
      (window as any).gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: pagePath,
        send_to: 'G-HZF6515HGL',
      });
    }
  }, [currentPage]);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ConfigProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
          {/* Navigation Bar */}
          <Navbar
            currentPage={currentPage}
            onNavigate={navigateTo}
            onOpenQuickEdit={() => setIsQuickEditOpen(true)}
          />

          {/* Page Content */}
          <main className="flex-1">
            {currentPage === 'home' && <HomePage onNavigate={navigateTo} />}
            {currentPage === 'ugc' && <UGCPage />}
            {currentPage === 'ai-course' && <AICoursePage onNavigate={navigateTo} />}
            {currentPage === 'social-course' && <SocialMediaCoursePage onNavigate={navigateTo} />}
            {currentPage === 'contact' && <ContactPage />}
            {currentPage === 'payment' && (
              <PaymentPage onOpenQuickEdit={() => setIsQuickEditOpen(true)} />
            )}
          </main>

          {/* Floating WhatsApp Quick Link */}
          <FloatingWhatsApp />

          {/* Floating AI Assistant Trigger Button ("🤖 Durrat AI Assistant") */}
          <FloatingAssistantButton
            isOpen={isAssistantOpen}
            onClick={() => setIsAssistantOpen(true)}
          />

          {/* Floating Scalable Multi-Language Selector */}
          <FloatingLanguageSelector />

          {/* Modern Interactive AI Customer Support & Intake Assistant */}
          <AIAssistantModal
            isOpen={isAssistantOpen}
            onClose={() => setIsAssistantOpen(false)}
            onNavigate={(page) => {
              navigateTo(page);
            }}
          />

          {/* Global Footer */}
          <Footer onNavigate={navigateTo} />

          {/* Owner Quick Edit Modal for Placeholders */}
          <QuickEditModal
            isOpen={isQuickEditOpen}
            onClose={() => setIsQuickEditOpen(false)}
          />
        </div>
      </LanguageProvider>
    </ConfigProvider>
  );
}
