"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BookOpen, 
  Globe, 
  Sparkles, 
  ArrowUpRight,
  CheckCircle2,
  Award,
  BookmarkCheck,
  GraduationCap,
  ShieldCheck
} from "lucide-react";

interface TestimonialArticle {
  id: number;
  badgeLabel: string;
  badgeColor: string;
  congratsTitle: string;
  journalName: string;
  articleSnippet: string;
  category: "all" | "sinta2" | "sinta3" | "sinta4" | "sinta5" | "global";
  link: string;
  iconType: "globe" | "book" | "medal" | "grad";
  doi: string;
}

export const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const articles: TestimonialArticle[] = [
    {
      id: 1,
      badgeLabel: "SINTA 5",
      badgeColor: "bg-orange-500/15 text-orange-400 border-orange-500/30",
      congratsTitle: "Selamat atas TERBITNYA Artikel di JURNAL SINTA 5",
      journalName: "Journal of Social and Economics Research (JSER)",
      articleSnippet: "Strategi UMKM Kuliner Dalam Aplikasi TikTok Shop: Pengaruh Kualitas Produk & Packaging",
      category: "sinta5",
      link: "https://idm.or.id/JSER/index.php/JSER/article/view/1429",
      iconType: "book",
      doi: "10.54783/jser.v8i1.1429"
    },
    {
      id: 2,
      badgeLabel: "SINTA 4",
      badgeColor: "bg-amber-500/15 text-amber-400 border-amber-500/30",
      congratsTitle: "Selamat atas TERBITNYA Artikel di JURNAL SINTA 4",
      journalName: "PAPATUNG: Jurnal Administrasi Publik, Pemerintahan & Politik",
      articleSnippet: "Hubungan Kualitas Keterbukaan Informasi Publik Dengan Efektivitas Sistem SIKel",
      category: "sinta4",
      link: "https://ejournal.goacademica.com/index.php/japp/article/view/1646",
      iconType: "medal",
      doi: "10.54783/japp.v9i2.1646"
    },
    {
      id: 3,
      badgeLabel: "Internasional",
      badgeColor: "bg-purple-500/15 text-purple-400 border-purple-500/30",
      congratsTitle: "Selamat atas TERBITNYA Artikel di JURNAL INTERNASIONAL TERINDEKS GLOBAL",
      journalName: "ENDLESS: International Journal of Future Studies",
      articleSnippet: "Internalization of Ethics and Morals to Generate Quality and Integrity Elections in 2024",
      category: "global",
      link: "https://endless-journal.com/index.php/endless/article/view/359",
      iconType: "globe",
      doi: "10.54783/endlessjournal.v8i3.359"
    },
    {
      id: 4,
      badgeLabel: "SINTA 2",
      badgeColor: "bg-blue-500/15 text-blue-400 border-blue-500/30",
      congratsTitle: "Selamat utk Kolega Kami atas TERBITNYA Artikel di JURNAL SINTA 2",
      journalName: "Khazanah Pendidikan Islam (UIN Sunan Gunung Djati Bandung)",
      articleSnippet: "Knowledge Ecosystem in Islamic Education: Integrating Religious Values & Innovation",
      category: "sinta2",
      link: "https://khazanah.uinsgd.ac.id/index.php/kp/article/view/54432",
      iconType: "grad",
      doi: "10.15575/kpi.v8i2.54432"
    },
    {
      id: 5,
      badgeLabel: "SINTA 4",
      badgeColor: "bg-amber-500/15 text-amber-400 border-amber-500/30",
      congratsTitle: "Selamat atas TERBITNYA Artikel di JURNAL SINTA 4",
      journalName: "INFLUENCE: International Journal of Science Review",
      articleSnippet: "The Role of Church as Faith-Based Organization in CSR Program PT Pertamina Patra Niaga",
      category: "sinta4",
      link: "https://influence-journal.com/index.php/influence/article/view/317",
      iconType: "medal",
      doi: "10.54783/influencejournal.v8i3.317"
    },
    {
      id: 6,
      badgeLabel: "SINTA 2",
      badgeColor: "bg-blue-500/15 text-blue-400 border-blue-500/30",
      congratsTitle: "Selamat atas TERBITNYA Artikel di JURNAL SINTA 2",
      journalName: "Jurnal Perpajakan dan Keuangan Publik (UIN SGD)",
      articleSnippet: "Understanding Tax Engagement Challenges among Unstructured MSMEs in Bali's Economy",
      category: "sinta2",
      link: "https://journal.uinsgd.ac.id/index.php/jpkp/article/view/57290",
      iconType: "grad",
      doi: "10.15575/jpkp.v5i1.57290"
    },
    {
      id: 7,
      badgeLabel: "SINTA 3",
      badgeColor: "bg-teal-500/15 text-teal-400 border-teal-500/30",
      congratsTitle: "Selamat atas TERBITNYA Artikel di JURNAL SINTA 3",
      journalName: "International Journal of Science and Society (IJSOC)",
      articleSnippet: "Circular Economy in Agriculture: Integrating Technology for Sustainable Waste Management",
      category: "sinta3",
      link: "https://ijsoc.goacademica.com/index.php/ijsoc/article/view/1551",
      iconType: "book",
      doi: "10.54783/ijsoc.v7i4.1551"
    },
    {
      id: 8,
      badgeLabel: "SINTA 4",
      badgeColor: "bg-amber-500/15 text-amber-400 border-amber-500/30",
      congratsTitle: "Selamat atas TERBITNYA Artikel di JURNAL SINTA 4",
      journalName: "Journal of Community Service (JCS)",
      articleSnippet: "Implementasi Program Terapi Kenangan (Reminiscence) Dalam Fungsi Kognitif Lansia PSTW",
      category: "sinta4",
      link: "https://idm.or.id/JCS/index.php/JCS/article/view/426",
      iconType: "medal",
      doi: "10.56670/jcs.v8i1.426"
    },
    {
      id: 9,
      badgeLabel: "SINTA 4",
      badgeColor: "bg-amber-500/15 text-amber-400 border-amber-500/30",
      congratsTitle: "Selamat atas TERBITNYA Artikel di JURNAL SINTA 4",
      journalName: "International Journal of Science and Society (IJSOC)",
      articleSnippet: "Analysis & Mitigation of Operational Risk in Goods Delivery at Lion Parcel Karawang",
      category: "sinta4",
      link: "https://ijsoc.goacademica.com/index.php/ijsoc/article/view/1687",
      iconType: "medal",
      doi: "10.54783/ijsoc.v8i4.1687"
    }
  ];

  const filterTabs = [
    { id: "all", label: "Semua (9)" },
    { id: "sinta2", label: "SINTA 2 (2)" },
    { id: "sinta3", label: "SINTA 3 (1)" },
    { id: "sinta4", label: "SINTA 4 (4)" },
    { id: "sinta5", label: "SINTA 5 (1)" },
    { id: "global", label: "Internasional (1)" },
  ];

  const filteredArticles = activeFilter === "all"
    ? articles
    : articles.filter(a => a.category === activeFilter);

  const getIcon = (type: string) => {
    switch (type) {
      case "globe":
        return <Globe className="w-8 h-8 text-purple-400" />;
      case "book":
        return <BookOpen className="w-8 h-8 text-teal-400" />;
      case "grad":
        return <GraduationCap className="w-8 h-8 text-blue-400" />;
      default:
        return <Award className="w-8 h-8 text-amber-400" />;
    }
  };

  return (
    <section id="portofolio" className="py-16 md:py-24 lg:py-28 bg-gradient-to-b from-slate-950 via-slate-900/70 to-slate-950 text-white relative overflow-hidden border-t border-slate-800/80">
      {/* Ambient Radial Lights */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container relative mx-auto px-4 md:px-6 max-w-7xl z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-400 font-semibold text-xs sm:text-sm mb-3 border border-amber-500/20 shadow-sm backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Bukti Riil & Rekam Jejak Publikasi Resmi</span>
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
            Apresiasi dan bukti nyata keberhasilan pendampingan naskah dosen, akademisi, dan peneliti mitra kami hingga terbit resmi ber-ISSN & ber-DOI di portal jurnal nasional dan internasional.
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
                    ? "bg-amber-500 text-slate-950 border-amber-400 shadow-md shadow-amber-500/25 scale-105"
                    : "bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Certificate / Showcase Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6"
        >
          <AnimatePresence>
            {filteredArticles.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="rounded-3xl bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-slate-950/95 border border-slate-800/90 hover:border-amber-500/50 shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 flex flex-col justify-between group overflow-hidden relative"
              >
                {/* Gold Highlight Line on Top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent group-hover:via-amber-400 transition-all duration-300" />

                {/* CARD BODY (UPPER SECTION) */}
                <div className="p-5 sm:p-6 pb-4">
                  
                  {/* Top Bar: Badge & Triaksara Stamp */}
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border shadow-sm ${item.badgeColor}`}>
                      {item.badgeLabel}
                    </span>

                    {/* Brand Authentic Tag */}
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/25 text-[10px] font-bold tracking-wider uppercase font-mono">
                      <span>TRIAKSARA PUBLISHER</span>
                    </span>
                  </div>

                  {/* Center Emblem Visual Display */}
                  <div className="flex flex-col items-center text-center my-4">
                    {/* Glowing Icon Seal */}
                    <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-slate-800/70 border border-slate-700/80 shadow-inner flex items-center justify-center mb-3 group-hover:scale-105 group-hover:border-amber-500/40 transition-all duration-300 relative">
                      <div className="absolute inset-0 rounded-2xl bg-amber-500/5 blur-sm group-hover:bg-amber-500/10 transition-colors" />
                      <div className="relative z-10">
                        {getIcon(item.iconType)}
                      </div>
                    </div>

                    {/* Official Verified Status */}
                    <div className="text-xs font-black uppercase tracking-widest text-white mb-0.5 font-jakarta">
                      TERBIT & TERINDEKS
                    </div>
                    <div className="text-[11px] font-medium text-amber-400/90 mb-3 font-mono">
                      Official Verified Publication
                    </div>

                    {/* Verification Badges Bar */}
                    <div className="flex items-center justify-center gap-3 pt-2 text-[11px] text-slate-400 border-t border-slate-800/60 w-full">
                      <span className="inline-flex items-center gap-1 text-emerald-400">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Peer-Reviewed</span>
                      </span>
                      <span className="text-slate-600">•</span>
                      <span className="inline-flex items-center gap-1 text-amber-400">
                        <BookmarkCheck className="w-3.5 h-3.5" />
                        <span>Online OJS</span>
                      </span>
                    </div>
                  </div>

                </div>

                {/* CARD FOOTER (ANNOUNCEMENT & ACTION BUTTON) */}
                <div className="p-5 sm:p-6 pt-4 bg-slate-950/80 border-t border-slate-800/80 flex flex-col justify-between flex-grow">
                  <div>
                    {/* Official Congrats Announcement Headline */}
                    <h3 className="text-sm font-bold text-white font-jakarta leading-snug mb-2 group-hover:text-amber-400 transition-colors line-clamp-2">
                      {item.congratsTitle}
                    </h3>

                    {/* Journal Title Details */}
                    <p className="text-[11px] text-slate-400 font-medium line-clamp-1 mb-1">
                      📚 <span className="text-slate-300">{item.journalName}</span>
                    </p>

                    {/* Article Snippet */}
                    <p className="text-[11px] text-slate-400/80 italic line-clamp-2 mb-4 leading-relaxed">
                      &quot;{item.articleSnippet}&quot;
                    </p>
                  </div>

                  {/* High Impact Gold/Amber Button */}
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 shadow-lg shadow-amber-500/20 active:scale-[0.98] transition-all duration-200 group/btn"
                  >
                    <span>Lihat Artikel Jurnal</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-950 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Trust Guarantee Footnote */}
        <div className="mt-14 p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 text-center max-w-3xl mx-auto backdrop-blur-sm">
          <div className="flex items-center justify-center gap-2 mb-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <h4 className="text-sm font-bold text-white">Transparansi & Bukti Nyata Terpublikasi</h4>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Seluruh kartu publikasi di atas merupakan naskah ilmiah binaan <strong className="text-white">Triaksara Publisher</strong> yang telah lulus proses review dan resmi terbit di portal OJS jurnal terkait ber-ISSN & ber-DOI aktif.
          </p>
        </div>

      </div>
    </section>
  );
};
