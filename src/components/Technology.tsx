
import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Crosshair, Zap, Network, Shield } from 'lucide-react';

const Technology = () => {
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

  const innovations = [
    {
      icon: <Shield className="h-12 w-12 text-green-500" />,
      title: "Non-Explosive Hard-Kill with Kinetic Certainty",
      description: "Our primary innovation provides reliable, non-explosive hard-kill capability. Unlike automated guns which risk significant collateral damage, our net-based interceptor provides kinetic certainty with unparalleled safety.",
      highlight: "Zero Collateral Damage"
    },
    {
      icon: <Crosshair className="h-12 w-12 text-blue-500" />,
      title: "Edge-AI Optical Precision in Contested Environments",
      description: "Sophisticated edge-AI pipeline pairing Jetson Orin with advanced CNN and Kalman filter algorithms achieves centimeter-level tracking using only passive stereo cameras.",
      highlight: "≤10cm Precision"
    },
    {
      icon: <Zap className="h-12 w-12 text-yellow-500" />,
      title: "High-G Agility in Low-Cost Package",
      description: "Engineered missile with over 5 Gs of maneuver authority using solid-fuel motor and micro-fins. Ground-based processing with secure IR communication delivers advanced agility in a disposable airframe.",
      highlight: ">5G Maneuvers"
    },
    {
      icon: <Brain className="h-12 w-12 text-purple-500" />,
      title: "Superior Attrition Economics",
      description: "Breaking the costly attrition paradigm where expensive interceptor drones are destroyed in every engagement. Reusable launcher with mass-manufacturable €160 missiles provides sustainable economics.",
      highlight: "€160 per Shot"
    },
    {
      icon: <Network className="h-12 w-12 text-cyan-500" />,
      title: "Inherent Dual-Use and Open Architecture",
      description: "System is dual-use by design. Same hardware, software, and non-explosive effector protects military convoys, civilian airports, or naval vessels with plug-and-play integration.",
      highlight: "Universal Application"
    }
  ];

  return (
    <div 
      id="technology" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-slate-950 to-slate-900"
    >
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 delay-100 ${fadeInClass}`}>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-purple-600/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-4">
              Core Innovations
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-purple-500">Revolutionary</span> Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our μ-System's novelty lies in its fusion of precision, safety, and cost-effectiveness, 
              setting a new paradigm in UAS defense technology.
            </p>
          </div>
        </div>

        <div className={`space-y-8 transition-all duration-1000 delay-300 ${fadeInClass}`}>
          {innovations.map((innovation, index) => (
            <Card 
              key={index} 
              className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group"
            >
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-2 flex justify-center lg:justify-start">
                    <div className="p-4 rounded-full bg-slate-700/50 group-hover:scale-110 transition-transform duration-300">
                      {innovation.icon}
                    </div>
                  </div>
                  
                  <div className="lg:col-span-7 text-center lg:text-left">
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors">
                      {innovation.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {innovation.description}
                    </p>
                  </div>
                  
                  <div className="lg:col-span-3 text-center">
                    <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30">
                      <span className="text-blue-300 font-semibold">
                        {innovation.highlight}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technical Architecture */}
        <div className={`mt-20 transition-all duration-1000 delay-500 ${fadeInClass}`}>
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600/50 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-8 text-center text-blue-400">System Architecture</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-blue-400" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-blue-300">Detection Layer</h4>
                <p className="text-gray-300 text-sm">
                  AI-powered stereo cameras with CNN processing for real-time threat identification and tracking
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crosshair className="h-8 w-8 text-green-400" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-green-300">Engagement Layer</h4>
                <p className="text-gray-300 text-sm">
                  High-G agility missiles with micro-fins and solid-fuel motors for precise intercept
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Network className="h-8 w-8 text-purple-400" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-purple-300">Network Layer</h4>
                <p className="text-gray-300 text-sm">
                  Cooperative multi-turret mesh with sensor fusion and distributed computing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
