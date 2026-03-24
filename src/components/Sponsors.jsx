import React from 'react';
import { motion } from 'framer-motion';

const SPONSORS = {
  title: { name: 'NEXUS ENERGY', badge: 'Title Sponsor', link: '#' },
  coTitle: [
    { name: 'AURA TECH', badge: 'Co-Title Sponsor' },
    { name: 'QUANTUM SPORTS', badge: 'Co-Title Sponsor' }
  ],
  partners: ['VELOCITY DRINKS', 'IRON GEAR', 'NEON STUDIOS', 'SILVER BULLET']
};

export default function Sponsors() {
  return (
    <section className="w-full py-24 bg-[#0a0a0a] border-t border-[#1a1a1a] relative overflow-hidden">
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-50 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <h2 className="font-display text-4xl md:text-5xl text-white tracking-widest uppercase mb-16">
          Powered By
        </h2>

        {/* Title Sponsor */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="inline-block p-1 bg-gradient-to-b from-[#cc0000] to-transparent">
            <div className="bg-[#111] px-12 py-12 md:py-16 md:px-24 flex flex-col items-center">
              <span className="font-body text-[#cc0000] text-sm tracking-[0.3em] uppercase mb-4">{SPONSORS.title.badge}</span>
              <h3 className="font-display text-5xl md:text-8xl text-white tracking-widest glow-text-subtle">
                {SPONSORS.title.name}
              </h3>
            </div>
          </div>
        </motion.div>

        {/* Co-Title Sponsors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {SPONSORS.coTitle.map((sponsor, idx) => (
            <motion.div 
              key={sponsor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 + 0.2 }}
              className="bg-[#151515] p-8 border hover:border-[#00ff87] border-white/5 transition-colors duration-300"
            >
              <span className="font-body text-gray-400 text-xs tracking-[0.2em] uppercase mb-2 block">{sponsor.badge}</span>
              <h4 className="font-display text-3xl md:text-4xl text-white tracking-wide">{sponsor.name}</h4>
            </motion.div>
          ))}
        </div>

        {/* Partners */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 opacity-60">
          {SPONSORS.partners.map((partner, idx) => (
            <motion.div 
              key={partner}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 + 0.4 }}
              className="px-6 py-4 font-display text-xl md:text-2xl text-gray-300 tracking-wider grayscale hover:grayscale-0 transition-all duration-300 hover:text-white"
            >
              {partner}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
