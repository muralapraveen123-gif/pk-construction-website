import React, { useState } from 'react';
import { FileCheck, ShieldAlert, CheckCircle, Clock, FileText, ArrowRight, MessageSquare, HelpCircle } from 'lucide-react';
import { COMPANY_DETAILS, BPS_FAQS } from '../data/companyData';

export const PermissionsBPSSection: React.FC = () => {
  const steps = [
    {
      num: "1",
      title: "Document & Title Verification",
      desc: "We verify registered title deed, 13–30 year EC, link documents, and municipal tax receipts."
    },
    {
      num: "2",
      title: "Field Survey & AutoCAD Blueprint",
      desc: "Detailed total-station boundary measurement and preparation of APCRDA/Municipal submission blueprints."
    },
    {
      num: "3",
      title: "Structural Stability Certification",
      desc: "Our registered structural engineer issues stability reports and non-encroachment certificates."
    },
    {
      num: "4",
      title: "Online Portal Filing & Sanction Order",
      desc: "Complete filing through the Andhra Pradesh government portal with continuous liaison until sanction order release."
    }
  ];

  return (
    <section id="permissions" className="py-16 sm:py-24 bg-slate-50 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="font-heading text-amber-700 font-bold text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
            <span>Section 04 · Government Approvals</span>
            <span className="h-px w-8 bg-amber-600" />
            <span>Nidadavole & AP</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Building Permissions, Layout Approvals & AP BPS Regularization
          </h2>
          <p className="font-sans text-slate-600 mt-3 text-sm sm:text-base leading-relaxed">
            Eliminate municipal notices and legal hassles. PK Constructions handles 100% of the planning paperwork, structural certifications, and liaison with Nidadavole Municipality and town planning departments.
          </p>
        </div>

        {/* Featured BPS Golden Chance Callout */}
        <div className="mb-14 rounded-2xl bg-gradient-to-br from-[#0B192C] to-[#122A4E] text-white p-6 sm:p-10 shadow-xl border border-amber-500/30 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
            <div className="lg:col-span-8 space-y-4">
              <div className="font-heading inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/40 tracking-wide">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>Special Government Scheme Active</span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                (BPS) BUILDING PENALIZATION SCHEME
              </h3>
              
              <div className="p-4 bg-amber-500/15 rounded-xl border border-amber-500/30 text-amber-300 font-telugu font-semibold text-base sm:text-lg md:text-xl leading-relaxed">
                "మీ ఇంటి ప్లాన్ రెగ్యులరైజ్ చేసుకోడానికి గోల్డెన్ ఛాన్స్!"
              </div>

              <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                Did you construct your house without municipal permission or with deviations from the sanctioned plan?
                Under the Andhra Pradesh BPS framework, PK Constructions prepares your "As-Built" architectural drawings, computes the exact government compounding fee, secures structural stability certificates, and regularizes your property legally.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 font-sans">
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Legal Bank Loan Eligibility</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Free from Demolition Notices</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Full Market Property Value</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-900/90 p-6 rounded-2xl border border-slate-700/80 space-y-4">
              <div className="font-heading text-xs font-bold uppercase tracking-wider text-amber-400">
                BPS Consultation Hotline
              </div>
              <div className="font-heading text-lg font-bold text-white tracking-tight">
                Get Your Property Assessed Today
              </div>
              <p className="font-sans text-xs text-slate-300 leading-relaxed">
                Bring your site documents to Ganesh Complex, Nidadavole or send photos on WhatsApp for instant evaluation.
              </p>
              <a
                href={`https://wa.me/918008654131?text=Hello%20PK%20Constructions,%20I%20want%20information%20regarding%20BPS%20House%20Plan%20Regularization.`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-3 rounded-lg shadow-md transition-all tracking-wide"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp BPS Enquiry</span>
              </a>
              <a
                href={`tel:${COMPANY_DETAILS.phone}`}
                className="font-heading w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold text-xs py-2.5 rounded-lg border border-slate-700 transition-all tracking-wide"
              >
                <span>Call 080086 54131</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4-Step Approval Roadmap */}
        <div className="mb-14">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Our 4-Step Permission Sanction Process
            </h3>
            <p className="font-sans text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
              From site survey to municipal seal — fully handled by our engineers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st) => (
              <div key={st.num} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:border-amber-500/50 transition-all">
                <div className="w-8 h-8 rounded-full bg-amber-500/10 text-amber-800 font-extrabold flex items-center justify-center text-sm font-heading mb-3">
                  {st.num}
                </div>
                <h4 className="font-heading font-bold text-slate-900 text-sm mb-1.5">{st.title}</h4>
                <p className="font-sans text-xs text-slate-600 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Checklist of Required Documents */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="font-heading text-lg font-bold text-slate-900 flex items-center gap-2 tracking-tight">
              <FileText className="w-5 h-5 text-amber-600" />
              <span>Documents Required for Building Permission</span>
            </h3>
            <ul className="space-y-3 font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong className="text-slate-900 font-semibold">Registered Sale Deed / Title Deed</strong> of the property.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong className="text-slate-900 font-semibold">Encumbrance Certificate (EC)</strong> for 13 to 30 years.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong className="text-slate-900 font-semibold">Latest Municipal Property Tax Receipt</strong> & Land assessment order.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong className="text-slate-900 font-semibold">AutoCAD Floor Plan & Site Key Map</strong> (drawn by PK Constructions).</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong className="text-slate-900 font-semibold">Licensed Structural Stability Certificate</strong> (issued by PK Constructions).</span>
              </li>
            </ul>
          </div>

          {/* Quick FAQ / Clarification */}
          <div className="lg:col-span-6 bg-slate-900 text-white p-6 sm:p-8 rounded-xl border border-slate-800 space-y-4">
            <h3 className="font-heading text-lg font-bold text-white flex items-center gap-2 tracking-tight">
              <HelpCircle className="w-5 h-5 text-amber-400" />
              <span>Permission & BPS FAQs</span>
            </h3>
            <div className="space-y-4 font-sans text-xs sm:text-sm">
              {BPS_FAQS.map((faq, i) => (
                <div key={i} className="pb-3 border-b border-slate-800 last:border-b-0">
                  <div className="font-heading font-bold text-amber-300 mb-1 tracking-tight text-xs sm:text-sm">{faq.question}</div>
                  <div className="text-slate-300 leading-relaxed text-xs">{faq.answer}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
