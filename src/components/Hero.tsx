
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string>("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const getVideoUrl = async () => {
      try {
        console.log('Attempting to load video from Supabase...');
        
        // Use the exact filename as it appears in storage
        const filename = 'SkyDenex - RealShowCase - LowQuality.mp4';
        
        const { data, error } = await supabase.storage
          .from('videos')
          .createSignedUrl(filename, 3600);
        
        if (error) {
          console.error('Supabase storage error:', error);
          console.error('Error details:', error.message);
          return;
        }
        
        if (data?.signedUrl) {
          console.log('Video URL generated successfully:', data.signedUrl);
          setVideoUrl(data.signedUrl);
          
          // Test if the video can actually load
          const video = document.createElement('video');
          video.onloadedmetadata = () => {
            console.log('Video loaded successfully with dimensions:', video.videoWidth, 'x', video.videoHeight);
          };
          video.onerror = (e) => {
            console.error('Video failed to load:', e);
          };
          video.src = data.signedUrl;
        } else {
          console.log('No signed URL returned from Supabase');
        }
      } catch (error) {
        console.error('Error loading video:', error);
      }
    };

    getVideoUrl();
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background - Secured from Supabase */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {videoUrl ? (
          <video
            key={videoUrl} // Force re-render when URL changes
            autoPlay
            muted
            loop
            playsInline
            src={videoUrl}
            className="w-full h-full object-cover pointer-events-none"
            style={{ 
              pointerEvents: 'none',
              userSelect: 'none',
              touchAction: 'none'
            }}
            onLoadStart={() => console.log('Video load started')}
            onLoadedData={() => console.log('Video data loaded')}
            onCanPlay={() => console.log('Video can play')}
            onError={(e) => console.error('Video error:', e)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center">
            <div className="text-white text-lg">Loading video...</div>
          </div>
        )}
        {/* Fallback gradient when video is loading/unavailable */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 opacity-70"></div>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 z-10 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          animation: 'float 20s ease-in-out infinite'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 z-20 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="mb-6">
              <span className="inline-block px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-4">
                Next-Generation Drone Defense
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-cyan-400">
                Autonomous Defense
              </span>
              <br />
              <span className="text-white">
                Against Modern Threats
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              SkyDenex delivers fully autonomous, non-lethal drone defense systems that protect critical infrastructure 
              with AI-powered precision and zero collateral damage.
            </p>
            
            <div className="flex justify-center mb-12">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg hover:scale-105 transition-all duration-300"
                onClick={() => {
                  document.getElementById("solution")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Discover Our Technology <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            {/* Key metrics with enhanced animations */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center group">
                <div className="transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-3">
                  <div className="text-3xl font-bold text-blue-400 mb-2 animate-pulse">≤10cm</div>
                  <div className="text-gray-300 transition-colors duration-300 group-hover:text-blue-300">Tracking Precision</div>
                </div>
              </div>
              <div className="text-center group">
                <div className="transform transition-all duration-500 group-hover:scale-125 group-hover:-rotate-3">
                  <div className="text-3xl font-bold text-green-400 mb-2 animate-pulse">100%</div>
                  <div className="text-gray-300 transition-colors duration-300 group-hover:text-green-300">Autonomous</div>
                </div>
              </div>
              <div className="text-center group">
                <div className="transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-3">
                  <div className="text-3xl font-bold text-purple-400 mb-2 animate-pulse">0%</div>
                  <div className="text-gray-300 transition-colors duration-300 group-hover:text-purple-300">Collateral Damage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
