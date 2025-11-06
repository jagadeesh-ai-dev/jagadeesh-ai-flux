import { Code2, Database, Cpu, Blocks, Zap, Braces } from "lucide-react";

const skills = [
  { name: ".NET", icon: Blocks, description: "C# • ASP.NET Core • Entity Framework" },
  { name: "React", icon: Braces, description: "TypeScript • Next.js • Redux" },
  { name: "SQL", icon: Database, description: "SQL Server • PostgreSQL • MongoDB" },
  { name: "C#", icon: Code2, description: "OOP • SOLID • Design Patterns" },
  { name: "JavaScript", icon: Zap, description: "ES6+ • Node.js • Express" },
  { name: "AI Tools", icon: Cpu, description: "OpenAI • ML.NET • TensorFlow" }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-primary mx-auto mb-16 rounded-full"></div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="glass rounded-2xl p-6 hover:shadow-neon transition-all duration-300 group hover:scale-105"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 rounded-xl bg-gradient-primary group-hover:shadow-neon transition-all duration-300">
                      <Icon className="h-8 w-8 text-background" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {skill.name}
                      </h3>
                      <p className="text-sm text-muted-foreground font-mono">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
