
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen } from 'lucide-react';

const CurrentlyReading = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Currently <span className="gradient-text">Reading</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expanding knowledge through continuous learning
          </p>
        </div>
        
        <div className="flex justify-center">
          <Card className="max-w-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <img 
                  src="/lovable-uploads/1b5358b0-2d35-4a5d-82e7-1b292e8b963a.png" 
                  alt="Deep Learning from Scratch - Building with Python from First Principles"
                  className="w-48 h-auto rounded-lg shadow-md"
                />
              </div>
              <CardTitle className="text-xl font-bold">
                Deep Learning from Scratch
              </CardTitle>
              <p className="text-muted-foreground">
                Building with Python from First Principles
              </p>
              <p className="text-sm text-muted-foreground font-medium">
                by Seth Weidman
              </p>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center gap-2 mb-4">
                <Badge variant="outline" className="flex items-center gap-1">
                  <BookOpen className="h-3 w-3" />
                  Currently Reading
                </Badge>
                <Badge variant="secondary">
                  O'Reilly
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                Deepening my understanding of neural networks and deep learning fundamentals through hands-on Python implementation.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CurrentlyReading;
