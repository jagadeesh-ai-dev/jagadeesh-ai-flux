import { useEffect, useState } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Award, Briefcase, Code, ThumbsUp } from "lucide-react";

const Stats = () => {
  const { ref, isVisible } = useIntersectionObserver();
  const [counters, setCounters] = useState({
    experience: 0,
    awards: 0,
    projects: 0,
    satisfaction: 0,
  });

  const stats = [
    {
      icon: Briefcase,
      value: 3,
      suffix: "+",
      label: "Years Experience",
      color: "text-primary",
    },
    {
      icon: Award,
      value: 2,
      suffix: "+",
      label: "Awards",
      color: "text-secondary",
    },
    {
      icon: Code,
      value: 2,
      suffix: "+",
      label: "Projects",
      color: "text-accent",
    },
    {
      icon: ThumbsUp,
      value: 100,
      suffix: "%",
      label: "Client Satisfaction",
      color: "text-primary",
    },
  ];

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounters({
        experience: Math.floor(stats[0].value * progress),
        awards: Math.floor(stats[1].value * progress),
        projects: Math.floor(stats[2].value * progress),
        satisfaction: Math.floor(stats[3].value * progress),
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        // Set final values
        setCounters({
          experience: stats[0].value,
          awards: stats[1].value,
          projects: stats[2].value,
          satisfaction: stats[3].value,
        });
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [isVisible]);

  const getCounterValue = (index: number) => {
    const keys = ["experience", "awards", "projects", "satisfaction"] as const;
    return counters[keys[index]];
  };

  return (
    <section id="stats" className="py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">By The Numbers</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Proven track record of delivering excellence
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="glass rounded-2xl p-8 text-center group hover:shadow-neon transition-all duration-300 hover:scale-105"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className="inline-flex p-4 rounded-full bg-gradient-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="text-5xl md:text-6xl font-bold mb-2">
                    <span className={`${stat.color} gradient-text`}>
                      {getCounterValue(index)}
                      {stat.suffix}
                    </span>
                  </div>
                  <p className="text-muted-foreground font-medium text-sm md:text-base">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
