/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PermissionsBPSSection } from './components/PermissionsBPSSection';
import { StructuralSection } from './components/StructuralSection';
import { PackagesSection } from './components/PackagesSection';
import { ProjectGallery } from './components/ProjectGallery';
import { ReviewsSection } from './components/ReviewsSection';
import { EnquiryForm } from './components/EnquiryForm';
import { MapLocationSection } from './components/MapLocationSection';
import { Footer } from './components/Footer';
import { FloatingContact } from './components/FloatingContact';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-white">
      {/* 1. Header Navigation with Original PK Constructions Logo */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Section 1: Hero - "Design. Structure. Permission. Construction. All in One Place." */}
        <Hero />

        {/* Section 2: About PK Constructions */}
        <AboutSection />

        {/* Section 3: Our Services */}
        <ServicesSection />

        {/* Section 4: Building Permissions & Layout Approvals (AP BPS Scheme) */}
        <PermissionsBPSSection />

        {/* Section 5: Structural Engineering & RCC Design */}
        <StructuralSection />

        {/* Section 6: Construction Packages (Standard ₹2,000, Premium ₹2,200, Luxury ₹2,500) + Cost Calculator */}
        <PackagesSection />

        {/* Section 7: Project Gallery */}
        <ProjectGallery />

        {/* Real Google Business Profile Reviews (5.0 ★, 39 Reviews) */}
        <ReviewsSection />

        {/* Section 8: Customer Enquiry Form */}
        <EnquiryForm />

        {/* Section 10: Google Maps Location & Hours */}
        <MapLocationSection />
      </main>

      {/* Section 10 (cont): Comprehensive Footer with Original PK Constructions Logo */}
      <Footer />

      {/* Section 9: Floating WhatsApp & Phone Contact Buttons */}
      <FloatingContact />
    </div>
  );
}
