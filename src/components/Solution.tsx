
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
              <h3 className="text-2xl font-bold mb-6 text-blue-400">Compact & Powerful</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                60 × 60 cm footprint delivering enterprise-grade autonomous defense.
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
                Mountable anywhere. Multiple units create cooperative anti-UAS "bubble".
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Vehicle convoy protection</li>
                <li>• Naval deck defense</li>
                <li>• Fixed site perimeter security</li>
              </ul>
            </div>
          </div>

          <div className="relative group">
            {/* Technical System Diagram */}
            <div className="bg-gradient-to-br from-slate-700/50 to-slate-600/50 border border-slate-500/50 rounded-2xl p-8 backdrop-blur-sm hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="aspect-video bg-gradient-to-br from-slate-900/50 to-blue-900/20 rounded-xl mb-6 relative overflow-hidden border border-blue-500/20">
                {/* System Architecture Visualization */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    {/* Central Processing Unit */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-blue-500/20 border-2 border-blue-400/50 rounded-lg flex items-center justify-center animate-pulse">
                      <div className="w-8 h-8 bg-blue-400 rounded opacity-60"></div>
                    </div>
                    
                    {/* Detection Sensors */}
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-12 h-6 bg-green-500/20 border border-green-400/50 rounded flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                    </div>
                    
                    {/* Launcher Systems */}
                    <div className="absolute bottom-6 left-1/4 w-8 h-12 bg-orange-500/20 border border-orange-400/50 rounded-t flex flex-col justify-end p-1">
                      <div className="w-1 h-8 bg-orange-400 rounded-full mx-auto"></div>
                    </div>
                    <div className="absolute bottom-6 right-1/4 w-8 h-12 bg-orange-500/20 border border-orange-400/50 rounded-t flex flex-col justify-end p-1">
                      <div className="w-1 h-8 bg-orange-400 rounded-full mx-auto"></div>
                    </div>
                    
                    {/* Communication Array */}
                    <div className="absolute top-6 right-6 w-8 h-8 bg-purple-500/20 border border-purple-400/50 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 border border-purple-400 rounded-full animate-spin"></div>
                    </div>
                    
                    {/* Detection Range Indicators */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-blue-400/30 rounded-full animate-ping opacity-50"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-blue-400/20 rounded-full animate-ping opacity-30" style={{animationDelay: '1s'}}></div>
                  </div>
                </div>
                
                {/* Technical Labels */}
                <div className="absolute top-2 left-2 text-xs text-blue-300 font-mono">AI VISION</div>
                <div className="absolute bottom-2 left-2 text-xs text-orange-300 font-mono">INTERCEPTORS</div>
                <div className="absolute top-2 right-2 text-xs text-purple-300 font-mono">COMMS</div>
                <div className="absolute bottom-2 right-2 text-xs text-green-300 font-mono">60×60cm</div>
              </div>
              
              <h3 className="text-2xl font-bold mb-6 text-center text-blue-400 group-hover:text-blue-300 transition-colors">System Economics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 px-4 bg-slate-800/50 rounded-lg border border-slate-600/30 hover:border-green-400/50 transition-all duration-300 hover:bg-slate-700/50">
                  <span className="text-gray-300">Cost vs Traditional Systems</span>
                  <span className="text-green-400 font-bold">3x Cheaper</span>
                </div>
                <div className="flex justify-between items-center py-3 px-4 bg-slate-800/50 rounded-lg border border-slate-600/30 hover:border-green-400/50 transition-all duration-300 hover:bg-slate-700/50">
                  <span className="text-gray-300">Reusable Platform</span>
                  <span className="text-blue-400 font-bold">100%</span>
                </div>
                <div className="flex justify-between items-center py-3 px-4 bg-slate-800/50 rounded-lg border border-slate-600/30 hover:border-green-400/50 transition-all duration-300 hover:bg-slate-700/50">
                  <span className="text-gray-300">Mission Ready</span>
                  <span className="text-purple-400 font-bold">24/7</span>
                </div>
                <div className="flex justify-between items-center py-3 px-4 bg-slate-800/50 rounded-lg border border-slate-600/30 hover:border-green-400/50 transition-all duration-300 hover:bg-slate-700/50">
                  <span className="text-gray-300">Deployment Time</span>
                  <span className="text-cyan-400 font-bold">&lt;15 min</span>
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
