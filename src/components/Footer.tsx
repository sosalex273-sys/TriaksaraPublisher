import Link from "next/link";
import Image from "next/image";
import logo from "../../lglg.png";
import { MessageCircle, MapPin, Phone, ShieldCheck } from "lucide-react";

export const Footer = () => {
  const waLink = "https://wa.me/6281528476713";

  const layanan = [
    { label: "Publikasi Jurnal Nasional (SINTA)", href: "/produk#sinta" },
    { label: "Publikasi Jurnal Scopus & WoS", href: "/produk#scopus" },
    { label: "Jurnal Internasional Copernicus", href: "/produk#copernicus" },
    { label: "Jurnal Internasional EBSCO", href: "/produk#ebsco" },
    { label: "Proofreading & Translation", href: "/#layanan" },
  ];

  const perusahaan = [
    { label: "Tentang Triaksara", href: "/#tentang-kami" },
    { label: "Keunggulan Layanan", href: "/#keunggulan" },
    { label: "Portofolio", href: "/#portofolio" },
    { label: "Testimoni Klien", href: "/#testimoni" },
    { label: "FAQ", href: "/#faq" },
  ];

  const legal = [
    { label: "Syarat & Ketentuan", href: "/" },
    { label: "Kebijakan Privasi", href: "/" },
    { label: "Disclaimer", href: "/" },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800">

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 md:px-6 max-w-7xl pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-14">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <Image
                src={logo}
                alt="Triaksara Publisher Logo"
                className="h-20 md:h-24 w-auto object-contain"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Mitra pendampingan publikasi ilmiah terpercaya untuk dosen, peneliti, dan mahasiswa Indonesia. Dari manuskrip hingga terbit resmi ber-ISSN dan DOI.
            </p>

            {/* Contact Info */}
            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5 text-xs text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                <span>Jl. Melati No. 12, Condongcatur, Sleman, D.I. Yogyakarta 55283</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-400">
                <Phone className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>+62 815-2847-6713 (Admin)</span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span className="text-xs text-emerald-400 font-semibold">NIB: 0304220013798 • NPWP Aktif</span>
              </div>
            </div>

            {/* WA Button */}
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs transition-all hover:scale-105 shadow-md shadow-amber-500/20"
            >
              <MessageCircle className="w-4 h-4" />
              Hubungi via WhatsApp
            </a>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5 font-jakarta">
              Layanan
            </h4>
            <ul className="space-y-3">
              {layanan.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-amber-400 transition-colors duration-200 flex items-start gap-2 group"
                  >
                    <span className="text-amber-500/50 group-hover:text-amber-400 transition-colors mt-0.5">›</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Perusahaan */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5 font-jakarta">
              Perusahaan
            </h4>
            <ul className="space-y-3">
              {perusahaan.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-amber-400 transition-colors duration-200 flex items-start gap-2 group"
                  >
                    <span className="text-amber-500/50 group-hover:text-amber-400 transition-colors mt-0.5">›</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5 font-jakarta">
              Legal
            </h4>
            <ul className="space-y-3">
              {legal.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-amber-400 transition-colors duration-200 flex items-start gap-2 group"
                  >
                    <span className="text-amber-500/50 group-hover:text-amber-400 transition-colors mt-0.5">›</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Trust Tags */}
            <div className="mt-8 space-y-2">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                Penerbitan Jurnal Terindeks
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                Dokumen SPJ Hibah Valid
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                Garansi LoA Resmi Terbit
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs text-center md:text-left">
            © {new Date().getFullYear()} <span className="text-slate-400 font-semibold">Triaksara Publisher</span>. All rights reserved. Berbadan Hukum Resmi.
          </p>
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <span>Dibuat dengan</span>
            <span className="text-red-400">❤️</span>
            <span>untuk Kemajuan Akademisi Indonesia</span>
          </div>
        </div>
      </div>

    </footer>
  );
};
