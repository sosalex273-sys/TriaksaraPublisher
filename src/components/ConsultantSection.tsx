"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Award, CheckCircle2, MessageCircle, ShieldCheck, UserCheck, FileCheck, Users, Clock } from "lucide-react";

export const ConsultantSection = () => {
  return (
    <section id="konsultan" className="relative py-14 sm:py-20 md:py-32 overflow-hidden border-y border-slate-800/80">
      {/* Background Image: Gedung Kantor Pusat (Disesuaikan khusus mobile agar logo & arsitektur gedung tetap presisi & megah) */}
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat bg-[53%_14%] sm:bg-[53%_22%] md:bg-[center_35%] transition-all duration-500"
        style={{ backgroundImage: "url('/images/gedung.png')" }}
      />
      {/* Responsive Overlays & Vignette for Maximum Clarity & Depth */}
      <div className="absolute inset-0 bg-slate-950/60 sm:bg-slate-950/45 md:bg-slate-950/30 backdrop-blur-[0.5px] md:backdrop-blur-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/50 to-slate-950 sm:via-slate-950/30 md:from-slate-950/75 md:via-transparent md:to-slate-950/85" />
      
      {/* Ambient Radial Glow to Highlight Center Architecture */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-amber-500/15 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none" />

      <div className="container relative mx-auto px-4 md:px-6 lg:px-8 z-10 max-w-6xl">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 text-amber-400 text-xs sm:text-sm font-semibold mb-3 sm:mb-4 border border-amber-500/30 shadow-inner backdrop-blur-md"
          >
            <UserCheck className="w-4 h-4 text-amber-400" />
            <span>Kantor Pusat & Pendampingan 1-on-1 Resmi</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-jakarta text-white tracking-tight mb-3 sm:mb-5 leading-snug"
          >
            Didampingi Langsung oleh <span className="text-amber-400">Konsultan & Tim Ahli Resmi</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xs sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto"
          >
            Naskah Anda tidak dibiarkan begitu saja. Tim konsultan, editor, dan reviewer profesional kami siap membedah, menyelaraskan kaidah penulisan ilmiah, hingga mengawal artikel Anda sampai status <b className="text-white">Accepted & Published</b>.
          </motion.p>
        </div>

        {/* Content Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-12">
          
          {/* Card 1: Legalitas & Kredibilitas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-5 sm:p-8 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-slate-800 shadow-xl hover:border-amber-500/40 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="p-3 rounded-xl bg-amber-500/15 text-amber-400 border border-amber-500/20">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Keamanan & Legalitas</span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    Berbadan Hukum & Transparan
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Layanan resmi berbadan hukum jelas (PT/CV), dilengkapi perjanjian kerjasama (MoU), faktur resmi, dan jaminan kerahasiaan penuh atas seluruh data naskah riset Anda.
              </p>

              <div className="space-y-3 pt-2 border-t border-slate-800/80">
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <FileCheck className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Surat Perjanjian Kerjasama (MoU) & Invoice Resmi</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Jaminan Kerahasiaan Data Naskah 100%</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <Users className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Konsultasi Awal Gratis Bersama Konsultan Ahli</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Garansi & Komitmen Layanan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-5 sm:p-8 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-slate-800 shadow-xl hover:border-amber-500/40 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Komitmen Layanan</span>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      Garansi Asistensi Penuh
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hidden sm:inline-block">
                  100% Terbimbing
                </span>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Proses publikasi dikawal langsung dari tahap pengecekan kesesuaian scope jurnal, formatting, proofreading, hingga LoA (Letter of Acceptance) resmi diterbitkan.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 border-t border-slate-800/80">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-sm font-medium text-slate-200">Asistensi Sampai Terbit</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-sm font-medium text-slate-200">Tracking Real-Time</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-sm font-medium text-slate-200">Bedah & Turnitin Check</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-sm font-medium text-slate-200">Administrasi & LoA Lengkap</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center"
        >
          <Button 
            size="lg" 
            className="w-full sm:w-auto rounded-full px-8 h-12 text-sm font-bold bg-amber-500 hover:bg-amber-600 text-slate-950 shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 transition-transform hover:scale-105"
            onClick={() => window.open('https://wa.me/6281528476713', '_blank')}
          >
            <MessageCircle className="w-4 h-4" />
            Hubungi Konsultan Sekarang
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="w-full sm:w-auto rounded-full px-8 h-12 text-sm font-semibold border-slate-700 text-slate-200 hover:bg-slate-800/80 hover:text-white"
            onClick={() => document.getElementById('layanan')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Pelajari Paket Publikasi
          </Button>
        </motion.div>

      </div>
    </section>
  );
};
