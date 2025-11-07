import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FolderOpen, ExternalLink } from "lucide-react";
import { useState } from "react";
import ProjectModal from "./ProjectModal";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const Projects = () => {
  const { ref, isVisible } = useIntersectionObserver();
  const [selectedProject, setSelectedProject] = useState<{
    title: string;
    demoUrl: string;
  } | null>(null);

  const projects = [
    {
      title: "GadgetVerse",
      subtitle: "Affiliate Product Marketplace",
      description: "Developed a responsive affiliate marketplace with product filters, ratings, and dynamic deals using React + Tailwind.",
      tech: ["React", "Tailwind", "JavaScript"],
      demoUrl: "https://gadgetverse.vercel.app",
      gradient: "from-primary/20 to-secondary/20"
    },
    {
      title: "GenPrompt AI",
      subtitle: "AI Prompt Generator",
      description: "Created an AI-powered prompt builder helping users generate viral and productive ChatGPT prompts with one click.",
      tech: ["React", "OpenAI API"],
      demoUrl: "https://genprompt-ai.vercel.app",
      gradient: "from-secondary/20 to-accent/20"
    },
    {
      title: "Brainy AI Hub",
      subtitle: "AI Tools Directory",
      description: "Designed a curated hub of AI tools across categories with instant filters, search, and user-friendly layout.",
      tech: ["React", "Tailwind"],
      demoUrl: "https://brainy-ai-hub.vercel.app",
      gradient: "from-accent/20 to-primary/20"
    }
  ];

  return (
    <section 
      id="projects" 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 relative transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex p-3 rounded-full bg-gradient-primary mb-4 animate-glow">
              <FolderOpen className="h-8 w-8 text-background" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real-world applications built with modern technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="glass border-primary/30 overflow-hidden group hover:shadow-neon transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1 gradient-text">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 text-xs rounded-full glass border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-2">
                    <Button 
                      onClick={() => setSelectedProject({ title: project.title, demoUrl: project.demoUrl })}
                      className="flex-1 bg-gradient-primary hover:shadow-neon transition-all duration-300"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
        />
      )}
    </section>
  );
};

export default Projects;
