"use client";

import { motion } from "framer-motion";
import { Check, ShieldCheck, FileCheck, Layers, Cpu, Award } from "lucide-react";

export const Advantages = () => {
  const highlights = [
    {
      title: "Plagiarism & AI Similarity Check (No-Repository)",
      desc: "Naskah dicek menggunakan Turnitin resmi tanpa tersimpan di database publik, menjaga keaslian riset Anda."
    },
    {
      title: "Sitasi Terstandar (Mendeley / Zotero)",
      desc: "Penyusunan referensi bibliografi otomatis sesuai gaya APA, IEEE, Harvard, Vancouver, atau Chicago."
    },
    {
      title: "Native Academic English Proofreading",
      desc: "Translasi dan tata bahasa Inggris akademik berstandar Elsevier, Springer Nature, Wiley, dan IEEE."
    },
    {
      title: "Validasi Struktur & Metodologi IMRAD",
      desc: "Pemeriksaan keselarasan antara latar belakang, metodologi, hasil pembahasan, hingga kesimpulan naskah."
    }
  ];

  return (
    <section className="py-16 md:py-24 lg:py-28 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Column: Text & Technical Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs sm:text-sm font-semibold mb-4 border border-amber-500/20">
              <Cpu className="w-4 h-4" />
              <span>Standar Editorial Internasional</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-jakarta text-slate-900 dark:text-white mb-5 leading-tight tracking-tight">
              Standar Mutu Tinggi untuk <span className="text-gradient">Memaksimalkan Penerimaan Naskah</span>
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              Dewan editor jurnal bereputasi memiliki kriteria seleksi yang sangat ketat. Triaksara Publisher memastikan naskah Anda memenuhi seluruh parameter mutu sebelum proses submit dimulai.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {highlights.map((item, i) => (
                <div key={i} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60 flex flex-col justify-start">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="bg-emerald-500/10 text-emerald-500 p-1 rounded-full shrink-0">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-tight">{item.title}</h4>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed pl-6">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Visual Editorial Showcase Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
             <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 bg-slate-950 p-6 sm:p-8 text-white">
                
                {/* Visual Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                      <FileCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">Quality Assurance Checklist</p>
                      <p className="text-[10px] text-slate-400">Verifikasi Naskah Siap Submit</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    100% Passed
                  </span>
                </div>

                {/* Progress Indicators */}
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-300">Similarity Index (Turnitin)</span>
                      <span className="font-bold text-emerald-400">8% (Aman &lt; 15%)</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full w-[25%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-300">Format Template & Gaya Selingkung</span>
                      <span className="font-bold text-amber-400">100% Match</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-amber-500 h-full w-full" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-300">Kesesuaian Referensi (Mendeley/Zotero)</span>
                      <span className="font-bold text-blue-400">Valid & Verified</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-blue-500 h-full w-full" />
                    </div>
                  </div>
                </div>

                {/* Bottom Trust Tag */}
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center">
                  <p className="text-xs text-slate-400 font-medium">
                    Standar penulisan selaras dengan panduan penerbit internasional (Elsevier, Springer, IEEE, Taylor & Francis).
                  </p>
                </div>
             </div>

             {/* Ambient glow */}
             <div className="absolute -z-10 -bottom-8 -right-8 w-60 h-60 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
