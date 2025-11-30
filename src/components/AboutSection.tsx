
import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const AboutSection = () => {
  const highlights = [
    "Senior Computer Engineering student at Qatar University with 3.5+ GPA",
    "Hackathon participant at Carnegie Mellon University Qatar",
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

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  I'm a Senior Computer Engineering student with a 3.5+ GPA and a deep fascination for artificial intelligence 
                  and software development. My journey spans from academic excellence at Qatar University to hackathon 
                  participation at Carnegie Mellon University Qatar, always with a focus on creating solutions that make a real impact.
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
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-2xl p-2 flex items-center justify-center">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <img 
                  src="/lovable-uploads/c903ab95-47f1-4c00-8ec4-82dfeaec8ea6.png" 
                  alt="Professional headshot"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
            </div>
            
            {/* Stats moved below the photo */}
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="space-y-1">
                <div className="text-3xl font-bold gradient-text">3.5+</div>
                <p className="text-sm font-medium">GPA</p>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold gradient-text">2+</div>
                <p className="text-sm font-medium">Years Exp</p>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold gradient-text">10+</div>
                <p className="text-sm font-medium">Projects</p>
              </div>
            </div>
          </div>
        </div>

        {/* LinkedIn Section */}
        <div className="mb-16 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              LinkedIn - <span className="gradient-text">Let's Connect</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Follow my professional journey and connect with me on LinkedIn
            </p>
          </div>

          <div className="flex justify-center">
            <a 
              href="https://www.linkedin.com/in/mohammad-kashif-145456345/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block max-w-2xl w-full transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/linkedin-post.png" 
                  alt="LinkedIn Post - Top 3 at Investment AI Agent Hackathon"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </a>
          </div>
        </div>

        {/* My Latest Work Section */}
        <div className="mb-16 bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 md:p-12 overflow-hidden">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="gradient-text">Latest Work</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Showcasing my recent projects and achievements
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex gap-8 animate-scroll">
                {/* Arduino Project */}
                <div className="flex-shrink-0 w-80 md:w-96">
                  <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src="/lovable-uploads/arduino-project.jpg" 
                        alt="Arduino Project"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-bold mb-2">Arduino Project</h4>
                      <p className="text-muted-foreground">IoT and embedded systems development</p>
                    </div>
                  </div>
                </div>

                {/* Senior Design Project */}
                <div className="flex-shrink-0 w-80 md:w-96">
                  <a 
                    href="/lovable-uploads/senior-design-poster.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src="/lovable-uploads/senior-design-poster-preview.jpg" 
                        alt="Senior Design Project Poster"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-bold mb-2">Senior Design Project</h4>
                      <p className="text-muted-foreground">STARS: Smart Target search using Autonomous Reconnaissance Swarms</p>
                    </div>
                  </a>
                </div>

                {/* Duplicate items for seamless loop */}
                <div className="flex-shrink-0 w-80 md:w-96">
                  <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src="/lovable-uploads/arduino-project.jpg" 
                        alt="Arduino Project"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-bold mb-2">Arduino Project</h4>
                      <p className="text-muted-foreground">IoT and embedded systems development</p>
                    </div>
                  </div>
                </div>

                <div className="flex-shrink-0 w-80 md:w-96">
                  <a 
                    href="/lovable-uploads/senior-design-poster.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src="/lovable-uploads/senior-design-poster-preview.jpg" 
                        alt="Senior Design Project Poster"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-bold mb-2">Senior Design Project</h4>
                      <p className="text-muted-foreground">STARS: Smart Target search using Autonomous Reconnaissance Swarms</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* GitHub Profile Section */}
        <div className="mb-16 bg-gradient-to-br from-gray-500/10 to-gray-600/10 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="gradient-text">GitHub</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Check out my repositories and contributions
            </p>
          </div>

          <div className="flex justify-center">
            <a 
              href="https://github.com/kasif1234"
              target="_blank"
              rel="noopener noreferrer"
              className="group block max-w-4xl w-full transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/github-profile.png" 
                  alt="GitHub Profile - Mohammad Kashif"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </a>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mb-16 bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 md:p-12 overflow-hidden">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Professional <span className="gradient-text">Certifications</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Continuous learning and professional development achievements
            </p>
          </div>

          <div className="relative">
            <div className="overflow-x-auto overflow-y-hidden scrollbar-hide">
              <div className="flex gap-8 pb-4">
                {/* Deep Learning Specialization by Andrew Ng */}
                <div className="flex-shrink-0 w-80 md:w-96">
                  <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src="/lovable-uploads/deep-learning-specialization-andrew-ng.png" 
                        alt="Deep Learning Specialization by Andrew Ng"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-bold mb-2">Deep Learning Specialization</h4>
                      <p className="text-muted-foreground">by Andrew Ng - Coursera</p>
                    </div>
                  </div>
                </div>

                {/* AIX Hackathon */}
                <div className="flex-shrink-0 w-80 md:w-96">
                  <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src="/lovable-uploads/aix-hackathon.png" 
                        alt="AIX Hackathon Certificate"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-bold mb-2">AIX Hackathon</h4>
                      <p className="text-muted-foreground">Certificate of Appreciation</p>
                    </div>
                  </div>
                </div>

                {/* CMUQ Lifelines Hackathon */}
                <div className="flex-shrink-0 w-80 md:w-96">
                  <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src="/lovable-uploads/cmuq-lifelines-hackathon.jpg" 
                        alt="CMUQ Lifelines Hackathon Certificate"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-bold mb-2">CMUQ Lifelines Hackathon</h4>
                      <p className="text-muted-foreground">Certificate of Achievement</p>
                    </div>
                  </div>
                </div>

                {/* Huawei AI Certificate */}
                <div className="flex-shrink-0 w-80 md:w-96">
                  <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src="/lovable-uploads/huawei-ai-certificate.png" 
                        alt="Huawei HCIA-AI Certificate"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-bold mb-2">HCIA-AI V3.5 Course</h4>
                      <p className="text-muted-foreground">Huawei Talent Online</p>
                    </div>
                  </div>
                </div>

                {/* QCRI Internship */}
                <div className="flex-shrink-0 w-80 md:w-96">
                  <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src="/lovable-uploads/qcri-internship-completion.jpg" 
                        alt="QCRI Summer Internship Certificate"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-bold mb-2">QCRI Summer Internship</h4>
                      <p className="text-muted-foreground">Research Institute Certificate</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Freelance Work Section */}
        <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Global <span className="gradient-text">Freelance</span> Impact
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Delivering professional software solutions to clients worldwide through Fiverr
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* YouTube Video */}
            <div className="aspect-video bg-black/5 rounded-2xl overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/OYRCyowNDzw"
                title="Freelance Work Showcase"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Fiverr Logo with Tooltip */}
            <div className="flex justify-center">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="group cursor-pointer transform transition-all duration-500 hover:scale-110 hover:-translate-y-2">
                      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 w-64 h-40 flex items-center justify-center">
                        <img 
                          src="/lovable-uploads/630f9ff6-9bd0-42f3-b43c-320208600135.png" 
                          alt="Fiverr"
                          className="max-w-full max-h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-md p-4">
                    <div className="space-y-2">
                      <p className="font-semibold">Global Freelance Success</p>
                      <ul className="text-sm space-y-1 text-left">
                        <li>• Delivered over 10,000 QAR worth of customized software and automation solutions</li>
                        <li>• Served clients across education, healthcare, and e-commerce sectors</li>
                        <li>• Designed tools using Python, Java, C++, R, and Excel VBA</li>
                        <li>• Implemented AI agents and low-code automation platforms</li>
                        <li>• Maintained strong client satisfaction and repeat contracts</li>
                      </ul>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
