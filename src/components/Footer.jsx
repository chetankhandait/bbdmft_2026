import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 ripple-bg pointer-events-none opacity-20 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-t before:from-red-900/20 before:to-transparent"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="text-3xl font-black text-red-600 font-headline italic">BBDMFT</div>
            <p className="text-xs tracking-tight text-white/60 font-body">Organized by IV BLOCK, Jabalpur Engineering College (JEC). Celebrating 28 years of pure sporting grit.</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-white font-headline font-bold uppercase tracking-widest text-sm">Follow Us</h4>
            <div className="flex gap-4">
              <a className="text-white/60 hover:text-red-500 transition-colors" href="#"><span className="material-symbols-outlined">share</span></a>
              <a className="text-white/60 hover:text-red-500 transition-colors" href="#">Instagram</a>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-white font-headline font-bold uppercase tracking-widest text-sm">Contact Info</h4>
            <ul className="text-xs text-white/60 space-y-2">
              <li>+91 93019-34603</li>
              <li>bbdmft.jec@gmail.com</li>
              <li>JEC Hostel Grounds, Jabalpur</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-white font-headline font-bold uppercase tracking-widest text-sm">Location</h4>
            <div className="h-32 bg-surface-container overflow-hidden">
              <img className="w-full h-full object-cover grayscale opacity-50" alt="minimalist map" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJAA6m7VIetHFcw7DoWzB1xEqE3Xd2X2oEQtF20xRlhuoU8_eBRx-AsKUqeleX2uV7_de0MrMYMR7CWau5vYsXiySpDWfmhZg6ZlnPXQdU4qtwJSEjmxnRUMSiJMHHh15U8hQ4kbZ7KcfxUqFiIiatDOWiQ-oILHfCEZlQx7W8ukbv_vjMD6dHrgPkAwjinRxVbUFSEl8oA-h7hca9vWru9bU2XUcBxS0BAwdGbqMxmcQ98u97dTCxWnRpU2LnW09jtm4iF6wscKE"/>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <p className="text-xs tracking-tight text-white/40 uppercase font-headline">BBDMFT — 28th Edition | Organized by IV BLOCK, JEC</p>
          <div class="flex gap-8">
            <a className="text-xs tracking-tight text-white/40 hover:text-yellow-400 transition-colors uppercase font-headline" href="#">Privacy Policy</a>
            <a className="text-xs tracking-tight text-white/40 hover:text-yellow-400 transition-colors uppercase font-headline" href="#">Terms of Entry</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
