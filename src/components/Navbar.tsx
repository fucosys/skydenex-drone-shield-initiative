
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  onProblemClick: () => void;
  onSolutionClick: () => void;
  onAboutClick: () => void;
  onContactClick: () => void;
}

const Navbar = ({
  onProblemClick,
  onSolutionClick,
  onAboutClick,
  onContactClick,
}: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/4022b677-8ab7-473d-95ea-ba91a0952756.png" 
              alt="Skydenex Logo" 
              className="h-8 w-8 mr-2" 
            />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">
              SKYDENEX
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={onProblemClick}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Problem
            </button>
            <button
              onClick={onSolutionClick}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Solution
            </button>
            <button
              onClick={onAboutClick}
              className="text-gray-300 hover:text-white transition-colors"
            >
              About Us
            </button>
            <Button
              onClick={onContactClick}
              variant="outline"
              className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
            >
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              className="text-gray-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-2 bg-gray-900 rounded-lg animate-fade-in">
            <div className="flex flex-col space-y-3 p-2">
              <button
                onClick={() => {
                  onProblemClick();
                  setIsMobileMenuOpen(false);
                }}
                className="px-4 py-2 text-left text-gray-300 hover:bg-gray-800 rounded-md transition-colors"
              >
                Problem
              </button>
              <button
                onClick={() => {
                  onSolutionClick();
                  setIsMobileMenuOpen(false);
                }}
                className="px-4 py-2 text-left text-gray-300 hover:bg-gray-800 rounded-md transition-colors"
              >
                Solution
              </button>
              <button
                onClick={() => {
                  onAboutClick();
                  setIsMobileMenuOpen(false);
                }}
                className="px-4 py-2 text-left text-gray-300 hover:bg-gray-800 rounded-md transition-colors"
              >
                About Us
              </button>
              <button
                onClick={() => {
                  onContactClick();
                  setIsMobileMenuOpen(false);
                }}
                className="px-4 py-2 text-left text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
