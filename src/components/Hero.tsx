"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, CheckCircle2, Star, BookOpen, GraduationCap, Award } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative pt-24 pb-12 md:pt-40 md:pb-32 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/40 to-blue-500/20 blur-[100px] rounded-full mix-blend-multiply dark:mix-blend-screen" />
      </div>

      <div className="container relative mx-auto px-4 md:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs sm:text-sm font-semibold mb-6 border border-amber-500/20 shadow-sm"
            >
              <Star className="h-4 w-4 fill-amber-500 text-amber-500 shrink-0" />
              <span>Mitra Strategis Publikasi Ilmiah & Karir Akademik Terpercaya</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-jakarta text-slate-900 dark:text-white tracking-tight leading-[1.2] md:leading-[1.15] mb-4 md:mb-6"
            >
              Wujudkan <span className="text-gradient">Publikasi Ilmiah Bereputasi</span>, Raih Puncak Karir Akademik Anda.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed"
            >
              Pendampingan komprehensif bagi <b className="text-slate-900 dark:text-white">Dosen, Peneliti, dan Mahasiswa</b> dalam penulisan, review, hingga terbit di jurnal terakreditasi <b className="text-amber-600 dark:text-amber-400">SINTA 1–6, Scopus, dan WoS</b>. Aman, transparan, dan terpercaya untuk pemenuhan Angka Kredit (PAK/JAD).
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4"
            >
              <Button size="lg" className="w-full sm:w-auto rounded-full px-6 md:px-8 h-12 md:h-14 text-sm md:text-base font-bold gap-2 shadow-lg shadow-amber-500/25 bg-amber-500 hover:bg-amber-600 text-slate-950 transition-all hover:scale-105" onClick={() => window.open('https://wa.me/6281528476713', '_blank')}>
                Konsultasi Gratis Sekarang
                <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-6 md:px-8 h-12 md:h-14 text-sm md:text-base border-slate-300 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 bg-white/50 dark:bg-slate-900/50 text-slate-800 dark:text-slate-200 font-semibold" onClick={() => document.getElementById('layanan')?.scrollIntoView({ behavior: 'smooth' })}>
                Jelajahi Layanan
              </Button>
            </motion.div>
          </div>

          {/* Right Column: Academic Publication Tracker Showcase */}
          <div className="relative w-full max-w-lg lg:max-w-none mx-auto mt-10 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Ambient Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-blue-600/20 rounded-3xl blur-2xl opacity-75" />

              {/* Main Card */}
              <div className="relative bg-white/95 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
                
                {/* Card Header */}
                <div className="flex items-center justify-between pb-5 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 dark:text-amber-400 flex items-center justify-center font-bold">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">Track Record Publikasi</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Monitoring Naskah Real-Time</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    ACCEPTED
                  </span>
                </div>

                {/* Stepper Alur */}
                <div className="py-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">1. Analisis & Cek Plagiarisme</span>
                        <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">Turnitin &lt; 15%</span>
                      </div>
                      <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full mt-1.5 overflow-hidden">
                        <div className="bg-emerald-500 h-full w-full rounded-full" />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">2. Review & Standarisasi Penulisan</span>
                        <span className="text-[11px] font-bold text-amber-500">Editor Berpengalaman</span>
                      </div>
                      <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full mt-1.5 overflow-hidden">
                        <div className="bg-amber-500 h-full w-full rounded-full" />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-amber-500/15 text-amber-500 flex items-center justify-center shrink-0">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">3. Submit ke Jurnal Bereputasi</span>
                        <span className="text-[11px] font-bold text-amber-500">SINTA 1–6 / Scopus</span>
                      </div>
                      <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full mt-1.5 overflow-hidden">
                        <div className="bg-amber-500 h-full w-[85%] rounded-full animate-pulse" />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0">
                      <Award className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">4. LoA Resmi & Penerbitan Artikel</span>
                        <span className="text-[11px] font-bold text-blue-500">Garansi Terbit</span>
                      </div>
                      <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full mt-1.5 overflow-hidden">
                        <div className="bg-blue-500 h-full w-full rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer Metrics */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-100 dark:border-slate-800 text-center">
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60">
                    <p className="text-base sm:text-lg font-black text-amber-500">1200+</p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Artikel Terbit</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60">
                    <p className="text-base sm:text-lg font-black text-emerald-500">99.4%</p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Acceptance</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60">
                    <p className="text-base sm:text-lg font-black text-blue-500">100%</p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Legalitas Resmi</p>
                  </div>
                </div>

              </div>

              {/* Floating Mini Badge 1 */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="hidden sm:flex absolute -top-4 -right-4 bg-amber-500 text-slate-950 px-4 py-2 rounded-2xl shadow-xl font-bold text-xs items-center gap-2"
              >
                <Award className="w-4 h-4" />
                <span>Konsultasi 100% Gratis</span>
              </motion.div>

              {/* Floating Mini Badge 2 */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
                className="hidden sm:flex absolute -bottom-4 -left-4 bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-4 py-2 rounded-2xl shadow-xl font-bold text-xs items-center gap-2 border border-slate-700"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Didampingi Sampai Publish</span>
              </motion.div>

            </motion.div>
          </div>
          
        </div>

        {/* Badge 6: Indexed By (Floating at bottom across grid) */}
        <div className="mt-12 md:mt-16 w-full max-w-5xl mx-auto block">
           <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="bg-white/95 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl md:rounded-full shadow-lg border border-slate-200/80 dark:border-slate-800/80 px-5 md:px-7 py-3.5 md:py-4 flex flex-nowrap items-center justify-between gap-x-6 overflow-x-auto no-scrollbar"
           >
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest shrink-0 mr-2">Indexed by:</span>
              <span className="text-[#0284c7] dark:text-[#38bdf8] font-black text-lg shrink-0">sinta</span>
              <span className="text-red-600 font-black text-lg shrink-0 italic">GARUDA</span>
              <span className="text-blue-800 dark:text-blue-400 font-black text-lg shrink-0">EBSCO</span>
              <span className="text-orange-500 font-black text-lg shrink-0">Scopus</span>
              <span className="text-blue-500 font-black text-lg shrink-0">Google Scholar</span>
              <span className="text-slate-800 dark:text-slate-200 font-black text-lg shrink-0">Dimensions</span>
              <span className="text-teal-600 dark:text-teal-400 font-black text-lg shrink-0">Crossref</span>
              <span className="text-red-500 font-black text-lg shrink-0">DOAJ</span>
           </motion.div>
        </div>
      </div>
    </section>
  );
};
