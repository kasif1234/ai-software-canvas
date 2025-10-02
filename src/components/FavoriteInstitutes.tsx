import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from 'lucide-react';

const FavoriteInstitutes = () => {
  const institutes = [
    {
      name: "Massachusetts Institute of Technology",
      shortName: "MIT",
      image: "/lovable-uploads/mit-institute.png",
      description: "World-leading research institution advancing knowledge in science, technology, and innovation.",
      link: "https://www.mit.edu/"
    },
    {
      name: "Stanford University",
      shortName: "Stanford",
      image: "/lovable-uploads/stanford-logo.png",
      description: "Premier institution driving breakthroughs in AI, computer science, and entrepreneurship.",
      link: "https://www.stanford.edu/"
    },
    {
      name: "Carnegie Mellon University",
      shortName: "CMU",
      image: "/lovable-uploads/cmu-qatar.png",
      description: "Global leader in computer science, robotics, and artificial intelligence research.",
      link: "https://www.cmu.edu/"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Favorite <span className="gradient-text">Institutes</span> to Gain Knowledge From
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Leading institutions that inspire continuous learning and innovation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {institutes.map((institute) => (
            <Card 
              key={institute.shortName}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm overflow-hidden"
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <img 
                    src={institute.image}
                    alt={institute.name}
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                </div>
                <CardTitle className="text-xl font-bold">
                  {institute.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex justify-center mb-4">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {institute.description}
                </p>
                <a 
                  href={institute.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium inline-flex items-center gap-2"
                >
                  Visit Website
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FavoriteInstitutes;