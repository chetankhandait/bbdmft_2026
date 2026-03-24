import React from 'react';
import { motion } from 'framer-motion';

export default function Registration() {
  return (
    <section className="w-full py-32 bg-[#0e0e0e] relative border-t border-[#1a1a1a]">
      {/* Dynamic Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 max-w-3xl bg-[#cc0000] opacity-10 blur-[150px] pointer-events-none rounded-t-full" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side Info */}
        <div className="flex-1">
          <h2 className="font-display text-5xl md:text-7xl text-white tracking-tight leading-none mb-6">
            SECURE YOUR <br />
            <span className="text-glow-red text-[#cc0000]">LEGACY.</span>
          </h2>
          <p className="font-body text-gray-400 mb-8 max-w-sm">
            Registrations for the 28th Edition are now open. Assemble your squad and prepare for the ultimate proving ground.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#1a1a1a] flex items-center justify-center font-display text-[#cc0000] text-xl">01</div>
              <div>
                <h4 className="font-display text-white text-xl tracking-wide">Register Team</h4>
                <p className="font-body text-xs text-gray-500">Fill the essential details and roster.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#1a1a1a] flex items-center justify-center font-display text-[#00ff87] text-xl">02</div>
              <div>
                <h4 className="font-display text-white text-xl tracking-wide">Verification</h4>
                <p className="font-body text-xs text-gray-500">Admin review and group placement.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 w-full glass-panel p-8 md:p-10"
        >
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="group relative">
              <input 
                type="text" 
                placeholder="Team Name" 
                className="w-full bg-[#131313] border-b-2 border-transparent text-white font-display text-xl px-4 py-4 outline-none focus:border-[#cc0000] transition-colors focus:bg-[#1a1a1a]"
                required
              />
            </div>
            <div className="group relative">
              <input 
                type="text" 
                placeholder="Captain's Name" 
                className="w-full bg-[#131313] border-b-2 border-transparent text-white font-display text-xl px-4 py-4 outline-none focus:border-[#cc0000] transition-colors focus:bg-[#1a1a1a]"
                required
              />
            </div>
            <div className="group relative">
              <input 
                type="email" 
                placeholder="Contact Email" 
                className="w-full bg-[#131313] border-b-2 border-transparent text-white font-display text-xl px-4 py-4 outline-none focus:border-[#cc0000] transition-colors focus:bg-[#1a1a1a]"
                required
              />
            </div>
            <button 
              type="submit"
              className="mt-4 w-full py-5 bg-[#cc0000] text-white font-display text-2xl tracking-widest uppercase hover:bg-white hover:text-[#cc0000] transition-all duration-300 glow-box-red"
            >
              Enroll Now
            </button>
            <p className="text-center font-body text-xs text-gray-500">
              * By enrolling, you agree to the tournament regulations.
            </p>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
