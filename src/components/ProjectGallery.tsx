import React, { useState } from 'react';
import { GALLERY_PROJECTS, ProjectItem, COMPANY_DETAILS } from '../data/companyData';
import { Eye, MapPin, Layers, X, MessageSquare, ArrowRight } from 'lucide-react';

export const ProjectGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential Villas' },
    { id: 'elevation3d', label: '3D Elevations' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'structural', label: 'Structural RCC' },
    { id: 'interiors', label: 'Interiors' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? GALLERY_PROJECTS
    : GALLERY_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="font-heading text-amber-400 font-bold text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
              <span>Section 07 · Portfolio</span>
              <span className="h-px w-8 bg-amber-400" />
              <span>Nidadavole & East/West Godavari</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Featured Construction & Architectural Gallery
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-slate-300 max-w-md leading-relaxed">
            Real residential villas, municipal sanction designs, 3D elevation renders, and structural frameworks executed by PK Constructions.
          </p>
        </div>

        {/* Filter Tabs in Manrope */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-800/80 rounded-xl max-w-2xl mb-10 overflow-x-auto border border-slate-700">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`font-heading px-3.5 py-2 text-xs font-bold rounded-lg whitespace-nowrap transition-all tracking-wide ${
                activeCategory === cat.id
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 hover:border-amber-500/60 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-amber-500/10 flex flex-col justify-between"
            >
              <div className="relative h-60 w-full overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Status Indicator */}
                <div className="font-heading absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-bold text-amber-300 border border-amber-500/30 tracking-wide">
                  {project.status}
                </div>

                <div className="absolute top-3 right-3 p-2 rounded-full bg-slate-900/80 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-4 h-4 text-amber-400" />
                </div>

                <div className="absolute bottom-3 left-3 right-3">
                  <div className="font-sans text-[11px] text-amber-400 font-medium flex items-center gap-1 mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{project.location}</span>
                  </div>
                  <h3 className="font-heading text-base font-bold text-white line-clamp-1 tracking-tight">
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className="p-4 bg-slate-800/90 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-300 font-sans">
                <span className="font-semibold text-amber-300/90">{project.area}</span>
                <span className="font-heading font-bold text-slate-400 hover:text-amber-400 flex items-center gap-1 transition-colors tracking-wide text-xs">
                  <span>View Details</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox for Project Inspection */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
            <div className="bg-slate-900 border border-amber-500/40 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative text-white">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-950/80 hover:bg-slate-950 text-slate-300 hover:text-white border border-slate-700"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-black">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="font-heading text-xs uppercase tracking-wider text-amber-400 font-bold">
                    {selectedProject.category.toUpperCase()} · {selectedProject.status}
                  </div>
                  <div className="font-sans text-xs font-semibold text-slate-300 bg-slate-800 px-2.5 py-1 rounded">
                    Area: {selectedProject.area}
                  </div>
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {selectedProject.title}
                </h3>

                <div className="flex items-center gap-2 text-xs text-slate-300 font-sans">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span>{selectedProject.location}</span>
                </div>

                <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href={`https://wa.me/918008654131?text=Hi%20PK%20Constructions,%20I%20saw%20${encodeURIComponent(selectedProject.title)}%20on%20your%20website%20gallery.%20Can%20we%20discuss%20a%20similar%20project?`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-heading w-full sm:w-auto flex-1 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-3 px-4 rounded-lg shadow-md transition-all tracking-wide"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Inquire About Similar Design</span>
                  </a>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="font-heading w-full sm:w-auto px-4 py-3 rounded-lg border border-slate-700 text-xs font-semibold text-slate-300 hover:text-white tracking-wide"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
