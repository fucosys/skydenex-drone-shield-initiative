
import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Target, TrendingUp, Shield } from 'lucide-react';

const Problem = () => {
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
      id="problem" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-slate-950 to-slate-900"
    >
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 delay-100 ${fadeInClass}`}>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-red-600/20 border border-red-500/30 text-red-300 text-sm font-medium mb-4">
              The Modern Threat Landscape
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Warfare Has <span className="text-red-500">Fundamentally Changed</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Drone warfare has become gamified. Pilots earn points for destruction—6 for a soldier, 20 for damaging a tank, 40 for destroying one.
              "Sit and wait" tactics involve drones landing near roads, powering down, then activating when vehicles approach.
            </p>
          </div>
        </div>

        <div className={`grid lg:grid-cols-2 gap-12 items-center mb-16 transition-all duration-1000 delay-300 ${fadeInClass}`}>
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 border border-red-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-red-400">The Incentive Structure</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Units earn points for a digital marketplace—an 'Amazon for warfare'—to get better equipment. 
                The most lethal teams become more formidable, creating a self-improving cycle of destruction.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                  <span className="text-gray-300">Soldier elimination</span>
                  <span className="text-red-400 font-bold">6 points</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                  <span className="text-gray-300">Tank damage</span>
                  <span className="text-orange-400 font-bold">20 points</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                  <span className="text-gray-300">Tank destruction</span>
                  <span className="text-red-500 font-bold">40 points</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="bg-slate-800/50 border-red-500/20 backdrop-blur-sm hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-red-500 group-hover:animate-pulse" />
                  <h4 className="text-xl font-semibold ml-3 text-red-300">70-80% of Losses</h4>
                </div>
                <p className="text-gray-300">
                  Low-cost, agile drones now account for the majority of battlefield casualties, 
                  making traditional air defense systems obsolete.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-orange-500/20 backdrop-blur-sm hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <TrendingUp className="h-8 w-8 text-orange-500 group-hover:animate-bounce" />
                  <h4 className="text-xl font-semibold ml-3 text-orange-300">Exponential Growth</h4>
                </div>
                <p className="text-gray-300">
                  Traditional defense systems are too slow, too expensive, and simply not designed 
                  for this new paradigm of warfare.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-yellow-500/20 backdrop-blur-sm hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Shield className="h-8 w-8 text-yellow-500 group-hover:animate-spin" />
                  <h4 className="text-xl font-semibold ml-3 text-yellow-300">Defense Gap</h4>
                </div>
                <p className="text-gray-300">
                  Current solutions create costly attrition with expensive interceptors being destroyed 
                  in every engagement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className={`text-center transition-all duration-1000 delay-500 ${fadeInClass}`}>
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600/50 rounded-2xl p-8 max-w-4xl mx-auto backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">The Problem Requires a New Solution</h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              SkyDenex is a fully autonomous, non-lethal drone defense system. 
              Protective dome operating 24/7 without human intervention.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problem;
