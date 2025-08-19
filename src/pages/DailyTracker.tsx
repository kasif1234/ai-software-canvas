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
            <div className="bg-card rounded-lg border border-border p-6">
              <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
              <p className="text-muted-foreground">
                Daily tracking functionality will be added here to help you monitor your progress and activities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyTracker;