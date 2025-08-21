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
          <div className="grid lg:grid-cols-2 gap-8">
            {/* My Methods for Mastery Section */}
            <div>
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-primary mb-4">My Methods for Mastery</h1>
                <p className="text-lg text-muted-foreground">
                  This section documents the techniques I use to consistently learn, retain, and master complex topics.
                </p>
              </div>
              
              <div className="space-y-6">
                {/* Anki Method */}
                <div className="bg-card rounded-lg border border-border p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <img 
                      src="/lovable-uploads/b70e695e-e6a5-40af-94a2-759dd3f36140.png" 
                      alt="Anki app icon" 
                      className="w-16 h-16 rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-primary mb-3">Anki Flashcards</h3>
                      <p className="text-muted-foreground mb-4">
                        Spaced repetition system for long-term retention of key concepts, algorithms, and technical knowledge.
                      </p>
                    </div>
                  </div>
                  <div className="bg-primary/5 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground">
                      <strong>Usage:</strong> Daily review sessions focusing on algorithm complexity, data structures, and core CS concepts.
                    </p>
                  </div>
                </div>

                {/* Black Box Method */}
<div className="bg-card rounded-lg border border-border p-6">
                  <div className="mb-4">
                    <img 
                      src="/lovable-uploads/26a2f970-cb1d-497f-9e3d-ae9eaea43384.png" 
                      alt="Black box method diagram" 
                      className="w-full max-w-md mx-auto rounded-lg object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-primary mb-3">Black Box Method</h3>
                    <p className="text-muted-foreground mb-4">
                      Understanding systems and algorithms by focusing on inputs, outputs, and behavior without getting lost in implementation details initially.
                    </p>
                    <div className="bg-primary/5 rounded-lg p-4">
                      <p className="text-sm text-muted-foreground">
                        <strong>Application:</strong> When learning new algorithms, first understand what they do and their complexity, then dive into implementation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Daily Tracker Section */}
            <div>
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-primary mb-4">Daily Tracker</h1>
                <p className="text-lg text-muted-foreground">
                  Track your daily progress and activities
                </p>
              </div>
              
              <div className="space-y-4">
                {/* 21/08/2025 Entry */}
                <div className="bg-card rounded-lg border border-border p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-shrink-0">
                      <div className="bg-primary/10 text-primary px-4 py-2 rounded-lg font-semibold text-center min-w-[120px]">
                        21/08/2025
                      </div>
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="border-l-4 border-primary/30 pl-4">
                        <h3 className="font-semibold text-lg mb-1">QSTP Work</h3>
                        <p className="text-muted-foreground">Using Livekit to build WebRTC system</p>
                      </div>
                      <div className="border-l-4 border-secondary/50 pl-4">
                        <h3 className="font-semibold text-lg mb-1">QCRI Work</h3>
                        <p className="text-muted-foreground">Made output logic for (Phase 2) Text2SQL project and documented generator pipeline from (Phase 1) PYTHON-HCT-QA-Benchmark project</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 20/08/2025 Entry */}
                <div className="bg-card rounded-lg border border-border p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-shrink-0">
                      <div className="bg-primary/10 text-primary px-4 py-2 rounded-lg font-semibold text-center min-w-[120px]">
                        20/08/2025
                      </div>
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="border-l-4 border-primary/30 pl-4">
                        <h3 className="font-semibold text-lg mb-1">MIT Algorithms</h3>
                        <p className="text-muted-foreground">Studied binary trees</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 19/08/2025 Entry */}
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
    </div>
  );
};

export default DailyTracker;