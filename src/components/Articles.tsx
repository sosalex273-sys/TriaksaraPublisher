"use client";

import { motion } from "framer-motion";

export const Articles = () => {
  const articles = [
    {
      id: 1,
      title: "KIAT MENENTUKAN TARGET LUARAN HIBAH YANG TEPAT",
      tags: ["PENDAMPINGAN PUBLIKASI JURNAL ILMIAH"],
      date: "Admin • Juli 21, 2026",
      image: "https://goacademica.com/wp-content/uploads/2023/11/development-agency-video-1-cover.jpg",
      className: "md:col-span-3 md:row-span-2",
    },
    {
      id: 2,
      title: "DOSEN SWASTA BUKANLAH PENONTON, MEREKA ADALAH PENGGERAK PENDIDIKAN TINGGI INDONESIA",
      tags: ["KARIR DOSEN"],
      date: "",
      image: "https://goacademica.com/wp-content/uploads/2023/11/development-agency-video-2-cover.jpg",
      className: "md:col-span-6 md:row-span-1",
    },
    {
      id: 3,
      title: "JENIS-JENIS LUARAN HIBAH PENELITIAN YANG PERLU DIKETAHUI DOSEN",
      tags: ["UNCATEGORIZED"],
      date: "",
      image: "https://goacademica.com/wp-content/uploads/2023/11/cover-youtube.jpg",
      className: "md:col-span-3 md:row-span-1",
    },
    {
      id: 4,
      title: "DAFTAR PROGRAM HIBAH PENELITIAN YANG BISA DIIKUTI DOSEN",
      tags: ["KARIR DOSEN"],
      date: "",
      image: "https://goacademica.com/wp-content/uploads/2023/11/cover-youtube-goaca.jpg",
      className: "md:col-span-3 md:row-span-1",
    },
    {
      id: 5,
      title: 'DOSEN MENGAKU DIGAJI Rp2,6 JUTA, CURHAT "CENUK" JADI SOROTAN PUBLIK',
      tags: ["KARIR DOSEN"],
      date: "Admin • Juli 9, 2026",
      image: "https://goacademica.com/wp-content/uploads/2023/11/development-agency-video-3-cover.jpg",
      className: "md:col-span-3 md:row-span-2",
    }
  ];

  return (
    <section id="artikel" className="py-12 md:py-24 lg:py-32 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold font-jakarta text-slate-900 mb-4 leading-tight">
            Artikel dan Berita
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[240px] md:auto-rows-[280px] gap-4 max-w-[1400px] mx-auto">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl overflow-hidden ${article.className}`}
            >
              <div className="absolute inset-0 bg-slate-200">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "https://goacademica.com/wp-content/uploads/2023/11/cover-youtube-goaca2.jpg";
                  }}
                />
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300"></div>

              {/* Content */}
              <div className="absolute inset-0 p-5 flex flex-col justify-between z-10">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {article.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="bg-[#9c1a1a] text-white text-[9px] md:text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title & Meta */}
                <div className="mt-auto">
                  <h3 className="text-white font-black text-lg md:text-xl lg:text-2xl leading-tight font-jakarta line-clamp-3">
                    {article.title}
                  </h3>
                  {article.date && (
                    <p className="text-xs md:text-sm font-medium mt-2 text-slate-300">
                      {article.date}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Dummy */}
        <div className="flex justify-center items-center gap-2 mt-12">
          {[1, 2, 3, 4].map(num => (
            <button 
              key={num} 
              className={`w-8 h-8 rounded-md flex items-center justify-center text-sm font-bold transition-colors ${
                num === 2 ? 'bg-[#9c1a1a] text-white' : 'bg-transparent text-[#9c1a1a] hover:bg-slate-100'
              }`}
            >
              {num}
            </button>
          ))}
          <span className="text-[#9c1a1a] px-1">...</span>
          <button className="w-10 h-8 rounded-md flex items-center justify-center text-sm font-bold text-[#9c1a1a] hover:bg-slate-100 transition-colors">
            194
          </button>
        </div>
      </div>
    </section>
  );
};
