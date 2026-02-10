"use client";

import { motion, Variants, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function MagneticButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    if (ref.current) {
      const { left, top, width, height } = ref.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      x.set((clientX - centerX) * 0.35);
      y.set((clientY - centerY) * 0.35);
    }
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
      style={{ x: springX, y: springY }}
      className={`bg-transparent ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 40, opacity: 0, filter: "blur(15px)" },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden bg-[#020202]">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1a1a1a_0%,transparent_70%)] opacity-50" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -left-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-600/10 blur-[100px] md:blur-[120px] rounded-full"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center select-none w-full max-w-5xl"
      >
        <motion.div variants={itemVariants} className="mb-6 md:mb-8">
          <span className="relative inline-flex items-center gap-2 px-4 md:px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl text-purple-300 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em]">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            Available for New Projects
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-7xl md:text-9xl lg:text-[11rem] font-extrabold tracking-tighter leading-[0.9] md:leading-[0.85] mb-8 md:mb-10"
        >
          <span className="bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
            Lungsom <br />
          </span>
          <span className="relative inline-block text-white">
            Lamnio.
            <motion.div
              className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-[2px] md:h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-transparent origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 1.5, ease: "circOut" }}
            />
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-gray-400 text-base md:text-2xl max-w-3xl mx-auto leading-relaxed mb-10 md:mb-14 font-light px-2 md:px-4"
        >
          I engineer{" "}
          <span className="text-white font-medium">
            immersive digital experiences &nbsp;
          </span>
          through high-end 3D visual language and robust cloud architectures.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center pb-10"
        >
          <MagneticButton className="w-full sm:w-auto">
            <a
              href="#projects"
              className="group relative px-10 md:px-14 py-4 md:py-5 bg-white text-black rounded-full font-bold transition-all overflow-hidden block text-center text-sm md:text-base"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 bg-[length:200%_auto] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Start Exploring
              </span>
            </a>
          </MagneticButton>

          <MagneticButton className="w-full sm:w-auto">
            <a
              href="#contact"
              className="group relative px-10 md:px-14 py-4 md:py-5 border border-white/10 hover:border-white/30 rounded-full font-bold transition-all backdrop-blur-xl block text-center text-sm md:text-base"
            >
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 text-white">Get In Touch</span>
            </a>
          </MagneticButton>
        </motion.div>
      </motion.div>

      {!isMobile && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 pointer-events-none hidden md:flex flex-col items-center gap-4"
        >
          <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.5em]">
            Scroll
          </span>
          <div className="w-px h-16 bg-gradient-to-b from-white/20 via-purple-500 to-transparent relative overflow-hidden">
            <motion.div
              animate={{ y: [0, 64] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-full h-1/2 bg-white"
            />
          </div>
        </motion.div>
      )}
    </section>
  );
}
