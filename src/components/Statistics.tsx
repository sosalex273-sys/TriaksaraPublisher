"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Users, FileCheck2, School, TrendingUp } from "lucide-react";

interface CounterProps {
  to: number;
  suffix?: string;
  decimals?: number;
}

const Counter = ({ to, suffix = "", decimals = 0 }: CounterProps) => {
  const [displayValue, setDisplayValue] = useState<string>(
    decimals > 0 ? (0).toFixed(decimals) + suffix : `0${suffix}`
  );
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1, margin: "0px 0px -20px 0px" });

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, to, {
      duration: 2.2,
      ease: "easeOut",
      onUpdate: (latest) => {
        setDisplayValue(
          decimals > 0
            ? latest.toFixed(decimals) + suffix
            : Math.round(latest) + suffix
        );
      },
    });

    return () => controls.stop();
  }, [isInView, to, suffix, decimals]);

  return <span ref={ref}>{displayValue}</span>;
};

export const Statistics = () => {
  const stats = [
    { 
      value: 1350, 
      suffix: "+", 
      label: "Dosen & Peneliti Terbimbing", 
      desc: "Asistensi manuskrip intensif 1-on-1",
      icon: Users 
    },
    { 
      value: 600, 
      suffix: "+", 
      label: "Manuskrip Resmi Terbit", 
      desc: "Di SINTA 1–6 & Scopus/WoS",
      icon: FileCheck2 
    },
    { 
      value: 57, 
      suffix: "+", 
      label: "Afiliasi Perguruan Tinggi", 
      desc: "PTN & PTS di seluruh Indonesia",
      icon: School 
    },
    { 
      value: 99.4, 
      suffix: "%", 
      decimals: 1,
      label: "Tingkat Keberhasilan (LoA)", 
      desc: "Riset lolos tahap peer-review",
      icon: TrendingUp 
    },
  ];

  return (
    <section className="py-14 sm:py-20 md:py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden">
      {/* Ambient Radial Lights */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 sm:w-80 h-64 sm:h-80 bg-amber-500/10 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 sm:w-80 h-64 sm:h-80 bg-blue-500/10 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />

      <div className="container relative mx-auto px-4 md:px-6 max-w-7xl z-10">
        
        {/* Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-400 font-semibold text-xs sm:text-sm mb-3 border border-amber-500/20"
          >
            <span>Rekam Jejak & Reputasi Teruji</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-jakarta text-white tracking-tight mb-3 sm:mb-4 leading-snug"
          >
            Angka Nyata Bukti <span className="text-gradient">Komitmen Kami</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: 0.15 }}
            className="text-xs sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto"
          >
            Dedikasi kami diukur dari kepuasan akademisi dan keberhasilan setiap artikel ilmiah hingga terbit resmi ber-ISSN dan ber-DOI.
          </motion.p>
        </div>

        {/* Stats Grid - 2 cols on mobile, 4 cols on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="p-4 sm:p-7 rounded-2xl sm:rounded-3xl bg-slate-800/60 backdrop-blur-md border border-slate-700/70 hover:border-amber-500/50 shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-amber-500/10 text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest">
                    #{index + 1}
                  </span>
                </div>

                <div>
                  <div className="text-2xl sm:text-4xl md:text-5xl font-black font-jakarta text-amber-400 tracking-tight mb-1.5 sm:mb-2">
                    <Counter to={stat.value} suffix={stat.suffix} decimals={stat.decimals || 0} />
                  </div>
                  <h4 className="text-xs sm:text-base font-bold text-white mb-1 leading-snug">
                    {stat.label}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed line-clamp-2 sm:line-clamp-none">
                    {stat.desc}
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
