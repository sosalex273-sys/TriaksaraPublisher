"use client";

import React from 'react';
import Link from 'next/link';
import { 
  CheckCircle2, 
  MessageCircle, 
  ArrowLeft, 
  ArrowRight, 
  Award, 
  ShieldCheck, 
  Globe, 
  GraduationCap, 
  FileText, 
  Clock, 
  Sparkles 
} from 'lucide-react';

export default function ProdukPage() {
  const waLink = "https://wa.me/6281528476713";

  const packages = [
    {
      id: 'scopus',
      badge: 'SCOPUS Q1–Q4 & WoS',
      category: 'Publikasi Internasional Bereputasi Tinggi',
      title: 'Paket Jurnal Internasional Scopus',
      desc: 'Layanan eksklusif berstandar tertinggi untuk pemenuhan syarat kelulusan Program Doktor (S3), kenaikan jabatan Lektor Kepala, hingga Guru Besar (Profesor).',
      target: 'Dosen Senior, Kandidat Doktor (S3), dan Peneliti Utama',
      isPopular: true,
      glowColor: 'from-amber-500/20 via-blue-500/10 to-transparent',
      badgeColor: 'bg-amber-500 text-slate-950',
      specs: [
        { label: 'Indeksasi', value: 'Scopus Q1, Q2, Q3, Q4 & WoS' },
        { label: 'Bahasa', value: 'Native English Proofreading' },
        { label: 'Asistensi', value: 'Reviewer Bimbingan Penuh' },
        { label: 'Garansi', value: 'LoA & Terindeks Database' }
      ],
      features: [
        'Proofreading naskah oleh penutur asli (Native Speaker UK/US bersertifikat)',
        'Bedah manuskrip pra-submit mendalam oleh reviewer pakar bidang ilmu',
        'Penyusunan Cover Letter profesional & formatting template jurnal Scopus',
        'Pendampingan intensif revisi naskah & penyusunan Response to Reviewer',
        'Monitoring tracking status berkala hingga naskah Accepted & Published',
        'Garansi kepastian Letter of Acceptance (LoA) resmi dan terindeks'
      ]
    },
    {
      id: 'sinta',
      badge: 'SINTA 1–6 TERAKREDITASI',
      category: 'Publikasi Nasional Resmi Kemendikbudristek',
      title: 'Paket Jurnal Nasional SINTA',
      desc: 'Solusi pendampingan artikel ilmiah di jurnal terakreditasi nasional untuk syarat kelulusan sarjana/magister serta kenaikan jabatan Asisten Ahli dan Lektor.',
      target: 'Dosen, Mahasiswa S1/S2, dan Praktisi Akademik',
      isPopular: false,
      glowColor: 'from-amber-500/15 via-transparent to-transparent',
      badgeColor: 'bg-amber-500/10 text-amber-400 border border-amber-500/30',
      specs: [
        { label: 'Indeksasi', value: 'SINTA 1 hingga SINTA 6' },
        { label: 'Orisinalitas', value: 'Uji Turnitin < 15%' },
        { label: 'Formatting', value: 'Gaya Selingkung Jurnal' },
        { label: 'Dokumen', value: 'LoA Resmi Pengelola' }
      ],
      features: [
        'Pemeriksaan orisinalitas naskah dengan Turnitin resmi (bebas plagiasi < 15%)',
        'Penyelarasan format manuskrip sesuai gaya selingkung (Author Guidelines) jurnal tujuan',
        'Proofreading tata bahasa baku ilmiah (Bahasa Indonesia atau Inggris akademik)',
        'Asistensi proses submit dan kawalan revisi catatan mitra bestari / editor',
        'Letter of Acceptance (LoA) resmi dari dewan redaksi jurnal bersangkutan',
        'Kuitansi dan invoice resmi untuk keperluan SPJ dana hibah penelitian'
      ]
    },
    {
      id: 'copernicus',
      badge: 'INDEX COPERNICUS (ICI)',
      category: 'Publikasi Internasional Terindeks',
      title: 'Paket Jurnal Internasional Copernicus',
      desc: 'Pilihan strategis untuk memperkuat rekam jejak riset global, sitasi artikel, dan luaran seminar/prosiding internasional dengan biaya efisien.',
      target: 'Mahasiswa Pascasarjana & Dosen Peneliti Pemula',
      isPopular: false,
      glowColor: 'from-teal-500/15 via-transparent to-transparent',
      badgeColor: 'bg-teal-500/10 text-teal-400 border border-teal-500/30',
      specs: [
        { label: 'Indeksasi', value: 'Index Copernicus Master List' },
        { label: 'Bahasa', value: 'Academic English Standard' },
        { label: 'Struktur', value: 'Standarisasi IMRAD' },
        { label: 'Output', value: 'Sertifikat & DOI Aktif' }
      ],
      features: [
        'Jurnal terdaftar resmi di pangkalan data Index Copernicus International (ICI)',
        'Penerjemahan akademik (Academic Translation) & grammar check menyeluruh',
        'Standarisasi struktur penulisan ilmiah berbasis format IMRAD global',
        'Pendampingan proses peer-review hingga artikel dinyatakan diterima',
        'Penerbitan Digital Object Identifier (DOI) aktif dan terdaftar di Crossref',
        'Sertifikat publikasi internasional resmi dari publisher pengelola'
      ]
    },
    {
      id: 'ebsco',
      badge: 'EBSCO HOST RESEARCH',
      category: 'Pangkalan Data Global Terpercaya',
      title: 'Paket Jurnal Internasional EBSCO',
      desc: 'Maksimalkan keterbacaan dan sitasi riset Anda di repositori ilmiah internasional EBSCO Host yang diakses ribuan perpustakaan universitas dunia.',
      target: 'Dosen Peneliti, Kolaborator Riset, & Akademisi Mandiri',
      isPopular: false,
      glowColor: 'from-blue-500/15 via-transparent to-transparent',
      badgeColor: 'bg-blue-500/10 text-blue-400 border border-blue-500/30',
      specs: [
        { label: 'Indeksasi', value: 'EBSCO Host Database' },
        { label: 'Sitasi', value: 'Global Academic Reach' },
        { label: 'Review', value: 'Peer-Review Terbimbing' },
        { label: 'Administrasi', value: 'Lengkap & Akuntabel' }
      ],
      features: [
        'Terindeks di pangkalan data EBSCO Host dan Google Scholar Profile',
        'Translasi akademik dan proofreading struktur metodologi riset',
        'Asistensi format referensi bibliografi (APA, IEEE, Harvard Style)',
        'Pengawalan tahapan review hingga LoA resmi diterbitkan',
        'Tracking progress transparan dengan update berkala via tim konsultan',
        'Dokumen pendukung administrasi lengkap untuk pelaporan BKD dosen'
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-amber-500 selection:text-slate-950 relative overflow-hidden">
      
      {/* Ambient Background Lights */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Header & Breadcrumb */}
      <section className="container relative mx-auto px-4 md:px-6 max-w-6xl pt-8 pb-10 z-10">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors font-medium text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-4 py-2.5 rounded-full shadow-md hover:border-amber-500/40"
          >
            <ArrowLeft className="w-4 h-4 text-amber-500" />
            <span>Kembali ke Beranda Utama</span>
          </Link>

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Badan Usaha Resmi Berbadan Hukum</span>
          </div>
        </div>

        {/* Title & Description */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-xs sm:text-sm font-semibold mb-4 border border-amber-500/20">
            <Sparkles className="w-4 h-4" />
            <span>Katalog Resmi Paket Triaksara Publisher</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-jakarta mb-5 leading-tight">
            Pilihan Paket Pendampingan <span className="text-gradient">Publikasi Ilmiah</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed mb-8">
            Setiap manuskrip memiliki karakteristik dan tujuan luaran yang berbeda. Pilih paket pendampingan yang paling tepat sesuai target indeksasi, jenjang karir, maupun syarat kelulusan Anda.
          </p>

          {/* Quick Filter Anchors */}
          <div className="flex flex-wrap items-center gap-2.5 pt-2">
            <span className="text-xs text-slate-400 font-bold uppercase tracking-wider mr-1">Loncat ke:</span>
            <a href="#scopus" className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 text-xs font-semibold text-slate-200 hover:text-amber-400 transition-colors">
              ★ Scopus Q1–Q4
            </a>
            <a href="#sinta" className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 text-xs font-semibold text-slate-200 hover:text-amber-400 transition-colors">
              🏛️ SINTA 1–6
            </a>
            <a href="#copernicus" className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 text-xs font-semibold text-slate-200 hover:text-amber-400 transition-colors">
              🌍 Copernicus (ICI)
            </a>
            <a href="#ebsco" className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 text-xs font-semibold text-slate-200 hover:text-amber-400 transition-colors">
              📚 EBSCO Host
            </a>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="container relative mx-auto px-4 md:px-6 max-w-6xl pb-20 z-10">
        <div className="grid grid-cols-1 gap-8">
          {packages.map((pkg) => (
            <div 
              key={pkg.id} 
              id={pkg.id} 
              className={`scroll-mt-24 rounded-3xl overflow-hidden bg-slate-900/90 border ${pkg.isPopular ? 'border-amber-500/60 shadow-2xl shadow-amber-500/10' : 'border-slate-800'} transition-all duration-300 relative group`}
            >
              {/* Glow Accent */}
              <div className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl ${pkg.glowColor} pointer-events-none rounded-bl-full`} />

              <div className="p-7 sm:p-9 lg:p-10 relative z-10">
                
                {/* Header Card */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className={`px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${pkg.badgeColor}`}>
                    {pkg.badge}
                  </span>
                  {pkg.isPopular && (
                    <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500 text-slate-950 shadow-md">
                      ★ Rekomendasi Utama
                    </span>
                  )}
                  <span className="text-xs text-slate-400 font-medium">
                    {pkg.category}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-white font-jakarta mb-3 leading-snug">
                  {pkg.title}
                </h2>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 max-w-3xl">
                  {pkg.desc}
                </p>

                {/* Target Audience Pill */}
                <div className="mb-6 p-3 rounded-2xl bg-slate-800/60 border border-slate-700/50 flex items-center gap-2.5">
                  <GraduationCap className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-300">
                    <strong className="text-white">Direkomendasikan untuk:</strong> {pkg.target}
                  </span>
                </div>

                {/* Specs Metric Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 border-y border-slate-800 mb-8">
                  {pkg.specs.map((spec, i) => (
                    <div key={i} className="p-3 rounded-2xl bg-slate-950/60 border border-slate-800">
                      <p className="text-[11px] text-slate-400 mb-0.5">{spec.label}</p>
                      <p className="text-xs sm:text-sm font-bold text-amber-400 leading-tight">{spec.value}</p>
                    </div>
                  ))}
                </div>

                {/* Detailed Features List */}
                <div className="mb-8">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                    Cakupan Layanan & Fasilitas Paket:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {pkg.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Clock className="w-4 h-4 text-emerald-400" />
                    <span>Konsultasi Awal 100% Gratis & Kerahasiaan Naskah Terjamin</span>
                  </div>

                  <a 
                    href={`${waLink}?text=Halo%20Admin%20Triaksara,%20saya%20ingin%20konsultasi%20mengenai%20${encodeURIComponent(pkg.title)}`}
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-7 py-3.5 rounded-full transition-all hover:scale-105 shadow-lg shadow-amber-500/20 text-xs sm:text-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Konsultasikan Paket {pkg.badge.split(' ')[0]}</span>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Workflow Steps Section */}
      <section className="py-20 bg-slate-900/60 border-t border-slate-800 relative z-10">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-amber-500 text-xs font-bold uppercase tracking-widest mb-2 block">Alur Kerja Transparan</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-jakarta mb-3">
              3 Langkah Mudah Menuju Publikasi
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Proses pendampingan terstruktur dari tahap naskah mentah hingga dinyatakan terbit resmi.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            
            {/* Step 1 */}
            <div className="p-7 rounded-3xl bg-slate-800/80 border border-slate-700/80 shadow-xl flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-amber-500 text-slate-950 rounded-2xl font-black flex items-center justify-center text-lg mb-5 shadow-lg shadow-amber-500/25">
                01
              </div>
              <h3 className="font-bold text-white text-base sm:text-lg mb-2">Konsultasi & Bedah Naskah</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                Kirimkan draf naskah Anda untuk dianalisis orisinalitasnya (Turnitin) dan dipetakan target jurnal yang paling tepat dan realistis.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-7 rounded-3xl bg-slate-800/80 border border-slate-700/80 shadow-xl flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-amber-500 text-slate-950 rounded-2xl font-black flex items-center justify-center text-lg mb-5 shadow-lg shadow-amber-500/25">
                02
              </div>
              <h3 className="font-bold text-white text-base sm:text-lg mb-2">Proofreading & Review</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                Tim editor menyelaraskan bahasa, format gaya selingkung, dan membimbing respon revisi mitra bestari secara intensif.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-7 rounded-3xl bg-slate-800/80 border border-slate-700/80 shadow-xl flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-amber-500 text-slate-950 rounded-2xl font-black flex items-center justify-center text-lg mb-5 shadow-lg shadow-amber-500/25">
                03
              </div>
              <h3 className="font-bold text-white text-base sm:text-lg mb-2">LoA Terbit & Terindeks</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                Artikel resmi Accepted, terbit ber-ISSN dan DOI aktif, serta dapat langsung digunakan untuk pelaporan BKD atau syarat kelulusan.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-center px-4 relative z-10 text-slate-950">
        <div className="max-w-3xl mx-auto">
          <Award className="w-12 h-12 mx-auto mb-4 opacity-90" />
          <h2 className="text-2xl sm:text-4xl font-black mb-4 leading-tight tracking-tight font-jakarta">
            Masih Bingung Memilih Paket yang Tepat?
          </h2>
          <p className="text-sm sm:text-base font-medium mb-8 opacity-90 max-w-xl mx-auto leading-relaxed">
            Konsultasikan naskah riset atau kendala kenaikan jabatan fungsional Anda bersama konsultan senior kami. Gratis tanpa biaya awal!
          </p>
          <a 
            href={waLink} 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-slate-950 text-white font-bold px-8 py-4 rounded-full hover:bg-slate-900 transition-all hover:scale-105 shadow-xl shadow-slate-950/20 text-sm"
          >
            <span>Hubungi Konsultan Sekarang</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </section>

    </main>
  );
}
