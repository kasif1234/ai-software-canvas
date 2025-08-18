import { Card, CardContent } from "@/components/ui/card";

const ExperienceHighlightsSection = () => {
  const experiences = [
    {
      id: "cmuq",
      name: "Carnegie Mellon University Qatar",
      logo: "/lovable-uploads/240410a3-02c6-429c-86b9-dcbc86909c11.png",
      image: "/lovable-uploads/de0bd061-6b23-4760-9dff-15de74ae3d5c.png",
      description: "Hackathon participation and collaborative innovation"
    },
    {
      id: "qcri",
      name: "Qatar Computing Research Institute",
      logo: "/lovable-uploads/9c94f0a0-c8f8-455b-9b6c-1595a33420d6.png",
      image: "/lovable-uploads/e74d7345-ec92-4d02-b4f8-29cd8370eb4c.png",
      description: "AI/ML research and development"
    },
    {
      id: "qstp",
      name: "Qatar Science & Technology Park",
      logo: "/lovable-uploads/dee2527c-6d4a-42e7-8991-395487fc7c93.png",
      image: "/lovable-uploads/a9f8ced0-4796-4da6-8a56-77eda2929276.png",
      description: "Research presentation and innovation showcase"
    },
    {
      id: "qu",
      name: "Qatar University",
      logo: "/lovable-uploads/010401cc-bf92-4e3b-8330-040f544ccd2a.png",
      image: "/lovable-uploads/f38dbddb-ea1b-4afc-87e4-67320966f3ef.png",
      description: "Academic excellence in Computer Engineering"
    },
    {
      id: "hmc",
      name: "Hamad Medical Corporation",
      logo: "/lovable-uploads/de9073e3-641a-45a0-871b-330f78340347.png",
      image: "/lovable-uploads/c8682b13-8d10-4e16-ac46-97b80ffa86a3.png",
      description: "Surgical robotics and VLM research"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience <span className="gradient-text">Highlights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Memorable moments from my journey across Qatar's premier institutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp) => (
            <Card key={exp.id} className="group overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={exp.image}
                    alt={`Experience at ${exp.name}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Logo overlay */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg">
                    <img
                      src={exp.logo}
                      alt={`${exp.name} logo`}
                      className="h-8 w-auto object-contain"
                    />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 gradient-text">
                    {exp.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {exp.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceHighlightsSection;