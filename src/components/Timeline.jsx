import React from 'react';
import { motion } from 'framer-motion';

export default function Timeline() {
  const nodes = [
    {
      title: "Grand Opening",
      date: "29th March",
      desc: "Ceremonial kickoff and inaugural match under the floodlights.",
      align: 'right'
    },
    {
      title: "Group Matches",
      date: "29th–31st March",
      desc: "9 Teams battle across multiple group stages to secure a spot in the finals.",
      align: 'left'
    },
    {
      title: "Finals & Awards",
      date: "1st April",
      desc: "The ultimate showdown followed by the trophy presentation for the 28th Edition champions.",
      align: 'right'
    }
  ];

  return (
    <section className="py-24 bg-surface w-full overflow-hidden">
      <div className="max-w-4xl mx-auto px-8 relative">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-headline font-black text-white text-center mb-20 uppercase tracking-[0.2em]"
        >
          Tournament Timeline
        </motion.h2>

        <div className="relative border-l-2 border-primary-container/30 ml-4 md:ml-0 md:flex md:flex-col items-center w-full">
          {/* Central Line for desktop view */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-primary-container/30 transform -translate-x-1/2"></div>
          
          {nodes.map((node, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2 }}
              className={`mb-16 relative pl-10 md:pl-0 md:flex items-center w-full ${index === nodes.length - 1 ? 'mb-0' : ''}`}
            >
              {/* Node dot */}
              <div 
                className={`absolute left-[-9px] md:left-1/2 md:-ml-2 w-4 h-4 rounded-full ring-8 shadow-[0_0_15px_rgba(255,255,255,0.4)] z-10
                ${index === 0 ? 'bg-primary-container ring-primary-container/20' : 
                  index === 1 ? 'bg-white ring-white/10' : 'bg-secondary-container ring-secondary-container/20'}`}
              ></div>
              
              <div className={`md:w-1/2 ${node.align === 'right' ? 'md:pr-16 md:text-right order-2 md:order-1' : 'md:pl-16 md:text-left order-1 md:order-2 ml-auto'}`}>
                <h3 className="text-2xl font-headline font-black text-white uppercase">{node.title}</h3>
                <p className="text-primary-container font-headline font-bold tracking-widest">{node.date}</p>
                <p className={`text-on-surface-variant text-sm mt-2 md:hidden block`}>{node.desc}</p>
              </div>

              <div className={`hidden md:block md:w-1/2 ${node.align === 'right' ? 'md:pl-16 text-left order-1 md:order-2' : 'md:pr-16 md:text-right order-2 md:order-1'}`}>
                <p className="text-on-surface-variant text-sm">{node.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
