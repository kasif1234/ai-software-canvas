
import Navigation from "@/components/Navigation";
import { useState, useEffect } from 'react';

const GrowthRoadmap = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="pt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-primary mb-4">AI Mastery Growth Roadmap</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My comprehensive learning path to master artificial intelligence and machine learning technologies
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="w-full max-w-6xl">
              <img 
                src="/lovable-uploads/81179974-d9f6-4319-bcad-5e22bc208246.png" 
                alt="AI Mastery Roadmap" 
                className="w-full h-auto rounded-lg shadow-lg border border-border"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowthRoadmap;
