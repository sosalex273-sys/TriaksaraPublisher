"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export const Partner = () => {
  const campusList = [
    "Universitas Indonesia (UI)",
    "Institut Teknologi Bandung (ITB)",
    "Universitas Gadjah Mada (UGM)",
    "Institut Pertanian Bogor (IPB)",
    "Universitas Airlangga (UNAIR)",
    "Universitas Diponegoro (UNDIP)",
    "Universitas Brawijaya (UB)",
    "Universitas Padjadjaran (UNPAD)",
    "Universitas Syiah Kuala (USK)",
    "UIN Sunan Kalijaga",
    "Universitas Sebelas Maret (UNS)"
  ];

  return (
    <section className="py-6 bg-slate-100 dark:bg-slate-950/80 border-y border-slate-200/80 dark:border-slate-800/80 overflow-hidden">
      <div className="flex items-center gap-6 overflow-hidden">
        
        {/* Static Indicator */}
        <div className="shrink-0 pl-6 sm:pl-10 flex items-center gap-2 border-r border-slate-300 dark:border-slate-800 pr-6">
          <GraduationCap className="w-5 h-5 text-amber-500" />
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 whitespace-nowrap">
            Afiliasi Terbimbing:
          </span>
        </div>

        {/* Marquee Ticker */}
        <div className="flex overflow-hidden relative w-full">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
            className="flex items-center gap-8 shrink-0 whitespace-nowrap"
          >
            {campusList.concat(campusList).map((campus, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <span className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400">
                  {campus}
                </span>
                <span className="text-amber-500 text-xs">•</span>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};
