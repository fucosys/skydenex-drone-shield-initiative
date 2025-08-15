
import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Building, Shield, Plane, Zap, Ship, Factory } from 'lucide-react';

const Market = () => {
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

  const civilApplications = [
    {
      icon: <Plane className="h-8 w-8 text-blue-500" />,
      title: "Airports & ANSPs",
      description: "Runway safety and air traffic protection"
    },
    {
      icon: <Shield className="h-8 w-8 text-green-500" />,
      title: "Police & Security",
      description: "Crowd security and event protection"
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Critical Infrastructure",
      description: "Power plants, LNG terminals, data centers"
    },
    {
      icon: <Ship className="h-8 w-8 text-cyan-500" />,
      title: "Maritime & Offshore",
      description: "Shipping vessels and offshore O&G platforms"
    },
    {
      icon: <Building className="h-8 w-8 text-purple-500" />,
      title: "High-Value Facilities",
      description: "Prisons, stadiums, government buildings"
    },
    {
      icon: <Factory className="h-8 w-8 text-orange-500" />,
      title: "Industrial Sites",
      description: "Manufacturing and chemical facilities"
    }
  ];

  const defenseApplications = [
    {
      title: "Front-Line Convoy Protection",
      description: "Mobile defense for military convoys and armor units"
    },
    {
      title: "Forward Operating Bases",
      description: "Perimeter defense for temporary and permanent installations"
    },
    {
      title: "Naval Deck Defense",
      description: "Ship-based protection against maritime drone threats"
    },
    {
      title: "Coastal Batteries",
      description: "Shore-based defense installations and critical ports"
    }
  ];

  return (
    <div 
      id="market" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-slate-900 to-slate-950"
    >
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 delay-100 ${fadeInClass}`}>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-green-600/20 border border-green-500/30 text-green-300 text-sm font-medium mb-4">
              Market Applications
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-green-500">Dual-Use</span> Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our solution addresses critical infrastructure protection needs across both civilian and defense sectors 
              with the same hardware, software, and non-explosive effector.
            </p>
          </div>
        </div>

        {/* Market Size */}
        <div className={`mb-16 transition-all duration-1000 delay-200 ${fadeInClass}`}>
          <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-500/20 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-8 text-center text-green-400">Total Addressable Market</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">€3.5-5.4B</div>
                <div className="text-gray-300 mb-2">Civil Sector (2024)</div>
                <div className="text-sm text-gray-400">Critical infrastructure protection</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">€3.4B</div>
                <div className="text-gray-300 mb-2">Defense Sector (2024)</div>
                <div className="text-sm text-gray-400">Military and security applications</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-400 mb-2">>€20B</div>
                <div className="text-gray-300 mb-2">Combined by 2033</div>
                <div className="text-sm text-gray-400">21-28% CAGR growth</div>
              </div>
            </div>
          </div>
        </div>

        {/* Civil Applications */}
        <div className={`mb-16 transition-all duration-1000 delay-300 ${fadeInClass}`}>
          <h3 className="text-3xl font-bold mb-8 text-center text-blue-400">Civil Sector Applications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {civilApplications.map((app, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-slate-700/50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {app.icon}
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-white group-hover:text-blue-300 transition-colors">
                    {app.title}
                  </h4>
                  <p className="text-gray-300 text-sm">
                    {app.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <div className="inline-block bg-blue-600/20 border border-blue-500/30 rounded-lg px-6 py-4">
              <span className="text-blue-300 font-semibold">
                Key Advantage: Non-explosive net intercept permissible over populated areas
              </span>
            </div>
          </div>
        </div>

        {/* Defense Applications */}
        <div className={`mb-16 transition-all duration-1000 delay-400 ${fadeInClass}`}>
          <h3 className="text-3xl font-bold mb-8 text-center text-red-400">Defense & Security Sector</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {defenseApplications.map((app, index) => (
              <Card key={index} className="bg-slate-800/50 border-red-500/20 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-3 text-red-300">
                    {app.title}
                  </h4>
                  <p className="text-gray-300">
                    {app.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <div className="inline-block bg-red-600/20 border border-red-500/30 rounded-lg px-6 py-4">
              <span className="text-red-300 font-semibold">
                Physical kill layer against fiber-optic or autonomous drones immune to jamming
              </span>
            </div>
          </div>
        </div>

        {/* Initial Market Focus */}
        <div className={`transition-all duration-1000 delay-500 ${fadeInClass}`}>
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600/50 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6 text-center text-purple-400">Initial Market Focus</h3>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-300 text-center mb-8">
                Our initial Serviceable Obtainable Market (SOM) targets high-priority sectors
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">€75-225M</div>
                  <div className="text-gray-300 mb-2">5-Year Revenue Target</div>
                  <div className="text-sm text-gray-400">
                    Ukraine, Bundeswehr, Munich Airport, Power Utilities
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">€20K</div>
                  <div className="text-gray-300 mb-2">Current Investment</div>
                  <div className="text-sm text-gray-400">
                    Founders' capital invested to date
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;
