"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  const skillCategories = [
    {
      name: "Languages",
      skills: [
        "C",
        "C++",
        "Java",
        "JavaScript",
        "TypeScript",
        "Python",
        "Objective-C",
        "Ruby",
      ],
    },
    {
      name: "Frontend",
      skills: [
        "HTML5",
        "CSS3",
        "React",
        "Angular",
        "Svelte",
        "Tailwind CSS",
        "Bootstrap",
        "EJS",
      ],
    },
    {
      name: "Backend & DB",
      skills: [
        "Node.js",
        "Express.js",
        "Apache Tomcat",
        "MongoDB",
        "MySQL",
        "PostgreSQL",
        "Firebase",
        "SQLite",
      ],
    },
    {
      name: "AI/ML & Mobile",
      skills: [
        "React Native",
        "Kotlin",
        "TensorFlow",
        "Pandas",
        "OpenCV",
        "NumPy",
        "Matplotlib",
      ],
    },
    {
      name: "DevOps & Tools",
      skills: [
        "Docker",
        "Postman",
        "Git",
        "GitHub",
        "Vercel",
        "Netlify",
        "Figma",
        "Canva",
      ],
    },
  ];

  const previewSkills = [
    "React",
    "Next.js",
    "Node.js",
    "Three.js",
    "Tailwind",
    "MongoDB",
    "TypeScript",
    "Python",
    "Docker",
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center py-20 px-6 bg-[#020202]"
    >
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative z-20 space-y-6"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white">
            About <span className="text-purple-500">Me</span>
          </h2>

          <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
            <p>
              I am a{" "}
              <span className="">
                6th-semester Computer Science & Engineering student
              </span>{" "}
              at Assam down town University.
            </p>
            <p>
              Currently, I serve as the{" "}
              <span className="">Chief Technical Officer (R&D)</span> at my own
              startup,{" "}
              <span className="text-white font-medium text-purple-400">
                Vernovate Pvt. Ltd.
              </span>
              , pioneering solutions for{" "}
              <span className="">smart traffic management systems</span>.
            </p>
            <p>
              Driven by community, I also hold the position of
              <span className=""> Technical Lead</span> for
              <span className="text-purple-400 font-semibold text-white">
                {" "}
                GDG on Campus AdtU
              </span>
              .
            </p>
          </div>

          <div className="relative pt-4">
            <div
              className={`flex flex-wrap gap-3 overflow-hidden transition-all duration-700 ${isExpanded ? "max-h-[1000px]" : "max-h-[110px]"}`}
            >
              {!isExpanded ? (
                previewSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-purple-600/10 border border-purple-500/20 rounded-lg text-purple-400 text-sm font-mono whitespace-nowrap"
                  >
                    {skill}
                  </span>
                ))
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full py-2">
                  {skillCategories.map((cat) => (
                    <motion.div
                      key={cat.name}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="space-y-2"
                    >
                      <h4 className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">
                        {cat.name}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {cat.skills.map((s) => (
                          <span
                            key={s}
                            className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-gray-300 text-xs hover:border-purple-500 transition-colors"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {!isExpanded && (
              <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#020202] to-transparent pointer-events-none z-10" />
            )}

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="relative z-30 mt-6 group flex items-center gap-3 text-sm font-bold text-purple-400 hover:text-purple-300 transition-all"
            >
              <span className="bg-purple-600/20 px-4 py-2 rounded-full border border-purple-500/30 group-hover:bg-purple-600/40 transition-colors shadow-lg shadow-purple-900/20">
                {isExpanded ? "Show Less ↑" : "Show More +"}
              </span>
              <div className="hidden sm:block h-px w-8 bg-purple-500/30 group-hover:w-16 transition-all duration-500" />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative group z-10"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative h-[400px] md:h-[550px] w-full rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl">
            <Image
              src="/PFP.png"
              alt="Lungsom Lamnio Profile"
              fill
              className="object-cover grayscale-0 md:grayscale md:hover:grayscale-0 transition-all duration-500"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
