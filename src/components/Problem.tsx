
import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Target } from 'lucide-react';

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
      className="py-20 bg-slate-900"
    >
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 delay-100 ${fadeInClass}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
            The <span className="text-red-500">Problem</span> We're Solving
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-12"></div>
        </div>

        <div className={`grid md:grid-cols-2 gap-8 items-center transition-all duration-1000 delay-300 ${fadeInClass}`}>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Vulnerable Supply Lines</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Logistic lines are one of the most important pillars in warfare. Kamikaze FPV drones 
              are increasingly being used to destroy vehicles on these lines, and there's currently 
              no effective way for these vehicles to defend themselves.
            </p>
            
            <h3 className="text-2xl font-semibold mb-4">Precision Threats</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Unlike traditional artillery which is imprecise, modern drones can guarantee a kill 
              on a targeted vehicle with pinpoint accuracy. This new threat applies to all types of 
              vehicles including supply trucks, tanks, and military transports.
            </p>
            
            <Card className="bg-gradient-to-r from-slate-800 to-slate-900 border-red-500/30 p-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <Target className="h-12 w-12 text-red-500" />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-center">Critical Vulnerability</h4>
                <p className="text-gray-400 text-center">
                  Without protection, a single low-cost drone can neutralize a multi-million dollar vehicle 
                  and endanger the lives of personnel.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="relative mx-auto">
            <div className="bg-gradient-to-r from-red-500/20 to-transparent p-1 rounded-lg">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80" 
                  alt="Drone threat illustration" 
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/70"></div>
                <div className="absolute bottom-0 left-0 w-full p-4">
                  <p className="text-white text-sm">
                    Modern warfare has evolved with the rise of drone technology
                  </p>
                </div>
              </div>
            </div>
            
            {/* Animated alert indicator */}
            <div className="absolute -top-3 -right-3">
              <div className="animate-ping absolute h-6 w-6 rounded-full bg-red-500 opacity-75"></div>
              <div className="relative h-6 w-6 rounded-full bg-red-600"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problem;
