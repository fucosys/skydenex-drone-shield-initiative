
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
              Compact autonomous defense platform. Simple principle: 
              <strong className="text-blue-400"> Detect, Aim, Neutralize.</strong>
            </p>
          </div>
        </div>

        {/* Visual Demo Section */}
        <div className={`transition-all duration-1000 delay-200 ${fadeInClass}`}>
          <div className="relative mb-16">
            <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-2xl p-8 backdrop-blur-sm">
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                <div className="text-center group hover:scale-110 transition-all duration-500">
                  <div className="w-24 h-24 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600/40 group-hover:rotate-12 transition-all duration-300">
                    <Eye className="h-12 w-12 text-blue-400 group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-300 mb-2">Detect</h3>
                  <p className="text-gray-400 text-sm">AI vision identifies threats</p>
                </div>
                <div className="text-center group hover:scale-110 transition-all duration-500">
                  <div className="w-24 h-24 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-600/40 group-hover:rotate-12 transition-all duration-300">
                    <Target className="h-12 w-12 text-purple-400 group-hover:animate-spin" />
                  </div>
                  <h3 className="text-xl font-bold text-purple-300 mb-2">Aim</h3>
                  <p className="text-gray-400 text-sm">Precision tracking & targeting</p>
                </div>
                <div className="text-center group hover:scale-110 transition-all duration-500">
                  <div className="w-24 h-24 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600/40 group-hover:rotate-12 transition-all duration-300">
                    <Shield className="h-12 w-12 text-green-400 group-hover:animate-bounce" />
                  </div>
                  <h3 className="text-xl font-bold text-green-300 mb-2">Neutralize</h3>
                  <p className="text-gray-400 text-sm">Safe net capture system</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* System Overview */}
        <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 delay-300 ${fadeInClass}`}>
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-xl p-8 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-6 text-blue-400">Autonomous Detection</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Advanced stereo-optical system provides real-time threat identification and tracking with sub-10cm precision.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• 500m detection range</li>
                <li>• Multi-spectral imaging</li>
                <li>• AI-powered target classification</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-900/30 to-blue-900/30 border border-green-500/30 rounded-xl p-8 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-6 text-green-400">Precision Neutralization</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Non-lethal net-capture missiles ensure complete threat neutralization with zero collateral damage.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Net-capture technology</li>
                <li>• Guided projectile system</li>
                <li>• Reusable platform design</li>
              </ul>
            </div>
          </div>

          <div className="relative group">
            <div className="bg-gradient-to-br from-slate-700/50 to-slate-600/50 border border-slate-500/50 rounded-2xl p-8 backdrop-blur-sm hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
              
              <h3 className="text-2xl font-bold mb-6 text-center text-blue-400 group-hover:text-blue-300 transition-colors">Complete Defense Solution</h3>
              
              {/* Detection System */}
              <div className="relative mb-6 rounded-lg overflow-hidden border border-slate-600/30 hover:border-blue-400/50 transition-all duration-300">
                <img 
                  src="/lovable-uploads/7c8aa449-4f9d-48f8-a93f-5128fca94b6e.png" 
                  alt="SkyDenex stereo optical tracking system showing real-time UAV drone detection with crosshair targeting" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent pointer-events-none"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/80 px-3 py-1 rounded-md">
                  <span className="text-green-400 text-sm font-mono">ACTIVE TRACKING</span>
                </div>
                <div className="absolute top-3 right-3 bg-red-600/90 px-3 py-1 rounded-md">
                  <span className="text-white text-sm font-mono">TARGET ACQUIRED</span>
                </div>
              </div>

              {/* Missile System */}
              <div className="relative mb-6 rounded-lg overflow-hidden border border-orange-500/30 hover:border-orange-400/50 transition-all duration-300 bg-gradient-to-br from-slate-800/50 to-orange-900/20 p-6">
                <div className="flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/58adfdd4-ba3d-445e-b181-321e57f5fc04.png" 
                    alt="SkyDenex net-capture missile for non-lethal drone neutralization" 
                    className="w-full max-w-md h-auto object-contain"
                  />
                </div>
                <div className="absolute bottom-3 left-3 bg-orange-600/90 px-3 py-1 rounded-md">
                  <span className="text-white text-sm font-mono">NET-CAPTURE MISSILE</span>
                </div>
                <div className="absolute top-3 right-3 bg-green-600/90 px-3 py-1 rounded-md">
                  <span className="text-white text-sm font-mono">NON-LETHAL</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 px-4 bg-slate-800/50 rounded-lg border border-slate-600/30 hover:border-green-400/50 transition-all duration-300 hover:bg-slate-700/50">
                  <span className="text-gray-300">Detection Range</span>
                  <span className="text-green-400 font-bold">500m max</span>
                </div>
                <div className="flex justify-between items-center py-3 px-4 bg-slate-800/50 rounded-lg border border-slate-600/30 hover:border-blue-400/50 transition-all duration-300 hover:bg-slate-700/50">
                  <span className="text-gray-300">Tracking Precision</span>
                  <span className="text-blue-400 font-bold">≤10cm</span>
                </div>
                <div className="flex justify-between items-center py-3 px-4 bg-slate-800/50 rounded-lg border border-slate-600/30 hover:border-purple-400/50 transition-all duration-300 hover:bg-slate-700/50">
                  <span className="text-gray-300">Response Time</span>
                  <span className="text-purple-400 font-bold">&lt;3 sec</span>
                </div>
                <div className="flex justify-between items-center py-3 px-4 bg-slate-800/50 rounded-lg border border-slate-600/30 hover:border-cyan-400/50 transition-all duration-300 hover:bg-slate-700/50">
                  <span className="text-gray-300">Cost vs Traditional</span>
                  <span className="text-cyan-400 font-bold">3x Cheaper</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Solution;
