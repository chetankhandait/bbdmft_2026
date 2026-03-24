import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FIXTURES = [
  { id: 1, date: 'Mar 29', time: '18:00', team1: 'STRIKERS FC', team2: 'UNITED TITANS', group: 'A', venue: 'Main Stadium' },
  { id: 2, date: 'Mar 29', time: '20:30', team1: 'THUNDER HAWKS', team2: 'IRON LEGION', group: 'B', venue: 'Pitch 2' },
  { id: 3, date: 'Mar 30', time: '17:00', team1: 'NEON WOLVES', team2: 'VOID RUNNERS', group: 'C', venue: 'Main Stadium' },
  { id: 4, date: 'Mar 30', time: '19:30', team1: 'STRIKERS FC', team2: 'IRON LEGION', group: 'A', venue: 'Pitch 1' },
];

const GROUPS = ['All', 'A', 'B', 'C'];

export default function Fixtures() {
  const [activeGroup, setActiveGroup] = useState('All');

  const filteredFixtures = activeGroup === 'All' 
    ? FIXTURES 
    : FIXTURES.filter(f => f.group === activeGroup);

  return (
    <section className="relative w-full py-24 bg-[#0a0a0a]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-[#00d4ff] opacity-5 blur-[120px] pointer-events-none rounded-full" />
      
      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-7xl text-white tracking-widest uppercase">
            Match <span className="text-[#00d4ff]">Fixtures</span>
          </h2>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {GROUPS.map(group => (
            <button
              key={group}
              onClick={() => setActiveGroup(group)}
              className={`px-8 py-2 font-display text-xl transition-all duration-300 border ${
                activeGroup === group 
                  ? 'bg-[#00d4ff] text-[#0a0a0a] border-[#00d4ff] drop-shadow-[0_0_10px_rgba(0,212,255,0.8)]' 
                  : 'bg-transparent text-gray-400 border-gray-600 hover:text-white hover:border-white'
              }`}
            >
              {group === 'All' ? 'All Matches' : `Group ${group}`}
            </button>
          ))}
        </div>

        {/* Fixtures List */}
        <div className="flex flex-col gap-4">
          <AnimatePresence mode="popLayout">
            {filteredFixtures.map((fixture) => (
              <motion.div
                key={fixture.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="glass-panel w-full flex flex-col md:flex-row items-center justify-between p-6 gap-6 group hover:bg-white/10 transition-colors"
              >
                {/* Date & Time */}
                <div className="flex flex-col items-center md:items-start min-w-[120px]">
                  <span className="font-display text-2xl text-[#00d4ff]">{fixture.date}</span>
                  <span className="font-body text-sm text-gray-400">{fixture.time}</span>
                </div>

                {/* Teams */}
                <div className="flex-1 flex items-center justify-center gap-4 md:gap-8 w-full">
                  <span className="font-display text-xl md:text-3xl text-right flex-1 truncate">{fixture.team1}</span>
                  <span className="font-body text-xs text-gray-500 bg-[#262626] px-3 py-1 rounded-sm">VS</span>
                  <span className="font-display text-xl md:text-3xl text-left flex-1 truncate">{fixture.team2}</span>
                </div>

                {/* Venue & Action */}
                <div className="flex flex-col items-center md:items-end min-w-[120px]">
                  <span className="font-body text-sm text-gray-300 uppercase tracking-wider">{fixture.venue}</span>
                  <button className="mt-2 text-xs font-body text-[#00d4ff] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">
                    Set Reminder →
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {filteredFixtures.length === 0 && (
            <motion.p 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="text-center text-gray-500 font-body py-12"
            >
              No matches scheduled for this group.
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
