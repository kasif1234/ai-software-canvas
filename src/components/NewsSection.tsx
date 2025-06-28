
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

            <div className="grid md:grid-cols-2 gap-8">
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

              <div className="space-y-4">
                <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-xl p-6 border border-blue-200/20">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Event Experience
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    The hackathon provided an immersive environment for innovation, featuring modern 
                    development facilities, collaborative workspaces, and direct access to QCRI's 
                    research resources and mentorship.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-xl p-6 border border-green-200/20">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Technical Skills Applied
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Leveraged expertise in Python, machine learning frameworks, and collaborative 
                    development practices. The event reinforced my passion for AI/ML research 
                    and real-world problem solving.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 rounded-xl p-6 border border-purple-200/20">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    Professional Impact
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    This experience strengthened my connection with Qatar's AI research community 
                    and provided valuable insights into industry-level development practices 
                    and collaborative innovation.
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
