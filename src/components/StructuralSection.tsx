import React from 'react';
import { Layers, ShieldCheck, CheckCircle2, Ruler, Compass, AlertCircle, ArrowRight } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';

export const StructuralSection: React.FC = () => {
  const structuralCheckpoints = [
    {
      title: "Soil Bearing Capacity & Foundation Sizing",
      desc: "Nidadavole and the Godavari basin frequently encounter fertile alluvial and black-cotton soil layers. We analyze the exact safe bearing capacity (SBC) to design isolated, combined, or raft footings that prevent structural settlement."
    },
    {
      title: "Earthquake & Wind Load Analysis (STAAD / ETABS)",
      desc: "Every residential and commercial structure undergoes finite element frame modeling for lateral seismic forces according to IS 1893:2016 Zone III design codes."
    },
    {
      title: "Ductile Detailing & IS 13920 Compliance",
      desc: "Proper spacing of column ties, beam shear stirrups, cross ties, and continuous top/bottom reinforcement at beam-column junctions to prevent sudden shear failure."
    },
    {
      title: "Waterproofing & Plinth Beam Damp-Proofing",
      desc: "Integrated plinth tie-beams with damp-proof course (DPC) and chemical crystalline waterproofing to permanently guard against capillary wall dampness and efflorescence."
    }
  ];

  const codeStandards = [
    { code: "IS 456: 2000", title: "Code of Practice for Plain & Reinforced Concrete" },
    { code: "IS 1893: 2016", title: "Criteria for Earthquake Resistant Design of Structures" },
    { code: "IS 13920: 2016", title: "Ductile Detailing of Reinforced Concrete Structures" },
    { code: "IS 875 (Parts 1-3)", title: "Design Loads (Dead, Live & Wind) for Buildings" },
  ];

  return (
    <section id="structural" className="py-16 sm:py-24 bg-[#091527] text-white relative">
      {/* Blueprint grid background */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#60a5fa 1px, transparent 1px), linear-gradient(90deg, #60a5fa 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="font-heading text-amber-400 font-bold text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
            <span>Section 05 · Structural Engineering</span>
            <span className="h-px w-8 bg-amber-400" />
            <span>Safe & Certified</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Structural Engineering & RCC Design: Zero Compromise on Safety
          </h2>
          <p className="font-sans text-slate-300 mt-3 text-sm sm:text-base leading-relaxed">
            A beautiful elevation is only as good as the skeleton underneath. PK Constructions provides certified structural drawings engineered to withstand regional soil stresses, seismic tremors, and heavy loads for 60+ years.
          </p>
        </div>

        {/* Structural Framework Diagram / Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Left Column: Visual Structural Analysis Blueprint */}
          <div className="lg:col-span-5 bg-slate-900/90 rounded-2xl p-6 sm:p-8 border border-amber-500/30 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-heading text-xs uppercase tracking-wider text-amber-400 font-bold flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-amber-400" />
                  RCC Blueprint Standards
                </span>
                <span className="font-sans text-[11px] font-semibold bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">
                  Certified Safety
                </span>
              </div>

              <h3 className="font-heading text-xl font-bold text-white tracking-tight">
                Engineered For Generations
              </h3>

              <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
                Many local contractors guess column sizes and rebar gauges, leading to wall cracks and sagged lintels. At PK Constructions, our certified structural engineers calculate moment distributions, axial load capacities, and deflection limits mathematically.
              </p>

              {/* Technical Code Badges */}
              <div className="space-y-2.5 pt-3 font-sans">
                <div className="text-xs font-semibold text-slate-400">Indian Standard (BIS) Compliance:</div>
                {codeStandards.map((std) => (
                  <div key={std.code} className="flex items-center justify-between p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs">
                    <span className="font-semibold text-amber-400">{std.code}</span>
                    <span className="text-slate-300 text-right text-[11px]">{std.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Engineer Quote / Stability Cert Info */}
            <div className="mt-6 pt-5 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-sans">
              <span className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                Stability Certificates for Bank Loans
              </span>
              <a
                href={`tel:${COMPANY_DETAILS.phone}`}
                className="font-heading text-amber-400 font-bold hover:underline tracking-wide"
              >
                Consult Engineer →
              </a>
            </div>
          </div>

          {/* Right Column: 4 Structural Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {structuralCheckpoints.map((cp, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700 hover:border-amber-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-400 font-extrabold flex items-center justify-center text-xs font-heading mb-3">
                    0{idx + 1}
                  </div>
                  <h4 className="font-heading font-bold text-white text-sm mb-2 tracking-tight">{cp.title}</h4>
                  <p className="font-sans text-xs text-slate-300 leading-relaxed">{cp.desc}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-700/50 flex items-center gap-1.5 text-[11px] text-amber-400/90 font-medium font-sans">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>Quality checked on site</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Structural Inspection Guarantee */}
        <div className="p-6 rounded-2xl bg-slate-800/90 border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 shrink-0">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <div className="font-heading text-sm sm:text-base font-bold text-white tracking-tight">Need Only Structural Design & AutoCAD Drafting?</div>
              <div className="font-sans text-xs text-slate-300 mt-0.5 leading-relaxed">We provide standalone structural drawings and 2D drafting from just ₹2.00 / sq.ft across Nidadavole.</div>
            </div>
          </div>

          <a
            href={`https://wa.me/918008654131?text=Hello%20PK%20Constructions,%20I%20need%20Structural%20Engineering%20and%20RCC%20Design%20for%20my%20building.`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading shrink-0 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs px-5 py-3 rounded-lg transition-colors flex items-center gap-2 tracking-wide"
          >
            <span>Get RCC Quote</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
