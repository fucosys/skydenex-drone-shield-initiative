
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0 bg-[url('/lovable-uploads/4da554b4-929c-4e0a-9107-4ca6b5b98942.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>
      
      {/* Animated lines in background */}
      <div className="absolute inset-0 z-10">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse absolute top-1/4"></div>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse absolute top-2/4 delay-150"></div>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse absolute top-3/4 delay-300"></div>
      </div>
      
      <div className="container mx-auto px-4 z-20">
        <div className="max-w-3xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-blue-400">
              Ensuring Europe's Defense Sovereignty
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Skydenex is revolutionizing defense against FPV kamikaze drones with our 
              innovative non-lethal micro-missile platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6"
                onClick={() => {
                  document.getElementById("problem")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-6"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
