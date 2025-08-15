import { useEffect, useState } from 'react';

const ScrollAnimations = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const progress = Math.min(scrollY / 2000, 1);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Defense grid background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at ${50 + Math.sin(scrollY * 0.001) * 10}% ${50 + Math.cos(scrollY * 0.0015) * 10}%, rgba(59, 130, 246, 0.3) 0%, transparent 70%)`,
          transform: `scale(${1 + progress * 0.2})`,
        }}
      />

      {/* Interceptor missiles launching */}
      {[...Array(3)].map((_, i) => (
        <div
          key={`interceptor-${i}`}
          className="absolute transition-all duration-500 ease-out"
          style={{
            left: `${15 + i * 25}%`,
            bottom: `${-20 + Math.min(scrollY * 0.15, 120)}%`,
            opacity: scrollY > 100 + i * 100 ? 1 : 0,
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

      {/* Interception effects */}
      {scrollY > 500 && (
        <>
          {/* Radar sweeps */}
          <div 
            className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-green-400 border-dashed rounded-full animate-spin opacity-40"
            style={{
              animationDuration: '4s',
              transform: `scale(${1 + Math.sin(scrollY * 0.01) * 0.2})`,
            }}
          />
          
          {/* Target locks */}
          {[...Array(2)].map((_, i) => (
            <div
              key={`lock-${i}`}
              className="absolute animate-pulse"
              style={{
                right: `${30 + i * 20}%`,
                top: `${40 + i * 10}%`,
                opacity: scrollY > 600 + i * 100 ? 0.8 : 0,
              }}
            >
              <div className="w-8 h-8 border-2 border-yellow-400 rounded-full relative">
                <div className="absolute inset-2 border border-yellow-300 rounded-full"></div>
                <div className="absolute inset-3 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
              </div>
            </div>
          ))}

          {/* Impact flashes */}
          {scrollY > 800 && (
            <div 
              className="absolute top-1/3 right-1/3 w-6 h-6 bg-yellow-300 rounded-full animate-ping opacity-60"
              style={{
                animationDuration: '1s',
                boxShadow: '0 0 20px rgba(255, 255, 0, 0.8)',
              }}
            />
          )}
        </>
      )}

      {/* Success indicators */}
      {scrollY > 1000 && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="text-green-400 font-bold text-xl animate-pulse opacity-70">
            THREATS NEUTRALIZED
          </div>
        </div>
      )}
    </div>
  );
};

export default ScrollAnimations;