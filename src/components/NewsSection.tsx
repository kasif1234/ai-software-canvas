
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Award, Users } from 'lucide-react';

const NewsSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Recent <span className="gradient-text">News & Updates</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with my latest achievements, events, and professional milestones
          </p>
        </div>

        <div className="space-y-12">
          {/* QCRI Fanar Hackathon Section */}
          <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">QCRI Fanar Hackathon</h3>
                <p className="text-muted-foreground">Qatar Computing Research Institute</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">June 20-21, 27-28, 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">QCRI, Doha, Qatar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">Team Collaboration Event</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Badge variant="secondary" className="mr-2">AI/ML</Badge>
                  <Badge variant="secondary" className="mr-2">Innovation</Badge>
                  <Badge variant="secondary" className="mr-2">Research</Badge>
                </div>

                <p className="text-muted-foreground mt-4 leading-relaxed">
                  Participated in the prestigious QCRI Fanar Hackathon, collaborating with talented developers 
                  and researchers to build innovative solutions. The event showcased cutting-edge AI/ML applications 
                  and provided an excellent platform for networking with industry professionals.
                </p>

                <div className="mt-6 space-y-2">
                  <h4 className="font-semibold text-lg">Key Highlights:</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Worked on advanced AI/ML solutions during intensive coding sessions</li>
                    <li>• Collaborated with QCRI researchers and industry experts</li>
                    <li>• Gained hands-on experience with state-of-the-art development tools</li>
                    <li>• Participated in technical workshops and knowledge sharing sessions</li>
                  </ul>
                </div>
              </div>

              {/* Image Gallery */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <img 
                    src="/lovable-uploads/f6ad9f90-5e2b-4a30-9ed4-4e6dfe4e61c2.png" 
                    alt="QCRI Hackathon workspace and collaboration"
                    className="w-full h-32 object-cover rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow"
                  />
                  <img 
                    src="/lovable-uploads/4ffe5d6e-5e91-4421-a8b3-27ad3949b5de.png" 
                    alt="Development environment and coding session"
                    className="w-full h-32 object-cover rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow"
                  />
                </div>
                
                <img 
                  src="/lovable-uploads/3c4e4f3c-c80e-49ef-8797-6cfa7b0fc25e.png" 
                  alt="QCRI research facility and innovation space"
                  className="w-full h-40 object-cover rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow"
                />

                <div className="grid grid-cols-2 gap-3">
                  <img 
                    src="/lovable-uploads/ec36d9b8-5b08-4c88-976f-b9b82b0c3b5b.png" 
                    alt="Technical discussions and mentorship"
                    className="w-full h-32 object-cover rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow"
                  />
                  <img 
                    src="/lovable-uploads/9bb62bd0-3b14-49b5-8d93-7df99c5b9a6b.png" 
                    alt="Hackathon team collaboration and networking"
                    className="w-full h-32 object-cover rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow"
                  />
                </div>

                <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-xl p-4 border border-blue-200/20 mt-4">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Event Experience
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    The hackathon provided an immersive environment for innovation, featuring modern 
                    development facilities, collaborative workspaces, and direct access to QCRI's 
                    research resources and mentorship.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Placeholder for future news items */}
          <div className="text-center py-12 border-2 border-dashed border-border rounded-xl">
            <h3 className="text-xl font-semibold mb-2">More Updates Coming Soon</h3>
            <p className="text-muted-foreground">
              Stay tuned for more exciting news, achievements, and project updates!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
