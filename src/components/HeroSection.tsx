import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative px-6"
    >
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up">
          <span className="text-gradient">Your Name</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-up-delay-1">
          Data Scientist & Software Engineer | Building Production ML/Software Systems at Scale
        </p>
        <div className="animate-fade-up-delay-2">
          <Button
            size="lg"
            className="rounded-full px-8 py-6 text-base font-medium animate-pulse-glow"
            asChild
          >
            <a href="#projects">Explore My Work</a>
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-10 animate-bounce">
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <ArrowDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
