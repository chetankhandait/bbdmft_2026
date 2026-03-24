import React from 'react';
import { motion } from 'framer-motion';

export default function Partner() {
  const reasons = [
    { title: "28 Years Legacy", desc: "Unrivaled brand association with Jabalpur Engineering College's most prestigious annual sporting tradition." },
    { title: "Massive Spectators", desc: "Live engagement with 2,000+ daily on-ground spectators and the entire JEC student community." },
    { title: "Digital Exposure", desc: "Strategic brand placement across Instagram, WhatsApp, and the tournament's live broadcast feeds." },
    { title: "Youth Impact", desc: "Support regional talent and sportsmanship while aligning your brand with health and teamwork." }
  ];

  return (
    <section className="py-24 bg-surface-container-low px-8 w-full">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-headline font-black text-white uppercase mb-16 text-center"
        >
          WHY PARTNER <span className="text-primary-container">WITH US?</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {reasons.map((reason, i) => (
            <motion.div 
              key={reason.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface p-8 border-l-8 border-primary-container hover:translate-x-4 transition-transform duration-300 w-full"
            >
              <h3 className="text-2xl font-headline font-black text-white uppercase mb-4">{reason.title}</h3>
              <p className="text-on-surface-variant">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
