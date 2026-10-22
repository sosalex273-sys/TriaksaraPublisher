"use client";

import { motion } from "framer-motion";
import { BookOpen, ExternalLink, Award, FileText } from "lucide-react";

export const Portfolio = () => {
  const portfolios = [
    { 
      title: "Jurnal Teknologi Informasi & Rekayasa Komputasi", 
      scope: "Scopus Q2", 
      indexing: "Elsevier & Scimago",
      badgeColor: "bg-amber-500 text-slate-950",
      status: "Published with DOI",
      author: "Dosen Teknik Informatika (PTN Jawa Tengah)"
    },
    { 
      title: "Jurnal Kebijakan Publik & Transformasi Sosial", 
      scope: "SINTA 2", 
      indexing: "Kemendikbudristek",
      badgeColor: "bg-blue-500 text-white",
      status: "Terakreditasi SINTA",
      author: "Kandidat Doktor Ilmu Administrasi"
    },
    { 
      title: "Jurnal Riset Manajemen Kesehatan & Epidemiologi", 
      scope: "SINTA 1", 
      indexing: "Garuda & Moraref",
      badgeColor: "bg-teal-500 text-white",
      status: "Akreditasi Unggul",
      author: "Dosen Fakultas Kedokteran (PTN Jakarta)"
    },
    { 
      title: "Buku Referensi: Metodologi Penelitian Multidisiplin", 
      scope: "ISBN & HKI", 
      indexing: "Perpusnas RI & DJKI",
      badgeColor: "bg-purple-500 text-white",
      status: "Hak Cipta Terdaftar",
      author: "Tim Kolaborasi Dosen Lektor Kepala"
    }
  ];

  return (
    <section id="portofolio" className="py-16 md:py-24 lg:py-28 bg-slate-900/40 dark:bg-slate-950 border-t border-slate-200/60 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold text-xs sm:text-sm mb-3 border border-amber-500/20"
          >
            <BookOpen className="w-4 h-4" />
            <span>Portofolio & Rekam Jejak Terbit</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-jakarta text-slate-900 dark:text-white tracking-tight mb-4"
          >
            Karya Ilmiah yang Telah <span className="text-gradient">Resmi Terpublikasi</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
          >
            Bukti nyata keberhasilan kami dalam mengantarkan naskah penelitian dosen dan mahasiswa menuju jurnal nasional terakreditasi serta jurnal internasional bereputasi.
          </motion.p>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolios.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-slate-900/90 rounded-3xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800 shadow-lg hover:border-amber-500/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${item.badgeColor} shadow-sm`}>
                    {item.scope}
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md">
                    {item.status}
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 mb-5 flex items-center justify-center min-h-[90px]">
                  <FileText className="w-8 h-8 text-amber-500/70 group-hover:scale-110 transition-transform duration-300" />
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-jakarta leading-snug mb-2 group-hover:text-amber-500 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                  Indeks: <span className="font-semibold text-slate-700 dark:text-slate-300">{item.indexing}</span>
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
                <p className="text-[11px] text-slate-400 leading-tight">
                  Klien: <span className="font-medium text-slate-600 dark:text-slate-300">{item.author}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
