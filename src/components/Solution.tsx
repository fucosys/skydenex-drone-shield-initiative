
import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, Rocket } from 'lucide-react';

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

  const features = [
    {
      icon: <Shield className="h-10 w-10 text-blue-500" />,
      title: "360° Defense Coverage",
      description: "Mechanized gimbal platform provides full 360-degree protection against incoming threats."
    },
    {
      icon: <Target className="h-10 w-10 text-blue-500" />,
      title: "Advanced Threat Detection",
      description: "State-of-the-art sensors and AI algorithms detect and track incoming drones with high accuracy."
    },
    {
      icon: <Rocket className="h-10 w-10 text-blue-500" />,
      title: "Non-Lethal Countermeasures",
      description: "Guided micro-missiles deploy nets to safely neutralize drones without harmful collateral damage."
    }
  ];

  return (
    <div 
      id="solution" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-slate-900 to-slate-950"
    >
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 delay-100 ${fadeInClass}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
            Our <span className="text-blue-500">Solution</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-12"></div>
        </div>

        <div className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 delay-300 ${fadeInClass}`}>
          <div className="order-2 md:order-1">
            <div className="bg-slate-800 p-6 rounded-lg border border-blue-500/20 relative overflow-hidden">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="relative">
                <h3 className="text-2xl font-semibold mb-6 text-blue-400">Skydenex Defense Platform</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  A modular, magnetically attachable platform built on a mechanized gimbal system that provides 
                  stability and full 360-degree coverage. The platform is equipped with:
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3">•</span>
                    <span>Advanced sensor arrays and AI for rapid drone detection and tracking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3">•</span>
                    <span>Multi micro-missile launcher with guided targeting systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3">•</span>
                    <span>Non-lethal net deployment mechanism for drone neutralization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3">•</span>
                    <span>Lightweight construction for minimal impact on vehicle performance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3">•</span>
                    <span>Easy manual reloading for continued protection during operations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 space-y-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-slate-800 border-blue-500/20 overflow-hidden">
                <div className="absolute h-full w-1 bg-blue-600 left-0"></div>
                <CardContent className="p-6 pl-8">
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h4 className="text-xl font-semibold ml-3">{feature.title}</h4>
                  </div>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className={`mt-16 transition-all duration-1000 delay-500 ${fadeInClass}`}>
          <div className="relative rounded-xl overflow-hidden shadow-xl border border-blue-500/20">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
            <div className="relative p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Key Advantages</h3>
              <div className="grid md:grid-cols-3 gap-6 text-left mt-6">
                <div className="bg-slate-800/50 p-5 rounded-lg">
                  <h4 className="text-lg font-semibold mb-2">Cost-Effective</h4>
                  <p className="text-gray-300 text-sm">
                    Significantly lower cost than competing solutions, making widespread deployment feasible.
                  </p>
                </div>
                <div className="bg-slate-800/50 p-5 rounded-lg">
                  <h4 className="text-lg font-semibold mb-2">Easy Integration</h4>
                  <p className="text-gray-300 text-sm">
                    Magnetic attachment allows deployment on various vehicle types without permanent modification.
                  </p>
                </div>
                <div className="bg-slate-800/50 p-5 rounded-lg">
                  <h4 className="text-lg font-semibold mb-2">Logistics-Friendly</h4>
                  <p className="text-gray-300 text-sm">
                    Lightweight design and simple reloading mechanism optimized for field operations.
                  </p>
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
