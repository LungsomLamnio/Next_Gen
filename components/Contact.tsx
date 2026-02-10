"use client";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  FiMail,
  FiArrowUpRight,
  FiCopy,
  FiSend,
  FiCheckCircle,
  FiX,
} from "react-icons/fi";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const email = "lungsomlamnio@gmail.com";

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mqedeadk", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        const result = await response.json();
        throw new Error(result.errors?.[0]?.message || "Failed to send");
      }
    } catch (error: any) {
      console.error("Submission Error:", error);
      setStatus("idle");
      alert(error.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center py-24 px-6 bg-[#020202] relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-white">
          Get In <span className="text-purple-500">Touch</span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-lg mx-auto italic">
          Let’s discuss your next project or just say hi!
        </p>
      </motion.div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        onMouseMove={handleMouseMove}
        className="group relative max-w-5xl w-full bg-white/[0.02] p-8 md:p-16 rounded-[3rem] border border-white/10 backdrop-blur-3xl overflow-hidden"
      >
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-[3rem] opacity-0 group-hover:opacity-100 transition duration-300"
          style={{
            background: useTransform(
              [mouseX, mouseY],
              ([x, y]) =>
                `radial-gradient(600px circle at ${x}px ${y}px, rgba(168, 85, 247, 0.15), transparent 40%)`,
            ),
          }}
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center mb-6 border border-purple-500/30 mx-auto lg:mx-0">
              <FiMail className="text-2xl text-purple-400" />
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tighter text-white">
              Let&apos;s build <br />
              <span className="text-purple-500 italic">something great.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed">
              Currently open to{" "}
              <span className="text-white">Full Stack opportunities</span> and
              research-driven software solutions.
            </p>

            <div className="flex flex-col items-center lg:items-start gap-4">
              <a
                href={`mailto:${email}`}
                className="group/link text-xl md:text-2xl font-medium text-white hover:text-purple-400 transition-all flex items-center gap-2"
              >
                {email}{" "}
                <FiArrowUpRight className="opacity-0 group-hover/link:opacity-100 transition-all" />
              </a>
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-2 text-xs font-mono text-gray-500 hover:text-white transition-colors"
              >
                <FiCopy /> {copied ? "Copied!" : "Copy email address"}
              </button>
            </div>
          </div>

          <div className="relative">
            <AnimatePresence>
              {status === "success" && (
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    backdropFilter: "blur(0px)",
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    backdropFilter: "blur(10px)",
                  }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="absolute inset-0 z-[50] flex flex-col items-center justify-center bg-black/60 rounded-3xl border border-purple-500/20 text-center p-6"
                >
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 mb-4 border border-green-500/30">
                    <FiCheckCircle size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-400 text-sm mb-6">
                    Thank you for reaching out. I&apos;ll get back to you soon.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="px-6 py-2 bg-white text-black rounded-full text-sm font-bold hover:bg-purple-500 hover:text-white transition-all flex items-center gap-2"
                  >
                    Send another <FiX />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <form
              onSubmit={handleSubmit}
              className="space-y-4 bg-white/5 p-6 md:p-8 rounded-3xl border border-white/10"
            >
              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-500 uppercase tracking-widest ml-1">
                  Name
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 outline-none focus:border-purple-500/50 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-500 uppercase tracking-widest ml-1">
                  Email
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="yourname@example.com"
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 outline-none focus:border-purple-500/50 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-500 uppercase tracking-widest ml-1">
                  Message
                </label>
                <textarea
                  required
                  name="message"
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 outline-none focus:border-purple-500/50 transition-all resize-none"
                />
              </div>

              <button
                disabled={status === "sending"}
                type="submit"
                className="w-full relative py-4 bg-white text-black rounded-xl font-bold overflow-hidden group/btn active:scale-[0.98] transition-all disabled:opacity-50"
              >
                <AnimatePresence mode="wait">
                  {status !== "sending" ? (
                    <motion.span
                      key="idle"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      className="flex items-center justify-center gap-2"
                    >
                      Send Message <FiSend />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="sending"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center justify-center gap-2"
                    >
                      Sending...
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </form>
          </div>
        </div>
      </motion.div>

      <footer className="mt-12 text-gray-600 text-[10px] uppercase tracking-[0.4em] font-mono">
        Guwahati, Assam
      </footer>
    </section>
  );
}
