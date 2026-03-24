import React from 'react';
import { motion } from 'framer-motion';

export default function SponsorsLegacy() {
  const pastSponsors = [
    "Sagar Gaire", "Amul", "Bank of India", "Hero", "VIVO", "Lic", 
    "SBI", "Honda", "Parle-G", "Reliance", "PepsiCo", "Puma India"
  ];

  return (
    <>
      {/* 2025 SPONSORS */}
      <section className="py-24 bg-surface px-8 w-full overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-headline font-black text-white uppercase text-center mb-20 tracking-widest"
          >
            OUR 2025 SPONSORS
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 flex flex-col items-center w-full"
          >
            <span className="text-xs font-bold text-secondary-container uppercase tracking-[0.3em] mb-4">Official Title Partner</span>
            <div className="w-full max-w-lg bg-surface-container-high p-12 text-center border-t-4 border-secondary-container shadow-[0_0_40px_rgba(255,215,0,0.15)] group hover:scale-105 transition-transform duration-500">
              <div className="text-5xl font-headline font-black text-white italic group-hover:text-secondary-container transition-colors">RESERVED</div>
              <p className="text-on-surface-variant mt-4 text-xs tracking-widest">YOUR BRAND HERE</p>
            </div>
          </motion.div>

          <div className="w-full overflow-hidden">
            <div className="flex gap-20 animate-marquee whitespace-nowrap">
              <div className="flex gap-24 items-center grayscale opacity-50">
                <div className="text-4xl font-headline font-black text-white uppercase tracking-tighter">NIKE</div>
                <div className="text-4xl font-headline font-black text-white uppercase tracking-tighter">ADIDAS</div>
                <div className="text-4xl font-headline font-black text-white uppercase tracking-tighter">REDBULL</div>
                <div className="text-4xl font-headline font-black text-white uppercase tracking-tighter">PEPSI</div>
                <div className="text-4xl font-headline font-black text-white uppercase tracking-tighter">GATORADE</div>
                <div className="text-4xl font-headline font-black text-white uppercase tracking-tighter">PUMA</div>
              </div>
              <div className="flex gap-24 items-center grayscale opacity-50">
                <div className="text-4xl font-headline font-black text-white uppercase tracking-tighter">NIKE</div>
                <div className="text-4xl font-headline font-black text-white uppercase tracking-tighter">ADIDAS</div>
                <div className="text-4xl font-headline font-black text-white uppercase tracking-tighter">REDBULL</div>
                <div className="text-4xl font-headline font-black text-white uppercase tracking-tighter">PEPSI</div>
                <div className="text-4xl font-headline font-black text-white uppercase tracking-tighter">GATORADE</div>
                <div className="text-4xl font-headline font-black text-white uppercase tracking-tighter">PUMA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEGACY WALL */}
      <section className="py-24 bg-surface-container-low px-8 w-full" id="past-sponsors">
        <div className="max-w-7xl mx-auto w-full">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-headline font-black text-white uppercase mb-16 text-center"
          >
            NOTABLE PREVIOUS SPONSORS
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-20 w-full">
            {pastSponsors.map((sponsor, i) => (
              <motion.div 
                key={sponsor}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.05 }}
                className="bg-surface p-6 grayscale hover:grayscale-0 transition-all duration-300 text-center font-headline font-bold text-white/40 hover:text-white hover:bg-surface-container shadow-lg uppercase flex items-center justify-center min-h-[100px]"
              >
                {sponsor}
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border-l-8 border-primary-container pl-12 py-8 bg-surface-container-high w-full relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-container/10 to-transparent"></div>
            <blockquote className="relative z-10 text-2xl md:text-3xl font-headline font-black text-white uppercase italic leading-tight">
              "We sincerely thank our past sponsors for fueling the passion of Jabalpur's football legacy for 28 years. Your support has transformed a local match into a regional phenomenon."
            </blockquote>
          </motion.div>
        </div>
      </section>
    </>
  );
}
