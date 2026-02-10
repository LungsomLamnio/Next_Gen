"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const achievementData = [
  {
    title: "Received 5 Lakh Grant under DST NIDHI iTBI",
    category: "@StartUp",
    location: "Assam down town University, 2025",
    img: "https://res.cloudinary.com/dgmftp80m/image/upload/v1764350071/IMG-20250610-WA0050_ju86v8.jpg", // Replace with your actual image paths
  },
  {
    title: "Awarded as Student of the Year & Academics",
    category: "@Education",
    location: "Assam down town University, 2025",
    img: "https://res.cloudinary.com/dgmftp80m/image/upload/v1764353245/StudentOfTheYear_aazvtb.jpg",
  },
  {
    title: "Winner of Innovation (Assam down town University)",
    category: "@Hackathon",
    location: "Assam down town University, 2024",
    img: "https://res.cloudinary.com/dgmftp80m/image/upload/v1764353559/WhatsApp_Image_2025-02-19_at_23.28.48_vlmtx2.jpg",
  },
  {
    title: "Winner of Co. GPD Hackathon",
    category: "@Hackathon",
    location: "Jorhat Engineering Hackathon, 2025",
    img: "https://res.cloudinary.com/dgmftp80m/image/upload/v1764354060/1744033003308_xxzjuc.jpg",
  },
  {
    title: "Awarded as All Rounder (Rising Star)",
    category: "@Education",
    location: "Assam down town University, 2025",
    img: "https://res.cloudinary.com/dgmftp80m/image/upload/v1764353739/WhatsApp_Image_2025-02-19_at_23.28.47_1_gx3yog.jpg",
  },
  {
    title: "Awarded as Student of the Month (February)",
    category: "@Education",
    location: "Assam down town University, 2025",
    img: "https://res.cloudinary.com/dgmftp80m/image/upload/v1764353856/Screenshot_2025-05-09-21-34-49-505_com.instagram.android-edit_n4clw8.jpg",
  },
  {
    title: "Pitching at Udyomotsav (National StartUp Day)",
    category: "@StartUp",
    location: "Assam Don Bosco University, 2025",
    img: "https://res.cloudinary.com/dgmftp80m/image/upload/v1770742295/WhatsApp_Image_2025-01-18_at_17.29.08_copy_inqjvb.jpg",
  },
  {
    title: "Received 25k Grant Under Student Innovation",
    category: "@StartUp",
    location: "Assam down town University, 2025",
    img: "https://res.cloudinary.com/dgmftp80m/image/upload/v1764350071/WhatsApp_Image_2025-02-04_at_12.12.01_hbkxrs.jpg",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="py-20 px-6 container mx-auto bg-[#020202]"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold text-white">
          Major <span className="text-purple-500">Milestones</span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Recognition for academic excellence, innovation, and startup
          initiatives.
        </p>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
        {achievementData.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="break-inside-avoid group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:border-purple-500/50"
          >
            <div className="relative aspect-[4/5] w-full bg-purple-900/10 overflow-hidden">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity" />
            </div>

            <div className="absolute bottom-0 left-0 p-6 w-full">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest bg-purple-500/10 px-2 py-1 rounded">
                  {item.category}
                </span>
              </div>
              <h3 className="text-white font-bold text-sm leading-tight group-hover:text-purple-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 text-[10px] mt-2 font-medium">
                {item.location}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
