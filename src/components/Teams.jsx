import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Shield, Target, Zap, Flame, Trophy } from 'lucide-react'; // Placeholder icons for team logos

const TEAMS = [
  { id: 1, name: 'STRIKERS FC', group: 'Group A', icon: Shield, color: '#cc0000' },
  { id: 2, name: 'UNITED TITANS', group: 'Group A', icon: Zap, color: '#00d4ff' },
  { id: 3, name: 'THUNDER HAWKS', group: 'Group B', icon: Flame, color: '#00ff87' },
  { id: 4, name: 'IRON LEGION', group: 'Group B', icon: Target, color: '#ffd700' },
  { id: 5, name: 'NEON WOLVES', group: 'Group C', icon: Shield, color: '#ff00ff' },
  { id: 6, name: 'VOID RUNNERS', group: 'Group C', icon: Zap, color: '#ffffff' },
];

function TiltCard({ team }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full aspect-[3/4] rounded-sm bg-[#201f1f] flex flex-col items-center justify-center cursor-pointer overflow-hidden border border-white/5"
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Sheen Gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
      
      {/* 3D Inner items */}
      <motion.div 
        style={{ transform: "translateZ(50px)" }}
        className="flex flex-col items-center"
      >
        <team.icon size={64} color={team.color} strokeWidth={1.5} className="mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
        <h3 className="font-display text-2xl tracking-widest text-center text-white w-full px-4 mb-2">
          {team.name}
        </h3>
        <p className="font-body text-xs text-gray-500 uppercase tracking-[0.3em]">
          {team.group}
        </p>
      </motion.div>
      
      {/* Outer Glow Effect based on team color on hover is handled implicitly by shadow, or we just add a border */}
      <motion.div 
        className="absolute inset-0 opacity-0 hover:opacity-100 mix-blend-screen transition-opacity duration-300 pointer-events-none"
        style={{ 
          background: `radial-gradient(circle at center, ${team.color}11 0%, transparent 70%)` 
        }}
      />
    </motion.div>
  );
}

export default function Teams() {
  return (
    <section className="relative w-full py-24 bg-[#0e0e0e] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="font-display text-5xl md:text-7xl text-white tracking-wide uppercase">
              The <span className="text-[#00ff87]">Contenders</span>
            </h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-[#00ff87] font-body text-sm uppercase tracking-widest hover:text-white transition-colors duration-300 group">
            View All Teams
            <motion.span 
              className="inline-block"
              whileHover={{ x: 5 }}
            >
              →
            </motion.span>
          </button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6" style={{ perspective: 1000 }}>
          {TEAMS.map((team, idx) => (
            <motion.div
              key={team.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <TiltCard team={team} />
            </motion.div>
          ))}
        </div>
        
        <button className="md:hidden mt-12 w-full py-4 border border-[#00ff87] text-[#00ff87] font-body text-sm uppercase tracking-widest">
            View All Teams
        </button>
      </div>
    </section>
  );
}
