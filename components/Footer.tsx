"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaGithub />,
      href: "https://github.com/LungsomLamnio",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/lungsom-lamnio-339914282/",
      label: "LinkedIn",
    },
    {
      icon: <FaTwitter />,
      href: "https://x.com/lungsom_lamnio",
      label: "Twitter",
    },
    {
      icon: <FaInstagram />,
      href: "https://www.instagram.com/lungsom.lamnio/",
      label: "Instagram",
    },
    {
      icon: <FaFacebook />,
      href: "https://www.facebook.com/profile.php?id=100036725803105",
      label: "Facebook",
    },
  ];

  return (
    <footer className="relative z-10 w-full pt-20 pb-10 px-6 border-t border-white/10 bg-black/50 backdrop-blur-lg">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 text-center md:text-left">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-purple-500 bg-clip-text text-transparent">
              Lungsom Lamnio
            </h3>
            <p className="text-gray-400 max-w-xs mx-auto md:mx-0">
              Building the future of the web with 3D visuals, scalable
              architectures, and creative code.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get in Touch</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center justify-center md:justify-start gap-3">
                <FaEnvelope className="text-purple-500" />
                <a
                  href="mailto:lungsomlamnio@gmail.com"
                  className="hover:text-purple-400 transition-colors"
                >
                  lungsomlamnio@gmail.com
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <FaPhoneAlt className="text-purple-500" />
                <span>(+91) 84130-50187</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <FaMapMarkerAlt className="text-purple-500" />
                <span>Guwahati, Assam, India</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Follow Me</h4>
            <div className="flex justify-center md:justify-start gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="p-3 bg-white/5 rounded-full border border-white/10 text-xl hover:text-purple-500 hover:border-purple-500 transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {currentYear} Lungsom Lamnio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a
              href="#experience"
              className="hover:text-white transition-colors"
            >
              Experience
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
