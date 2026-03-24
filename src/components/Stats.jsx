import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';

function Counter({ from = 0, to, duration = 2, prefix = '', suffix = '' }) {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const node = nodeRef.current;
      
      const controls = animate(from, to, {
        duration,
        onUpdate(value) {
          if (node) {
            node.textContent = `${prefix}${Math.round(value).toLocaleString()}${suffix}`;
          }
        },
      });

      return () => controls.stop();
    }
  }, [from, to, duration, isInView, prefix, suffix]);

  return <span ref={nodeRef} className="font-display text-5xl md:text-7xl text-[#00ff87] text-glow-green" />;
}

export default function Stats() {
  return (
    <section className="relative w-full py-24 bg-[#131313] border-t border-b border-[#262626]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl text-white tracking-widest uppercase">
            The Scale of <span className="text-[#00d4ff]">Battle</span>
          </h2>
          <p className="mt-4 text-gray-400 font-body max-w-2xl mx-auto text-lg">
            Prepare for the most intensive football tournament of the year. Witness legacy, skill, and unyielding momentum.
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center"
          >
            <Counter to={32} />
            <span className="mt-2 text-sm text-gray-400 font-body uppercase tracking-[0.2em]">Elite Teams</span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <Counter to={500} suffix="+" />
            <span className="mt-2 text-sm text-gray-400 font-body uppercase tracking-[0.2em]">Players</span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center"
          >
            <Counter to={64} />
            <span className="mt-2 text-sm text-gray-400 font-body uppercase tracking-[0.2em]">Matches</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <Counter to={50000} prefix="$" />
            <span className="mt-2 text-sm text-gray-400 font-body uppercase tracking-[0.2em]">Prize Pool</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
