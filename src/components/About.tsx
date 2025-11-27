import { User, Linkedin, Github, Mail, Briefcase, Code, Sparkles, Building2, Lightbulb, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section 
      id="about" 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 relative transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            {/* Profile Picture with Gradient Border */}
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-md opacity-50 animate-pulse dark:block hidden"></div>
              <Avatar className="relative h-32 w-32 md:h-40 md:w-40 border-4 border-primary/50 shadow-lg transition-all duration-300 hover:scale-105 dark:shadow-neon light:shadow-xl">
                <AvatarImage src={profilePhoto} alt="Jagadeesh Kumar Reddy" />
                <AvatarFallback className="bg-gradient-primary text-primary-foreground text-3xl md:text-4xl font-bold">
                  VJKR
                </AvatarFallback>
              </Avatar>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">About Me</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            {/* Bio */}
            <div className="glass rounded-2xl p-8 shadow-card space-y-6">
              <h3 className="text-2xl font-bold gradient-text mb-4">My Story</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate Full Stack Developer specializing in .NET, React, SQL, and AI-powered automation. 
                My journey began at <span className="text-primary font-semibold">HCL Technologies (Nov 15, 2022)</span>, 
                where I worked on enterprise-level web solutions and received multiple appreciation awards for exceptional performance.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3 pt-4">
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
                  <a href="mailto:vutukurujagadeeshkumarreddy@gmail.com" target="_blank" rel="noopener noreferrer">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Experience Timeline */}
            <div className="glass rounded-2xl p-8 shadow-card">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-gradient-primary flex-shrink-0">
                  <Building2 className="h-6 w-6 text-background" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold gradient-text mb-2">Software Engineer</h3>
                  <p className="text-lg font-semibold text-foreground mb-2">HCL Technologies</p>
                  <p className="text-sm text-muted-foreground mb-4">Nov 2022 – Present</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▸</span>
                      <span>Delivered scalable .NET MVC and API solutions for enterprise clients</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▸</span>
                      <span>Optimized SQL performance for high-traffic applications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▸</span>
                      <span>Integrated AI tools for workflow automation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▸</span>
                      <span>Received multiple appreciation awards for exceptional performance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* What I Do Section */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-center mb-8">
              <span className="gradient-text">What I Do</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="glass border-primary/30 p-6 hover:shadow-neon transition-all duration-300 group">
                <div className="p-3 rounded-full bg-gradient-primary w-fit mb-4 group-hover:scale-110 transition-transform">
                  <Lightbulb className="h-6 w-6 text-background" />
                </div>
                <h4 className="text-xl font-bold mb-3 gradient-text">💡 AI Integrations</h4>
                <p className="text-muted-foreground">
                  Embedding intelligence into real-world applications, from prompt generators to smart automation tools.
                </p>
              </Card>

              <Card className="glass border-primary/30 p-6 hover:shadow-neon transition-all duration-300 group">
                <div className="p-3 rounded-full bg-gradient-primary w-fit mb-4 group-hover:scale-110 transition-transform">
                  <Code className="h-6 w-6 text-background" />
                </div>
                <h4 className="text-xl font-bold mb-3 gradient-text">⚙️ .NET Development</h4>
                <p className="text-muted-foreground">
                  Crafting reliable backend systems and APIs that power enterprise-level applications.
                </p>
              </Card>

              <Card className="glass border-primary/30 p-6 hover:shadow-neon transition-all duration-300 group">
                <div className="p-3 rounded-full bg-gradient-primary w-fit mb-4 group-hover:scale-110 transition-transform">
                  <Rocket className="h-6 w-6 text-background" />
                </div>
                <h4 className="text-xl font-bold mb-3 gradient-text">🚀 Digital Solutions</h4>
                <p className="text-muted-foreground">
                  Building growth-driven apps for users and businesses, from marketplaces to tool directories.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
