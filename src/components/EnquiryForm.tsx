import React, { useState } from 'react';
import { Send, Phone, MessageSquare, CheckCircle, Clock, MapPin, Building, ShieldCheck } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';

export const EnquiryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Premium Construction Package (₹2,200 per sq ft)',
    plotArea: '',
    location: 'Nidadavole',
    timeframe: 'Starting in 1-3 Months',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setSubmitted(true);
  };

  const getWhatsAppMessageUrl = () => {
    const text = `*New Construction Enquiry - PK Constructions*\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      `🏗️ *Service:* ${formData.service}\n` +
      `📐 *Built-Up Area / Plot Size:* ${formData.plotArea || 'Not specified'}\n` +
      `📍 *Location:* ${formData.location}\n` +
      `⏳ *Timeline:* ${formData.timeframe}\n` +
      `💬 *Details:* ${formData.message || 'Please provide quotation.'}`;

    return `https://wa.me/918008654131?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-50 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Business Details & Instant Connect */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="font-heading text-amber-700 font-bold text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
                <span>Section 08 · Contact & Consultation</span>
                <span className="h-px w-8 bg-amber-600" />
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Plan Your Project with PK Constructions
              </h2>
              <p className="font-sans text-slate-600 mt-3 text-sm leading-relaxed">
                Connect directly with our chief structural engineers and planning consultants in Nidadavole. Get a complimentary site consultation and transparent cost breakdown.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3 pt-2">
              <a
                href={`tel:${COMPANY_DETAILS.phone}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 hover:border-amber-500 shadow-sm transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-amber-500/10 text-amber-700 flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-sans text-xs text-slate-500 font-medium">Direct Phone Call</div>
                  <div className="font-heading text-base font-bold text-slate-950 tracking-tight">
                    {COMPANY_DETAILS.displayPhone}
                  </div>
                  <div className="font-sans text-[11px] text-emerald-600 font-medium">Open · Closes 9:00 PM</div>
                </div>
              </a>

              <a
                href={COMPANY_DETAILS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 hover:border-emerald-500 shadow-sm transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-sans text-xs text-slate-500 font-medium">Official WhatsApp Chat</div>
                  <div className="font-heading text-base font-bold text-slate-950 tracking-tight">
                    +91 80086 54131
                  </div>
                  <div className="font-sans text-[11px] text-slate-500">Send drawings & get instant reply</div>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-sans text-xs text-slate-500 font-medium">Head Office Location</div>
                  <div className="font-heading text-sm font-bold text-slate-950">
                    Bharath Matha complex, Ganesh Complex
                  </div>
                  <div className="font-sans text-xs text-slate-600 mt-0.5 leading-relaxed">
                    Nidadavolu, Andhra Pradesh 534301
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Assurances */}
            <div className="p-4 rounded-xl bg-slate-900 text-white space-y-2 text-xs font-sans">
              <div className="font-heading flex items-center gap-2 text-amber-400 font-bold tracking-wide">
                <ShieldCheck className="w-4 h-4" />
                <span>Our Quality Commitment</span>
              </div>
              <p className="text-slate-300 leading-relaxed text-[11px]">
                No hidden charges, zero sub-standard materials, and fixed milestones. Every cubic foot of concrete is mixed and cured according to strict engineering standards.
              </p>
            </div>
          </div>

          {/* Right Column: Customer Enquiry Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-xl">
            {submitted ? (
              <div className="text-center py-8 space-y-5 animate-fadeIn">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-slate-950 tracking-tight">
                  Enquiry Submitted Successfully!
                </h3>
                <p className="font-sans text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Our chief engineer will call you shortly at <strong>{formData.phone}</strong>.
                </p>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-left max-w-md mx-auto space-y-1.5 font-sans">
                  <div><strong>Service:</strong> {formData.service}</div>
                  <div><strong>Location:</strong> {formData.location}</div>
                  {formData.plotArea && <div><strong>Area:</strong> {formData.plotArea} sq.ft</div>}
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 font-heading">
                  <a
                    href={getWhatsAppMessageUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-3 px-6 rounded-lg shadow-md transition-all tracking-wide"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Open in WhatsApp Directly</span>
                  </a>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="w-full sm:w-auto px-5 py-3 rounded-lg text-xs font-semibold text-slate-700 hover:text-slate-950 border border-slate-300 tracking-wide"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-200 pb-3 mb-4">
                  <h3 className="font-heading text-xl font-bold text-slate-950 tracking-tight">
                    Get a Free Estimate & Site Consultation
                  </h3>
                  <p className="font-sans text-xs text-slate-500 mt-1 leading-relaxed">
                    Fill out the form below or message our engineers directly on WhatsApp.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-heading block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Murala Praveen"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="font-sans w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-xs sm:text-sm text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="font-heading block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 098765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="font-sans w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-xs sm:text-sm text-slate-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-heading block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Service Required
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="font-sans w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-xs sm:text-sm text-slate-900 bg-white"
                    >
                      <option value="Standard Construction Package (₹2,000 per sq ft)">Standard Construction Package (₹2,000 per sq ft)</option>
                      <option value="Premium Construction Package (₹2,200 per sq ft)">Premium Construction Package (₹2,200 per sq ft)</option>
                      <option value="Luxury Villa Construction (₹2,500 per sq ft)">Luxury Villa Construction (₹2,500 per sq ft)</option>
                      <option value="Building Permissions & DTCP Approval">Building Permissions & DTCP Approval</option>
                      <option value="AP BPS Regularization Scheme">AP BPS Regularization Scheme</option>
                      <option value="Structural RCC Engineering & Design">Structural RCC Engineering & Design</option>
                      <option value="3D Elevation & Walkthrough">3D Elevation & Walkthrough</option>
                      <option value="AutoCAD 2D Drafting (₹2.00 per sq ft)">AutoCAD 2D Drafting (₹2.00 per sq ft)</option>
                      <option value="Luxury Interior Design & Modular Kitchen">Luxury Interior Design & Modular Kitchen</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-heading block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Estimated Plot / Built-Up Area
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 1,800 sq.ft or 200 sq.yards"
                      value={formData.plotArea}
                      onChange={(e) => setFormData({ ...formData, plotArea: e.target.value })}
                      className="font-sans w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-xs sm:text-sm text-slate-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-heading block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Site Location
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Nidadavole, Kovvur, Tanuku"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="font-sans w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-xs sm:text-sm text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="font-heading block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      When Do You Plan to Start?
                    </label>
                    <select
                      value={formData.timeframe}
                      onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
                      className="font-sans w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-xs sm:text-sm text-slate-900 bg-white"
                    >
                      <option value="Immediately (Within 30 Days)">Immediately (Within 30 Days)</option>
                      <option value="Starting in 1-3 Months">Starting in 1-3 Months</option>
                      <option value="Planning Phase / Budgeting">Planning Phase / Budgeting</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-heading block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Additional Project Details / Requirements
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about floors (G+1, G+2), Vastu preferences, or BPS approval requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="font-sans w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-xs sm:text-sm text-slate-900 leading-relaxed"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3 font-heading">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs sm:text-sm py-3.5 px-6 rounded-lg shadow-md transition-all flex items-center justify-center gap-2 tracking-wide"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Enquiry</span>
                  </button>

                  <a
                    href={getWhatsAppMessageUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm py-3.5 px-5 rounded-lg shadow-md transition-all tracking-wide"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>

                <div className="font-sans text-[11px] text-slate-500 text-center pt-2 leading-relaxed">
                  🔒 Your contact information is kept strictly confidential and only used to contact you regarding PK Constructions services.
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
