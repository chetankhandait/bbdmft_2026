import React from 'react';

export default function NavBar() {
  return (
    <>
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-xl bg-gradient-to-b from-black/80 to-transparent shadow-[0_0_40px_-10px_rgba(204,0,0,0.15)]">
        <div className="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto">
          <div className="text-3xl font-black italic tracking-tighter text-red-600 uppercase font-headline">BBDMFT</div>
          <div className="hidden md:flex gap-8 items-center">
            <a className="text-red-500 border-b-2 border-red-600 pb-1 text-sm font-medium uppercase tracking-widest font-headline" href="#">Home</a>
            <a className="text-white/80 hover:text-white transition-colors hover:scale-105 hover:text-red-500 transition-all duration-300 text-sm font-medium uppercase tracking-widest font-headline" href="#about">About</a>
            <a className="text-white/80 hover:text-white transition-colors hover:scale-105 hover:text-red-500 transition-all duration-300 text-sm font-medium uppercase tracking-widest font-headline" href="#packages">Packages</a>
            <a className="text-white/80 hover:text-white transition-colors hover:scale-105 hover:text-red-500 transition-all duration-300 text-sm font-medium uppercase tracking-widest font-headline" href="#enroll">Enroll</a>
            <a className="text-white/80 hover:text-white transition-colors hover:scale-105 hover:text-red-500 transition-all duration-300 text-sm font-medium uppercase tracking-widest font-headline" href="#past-sponsors">Past Sponsors</a>
            <a className="text-white/80 hover:text-white transition-colors hover:scale-105 hover:text-red-500 transition-all duration-300 text-sm font-medium uppercase tracking-widest font-headline" href="#gallery">Gallery</a>
          </div>
          <button className="bg-primary-container text-white px-6 py-2 font-headline font-bold uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all duration-300">
            Become a Sponsor
          </button>
        </div>
      </nav>

      {/* SideNavBar (WhatsApp Support) */}
      <a 
        className="fixed bottom-8 right-8 rounded-full p-4 shadow-[0_0_20px_rgba(34,197,94,0.4)] z-50 bg-green-600 text-white flex items-center justify-center w-16 h-16 hover:scale-110 hover:rotate-12 transition-transform active:scale-90 duration-300 group" 
        href="#"
      >
        <span className="material-symbols-outlined text-3xl">chat</span>
        <span className="absolute right-20 bg-green-600 px-4 py-2 rounded-lg text-xs font-bold uppercase font-headline opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          WhatsApp Support
        </span>
      </a>
    </>
  );
}
