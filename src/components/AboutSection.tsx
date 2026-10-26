import React from 'react';
import { ShieldCheck, Award, Compass, Building, Check, Phone, ArrowUpRight } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      num: "01",
      title: "Design",
      telugu: "డిజైన్ & 3D ప్లానింగ్",
      desc: "Vastu-compliant 2D AutoCAD floor plans and breathtaking 3D elevations. See and walk through your home before casting the foundation.",
      stat: "AutoCAD from ₹2/sq.ft"
    },
    {
      num: "02",
      title: "Structure",
      telugu: "స్ట్రక్చరల్ RCC భద్రత",
      desc: "Licensed structural engineering following IS 456 & IS 1893 seismic standards. Soil-specific foundation depth and beam/column rebar detailing.",
      stat: "IS 456 Code Compliant"
    },
    {
      num: "03",
      title: "Permission",
      telugu: "మున్సిపల్ & BPS అనుమతులు",
      desc: "Complete liaison for Nidadavole Municipality approvals, DTCP sanctions, and AP Building Penalization Scheme (BPS) regularizations.",
      stat: "100% Legal Clearance"
    },
    {
      num: "04",
      title: "Construction",
      telugu: "పక్కా నాణ్యమైన నిర్మాణం",
      desc: "Full turnkey residential & commercial building with certified 53-grade cement, Fe550 steel, and daily quality supervisor checklists.",
      stat: "From ₹2,000 per sq ft"
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-white text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header in Manrope */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="font-heading text-amber-700 font-bold text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
            <span>About PK Constructions</span>
            <span className="h-px w-8 bg-amber-600" />
            <span>Nidadavole, Andhra Pradesh</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Nidadavole’s Trusted Partner for Architectural Design, Approvals & Turnkey Construction
          </h2>
        </div>

        {/* Story & Credentials Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7 space-y-5 font-sans text-slate-600 leading-relaxed text-sm sm:text-base">
            <p className="text-slate-900 font-medium text-base sm:text-lg leading-relaxed">
              {COMPANY_DETAILS.aboutText}
            </p>
            <p className="leading-relaxed">
              Based in <strong>Bharath Matha complex, Ganesh Complex, Nidadavolu</strong>, PK Constructions was established to solve the biggest challenges faced by property owners: coordinating disjointed architects, structural engineers, government sanction officers, and local contractors.
            </p>
            <p className="leading-relaxed">
              By uniting <strong>Design, Structural Engineering, Municipal Permissions, and On-Site Construction</strong> under one roof, we eliminate miscommunication, avoid cost overruns, and guarantee that what is designed in 3D is precisely what gets built on your site.
            </p>

            {/* Credential highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-slate-900 text-sm">Transparent Costing</h4>
                  <p className="font-sans text-xs text-slate-500 mt-0.5 leading-relaxed">Fixed per sq.ft agreements with complete material brand disclosure.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <Award className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-slate-900 text-sm">5.0 Star Rated Quality</h4>
                  <p className="font-sans text-xs text-slate-500 mt-0.5 leading-relaxed">39 verified 5-star customer reviews across Nidadavole & surrounding areas.</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={`tel:${COMPANY_DETAILS.phone}`}
                className="font-heading inline-flex items-center gap-2 bg-[#0B192C] text-amber-400 hover:text-white px-5 py-3 rounded-lg font-bold text-xs sm:text-sm tracking-wide transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Speak with Our Chief Engineer</span>
              </a>

              <a
                href="#packages"
                className="font-heading inline-flex items-center gap-1.5 text-slate-800 hover:text-amber-700 font-semibold text-xs sm:text-sm tracking-wide transition-colors"
              >
                <span>View Construction Packages</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Visual Showcase with Office & Project Imagery */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80"
                alt="Architectural planning and structural engineering at PK Constructions"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="font-heading text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                  Our Engineering Headquarters
                </div>
                <div className="font-heading text-base sm:text-lg font-bold">
                  Ganesh Complex, Nidadavolu
                </div>
                <div className="font-sans text-xs text-slate-300 mt-1">
                  Open Daily · 9:00 AM – 9:00 PM · Walk-ins Welcome
                </div>
              </div>
            </div>

            {/* Experience Floating Counter Badge */}
            <div className="hidden sm:block absolute -bottom-5 -left-5 bg-[#0B192C] text-white p-4 rounded-xl border border-amber-500/30 shadow-2xl">
              <div className="font-heading text-2xl font-extrabold text-amber-400 leading-none">5.0 ★</div>
              <div className="font-sans text-xs text-slate-300 mt-1 font-medium">39 Google Reviews</div>
              <div className="font-sans text-[10px] text-slate-400">100% Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* The 4 Pillars (Design, Structure, Permission, Construction) */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Our 4 Pillars: Everything Under One Roof
            </h3>
            <p className="font-sans text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
              No third-party delays. Complete accountability from architectural draft to final key handover.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="p-6 rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-500/50 hover:bg-white hover:shadow-lg transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-heading text-2xl font-black text-amber-600/70 group-hover:text-amber-600 transition-colors">
                    {pillar.num}
                  </span>
                  <span className="font-sans text-[11px] font-semibold text-slate-600 bg-slate-200/70 group-hover:bg-amber-100 group-hover:text-amber-800 px-2 py-0.5 rounded transition-colors">
                    {pillar.stat}
                  </span>
                </div>

                <h4 className="font-heading text-lg font-bold text-slate-900 mb-1 group-hover:text-amber-700 transition-colors">
                  {pillar.title}
                </h4>
                <div className="font-telugu text-xs sm:text-[13px] text-amber-800 font-semibold mb-3 leading-normal not-italic">
                  {pillar.telugu}
                </div>

                <p className="font-sans text-xs text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
