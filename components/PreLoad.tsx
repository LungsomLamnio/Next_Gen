"use client";
import { useEffect, useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [percent, setPercent] = useState(0);
  
  const bootData = [
    "INITIALIZING CORE...",
    "ESTABLISHING NEURAL LINK...",
    "LUNGSOM_LAMNIO.EXE LOADING...",
    "CTO_MODULE: ACTIVE",
    "GDG_LEAD_CORE: READY",
    "SYSTEM OPTIMIZED."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const spread = Math.random() > 0.9 ? 4 : 1; 
        return Math.min(prev + spread, 100);
      });
    }, 60);

    return () => clearInterval(interval);
  }, []);

  const terminalVariants: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { 
      y: "-100%", 
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
    }
  };

  return (
    <motion.div
      variants={terminalVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020202] text-white font-mono overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.03] text-[8px] md:text-[10px] leading-none break-all pointer-events-none select-none overflow-hidden h-full">
        {Array.from({ length: 40 }).map((_, i) => (
          <p key={i} className="whitespace-nowrap">01010110 10101101 00110011 11001100 10101010 01010101 11110000 00001111</p>
        ))}
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:40px_40px] opacity-[0.05]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020202_90%)]" />

      <motion.div 
        animate={{ top: ["-10%", "110%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-[1px] bg-purple-500/30 z-[105] shadow-[0_0_15px_#a855f7]" 
      />

      <div className="relative z-[110] flex flex-col items-center w-full px-4">
        
        <div className="relative mb-12 md:mb-16">
          <motion.div 
            animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -inset-10 bg-purple-600/10 rounded-full blur-3xl"
          />
          <h1 className="text-7xl sm:text-8xl md:text-[12rem] font-black tracking-tighter flex items-start">
            {percent}
            <span className="text-purple-500 text-2xl sm:text-3xl md:text-5xl mt-2 md:mt-8 ml-1">%</span>
          </h1>
          <h1 className="absolute inset-0 text-purple-500/5 translate-x-[2px] translate-y-[2px] blur-[1px] font-black text-7xl sm:text-8xl md:text-[12rem] tracking-tighter pointer-events-none">
            {percent}
          </h1>
        </div>

        <div className="flex flex-col items-center gap-6 w-full max-w-[280px] md:max-w-md">
          <div className="h-6 flex items-center text-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={Math.floor(percent / 20)}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                className="text-purple-400 text-[9px] md:text-xs tracking-[0.3em] md:tracking-[0.5em] font-bold uppercase"
              >
                {bootData[Math.min(Math.floor(percent / 20), bootData.length - 1)]}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="w-full max-w-[200px] md:max-w-xs h-[2px] bg-white/10 relative overflow-hidden rounded-full">
            <motion.div 
              animate={{ width: `${percent}%` }}
              className="absolute h-full bg-gradient-to-r from-purple-600 to-purple-400 shadow-[0_0_12px_#a855f7]"
            />
            <motion.div 
              animate={{ x: ["-100%", "100%"], opacity: [0, 0.5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="absolute h-full w-1/2 bg-white/20 skew-x-12"
            />
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <span className="text-[7px] md:text-[8px] text-white/30 tracking-widest uppercase border-r border-white/10 pr-4">Node: 20.x</span>
            <span className="text-[7px] md:text-[8px] text-white/30 tracking-widest uppercase">System: Optimized</span>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[size:100%_4px]" />
    </motion.div>
  );
}