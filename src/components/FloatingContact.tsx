import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, ArrowUp } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';

export const FloatingContact: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Buttons on Desktop (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:flex flex-col items-end gap-3 pointer-events-auto">
        {/* Scroll To Top */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-10 h-10 rounded-full bg-slate-900/90 text-slate-300 hover:text-white border border-slate-700 hover:border-amber-400 flex items-center justify-center shadow-lg transition-all"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* Direct Call Button */}
        <a
          href={`tel:${COMPANY_DETAILS.phone}`}
          className="group flex items-center gap-2.5 bg-[#0B192C] hover:bg-[#122A4E] text-white px-4 py-3 rounded-full shadow-2xl border border-amber-500/40 transition-all transform hover:-translate-y-0.5"
          title="Call PK Constructions"
        >
          <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center">
            <Phone className="w-4 h-4" />
          </div>
          <div className="text-left pr-1">
            <div className="font-heading text-[10px] text-amber-300 font-bold uppercase tracking-wider">Direct Call</div>
            <div className="font-heading text-xs font-bold text-white tracking-wide">{COMPANY_DETAILS.displayPhone}</div>
          </div>
        </a>

        {/* WhatsApp Button */}
        <a
          href={COMPANY_DETAILS.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-3 rounded-full shadow-2xl shadow-emerald-900/40 transition-all transform hover:-translate-y-0.5"
          title="Chat on WhatsApp"
        >
          <div className="w-8 h-8 rounded-full bg-white text-emerald-600 flex items-center justify-center">
            <MessageSquare className="w-4 h-4 fill-emerald-600" />
          </div>
          <div className="text-left pr-1">
            <div className="font-heading text-[10px] text-emerald-100 font-bold uppercase tracking-wider">WhatsApp</div>
            <div className="font-heading text-xs font-bold text-white tracking-wide">Chat with Engineer</div>
          </div>
        </a>
      </div>

      {/* Sticky Mobile Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#07101C]/95 backdrop-blur-md border-t border-amber-500/30 p-2.5 flex items-center gap-2 shadow-2xl">
        <a
          href={`tel:${COMPANY_DETAILS.phone}`}
          className="font-heading flex-1 flex items-center justify-center gap-2 bg-[#0B192C] text-amber-400 font-bold text-xs py-3 px-3 rounded-lg border border-amber-500/30 shadow-md tracking-wide"
        >
          <Phone className="w-4 h-4" />
          <span>Call: 080086 54131</span>
        </a>

        <a
          href={COMPANY_DETAILS.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-heading flex-1 flex items-center justify-center gap-2 bg-emerald-600 text-white font-bold text-xs py-3 px-3 rounded-lg shadow-md tracking-wide"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp Us</span>
        </a>
      </div>
    </>
  );
};
