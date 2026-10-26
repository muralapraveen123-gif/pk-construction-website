import React from 'react';
import { MapPin, Navigation, Phone, Clock, ExternalLink, Building, CheckCircle2 } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';

export const MapLocationSection: React.FC = () => {
  return (
    <section id="location" className="py-16 sm:py-24 bg-[#071325] text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="font-heading text-amber-400 font-bold text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
            <span>Section 10 · Office Location & Hours</span>
            <span className="h-px w-8 bg-amber-400" />
            <span>Nidadavole</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Visit PK Constructions Headquarters
          </h2>
          <p className="font-sans text-slate-300 mt-2 text-sm sm:text-base leading-relaxed">
            Conveniently situated in Bharath Matha complex, Ganesh Complex, Nidadavolu. Drop by for in-person architectural consultations, structural blue-prints, or municipal permission discussions.
          </p>
        </div>

        {/* Map and Office Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Detailed Office Information */}
          <div className="lg:col-span-5 bg-slate-900/90 rounded-2xl p-6 sm:p-8 border border-amber-500/30 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="font-sans inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/40">
                <Clock className="w-3.5 h-3.5" />
                <span>{COMPANY_DETAILS.hours}</span>
              </div>

              <div>
                <h3 className="font-heading text-xl font-bold text-white mb-1 tracking-tight">
                  PK Construction
                </h3>
                <div className="font-sans text-xs text-amber-400 font-medium">
                  {COMPANY_DETAILS.complexName}
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300 font-sans">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Full Address:</div>
                    <div className="text-slate-300 mt-0.5 leading-relaxed">{COMPANY_DETAILS.address}</div>
                    <div className="text-slate-400 text-xs mt-0.5">Andhra Pradesh 534301, India</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Direct Telephone:</div>
                    <a
                      href={`tel:${COMPANY_DETAILS.phone}`}
                      className="text-amber-400 font-bold hover:underline"
                    >
                      {COMPANY_DETAILS.displayPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Working Hours:</div>
                    <div>{COMPANY_DETAILS.hoursDetail}</div>
                    <div className="text-[11px] text-emerald-400 font-medium">Sunday appointments available</div>
                  </div>
                </div>
              </div>

              {/* Landmark notes */}
              <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 text-xs text-slate-300 space-y-1 font-sans">
                <div className="font-heading font-bold text-white flex items-center gap-1.5 tracking-tight">
                  <Building className="w-3.5 h-3.5 text-amber-400" />
                  <span>Central Nidadavole Location</span>
                </div>
                <div className="leading-relaxed">Easily accessible from Nidadavole Railway Station, Main Road, and RTC Bus Complex.</div>
              </div>
            </div>

            {/* Directions CTA Button */}
            <div className="pt-4 border-t border-slate-800 space-y-2">
              <a
                href={COMPANY_DETAILS.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs py-3.5 px-4 rounded-lg shadow-md transition-all tracking-wide"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions (Google Maps)</span>
              </a>

              <div className="text-center text-[11px] text-slate-400 font-sans">
                Average travel time: ~26 mins from surrounding West/East Godavari junctions
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Google Map with Map Controls */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl relative min-h-[380px] bg-slate-950">
            {/* Google Maps iFrame */}
            <iframe
              title="PK Construction Location Map Nidadavole"
              src={COMPANY_DETAILS.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter saturate-100"
            />

            {/* Overlay badge on map */}
            <div className="absolute top-4 left-4 bg-slate-950/90 backdrop-blur-md p-3 rounded-xl border border-amber-500/40 text-xs text-white max-w-xs shadow-lg pointer-events-none">
              <div className="font-heading font-bold text-amber-400 tracking-tight">Pk construction</div>
              <div className="font-sans text-[11px] text-slate-300">Ganesh Complex, Nidadavolu 534301</div>
              <div className="font-sans text-[10px] text-emerald-400 font-medium mt-0.5">5.0 ★ (39 reviews) · Open · Closes 9 pm</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
