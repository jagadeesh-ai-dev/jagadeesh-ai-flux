import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, Phone, Linkedin, Github } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { ref, isVisible } = useIntersectionObserver();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    
    window.location.href = `mailto:vutukurujagadeeshkumarreddy@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section 
      id="contact" 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 relative transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-full bg-gradient-primary mb-4 animate-glow">
              <Mail className="h-8 w-8 text-background" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Get In Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Have a project in mind? Let's work together to create something amazing
            </p>
          </div>

          <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 shadow-card space-y-6 mb-8">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="glass border-primary/30 focus:border-primary transition-all duration-300"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="glass border-primary/30 focus:border-primary transition-all duration-300"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Tell me about your project..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={6}
                className="glass border-primary/30 focus:border-primary transition-all duration-300 resize-none"
              />
            </div>

            <Button 
              type="submit"
              size="lg"
              className="w-full group bg-gradient-primary hover:shadow-neon transition-all duration-300"
            >
              <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              Send Message
            </Button>
          </form>

          {/* Direct Contact Options */}
          <div className="glass rounded-2xl p-8 shadow-card">
            <h3 className="text-xl font-bold text-center mb-6 gradient-text">
              Or reach me directly via:
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Button 
                variant="outline"
                className="glass hover:bg-primary/20 border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-neon hover:scale-105 h-auto py-4 flex-col gap-2"
                asChild
              >
              <a href="mailto:vutukurujagadeeshkumarreddy@gmail.com" target="_blank" rel="noopener noreferrer">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    <span className="font-semibold">Email</span>
                  </div>
                  <span className="text-xs text-muted-foreground">vutukurujagadeeshkumarreddy@gmail.com</span>
                </a>
              </Button>
              
              <Button 
                variant="outline"
                className="glass hover:bg-primary/20 border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-neon hover:scale-105 h-auto py-4 flex-col gap-2"
                asChild
              >
                <a href="tel:+919391163614" target="_blank" rel="noopener noreferrer">
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    <span className="font-semibold">Call Me</span>
                  </div>
                  <span className="text-xs text-muted-foreground">+91 93911 63614</span>
                </a>
              </Button>
              
              <Button 
                variant="outline"
                className="glass hover:bg-primary/20 border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-neon hover:scale-105 h-auto py-4 flex-col gap-2"
                asChild
              >
                <a href="https://www.linkedin.com/in/jagadeesh-kumar-reddy" target="_blank" rel="noopener noreferrer">
                  <div className="flex items-center gap-2">
                    <Linkedin className="h-5 w-5" />
                    <span className="font-semibold">LinkedIn</span>
                  </div>
                  <span className="text-xs text-muted-foreground">Connect professionally</span>
                </a>
              </Button>
              
              <Button 
                variant="outline"
                className="glass hover:bg-primary/20 border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-neon hover:scale-105 h-auto py-4 flex-col gap-2"
                asChild
              >
                <a href="https://github.com/jagadeesh-ai-dev" target="_blank" rel="noopener noreferrer">
                  <div className="flex items-center gap-2">
                    <Github className="h-5 w-5" />
                    <span className="font-semibold">GitHub</span>
                  </div>
                  <span className="text-xs text-muted-foreground">View my code</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
