import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden tech-grid">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-[128px] animate-pulse-glow" />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="mono text-primary text-sm md:text-base mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Hi, my name is
          </p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="gradient-text">Sridhar S</span>
          </h1>
          
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-muted-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Data Science Engineer & AI Builder
          </h2>
          
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-in leading-relaxed" style={{ animationDelay: '0.4s' }}>
            Final-year engineering student building intelligent systems that solve real-world problems. 
            <span className="text-primary"> Ranked 501 out of 10,000+</span> in Amazon ML Challenge 2025.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <Button size="lg" className="gap-2" asChild>
              <a href="#projects">
                View My Work
                <ArrowDown className="w-4 h-4" />
              </a>
            </Button>
            
            <div className="flex items-center gap-3">
              <a 
                href="https://github.com/sridharsuresh32" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors hover:text-primary"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/in/sridhars32" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors hover:text-primary"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:sridharsuresh32@gmail.com"
                className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors hover:text-primary"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
