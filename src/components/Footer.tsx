
import { Linkedin, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/4022b677-8ab7-473d-95ea-ba91a0952756.png" 
                alt="Skydenex Logo" 
                className="h-8 w-8 mr-2" 
              />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">
                SKYDENEX
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Revolutionary autonomous drone defense systems providing non-lethal protection 
              for critical infrastructure and military assets worldwide.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/skydenex/?viewAsMember=true" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="mailto:info@skydenex.com" 
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Solutions</h4>
            <div className="space-y-2">
              <a href="#problem" className="block text-gray-400 hover:text-white transition-colors">The Problem</a>
              <a href="#solution" className="block text-gray-400 hover:text-white transition-colors">Our Solution</a>
              <a href="#technology" className="block text-gray-400 hover:text-white transition-colors">Technology</a>
              <a href="#market" className="block text-gray-400 hover:text-white transition-colors">Applications</a>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center text-gray-400">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-sm">European Defense Tech Hub</span>
              </div>
              <a 
                href="mailto:info@skydenex.com" 
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                <span className="text-sm">info@skydenex.com</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} SkyDenex. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
