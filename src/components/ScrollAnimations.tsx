import { useEffect, useState } from 'react';

const ScrollAnimations = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isInProblemSection, setIsInProblemSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Check if we're in the Problem section
      const problemSection = document.getElementById('problem');
      if (problemSection) {
        const rect = problemSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        setIsInProblemSection(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Only show animations when in problem section
  if (!isInProblemSection) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Interceptor missiles launching - delayed to hit drones */}
      {[...Array(3)].map((_, i) => (
        <div
          key={`interceptor-${i}`}
          className="absolute transition-all duration-500 ease-out"
          style={{
            left: `${15 + i * 25}%`,
            bottom: `${-20 + Math.min(scrollY * 0.15, 120)}%`,
            opacity: scrollY > 250 + i * 100 ? 1 : 0, // Delayed to intercept drones
            transform: `rotate(-15deg)`,
          }}
        >
          <div className="relative">
            {/* Missile body */}
            <div className="w-1 h-8 bg-gradient-to-t from-slate-400 to-slate-200 rounded-full"></div>
            {/* Exhaust trail */}
            <div className="absolute top-8 left-0 w-1 h-12 bg-gradient-to-t from-orange-500 via-yellow-400 to-transparent opacity-80 animate-pulse"></div>
          </div>
        </div>
      ))}

      {/* Threat drones incoming */}
      {[...Array(4)].map((_, i) => (
        <div
          key={`threat-${i}`}
          className="absolute transition-all duration-700 ease-linear"
          style={{
            right: `${-10 + Math.min(scrollY * 0.12, 100 + i * 10)}%`,
            top: `${20 + i * 15 + Math.sin(scrollY * 0.005 + i) * 5}%`,
            opacity: scrollY > 150 + i * 50 ? 1 : 0,
            transform: `rotate(${-10 + Math.sin(scrollY * 0.003 + i) * 5}deg)`,
          }}
        >
          <div className="w-4 h-4 bg-red-600 relative">
            {/* Drone propellers */}
            <div className="absolute -top-1 -left-1 w-2 h-2 bg-red-400 rounded-full animate-spin"></div>
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-400 rounded-full animate-spin"></div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-red-400 rounded-full animate-spin"></div>
            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-red-400 rounded-full animate-spin"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScrollAnimations;