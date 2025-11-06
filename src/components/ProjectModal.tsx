import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, Maximize2, X } from "lucide-react";
import { useState } from "react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    demoUrl: string;
  };
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {/* Standard Modal */}
      <Dialog open={isOpen && !isExpanded} onOpenChange={onClose}>
        <DialogContent className="glass max-w-4xl h-[80vh] flex flex-col p-0 border-primary/30">
          <DialogHeader className="p-6 pb-4">
            <DialogTitle className="gradient-text text-2xl flex items-center justify-between">
              {project.title}
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="hover:bg-primary/20"
              >
                <X className="h-5 w-5" />
              </Button>
            </DialogTitle>
          </DialogHeader>
          <div className="flex-1 px-6 pb-4">
            <iframe
              src={project.demoUrl}
              className="w-full h-full rounded-lg border border-primary/20"
              title={project.title}
            />
          </div>
          <div className="p-6 pt-0 flex gap-3 justify-end border-t border-primary/20">
            <Button
              onClick={() => setIsExpanded(true)}
              className="bg-gradient-primary hover:shadow-neon transition-all duration-300"
            >
              <Maximize2 className="mr-2 h-4 w-4" />
              Expand View
            </Button>
            <Button
              onClick={() => window.open(project.demoUrl, "_blank")}
              variant="outline"
              className="glass border-primary/30 hover:bg-primary/20"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Open in New Tab
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Expanded Modal */}
      <Dialog open={isExpanded} onOpenChange={() => setIsExpanded(false)}>
        <DialogContent className="glass max-w-[95vw] h-[95vh] flex flex-col p-0 border-primary/30">
          <DialogHeader className="p-6 pb-4">
            <DialogTitle className="gradient-text text-2xl flex items-center justify-between">
              {project.title}
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsExpanded(false)}
                  className="hover:bg-primary/20"
                >
                  <Minimize2 className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="hover:bg-primary/20"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </DialogTitle>
          </DialogHeader>
          <div className="flex-1 px-6 pb-6">
            <iframe
              src={project.demoUrl}
              className="w-full h-full rounded-lg border border-primary/20"
              title={project.title}
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

const Minimize2 = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="4 14 10 14 10 20" />
    <polyline points="20 10 14 10 14 4" />
    <line x1="14" y1="10" x2="21" y2="3" />
    <line x1="3" y1="21" x2="10" y2="14" />
  </svg>
);

export default ProjectModal;
