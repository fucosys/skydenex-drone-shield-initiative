
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

        {/* Three Key Areas */}
        <div className={`grid md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-300 ${fadeInClass}`}>
          <Card className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border-blue-500/20 backdrop-blur-sm group hover:scale-105 transition-transform duration-300">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600/30 transition-colors">
                  <Eye className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-blue-300 mb-4">AI-Powered Classification</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Advanced computer vision processed by proprietary AI instantly distinguishes between 
                different moving objects like birds and drones with centimeter-level precision.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border-green-500/20 backdrop-blur-sm group hover:scale-105 transition-transform duration-300">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600/30 transition-colors">
                  <Shield className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-green-300 mb-4">Non-Lethal Neutralization</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                No explosives. We launch a 37 cm μ-missile that deploys a 20 m² net, physically 
                capturing the drone and safely landing it with a parachute.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-900/20 to-violet-900/20 border-purple-500/20 backdrop-blur-sm group hover:scale-105 transition-transform duration-300">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-600/30 transition-colors">
                  <Zap className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-purple-300 mb-4">Autonomous Operation</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Completely autonomous system removes human reaction time as a bottleneck and 
                allows for truly scalable defense that grows better with multiple units.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Technical Specifications */}
        <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 delay-500 ${fadeInClass}`}>
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600/50 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 text-blue-400">Technical Specifications</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-slate-600/30">
                  <span className="text-gray-300">Platform Size</span>
                  <span className="text-blue-400 font-semibold">60 × 60 cm</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-600/30">
                  <span className="text-gray-300">Tracking Precision</span>
                  <span className="text-blue-400 font-semibold">≤ 10 cm</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-600/30">
                  <span className="text-gray-300">Missile Length</span>
                  <span className="text-blue-400 font-semibold">37 cm</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-600/30">
                  <span className="text-gray-300">Net Coverage</span>
                  <span className="text-blue-400 font-semibold">20 m²</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-600/30">
                  <span className="text-gray-300">Maneuver Authority</span>
                  <span className="text-blue-400 font-semibold">>5 Gs</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-300">Cost per Missile</span>
                  <span className="text-green-400 font-semibold">€160</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-xl p-8 backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-blue-400" />
                <h4 className="text-xl font-semibold ml-3 text-blue-300">Autonomous Detection & Tracking</h4>
              </div>
              <p className="text-gray-300 mb-4">
                AI-driven stereo cameras with edge processing using Jetson Orin and advanced CNN algorithms.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Passive stereo camera system</li>
                <li>• RF-independent operation</li>
                <li>• Real-time threat classification</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-900/30 to-blue-900/30 border border-green-500/30 rounded-xl p-8 backdrop-blur-sm">
              <h4 className="text-xl font-semibold mb-4 text-green-300">Network Integration</h4>
              <p className="text-gray-300 mb-4">
                Multiple turrets create a cooperative anti-UAS "bubble" with sensor fusion capabilities.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• REST API integration</li>
                <li>• ROS 2/STANAG-4586 compliance</li>
                <li>• Distributed computing cloud</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
