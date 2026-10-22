"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Award, GraduationCap, Building2 } from "lucide-react";

export const AboutUs = () => {
  const pillars = [
    {
      title: "Integritas & Anti-Jurnal Predatori",
      desc: "Menolak jurnal abal-abal, menjamin setiap naskah terbit di jurnal yang terakreditasi resmi."
    },
    {
      title: "Perlindungan Hak Cipta & NDA",
      desc: "Orisinalitas data, ide riset, dan naskah Anda dilindungi perjanjian kerahasiaan hukum."
    },
    {
      title: "Editor BNSP & Reviewer Ph.D",
      desc: "Manuskrip Anda ditelaah oleh editor bersertifikat dan praktisi akademisi bergelar doktor."
    },
    {
      title: "Presisi Standar PAK/JAD & BKD",
      desc: "Publikasi diselaraskan dengan pedoman operasional penilaian angka kredit dosen terkini."
    }
  ];

  return (
    <section id="tentang-kami" className="py-16 md:py-24 lg:py-32 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Column: Image with Floating Badges */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-slate-200 dark:bg-slate-800 shadow-2xl border-4 border-white dark:border-slate-800">
              <img
                src="/images/diskusi.png"
                alt="Tim Diskusi Profesional Triaksara Publisher"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            </div>

            {/* Floating Experience Badge */}
            <motion.div 
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-2 sm:left-4 bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 flex items-center gap-3.5 z-20"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-black text-xl">
                8+
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">Tahun Pengalaman</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">Sejak 2018 di Yogyakarta</p>
              </div>
            </motion.div>

            {/* Floating Legal Badge */}
            <motion.div 
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-4 -right-2 sm:right-4 bg-white dark:bg-slate-900 px-4 py-2.5 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 flex items-center gap-2 z-20"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">NIB: 0304220013798</span>
            </motion.div>
          </motion.div>

          {/* Right Column: Text & Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs sm:text-sm font-semibold mb-4 border border-amber-500/20">
              <Building2 className="w-4 h-4" />
              <span>Mengenal Triaksara Publisher</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-jakarta text-slate-900 dark:text-white mb-5 leading-tight tracking-tight">
              Mendedikasikan Diri untuk <span className="text-gradient">Akselerasi & Integritas</span> Publikasi Ilmiah
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              Didirikan sejak 2018 dan beroperasi sebagai badan usaha resmi berbentuk CV dengan <b>NIB: 0304220013798</b>, <b>Triaksara Publisher</b> telah mendampingi ribuan akademisi menembus jurnal nasional terakreditasi dan internasional bereputasi. Kami hadir mengeliminasi kendala teknis penulisan, review berkepanjangan, hingga kekhawatiran jurnal predator.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {pillars.map((item, i) => (
                <div key={i} className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 shadow-sm flex flex-col justify-start">
                  <div className="flex items-center gap-2 mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-tight">{item.title}</h4>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 leading-relaxed pl-6">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
