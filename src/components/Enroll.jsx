import React from 'react';
import { motion } from 'framer-motion';

export default function Enroll() {
  return (
    <section className="py-24 bg-surface-container-low px-8 w-full" id="enroll">
      <div className="max-w-3xl mx-auto w-full">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-headline font-black text-white uppercase mb-12 text-center"
        >
          ENROLL AS A SPONSOR
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs font-bold text-primary-container uppercase tracking-widest">Step 1: Details</span>
            <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">33% Complete</span>
          </div>
          <div className="w-full h-1 bg-surface-container-highest">
            <div className="w-1/3 h-full bg-primary-container"></div>
          </div>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-surface p-8 md:p-12 space-y-6 w-full shadow-2xl border border-white/5"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div className="space-y-2">
              <label className="text-xs font-headline font-bold uppercase text-on-surface-variant">Full Name / Organization</label>
              <input 
                className="w-full bg-surface-container-high border-none text-white focus:ring-2 focus:ring-primary-container px-4 py-3 outline-none transition-shadow" 
                placeholder="Enter name" 
                type="text"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-headline font-bold uppercase text-on-surface-variant">Contact Number</label>
              <input 
                className="w-full bg-surface-container-high border-none text-white focus:ring-2 focus:ring-primary-container px-4 py-3 outline-none transition-shadow" 
                placeholder="+91" 
                type="tel"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-headline font-bold uppercase text-on-surface-variant">Sponsorship Package</label>
            <select className="w-full bg-surface-container-high border-none text-white focus:ring-2 focus:ring-primary-container px-4 py-3 outline-none transition-shadow appearance-none">
              <option>Title Sponsor (₹20,000)</option>
              <option>Co-Title Sponsor (₹15,000)</option>
              <option>Team Sponsor (₹5,000)</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-headline font-bold uppercase text-on-surface-variant">Message / Notes</label>
            <textarea 
              className="w-full bg-surface-container-high border-none text-white focus:ring-2 focus:ring-primary-container px-4 py-3 h-32 outline-none transition-shadow resize-none" 
              placeholder="Tell us more..."
            ></textarea>
          </div>
          <button 
            className="w-full py-5 bg-primary-container text-white font-headline font-black text-lg uppercase tracking-widest hover:bg-white hover:text-black transition-colors shadow-[0_0_20px_rgba(204,0,0,0.3)]" 
            type="submit"
          >
            Proceed to Confirmation
          </button>
        </motion.form>
      </div>
    </section>
  );
}
