import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Brand */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold gradient-text mb-2">
                Vutukuru Jagadeesh Kumar Reddy
              </h3>
              <p className="text-sm text-muted-foreground">
                AI × .NET Developer | Full Stack Engineer
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              <Button 
                size="icon" 
                variant="outline"
                className="glass hover:bg-primary/20 border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-neon"
                asChild
              >
                <a href="https://www.linkedin.com/in/jagadeesh-kumar-reddy" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                size="icon" 
                variant="outline"
                className="glass hover:bg-primary/20 border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-neon"
                asChild
              >
                <a href="https://github.com/jagadeesh-ai-dev" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                size="icon" 
                variant="outline"
                className="glass hover:bg-primary/20 border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-neon"
                asChild
              >
                <a href="mailto:vjagadeeshkumarreddy@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-8 flex justify-center gap-6 text-sm text-muted-foreground">
            <button 
              onClick={() => scrollToSection("home")}
              className="hover:text-primary transition-colors"
            >
              Home
            </button>
            <span>•</span>
            <button 
              onClick={() => scrollToSection("about")}
              className="hover:text-primary transition-colors"
            >
              About
            </button>
            <span>•</span>
            <button 
              onClick={() => scrollToSection("projects")}
              className="hover:text-primary transition-colors"
            >
              Projects
            </button>
            <span>•</span>
            <button 
              onClick={() => scrollToSection("contact")}
              className="hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-primary/10 text-center">
            <p className="text-sm text-muted-foreground flex flex-wrap items-center justify-center gap-2">
              © {currentYear} Jagadeesh AI Portfolio | Built with <Heart className="h-4 w-4 text-primary animate-pulse" /> using React & Lovable.dev | Hosted on Vercel
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
