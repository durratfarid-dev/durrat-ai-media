import React, { useState } from 'react';
import { useConfig } from '../context/ConfigContext';
import { 
  CreditCard, 
  AlertTriangle, 
  Copy, 
  Check, 
  Mail, 
  Building2, 
  ShieldCheck, 
  FileText,
  MessageCircle,
  ExternalLink,
  Info
} from 'lucide-react';

interface PaymentPageProps {
  onOpenQuickEdit?: () => void;
}

export const PaymentPage: React.FC<PaymentPageProps> = ({ onOpenQuickEdit }) => {
  const { config } = useConfig();
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, fieldId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldId);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleCopyAllBankDetails = () => {
    const details = `Durrat AI Media - Bank Transfer Details
Bank Name: ${config.bankDetails.bankName}
Account Name: ${config.bankDetails.accountName}
IBAN: ${config.bankDetails.iban}
Payment Reference: ${config.bankDetails.paymentReference}

After payment, send payment proof to: ${config.contactEmail}`;
    navigator.clipboard.writeText(details);
    setCopiedField('all');
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSendPaymentProof = () => {
    const subject = encodeURIComponent('Payment Proof - Course Enrollment');
    const body = encodeURIComponent(`Hi Durrat AI Media team,

I have completed the bank transfer for my course enrollment.

• Student Name: [Your Name]
• Course: [AI Prompting + AI Video / Social Media Mastery]
• Transfer Date: [Date]
• Reference Used: [Payment Reference]

Attached is my transfer receipt/screenshot.

Thank you!`);
    window.location.href = `mailto:${config.contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="space-y-20 pb-24">
      {/* 1. HERO HEADER */}
      <section className="relative pt-12 md:pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/80 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <CreditCard className="w-3.5 h-3.5" />
            <span>Official Transfer Information</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Course Payment
          </h1>

          <p className="text-base text-slate-300 leading-relaxed">
            Direct bank transfer instructions for enrolling in Durrat AI Media training programs.
          </p>
        </div>
      </section>

      {/* 2. PAYMENT DETAILS CARD */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl p-6 sm:p-10 lg:p-12 space-y-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono uppercase text-cyan-400 font-semibold tracking-wider">
                Bank Wire Transfer
              </span>
              <h2 className="text-2xl font-bold text-white mt-1">
                Official Account Information
              </h2>
            </div>
            {onOpenQuickEdit && (
              <button
                onClick={onOpenQuickEdit}
                className="self-start sm:self-auto px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 hover:text-white border border-slate-700 transition-colors"
              >
                Edit Bank Details
              </button>
            )}
          </div>

          {/* Bank fields list */}
          <div className="space-y-4">
            {/* Field 1: Bank Name */}
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-mono uppercase text-slate-400 block mb-0.5">
                  Bank Name:
                </span>
                <span className="text-base font-bold text-white tracking-wide">
                  {config.bankDetails.bankName}
                </span>
              </div>
              <button
                onClick={() => handleCopy(config.bankDetails.bankName, 'bankName')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs font-medium text-slate-300 hover:text-white border border-slate-700 transition-colors self-start sm:self-auto"
              >
                {copiedField === 'bankName' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedField === 'bankName' ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Field 2: Account Name */}
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-mono uppercase text-slate-400 block mb-0.5">
                  Account Name:
                </span>
                <span className="text-base font-bold text-white tracking-wide">
                  {config.bankDetails.accountName}
                </span>
              </div>
              <button
                onClick={() => handleCopy(config.bankDetails.accountName, 'accountName')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs font-medium text-slate-300 hover:text-white border border-slate-700 transition-colors self-start sm:self-auto"
              >
                {copiedField === 'accountName' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedField === 'accountName' ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Field 3: IBAN */}
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-mono uppercase text-slate-400 block mb-0.5">
                  IBAN:
                </span>
                <span className="text-base font-bold text-cyan-300 font-mono tracking-wider">
                  {config.bankDetails.iban}
                </span>
              </div>
              <button
                onClick={() => handleCopy(config.bankDetails.iban, 'iban')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs font-medium text-slate-300 hover:text-white border border-slate-700 transition-colors self-start sm:self-auto"
              >
                {copiedField === 'iban' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedField === 'iban' ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Field 4: Payment Reference */}
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-mono uppercase text-slate-400 block mb-0.5">
                  Payment Reference:
                </span>
                <span className="text-base font-bold text-white font-mono tracking-wide">
                  {config.bankDetails.paymentReference}
                </span>
              </div>
              <button
                onClick={() => handleCopy(config.bankDetails.paymentReference, 'ref')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs font-medium text-slate-300 hover:text-white border border-slate-700 transition-colors self-start sm:self-auto"
              >
                {copiedField === 'ref' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedField === 'ref' ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* Copy All Details Button */}
          <div className="flex justify-end">
            <button
              onClick={handleCopyAllBankDetails}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-cyan-300 border border-slate-700 transition-colors"
            >
              {copiedField === 'all' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copiedField === 'all' ? 'All Details Copied!' : 'Copy Complete Bank Details'}</span>
            </button>
          </div>

          {/* MANDATORY WARNING BOX */}
          <div className="p-5 rounded-2xl bg-amber-950/40 border border-amber-800/80 flex items-start gap-3.5">
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wide text-amber-300">
                Important Verification Notice
              </span>
              <p className="text-xs text-amber-200/90 leading-relaxed">
                Please make sure your payment details are correct before making a transfer.
              </p>
            </div>
          </div>

          {/* POST-PAYMENT INSTRUCTIONS */}
          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
            <div className="flex items-center gap-2 text-cyan-400">
              <ShieldCheck className="w-5 h-5" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                Next Step: Confirm Enrollment
              </h3>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed font-medium">
              After payment, send your payment proof to{' '}
              <a
                href={`mailto:${config.contactEmail}`}
                className="text-cyan-400 underline hover:text-cyan-300 font-mono"
              >
                {config.contactEmail}
              </a>
              .
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <button
                id="email-payment-proof-btn"
                onClick={handleSendPaymentProof}
                className="w-full sm:w-auto px-6 py-3.5 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Email Payment Proof Now</span>
              </button>

              <a
                id="payment-whatsapp-support-btn"
                href={config.whatsAppChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 bg-emerald-950/40 hover:bg-emerald-950/70 border border-emerald-800/80 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Channel Updates</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
