"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Scene3D from "@/components/visuals/Scene3D";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Achievements from "@/components/Achievements";
import Footer from "@/components/Footer";
import Preloader from "@/components/PreLoad";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, [isLoading]);

  return (
    <main className="relative bg-[#020202] min-h-screen">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Navbar />

          <div className="fixed inset-0 z-0">
            <Scene3D />
          </div>

          <div className="relative z-10 flex flex-col">
            <Hero />
            <About />
            <Projects />
            <Achievements />
            <Experience />
            <Contact />
            <Footer />
          </div>
        </>
      )}
    </main>
  );
}