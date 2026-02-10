"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    navLinks.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6 pointer-events-none"
    >
      <div
        className="relative flex items-center justify-between md:justify-center 
                      gap-3 sm:gap-6 md:gap-8 
                      px-4 sm:px-6 md:px-8 py-2.5 md:py-3 
                      rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl 
                      pointer-events-auto max-w-[95vw] sm:max-w-none"
      >
        {navLinks.map((link) => {
          const isActive = activeSection === link.href;

          return (
            <Link
              key={link.name}
              href={link.href}
              className={`relative text-[11px] sm:text-xs md:text-sm font-medium transition-colors duration-300 whitespace-nowrap px-2 py-1 ${
                isActive ? "text-white" : "text-gray-400 hover:text-purple-400"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activePill"
                  className="absolute inset-0 bg-purple-600/20 rounded-full -z-10"
                  initial={false}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {link.name}
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}
