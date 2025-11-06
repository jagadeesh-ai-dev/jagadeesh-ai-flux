import { Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-primary mx-auto mb-16 rounded-full"></div>

          <div className="glass rounded-2xl p-8 md:p-12 shadow-card">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Photo Placeholder */}
              <div className="relative">
                <div className="w-48 h-48 rounded-2xl bg-gradient-primary p-1 animate-glow">
                  <div className="w-full h-full rounded-2xl bg-muted flex items-center justify-center">
                    <span className="text-6xl font-bold gradient-text">VJK</span>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="flex-1 space-y-6">
                <p className="text-lg text-foreground/90 leading-relaxed">
                  Hello! I'm <span className="text-primary font-semibold">Vutukuru Jagadeesh Kumar Reddy</span>, 
                  a passionate Full-Stack Developer specializing in building intelligent digital solutions. 
                  With expertise in <span className="text-secondary font-semibold">.NET, AI, React, and SQL</span>, 
                  I transform complex problems into elegant, scalable applications.
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  My journey in technology is driven by a commitment to innovation and excellence. 
                  I thrive on creating seamless user experiences and robust backend systems that make a real impact.
                </p>

                {/* Social Links */}
                <div className="flex gap-4 pt-4">
                  <Button 
                    size="icon" 
                    variant="outline"
                    className="glass hover:bg-primary/20 border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-neon"
                    asChild
                  >
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button 
                    size="icon" 
                    variant="outline"
                    className="glass hover:bg-primary/20 border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-neon"
                    asChild
                  >
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button 
                    size="icon" 
                    variant="outline"
                    className="glass hover:bg-primary/20 border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-neon"
                    asChild
                  >
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                      <Instagram className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
