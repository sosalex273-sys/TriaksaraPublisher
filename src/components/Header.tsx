"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../lg.png";
import { Menu, X, BookOpen } from "lucide-react";
import { Button } from "./ui/button";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Beranda", href: "#" },
    { label: "Tentang Kami", href: "#tentang-kami" },
    { label: "Layanan", href: "#layanan" },
    { label: "Keunggulan", href: "#keunggulan" },
    { label: "Portofolio", href: "#portofolio" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-3"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="#" className="flex items-center gap-2 md:gap-3">
            <Image 
              src={logo} 
              alt="Green Publisher Logo Icon" 
              className="h-10 md:h-11 w-auto object-contain"
            />
            <span className="font-jakarta font-bold text-xl md:text-2xl text-slate-900 tracking-tight">
              Greeen<span className="text-emerald-600">Publisher</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Button className="rounded-full px-6" onClick={() => window.open('https://wa.me/628981669928', '_blank')}>Konsultasi Sekarang</Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-slate-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-slate-100 py-4 px-4 flex flex-col gap-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-base font-medium text-slate-700 block py-2 border-b border-slate-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button className="w-full rounded-full mt-2" onClick={() => window.open('https://wa.me/628981669928', '_blank')}>Konsultasi Sekarang</Button>
        </div>
      )}
    </header>
  );
};
