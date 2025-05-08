
import { Shield, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Shield className="h-6 w-6 mr-2 text-blue-500" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">
              SKYDENEX
            </span>
          </div>
          
          <div className="flex space-x-8 mb-6 md:mb-0">
            <a href="#problem" className="text-gray-400 hover:text-white transition-colors">Problem</a>
            <a href="#solution" className="text-gray-400 hover:text-white transition-colors">Solution</a>
            <a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
          </div>
          
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/company/skydenex/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Skydenex. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
