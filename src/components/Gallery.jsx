import React from 'react';
import { motion } from 'framer-motion';

export default function Gallery() {
  return (
    <section className="py-24 bg-surface px-8 w-full" id="gallery">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-headline font-black text-white uppercase text-center mb-16"
        >
          GALLERY HIGHLIGHTS
        </motion.h2>

        <div className="columns-1 md:columns-3 gap-8 space-y-8 w-full">
          {/* Image 1 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="break-inside-avoid overflow-hidden"
          >
            <img 
              className="w-full grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500 shadow-2xl" 
              alt="footballer celebrating" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKw5BVYLwYmaKS_2yXY0wnwoGs4tjMdRmyNMtsRe7swhX_BTD4wfmA7gEzYgxWJaGmfspB5VkGfKvBaNTl74pCbIASjQN6FAos4sYwUls3dwNHLF1UBAFJHyiiMVTMuKcvxpZLpBxrXzKZ_IrkpEEioUcyAzkhDQirvojXsXUdw2E-RU_GoFt5IIvDfEMXTZEeQl0L8RSprJz5WEeszlqzfbOSwJjOwLm3c0XjOA264NVc299Y3GkgIwXpvEqnEz2fi7uGofWLIuc"
            />
          </motion.div>

          {/* Text Block */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 }}
            className="break-inside-avoid bg-surface-container-high p-8 border-t-8 border-primary-container shadow-2xl hover:-translate-y-2 transition-transform duration-300"
          >
            <h3 className="text-xl font-headline font-black text-white uppercase mb-4 tracking-widest text-glow-red">IN THE NEWS</h3>
            <p className="text-sm text-on-surface-variant mb-6 italic leading-relaxed">"BBDMFT continues to set records as the most attended youth football tournament in the state."</p>
            <div className="text-xs font-bold text-primary-container">— The Hitavada News</div>
          </motion.div>

          {/* Image 2 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2 }}
            className="break-inside-avoid overflow-hidden"
          >
            <img 
              className="w-full grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500 shadow-2xl" 
              alt="stadium crowd" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuk5fOqwnJGJJXCvbX9m6eAAsFCgSyYbtXazDyIIDbVC-DLgvEa38mtS5juldf7CGpAMYF7rs8LoqE3VOwjVEXHPfvxmuNyhC_s8FVsaN7tsezhpkusF_OQJ7z1UqlwdKYUKIvhJDshDzf3vOCwmll8SK_LSkiAsoUg8LSsrRCrzXDdS-F8edKr68usB-ZM_TVj97kUw0mo26LQ6Y_GCCpMRnGrSCKec2D3i7wdzmKg7JXfgALIDAPwIfgsk2pbnL5anGvhu28V6I"
            />
          </motion.div>

          {/* Image 3 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.3 }}
            className="break-inside-avoid overflow-hidden"
          >
            <img 
              className="w-full grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500 shadow-2xl" 
              alt="football cleats" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4KKdQ8_9lo2ZAecUu32rBLU5dtyNCmzpoJIuaoxXOa0Lg4sOTHvWMnoxQDJ9YNOZ1NdNYLCrqo6CnJgteboUgBfW7MXapXUOPHesnre2URREuGPeUBgBzGNURrDS3Uyf70yWDoOKmVhS50Jv1ceYRdoIqQUkRTroWXi53zdFkDWuEcAUgYezUIKvJO8UfHTH9dSUPQHsMk5k4lM3CaZT5SLszWIC992x0EYZYcBQ-CRifKnsZD9tBjnRIFhHWwUoJizamE7IWo9U"
            />
          </motion.div>

          {/* Image 4 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.4 }}
            className="break-inside-avoid overflow-hidden"
          >
            <img 
              className="w-full grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500 shadow-2xl" 
              alt="group team spirit" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4RYwGaKgRZ_d7Tr5S5YBpYu1Op5v-I__aSDHIf-Xva7fvFHTet5IQiK0bO9ZmclI4_elCuuvwf5pPBVwa4ZQYelG0o9Xh8CckisCU2w3u0Y8bEmSuZiGhw60byJIuT0Ht-_MkZBN5enSDC3CgPT4sKhWT4jRF-NSGVxmRGu3-8fH80S6dCavx-sEaftQa0w5u__3la0dhxIkYuKhcJaKXgDcG44I8EtAgmdz1Whz3ZI0qQBIydH2q9bCvB9sM2iarIDWGifSxDbk"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
