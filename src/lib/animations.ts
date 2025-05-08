
// Animation utilities for the Skydenex landing page

// Fade in animation with optional delay
export const fadeInAnimation = (delay: number = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      delay: delay,
      ease: "easeOut"
    } 
  }
});

// Scale in animation
export const scaleInAnimation = (delay: number = 0) => ({
  initial: { opacity: 0, scale: 0.9 },
  animate: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      duration: 0.5, 
      delay: delay,
      ease: "easeOut" 
    } 
  }
});

// Slide in from left animation
export const slideInLeftAnimation = (delay: number = 0) => ({
  initial: { opacity: 0, x: -50 },
  animate: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.6, 
      delay: delay,
      ease: "easeOut" 
    } 
  }
});

// Slide in from right animation
export const slideInRightAnimation = (delay: number = 0) => ({
  initial: { opacity: 0, x: 50 },
  animate: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.6, 
      delay: delay,
      ease: "easeOut" 
    } 
  }
});

// Pulse animation utility
export const pulseAnimation = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Add a slight hover effect to elements
export const hoverAnimation = {
  whileHover: { 
    scale: 1.03, 
    transition: { duration: 0.2 } 
  }
};

// For section transitions
export function useScrollAnimation(threshold = 0.1) {
  return {
    threshold,
    triggerOnce: true,
  };
}
