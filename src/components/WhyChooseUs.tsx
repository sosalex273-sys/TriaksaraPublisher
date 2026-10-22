"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap, ShieldAlert, FileSpreadsheet, Sparkles } from "lucide-react";

export const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: "Garansi LoA Resmi & Terbit Tuntas",
      description: "Kami tidak melepas naskah Anda setelah submit. Pendampingan dikawal hingga artikel resmi terbit online, ber-ISSN, dan terdaftar ber-DOI."
    },
    {
      icon: GraduationCap,
      title: "Reviewer Ph.D & Native Proofreader",
      description: "Manuskrip Anda ditelaah oleh akademisi bergelar doktor (S3) serta proofreader penutur asli untuk memenuhi standar mutu reviewer global."
    },
    {
      icon: ShieldAlert,
      title: "Turnitin & AI Detection Guarantee",
      description: "Naskah diuji orisinalitasnya dengan Turnitin resmi no-repository, memastikan similarity index selalu berada di bawah ambang batas (< 15%)."
    },
    {
      icon: FileSpreadsheet,
      title: "Kelengkapan Dokumen SPJ Hibah",
      description: "Menyediakan invoice resmi berbadan hukum dan kuitansi ber-NPWP yang valid untuk pelaporan SPJ dana riset (BIMA, LPDP, BOPTN, dll)."
    }
  ];

  return (
    <section id="keunggulan" className="py-16 md:py-24 lg:py-28 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold text-xs sm:text-sm mb-3 border border-amber-500/20"
          >
            <Sparkles className="w-4 h-4" />
            <span>Standar Keunggulan Triaksara</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-jakarta text-slate-900 dark:text-white tracking-tight mb-4"
          >
            Mengapa Akademisi Memilih <span className="text-gradient">Triaksara Publisher?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
          >
            Kami memberikan solusi kepastian hukum, mutu substansi artikel ilmiah, dan transparansi proses tanpa janji palsu.
          </motion.p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 dark:bg-slate-800/60 rounded-3xl p-7 border border-slate-200/80 dark:border-slate-700/80 hover:border-amber-500/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between group"
              >
                <div>
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-500 dark:text-amber-400 mb-6 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 font-jakarta leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
