import { useEffect, useState } from 'react';

const ScrollAnimations = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isInProblemSection, setIsInProblemSection] = useState(false);
  const [isInSolutionSection, setIsInSolutionSection] = useState(false);
  const [maxMissileProgress, setMaxMissileProgress] = useState(0);
  const [maxDroneProgress, setMaxDroneProgress] = useState(0);
  const [currentMissileProgress, setCurrentMissileProgress] = useState(0);
  const [currentDroneProgress, setCurrentDroneProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Check if we're in the Problem section
      const problemSection = document.getElementById('problem');
      if (problemSection) {
        const rect = problemSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        setIsInProblemSection(isVisible);
        
        // Track current drone progress (no lock)
        if (rect.top < window.innerHeight) {
          const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight));
          setCurrentDroneProgress(progress);
          setMaxDroneProgress(prev => Math.max(prev, progress)); // Keep for show condition
        } else {
          setCurrentDroneProgress(0); // Reset when section is not visible
        }
      }

      // Check if we're in the Solution section  
      const solutionSection = document.getElementById('solution');
      if (solutionSection) {
        const rect = solutionSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        setIsInSolutionSection(isVisible);
        
        // Track current missile progress (no lock)
        if (rect.top < window.innerHeight) {
          const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight));
          setCurrentMissileProgress(progress);
          setMaxMissileProgress(prev => Math.max(prev, progress)); // Keep for show condition
        } else {
          setCurrentMissileProgress(0); // Reset when section is not visible
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Show drones during problem section and keep them visible after
  const showDrones = isInProblemSection || maxDroneProgress > 0;
  const showMissiles = isInSolutionSection || maxMissileProgress > 0;

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Interceptor missiles launching - only during solution section */}
      {showMissiles && [...Array(3)].map((_, i) => {        
        return (
          <div
            key={`interceptor-${i}`}
            className="absolute transition-all duration-300 ease-out"
            style={{
              left: `${15 + i * 25}%`,
              bottom: `${-10 + currentMissileProgress * 120 + i * 8}%`, // Use current progress
              opacity: currentMissileProgress > 0.01 + i * 0.05 ? 1 : 0,
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
        );
      })}

      {/* Threat drones incoming - move back and forth */}
      {showDrones && [...Array(4)].map((_, i) => {        
        return (
          <div
            key={`threat-${i}`}
            className="absolute transition-all duration-700 ease-linear"
            style={{
              right: `${-10 + currentDroneProgress * 100 + i * 10}%`, // Use current progress
              top: `${20 + i * 15 + Math.sin(scrollY * 0.005 + i) * 5}%`,
              opacity: currentDroneProgress > 0.01 + i * 0.02 ? 1 : 0,
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
        );
      })}
    </div>
  );
};

export default ScrollAnimations;