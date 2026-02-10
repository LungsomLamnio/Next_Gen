"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Technical Lead",
    company: "Google Developers Group (GDG) AdtU",
    period: "Sept 2025 - Present",
    desc: "Managing all technical initiatives, mentoring team leads, and ensuring the successful execution of developer events campus-wide.",
  },
  {
    title: "Chief Technical Officer (R&D)",
    company: "Vernovate Pvt Ltd",
    period: "June 2025 - Present",
    desc: "Overseeing research and development for modern software solutions, specifically focusing on smart traffic management systems.",
  },
  {
    title: "Full Stack Web Developer Intern",
    company: "UptoSkills",
    period: "July 2025 – Sept 2025",
    desc: "Developed a scalable platform for human resource management, streamlining workflows and automating staff processes.",
  },
  {
    title: "Tech Contributor",
    company: "GirlScript Summer of Code",
    period: "July 2025 – Nov 2025",
    desc: "Actively contributed to open source projects, enhancing features and mentoring newer contributors in national OSS programs.",
  },
  {
    title: "Full Stack Web Developer Intern",
    company: "CodeSpirit",
    period: "Feb 2025 – Mar 2025",
    desc: "Built a web platform providing centralized updates for national and international hackathons, integrating notifications and event tracking.",
  },
  {
    title: "Web Dev Lead",
    company: "Google Developers Group (GDG) AdtU",
    period: "Oct 2024 – June 2025",
    desc: "Led web development workshops and events, built technical communities, and inspired innovative solutions on campus.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-6 container mx-auto bg-[#020202]"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-white">
          My <span className="text-purple-500">Journey</span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto italic">
          A timeline of my professional growth, community leadership, and
          technical contributions.
        </p>
      </motion.div>

      <div className="relative border-l border-purple-500/30 ml-4 md:mx-auto md:max-w-4xl">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="mb-12 ml-10 relative group"
          >
            <div className="absolute -left-[51px] top-1 w-6 h-6 bg-purple-600 rounded-full border-4 border-[#020202] shadow-[0_0_15px_rgba(124,58,237,0.5)] group-hover:scale-125 transition-transform duration-300 z-10" />

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300 shadow-xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <span className="text-purple-400 text-xs font-mono uppercase tracking-widest bg-purple-500/10 px-3 py-1 rounded-full w-fit">
                  {exp.period}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                {exp.title}
              </h3>

              <p className="text-purple-300 font-medium text-lg mt-1">
                {exp.company}
              </p>

              <p className="text-gray-400 mt-4 text-sm md:text-base leading-relaxed">
                {exp.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
