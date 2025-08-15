import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Send, Users, Building } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setIsSubmitting(false);
  };

  return (
    <div id="contact" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-cyan-600/20 border border-cyan-500/30 text-cyan-300 text-sm font-medium mb-4 animate-pulse">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-cyan-500">Secure Your Assets?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Let's discuss how SkyDenex can protect what matters most to you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Interest Areas */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border-blue-500/20 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <Building className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Enterprise Solutions</h3>
                <p className="text-sm text-gray-200">Critical infrastructure and airport security</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border-green-500/20 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 text-green-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Investment</h3>
                <p className="text-sm text-gray-200">Partnership and funding opportunities</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-purple-900/20 to-violet-900/20 border-purple-500/20 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <Mail className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">General Inquiry</h3>
                <p className="text-sm text-gray-200">Technology questions and demos</p>
              </CardContent>
            </Card>
          </div>

          {/* Simplified Contact Form */}
          <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-white">Contact SkyDenex</CardTitle>
              <p className="text-gray-300">We'll respond within 24 hours</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input 
                    placeholder="Your name" 
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-cyan-400 transition-colors"
                    required
                  />
                  <Input 
                    type="email" 
                    placeholder="your.email@company.com" 
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-cyan-400 transition-colors"
                    required
                  />
                </div>

                <Input 
                  placeholder="Company (optional)" 
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-cyan-400 transition-colors"
                />

                <Textarea 
                  placeholder="How can we help you?"
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 min-h-[100px] focus:border-cyan-400 transition-colors"
                  required
                />

                <Button 
                  type="submit" 
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-cyan-600 hover:bg-cyan-700 text-white hover:scale-105 transition-all duration-300"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Quick Contact */}
          <div className="text-center mt-8">
            <p className="text-gray-300 mb-4">Prefer direct contact?</p>
            <a 
              href="mailto:contact@skydenex.com" 
              className="text-cyan-400 hover:text-cyan-300 font-semibold hover:scale-110 transition-all duration-300 inline-block"
            >
              contact@skydenex.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;