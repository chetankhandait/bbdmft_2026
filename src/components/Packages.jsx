import React from 'react';
import { motion } from 'framer-motion';

export default function Packages() {
  return (
    <section className="py-24 bg-surface px-8 relative overflow-hidden w-full" id="packages">
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-headline font-black text-white uppercase mb-20 text-center tracking-tighter"
        >
          SPONSORSHIP <span className="text-secondary-container">PACKAGES</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 w-full">
          
          {/* Package 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-surface-container-high/40 backdrop-blur-xl p-10 border-2 border-white/10 relative group hover:scale-105 transition-all duration-500 overflow-hidden w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h3 className="text-2xl font-headline font-black text-white uppercase mb-2">Team Sponsor</h3>
            <div className="text-4xl font-headline font-black text-primary-container mb-8">₹5,000</div>
            <ul className="space-y-4 mb-12">
              <li className="flex items-center gap-3 text-on-surface-variant text-sm"><span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> Logo on Team Kit</li>
              <li className="flex items-center gap-3 text-on-surface-variant text-sm"><span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> Social Media Shoutout</li>
              <li className="flex items-center gap-3 text-on-surface-variant text-sm"><span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> On-field Banner</li>
            </ul>
            <button className="w-full py-4 bg-white text-black font-headline font-bold uppercase tracking-widest hover:bg-primary-container hover:text-white transition-colors relative z-10">Select Plan</button>
          </motion.div>

          {/* Package 2 (Highlighted) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-surface-container-high/60 backdrop-blur-xl p-12 border-2 border-primary-container relative group lg:scale-110 shadow-[0_0_50px_rgba(204,0,0,0.3)] z-20 overflow-hidden w-full mt-4 lg:mt-0"
          >
            <div className="absolute top-0 right-0 bg-primary-container text-white px-4 py-1 text-[10px] font-black uppercase tracking-[0.2em]">Most Popular</div>
            <h3 className="text-3xl font-headline font-black text-white uppercase mb-2">Title Sponsor</h3>
            <div className="text-5xl font-headline font-black text-secondary-container mb-8">₹20,000</div>
            <ul className="space-y-4 mb-12">
              <li className="flex items-center gap-3 text-white text-sm"><span className="material-symbols-outlined text-secondary-container">star</span> Tournament Branding Rights</li>
              <li className="flex items-center gap-3 text-white text-sm"><span className="material-symbols-outlined text-secondary-container">star</span> Logo on Main Trophy</li>
              <li className="flex items-center gap-3 text-white text-sm"><span className="material-symbols-outlined text-secondary-container">star</span> VIP Guest Status</li>
              <li className="flex items-center gap-3 text-white text-sm"><span className="material-symbols-outlined text-secondary-container">star</span> Premium Digital Media Reach</li>
              <li className="flex items-center gap-3 text-white text-sm"><span className="material-symbols-outlined text-secondary-container">star</span> Front-page Logo Exposure</li>
            </ul>
            <button className="w-full py-4 bg-secondary-container text-on-secondary-container font-headline font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,215,0,0.4)] relative z-10">Go Title Sponsor</button>
          </motion.div>

          {/* Package 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-surface-container-high/40 backdrop-blur-xl p-10 border-2 border-white/10 relative group hover:scale-105 transition-all duration-500 overflow-hidden w-full mt-4 lg:mt-0"
          >
            <h3 className="text-2xl font-headline font-black text-white uppercase mb-2">Co-Title Sponsor</h3>
            <div className="text-4xl font-headline font-black text-primary-container mb-8">₹15,000</div>
            <ul className="space-y-4 mb-12">
              <li className="flex items-center gap-3 text-on-surface-variant text-sm"><span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> Logo on Jersey (Chest)</li>
              <li className="flex items-center gap-3 text-on-surface-variant text-sm"><span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> Social Media Partnership</li>
              <li className="flex items-center gap-3 text-on-surface-variant text-sm"><span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> Award Ceremony Branding</li>
            </ul>
            <button className="w-full py-4 bg-white text-black font-headline font-bold uppercase tracking-widest hover:bg-primary-container hover:text-white transition-colors relative z-10">Select Plan</button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
