
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const highlights = [
    "Final-year Computer Engineering student at Qatar University",
    "Two AI/ML internships: QCRI (GenAI) & Hamad Medical Corporation (Surgical Robotics & VLM)",
    "HCIA-AI Huawei Certification in progress",
    "Passionate about building, learning fast, and solving real-world problems"
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Driven by curiosity and powered by innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  I'm a passionate Computer Engineering student with a deep fascination for artificial intelligence 
                  and software development. My journey spans from low-level system programming to cutting-edge 
                  AI research, always with a focus on creating solutions that make a real impact.
                </p>
                
                <div className="space-y-4">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-foreground">{highlight}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-2xl p-8 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="text-6xl font-bold gradient-text">2+</div>
                <p className="text-xl font-semibold">Years of Experience</p>
                <div className="text-4xl font-bold gradient-text">10+</div>
                <p className="text-lg">Projects Completed</p>
                <div className="text-4xl font-bold gradient-text">∞</div>
                <p className="text-lg">Problems Solved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
