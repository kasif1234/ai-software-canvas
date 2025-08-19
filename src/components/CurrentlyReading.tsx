
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
          {/* MIT Introduction to Algorithms */}
          <Card className="max-w-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <img 
                  src="/lovable-uploads/898bd2cb-7043-4b50-b5ed-11e5eb001a9d.png" 
                  alt="MIT OpenCourseWare"
                  className="w-48 h-auto rounded-lg shadow-md"
                />
              </div>
              <CardTitle className="text-xl font-bold">
                Introduction to Algorithms
              </CardTitle>
              <p className="text-muted-foreground">
                MIT OpenCourseWare
              </p>
              <p className="text-sm text-muted-foreground font-medium">
                6.006
              </p>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center gap-2 mb-4">
                <Badge variant="outline" className="flex items-center gap-1">
                  <BookOpen className="h-3 w-3" />
                  Currently Learning
                </Badge>
                <Badge variant="secondary">
                  MIT
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                Studying fundamental algorithms and data structures through MIT's comprehensive computer science curriculum.
              </p>
            </CardContent>
          </Card>

          {/* DeepLearning.AI Course */}
          <Card className="max-w-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <img 
                  src="/lovable-uploads/4e3229f6-45c7-4396-b7a3-a3ee2a7d422f.png" 
                  alt="DeepLearning.AI"
                  className="w-32 h-auto rounded-lg shadow-md"
                />
              </div>
              <CardTitle className="text-xl font-bold">
                Deep Learning Specialization
              </CardTitle>
              <p className="text-muted-foreground">
                DeepLearning.AI
              </p>
              <p className="text-sm text-muted-foreground font-medium">
                Coursera
              </p>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center gap-2 mb-4">
                <Badge variant="outline" className="flex items-center gap-1">
                  <BookOpen className="h-3 w-3" />
                  Currently Taking
                </Badge>
                <Badge variant="secondary">
                  Coursera
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                Mastering deep learning through Andrew Ng's comprehensive specialization program on neural networks and AI.
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
