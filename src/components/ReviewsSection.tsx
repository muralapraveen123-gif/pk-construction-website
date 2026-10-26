import React from 'react';
import { Star, CheckCircle, Quote, ExternalLink, ThumbsUp } from 'lucide-react';
import { REVIEWS_DATA, COMPANY_DETAILS } from '../data/companyData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Google Business Profile aggregate rating */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="font-heading text-amber-700 font-bold text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
              <span>Google Business Profile Verified</span>
              <span className="h-px w-8 bg-amber-600" />
              <span>Nidadavole</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight">
              Rated 5.0 Stars by Homeowners in Nidadavole
            </h2>
            <p className="font-sans text-slate-600 mt-2 text-sm leading-relaxed">
              Real testimonials from clients who entrusted their building permissions, structural design, and turnkey home construction to PK Constructions.
            </p>
          </div>

          {/* Google Aggregate Scorecard */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm shrink-0">
            <div className="text-center pr-4 border-r border-slate-200">
              <div className="font-heading text-3xl font-extrabold text-slate-900 leading-none tracking-tight">
                5.0
              </div>
              <div className="flex text-amber-500 mt-1.5 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="font-sans text-[10px] text-slate-500 mt-1 font-medium">39 Google Reviews</div>
            </div>

            <div className="space-y-1 font-sans text-xs">
              <div className="font-bold text-slate-900 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>100% Positive Feedback</span>
              </div>
              <div className="text-slate-500 text-[11px]">Real estate builders & construction</div>
              <a
                href={COMPANY_DETAILS.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading text-amber-700 hover:text-amber-800 font-bold flex items-center gap-1 text-[11px] tracking-wide"
              >
                <span>View on Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {REVIEWS_DATA.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="font-sans text-[10px] font-semibold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    <span>Google Review</span>
                  </span>
                </div>

                <div className="relative mb-4">
                  <Quote className="w-6 h-6 text-amber-500/20 absolute -top-2 -left-1" />
                  <p className="font-sans text-xs sm:text-sm text-slate-700 italic pl-5 leading-relaxed">
                    "{rev.reviewText}"
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between font-sans">
                <div>
                  <div className="font-heading text-xs font-bold text-slate-900 tracking-tight">
                    {rev.name}
                  </div>
                  <div className="text-[11px] text-slate-500 font-normal">
                    {rev.projectType}
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[11px] text-slate-400">
                  <ThumbsUp className="w-3 h-3 text-amber-600" />
                  <span>Verified Client</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Review Footnote */}
        <div className="mt-12 text-center font-sans text-xs text-slate-500 leading-relaxed">
          Reviews sourced directly from our verified Google Business Profile for <strong>Pk construction</strong>, Ganesh Complex, Nidadavole.
        </div>
      </div>
    </section>
  );
};
