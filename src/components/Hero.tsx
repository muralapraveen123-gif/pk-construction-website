import React from 'react';
import { Phone, MessageSquare, ArrowRight, ShieldCheck, CheckCircle2, Star, Building2, MapPin } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-[#071326] text-white overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-amber-500/20">
      {/* Background Architectural Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#d4af37 1px, transparent 1px), linear-gradient(90deg, #d4af37 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Subtle radial ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-500/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Tagline & Telugu Highlight Banner */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-amber-500/30 text-xs sm:text-sm text-amber-300 backdrop-blur-md font-sans">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold">Nidadavole Premier Builders</span>
            <span className="text-slate-500">·</span>
            <span className="text-slate-300">Ganesh Complex (534301)</span>
          </div>

          <div className="inline-flex items-center gap-2 text-xs text-amber-200/95 bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20">
            <span>🏡</span>
            <span className="font-telugu font-medium text-xs leading-normal">{COMPANY_DETAILS.teluguPromo1}</span>
          </div>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading and CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white leading-[1.18] tracking-tight">
              Design. Structure. <br />
              <span className="gold-gradient-text">Permission. Construction.</span> <br />
              All in One Place.
            </h1>

            <p className="font-sans text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              PK Constructions is Nidadavole's top-rated real estate builder and construction engineering firm.
              From municipal DTCP and BPS regularizations to seismic-resistant RCC designs and turnkey luxury homes.
            </p>

            {/* Key Value Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="font-heading text-amber-400 font-extrabold text-lg sm:text-xl tracking-tight">
                  ₹2,000 <span className="text-xs font-sans text-slate-400 font-normal">per sq ft</span>
                </div>
                <div className="font-sans text-xs text-slate-300 mt-0.5 font-medium">Standard Construction</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="font-heading text-amber-400 font-extrabold text-lg sm:text-xl tracking-tight">
                  ₹2.00 <span className="text-xs font-sans text-slate-400 font-normal">/ sq.ft</span>
                </div>
                <div className="font-sans text-xs text-slate-300 mt-0.5 font-medium">AutoCAD 2D Drafting</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 col-span-2 sm:col-span-1">
                <div className="flex items-center gap-1.5 font-heading text-amber-400 font-extrabold text-lg sm:text-xl tracking-tight">
                  <span>5.0</span>
                  <div className="flex text-amber-400">
                    <Star className="w-4 h-4 fill-amber-400" />
                  </div>
                </div>
                <div className="font-sans text-xs text-slate-300 mt-0.5 font-medium">39 Google Reviews</div>
              </div>
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`tel:${COMPANY_DETAILS.phone}`}
                className="font-heading flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 px-6 py-3.5 rounded-lg font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-amber-500/20 transition-all transform hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now: 080086 54131</span>
              </a>

              <a
                href={COMPANY_DETAILS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-3.5 rounded-lg font-bold text-xs sm:text-sm shadow-lg shadow-emerald-900/30 transition-all transform hover:-translate-y-0.5 tracking-wide"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Quote</span>
              </a>

              <a
                href="#packages"
                className="font-heading flex items-center justify-center gap-2 text-slate-200 hover:text-white px-4 py-3.5 rounded-lg border border-slate-700 hover:border-amber-400/50 text-xs sm:text-sm font-semibold transition-all tracking-wide"
              >
                <span>View Packages</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </a>
            </div>

            {/* Trust checklist */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-300 pt-3 border-t border-slate-800 font-sans">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Nidadavole Municipality & BPS Experts</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Certified Structural RCC Design</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Photorealistic 3D Elevation</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Showcase Card with Architecture Visual */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-amber-500/30 bg-slate-900 group">
              <div className="relative h-72 sm:h-96 w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                  alt="PK Constructions modern architectural villa"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071326] via-[#071326]/40 to-transparent" />
                
                {/* Floating pill-free trust card */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <div className="bg-[#0B192C]/90 backdrop-blur-md px-3 py-1.5 rounded-md border border-amber-500/40 text-xs text-amber-300 font-heading font-semibold flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>Real Estate Builders · Nidadavole</span>
                  </div>
                  <div className="bg-emerald-950/80 backdrop-blur-md px-2.5 py-1 rounded text-[11px] text-emerald-300 font-sans font-medium border border-emerald-500/40">
                    Open · Closes 9 PM
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 space-y-1.5">
                  <div className="font-heading text-xs uppercase tracking-wider text-amber-400 font-bold">
                    Turnkey House Construction Package
                  </div>
                  <div className="font-heading text-lg sm:text-xl font-bold text-white tracking-tight">
                    Premium Villa Construction @ ₹2,200 per sq ft
                  </div>
                  <p className="font-sans text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    Tata Tiscon Fe550D Steel · 53 Grade Ultratech Cement · Teakwood Main Doors · Vitrified Tiles
                  </p>
                </div>
              </div>

              {/* Sub-strip with quick appointment reminder */}
              <div className="p-4 bg-slate-900/95 border-t border-slate-800 flex items-center justify-between gap-3 text-xs font-sans">
                <div className="flex items-center gap-2 text-slate-300">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="truncate">Bharath Matha complex, Ganesh Complex, Nidadavolu</span>
                </div>
                <a
                  href="#contact"
                  className="font-heading text-amber-400 font-bold hover:underline shrink-0 tracking-wide"
                >
                  Book Visit →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
