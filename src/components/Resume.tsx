import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resume = () => {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-12 text-center shadow-card hover:shadow-neon transition-all duration-300">
            <div className="inline-flex p-4 rounded-full bg-gradient-primary mb-6 animate-float">
              <FileText className="h-12 w-12 text-background" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Download My Resume</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get a comprehensive overview of my experience, skills, and achievements in software development
            </p>
            
            <Button 
              size="lg"
              className="group bg-gradient-primary hover:shadow-neon transition-all duration-300"
              asChild
            >
              <a 
                href="/Vutukuru_Jagadeesh_Kumar_Reddy_Resume.pdf" 
                download="Vutukuru_Jagadeesh_Kumar_Reddy_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
