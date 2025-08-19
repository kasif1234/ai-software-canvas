import Navigation from "@/components/Navigation";
import { useState, useEffect } from 'react';

const DailyTracker = () => {
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
            <h1 className="text-4xl font-bold text-primary mb-4">Daily Tracker</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Track your daily progress and activities
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {/* Daily Entry Row */}
              <div className="bg-card rounded-lg border border-border p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-shrink-0">
                    <div className="bg-primary/10 text-primary px-4 py-2 rounded-lg font-semibold text-center min-w-[120px]">
                      19/08/2025
                    </div>
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="border-l-4 border-primary/30 pl-4">
                      <h3 className="font-semibold text-lg mb-1">QSTP Work</h3>
                      <p className="text-muted-foreground">Set up Docker for PostgreSQL and FastAPI backend in Python</p>
                    </div>
                    <div className="border-l-4 border-secondary/50 pl-4">
                      <h3 className="font-semibold text-lg mb-1">MIT Algorithms</h3>
                      <p className="text-muted-foreground">Studied Linear Sorting vs. Comparison-Based Sorting</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyTracker;