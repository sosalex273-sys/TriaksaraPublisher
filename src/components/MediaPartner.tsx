"use client";

import { motion } from "framer-motion";
import { Newspaper } from "lucide-react";

export const MediaPartner = () => {
  const mediaLogos = [
    { name: "Kompas", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Kompas_logo.svg/512px-Kompas_logo.svg.png" },
    { name: "Detik", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Logo_detikcom.svg/512px-Logo_detikcom.svg.png" },
    { name: "Republika", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Republika_logo.svg/512px-Republika_logo.svg.png" },
    { name: "Liputan6", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Liputan6_logo_2021.svg/512px-Liputan6_logo_2021.svg.png" },
    { name: "Tribunnews", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Tribun_Network_logo.svg/512px-Tribun_Network_logo.svg.png" },
    { name: "Sindonews", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Sindo_Media_logo.svg/512px-Sindo_Media_logo.svg.png" },
  ];

  return (
    <section className="py-12 md:py-16 bg-slate-950 border-t border-slate-800 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10"
        >
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400">
              <Newspaper className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white">Diliput & Dipercaya Media Nasional</h3>
              <p className="text-xs text-slate-400">Eksposur dan rekognisi dari media terkemuka Indonesia</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Media Coverage Aktif
          </div>
        </motion.div>

        {/* Marquee */}
        <div className="relative w-full flex overflow-x-hidden group">
          {/* Fade gradients */}
          <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

          {/* Scrolling logos */}
          <div className="flex items-center space-x-12 px-12 animate-[marquee_30s_linear_infinite] group-hover:[animation-play-state:paused]">
            {[...mediaLogos, ...mediaLogos].map((media, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center w-32 h-14 opacity-40 hover:opacity-80 transition-all duration-300 group/logo"
              >
                <img
                  src={media.url}
                  alt={media.name}
                  className="max-w-full max-h-full object-contain brightness-200"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
