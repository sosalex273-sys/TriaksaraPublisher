"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Award, ShieldCheck, CheckCircle2 } from "lucide-react";

export const CTA = () => {
  const waLink = "https://wa.me/6281528476713";

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-slate-950 z-0" />
      {/* Ambient Glows */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-amber-500/15 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-500/10 text-amber-400 mb-6 shadow-lg mx-auto border border-amber-500/20">
            <Award className="w-8 h-8" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-jakarta text-white mb-5 leading-tight tracking-tight">
            Naskah Anda Layak Terbit.<br className="hidden sm:block" />
            <span className="text-amber-400">Mulai Hari Ini, Bersama Kami.</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
            Ratusan akademisi telah mempercayakan manuskrip mereka kepada Triaksara Publisher dan berhasil terbit. Konsultasi pertama Anda <strong className="text-white">100% Gratis</strong> dan tanpa komitmen.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-slate-950 hover:bg-slate-900 text-white font-bold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-xl shadow-slate-950/25 text-sm"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Konsultasi Gratis via WhatsApp</span>
            </a>
            <a
              href="/produk"
              className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold px-7 py-4 rounded-full transition-all hover:scale-105 border border-slate-700 text-sm"
            >
              <span>Lihat Semua Paket</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs sm:text-sm text-slate-400 font-medium">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              Berbadan Hukum Resmi
            </span>
            <span className="hidden sm:block text-slate-700">•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              Garansi LoA Resmi
            </span>
            <span className="hidden sm:block text-slate-700">•</span>
            <span className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-400" />
              1.350+ Akademisi Sukses
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
