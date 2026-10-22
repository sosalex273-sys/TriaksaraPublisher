"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles, MessageCircle, ShieldCheck, Award, Zap } from "lucide-react";

// Highly detailed SVG Component for the Gold Badge
const GoldBadge = ({ topText, bottomText, iconType }: { topText: string, bottomText: string, iconType: string }) => {
  return (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24 drop-shadow-xl hover:scale-105 transition-transform duration-300 shrink-0">
      <defs>
        {/* Gradients to simulate 3D gold rim */}
        <linearGradient id="goldOuter" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d4af37" />
          <stop offset="30%" stopColor="#fff7a1" />
          <stop offset="50%" stopColor="#d4af37" />
          <stop offset="80%" stopColor="#8a631c" />
          <stop offset="100%" stopColor="#d4af37" />
        </linearGradient>
        
        {/* Subtle dark gradient for the large center area */}
        <radialGradient id="blackCenter" cx="50%" cy="50%" r="50%" fx="40%" fy="40%">
          <stop offset="0%" stopColor="#333" />
          <stop offset="60%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </radialGradient>

        {/* Text Paths inside the black circle */}
        <path id="topPath" d="M 17 50 A 33 33 0 0 1 83 50" fill="transparent" />
        <path id="bottomPath" d="M 23 50 A 27 27 0 0 0 77 50" fill="transparent" />
      </defs>

      {/* Main Base (Outer Coin Rim) */}
      <circle cx="50" cy="50" r="48" fill="url(#goldOuter)" stroke="#fff4a3" strokeWidth="0.5" />
      
      {/* Large Inner Black Circle */}
      <circle cx="50" cy="50" r="44" fill="url(#blackCenter)" stroke="#6b4c10" strokeWidth="1" />

      {/* Delicate Gold Laurels inside the black circle */}
      <g fill="none" stroke="url(#goldOuter)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M 14 60 C 8 45 16 30 25 21" />
        <path d="M 13 52 L 10 50 M 11.5 45 L 8.5 43 M 12 38 L 9 36 M 14 31 L 11 29 M 17 25 L 14 23" />
        <path d="M 14.5 53 L 17.5 52 M 13.5 46 L 16.5 45 M 14.5 39 L 17.5 38 M 16 32 L 19 31 M 19 26 L 22 25" />

        <path d="M 86 60 C 92 45 84 30 75 21" />
        <path d="M 87 52 L 90 50 M 88.5 45 L 91.5 43 M 88 38 L 91 36 M 86 31 L 89 29 M 83 25 L 86 23" />
        <path d="M 85.5 53 L 82.5 52 M 86.5 46 L 83.5 45 M 85.5 39 L 82.5 38 M 84 32 L 81 31 M 81 26 L 78 25" />
      </g>

      {/* Circular Texts */}
      <text fill="url(#goldOuter)" fontSize="7" fontWeight="800" letterSpacing="1.2" fontFamily="Montserrat, system-ui, sans-serif">
        <textPath href="#topPath" startOffset="50%" textAnchor="middle">
          {topText}
        </textPath>
      </text>
      <text fill="url(#goldOuter)" fontSize="5.5" fontWeight="700" letterSpacing="1.5" fontFamily="Montserrat, system-ui, sans-serif">
        <textPath href="#bottomPath" startOffset="50%" textAnchor="middle">
          {bottomText}
        </textPath>
      </text>

      {/* Center Icons */}
      <g transform="translate(50, 50)">
        {iconType === 'sinta' && (
          <g transform="scale(0.85) translate(0, 0)">
            <path 
              d="
                M 12,-15 
                C -5,-20 -20,-5 -22,8 
                C -23,12 -18,14 -15,11 
                C -20,16 -18,20 -13,18 
                C -15,22 -12,24 -8,21 
                C -10,25 -5,27 -2,25
                C 5,20 12,10 12,0
                C 12,-6 5,-12 0,-8
                C -2,-6 0,2 6,2
                C 18,2 25,-15 12,-15
                Z
              " 
              fill="url(#goldOuter)" 
            />
            <path d="M -14,1 Q -9,6 -4,0" fill="none" stroke="#222" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M -10,29 C 0,33 15,33 22,25" fill="none" stroke="url(#goldOuter)" strokeWidth="3" strokeLinecap="round" />
            <path d="M -5,35 C 5,37 15,35 20,30" fill="none" stroke="url(#goldOuter)" strokeWidth="2" strokeLinecap="round" />
          </g>
        )}
        {iconType === 'copernicus' && (
          <g stroke="url(#goldOuter)" strokeWidth="2.5" fill="none" transform="scale(0.85) translate(0, 0)">
            <circle cx="0" cy="0" r="16" />
            <ellipse cx="0" cy="0" rx="6" ry="16" />
            <ellipse cx="0" cy="0" rx="16" ry="5" />
            <path d="M -16 0 L 16 0 M 0 -16 L 0 16" />
          </g>
        )}
        {iconType === 'ebsco' && (
          <g transform="scale(1) translate(0, 0)">
            <ellipse cx="0" cy="0" rx="22" ry="10" fill="url(#goldOuter)" />
            <text x="0" y="3" fill="#111" fontSize="10" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" textAnchor="middle" letterSpacing="0">
              EBSCO
            </text>
          </g>
        )}
        {iconType === 'scopus' && (
          <g transform="scale(1) translate(0, -2)">
            <text x="-1" y="6" fill="url(#goldOuter)" fontSize="16" fontWeight="800" fontFamily="'Times New Roman', Times, serif" textAnchor="middle" letterSpacing="-0.5">
              Scopus
            </text>
            <text x="21" y="-3" fill="url(#goldOuter)" fontSize="5" fontWeight="bold" fontFamily="system-ui, sans-serif">
              ®
            </text>
          </g>
        )}
      </g>
    </svg>
  );
};

const products = [
  {
    id: 1,
    title: "Jurnal Nasional SINTA",
    subtitle: "SINTA 1 hingga SINTA 6",
    level: "Akreditasi Nasional",
    targetAudience: "Syarat BKD, Lektor & Lulus S2",
    description: "Pendampingan publikasi bergaransi di jurnal terakreditasi resmi Kemendikbudristek untuk pemenuhan Angka Kredit PAK & BKD dosen.",
    badgeTop: "SINTA",
    badgeBottom: "INDEXED",
    badgeIcon: "sinta",
    isPopular: true,
    tag: "🔥 Paling Populer",
    features: [
      "Pemeriksaan Plagiasi Turnitin & Resepsi Template",
      "Asistensi Format Sesuai Author Guidelines OJS",
      "Garansi LoA Resmi Terbit Tepat Waktu",
      "Laporan Status Naskah Berkala"
    ]
  },
  {
    id: 4,
    title: "Jurnal Internasional Scopus",
    subtitle: "Scopus Q1, Q2, Q3 & Q4",
    level: "Internasional Bereputasi Tinggi",
    targetAudience: "Syarat Kelulusan S3 & Guru Besar",
    description: "Layanan flagship pengawalan artikel ilmiah ke jurnal bereputasi tinggi Scopus Elsevier hingga terbit di pangkalan data resmi.",
    badgeTop: "SCOPUS",
    badgeBottom: "INDEXED",
    badgeIcon: "scopus",
    isPopular: false,
    tag: "👑 Bereputasi Tinggi",
    features: [
      "Proofreading Mendalam Native English Speaker",
      "Bimbingan Jawaban & Revisi Respon Reviewer",
      "Pengecekan Scope & Diskontinu Scopus Database",
      "Garansi Indexing Terbit di Scopus.com"
    ]
  },
  {
    id: 2,
    title: "Jurnal Internasional Copernicus",
    subtitle: "Index Copernicus International (ICI)",
    level: "Internasional Terindeks",
    targetAudience: "Syarat Tesis S2 & Portofolio Global",
    description: "Pilihan tepat dan efisien untuk luaran riset pascasarjana, diseminasi karya ilmiah, dan penguatan portofolio publikasi internasional.",
    badgeTop: "COPERNICUS",
    badgeBottom: "INDEXED",
    badgeIcon: "copernicus",
    isPopular: false,
    tag: "Proses Cepat & Terarah",
    features: [
      "Terdaftar di Index Copernicus Master List (ICV)",
      "Bimbingan Peer-Review & Layout Standar Internasional",
      "Tracking Naskah Real-Time dari Submit hingga LoA",
      "Sertifikat Publikasi & Link Online Jurnal"
    ]
  },
  {
    id: 3,
    title: "Jurnal Internasional EBSCO",
    subtitle: "EBSCO Host Database",
    level: "Basis Data Global",
    targetAudience: "Sitasi & Rekam Jejak Internasional",
    description: "Tingkatkan sitasi dan visibilitas riset Anda di database akademik dunia EBSCO Host untuk eksposur karir akademik global.",
    badgeTop: "EBSCO",
    badgeBottom: "INDEXED",
    badgeIcon: "ebsco",
    isPopular: false,
    tag: "Visibilitas Luas",
    features: [
      "Translasi Akademik & Proofreading Menyeluruh",
      "Standarisasi Metodologi & Format Penulisan IMRAD",
      "Sertifikat & Kelengkapan Administrasi Publikasi",
      "Indexing di EBSCO Discovery Service"
    ]
  }
];

export const Products = () => {
  const [filter, setFilter] = useState<"all" | "nasional" | "internasional">("all");

  const filteredProducts = products.filter(p => {
    if (filter === "nasional") return p.badgeIcon === "sinta";
    if (filter === "internasional") return p.badgeIcon !== "sinta";
    return true;
  });

  return (
    <section id="produk" className="relative py-20 md:py-28 bg-slate-950 text-white overflow-hidden border-t border-slate-800/80">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container relative mx-auto px-4 md:px-6 max-w-7xl z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 text-amber-400 font-semibold text-xs sm:text-sm mb-4 border border-amber-500/30 shadow-inner"
          >
            <Award className="w-4 h-4 text-amber-400" />
            <span>Pilihan Indeksasi Publikasi Riset</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-jakarta text-white tracking-tight mb-4 leading-tight"
          >
            Paket Publikasi Berdasarkan <span className="text-amber-400">Target Indeksasi</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed"
          >
            Sesuaikan manuskrip Anda dengan target luaran penelitian, syarat kelulusan magister/doktoral, maupun syarat khusus kenaikan jabatan fungsional dosen (Lektor Kepala & Guru Besar).
          </motion.p>

          {/* Quick Filter Buttons */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 mt-8">
            {[
              { id: "all", label: "Semua Target Indeksasi" },
              { id: "nasional", label: "Jurnal Nasional (SINTA)" },
              { id: "internasional", label: "Jurnal Internasional (Scopus/Copernicus/EBSCO)" }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all border ${
                  filter === tab.id
                    ? "bg-amber-500 text-slate-950 border-amber-400 shadow-lg shadow-amber-500/20"
                    : "bg-slate-900/80 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* NEW CARD MATRIX LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {filteredProducts.map((product, index) => {
            const isFeatured = product.isPopular;

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 group ${
                  isFeatured
                    ? "bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border-2 border-amber-500 shadow-2xl shadow-amber-500/15 ring-1 ring-amber-500/30 lg:-translate-y-2"
                    : "bg-slate-900/70 backdrop-blur-md border border-slate-800 hover:border-amber-500/50 hover:bg-slate-900/90 shadow-xl hover:-translate-y-1"
                }`}
              >
                {/* Featured Badge Ribbon */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-black text-[11px] uppercase tracking-wider shadow-lg shadow-amber-500/40">
                      <Zap className="w-3.5 h-3.5 fill-slate-950" />
                      Paling Populer
                    </span>
                  </div>
                )}

                <div>
                  {/* Top Header: Badge & Category Tag */}
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div>
                      <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/20 mb-2">
                        {product.level}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-white font-jakarta leading-snug">
                        {product.title}
                      </h3>
                      <p className="text-xs text-amber-300/90 font-medium mt-0.5">
                        {product.subtitle}
                      </p>
                    </div>

                    {/* Gold Medallion with subtle glow */}
                    <div className="shrink-0 relative">
                      <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                      <GoldBadge 
                        topText={product.badgeTop} 
                        bottomText={product.badgeBottom} 
                        iconType={product.badgeIcon} 
                      />
                    </div>
                  </div>

                  {/* Target Audience Pill */}
                  <div className="mb-4 p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-[11px] font-semibold text-slate-200 leading-tight">
                      {product.targetAudience}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="pt-4 border-t border-slate-800 space-y-2.5 mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Fasilitas Layanan:
                    </span>
                    {product.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span className="leading-tight">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Area */}
                <div className="pt-4 border-t border-slate-800/80 space-y-2.5">
                  <a
                    href={`/produk#${product.badgeIcon}`}
                    className={`inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                      isFeatured
                        ? "bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/25"
                        : "bg-slate-800/80 hover:bg-amber-500 hover:text-slate-950 text-slate-200 border border-slate-700/80"
                    }`}
                  >
                    <span>Pelajari Paket Lengkap</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href={`https://wa.me/6281528476713?text=Halo%20Admin%20Triaksara,%20saya%20tertarik%20dengan%20paket%20${encodeURIComponent(product.title)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 w-full py-2 text-xs font-semibold text-slate-400 hover:text-amber-400 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Konsultasi Cepat via WhatsApp</span>
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-amber-500/15 text-amber-400 border border-amber-500/20 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white">
                Bingung Menentukan Indeksasi yang Cocok untuk Manuskrip Anda?
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Kirimkan judul atau abstrak naskah Anda. Tim editor kami akan menganalisis scope dan memberikan rekomendasi indeksasi terbaik secara gratis.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/6281528476713?text=Halo%20Admin,%20saya%20ingin%20analisis%20rekomendasi%20indeksasi%20jurnal%20gratis"
            target="_blank"
            rel="noreferrer"
            className="shrink-0 px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-transform hover:scale-105"
          >
            Analisis Naskah Gratis
          </a>
        </div>

      </div>
    </section>
  );
};
