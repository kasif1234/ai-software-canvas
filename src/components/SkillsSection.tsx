
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import tensorflowLogo from "@/assets/tensorflow-logo.png";
import pytorchLogo from "@/assets/pytorch-logo.png";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "C++", "SQL", "JavaScript", "TypeScript"],
      icon: "💻"
    },
    {
      title: "AI/ML Frameworks",
      skills: ["PyTorch", "TensorFlow", "OpenCV", "Transformers", "Scikit-learn", "Pandas"],
      icon: "🤖"
    },
    {
      title: "Development Tools",
      skills: ["Git", "Docker", "VSCode", "Linux", "REST APIs", "Firebase"],
      icon: "🛠️"
    },
    {
      title: "Cloud & Deployment",
      skills: ["Vercel", "Azure", "AWS (Basic)", "Google Cloud", "Kubernetes"],
      icon: "☁️"
    },
    {
      title: "Hardware & IoT",
      skills: ["ESP32", "Arduino", "LoRa", "Sensors", "Embedded Systems", "PCB Design"],
      icon: "⚡"
    },
    {
      title: "Specialized Skills",
      skills: ["Computer Vision", "NLP", "GenAI", "Robotics", "Distributed Systems", "Microservices"],
      icon: "🧠"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building the future
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm border-primary/20"
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-2">{category.icon}</div>
                <CardTitle className="text-xl font-bold">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skill Level Indicators */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">Proficiency Levels</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h4 className="font-semibold text-green-400 mb-2">Expert</h4>
              <p className="text-sm text-muted-foreground">Python, Java, AI/ML, System Design</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="font-semibold text-blue-400 mb-2">Advanced</h4>
              <p className="text-sm text-muted-foreground">C++, Cloud Platforms, IoT Development</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h4 className="font-semibold text-yellow-400 mb-2">Growing</h4>
              <p className="text-sm text-muted-foreground">DevOps, Mobile Development, Blockchain</p>
            </div>
          </div>
        </div>

        {/* Specialist at Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">Specialist at:</h3>
          <div className="flex justify-center items-center gap-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg flex items-center justify-center hover:shadow-lg transition-all duration-300">
                <img 
                  src={tensorflowLogo} 
                  alt="TensorFlow" 
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h4 className="font-semibold text-lg">TensorFlow</h4>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg flex items-center justify-center hover:shadow-lg transition-all duration-300">
                <img 
                  src={pytorchLogo} 
                  alt="PyTorch" 
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h4 className="font-semibold text-lg">PyTorch</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
