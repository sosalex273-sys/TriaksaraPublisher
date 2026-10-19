"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { testimonials } from "@/data/testimonials";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

export const Testimonial = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 4500, stopOnInteraction: false })]
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
    <section className="relative py-16 md:py-28 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
      </div>

      <div className="container relative mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
            ⭐ Testimonial
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Apa Kata{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Mereka?
            </span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            Ribuan akademisi dan peneliti telah mempercayakan naskah mereka kepada kami.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute -left-2 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute -right-2 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="overflow-hidden mx-6 md:mx-8" ref={emblaRef}>
            <div className="flex -ml-4">
              {testimonials.map((testi) => (
                <div
                  key={testi.id}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4"
                >
                  <div className="h-full rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-400/30 p-7 flex flex-col gap-5 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 group relative overflow-hidden">
                    {/* Glow on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Quote Icon */}
                    <Quote className="absolute top-5 right-6 w-12 h-12 text-blue-400/10 group-hover:text-blue-400/20 transition-colors duration-300" />

                    {/* Stars */}
                    <div className="flex items-center gap-1">
                      {[...Array(testi.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-slate-300 text-sm leading-relaxed flex-1 italic relative z-10">
                      &ldquo;{testi.content}&rdquo;
                    </p>

                    {/* Divider */}
                    <div className="border-t border-white/10" />

                    {/* Profile */}
                    <div className="flex items-center gap-3 relative z-10">
                      <div className="relative">
                        <img
                          src={testi.image}
                          alt={testi.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-blue-400/40 shadow-md"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testi.name)}&background=1e40af&color=fff&size=150`;
                          }}
                        />
                        <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-slate-900" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm">{testi.name}</h4>
                        <p className="text-xs text-blue-300/80">{testi.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "w-8 bg-blue-400"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-14 grid grid-cols-3 gap-6 max-w-2xl mx-auto text-center">
          {[
            { value: "1000+", label: "Klien Puas" },
            { value: "4.9/5", label: "Rating Rata-rata" },
            { value: "98%", label: "Tingkat Kepuasan" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col gap-1">
              <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {stat.value}
              </span>
              <span className="text-xs text-slate-400">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
