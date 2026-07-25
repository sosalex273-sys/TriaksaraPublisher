"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "./ui/button";

export const Contact = () => {
  return (
    <section id="kontak" className="py-12 md:py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold font-jakarta text-slate-900 mb-4 md:mb-6 leading-tight">
              Hubungi Kami
            </h2>
            <p className="text-sm md:text-lg text-slate-600 mb-8 md:mb-12">
              Kunjungi kantor kami atau tinggalkan pesan, tim kami akan segera menghubungi Anda kembali.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-xl text-primary mt-1">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Kantor Pusat</h4>
                  <p className="text-slate-600 leading-relaxed">Perum. Manglayang Regency Blok C9 No. 9 Bandung</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-xl text-primary mt-1">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Telepon & WhatsApp</h4>
                  <p className="text-slate-600 leading-relaxed">+62 898-1669-928 (Admin)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-xl text-primary mt-1">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Email</h4>
                  <p className="text-slate-600 leading-relaxed">info@greeenpublisher.id</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-xl text-primary mt-1">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Jam Operasional</h4>
                  <p className="text-slate-600 leading-relaxed">Senin - Jumat: 08.00 - 17.00 WIB<br/>Sabtu: 08.00 - 14.00 WIB</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
              <h3 className="text-2xl font-bold font-jakarta mb-6 text-slate-900">Kirim Pesan Cepat</h3>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); window.open("https://wa.me/628981669928", "_blank"); }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Nama Lengkap</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Instansi</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="Universitas XYZ" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Nomor WhatsApp</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="0812xxxxxx" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Pesan</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none" placeholder="Tulis pesan atau pertanyaan Anda..."></textarea>
                </div>
                <Button type="submit" className="w-full h-12 rounded-xl text-base mt-2 bg-green-500 hover:bg-green-600">
                  Kirim Pesan via WhatsApp
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
