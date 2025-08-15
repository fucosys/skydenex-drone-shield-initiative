
import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Target, Shield, Zap } from 'lucide-react';

const Solution = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const fadeInClass = isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10';

  return (
    <div 
      id="solution" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-slate-900 to-slate-950"
    >
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 delay-100 ${fadeInClass}`}>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-4">
              Our Solution
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The <span className="text-blue-500">SkyDenex μ-System</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A compact 60 × 60 cm turreted platform that operates on a simple but powerful principle: 
              <strong className="text-blue-400"> Detect, Aim, Neutralize.</strong>
            </p>
          </div>
        </div>

        {/* System Overview */}
        <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 delay-300 ${fadeInClass}`}>
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-xl p-8 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-6 text-blue-400">Compact & Powerful</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                The SkyDenex μ-System fits in a 60 × 60 cm footprint while delivering 
                enterprise-grade autonomous drone defense capabilities.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Plug-and-play integration</li>
                <li>• Open architecture with REST API</li>
                <li>• ROS 2/STANAG-4586 compliance</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-900/30 to-blue-900/30 border border-green-500/30 rounded-xl p-8 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-6 text-green-400">Multi-Platform Ready</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Mountable on vehicles, vessels, or fixed installations. Multiple units create 
                a cooperative anti-UAS "bubble" with sensor fusion.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Vehicle convoy protection</li>
                <li>• Naval deck defense</li>
                <li>• Fixed site perimeter security</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-slate-600/50 rounded-2xl p-8 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-6 text-center text-purple-400">System Capabilities</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-slate-600/30">
                <span className="text-gray-300">Platform Size</span>
                <span className="text-purple-400 font-semibold">60 × 60 cm</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-600/30">
                <span className="text-gray-300">Tracking Precision</span>
                <span className="text-blue-400 font-semibold">≤ 10 cm</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-600/30">
                <span className="text-gray-300">Operation</span>
                <span className="text-green-400 font-semibold">Fully Autonomous</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-600/30">
                <span className="text-gray-300">Neutralization</span>
                <span className="text-green-400 font-semibold">Non-Explosive</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-300">Collateral Risk</span>
                <span className="text-green-400 font-semibold">Zero</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Solution;
