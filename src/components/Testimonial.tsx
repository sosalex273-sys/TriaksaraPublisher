"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { testimonials } from "@/data/testimonials";
import { Star, Quote, ChevronLeft, ChevronRight, MessageSquareQuote } from "lucide-react";

export const Testimonial = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", () => setSelectedIndex(emblaApi.selectedScrollSnap()));
  }, [emblaApi]);

  return (
    <section id="testimoni" className="relative py-16 md:py-24 lg:py-28 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white border-t border-slate-800">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[140px]" />
      </div>

      <div className="container relative mx-auto px-4 md:px-6 max-w-7xl z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-3 shadow-sm">
            <MessageSquareQuote className="w-4 h-4" />
            <span>Pengalaman Kolega Akademisi</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white font-jakarta tracking-tight mb-4 leading-tight">
            Apa Kata Dosen & Peneliti yang <span className="text-gradient">Telah Terbit?</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed">
            Lebih dari 1.350+ akademisi dari berbagai universitas di Indonesia telah membuktikan pendampingan tuntas Triaksara Publisher.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute -left-2 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-800/80 hover:bg-amber-500 hover:text-slate-950 border border-slate-700 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 shadow-xl"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute -right-2 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-800/80 hover:bg-amber-500 hover:text-slate-950 border border-slate-700 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 shadow-xl"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="overflow-hidden mx-4 md:mx-6" ref={emblaRef}>
            <div className="flex -ml-4">
              {testimonials.map((testi) => (
                <div
                  key={testi.id}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4"
                >
                  <div className="h-full rounded-3xl bg-slate-800/60 hover:bg-slate-800/90 border border-slate-700/70 hover:border-amber-500/40 p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 group relative overflow-hidden">
                    
                    {/* Quote Icon */}
                    <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-700 group-hover:text-amber-500/20 transition-colors duration-300" />

                    <div>
                      {/* Rating Stars */}
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(testi.rating || 5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>

                      {/* Content */}
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 italic relative z-10">
                        &ldquo;{testi.content}&rdquo;
                      </p>
                    </div>

                    {/* Author Info */}
                    <div className="pt-4 border-t border-slate-700/60 flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-500/40 shadow-md shrink-0 bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-bold text-sm">
                        {(testi as any).image ? (
                          <img
                            src={(testi as any).image}
                            alt={testi.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                              const parent = e.currentTarget.parentElement;
                              if (parent) {
                                parent.textContent = testi.name.charAt(0);
                              }
                            }}
                          />
                        ) : (
                          testi.name.charAt(0)
                        )}
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-xs sm:text-sm leading-tight">
                          {testi.name}
                        </h4>
                        <p className="text-[11px] text-amber-400 font-medium mt-0.5">
                          {testi.role || "Dosen & Peneliti"}
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === selectedIndex ? "w-8 bg-amber-500" : "w-2 bg-slate-700 hover:bg-slate-600"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
