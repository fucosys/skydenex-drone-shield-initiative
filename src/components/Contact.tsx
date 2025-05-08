
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/sonner";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast("All fields are required", {
        description: "Please fill in all the fields before submitting.",
      });
      return;
    }
    
    // Here you would normally send the form data to your backend
    console.log("Form submitted:", formData);
    
    // Show success message
    toast("Message sent successfully", {
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const fadeInClass = isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10';

  return (
    <div 
      id="contact" 
      ref={sectionRef}
      className="py-20 bg-slate-900"
    >
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 delay-100 ${fadeInClass}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
            Contact <span className="text-green-500">Us</span>
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-12"></div>
          <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
            Interested in learning more about our defense solutions or exploring investment opportunities? 
            Get in touch with our team today.
          </p>
        </div>

        <div className={`max-w-3xl mx-auto grid md:grid-cols-2 gap-10 transition-all duration-1000 delay-300 ${fadeInClass}`}>
          <div>
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="bg-slate-800 border-gray-700 focus:border-green-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="bg-slate-800 border-gray-700 focus:border-green-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help..."
                  rows={5}
                  className="bg-slate-800 border-gray-700 focus:border-green-500"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                Send Message
              </Button>
            </form>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6">Our Information</h3>
            <div className="space-y-4 mb-8">
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-green-400">contact@skydenex.com</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Location</p>
                <p>European Defense Tech Hub, Prague</p>
              </div>
            </div>
            
            <h4 className="text-xl font-semibold mb-4">For Investors</h4>
            <p className="text-gray-300 mb-6">
              We are currently seeking investments to scale our production and finalize our product development. 
              If you're interested in investment opportunities, please reach out directly.
            </p>
            
            <div className="bg-slate-800 p-6 rounded-lg border border-green-500/20">
              <h5 className="font-semibold mb-2">Investment Contact</h5>
              <p className="text-green-400 mb-1">investors@skydenex.com</p>
              <p className="text-sm text-gray-400">
                For information on our current funding round and investment deck
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
