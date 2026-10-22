"use client";

import React from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

// Ubah ke false atau hapus komponen ini saat sudah selesai
export const IS_LOCKED = true;

export const ErrorOverlay = () => {
  if (!IS_LOCKED) return null;

  return (
    <div className="fixed inset-0 z-[9999999] bg-[#0b0f17] text-white flex flex-col items-center justify-center p-6 select-none font-sans">
      <div className="max-w-md w-full bg-[#111827] border border-red-500/30 rounded-2xl p-8 text-center shadow-2xl relative overflow-hidden">
        {/* Top subtle red glow line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-red-600" />

        {/* Icon */}
        <div className="inline-flex p-4 rounded-2xl bg-red-500/10 text-red-500 border border-red-500/20 mb-5">
          <AlertTriangle className="w-10 h-10" />
        </div>

        {/* Error Badge */}
        <div className="mb-3">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-red-400 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
            ERROR
          </span>
        </div>

        {/* Title */}
        <h1 className="text-xl sm:text-2xl font-bold text-white mb-3">
          Akses Web Ini Ditangguhkan
        </h1>

        {/* Subtext */}
        <p className="text-sm text-slate-400 mb-6">
          Silakan update.
        </p>

        {/* Update / Refresh Action */}
        <button
          onClick={() => window.location.reload()}
          className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-medium text-sm transition-all shadow-lg shadow-red-600/20 active:scale-95"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Update</span>
        </button>
      </div>
    </div>
  );
};
