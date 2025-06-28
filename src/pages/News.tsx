
import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import NewsSection from "@/components/NewsSection";
import { useState, useEffect } from 'react';

const News = () => {
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
        <NewsSection />
      </div>
    </div>
  );
};

export default News;
