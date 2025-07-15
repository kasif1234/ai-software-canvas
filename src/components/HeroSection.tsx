
import { Button } from "@/components/ui/button";
import { ArrowDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const goToProjects = () => {
    navigate('/projects');
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden tech-grid-bg">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl floating-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl floating-animation" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            I Build{' '}
            <span className="gradient-text">
              Intelligent Software
            </span>
            .
            <br />
            From Systems to Solutions.
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Software Engineer | AI/ML Specialist | Innovator
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Button 
              size="lg" 
              onClick={goToProjects}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg glow-effect"
            >
              Explore My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-3 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Download Resume
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;
