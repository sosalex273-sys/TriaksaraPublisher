"use client";

import { motion } from "framer-motion";

export const Portfolio = () => {
  const portfolios = [
    { title: "Jurnal Teknologi & Sistem Informasi", scope: "Scopus Q2", image: "/images/portfolio1.png" },
    { title: "Buku: Manajemen Strategi Bisnis", scope: "Ber-ISBN", image: "/images/portfolio2.png" },
    { title: "Jurnal Kesehatan Masyarakat", scope: "SINTA 2", image: "/images/portfolio3.png" },
    { title: "Paten: Algoritma Data Mining", scope: "HKI Terdaftar", image: "/images/portfolio4.png" }
  ];

  return (
    <section id="portofolio" className="py-12 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold font-jakarta text-slate-900 mb-4">
            Karya yang Telah Terbit
          </h2>
          <p className="text-sm md:text-lg text-slate-600">
            Jejak rekam keberhasilan kami dalam mengantarkan karya para akademisi menuju publikasi resmi.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolios.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[3/4] overflow-hidden bg-slate-200">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent flex flex-col justify-end p-6">
                <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded-full w-fit mb-3">
                  {item.scope}
                </span>
                <h3 className="text-white font-bold font-jakarta leading-tight group-hover:text-primary-foreground transition-colors">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
