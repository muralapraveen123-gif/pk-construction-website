import React from 'react';
import { 
  HardHat, 
  FileCheck2, 
  Layers, 
  Box, 
  Compass, 
  Sparkles, 
  Check, 
  ArrowRight,
  PhoneCall
} from 'lucide-react';
import { SERVICES_DATA, COMPANY_DETAILS } from '../data/companyData';

export const ServicesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'HardHat':
        return <HardHat className="w-6 h-6 text-amber-500" />;
      case 'FileCheck2':
        return <FileCheck2 className="w-6 h-6 text-amber-500" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-amber-500" />;
      case 'Box':
        return <Box className="w-6 h-6 text-amber-500" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-amber-500" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-amber-500" />;
      default:
        return <HardHat className="w-6 h-6 text-amber-500" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background architectural glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div className="max-w-2xl">
            <div className="font-heading text-amber-400 font-bold text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
              <span>Comprehensive Construction Services</span>
              <span className="h-px w-8 bg-amber-400" />
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              End-to-End Architectural, Engineering & Building Services
            </h2>
          </div>
          <div className="font-sans text-xs sm:text-sm text-slate-300 max-w-md leading-relaxed">
            Actual rates & packages as featured on our Google Business Profile. Everything engineered with certified structural safety.
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-amber-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/5 group"
            >
              <div>
                {/* Top Badge and Price Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-700 group-hover:border-amber-500/50 transition-colors">
                    {getIcon(service.icon)}
                  </div>
                  {service.priceTag && (
                    <span className="font-heading text-xs font-bold px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/30 tracking-wide">
                      {service.priceTag}
                    </span>
                  )}
                </div>

                {/* Title & Telugu Label */}
                <h3 className="font-heading text-xl font-bold text-white group-hover:text-amber-400 transition-colors mb-1 tracking-tight">
                  {service.title}
                </h3>
                {service.teluguTitle && (
                  <div className="font-telugu text-xs sm:text-[13px] text-amber-300 font-medium mb-3 leading-normal not-italic">
                    {service.teluguTitle}
                  </div>
                )}

                {/* Description */}
                <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Features Checklist */}
                <div className="space-y-2 mb-6 pt-3 border-t border-slate-700/60 font-sans">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="pt-4 border-t border-slate-700/50 flex items-center justify-between">
                <a
                  href={`https://wa.me/918008654131?text=Hi%20PK%20Constructions,%20I%20am%20inquiring%20about%20${encodeURIComponent(service.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading text-xs font-bold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1.5 transition-colors tracking-wide"
                >
                  <span>Enquire on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={`tel:${COMPANY_DETAILS.phone}`}
                  className="p-2 rounded-lg bg-slate-700/60 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                  title="Call Chief Engineer"
                  aria-label="Call Chief Engineer"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Telugu 3D Elevation Post Spotlight Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0C1E38] via-[#102A4E] to-[#0C1E38] border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="font-heading inline-flex items-center gap-2 text-xs uppercase tracking-wider text-amber-400 font-bold bg-amber-500/10 px-3 py-1 rounded-md">
              <span>Google Profile Update</span>
              <span>·</span>
              <span>PK Construction Nidadavole</span>
            </div>
            <h4 className="font-telugu text-xl sm:text-2xl font-bold text-white leading-normal">
              {COMPANY_DETAILS.teluguPromo1}
            </h4>
            <p className="font-sans text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
              <span className="font-telugu font-medium text-amber-200/90">{COMPANY_DETAILS.teluguPromo2}</span> Visualize every millimeter of your bedroom, living hall, modular kitchen, and exterior lighting with our custom 3D elevation service.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href="#contact"
              className="font-heading bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 px-5 py-3 rounded-lg font-bold text-xs shadow-md transition-all tracking-wide"
            >
              Book 3D Design Session
            </a>
            <a
              href={`tel:${COMPANY_DETAILS.phone}`}
              className="font-heading text-xs font-semibold text-slate-300 hover:text-white px-4 py-3 rounded-lg border border-slate-700 tracking-wide"
            >
              Call 080086 54131
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
