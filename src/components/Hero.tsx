import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background"></div>
      </div>

      {/* Animated Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(195_100%_55%/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(195_100%_55%/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
              <span className="gradient-text text-shadow-glow animate-glow">
                Vutukuru Jagadeesh Kumar Reddy
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground/90">
              AI × .NET Developer | Full Stack Engineer | Problem Solver
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Building Smart, Scalable, and AI-Driven Solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="group relative overflow-hidden bg-gradient-primary hover:shadow-neon transition-all duration-300 text-lg px-8"
              onClick={() => scrollToSection('projects')}
            >
              🧠 View My Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="glass hover:bg-primary/10 border-primary/30 hover:border-primary transition-all duration-300 text-lg px-8"
              asChild
            >
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                📄 Download Resume
              </a>
            </Button>
          </div>

          {/* Floating Tech Icons */}
          <div className="flex justify-center gap-8 pt-12 opacity-60">
            {['.NET', 'AI', 'React', 'SQL', 'C#'].map((tech, i) => (
              <div 
                key={tech}
                className="text-sm font-mono text-primary animate-float"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
