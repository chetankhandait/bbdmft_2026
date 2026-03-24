import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-24 px-8 bg-surface-container-low relative overflow-hidden w-full" id="about">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        
        {/* Left Column Text */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <h2 className="text-5xl md:text-7xl font-headline font-black text-white uppercase leading-none mb-8">
            ABOUT THE <span className="text-primary-container">TOURNAMENT</span>
          </h2>
          <p className="text-xl text-on-surface-variant font-medium leading-relaxed mb-12 border-l-4 border-primary-container pl-6">
            The Bharat Bhusan Dhurwey Memorial Football Tournament is JEC's biggest sports spectacle, uniting 9 teams in an electrifying battle for glory! With 28 years of legacy, this annual showdown isn't just a tournament — it's where champions play.
          </p>
          
          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-surface-container-high p-6 group hover:bg-primary-container transition-colors duration-500">
              <span className="material-symbols-outlined text-primary-container group-hover:text-white text-4xl mb-4">stadium</span>
              <h4 className="text-white font-headline font-bold uppercase">Hostel Ground</h4>
              <p className="text-xs text-on-surface-variant group-hover:text-white/80 transition-colors">Premium Match Venue</p>
            </div>
            
            <div className="bg-surface-container-high p-6 group hover:bg-primary-container transition-colors duration-500">
              <span className="material-symbols-outlined text-primary-container group-hover:text-white text-4xl mb-4">groups</span>
              <h4 className="text-white font-headline font-bold uppercase">9 Teams</h4>
              <p className="text-xs text-on-surface-variant group-hover:text-white/80 transition-colors">Battle for Glory</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column Image */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 relative"
        >
          <div className="aspect-square bg-surface-container-highest overflow-hidden relative group">
            <img 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
              alt="football player close-up" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuACYWN_la4U9UIN5acXYz-HOqHDijHjsX9Z60Qhcd1Wux-8ZdpjRDH68d1Gx5z06ODYc5tvL1s98wQWB8gPR9AFToHO6CYT3yXCXQf-Q2LkNiGphzJK0xkQIlQmZCHATazbEwCu-0yLsblkulxRYgyTzbGLkGJDCzJ_G5fAzvaPdeLgIQdXIyYeBdMzUEEhKC0GQj6sgN4wIBDThNP37ybDlosQkZKN74AMjzr3w0Zz_h8-Osk8h3GnbsphUU1-8WHhI8vhVvM5sb4"
            />
            {/* Overlay gradient for extra drama */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
          </div>
          
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', delay: 0.6, duration: 0.8 }}
            className="absolute -bottom-6 -right-6 bg-secondary-container p-8 shadow-2xl z-10"
          >
            <div className="text-on-secondary-container font-headline font-black text-4xl">28th</div>
            <div className="text-on-secondary-container font-headline font-bold uppercase tracking-tighter">Edition</div>
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
}
