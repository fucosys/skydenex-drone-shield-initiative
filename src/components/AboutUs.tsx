
import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";

const AboutUs = () => {
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
      id="about" 
      ref={sectionRef}
      className="py-20 bg-slate-950"
    >
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 delay-100 ${fadeInClass}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
            About <span className="text-purple-500">Us</span>
          </h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto mb-12"></div>
        </div>

        <div className={`transition-all duration-1000 delay-300 ${fadeInClass}`}>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xl text-gray-300 mb-8">
              We are breaking the status quo and rethinking how to deal with FPV kamikaze drones in a cheaper 
              and more efficient way. We are building a non-lethal defense system against drones using 
              micro-missile technology.
            </p>
            <p className="text-xl text-gray-300">
              Our solution beats the current status quo in both price and logistics, which are the most 
              important characteristics in defense.
            </p>
          </div>
        </div>

        <div className={`transition-all duration-1000 delay-500 ${fadeInClass}`}>
          <div className="flex flex-col lg:flex-row justify-center gap-8">
            <Card className="bg-slate-900 border-purple-500/20 max-w-md mx-auto lg:mx-0">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/53dd4a59-cae0-401a-adcf-fc6649719573.png" 
                    alt="Jiri Minarik" 
                    className="w-full aspect-square object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-purple-400">Jiri Minarik</h3>
                  <p className="text-purple-300 mb-4">Co-Founder</p>
                  <p className="text-gray-300 mb-4">
                    MSc Cybernetics, Control Engineer Unicorn, Published multiple patents, 5 years experience in aerospace, 
                    responsible for company strategy and vision and product.
                  </p>
                  <p className="text-gray-300">
                    Leads our technological innovation with expertise in drone defense systems and 
                    guidance technology. Focused on creating efficient and effective counter-drone solutions.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-purple-500/20 max-w-md mx-auto lg:mx-0">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/50f6e9a3-a134-400e-b792-2b76c0c091db.png" 
                    alt="Joshua Soutelo" 
                    className="w-full aspect-square object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-purple-400">Joshua Soutelo</h3>
                  <p className="text-purple-300 mb-4">Co-Founder</p>
                  <p className="text-gray-300 mb-4">
                    MSc Computer Vision, European Defense Tech Hackathon '24 Winner of EDTH Munich '24, 
                    responsible for partnerships and engineering and has deep defense industry connections 
                    and market know-how, working in rocket/missile space for over a year.
                  </p>
                  <p className="text-gray-300">
                    Drives our strategic vision and partnerships with deep understanding of defense industry needs 
                    and market opportunities. Focused on building connections with key stakeholders.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className={`mt-20 transition-all duration-1000 delay-700 ${fadeInClass}`}>
          <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-semibold mb-6 text-center">Our Partners & Affiliations</h3>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
              <a 
                href="https://eurodefense.tech/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-slate-900 px-6 py-4 rounded-lg flex items-center gap-3 hover:bg-slate-800 transition-colors"
              >
                <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded font-semibold">
                  EDTH
                </span>
                <span className="text-white">European Defense Tech Hub</span>
              </a>
              <a 
                href="https://www.antler.co/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-slate-900 px-6 py-4 rounded-lg flex items-center gap-3 hover:bg-slate-800 transition-colors"
              >
                <span className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-2 rounded font-semibold">
                  Antler
                </span>
                <span className="text-white">Global Venture Capital</span>
              </a>
            </div>
            <p className="mt-8 text-gray-300 text-center">
              We are currently seeking investments from VCs and other investors to raise capital for 
              finishing product development and manufacturing line.
            </p>
            <p className="mt-4 text-blue-400 text-center">
              <span className="inline-block border border-blue-400 px-4 py-2 rounded-full text-sm">
                Munich, Germany
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
