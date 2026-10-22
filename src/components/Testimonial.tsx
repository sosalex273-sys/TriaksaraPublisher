"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials, TestimonialItem } from "@/data/testimonials";
import { 
  Star, 
  Quote, 
  CheckCircle2, 
  Award, 
  BookOpen, 
  ShieldCheck, 
  Sparkles, 
  Building2, 
  ChevronLeft, 
  ChevronRight,
  GraduationCap,
  BadgeCheck
} from "lucide-react";

export const Testimonial = () => {
  const [activeCategory, setActiveCategory] = useState<"all" | "scopus" | "buku" | "hki">("all");
  const [selectedId, setSelectedId] = useState<number>(1);

  // Filtered list based on active category
  const filteredTestimonials = activeCategory === "all" 
    ? testimonials 
    : testimonials.filter((t) => t.category === activeCategory);

  // Currently spotlighted testimonial
  const currentSpotlight: TestimonialItem = 
    testimonials.find((t) => t.id === selectedId) || testimonials[0];

  const handlePrev = () => {
    const currentIndex = filteredTestimonials.findIndex((t) => t.id === currentSpotlight.id);
    const prevIndex = (currentIndex - 1 + filteredTestimonials.length) % filteredTestimonials.length;
    setSelectedId(filteredTestimonials[prevIndex].id);
  };

  const handleNext = () => {
    const currentIndex = filteredTestimonials.findIndex((t) => t.id === currentSpotlight.id);
    const nextIndex = (currentIndex + 1) % filteredTestimonials.length;
    setSelectedId(filteredTestimonials[nextIndex].id);
  };

  const getBadgeStyle = (category: string) => {
    switch (category) {
      case "scopus":
        return "bg-emerald-500/15 text-emerald-400 border-emerald-500/30";
      case "hki":
        return "bg-blue-500/15 text-blue-400 border-blue-500/30";
      case "buku":
        return "bg-amber-500/15 text-amber-400 border-amber-500/30";
      default:
        return "bg-slate-700/50 text-slate-300 border-slate-600";
    }
  };

  return (
    <section id="testimoni" className="relative py-20 md:py-28 overflow-hidden bg-slate-950 text-white border-t border-slate-800/80">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.12),rgba(255,255,255,0))] pointer-events-none" />

      <div className="container relative mx-auto px-4 md:px-6 lg:px-8 max-w-7xl z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 text-amber-400 text-xs sm:text-sm font-semibold mb-4 border border-amber-500/30 shadow-inner"
          >
            <GraduationCap className="w-4 h-4 text-amber-400" />
            <span>Kisah Sukses Publikasi & Hak Cipta</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-jakarta text-white tracking-tight mb-4 leading-tight"
          >
            Dipercaya Oleh <span className="text-amber-400">Dosen, Peneliti & Guru Besar</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed"
          >
            Lebih dari 1.350+ akademisi dari berbagai perguruan tinggi negeri maupun swasta telah membuktikan pendampingan tuntas Triaksara Publisher.
          </motion.p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {[
            { id: "all", label: "Semua Pengalaman", icon: Sparkles },
            { id: "scopus", label: "Jurnal Scopus & WoS", icon: Award },
            { id: "buku", label: "Buku Ber-ISBN", icon: BookOpen },
            { id: "hki", label: "Pengurusan HKI", icon: ShieldCheck },
          ].map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id as any);
                  const firstInCat = cat.id === "all" 
                    ? testimonials[0] 
                    : testimonials.find(t => t.category === cat.id);
                  if (firstInCat) setSelectedId(firstInCat.id);
                }}
                className={`flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                  isActive
                    ? "bg-amber-500 text-slate-950 border-amber-400 shadow-lg shadow-amber-500/25 scale-105"
                    : "bg-slate-900/90 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isActive ? "text-slate-950" : "text-amber-400"}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* SPOTLIGHT HERO CARD (Featured Testimonial Showcase) */}
        <div className="mb-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSpotlight.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-950/90 border border-slate-800 shadow-2xl p-6 sm:p-8 md:p-12 overflow-hidden"
            >
              {/* Decorative Large Background Quote */}
              <Quote className="absolute top-6 right-8 w-24 h-24 md:w-36 md:h-36 text-slate-800/40 pointer-events-none -rotate-12" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                
                {/* Author Profile Column */}
                <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left border-b lg:border-b-0 lg:border-r border-slate-800/80 pb-6 lg:pb-0 lg:pr-8">
                  
                  <div className="relative mb-4">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-amber-500/50 shadow-2xl bg-slate-800">
                      <img 
                        src={currentSpotlight.image} 
                        alt={currentSpotlight.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-amber-500 text-slate-950 p-1.5 rounded-full shadow-lg">
                      <BadgeCheck className="w-4 h-4 fill-slate-950 text-amber-400" />
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 mb-2">
                    {[...Array(currentSpotlight.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-xs font-bold text-amber-400 ml-1">5.0 / 5.0</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                    {currentSpotlight.name}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-amber-400 font-medium mb-1">
                    {currentSpotlight.role}
                  </p>

                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-4">
                    <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{currentSpotlight.institution}</span>
                  </div>

                  {/* Achievement Pill */}
                  <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold border ${getBadgeStyle(currentSpotlight.category)}`}>
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{currentSpotlight.badge}</span>
                  </div>
                </div>

                {/* Quote & Review Column */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    {/* Highlight Tag */}
                    <div className="inline-block px-3 py-1 rounded-lg bg-amber-500/10 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4 border border-amber-500/20">
                      &quot;{currentSpotlight.highlight}&quot;
                    </div>

                    <p className="text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed font-normal mb-8 italic">
                      &ldquo;{currentSpotlight.content}&rdquo;
                    </p>
                  </div>

                  {/* Navigation & Counter */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="font-semibold text-white">
                        {filteredTestimonials.findIndex(t => t.id === currentSpotlight.id) + 1}
                      </span>
                      <span>/</span>
                      <span>{filteredTestimonials.length} Kisah Sukses</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={handlePrev}
                        className="w-10 h-10 rounded-full bg-slate-800 hover:bg-amber-500 hover:text-slate-950 border border-slate-700 flex items-center justify-center text-white transition-all shadow-md active:scale-95"
                        aria-label="Previous story"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={handleNext}
                        className="w-10 h-10 rounded-full bg-slate-800 hover:bg-amber-500 hover:text-slate-950 border border-slate-700 flex items-center justify-center text-white transition-all shadow-md active:scale-95"
                        aria-label="Next story"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* HORIZONTAL RESEARCHER CARDS SELECTOR */}
        <div className="space-y-4">
          <div className="flex items-center justify-between px-1">
            <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <span>Pilih Peneliti Lainnya</span>
              <span className="text-xs font-normal text-slate-400">(Klik kartu untuk melihat detail)</span>
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredTestimonials.slice(0, 8).map((item) => {
              const isSelected = item.id === currentSpotlight.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  className={`cursor-pointer p-4 rounded-2xl transition-all duration-300 relative flex flex-col justify-between border ${
                    isSelected
                      ? "bg-slate-800/90 border-amber-500 shadow-lg shadow-amber-500/10 scale-[1.02]"
                      : "bg-slate-900/60 border-slate-800/80 hover:bg-slate-800/50 hover:border-slate-700"
                  }`}
                >
                  <div>
                    {/* Top Status & Rating */}
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${getBadgeStyle(item.category)}`}>
                        {item.badge}
                      </span>
                      <div className="flex items-center gap-0.5">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        <span className="text-[11px] font-semibold text-slate-300">5.0</span>
                      </div>
                    </div>

                    {/* Short Snippet */}
                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-4 italic">
                      &quot;{item.content}&quot;
                    </p>
                  </div>

                  {/* Author Meta */}
                  <div className="flex items-center gap-3 pt-3 border-t border-slate-800/80">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-9 h-9 rounded-full object-cover border border-amber-500/40 shrink-0" 
                    />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold text-white truncate">
                        {item.name}
                      </p>
                      <p className="text-[10px] text-slate-400 truncate">
                        {item.institution}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Trust Metrics Bar */}
        <div className="mt-16 pt-10 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-black text-amber-400 font-jakarta">1.350+</div>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">Dosen & Peneliti Terbantu</p>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-white font-jakarta">4.9 / 5.0</div>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">Skor Kepuasan Klien</p>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-amber-400 font-jakarta">50+</div>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">Perguruan Tinggi Mitra</p>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-white font-jakarta">100%</div>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">Legalitas & MoU Resmi</p>
          </div>
        </div>

      </div>
    </section>
  );
};
