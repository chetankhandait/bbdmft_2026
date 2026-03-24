import React from 'react';
import { motion } from 'framer-motion';

const STANDINGS = [
  { rank: 1, team: 'STRIKERS FC', played: 3, won: 3, drawn: 0, lost: 0, gd: '+5', points: 9, status: 'up' },
  { rank: 2, team: 'NEON WOLVES', played: 3, won: 2, drawn: 1, lost: 0, gd: '+3', points: 7, status: 'same' },
  { rank: 3, team: 'THUNDER HAWKS', played: 3, won: 1, drawn: 1, lost: 1, gd: '0', points: 4, status: 'down' },
  { rank: 4, team: 'UNITED TITANS', played: 3, won: 1, drawn: 0, lost: 2, gd: '-2', points: 3, status: 'same' },
  { rank: 5, team: 'IRON LEGION', played: 3, won: 0, drawn: 1, lost: 2, gd: '-3', points: 1, status: 'down' },
];

export default function Standings() {
  return (
    <section className="relative w-full py-24 bg-[#131313] border-t border-[#262626]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="font-display text-5xl md:text-7xl text-white tracking-widest uppercase">
              League <span className="text-[#ffd700]">Table</span>
            </h2>
          </div>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b-2 border-[#333] font-body text-xs text-gray-400 uppercase tracking-[0.2em]">
                <th className="py-4 px-4 w-16 text-center">Pos</th>
                <th className="py-4 px-4 text-left">Club</th>
                <th className="py-4 px-4 text-center">MP</th>
                <th className="py-4 px-4 text-center hidden md:table-cell">W</th>
                <th className="py-4 px-4 text-center hidden md:table-cell">D</th>
                <th className="py-4 px-4 text-center hidden md:table-cell">L</th>
                <th className="py-4 px-4 text-center">GD</th>
                <th className="py-4 px-4 text-center text-[#ffd700]">Pts</th>
              </tr>
            </thead>
            <tbody>
              {STANDINGS.map((row, index) => (
                <motion.tr 
                  key={row.team}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="border-b border-white/5 hover:bg-white/5 transition-colors group"
                >
                  <td className="py-5 px-4 text-center font-display text-2xl text-gray-500">
                    {row.rank}
                  </td>
                  <td className="py-5 px-4 font-display text-2xl tracking-wider text-white flex items-center gap-3">
                    {row.team}
                    {row.status === 'up' && <span className="text-[#00ff87] text-sm">↑</span>}
                    {row.status === 'down' && <span className="text-[#cc0000] text-sm">↓</span>}
                    {row.status === 'same' && <span className="text-gray-500 text-sm">-</span>}
                  </td>
                  <td className="py-5 px-4 text-center font-body">{row.played}</td>
                  <td className="py-5 px-4 text-center font-body hidden md:table-cell text-gray-400">{row.won}</td>
                  <td className="py-5 px-4 text-center font-body hidden md:table-cell text-gray-400">{row.drawn}</td>
                  <td className="py-5 px-4 text-center font-body hidden md:table-cell text-gray-400">{row.lost}</td>
                  <td className="py-5 px-4 text-center font-body text-gray-300">{row.gd}</td>
                  <td className="py-5 px-4 text-center font-display text-3xl text-[#ffd700]">{row.points}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
