"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { MessageCircle } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-12 md:py-24 bg-slate-900 relative overflow-hidden">
      {/* Dynamic Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-primary/20 to-slate-900 z-0" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/30 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold font-jakarta text-white mb-4 md:mb-6 leading-tight">
            Siap Menerbitkan Naskah Anda Hari Ini?
          </h2>
          <p className="text-sm md:text-xl text-white/90 mb-8 md:mb-10 max-w-2xl mx-auto">
            Konsultasikan kebutuhan publikasi Anda secara gratis dengan tim ahli kami. Kami siap memandu Anda langkah demi langkah.
          </p>
          
          <Button 
            size="lg" 
            className="bg-amber-600 hover:bg-amber-700 text-white rounded-full h-16 px-10 text-lg font-bold shadow-[0_0_40px_-10px_rgba(201,162,39,0.5)] hover:scale-105 transition-all duration-300 gap-3"
            onClick={() => window.open('https://wa.me/6289502733564', '_blank')}
          >
            <MessageCircle className="h-6 w-6" />
            Hubungi via WhatsApp
          </Button>
          
          <p className="text-sm text-slate-400 mt-6">
            Layanan Pelanggan 24/7. Respons cepat di jam kerja.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
