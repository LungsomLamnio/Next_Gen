"use client";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projectData = [
  {
    title: "Intelligent Traffic Management System",
    desc: "Real-time traffic flow management for smart cities.",
    tech: ["Python", "AI", "Google Maps API"],
    link: "https://github.com/LungsomLamnio/Intelligent-Traffic-Management-System",
  },
  {
    title: "Krishi Sakhi (SIH 2025)",
    desc: "AI-powered agricultural advisor App for Indian farmers.",
    tech: ["React Native", "AI", "ML"],
    link: "https://github.com/LungsomLamnio/KrishiSakhi",
  },
  {
    title: "AgriCare (Solution Challenge 2025)",
    desc: "AI-powered agricultural assistant Web App for Indian farmers.",
    tech: ["React Native", "TensorFlow", "Image Processing"],
    link: "https://github.com/LungsomLamnio/AgriCare",
  },
  {
    title: "FindHome (Trek-A-Thon 2025)",
    desc: "Online Travel Booking Platform specifically for the rural areas.",
    tech: ["React.js", "Tailwind", "Node.js"],
    link: "https://github.com/LungsomLamnio/Wanderlust",
  },
  {
    title: "EthniCraft (ByteHacks 2024)",
    desc: "Digital platform to supports Indian Local Artisans.",
    tech: ["MERN Stack", "Cloudinary"],
    link: "https://github.com/LungsomLamnio/ByteHacks",
  },
  {
    title: "ReacTalk",
    desc: "A secure chat app built using ReactJS.",
    tech: ["Socket.io", "Express", "MongoDB"],
    link: "https://github.com/LungsomLamnio/ReacTalk_Client",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-6 container mx-auto"
    >
      <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center lg:text-left text-white">
        Selected <span className="text-purple-500">Projects</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-purple-500/50 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="h-40 bg-purple-900/10 rounded-xl mb-6 flex items-center justify-center border border-white/5 overflow-hidden relative">
                <span className="text-purple-500/30 font-mono text-xs group-hover:scale-110 transition-transform duration-500 uppercase">
                  {project.title}
                </span>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <FiGithub className="text-white text-3xl" />
                </a>
              </div>

              <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
              </div>

              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                {project.desc}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono bg-purple-600/10 text-purple-400 border border-purple-500/20 px-3 py-1 rounded-full uppercase"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-white group/link"
              >
                View Project
                <FiExternalLink className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-16 flex justify-center"
      >
        <a
          href="https://github.com/LungsomLamnio"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative px-8 py-4 bg-transparent border border-purple-500/50 rounded-full font-bold text-white overflow-hidden transition-all hover:border-purple-500"
        >
          <div className="absolute inset-0 bg-purple-600/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          <span className="relative z-10 flex items-center gap-2">
            View More Projects on GitHub <FiGithub />
          </span>
        </a>
      </motion.div>
    </section>
  );
}
