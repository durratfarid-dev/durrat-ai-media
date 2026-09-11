import React, { createContext, useContext, useState, useEffect } from 'react';
import { SiteConfig, BankDetails } from '../types';
import { defaultSiteConfig } from '../data/siteConfig';

interface ConfigContextType {
  config: SiteConfig;
  updatePrice: (key: keyof SiteConfig['prices'], value: string) => void;
  updateBankDetails: (details: Partial<BankDetails>) => void;
  resetConfig: () => void;
}

const STORAGE_KEY = 'durrat_ai_media_config_v1';

const ConfigContext = createContext<ConfigContextType | undefined>(undefined);

export const ConfigProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<SiteConfig>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...defaultSiteConfig,
          ...parsed,
          prices: { ...defaultSiteConfig.prices, ...(parsed.prices || {}) },
          bankDetails: { ...defaultSiteConfig.bankDetails, ...(parsed.bankDetails || {}) },
        };
      }
    } catch {
      // Fallback
    }
    return defaultSiteConfig;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
    } catch {
      // Ignore storage errors
    }
  }, [config]);

  const updatePrice = (key: keyof SiteConfig['prices'], value: string) => {
    setConfig((prev) => ({
      ...prev,
      prices: {
        ...prev.prices,
        [key]: value,
      },
    }));
  };

  const updateBankDetails = (details: Partial<BankDetails>) => {
    setConfig((prev) => ({
      ...prev,
      bankDetails: {
        ...prev.bankDetails,
        ...details,
      },
    }));
  };

  const resetConfig = () => {
    setConfig(defaultSiteConfig);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore
    }
  };

  return (
    <ConfigContext.Provider value={{ config, updatePrice, updateBankDetails, resetConfig }}>
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = (): ConfigContextType => {
  const context = useContext(ConfigContext);
  if (!context) {
    throw new Error('useConfig must be used within a ConfigProvider');
  }
  return context;
};
