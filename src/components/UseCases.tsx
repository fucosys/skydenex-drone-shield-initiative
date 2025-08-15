import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Building2, Anchor, Factory } from 'lucide-react';

const UseCases = () => {
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

  const civilUseCases = [
    {
      icon: <Building2 className="h-8 w-8 text-blue-400" />,
      title: "Critical Infrastructure",
      description: "Airports, power plants, data centers, and LNG terminals"
    },
    {
      icon: <Shield className="h-8 w-8 text-green-400" />,
      title: "Public Safety",
      description: "Stadiums, prisons, crowd security, and urban areas"
    },
    {
      icon: <Factory className="h-8 w-8 text-purple-400" />,
      title: "Industrial Sites",
      description: "Offshore platforms, electrical utilities, and maritime shipping"
    }
  ];

  const defenseUseCases = [
    {
      icon: <Shield className="h-8 w-8 text-red-400" />,
      title: "Forward Operating Bases",
      description: "Protection against autonomous and fiber-optic controlled drones"
    },
    {
      icon: <Anchor className="h-8 w-8 text-cyan-400" />,
      title: "Naval Defense",
      description: "Deck defense and coastal battery protection"
    },
    {
      icon: <Building2 className="h-8 w-8 text-yellow-400" />,
      title: "Convoy Protection",
      description: "Mobile hard-kill layer for vehicles and armor"
    }
  ];

  return (
    <div 
      id="use-cases" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-slate-900 to-slate-950"
    >
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 delay-100 ${fadeInClass}`}>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-green-600/20 border border-green-500/30 text-green-300 text-sm font-medium mb-4 animate-pulse">
              Dual-Use Applications
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-green-500">Civil</span> & <span className="text-red-500">Defense</span> Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              The same system protects both civilian critical infrastructure and military assets, 
              making it uniquely versatile in today's security landscape.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Civil Sector */}
          <div className={`transition-all duration-1000 delay-300 ${fadeInClass}`}>
            <div className="bg-gradient-to-br from-blue-900/30 to-green-900/30 border border-blue-500/30 rounded-2xl p-8 backdrop-blur-sm hover:scale-105 transition-transform duration-500">
              <h3 className="text-2xl font-bold mb-8 text-center text-blue-400 flex items-center justify-center">
                <Building2 className="h-8 w-8 mr-3" />
                Civil Sector
              </h3>
              <div className="space-y-6">
                {civilUseCases.map((useCase, index) => (
                  <Card 
                    key={index} 
                    className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-102"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-slate-700/50">
                          {useCase.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold mb-2 text-white">{useCase.title}</h4>
                          <p className="text-gray-300 text-sm">{useCase.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-6 p-4 bg-green-600/10 border border-green-500/20 rounded-lg">
                <p className="text-sm text-green-300 text-center">
                  <strong>Key Advantage:</strong> Non-explosive net intercept is the only hard-kill option permissible over populated areas
                </p>
              </div>
            </div>
          </div>

          {/* Defense Sector */}
          <div className={`transition-all duration-1000 delay-500 ${fadeInClass}`}>
            <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 border border-red-500/30 rounded-2xl p-8 backdrop-blur-sm hover:scale-105 transition-transform duration-500">
              <h3 className="text-2xl font-bold mb-8 text-center text-red-400 flex items-center justify-center">
                <Shield className="h-8 w-8 mr-3" />
                Defense & Security
              </h3>
              <div className="space-y-6">
                {defenseUseCases.map((useCase, index) => (
                  <Card 
                    key={index} 
                    className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-102"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-slate-700/50">
                          {useCase.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold mb-2 text-white">{useCase.title}</h4>
                          <p className="text-gray-300 text-sm">{useCase.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-6 p-4 bg-red-600/10 border border-red-500/20 rounded-lg">
                <p className="text-sm text-red-300 text-center">
                  <strong>Key Advantage:</strong> Defeats RF-hardened and fiber-optic drones immune to jamming
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Market Opportunity */}
        <div className={`mt-20 transition-all duration-1000 delay-700 ${fadeInClass}`}>
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600/50 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-8 text-center text-purple-400">Market Opportunity</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-blue-400 animate-pulse">€3.5-5.4B</div>
                <div className="text-gray-300">Civil Market 2024</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-red-400 animate-pulse">€3.4B</div>
                <div className="text-gray-300">Defense Market 2024</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-green-400 animate-pulse">&gt;€20B</div>
                <div className="text-gray-300">Combined by 2033</div>
              </div>
            </div>
            <p className="text-center text-gray-400 mt-6">
              Growing at 21-28% CAGR with our initial SOM of €75-225M over five years
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCases;