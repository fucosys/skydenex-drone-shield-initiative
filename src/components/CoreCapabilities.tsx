import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Shield, Zap } from 'lucide-react';

const CoreCapabilities = () => {
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
      id="capabilities" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-slate-950 to-slate-900"
    >
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 delay-100 ${fadeInClass}`}>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-4 animate-bounce">
              Core Advantages
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How <span className="text-blue-500">SkyDenex</span> Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our advantage lies in three revolutionary areas that make autonomous drone defense finally viable.
            </p>
          </div>
        </div>

        {/* Three Key Areas */}
        <div className={`grid md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-300 ${fadeInClass}`}>
           <Card className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border-blue-500/20 backdrop-blur-sm group hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:rotate-1">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600/40 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 group-hover:animate-pulse">
                  <Eye className="h-8 w-8 text-blue-400 group-hover:text-blue-300 group-hover:animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-blue-300 mb-4 group-hover:text-blue-200 transition-colors">AI-Powered Classification</h3>
              </div>
              <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                Advanced computer vision processed by proprietary AI instantly distinguishes between 
                different moving objects like birds and drones with centimeter-level precision.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border-green-500/20 backdrop-blur-sm group hover:scale-110 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500 hover:rotate-1">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600/40 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 group-hover:animate-bounce">
                  <Shield className="h-8 w-8 text-green-400 group-hover:text-green-300 group-hover:animate-bounce" />
                </div>
                <h3 className="text-2xl font-bold text-green-300 mb-4 group-hover:text-green-200 transition-colors">Non-Lethal Neutralization</h3>
              </div>
              <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                No explosives. We launch a precision missile that deploys a large net, physically 
                capturing the drone and safely landing it with a parachute.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-900/20 to-violet-900/20 border-purple-500/20 backdrop-blur-sm group hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:rotate-1">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-600/40 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 group-hover:animate-spin">
                  <Zap className="h-8 w-8 text-purple-400 group-hover:text-purple-300 group-hover:animate-spin" />
                </div>
                <h3 className="text-2xl font-bold text-purple-300 mb-4 group-hover:text-purple-200 transition-colors">Autonomous Operation</h3>
              </div>
              <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                Completely autonomous system removes human reaction time as a bottleneck and 
                allows for truly scalable defense that grows better with multiple units.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Why This Matters */}
        <div className={`transition-all duration-1000 delay-500 ${fadeInClass}`}>
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600/50 rounded-2xl p-8 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-6 text-center text-yellow-400">The Critical Difference</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-red-400">Traditional Solutions Fall Short:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">×</span>
                    Automated guns risk catastrophic collateral damage
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">×</span>
                    Interceptor drones destroyed in every engagement
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">×</span>
                    Expensive attrition economics
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">×</span>
                    Cannot defeat RF-hardened drones
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-green-400">SkyDenex Advantages:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    Zero collateral damage with net capture
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    Reusable platform with affordable missiles
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    Sustainable economics for large deployments
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    Passive detection defeats all drone types
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreCapabilities;