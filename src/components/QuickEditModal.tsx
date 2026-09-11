import React, { useState } from 'react';
import { useConfig } from '../context/ConfigContext';
import { X, Check, RotateCcw, Copy, Sparkles, DollarSign, Building2 } from 'lucide-react';

interface QuickEditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuickEditModal: React.FC<QuickEditModalProps> = ({ isOpen, onClose }) => {
  const { config, updatePrice, updateBankDetails, resetConfig } = useConfig();
  const [copiedCode, setCopiedCode] = useState(false);

  if (!isOpen) return null;

  const handleCopyCode = () => {
    const code = `export const defaultSiteConfig = ${JSON.stringify(config, null, 2)};`;
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div 
        id="quick-edit-modal-card"
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl p-6 text-slate-100"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              Customizable Prices & Bank Details
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Live-edit placeholder prices and banking information across the entire website.
            </p>
          </div>
          <button
            id="close-quick-edit-btn"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="py-5 space-y-6">
          {/* Section: Prices */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
              <DollarSign className="w-4 h-4" />
              Course & UGC Service Prices (Placeholders)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Starter UGC Ad (Current: {config.prices.ugcStarter})
                </label>
                <input
                  type="text"
                  value={config.prices.ugcStarter}
                  onChange={(e) => updatePrice('ugcStarter', e.target.value)}
                  placeholder="e.g. Add Price or $99"
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Professional UGC Ad (Current: {config.prices.ugcProfessional})
                </label>
                <input
                  type="text"
                  value={config.prices.ugcProfessional}
                  onChange={(e) => updatePrice('ugcProfessional', e.target.value)}
                  placeholder="e.g. Add Price or $249"
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Business UGC Ad (Current: {config.prices.ugcBusiness})
                </label>
                <input
                  type="text"
                  value={config.prices.ugcBusiness}
                  onChange={(e) => updatePrice('ugcBusiness', e.target.value)}
                  placeholder="e.g. Custom Pricing"
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  AI Prompting + Video Course (Current: {config.prices.aiCourse})
                </label>
                <input
                  type="text"
                  value={config.prices.aiCourse}
                  onChange={(e) => updatePrice('aiCourse', e.target.value)}
                  placeholder="e.g. Add Price or $149"
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Social Media Course (Current: {config.prices.socialMediaCourse})
                </label>
                <input
                  type="text"
                  value={config.prices.socialMediaCourse}
                  onChange={(e) => updatePrice('socialMediaCourse', e.target.value)}
                  placeholder="e.g. Add Price or $119"
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>
          </div>

          {/* Section: Bank Details */}
          <div className="space-y-3 pt-4 border-t border-slate-800">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
              <Building2 className="w-4 h-4" />
              Payment & Bank Details (Placeholders)
            </h3>
            <p className="text-xs text-slate-400">
              Per your instructions, only editable placeholders are displayed. Fill in your official bank credentials when ready.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Bank Name
                </label>
                <input
                  type="text"
                  value={config.bankDetails.bankName}
                  onChange={(e) => updateBankDetails({ bankName: e.target.value })}
                  placeholder="ADD BANK NAME"
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Account Name
                </label>
                <input
                  type="text"
                  value={config.bankDetails.accountName}
                  onChange={(e) => updateBankDetails({ accountName: e.target.value })}
                  placeholder="ADD ACCOUNT NAME"
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  IBAN
                </label>
                <input
                  type="text"
                  value={config.bankDetails.iban}
                  onChange={(e) => updateBankDetails({ iban: e.target.value })}
                  placeholder="ADD IBAN"
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-cyan-400 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Payment Reference
                </label>
                <input
                  type="text"
                  value={config.bankDetails.paymentReference}
                  onChange={(e) => updateBankDetails({ paymentReference: e.target.value })}
                  placeholder="ADD REFERENCE"
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-cyan-400 font-mono"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800">
          <div className="flex items-center gap-2">
            <button
              onClick={resetConfig}
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs text-slate-400 hover:text-white rounded-lg border border-slate-800 hover:bg-slate-800 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset to Defaults
            </button>
            <button
              onClick={handleCopyCode}
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs text-cyan-400 hover:text-cyan-300 rounded-lg border border-cyan-900/50 bg-cyan-950/30 hover:bg-cyan-950/60 transition-colors"
            >
              {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedCode ? 'Copied JSON Config!' : 'Copy Config JSON'}</span>
            </button>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
          >
            Apply & Close
          </button>
        </div>
      </div>
    </div>
  );
};
