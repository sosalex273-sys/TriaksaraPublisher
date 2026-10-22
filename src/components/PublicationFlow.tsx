"use client";

import { motion } from "framer-motion";
import { FileSearch, PenTool, Send, CheckCircle2, Award, GitBranch } from "lucide-react";

export const PublicationFlow = () => {
  const steps = [
    { 
      number: "01",
      icon: FileSearch, 
      title: "Analisis & Cek Turnitin", 
      desc: "Evaluasi kesesuaian ruang lingkup (scope) naskah dan pemeriksaan similarity index bebas plagiasi." 
    },
    { 
      number: "02",
      icon: PenTool, 
      title: "Format & Proofreading", 
      desc: "Penyelarasan gaya selingkung (template) jurnal dan perbaikan tata bahasa baku oleh editor ahli." 
    },
    { 
      number: "03",
      icon: Send, 
      title: "Submit ke Sistem Jurnal", 
      desc: "Pengiriman resmi melalui sistem OJS / Editorial Manager jurnal target yang telah disepakati." 
    },
    { 
      number: "04",
      icon: CheckCircle2, 
      title: "Pendampingan Revisi", 
      desc: "Penyusunan tanggapan reviewer (Response to Reviewers) secara presisi hingga mendapat lampu hijau." 
    },
    { 
      number: "05",
      icon: Award, 
      title: "LoA Resmi & Terbit Ber-DOI", 
      desc: "Penerbitan Letter of Acceptance (LoA) resmi dan artikel terbit online dengan DOI terverifikasi." 
    }
  ];

  return (
    <section className="py-16 md:py-24 lg:py-28 bg-slate-900/40 dark:bg-slate-950 border-t border-slate-200/60 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold text-xs sm:text-sm mb-3 border border-amber-500/20"
          >
            <GitBranch className="w-4 h-4" />
            <span>Alur Pendampingan Terstruktur</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-jakarta text-slate-900 dark:text-white tracking-tight mb-4"
          >
            Alur Publikasi Ilmiah <span className="text-gradient">Cepat & Transparan</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
          >
            Kami menyederhanakan alur birokrasi publikasi menjadi 5 tahapan praktis, transparan, dan dapat dipantau setiap saat.
          </motion.p>
        </div>

        {/* Stepper Grid Container */}
        <div className="relative">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-1/2 left-[5%] right-[5%] h-0.5 bg-gradient-to-r from-amber-500/20 via-amber-500 to-amber-500/20 -translate-y-8 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-900/90 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-lg hover:border-amber-500/40 transition-all duration-300 flex flex-col items-center text-center group"
                >
                  {/* Step Number & Icon */}
                  <div className="relative mb-5">
                    <div className="w-16 h-16 rounded-2xl bg-amber-500/10 dark:bg-slate-800 text-amber-500 dark:text-amber-400 flex items-center justify-center border-2 border-amber-500/30 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors duration-300 shadow-md">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full bg-amber-500 text-slate-950 font-black text-[10px] shadow-sm">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg mb-2 font-jakarta leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
