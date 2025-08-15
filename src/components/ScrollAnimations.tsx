import { useEffect, useState } from 'react';

const ScrollAnimations = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('scroll-animations');
    if (element) {
      observer.observe(element);
    }

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div id="scroll-animations" className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Missile animation triggered by scroll */}
      {isVisible && (
        <>
          <div 
            className="absolute transition-all duration-1000 ease-out"
            style={{
              left: `${Math.min(100, scrollY * 0.1)}%`,
              top: `${20 + Math.sin(scrollY * 0.01) * 10}%`,
              transform: `rotate(${scrollY * 0.05}deg)`,
              opacity: scrollY > 100 ? 1 : 0,
            }}
          >
            <div className="w-8 h-2 bg-gradient-to-r from-red-500 to-orange-400 rounded-full relative">
              <div className="absolute -right-2 top-0 w-4 h-2 bg-gradient-to-r from-orange-400 to-yellow-300 rounded-full opacity-80"></div>
              <div className="absolute -right-4 top-0.5 w-2 h-1 bg-yellow-300 rounded-full opacity-60"></div>
            </div>
          </div>

          {/* Drone animation */}
          <div 
            className="absolute transition-all duration-1000 ease-out"
            style={{
              right: `${Math.min(100, scrollY * 0.08)}%`,
              top: `${40 + Math.cos(scrollY * 0.008) * 15}%`,
              transform: `rotate(${-scrollY * 0.03}deg)`,
              opacity: scrollY > 200 ? 1 : 0,
            }}
          >
            <div className="w-6 h-6 bg-slate-700 rounded-sm relative">
              <div className="absolute -top-1 -left-1 w-2 h-2 bg-blue-400 rounded-full animate-spin"></div>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-400 rounded-full animate-spin"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-blue-400 rounded-full animate-spin"></div>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-blue-400 rounded-full animate-spin"></div>
            </div>
          </div>

          {/* Interceptor net animation */}
          <div 
            className="absolute transition-all duration-1000 ease-out"
            style={{
              left: `${30 + Math.sin(scrollY * 0.005) * 20}%`,
              top: `${60 + Math.cos(scrollY * 0.007) * 10}%`,
              opacity: scrollY > 400 ? 1 : 0,
            }}
          >
            <div className="w-12 h-12 border-2 border-green-400 border-dashed rounded-full animate-pulse">
              <div className="w-full h-full border border-green-300 rounded-full opacity-50"></div>
            </div>
          </div>

          {/* Floating particles */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
              style={{
                left: `${10 + (i * 10) + Math.sin(scrollY * 0.01 + i) * 5}%`,
                top: `${20 + Math.cos(scrollY * 0.008 + i) * 20}%`,
                opacity: scrollY > 150 ? 0.6 : 0,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default ScrollAnimations;