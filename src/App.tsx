import React, { useState, useEffect, useRef } from 'react';
import {
  Mail,
  Phone,
  Copy,
  Check,
  ExternalLink,
  ArrowUpRight,
  ChevronDown,
  MessageSquare,
  MapPin,
} from 'lucide-react';

export default function App() {
  const companyName = 'Key Visual Hub - POSM & Shop Fixtures';
  const email = 'tj@visualhub.ae';
  const phone = '+971 4 585 7323';
  const whatsappNumber = '+971 55 765 7339';
  const whatsappClean = '971557657339';

  useEffect(() => {
    document.title = `${companyName} - Page is under construction`;
  }, [companyName]);

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedWhatsApp, setCopiedWhatsApp] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      // fallback
    }
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(phone);
    } catch {
      // fallback
    }
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleCopyWhatsApp = async () => {
    try {
      await navigator.clipboard.writeText(whatsappNumber);
    } catch {
      // fallback
    }
    setCopiedWhatsApp(true);
    setTimeout(() => setCopiedWhatsApp(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#090b0e] text-slate-100 font-sans selection:bg-amber-400/20 selection:text-amber-200 relative overflow-hidden">
      {/* Background Architectural Texture with Soft Ambient Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/src/assets/images/hero_under_construction_1793281150572.jpg"
          alt="Studio Background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-25 filter blur-[2px] brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#090b0e]/85 via-[#090b0e]/95 to-[#090b0e]" />
      </div>

      {/* Top Header: Company Name & Dev / Contact Toolbar */}
      <header className="relative z-20 w-full border-b border-slate-800/60 bg-[#090b0e]/70 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 min-w-0">
            <div className="bg-white rounded-lg p-1.5 shadow-sm shrink-0 flex items-center justify-center">
              <img
                src="/assets/aistudio/Comp_Logo_1ae954d8.webp"
                alt="Key Visual Hub Logo"
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#FDE68A] via-[#F59E0B] to-[#D97706] drop-shadow-sm truncate">
              {companyName}
            </span>
          </div>

          {/* Dev / Contact Actions Part */}
          <div className="flex items-center gap-3 text-xs shrink-0" ref={dropdownRef}>
            {/* Contact Dropdown in Dev Header */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 px-3.5 py-2 rounded-lg border border-slate-700/80 bg-slate-900/90 hover:bg-slate-800 text-slate-100 hover:border-amber-400/50 text-xs font-semibold transition-all shadow-sm cursor-pointer"
                aria-expanded={isDropdownOpen}
              >
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Contact Details</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                    isDropdownOpen ? 'rotate-180 text-amber-400' : ''
                  }`}
                />
              </button>

              {/* Dropdown Menu Box */}
              {isDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-80 rounded-xl bg-[#12151b] border border-slate-800 shadow-2xl p-4 z-50 text-left animate-in fade-in zoom-in-95 duration-150">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                        Direct Inquiries
                      </p>
                      <p className="text-xs text-slate-400">Available for orders & estimates</p>
                    </div>
                    <span className="text-[10px] text-emerald-400 bg-emerald-950/50 border border-emerald-800/40 px-2 py-0.5 rounded font-medium">
                      Active
                    </span>
                  </div>

                  <div className="space-y-3">
                    {/* Phone Option */}
                    <div className="p-2.5 rounded-lg bg-[#090b0e] border border-slate-800 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-7 h-7 rounded bg-slate-800 flex items-center justify-center shrink-0 text-slate-300">
                          <Phone className="w-3.5 h-3.5" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[10px] text-slate-400 uppercase">Direct Call</p>
                          <a
                            href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
                            className="text-xs font-semibold text-white hover:text-amber-400 truncate block font-mono"
                          >
                            {phone}
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          onClick={handleCopyPhone}
                          className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-850 cursor-pointer"
                          title="Copy phone"
                        >
                          {copiedPhone ? (
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                        <a
                          href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
                          className="px-2 py-1 text-[11px] font-medium text-slate-900 bg-amber-400 hover:bg-amber-300 rounded"
                        >
                          Call
                        </a>
                      </div>
                    </div>

                    {/* Email Option */}
                    <div className="p-2.5 rounded-lg bg-[#090b0e] border border-slate-800 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-7 h-7 rounded bg-amber-400/10 flex items-center justify-center shrink-0 text-amber-400">
                          <Mail className="w-3.5 h-3.5" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[10px] text-slate-400 uppercase">Direct Email</p>
                          <a
                            href={`mailto:${email}?subject=Inquiry for ${encodeURIComponent(companyName)}`}
                            className="text-xs font-semibold text-white hover:text-amber-400 truncate block"
                          >
                            {email}
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          onClick={handleCopyEmail}
                          className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-850 cursor-pointer"
                          title="Copy email"
                        >
                          {copiedEmail ? (
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                        <a
                          href={`mailto:${email}?subject=Inquiry for ${encodeURIComponent(companyName)}`}
                          className="px-2 py-1 text-[11px] font-medium text-slate-900 bg-amber-400 hover:bg-amber-300 rounded"
                        >
                          Write
                        </a>
                      </div>
                    </div>

                    {/* WhatsApp Quick Chat */}
                    <div className="p-2.5 rounded-lg bg-[#090b0e] border border-slate-800 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-7 h-7 rounded bg-emerald-500/10 flex items-center justify-center shrink-0 text-emerald-400">
                          <MessageSquare className="w-3.5 h-3.5" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[10px] text-slate-400 uppercase">WhatsApp</p>
                          <a
                            href={`https://wa.me/${whatsappClean}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 truncate block font-mono"
                          >
                            {whatsappNumber}
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          onClick={handleCopyWhatsApp}
                          className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-850 cursor-pointer"
                          title="Copy WhatsApp number"
                        >
                          {copiedWhatsApp ? (
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                        <a
                          href={`https://wa.me/${whatsappClean}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2.5 py-1 text-[11px] font-medium text-emerald-300 bg-emerald-950/60 border border-emerald-800/60 hover:bg-emerald-900/60 rounded flex items-center gap-1"
                        >
                          <span>Chat</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="px-2.5 py-2 text-[11px] text-slate-400 flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                      <span>Dubai, United Arab Emirates</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Focus Container */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-3xl text-center">
          {/* Company Brand Wordmark with Logo beside it and increased size */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8">
            <div className="bg-white rounded-2xl p-2.5 sm:p-3 shadow-xl border border-white/20 shrink-0 flex items-center justify-center">
              <img
                src="/assets/aistudio/Comp_Logo_1ae954d8.webp"
                alt="Key Visual Hub Logo"
                className="h-14 sm:h-18 md:h-22 w-auto object-contain"
              />
            </div>
            <div className="text-center sm:text-left">
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#FDE68A] via-[#F59E0B] to-[#D97706] drop-shadow-md leading-[1.15] block">
                {companyName}
              </span>
            </div>
          </div>

          {/* Primary Statement */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6 h-[66px] flex items-center justify-center">
            Page is under construction
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-lg mx-auto mb-10 leading-relaxed">
            Our official website is currently being updated. For any immediate inquiries or orders, please reach us directly via phone or email.
          </p>

          {/* Direct Contact Cards (Email, Phone & WhatsApp) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            {/* Direct Email Card */}
            <div className="p-5 rounded-2xl bg-[#12151b]/90 border border-slate-800 hover:border-slate-700 transition-all shadow-xl backdrop-blur-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                    Direct Email
                  </span>
                </div>

                <p className="text-xs text-slate-400">Inquiries & Correspondence</p>
                <p className="text-sm font-semibold text-white tracking-tight break-all mt-0.5">
                  {email}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center gap-2">
                <a
                  href={`mailto:${email}?subject=Inquiry for ${encodeURIComponent(companyName)}`}
                  className="flex-1 py-2 px-3 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors text-center flex items-center justify-center gap-1.5"
                >
                  <span>Send Email</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="py-2 px-3 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 hover:text-white rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Direct Phone Card */}
            <div className="p-5 rounded-2xl bg-[#12151b]/90 border border-slate-800 hover:border-slate-700 transition-all shadow-xl backdrop-blur-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-200">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                    Direct Phone
                  </span>
                </div>

                <p className="text-xs text-slate-400">Landline Support</p>
                <p className="text-sm font-semibold text-white tracking-tight mt-0.5 font-mono">
                  {phone}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center gap-2">
                <a
                  href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
                  className="flex-1 py-2 px-3 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors text-center flex items-center justify-center gap-1.5"
                >
                  <span>Call Now</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={handleCopyPhone}
                  className="py-2 px-3 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 hover:text-white rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  title="Copy phone number to clipboard"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* WhatsApp Direct Card */}
            <div className="p-5 rounded-2xl bg-[#12151b]/90 border border-slate-800 hover:border-emerald-500/40 transition-all shadow-xl backdrop-blur-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-medium text-emerald-400 uppercase tracking-wider">
                    WhatsApp
                  </span>
                </div>

                <p className="text-xs text-slate-400">Instant Chat & Orders</p>
                <p className="text-sm font-semibold text-white tracking-tight mt-0.5 font-mono">
                  {whatsappNumber}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center gap-2">
                <a
                  href={`https://wa.me/${whatsappClean}?text=${encodeURIComponent(
                    `Hello Key Visual Hub, I have an inquiry.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors text-center flex items-center justify-center gap-1.5"
                >
                  <span>Chat WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={handleCopyWhatsApp}
                  className="py-2 px-3 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 hover:text-white rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  title="Copy WhatsApp number"
                >
                  {copiedWhatsApp ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Quiet Minimal Footer */}
      <footer className="relative z-10 w-full border-t border-slate-800/60 py-6 text-center text-xs text-slate-400">
        <p>
          &copy; {new Date().getFullYear()}{' '}
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FDE68A] via-[#F59E0B] to-[#D97706]">
            {companyName}
          </span>
          . All rights reserved.
        </p>
      </footer>
    </div>
  );
}
