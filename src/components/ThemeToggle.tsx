"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    setIsDark(true);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 animate-pulse" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Dark Mode"
      title={isDark ? "Ubah ke Mode Terang" : "Ubah ke Mode Gelap"}
      className="relative p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-amber-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 shadow-sm border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500/50 flex items-center justify-center group"
    >
      {isDark ? (
        <Sun className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45 text-amber-400" />
      ) : (
        <Moon className="w-5 h-5 transition-transform duration-300 group-hover:-rotate-12 text-slate-700" />
      )}
    </button>
  );
};
