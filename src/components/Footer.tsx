import React from 'react';
import { Phone, MapPin, Clock, MessageSquare, Instagram, Youtube, ExternalLink, ShieldCheck, Heart } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';
import { PKLogo } from './PKLogo';

interface FooterProps {
  onOpenLogoUpload?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-[#050D1A] text-slate-400 text-xs border-t border-amber-500/20 pt-16 pb-24 md:pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Mission Statement */}
          <div className="lg:col-span-4 space-y-4">
            <PKLogo size="lg" variant="light" />
            
            <p className="font-sans text-slate-300 text-xs sm:text-sm leading-relaxed">
              PK Constructions is Nidadavole’s premier real estate builder and structural engineering firm. Delivering turnkey residential villas, commercial structures, municipal approvals, and photorealistic 3D elevations.
            </p>

            <div className="font-telugu text-amber-300 font-medium text-xs sm:text-sm leading-relaxed not-italic">
              "మీ కలల ఇంటిని నిర్మించే ముందు… దాన్ని 3Dలో చూసేయండి! 🏡"
            </div>

            {/* Social Links from Google Profile */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY_DETAILS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-gradient-to-tr hover:from-amber-600 hover:to-pink-600 text-slate-300 hover:text-white flex items-center justify-center transition-all border border-slate-700"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={COMPANY_DETAILS.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-red-600 text-slate-300 hover:text-white flex items-center justify-center transition-all border border-slate-700"
                aria-label="YouTube Channel"
              >
                <Youtube className="w-4 h-4" />
              </a>

              <a
                href={COMPANY_DETAILS.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-amber-600 text-slate-300 hover:text-white flex items-center justify-center transition-all border border-slate-700"
                aria-label="Google Maps Location"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading text-white font-bold uppercase tracking-wider text-xs">
              Quick Links
            </h4>
            <ul className="space-y-2 font-sans">
              <li><a href="#home" className="hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition-colors">About PK Constructions</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Our Services</a></li>
              <li><a href="#permissions" className="hover:text-amber-400 transition-colors">Building Permissions</a></li>
              <li><a href="#permissions" className="hover:text-amber-400 transition-colors">AP BPS Scheme</a></li>
              <li><a href="#structural" className="hover:text-amber-400 transition-colors">Structural RCC Design</a></li>
              <li><a href="#packages" className="hover:text-amber-400 transition-colors">Packages (from ₹2,000/sqft)</a></li>
              <li><a href="#gallery" className="hover:text-amber-400 transition-colors">Project Gallery</a></li>
              <li><a href="#reviews" className="hover:text-amber-400 transition-colors">Google Reviews (5.0 ★)</a></li>
            </ul>
          </div>

          {/* Services & Packages List */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-white font-bold uppercase tracking-wider text-xs">
              Core Offerings
            </h4>
            <ul className="space-y-2 font-sans">
              <li>
                <a href="#packages" className="hover:text-amber-400 transition-colors flex items-center justify-between">
                  <span>Turnkey House Construction</span>
                  <span className="text-amber-400 font-semibold font-sans">From ₹2,000/sqft</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors flex items-center justify-between">
                  <span>AutoCAD 2D Drafting</span>
                  <span className="text-amber-400 font-semibold font-sans">₹2.00/sq.ft</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  <span>Luxury Interior Design (3 Packages)</span>
                </a>
              </li>
              <li>
                <a href="#permissions" className="hover:text-amber-400 transition-colors">
                  <span>Municipal & DTCP Approvals</span>
                </a>
              </li>
              <li>
                <a href="#structural" className="hover:text-amber-400 transition-colors">
                  <span>Structural Stability & Foundation</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  <span>3D Exterior Elevation & Walkthrough</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Official Contact Info */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-white font-bold uppercase tracking-wider text-xs">
              Contact & Hours
            </h4>
            
            <div className="space-y-2.5 text-slate-300 font-sans leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Bharath Matha complex, Ganesh Complex, Nidadavolu, Andhra Pradesh 534301</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${COMPANY_DETAILS.phone}`} className="text-amber-300 font-bold hover:underline">
                  {COMPANY_DETAILS.displayPhone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={COMPANY_DETAILS.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-300 hover:underline">
                  WhatsApp: +91 80086 54131
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Daily: 9:00 AM – 9:00 PM</span>
              </div>
            </div>

            <div className="pt-2 font-heading">
              <a
                href={COMPANY_DETAILS.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-bold tracking-wide"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 font-sans">
          <div>
            © {new Date().getFullYear()} PK Constructions. All rights reserved. Real estate builders & construction in Nidadavole, Andhra Pradesh.
          </div>

          <div className="flex items-center gap-3">
            <span>IS 456 & IS 1893 Compliant</span>
            <span>·</span>
            <span>DTCP & BPS Certified</span>
            <span>·</span>
            <span className="font-heading text-amber-400 font-bold">5.0 ★ Rated</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
