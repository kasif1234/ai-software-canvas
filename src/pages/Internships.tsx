
import Navigation from "@/components/Navigation";
import InternshipsSection from "@/components/InternshipsSection";
import { useState, useEffect } from 'react';

const Internships = () => {
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
        <InternshipsSection />
      </div>
    </div>
  );
};

export default Internships;
