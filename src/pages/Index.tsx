
import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { NavigationMenuLink } from "@/components/ui/navigation-menu"; 

// This adds some custom styling to override the text colors in the Solution component
const customStyles = `
  .feature-title {
    color: #c084fc !important; /* bright purple color for better readability */
    font-weight: 600;
  }
`;

const Index = () => {
  // Refs for scrolling to sections
  const problemRef = useRef<HTMLDivElement>(null);
  const solutionRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  
  // Handle smooth scrolling to sections
  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-gray-100">
      {/* Inject custom styles */}
      <style>{customStyles}</style>
      
      <Navbar 
        onProblemClick={() => scrollToSection(problemRef)}
        onSolutionClick={() => scrollToSection(solutionRef)}
        onAboutClick={() => scrollToSection(aboutRef)}
        onContactClick={() => scrollToSection(contactRef)}
      />
      <Hero />
      <div ref={problemRef}>
        <Problem />
      </div>
      <div ref={solutionRef}>
        <Solution />
      </div>
      <div ref={aboutRef}>
        <AboutUs />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
