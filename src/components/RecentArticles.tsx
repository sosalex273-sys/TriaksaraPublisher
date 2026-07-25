"use client";

import { motion } from "framer-motion";
import { blogs } from "@/data/blogs";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";

export const RecentArticles = () => {
  return (
    <section className="py-12 md:py-20 lg:py-28 bg-slate-50 border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold font-jakarta text-slate-900 mb-4">
              Artikel & Wawasan Terbaru
            </h2>
            <p className="text-sm md:text-lg text-slate-600">
              Tips, panduan, dan berita terkini seputar dunia publikasi akademik.
            </p>
          </div>
          <Link href="#" className="inline-flex items-center text-primary font-semibold hover:underline">
            Lihat Semua Artikel <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-primary rounded-full">
                  {blog.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-sm text-slate-400 mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{blog.date}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-jakarta mb-3 group-hover:text-primary transition-colors leading-snug">
                  {blog.title}
                </h3>
                <p className="text-slate-600 line-clamp-2 mb-4 flex-grow">
                  {blog.excerpt}
                </p>
                <div className="inline-flex items-center text-sm font-semibold text-primary group-hover:translate-x-1 transition-transform">
                  Baca Selengkapnya <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
