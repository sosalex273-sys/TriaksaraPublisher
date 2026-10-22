"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, GraduationCap, Globe } from "lucide-react";

export const Services = () => {
  const waLink = "https://wa.me/6281528476713";

  return (
    <section id="layanan" className="py-16 md:py-24 lg:py-28 bg-slate-900/60 dark:bg-slate-950 text-white relative overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 font-semibold text-xs sm:text-sm mb-3.5 border border-amber-500/20 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <span>Ekosistem Layanan Publikasi & Karir Akademik</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl font-bold font-jakarta text-white tracking-tight mb-4"
          >
            Satu Solusi Untuk <span className="text-gradient">Semua Kebutuhan Riset Anda</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed"
          >
            Pilih jalur pendampingan yang tepat untuk akselerasi syarat kelulusan, angka kredit dosen (PAK/JAD), hingga rekognisi internasional bereputasi tinggi.
          </motion.p>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* TILE 1: Flagship Scopus & WoS Hub (Span 2 Kolom di Desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 relative rounded-3xl p-7 sm:p-9 bg-gradient-to-br from-slate-800/90 via-slate-900 to-slate-950 border border-slate-700/80 shadow-2xl overflow-hidden group hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Visual Glass Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-amber-500/15 via-blue-500/10 to-transparent rounded-bl-full pointer-events-none -z-0" />

            <div className="relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500 text-slate-950 shadow-md">
                  ★ Flagship Program
                </span>
                <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Fast-Track 2026 Dibuka
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-jakarta mb-3 leading-tight">
                Publikasi Jurnal Internasional Bereputasi <span className="text-amber-400">(Scopus & WoS)</span>
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 max-w-2xl">
                Layanan pendampingan naskah kasta tertinggi bagi Dosen & Mahasiswa S3/Doktoral. Ditangani langsung oleh tim editor native speaker dan pakar bidang riset untuk menembus jurnal Scopus Q1–Q4 serta Clarivate Analytics (WoS).
              </p>

              {/* Feature Highlights Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 border-y border-slate-800 mb-6">
                <div className="p-3 rounded-2xl bg-slate-800/60 border border-slate-700/50">
                  <p className="text-xs text-slate-400 mb-0.5">Tier Target</p>
                  <p className="text-sm sm:text-base font-bold text-amber-400">Q1, Q2, Q3, Q4</p>
                </div>
                <div className="p-3 rounded-2xl bg-slate-800/60 border border-slate-700/50">
                  <p className="text-xs text-slate-400 mb-0.5">Bahasa</p>
                  <p className="text-sm sm:text-base font-bold text-white">Native Proofread</p>
                </div>
                <div className="p-3 rounded-2xl bg-slate-800/60 border border-slate-700/50">
                  <p className="text-xs text-slate-400 mb-0.5">Revisi Reviewer</p>
                  <p className="text-sm sm:text-base font-bold text-white">Dibimbing Tuntas</p>
                </div>
                <div className="p-3 rounded-2xl bg-slate-800/60 border border-slate-700/50">
                  <p className="text-xs text-slate-400 mb-0.5">Acceptance</p>
                  <p className="text-sm sm:text-base font-bold text-emerald-400">99.4% Sukses</p>
                </div>
              </div>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
              <div className="flex items-center gap-4 text-xs text-slate-400">
                <span>Terindeks di:</span>
                <span className="font-bold text-white">Scopus</span>
                <span>•</span>
                <span className="font-bold text-white">Web of Science</span>
                <span>•</span>
                <span className="font-bold text-white">EBSCO</span>
              </div>
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition-all hover:scale-105"
              >
                <span>Konsultasikan Scopus</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* TILE 2: SINTA Fast-Track Hub (1 Kolom) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-3xl p-7 bg-slate-800/80 border border-slate-700/80 shadow-xl flex flex-col justify-between group hover:border-amber-500/40 transition-all duration-300 relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  Akreditasi Nasional
                </span>
                <span className="text-xl font-black text-amber-400">SINTA 1–6</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white font-jakarta mb-2.5">
                Publikasi Jurnal Nasional SINTA
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Rekomendasi utama untuk luaran skripsi, tesis, dan syarat kenaikan jabatan fungsional Asisten Ahli hingga Lektor.
              </p>

              {/* Checklist Bento */}
              <div className="space-y-2.5 mb-8">
                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span>Uji Plagiasi Turnitin Resmi (&lt; 15%)</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span>Penyesuaian Template & Gaya Selingkung</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span>Garansi Letter of Acceptance (LoA) Resmi</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span>Tracking Progress Transparan</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-700/60">
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-bold text-xs sm:text-sm transition-colors"
              >
                <span>Pilih Slot SINTA 1–6</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* TILE 3: Copernicus & Global Citation (1 Kolom) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="rounded-3xl p-7 bg-slate-800/80 border border-slate-700/80 shadow-xl flex flex-col justify-between group hover:border-amber-500/40 transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-500/10 text-teal-400 border border-teal-500/20">
                  Jurnal Internasional
                </span>
                <span className="text-xs font-bold text-slate-400">ICI & EBSCO</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white font-jakarta mb-2.5">
                Copernicus, EBSCO & DOAJ
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Tingkatkan indexasi global dan sitasi artikel ilmiah Anda di pangkalan data terakreditasi internasional dengan biaya terjangkau.
              </p>

              <div className="space-y-2.5 mb-8">
                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <span className="text-teal-400 font-bold">✓</span>
                  <span>Terdaftar di Index Copernicus Master List</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <span className="text-teal-400 font-bold">✓</span>
                  <span>EBSCO Host Research Database</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <span className="text-teal-400 font-bold">✓</span>
                  <span>Translasi & Academic Grammar Check</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <span className="text-teal-400 font-bold">✓</span>
                  <span>Penerbitan Cepat & Sertifikat Publikasi</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-700/60">
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-bold text-xs sm:text-sm transition-colors"
              >
                <span>Publikasi Internasional Terindeks</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* TILE 4: Career & JAD Roadmap (Span 2 Kolom di Desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 rounded-3xl p-7 sm:p-9 bg-gradient-to-r from-slate-900 via-slate-850 to-slate-800 border border-slate-700/80 shadow-2xl flex flex-col justify-between group hover:border-blue-500/40 transition-all duration-300"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  🎓 Akselerasi Dosen & Peneliti
                </span>
                <span className="text-xs text-slate-400 font-medium">Pemenuhan BKD & PAK</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white font-jakarta mb-3">
                Klinik Karir & Pemenuhan Angka Kredit <span className="text-blue-400">(JAD/PAK)</span>
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-6 max-w-2xl">
                Bimbingan terpadu pemenuhan Angka Kredit Kumulatif dan konversi publikasi untuk percepatan kenaikan jabatan fungsional akademik dari jenjang awal hingga Profesor.
              </p>

              {/* Career Milestone Steps */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 border-t border-slate-800 mb-6">
                <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700 flex flex-col">
                  <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Tahap 1</span>
                  <span className="font-bold text-white text-sm sm:text-base mt-1">Asisten Ahli</span>
                  <span className="text-[11px] text-slate-400 mt-1">SINTA 3–6 / Prosiding</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700 flex flex-col">
                  <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest">Tahap 2</span>
                  <span className="font-bold text-white text-sm sm:text-base mt-1">Lektor</span>
                  <span className="text-[11px] text-slate-400 mt-1">SINTA 1–2 / WoS</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700 flex flex-col">
                  <span className="text-[10px] font-black text-purple-400 uppercase tracking-widest">Tahap 3</span>
                  <span className="font-bold text-white text-sm sm:text-base mt-1">Lektor Kepala</span>
                  <span className="text-[11px] text-slate-400 mt-1">Scopus Q3–Q4 / First Author</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700 flex flex-col">
                  <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Tahap 4</span>
                  <span className="font-bold text-white text-sm sm:text-base mt-1">Guru Besar</span>
                  <span className="text-[11px] text-slate-400 mt-1">Scopus Q1–Q2 Bereputasi</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
              <span className="text-xs text-slate-400">
                Didampingi oleh asesor dan praktisi perguruan tinggi berpengalaman.
              </span>
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm transition-colors shadow-lg shadow-blue-600/20"
              >
                <span>Konsultasikan Kenaikan Pangkat</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
