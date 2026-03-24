import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import Football3D from './Football3D';

export default function Hero() {
  const { scrollY } = useScroll();
  
  // Parallax layers
  const yBg = useTransform(scrollY, [0, 1000], [0, 300]);
  const yText = useTransform(scrollY, [0, 1000], [0, 150]);
  const yForeground = useTransform(scrollY, [0, 1000], [0, -100]);
  const yCanvas = useTransform(scrollY, [0, 1000], [0, 200]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-surface pt-20 w-full">
      {/* Background layer */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-20"
        style={{ y: yBg }}
      >
        <div className="absolute inset-0 ripple-bg"></div>
        <div className="absolute inset-0 kinetic-gradient"></div>
      </motion.div>

      {/* 3D Football Layer */}
      <motion.div 
        className="absolute inset-0 z-10 pointer-events-none opacity-40 mix-blend-screen"
        style={{ y: yCanvas }}
      >
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <Football3D />
        </Canvas>
      </motion.div>

      {/* Massive Red Title Overlay */}
      <motion.div 
        className="relative z-10 text-center px-4 w-full"
        style={{ y: yText }}
      >
        <motion.span 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="block text-red-500 font-headline text-lg md:text-2xl tracking-[0.5em] mb-4 uppercase"
        >
          IV BLOCK PRESENT
        </motion.span>
        
        <motion.h1 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[12vw] md:text-[15vw] font-black italic tracking-tighter text-primary-container leading-[0.8] uppercase opacity-90 select-none drop-shadow-[0_0_30px_rgba(204,0,0,0.4)]"
        >
          BBDMFT
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 mt-4"
        >
          <span className="text-4xl md:text-7xl font-headline font-black text-white uppercase tracking-tighter">
            28TH EDITION
          </span>
          <span className="text-2xl md:text-4xl font-headline font-bold text-red-600 italic tracking-widest uppercase text-glow-red">
            JOIN THE ACTION
          </span>
        </motion.div>
      </motion.div>

      {/* Animated Stat Bar */}
      <div className="w-full bg-primary-container py-4 mt-12 overflow-hidden whitespace-nowrap border-y border-red-400/30 relative z-20">
        <div className="flex gap-20 animate-marquee whitespace-nowrap">
          <span className="text-white font-headline font-black text-2xl uppercase italic">
            9 Teams • 1 Trophy • 28 Years of Legacy • Kickoff 29th March • JEC Grounds • High Intensity • 
          </span>
          <span className="text-white font-headline font-black text-2xl uppercase italic">
            9 Teams • 1 Trophy • 28 Years of Legacy • Kickoff 29th March • JEC Grounds • High Intensity • 
          </span>
        </div>
      </div>

      {/* Countdown & CTAs */}
      <motion.div 
        className="relative z-20 mt-16 flex flex-col items-center gap-8 w-full"
        style={{ y: yForeground }}
      >
        <CountdownTimer targetDate="2026-03-29T00:00:00" />
        
        <div className="flex flex-col sm:flex-row gap-6">
          <button className="px-10 py-5 bg-primary-container text-white font-headline font-black text-xl uppercase tracking-widest shadow-[0_0_30px_rgba(204,0,0,0.5)] hover:bg-white hover:text-primary-container transition-all duration-300 scale-100 hover:scale-110">
            Become a Sponsor
          </button>
          <button className="px-10 py-5 border-2 border-white text-white font-headline font-black text-xl uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
            View Tournament Details
          </button>
        </div>
      </motion.div>
    </section>
  );
}

// Custom specialized countdown
function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date(targetDate).getTime();
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;
      
      if (distance < 0) {
        clearInterval(interval);
        return;
      }
      
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);
    
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="grid grid-cols-4 gap-4 md:gap-10">
      <TimeUnit value={timeLeft.days} label="Days" />
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <TimeUnit value={timeLeft.minutes} label="Mins" />
      <TimeUnit value={timeLeft.seconds} label="Secs" />
    </div>
  );
}

function TimeUnit({ value, label }) {
  return (
    <div className="text-center">
      <span className="block text-4xl md:text-6xl font-headline font-black text-white">
        {value.toString().padStart(2, '0')}
      </span>
      <span className="text-xs uppercase text-red-500 font-bold tracking-widest">
        {label}
      </span>
    </div>
  );
}
