"use client";

import { motion } from "framer-motion";
import { faqs } from "@/data/faq";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { HelpCircle, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

export const FAQ = () => {
  return (
    <section id="faq" className="py-16 md:py-24 lg:py-28 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Left Column: Heading & Support Box */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-5/12 flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs sm:text-sm font-semibold mb-4 border border-amber-500/20">
                <HelpCircle className="w-4 h-4" />
                <span>Pusat Informasi & Tanya Jawab</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-jakarta text-slate-900 dark:text-white mb-4 leading-tight tracking-tight">
                Pertanyaan yang Sering <span className="text-gradient">Diajukan</span>
              </h2>

              <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                Temukan jawaban transparan mengenai estimasi waktu, legalitas, sistem pembayaran termin, dan jaminan LoA resmi bersama Triaksara Publisher.
              </p>
            </div>

            {/* Support Box */}
            <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 shadow-sm">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">Punya pertanyaan lain yang belum terjawab?</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
                Konsultan publikasi kami siap membantu menjawab dan menganalisis naskah Anda secara personal.
              </p>
              <Button
                className="w-full rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs gap-2 py-3"
                onClick={() => window.open('https://wa.me/6281528476713', '_blank')}
              >
                <MessageCircle className="w-4 h-4" />
                <span>Tanya Langsung ke Konsultan</span>
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-7/12"
          >
            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 px-5 py-1 transition-colors hover:border-amber-500/40"
                >
                  <AccordionTrigger className="text-left text-sm sm:text-base font-bold text-slate-800 dark:text-slate-100 hover:text-amber-500 hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs sm:text-sm pb-4 pt-1">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
