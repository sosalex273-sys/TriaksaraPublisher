"use client";

import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { testimonials } from "@/data/testimonials";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export const Testimonial = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 5000, stopOnInteraction: false })
  ]);

  return (
    <section className="py-12 md:py-24 lg:py-32 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold font-jakarta text-slate-900 mb-4">
            Apa Kata Mereka?
          </h2>
          <p className="text-sm md:text-lg text-slate-600">
            Ribuan klien telah mempercayakan naskah mereka kepada kami.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {testimonials.map((testi) => (
                <div key={testi.id} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4">
                  <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow bg-white">
                    <CardContent className="p-8 relative">
                      <Quote className="absolute top-6 right-8 text-primary/10 h-16 w-16" />
                      <div className="flex items-center gap-1 mb-6 text-yellow-400">
                        {[...Array(testi.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-current" />
                        ))}
                      </div>
                      <p className="text-slate-700 mb-8 relative z-10 leading-relaxed italic">
                        "{testi.content}"
                      </p>
                      <div className="flex items-center gap-4">
                        <img 
                          src={testi.image} 
                          alt={testi.name} 
                          className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                        />
                        <div>
                          <h4 className="font-bold text-slate-900 font-jakarta">{testi.name}</h4>
                          <p className="text-sm text-slate-500">{testi.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
