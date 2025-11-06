import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "AI Portfolio",
    description: "An intelligent portfolio system powered by machine learning algorithms for dynamic content curation and personalized user experiences.",
    tech: ["AI", "React", ".NET", "SQL"],
    gradient: "from-primary to-secondary"
  },
  {
    title: "Affiliate Store",
    description: "Full-featured e-commerce platform with advanced analytics, inventory management, and seamless payment integration.",
    tech: ["React", ".NET Core", "SQL Server", "Stripe"],
    gradient: "from-secondary to-accent"
  },
  {
    title: "Interior Design App",
    description: "Interactive 3D visualization tool for interior design planning with AI-powered furniture recommendations and AR preview.",
    tech: ["Three.js", "AI", "React", "PostgreSQL"],
    gradient: "from-accent to-primary"
  },
  {
    title: "AI Tools Directory",
    description: "Comprehensive directory of AI tools and resources with intelligent search, categorization, and user reviews.",
    tech: ["React", ".NET", "MongoDB", "OpenAI API"],
    gradient: "from-primary to-accent"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-primary mx-auto mb-16 rounded-full"></div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-8 hover:shadow-neon transition-all duration-300 group hover:scale-[1.02]"
              >
                {/* Project Header */}
                <div className={`h-2 w-full bg-gradient-to-r ${project.gradient} rounded-full mb-6`}></div>
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-sm font-mono bg-primary/10 border border-primary/30 rounded-full text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="glass hover:bg-primary/20 border-primary/30 hover:border-primary transition-all duration-300"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="glass hover:bg-primary/20 border-primary/30 hover:border-primary transition-all duration-300"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
