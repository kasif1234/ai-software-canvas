
import ProjectsSection from "@/components/ProjectsSection";
import Navigation from "@/components/Navigation";
import { useState, useEffect } from 'react';

const Projects = () => {
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
        <ProjectsSection />
      </div>
    </div>
  );
};

export default Projects;
