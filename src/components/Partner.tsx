"use client";

import { motion } from "framer-motion";

export const Partner = () => {
  const partners = [
    "Universitas Indonesia",
    "Institut Teknologi Bandung",
    "Universitas Gadjah Mada",
    "Universitas Airlangga",
    "Universitas Brawijaya",
  ];

  return (
    <section className="py-10 bg-white border-y border-slate-100 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <p className="text-center text-sm font-semibold text-slate-400 mb-6 uppercase tracking-wider">
          Dipercaya oleh Dosen & Peneliti dari
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-lg md:text-xl font-bold font-jakarta text-slate-700"
            >
              {partner}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
