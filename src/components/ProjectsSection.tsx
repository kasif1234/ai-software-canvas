
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Decentralized Mesh Network for Disaster Communication",
      description: "Built a resilient communication system using ESP32 microcontrollers and LoRa technology for disaster scenarios where traditional infrastructure fails.",
      tags: ["ESP32", "LoRa", "Linux", "Networking", "IoT"],
      category: "System Design",
      featured: true
    },
    {
      title: "GenAI for Human-Centric Table Understanding",
      description: "Developed an AI system that understands and processes complex table structures using advanced language models and JSON parsing.",
      tags: ["Python", "LLMs", "JSON", "GenAI", "NLP"],
      category: "AI",
      featured: true
    },
    {
      title: "Surgical Tool Detection using Deep Learning",
      description: "Created a computer vision system for real-time surgical tool detection and tracking using PyTorch and advanced CNN architectures.",
      tags: ["PyTorch", "OpenCV", "Computer Vision", "Deep Learning"],
      category: "ML",
      featured: true
    },
    {
      title: "Smart IoT Environmental Monitor",
      description: "Designed an IoT system for environmental monitoring with real-time data collection and cloud-based analytics.",
      tags: ["Arduino", "Sensors", "Cloud", "Data Analytics"],
      category: "IoT",
      featured: false
    },
    {
      title: "Distributed Task Scheduler",
      description: "Built a scalable task scheduling system with load balancing and fault tolerance capabilities.",
      tags: ["Java", "Microservices", "Docker", "Redis"],
      category: "System Design",
      featured: false
    },
    {
      title: "Natural Language Query Interface",
      description: "Created an intelligent interface that converts natural language queries to database operations.",
      tags: ["Python", "SQL", "Transformers", "API"],
      category: "AI",
      featured: false
    }
  ];

  const categories = ["All", "AI", "ML", "System Design", "IoT"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            From AI-powered solutions to distributed systems, here's what I've been building
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={index} 
              className={`hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                project.featured ? 'border-primary/50 bg-card/80' : 'bg-card/50'
              } backdrop-blur-sm`}
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant={project.featured ? "default" : "secondary"}>
                    {project.category}
                  </Badge>
                  {project.featured && (
                    <Badge className="bg-gradient-to-r from-blue-500 to-blue-600">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl font-bold">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button className="flex-1" size="sm">
                    View Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
