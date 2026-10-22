"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

export const Contact = () => {
  const waLink = "https://wa.me/6281528476713";

  const contactItems = [
    {
      icon: MapPin,
      title: "Domisili Kantor",
      detail: "Jl. Melati No. 12, Condongcatur, Depok, Sleman, D.I. Yogyakarta 55283",
      color: "text-amber-400",
      bg: "bg-amber-500/10"
    },
    {
      icon: Phone,
      title: "WhatsApp & Telepon",
      detail: "+62 815-2847-6713 (Admin & Konsultasi)",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10"
    },
    {
      icon: Clock,
      title: "Jam Layanan",
      detail: "Senin – Sabtu, 08.00 – 21.00 WIB\nKonsultasi di luar jam dapat dijadwalkan",
      color: "text-blue-400",
      bg: "bg-blue-500/10"
    }
  ];



  return (
    <section id="kontak" className="py-16 md:py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white border-t border-slate-800">

      {/* Ambient Glows */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-6xl">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-400 font-semibold text-xs sm:text-sm mb-3.5 border border-amber-500/20"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Jangan Ragu untuk Menghubungi Kami</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-jakarta text-white tracking-tight mb-4 leading-tight"
          >
            Siap Mulai? <span className="text-gradient">Hubungi Tim Kami</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed"
          >
            Konsultasi awal <strong className="text-white">100% Gratis</strong>. Tim ahli kami siap menganalisis naskah dan merekomendasikan jurnal terbaik yang tepat untuk Anda.
          </motion.p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* Left: Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {contactItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-slate-800/60 border border-slate-700/70 hover:border-amber-500/40 transition-all duration-300 group backdrop-blur-sm"
                >
                  <div className={`p-3 rounded-xl ${item.bg} ${item.color} shrink-0 mt-0.5`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm sm:text-base mb-1">{item.title}</h4>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed whitespace-pre-line">{item.detail}</p>
                  </div>
                </div>
              );
            })}

          </motion.div>


          {/* Right: CTA Card Premium */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute -inset-2 bg-gradient-to-br from-amber-500/20 to-blue-600/10 rounded-3xl blur-2xl opacity-70" />

            <div className="relative bg-slate-900/80 backdrop-blur-xl border border-amber-500/30 rounded-3xl p-8 sm:p-10 shadow-2xl">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Konsultan Online Sekarang</span>
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-jakarta leading-snug mb-3">
                Konsultasikan Kebutuhan Publikasi Anda
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-8">
                Ceritakan kondisi naskah Anda — target jurnal, deadline, atau kendala yang dihadapi. Tim kami akan memberikan peta jalan terbaik secara gratis dan tanpa tekanan.
              </p>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {[
                  "Respon dalam 1×24 jam di jam kerja",
                  "Tidak perlu siapkan naskah yang sempurna",
                  "Analisis gratis similarity & scope jurnal",
                  "Rahasia naskah terjamin (NDA tersedia)"
                ].map((feat, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-sm text-slate-200">
                    <span className="text-amber-400 font-black shrink-0">✓</span>
                    {feat}
                  </div>
                ))}
              </div>

              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-4 px-6 rounded-2xl transition-all hover:scale-[1.02] shadow-lg shadow-amber-500/25 text-sm"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Mulai Konsultasi via WhatsApp — Gratis</span>
              </a>

              <p className="text-center text-xs text-slate-500 mt-4">
                Dengan menghubungi kami, Anda menyetujui kebijakan kerahasiaan data kami.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
