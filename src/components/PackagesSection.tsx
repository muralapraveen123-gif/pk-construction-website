import React, { useState } from 'react';
import { Check, Star, Calculator, ArrowRight, MessageSquare, Phone, Info } from 'lucide-react';
import { PACKAGES_DATA, COMPANY_DETAILS, PackageItem } from '../data/companyData';

export const PackagesSection: React.FC = () => {
  const [selectedPackageId, setSelectedPackageId] = useState<string>('premium');
  const [builtUpArea, setBuiltUpArea] = useState<number>(1800);
  const [includeAutoCad, setIncludeAutoCad] = useState<boolean>(true);
  const [includeInteriors, setIncludeInteriors] = useState<boolean>(false);

  const currentPkg = PACKAGES_DATA.find((p) => p.id === selectedPackageId) || PACKAGES_DATA[1];

  // Calculation
  const baseCost = builtUpArea * currentPkg.pricePerSqFt;
  const autoCadCost = includeAutoCad ? builtUpArea * 2 : 0;
  const interiorCost = includeInteriors ? builtUpArea * 350 : 0;
  const totalCost = baseCost + autoCadCost + interiorCost;

  const generateWhatsAppEstimateUrl = () => {
    const text = `Hello PK Constructions, I am estimating construction in Nidadavole:\n\n• Package: ${currentPkg.name} (₹${currentPkg.pricePerSqFt}/sq.ft)\n• Built-up Area: ${builtUpArea} sq.ft\n• AutoCAD Drafting Included: ${includeAutoCad ? 'Yes (₹2/sq.ft)' : 'No'}\n• Modular Interiors: ${includeInteriors ? 'Yes' : 'No'}\n• Estimated Total: ₹${(totalCost / 100000).toFixed(2)} Lakhs\n\nPlease contact me with detailed material specification.`;
    return `https://wa.me/918008654131?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="packages" className="py-16 sm:py-24 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="font-heading text-amber-700 font-bold text-xs uppercase tracking-widest mb-2 flex items-center justify-center gap-2">
            <span>Section 06 · Transparent Pricing</span>
            <span className="h-px w-8 bg-amber-600" />
            <span>Nidadavole</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight">
            Turnkey Construction Packages & Specifications
          </h2>
          <p className="font-sans text-slate-600 mt-3 text-sm sm:text-base leading-relaxed">
            Direct transparent pricing featuring Standard at <strong className="text-slate-900">₹2,000 per sq ft</strong>, Signature Premium at <strong className="text-slate-900">₹2,200 per sq ft</strong>, and Luxury Villa at <strong className="text-slate-900">₹2,500 per sq ft</strong> with zero hidden charges.
          </p>
        </div>

        {/* 3 Package Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {PACKAGES_DATA.map((pkg) => {
            const isPremium = pkg.highlight;
            return (
              <div
                key={pkg.id}
                className={`rounded-2xl flex flex-col justify-between transition-all duration-300 relative ${
                  isPremium
                    ? 'bg-[#0B192C] text-white shadow-2xl border-2 border-amber-500 scale-[1.02] z-10'
                    : 'bg-slate-50 text-slate-900 border border-slate-200 hover:shadow-lg'
                } p-6 sm:p-8`}
              >
                {/* Popular Pill */}
                {isPremium && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 text-[11px] font-heading font-extrabold uppercase tracking-wider py-1 px-4 rounded-full shadow-md">
                    Signature Package · ₹2,200 per sq ft
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className={`font-heading text-xl font-bold tracking-tight ${isPremium ? 'text-white' : 'text-slate-900'}`}>
                      {pkg.name}
                    </h3>
                  </div>

                  <p className={`font-sans text-xs ${isPremium ? 'text-slate-300' : 'text-slate-500'} mb-6 min-h-[36px] leading-relaxed`}>
                    {pkg.description}
                  </p>

                  {/* Price Block */}
                  <div className="mb-6 pb-6 border-b border-slate-700/40">
                    <div className="flex items-baseline gap-1.5">
                      <span className={`font-heading text-3xl sm:text-4xl font-extrabold tracking-tight ${isPremium ? 'text-amber-400' : 'text-slate-900'}`}>
                        ₹{pkg.pricePerSqFt.toLocaleString('en-IN')}
                      </span>
                      <span className={`font-sans text-xs ${isPremium ? 'text-slate-400' : 'text-slate-500'}`}>
                        per sq ft
                      </span>
                    </div>
                    <div className={`font-sans text-[11px] mt-1 font-medium ${isPremium ? 'text-amber-300/80' : 'text-slate-500'}`}>
                      Material + Labor + Site Supervision included
                    </div>
                  </div>

                  {/* Specifications by category */}
                  <div className="space-y-4 font-sans text-xs mb-8">
                    <div>
                      <div className={`font-heading font-bold uppercase tracking-wider text-[11px] mb-2 ${isPremium ? 'text-amber-400' : 'text-slate-700'}`}>
                        Structural & Civil
                      </div>
                      <ul className="space-y-1.5">
                        {pkg.specifications.structure.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isPremium ? 'text-amber-400' : 'text-emerald-600'}`} />
                            <span className={`leading-relaxed ${isPremium ? 'text-slate-200' : 'text-slate-600'}`}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className={`font-heading font-bold uppercase tracking-wider text-[11px] mb-2 ${isPremium ? 'text-amber-400' : 'text-slate-700'}`}>
                        Flooring & Kitchen
                      </div>
                      <ul className="space-y-1.5">
                        {pkg.specifications.flooring.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isPremium ? 'text-amber-400' : 'text-emerald-600'}`} />
                            <span className={`leading-relaxed ${isPremium ? 'text-slate-200' : 'text-slate-600'}`}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className={`font-heading font-bold uppercase tracking-wider text-[11px] mb-2 ${isPremium ? 'text-amber-400' : 'text-slate-700'}`}>
                        Doors, Windows & Paint
                      </div>
                      <ul className="space-y-1.5">
                        {pkg.specifications.doorsWindows.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isPremium ? 'text-amber-400' : 'text-emerald-600'}`} />
                            <span className={`leading-relaxed ${isPremium ? 'text-slate-200' : 'text-slate-600'}`}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-4 border-t border-slate-700/30">
                  <a
                    href={`https://wa.me/918008654131?text=Hi%20PK%20Constructions,%20I%20am%20interested%20in%20the%20${encodeURIComponent(pkg.name)}%20package.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`font-heading w-full py-3 px-4 rounded-lg font-bold text-xs flex items-center justify-center gap-2 transition-all tracking-wide ${
                      isPremium
                        ? 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    <span>Choose {pkg.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Interactive Construction Cost Calculator */}
        <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-[#0A1628] text-white p-6 sm:p-10 shadow-2xl border border-amber-500/30">
          <div className="max-w-2xl mb-8">
            <div className="font-heading flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
              <Calculator className="w-4 h-4" />
              <span>Interactive Cost Calculator</span>
            </div>
            <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              Estimate Your Dream Home Construction in Nidadavole
            </h3>
            <p className="font-sans text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
              Select your package, slide your plot's built-up area, and receive an instant transparent estimate.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Controls */}
            <div className="lg:col-span-7 space-y-6">
              {/* Package Selector */}
              <div>
                <label className="font-heading block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  1. Select Package
                </label>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {PACKAGES_DATA.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setSelectedPackageId(p.id)}
                      className={`p-3 rounded-xl text-left border transition-all ${
                        selectedPackageId === p.id
                          ? 'bg-amber-500/20 border-amber-400 text-white ring-1 ring-amber-400'
                          : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:border-slate-600'
                      }`}
                    >
                      <div className="font-heading text-xs font-bold truncate">{p.name.split(' ')[0]}</div>
                      <div className="font-sans text-xs text-amber-400 font-semibold mt-0.5">₹{p.pricePerSqFt.toLocaleString('en-IN')} per sq ft</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Built-up area slider */}
              <div>
                <div className="flex items-center justify-between text-xs mb-2 font-heading">
                  <span className="font-bold text-slate-300 uppercase tracking-wider">
                    2. Built-up Area
                  </span>
                  <span className="text-amber-400 font-bold text-base tracking-tight">
                    {builtUpArea.toLocaleString()} sq.ft
                  </span>
                </div>
                <input
                  type="range"
                  min="800"
                  max="5000"
                  step="50"
                  value={builtUpArea}
                  onChange={(e) => setBuiltUpArea(Number(e.target.value))}
                  className="w-full accent-amber-500 h-2 bg-slate-700 rounded-lg cursor-pointer"
                />
                <div className="font-sans flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>800 sq.ft (Single floor)</span>
                  <span>2,000 sq.ft (Duplex G+1)</span>
                  <span>5,000 sq.ft (Luxury Villa G+2)</span>
                </div>
              </div>

              {/* Add-on toggles */}
              <div className="space-y-3 pt-2 font-sans">
                <div className="font-heading text-xs font-bold text-slate-300 uppercase tracking-wider">
                  3. Add-on Services
                </div>
                <label className="flex items-center justify-between p-3 rounded-xl bg-slate-800/60 border border-slate-700 cursor-pointer hover:border-slate-600">
                  <div className="flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      checked={includeAutoCad}
                      onChange={(e) => setIncludeAutoCad(e.target.checked)}
                      className="w-4 h-4 accent-amber-500 rounded"
                    />
                    <div>
                      <div className="text-xs font-semibold text-white">AutoCAD 2D Drafting & Municipal Blueprint</div>
                      <div className="text-[11px] text-slate-400">Actual profile rate: ₹2.00 / sq.ft</div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-amber-400">+₹{(builtUpArea * 2).toLocaleString('en-IN')}</span>
                </label>

                <label className="flex items-center justify-between p-3 rounded-xl bg-slate-800/60 border border-slate-700 cursor-pointer hover:border-slate-600">
                  <div className="flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      checked={includeInteriors}
                      onChange={(e) => setIncludeInteriors(e.target.checked)}
                      className="w-4 h-4 accent-amber-500 rounded"
                    />
                    <div>
                      <div className="text-xs font-semibold text-white">Modular Kitchen & Interior Woodwork</div>
                      <div className="text-[11px] text-slate-400">Standard modular interior package (~₹350/sq.ft)</div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-amber-400">+₹{(builtUpArea * 350).toLocaleString('en-IN')}</span>
                </label>
              </div>
            </div>

            {/* Right Summary Box */}
            <div className="lg:col-span-5 bg-slate-950/80 p-6 sm:p-7 rounded-2xl border border-amber-500/40 space-y-4">
              <div className="font-heading text-xs text-amber-400 uppercase tracking-widest font-bold">
                Estimated Project Investment
              </div>

              <div className="pb-4 border-b border-slate-800">
                <div className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  ₹{(totalCost / 100000).toFixed(2)} <span className="text-lg font-normal text-amber-400">Lakhs</span>
                </div>
                <div className="font-sans text-xs text-slate-400 mt-1">
                  Total Approx: ₹{totalCost.toLocaleString('en-IN')}
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-300 font-sans">
                <div className="flex justify-between py-1 border-b border-slate-900">
                  <span>Base Civil & Turnkey Construction:</span>
                  <span className="font-medium text-white">₹{baseCost.toLocaleString('en-IN')}</span>
                </div>
                {includeAutoCad && (
                  <div className="flex justify-between py-1 border-b border-slate-900">
                    <span>AutoCAD Blueprint (@ ₹2/sq.ft):</span>
                    <span className="font-semibold text-amber-400">₹{autoCadCost.toLocaleString('en-IN')}</span>
                  </div>
                )}
                {includeInteriors && (
                  <div className="flex justify-between py-1 border-b border-slate-900">
                    <span>Interiors & Modular Kitchen:</span>
                    <span className="font-semibold text-amber-400">₹{interiorCost.toLocaleString('en-IN')}</span>
                  </div>
                )}
              </div>

              <div className="pt-2 space-y-2 font-heading">
                <a
                  href={generateWhatsAppEstimateUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-3 rounded-lg shadow-md transition-all tracking-wide"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Estimate to WhatsApp (080086 54131)</span>
                </a>

                <a
                  href={`tel:${COMPANY_DETAILS.phone}`}
                  className="w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold text-xs py-2.5 rounded-lg border border-slate-700 transition-all tracking-wide"
                >
                  <Phone className="w-4 h-4" />
                  <span>Discuss with Site Engineer</span>
                </a>
              </div>

              <p className="font-sans text-[10px] text-slate-400 text-center leading-relaxed">
                *Final rates may adjust based on soil foundation depth, elevation complexity, and exact plot dimensions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
