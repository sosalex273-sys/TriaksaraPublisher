"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BookOpen, 
  CheckCircle2, 
  Sparkles, 
  ArrowUpRight,
  UserCheck,
  Building2
} from "lucide-react";

interface PublishedArticle {
  id: number;
  title: string;
  journal: string;
  category: "sinta2" | "sinta3" | "sinta4" | "sinta5" | "global";
  categoryLabel: string;
  badgeStyle: string;
  status: string;
  authors: string;
  doi: string;
  link: string;
  institution?: string;
  highlights: string;
}

export const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const articles: PublishedArticle[] = [
    {
      id: 1,
      title: "Strategi UMKM Kuliner Dalam Aplikasi TikTok Shop: Pengaruh Kualitas Produk Dan Packaging Terhadap Kepuasan Pelanggan Generasi Z",
      journal: "Journal of Social and Economics Research (JSER)",
      category: "sinta5",
      categoryLabel: "SINTA 5",
      badgeStyle: "bg-orange-500/15 text-orange-400 border-orange-500/30",
      status: "Resmi Terbit & Ber-DOI",
      authors: "Kiemas Rafli Wirandra, Kenita Putri",
      doi: "10.54783/jser.v8i1.1429",
      link: "https://idm.or.id/JSER/index.php/JSER/article/view/1429",
      institution: "Ekonomi & Bisnis Digital",
      highlights: "Analisis Kuantitatif Regresi Berganda"
    },
    {
      id: 2,
      title: "Hubungan Kualitas Keterbukaan Informasi Publik Dengan Efektivitas Pemanfaatan Sistem Informasi Kelurahan (SIKel) di Kelurahan Lancirang",
      journal: "PAPATUNG: Jurnal Ilmu Administrasi Publik, Pemerintahan dan Politik",
      category: "sinta4",
      categoryLabel: "SINTA 4",
      badgeStyle: "bg-amber-500/15 text-amber-400 border-amber-500/30",
      status: "Resmi Terbit & Ber-DOI",
      authors: "Desty Kurnia Sari, Kamaruddin Sellang, Muhammad Ikbal",
      doi: "10.54783/japp.v9i2.1646",
      link: "https://ejournal.goacademica.com/index.php/japp/article/view/1646",
      institution: "Universitas Muhammadiyah Sidenreng Rappang",
      highlights: "Administrasi Publik & E-Government"
    },
    {
      id: 3,
      title: "Internalization of Ethics and Morals to Generate Quality and Integrity Elections in 2024",
      journal: "ENDLESS: International Journal of Future Studies",
      category: "global",
      categoryLabel: "Jurnal Internasional",
      badgeStyle: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
      status: "Terindeks Global",
      authors: "Mulawarman, Sudirman Djamaluddin, Tusriadi, Dea Rizky Amalia, Fauzan Hidayatullah",
      doi: "10.54783/endlessjournal.v8i3.359",
      link: "https://endless-journal.com/index.php/endless/article/view/359",
      institution: "Kolaborasi Multikampus & KPU",
      highlights: "International English Peer-Reviewed"
    },
    {
      id: 4,
      title: "Knowledge Ecosystem in Islamic Education: Integrating Religious Values, Innovation, and Perceived Institutional-Level Performance",
      journal: "Khazanah Pendidikan Islam (UIN Sunan Gunung Djati Bandung)",
      category: "sinta2",
      categoryLabel: "SINTA 2",
      badgeStyle: "bg-blue-500/15 text-blue-400 border-blue-500/30",
      status: "Akreditasi Nasional SINTA 2",
      authors: "Aep Tata Suryana",
      doi: "10.15575/kpi.v8i2.54432",
      link: "https://khazanah.uinsgd.ac.id/index.php/kp/article/view/54432",
      institution: "UIN Sunan Gunung Djati Bandung",
      highlights: "Structural Equation Modeling (PLS-SEM)"
    },
    {
      id: 5,
      title: "The Role of the Church as a Faith-Based Organization in Bringing About Social Change: A Case Study of GMIT in the Kampung Berseri CSR Program",
      journal: "INFLUENCE: International Journal of Science Review",
      category: "sinta4",
      categoryLabel: "SINTA 4",
      badgeStyle: "bg-amber-500/15 text-amber-400 border-amber-500/30",
      status: "Resmi Terbit & Ber-DOI",
      authors: "Nur Laili Zaihandini, Setyo Ariwibowo, Wikra Saputra, Daud Daffa Harkansas",
      doi: "10.54783/influencejournal.v8i3.317",
      link: "https://influence-journal.com/index.php/influence/article/view/317",
      institution: "PT Pertamina Patra Niaga AFT El Tari Kupang",
      highlights: "Corporate Social Responsibility (CSR) Study"
    },
    {
      id: 6,
      title: "Understanding Tax Engagement Challenges among Unstructured MSMEs: A Contextual Behavioral Perspective from Bali’s Tourism Economy",
      journal: "Jurnal Perpajakan dan Keuangan Publik (UIN SGD)",
      category: "sinta2",
      categoryLabel: "SINTA 2",
      badgeStyle: "bg-blue-500/15 text-blue-400 border-blue-500/30",
      status: "Akreditasi Nasional SINTA 2",
      authors: "Alifia Ainun Nisa, Agustin Fadjarenie, Ronny Andesto, Deden Tarmidi, Dyah Rizkyan Dewi",
      doi: "10.15575/jpkp.v5i1.57290",
      link: "https://journal.uinsgd.ac.id/index.php/jpkp/article/view/57290",
      institution: "Riset Ekonomi & Kebijakan Fiskal",
      highlights: "Thematic Analysis & Qualitative Empirical"
    },
    {
      id: 7,
      title: "Circular Economy in Agriculture: Integrating Technology for Sustainable Waste Management",
      journal: "International Journal of Science and Society (IJSOC)",
      category: "sinta3",
      categoryLabel: "SINTA 3",
      badgeStyle: "bg-teal-500/15 text-teal-400 border-teal-500/30",
      status: "Akreditasi SINTA 3",
      authors: "Edi Supriadi, Adi Zulkarnaen, Suryadi, Saparuddin, Abdullah Rasjid",
      doi: "10.54783/ijsoc.v7i4.1551",
      link: "https://ijsoc.goacademica.com/index.php/ijsoc/article/view/1551",
      institution: "Kolaborasi Riset Dosen Lintas Wilayah",
      highlights: "Sustainability & Green Technology"
    },
    {
      id: 8,
      title: "Implementasi Program Terapi Kenangan (Reminiscence Therapy) Dalam Meningkatkan Fungsi Kognitif Lansia di Panti Sosial Tresna Werdha",
      journal: "Journal of Community Service (JCS)",
      category: "sinta4",
      categoryLabel: "SINTA 4",
      badgeStyle: "bg-amber-500/15 text-amber-400 border-amber-500/30",
      status: "Pengabdian Masyarakat SINTA 4",
      authors: "Khayla Devitri Novezia, Restu Dwi Arianti, Effrina Yuricki",
      doi: "10.56670/jcs.v8i1.426",
      link: "https://idm.or.id/JCS/index.php/JCS/article/view/426",
      institution: "PSTW Budi Mulia 2 Cengkareng, Jakarta Barat",
      highlights: "Intervensi Preventif Psikososial"
    },
    {
      id: 9,
      title: "Analysis and Mitigation of Operational Risk in Goods Delivery at Lion Parcel Karawang Using the House of Risk Method",
      journal: "International Journal of Science and Society (IJSOC)",
      category: "sinta4",
      categoryLabel: "SINTA 4",
      badgeStyle: "bg-amber-500/15 text-amber-400 border-amber-500/30",
      status: "Resmi Terbit & Ber-DOI",
      authors: "Raihan Alif Al Fajri, Muhammad Ali Akbar, Bintang Nidia Kusuma",
      doi: "10.54783/ijsoc.v8i4.1687",
      link: "https://ijsoc.goacademica.com/index.php/ijsoc/article/view/1687",
      institution: "Institut Teknologi Wastukancana Purwakarta",
      highlights: "House of Risk (HOR) & Supply Chain"
    }
  ];

  const filterTabs = [
    { id: "all", label: "Semua Terbitan (9)" },
    { id: "sinta2", label: "SINTA 2 (2)" },
    { id: "sinta3", label: "SINTA 3 (1)" },
    { id: "sinta4", label: "SINTA 4 (4)" },
    { id: "sinta5", label: "SINTA 5 (1)" },
    { id: "global", label: "Internasional (1)" },
  ];

  const filteredArticles = activeFilter === "all"
    ? articles
    : articles.filter(a => a.category === activeFilter);

  return (
    <section id="portofolio" className="py-16 md:py-24 lg:py-28 bg-gradient-to-b from-slate-950 via-slate-900/60 to-slate-950 text-white relative overflow-hidden border-t border-slate-800/80">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container relative mx-auto px-4 md:px-6 max-w-7xl z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-400 font-semibold text-xs sm:text-sm mb-3 border border-amber-500/20 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Portofolio & Rekam Jejak Terbit Nyata</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-jakarta text-white tracking-tight mb-4"
          >
            Karya Ilmiah yang Telah <span className="text-gradient">Resmi Terpublikasi</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed"
          >
            Bukti nyata dedikasi kami dalam mendampingi naskah akademisi, dosen, dan peneliti hingga resmi terbit ber-ISSN, memiliki tautan DOI terdaftar, dan dapat diakses langsung pada portal jurnal (OJS).
          </motion.p>
        </div>

        {/* Category Tabs Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-10 sm:mb-12">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                  isActive
                    ? "bg-amber-500 text-slate-950 border-amber-400 shadow-md shadow-amber-500/20 scale-105"
                    : "bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Portfolio Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          <AnimatePresence>
            {filteredArticles.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="bg-slate-900/85 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-slate-800 hover:border-amber-500/50 shadow-xl hover:shadow-amber-500/5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle top edge glow */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent group-hover:via-amber-500/50 transition-all" />

                <div>
                  {/* Top Status & Accreditation Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3.5">
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border ${item.badgeStyle}`}>
                      {item.categoryLabel}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span>{item.status}</span>
                    </span>
                  </div>

                  {/* Journal Name Banner */}
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mb-3.5 flex items-center gap-2.5">
                    <BookOpen className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="text-xs font-semibold text-slate-200 line-clamp-1">
                      {item.journal}
                    </span>
                  </div>

                  {/* Article Title */}
                  <h3 className="text-sm sm:text-base font-bold text-white font-jakarta leading-snug mb-3 group-hover:text-amber-400 transition-colors line-clamp-3">
                    {item.title}
                  </h3>

                  {/* Research Focus / Highlights Tag */}
                  <div className="mb-3.5">
                    <span className="text-[11px] font-medium text-slate-400 bg-slate-800/60 px-2.5 py-1 rounded-md border border-slate-700/60 inline-block">
                      🏷️ {item.highlights}
                    </span>
                  </div>

                  {/* Authors Info */}
                  <div className="text-xs text-slate-300 mb-2 flex items-start gap-1.5">
                    <UserCheck className="w-3.5 h-3.5 text-amber-400/80 shrink-0 mt-0.5" />
                    <span className="line-clamp-2">
                      <strong className="text-slate-400 font-normal">Penulis:</strong> {item.authors}
                    </span>
                  </div>

                  {/* Institution if available */}
                  {item.institution && (
                    <div className="text-[11px] text-slate-400 mb-3 flex items-start gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{item.institution}</span>
                    </div>
                  )}

                  {/* DOI badge */}
                  <div className="text-[11px] font-mono text-slate-400 bg-slate-950/50 px-2 py-1 rounded border border-slate-800/60 mb-4 truncate">
                    <span className="text-amber-400/80 font-bold">DOI:</span> {item.doi}
                  </div>
                </div>

                {/* Bottom Direct Link Action Button */}
                <div className="pt-3.5 border-t border-slate-800/80">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/90 hover:bg-amber-500 text-slate-200 hover:text-slate-950 text-xs font-bold transition-all duration-200 shadow border border-slate-700/80 hover:border-amber-400 group/btn"
                  >
                    <span>Buka Publikasi di OJS Resmi</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Trust Assurance Bar */}
        <div className="mt-14 p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-center max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            🔍 Seluruh artikel di atas adalah <strong className="text-white">manuskrip nyata yang telah terbit resmi</strong> dan dapat diverifikasi langsung melalui portal OJS masing-masing jurnal terakreditasi Kemendikbudristek & pengindeks global.
          </p>
        </div>

      </div>
    </section>
  );
};
