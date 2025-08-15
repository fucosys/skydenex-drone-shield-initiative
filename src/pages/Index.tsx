
import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Technology from "@/components/Technology";
import Market from "@/components/Market";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  // Refs for scrolling to sections
  const problemRef = useRef<HTMLDivElement>(null);
  const solutionRef = useRef<HTMLDivElement>(null);
  const technologyRef = useRef<HTMLDivElement>(null);
  const marketRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  
  // Handle smooth scrolling to sections
  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-gray-100">
      <Navbar 
        onProblemClick={() => scrollToSection(problemRef)}
        onSolutionClick={() => scrollToSection(solutionRef)}
        onTechnologyClick={() => scrollToSection(technologyRef)}
        onMarketClick={() => scrollToSection(marketRef)}
        onContactClick={() => scrollToSection(contactRef)}
      />
      <Hero />
      <div ref={problemRef}>
        <Problem />
      </div>
      <div ref={solutionRef}>
        <Solution />
      </div>
      <div ref={technologyRef}>
        <Technology />
      </div>
      <div ref={marketRef}>
        <Market />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
