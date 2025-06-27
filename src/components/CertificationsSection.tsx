
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "HCIA-AI (Huawei Certified ICT Associate - AI)",
      issuer: "Huawei",
      status: "In Progress",
      date: "2024",
      description: "Comprehensive AI certification covering machine learning, deep learning, and AI applications",
      level: "Professional",
      featured: true
    },
    {
      title: "Deep Learning Specialization",
      issuer: "Dr. Tamer Elsayed",
      status: "Completed",
      date: "2024",
      description: "Advanced course covering neural networks, CNN, RNN, and modern deep learning techniques",
      level: "Advanced",
      featured: true
    },
    {
      title: "Machine Learning Engineering",
      issuer: "Coursera",
      status: "Completed",
      date: "2023",
      description: "Production-ready ML systems, MLOps, and scalable AI deployment strategies",
      level: "Intermediate",
      featured: false
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      status: "Planned",
      date: "2024",
      description: "Foundation certification for cloud computing and AWS services",
      level: "Foundation",
      featured: false
    },
    {
      title: "Computer Vision Fundamentals",
      issuer: "edX",
      status: "Completed",
      date: "2023",
      description: "Image processing, object detection, and computer vision applications",
      level: "Intermediate",
      featured: false
    },
    {
      title: "IoT Systems Development",
      issuer: "Udemy",
      status: "Completed",
      date: "2023",
      description: "End-to-end IoT system design and implementation with various protocols",
      level: "Intermediate",
      featured: false
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "In Progress": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Planned": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Professional": return "bg-purple-500/20 text-purple-400";
      case "Advanced": return "bg-red-500/20 text-red-400";
      case "Intermediate": return "bg-blue-500/20 text-blue-400";
      case "Foundation": return "bg-green-500/20 text-green-400";
      default: return "bg-gray-500/20 text-gray-400";
    }
  };

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Certifications & <span className="gradient-text">Learning</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning and professional development in cutting-edge technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className={`hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                cert.featured ? 'border-primary/50 bg-card/80' : 'bg-card/50'
              } backdrop-blur-sm relative overflow-hidden`}
            >
              {cert.featured && (
                <div className="absolute top-0 right-0 bg-gradient-to-l from-primary to-blue-600 text-primary-foreground text-xs px-3 py-1 rounded-bl-lg">
                  Featured
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-3">
                  <Badge 
                    className={getStatusColor(cert.status)}
                    variant="outline"
                  >
                    {cert.status}
                  </Badge>
                  <Badge 
                    className={getLevelColor(cert.level)}
                    variant="outline"
                  >
                    {cert.level}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-bold leading-tight">
                  {cert.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {cert.issuer} • {cert.date}
                </p>
              </CardHeader>
              
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learning Philosophy */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-blue-600/10 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Learning Philosophy</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                "In the rapidly evolving world of technology, continuous learning isn't just an advantage—it's essential. 
                I believe in staying ahead of the curve by constantly updating my skills and exploring emerging technologies."
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl mb-2">📚</div>
                  <h4 className="font-semibold mb-1">Always Learning</h4>
                  <p className="text-sm text-muted-foreground">Dedicated to continuous skill development</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🎯</div>
                  <h4 className="font-semibold mb-1">Goal-Oriented</h4>
                  <p className="text-sm text-muted-foreground">Strategic learning aligned with career objectives</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🚀</div>
                  <h4 className="font-semibold mb-1">Future-Ready</h4>
                  <p className="text-sm text-muted-foreground">Preparing for emerging technologies</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
