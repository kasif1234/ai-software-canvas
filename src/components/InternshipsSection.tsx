
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building, Briefcase } from 'lucide-react';

const InternshipsSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Internships</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Gaining hands-on experience in AI/ML, research, and cutting-edge technology across Qatar's leading institutions
          </p>
        </div>

        <div className="space-y-12">
          {/* Qatar Science & Technology Park */}
          <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center p-2 border border-border">
                <img 
                  src="/lovable-uploads/a5a9622a-901b-49cb-a135-599bf5463e29.png" 
                  alt="Qatar Science & Technology Park"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Qatar Science & Technology Park</h3>
                <p className="text-muted-foreground">Member of Qatar Foundation</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">Doha, Qatar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">Technology & Innovation Internship</span>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <Badge variant="secondary" className="mr-2">Innovation</Badge>
                  <Badge variant="secondary" className="mr-2">Technology</Badge>
                  <Badge variant="secondary" className="mr-2">Research</Badge>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Interned at Qatar's premier science and technology hub, working on innovative projects 
                  that bridge the gap between research and real-world applications. Gained exposure to 
                  cutting-edge technologies and collaborative research methodologies.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-xl p-4 border border-green-200/20">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Key Experience
                </h4>
                <p className="text-sm text-muted-foreground">
                  Collaborated with researchers and industry professionals in Qatar's leading 
                  technology ecosystem, contributing to innovative solutions and gaining valuable 
                  insights into the tech industry landscape.
                </p>
              </div>
            </div>
          </div>

          {/* Qatar Computing Research Institute */}
          <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center p-2 border border-border">
                <img 
                  src="/lovable-uploads/0603fe36-fb04-4d83-b7ec-72ec3aa21a95.png" 
                  alt="Qatar Computing Research Institute"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Qatar Computing Research Institute (QCRI)</h3>
                <p className="text-muted-foreground">Hamad Bin Khalifa University</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">Doha, Qatar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">GenAI Research Internship</span>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <Badge variant="secondary" className="mr-2">GenAI</Badge>
                  <Badge variant="secondary" className="mr-2">NLP</Badge>
                  <Badge variant="secondary" className="mr-2">Research</Badge>
                  <Badge variant="secondary" className="mr-2">Python</Badge>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Worked on Generative AI research projects, focusing on natural language processing 
                  and human-centric AI applications. Contributed to cutting-edge research in AI/ML 
                  and gained experience with state-of-the-art language models and deep learning frameworks.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-xl p-4 border border-blue-200/20">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Research Focus
                </h4>
                <p className="text-sm text-muted-foreground">
                  Specialized in Generative AI and NLP research, working with advanced language 
                  models and contributing to projects that advance human-AI interaction and 
                  understanding capabilities.
                </p>
              </div>
            </div>
          </div>

          {/* Hamad Medical Corporation */}
          <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center p-2 border border-border">
                <img 
                  src="/lovable-uploads/bbf9bb19-62a6-435c-8630-fd39b598e5ea.png" 
                  alt="Hamad Medical Corporation"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Hamad Medical Corporation</h3>
                <p className="text-muted-foreground">Qatar's Premier Healthcare Provider</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">Doha, Qatar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">Surgical Robotics & VLM Internship</span>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <Badge variant="secondary" className="mr-2">Surgical Robotics</Badge>
                  <Badge variant="secondary" className="mr-2">VLM</Badge>
                  <Badge variant="secondary" className="mr-2">Computer Vision</Badge>
                  <Badge variant="secondary" className="mr-2">Healthcare AI</Badge>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Worked on advanced surgical robotics and Vision-Language Models (VLM) for healthcare 
                  applications. Contributed to projects that combine AI/ML with medical technology to 
                  improve surgical outcomes and patient care through intelligent automation and computer vision.
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-500/10 to-red-600/5 rounded-xl p-4 border border-red-200/20">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  Medical AI
                </h4>
                <p className="text-sm text-muted-foreground">
                  Applied AI/ML techniques to healthcare challenges, working with surgical robotics 
                  systems and developing vision-language models for medical applications, bridging 
                  technology and healthcare innovation.
                </p>
              </div>
            </div>
          </div>

          {/* Summary Section */}
          <div className="text-center py-12 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Comprehensive Experience</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Through these internships, I've gained extensive hands-on experience in AI/ML research, 
              healthcare technology, and innovation ecosystems. Each role has contributed to my expertise 
              in building intelligent systems and solving real-world problems across diverse domains.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipsSection;
