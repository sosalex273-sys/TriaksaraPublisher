"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

export const Institutions = () => {
  const institutions = [
    { name: "BRIN", url: "https://goacademica.com/wp-content/uploads/2023/11/brin.png" },
    { name: "DPR RI", url: "https://goacademica.com/wp-content/uploads/2023/11/dprri.png" },
    { name: "BUMN", url: "https://goacademica.com/wp-content/uploads/2023/11/kemenbumn.png" },
    { name: "KPPU", url: "https://goacademica.com/wp-content/uploads/2023/11/kppu.png" },
    { name: "LPSK", url: "https://goacademica.com/wp-content/uploads/2023/11/lpsk.png" },
    { name: "USK", url: "https://goacademica.com/wp-content/uploads/2023/11/USK-Universitas-Syiah-Kuala-ganti-sebutan-Unsyiah-743062296.png" },
    { name: "Atma Jaya", url: "https://goacademica.com/wp-content/uploads/2023/11/Logo-Unika-Atma-Jaya-3062972639.png" },
    { name: "UII", url: "https://goacademica.com/wp-content/uploads/2023/11/UII-Web-Logo-3531387880.png" },
    { name: "Binus", url: "https://goacademica.com/wp-content/uploads/2023/11/LogoBinusUniversity-1178849172.png" },
    { name: "UPI", url: "https://goacademica.com/wp-content/uploads/2023/11/UPI-Logo-white.png" },
    { name: "UI", url: "https://goacademica.com/wp-content/uploads/2023/11/logo-ui-_horizontal_no_frame_lightbackground-1619480755.png" },
    { name: "ITB", url: "https://goacademica.com/wp-content/uploads/2023/11/logo-itb-1920-new.png" },
    { name: "IPB", url: "https://goacademica.com/wp-content/uploads/2023/11/Logo-IPB-University-Horizontal-69826082.png" },
    { name: "Undip", url: "https://goacademica.com/wp-content/uploads/2023/11/web-undip-logo.png" },
    { name: "Unpad", url: "https://goacademica.com/wp-content/uploads/2023/11/logo-unpad.png" },
    { name: "UIN", url: "https://goacademica.com/wp-content/uploads/2023/11/uinlogolc.png" }
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold text-xs sm:text-sm mb-3 border border-amber-500/20"
          >
            <Building2 className="w-4 h-4" />
            <span>Jejak Kolaborasi Akademik</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-jakarta text-slate-900 dark:text-white tracking-tight mb-4"
          >
            Dipercaya oleh Akademisi & Peneliti dari <span className="text-gradient">50+ Institusi Terkemuka</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
          >
            Mulai dari perguruan tinggi negeri, swasta unggulan, hingga lembaga riset nasional (BRIN & Kementerian), para akademisi mempercayakan pendampingan manuskrip mereka kepada Triaksara Publisher.
          </motion.p>
        </div>

        {/* Grid Logo Showcase */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6 items-center">
          {institutions.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (idx % 8) * 0.05 }}
              className="h-20 sm:h-24 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 shadow-sm flex items-center justify-center transition-all duration-300 hover:shadow-md hover:border-amber-500/30 hover:scale-105 group"
            >
              <img 
                src={item.url} 
                alt={`Logo ${item.name}`}
                className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-75 group-hover:opacity-100 dark:brightness-110"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    parent.innerHTML = `<span class="font-bold text-xs sm:text-sm text-slate-700 dark:text-slate-300">${item.name}</span>`;
                  }
                }}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
