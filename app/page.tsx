import Scene3D from "@/components/visuals/Scene3D";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Achievements from "@/components/Achievements";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen">
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
    </main>
  );
}
