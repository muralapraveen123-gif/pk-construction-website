import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Star, Menu, X, MessageSquare } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';
import { PKLogo } from './PKLogo';

interface HeaderProps {
  onOpenLogoUpload?: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Permissions & BPS', href: '#permissions' },
    { label: 'Structural RCC', href: '#structural' },
    { label: 'Packages (₹2,200/sqft)', href: '#packages' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews (5.0 ★)', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Utility Bar */}
      <div className="bg-[#07101c] text-slate-300 text-xs border-b border-amber-500/20 py-1.5 px-4 sm:px-8 font-sans">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href={`tel:${COMPANY_DETAILS.phone}`}
              className="flex items-center gap-1.5 text-amber-400 font-semibold hover:text-amber-300 transition-colors tracking-wide"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call: {COMPANY_DETAILS.displayPhone}</span>
            </a>
            <span className="hidden md:inline text-slate-600">|</span>
            <div className="hidden sm:flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Ganesh Complex, Nidadavolu (534301)</span>
            </div>
            <span className="hidden lg:inline text-slate-600">|</span>
            <div className="hidden lg:flex items-center gap-1 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>{COMPANY_DETAILS.hours}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Google Rating Badge */}
            <a
              href="#reviews"
              className="flex items-center gap-1.5 bg-amber-500/10 hover:bg-amber-500/20 px-2.5 py-0.5 rounded text-amber-300 transition-colors border border-amber-500/30 text-[11px] font-medium"
            >
              <div className="flex text-amber-400">
                <Star className="w-3 h-3 fill-amber-400" />
              </div>
              <span className="font-bold text-amber-300">5.0</span>
              <span className="text-slate-400">({COMPANY_DETAILS.reviewCount} Reviews)</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B192C]/95 backdrop-blur-md shadow-xl border-b border-amber-500/20 py-3'
            : 'bg-[#0B192C] py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="#home" className="group">
            <PKLogo size="md" variant="light" />
          </a>

          {/* Desktop Navigation in Manrope */}
          <nav className="hidden xl:flex items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-heading text-[12px] uppercase tracking-wider font-semibold text-slate-200 hover:text-amber-400 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-400 hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons in Manrope */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={COMPANY_DETAILS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-3.5 py-2.5 rounded-lg shadow-md hover:shadow-emerald-600/30 transition-all tracking-wide"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
            <a
              href="#contact"
              className="font-heading flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-bold px-4 py-2.5 rounded-lg shadow-md hover:shadow-amber-500/30 transition-all tracking-wide"
            >
              <span>Get Free Estimate</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center gap-2">
            <a
              href={`tel:${COMPANY_DETAILS.phone}`}
              className="p-2 text-amber-400 bg-amber-500/10 rounded-md sm:hidden"
              aria-label="Call PK Constructions"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-200 hover:text-white rounded-md bg-white/5 border border-white/10"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#07101C] border-b border-amber-500/30 px-4 pt-3 pb-6 space-y-2 animate-fadeIn shadow-2xl">
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-heading px-3 py-2.5 rounded-lg text-sm font-semibold tracking-wide text-slate-200 hover:bg-white/10 hover:text-amber-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 grid grid-cols-2 gap-2">
            <a
              href={`tel:${COMPANY_DETAILS.phone}`}
              className="font-heading flex items-center justify-center gap-2 bg-slate-800 text-amber-400 font-bold text-xs py-2.5 rounded-lg border border-slate-700 tracking-wide"
            >
              <Phone className="w-4 h-4" />
              <span>080086 54131</span>
            </a>
            <a
              href={COMPANY_DETAILS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading flex items-center justify-center gap-2 bg-emerald-600 text-white font-bold text-xs py-2.5 rounded-lg tracking-wide"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
