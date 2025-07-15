
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Briefcase } from 'lucide-react';

const CurrentlyReading = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Currently <span className="gradient-text">Doing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expanding knowledge and gaining practical experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {/* Deep Learning Book */}
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

          {/* QSTP Internship */}
          <Card className="max-w-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <img 
                  src="/lovable-uploads/a5a9622a-901b-49cb-a135-599bf5463e29.png" 
                  alt="Qatar Science & Technology Park"
                  className="w-32 h-auto rounded-lg shadow-md"
                />
              </div>
              <CardTitle className="text-xl font-bold">
                QSTP Internship
              </CardTitle>
              <p className="text-muted-foreground">
                Qatar Science & Technology Park
              </p>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center gap-2 mb-4">
                <Badge variant="outline" className="flex items-center gap-1">
                  <Briefcase className="h-3 w-3" />
                  Software Engineering
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                Gaining hands-on experience in software development and engineering practices.
              </p>
            </CardContent>
          </Card>

          {/* QCRI Internship */}
          <Card className="max-w-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <img 
                  src="/lovable-uploads/0603fe36-fb04-4d83-b7ec-72ec3aa21a95.png" 
                  alt="Qatar Computing Research Institute"
                  className="w-32 h-auto rounded-lg shadow-md"
                />
              </div>
              <CardTitle className="text-xl font-bold">
                QCRI Internship
              </CardTitle>
              <p className="text-muted-foreground">
                Qatar Computing Research Institute
              </p>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center gap-2 mb-4">
                <Badge variant="outline" className="flex items-center gap-1">
                  <Briefcase className="h-3 w-3" />
                  Generative AI Research
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                Exploring cutting-edge generative AI technologies and research methodologies.
              </p>
            </CardContent>
          </Card>

          {/* HMC Internship */}
          <Card className="max-w-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <img 
                  src="/lovable-uploads/bbf9bb19-62a6-435c-8630-fd39b598e5ea.png" 
                  alt="Hamad Medical Corporation"
                  className="w-32 h-auto rounded-lg shadow-md"
                />
              </div>
              <CardTitle className="text-xl font-bold">
                HMC Internship
              </CardTitle>
              <p className="text-muted-foreground">
                Hamad Medical Corporation
              </p>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center gap-2 mb-4">
                <Badge variant="outline" className="flex items-center gap-1">
                  <Briefcase className="h-3 w-3" />
                  Surgical Robotics & VLM
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                Working on surgical robotics and vision-language models in healthcare applications.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CurrentlyReading;
