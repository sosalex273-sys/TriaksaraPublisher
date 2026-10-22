"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../lglg.png";
import { Menu, X, BookOpen } from "lucide-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";

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
          ? "bg-slate-900/95 backdrop-blur-md shadow-md py-2 border-b border-slate-800"
          : "bg-slate-950/85 backdrop-blur-md py-2.5 border-b border-slate-900/50"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="#" className="flex items-center py-1">
            <Image 
              src={logo} 
              alt="Triaksara Publisher Logo" 
              className="h-11 md:h-13 lg:h-15 w-auto object-contain transition-transform hover:scale-105"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <ul className="flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm lg:text-base font-semibold text-slate-200 hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Button className="rounded-full px-6 py-2 text-sm lg:text-base font-bold bg-amber-500 hover:bg-amber-600 text-slate-950 shadow-md shadow-amber-500/20 transition-transform hover:scale-105" onClick={() => window.open('https://wa.me/6281528476713', '_blank')}>
              Konsultasi Gratis Sekarang
            </Button>
          </nav>

          {/* Mobile Menu Toggle & Theme Toggle */}
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
              aria-label="Toggle Menu"
              className="text-white hover:text-amber-400 p-2 rounded-lg bg-slate-800/60 border border-slate-700/50 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 py-5 px-5 shadow-2xl flex flex-col gap-4">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-base font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-900/80 px-3 py-2.5 rounded-lg block transition-colors border-b border-slate-900/60"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button className="w-full rounded-full py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold shadow-md shadow-amber-500/20" onClick={() => window.open('https://wa.me/6281528476713', '_blank')}>
            Konsultasi Gratis Sekarang
          </Button>
        </div>
      )}
    </header>
  );
};
