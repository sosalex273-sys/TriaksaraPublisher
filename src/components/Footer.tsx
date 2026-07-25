import Link from "next/link";
import Image from "next/image";
import logo from "../../lg.png";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link href="#" className="flex items-center gap-2 md:gap-3 mb-6">
              <Image 
                src={logo} 
                alt="Green Publisher Logo Icon" 
                className="h-14 md:h-16 w-auto object-contain brightness-0 invert" 
              />
              <span className="font-jakarta font-bold text-3xl text-white tracking-tight">
                Greeen<span className="text-emerald-400">Publisher</span>
              </span>
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Mitra publikasi akademik terpercaya yang memberikan layanan komprehensif mulai dari editing hingga penerbitan dengan standar internasional.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 font-jakarta">Layanan</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="hover:text-primary transition-colors">Publikasi Jurnal Nasional</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Publikasi Jurnal Internasional</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Pendaftaran Hak Cipta (HKI)</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Penerbitan Buku (ISBN)</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Proofreading & Translation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 font-jakarta">Perusahaan</h4>
            <ul className="space-y-4">
              <li><Link href="#tentang-kami" className="hover:text-primary transition-colors">Tentang Kami</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Tim Kami</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Karir</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Testimoni</Link></li>
              <li><a href="https://wa.me/628981669928" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">Hubungi Kami</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 font-jakarta">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="hover:text-primary transition-colors">Syarat & Ketentuan</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Kebijakan Privasi</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} PT Greeenpublisher Indonesia. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <span>Dibuat dengan ❤️ untuk Akademisi Indonesia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
