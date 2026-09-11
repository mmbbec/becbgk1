import React, { useState } from 'react';
import { 
  Building, 
  BookOpen, 
  Cpu, 
  Coffee, 
  Wifi, 
  Leaf, 
  Camera, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink,
  ShieldCheck,
  Zap,
  Maximize2
} from 'lucide-react';
import { FACILITIES_BENTO, GALLERY_ITEMS } from '../data/collegeData';
import { GalleryItem } from '../types';

export const CampusLifeSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Campus' | 'Labs' | 'Events' | 'Hostel' | 'Library'>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filteredGallery = GALLERY_ITEMS.filter(item => 
    selectedCategory === 'All' ? true : item.category === selectedCategory
  );

  const handleOpenLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const handleNextPhoto = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredGallery.length);
    }
  };

  const handlePrevPhoto = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + filteredGallery.length) % filteredGallery.length);
    }
  };

  return (
    <div id="campus-life-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* Header Banner */}
      <div className="bg-[#0D2440] text-white rounded-3xl p-8 sm:p-12 border border-[#C89B3C]/30 shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-3">
          <span className="px-3.5 py-1.5 rounded-full bg-[#C89B3C]/20 border border-[#C89B3C] text-xs font-mono font-bold text-[#C89B3C] uppercase tracking-wider">
            Student Life & Infrastructure
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Campus Life at BEC
          </h1>
          <p className="text-base text-slate-200 leading-relaxed font-normal">
            A vibrant, self-contained 93-acre residential academic sanctuary featuring modern hostels, central digital library, round-the-clock connectivity, and eco-friendly electric buggies.
          </p>
        </div>
      </div>

      {/* 10.1 Facilities Bento Grid */}
      <section id="facilities-bento-grid" className="space-y-4">
        <div>
          <h2 className="font-heading text-2xl font-bold text-[#0D2440]">
            World-Class Campus Amenities
          </h2>
          <p className="text-xs text-[#5C6B7A]">
            Comprehensive residential, intellectual, and athletic infrastructure supporting 3,500+ students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FACILITIES_BENTO.map((facility) => (
            <div
              key={facility.id}
              className="bg-white rounded-3xl border border-[#E6E2D8] overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col group"
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#0D2440]/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono font-bold text-[#C89B3C] uppercase tracking-wider">
                  {facility.tag}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-heading text-xl font-bold text-[#0D2440] group-hover:text-[#C89B3C] transition-colors">
                    {facility.title}
                  </h3>
                  <div className="text-xs font-mono text-[#2E7D5B] font-semibold mt-0.5">
                    {facility.subtitle}
                  </div>
                  <p className="text-xs text-[#5C6B7A] mt-2 leading-relaxed">
                    {facility.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E6E2D8] text-[11px] font-mono text-[#0D2440] font-semibold flex items-center justify-between">
                  <span>{facility.stats}</span>
                  <span className="text-[#C89B3C] text-xs">Explore →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10.2 Gallery (9-image masonry grid with lightbox) */}
      <section id="campus-gallery-section" className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="font-heading text-2xl font-bold text-[#0D2440]">
              Campus Visual Gallery
            </h2>
            <p className="text-xs text-[#5C6B7A]">
              Glimpses of academic life, laboratory discoveries, cultural celebrations, and campus flora.
            </p>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap gap-1.5 text-xs">
            {(['All', 'Campus', 'Labs', 'Events', 'Hostel', 'Library'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#0D2440] text-white shadow-xs font-semibold'
                    : 'bg-white border border-[#E6E2D8] text-[#5C6B7A] hover:text-[#0D2440]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 9-Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(idx)}
              className="bg-white rounded-2xl border border-[#E6E2D8] overflow-hidden shadow-xs hover:shadow-md cursor-pointer group transition-all"
            >
              <div className="h-56 relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-2.5 rounded-full bg-white/90 text-[#0D2440]">
                    <Maximize2 className="w-5 h-5" />
                  </span>
                </div>
                <span className="absolute bottom-2 left-2 px-2.5 py-0.5 rounded bg-black/60 backdrop-blur-md text-[10px] font-mono text-white">
                  {item.category}
                </span>
              </div>

              <div className="p-4">
                <h4 className="font-heading font-bold text-sm text-[#0D2440] group-hover:text-[#C89B3C] transition-colors">
                  {item.title}
                </h4>
                <p className="text-[11px] text-[#5C6B7A] mt-1 line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal (Section 10.2) */}
      {activeLightboxIndex !== null && (
        <div 
          id="gallery-lightbox-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in"
          onClick={(e) => {
            if (e.target === e.currentTarget) handleCloseLightbox();
          }}
        >
          <button
            onClick={handleCloseLightbox}
            className="absolute top-6 right-6 p-2 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
            title="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={handlePrevPhoto}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
            title="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNextPhoto}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
            title="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full flex flex-col items-center">
            <img
              src={filteredGallery[activeLightboxIndex].image}
              alt={filteredGallery[activeLightboxIndex].title}
              className="max-h-[75vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
            />
            <div className="mt-4 text-center text-white space-y-1">
              <span className="text-xs font-mono uppercase text-[#C89B3C] font-bold">
                {filteredGallery[activeLightboxIndex].category} · Photo {activeLightboxIndex + 1} of {filteredGallery.length}
              </span>
              <h3 className="font-heading text-lg sm:text-xl font-bold">
                {filteredGallery[activeLightboxIndex].title}
              </h3>
              <p className="text-xs text-slate-300 max-w-xl mx-auto">
                {filteredGallery[activeLightboxIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
