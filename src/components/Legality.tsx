"use client";

import { motion } from "framer-motion";
import { Scale, FileSignature, CheckCircle2, ShieldCheck, Award, Building } from "lucide-react";

export const Legality = () => {
  return (
    <section id="legalitas" className="py-16 md:py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 rounded-3xl p-7 sm:p-10 md:p-14 text-white relative overflow-hidden border border-slate-800 shadow-2xl"
        >
          {/* Background Scale Watermark */}
          <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
            <Scale className="w-80 h-80 text-white" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-xs sm:text-sm font-semibold mb-6 border border-amber-500/20">
                <ShieldCheck className="h-4 w-4" />
                <span>Jaminan Keamanan & Kepastian Hukum</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-jakarta text-white tracking-tight mb-5 leading-tight">
                Publikasi Aman dengan <span className="text-gradient">Badan Usaha Resmi & Dokumen Legal</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 mb-8 leading-relaxed">
                Bebas dari resiko jurnal predator, duplikasi manuskrip, atau kerugian finansial. Triaksara Publisher beroperasi secara legal dengan komitmen perlindungan hak cipta dan transaksi akuntabel.
              </p>

              {/* 4 Poin Legalitas */}
              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="p-1.5 rounded-full bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white">NIB Resmi Terdaftar Pemerintah</h4>
                    <p className="text-xs text-slate-400">Terdaftar resmi di Kementerian Investasi / BKPM Republik Indonesia.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-1.5 rounded-full bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white">Perjanjian Kerahasiaan (NDA) Terjamin</h4>
                    <p className="text-xs text-slate-400">Data penelitian, hipotesis, dan ide naskah 100% aman dan tidak disebarluaskan.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-1.5 rounded-full bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white">Faktur & Dokumen SPJ Hibah Lengkap</h4>
                    <p className="text-xs text-slate-400">Kuitansi dan invoice resmi untuk pencairan dana penelitian (BIMA, LPDP, BOPTN).</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-1.5 rounded-full bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white">Letter of Acceptance (LoA) Asli</h4>
                    <p className="text-xs text-slate-400">Dikeluarkan langsung oleh Editor in Chief jurnal bersangkutan tanpa rekayasa.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Card: Verified Identity Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
               <div className="bg-slate-800/80 backdrop-blur-md border border-slate-700/80 p-6 sm:p-8 rounded-3xl w-full max-w-md shadow-2xl relative">
                  
                  {/* Verified Header */}
                  <div className="flex items-center justify-between border-b border-slate-700 pb-5 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                        <Building className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-base">Profil Entitas Hukum</h3>
                        <p className="text-xs text-slate-400">Verifikasi Resmi</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                      <Award className="w-3 h-3" />
                      Verified
                    </span>
                  </div>

                  {/* Entity Details */}
                  <div className="space-y-3.5 text-xs sm:text-sm">
                    <div className="flex justify-between py-1.5 border-b border-slate-700/50">
                      <span className="text-slate-400">Nama Badan Usaha</span>
                      <span className="font-bold text-white">Triaksara Publisher</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-700/50">
                      <span className="text-slate-400">Sektor Usaha</span>
                      <span className="font-bold text-white">Penerbitan & Konsultasi Ilmiah</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-700/50">
                      <span className="text-slate-400">Status Legalitas</span>
                      <span className="font-bold text-emerald-400">NIB & NPWP Aktif</span>
                    </div>
                    <div className="flex justify-between py-1.5">
                      <span className="text-slate-400">Domisili Kantor</span>
                      <span className="font-bold text-white">Sleman, D.I. Yogyakarta</span>
                    </div>
                  </div>

                  {/* Trust Footer */}
                  <div className="mt-6 pt-4 border-t border-slate-700/60 text-center">
                    <p className="text-[11px] text-slate-400">
                      Didukung oleh Perjanjian Kerjasama (MoU) mengikat untuk kenyamanan dan keamanan kedua belah pihak.
                    </p>
                  </div>
               </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};
