import { Code2 } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Skills = () => {
  const skills = [
    { 
      name: ".NET", 
      icon: "🔷",
      example: "HCL Technologies enterprise solutions"
    },
    { 
      name: "C#", 
      icon: "💻",
      example: "Backend API development"
    },
    { 
      name: "React", 
      icon: "⚛️",
      example: "GadgetVerse, GenPrompt AI, Brainy AI Hub"
    },
    { 
      name: "SQL", 
      icon: "🗄️",
      example: "Database optimization at HCL"
    },
    { 
      name: "JavaScript", 
      icon: "📜",
      example: "Interactive web applications"
    },
    { 
      name: "jQuery", 
      icon: "🔧",
      example: "Legacy system maintenance"
    },
    { 
      name: "AI Tools", 
      icon: "🤖",
      example: "GenPrompt AI, workflow automation"
    },
    { 
      name: "HTML5", 
      icon: "🌐",
      example: "Semantic web structure"
    },
    { 
      name: "CSS3", 
      icon: "🎨",
      example: "Responsive design & animations"
    },
    { 
      name: "Bootstrap", 
      icon: "🅱️",
      example: "Rapid UI prototyping"
    },
    { 
      name: "Git", 
      icon: "📦",
      example: "Version control & collaboration"
    },
    { 
      name: "Tailwind", 
      icon: "🎯",
      example: "Modern utility-first styling"
    }
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex p-3 rounded-full bg-gradient-primary mb-4 animate-glow">
              <Code2 className="h-8 w-8 text-background" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Technical Skills</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Technologies I work with to build exceptional solutions
            </p>
          </div>

          <TooltipProvider>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {skills.map((skill, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <div 
                      className="glass rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:shadow-neon transition-all duration-300 group cursor-pointer hover:scale-105"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <span className="text-4xl group-hover:scale-110 transition-transform">{skill.icon}</span>
                      <span className="text-sm font-medium text-center gradient-text">{skill.name}</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="glass border-primary/30 max-w-xs">
                    <p className="text-sm">
                      <span className="font-semibold text-primary">Used in:</span> {skill.example}
                    </p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </TooltipProvider>
        </div>
      </div>
    </section>
  );
};

export default Skills;
