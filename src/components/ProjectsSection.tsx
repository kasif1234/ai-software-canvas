
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState('inProgress');

  const inProgressProjects = [
    {
      title: "Surgical Data Semantic Segmentation",
      organization: "Hamad Medical Corporation",
      organizationLogo: "/lovable-uploads/c06a3d46-48ff-4dda-aca9-822d5d0e2a46.png",
      projectImage: "/lovable-uploads/145c731b-d3be-4b20-866d-db3bc133917d.png",
      description: "Train a deep learning model on EndoVis2017 dataset. Your model needs to segment the different types of classes within the surgical frame. Dataset classes: Bipolar Forceps, Prograsp Forceps, Large Needle Driver, Suction Instrument, Clip Applier, Monopolar, Curved Scissors, Ultrasound Probe, Vessel Sealer, Grasping Retractor.",
      technicalDetails: "The model architecture combines CNN feature extraction with Transformer layers for semantic segmentation. Features are processed through multiple scales (1/2, 1/4, 1/8) with hidden features, linear projection, and transformer layers (n=12). The segmentation head uses Conv3x3, ReLU, upsampling, and feature concatenation for precise surgical instrument identification.",
      supervisor: {
        name: "Dr. Shidin Balakrishnan, MD, MPH",
        linkedin: "https://www.linkedin.com/in/shidin-balakrishnan/",
        description: "Dr. Shidin Balakrishnan is a medical professional with expertise in public health and a focus on leveraging technology for healthcare advancements. His work often involves applying data-driven approaches and AI to improve medical diagnostics and patient outcomes."
      },
      tags: ["Computer Vision", "Deep Learning", "Medical AI", "Semantic Segmentation", "PyTorch"]
    },
    {
      title: "Real-Time Classroom Monitoring Using Vision-Based AI Models",
      organization: "Edgage - Qatar Science and Technology Park (QSTP)",
      organizationLogo: "/lovable-uploads/dee2527c-6d4a-42e7-8991-395487fc7c93.png",
      projectImage: "/lovable-uploads/5f841d15-7930-4d3a-8779-14a669a404f3.png",
      description: "Building three computer vision models for real-time use in smart classrooms: Student Attention Detection (identifies focused vs. distracted students using facial orientation and gaze tracking), Engagement Detection (classifies engagement levels using transfer learning with fine-tuned VGG16 on the DAiSEE dataset), and Mood Detection (detects emotional states like happy, confused, bored via facial expression recognition using FER datasets).",
      technicalDetails: "Responsible for the full AI pipeline, from dataset curation and training to model optimization and deployment strategy. The engagement detection model uses VGG16 architecture with transfer learning on the DAiSEE dataset. The system processes input video clips through convolutional layers, feature extraction, flattening, and dense layers for classification. Focus on cost-efficient deployment techniques using model quantization and optimization to ensure real-time performance in classroom environments.",
      supervisor: {
        name: "Qatar Science & Technology Park (QSTP)",
        linkedin: "https://www.linkedin.com/company/qatar-science-&-technology-park/posts/?feedView=all",
        description: "Working as an AI/ML developer at Edgage, a startup based at Qatar Science and Technology Park. The project is supervised by QSTP, focusing on bridging AI research and real-world deployment to empower educators with advanced computer vision technology."
      },
      tags: ["Computer Vision", "TensorFlow", "VGG16", "CNNs", "DAiSEE", "FER2013", "OpenCV", "Model Optimization", "Real-time AI"]
    }
  ];

  const completedProjects = [];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Exploring the intersection of AI, healthcare, and technology
          </p>
          
          {/* Project Type Toggle */}
          <div className="flex justify-center gap-2 mb-12">
            <Button
              variant={activeTab === 'inProgress' ? "default" : "outline"}
              onClick={() => setActiveTab('inProgress')}
              className="px-6"
            >
              Projects in Progress (2)
            </Button>
            <Button
              variant={activeTab === 'completed' ? "default" : "outline"}
              onClick={() => setActiveTab('completed')}
              className="px-6"
            >
              Completed Projects
            </Button>
          </div>
        </div>

        {/* Projects in Progress */}
        {activeTab === 'inProgress' && (
          <div className="space-y-8">
            {inProgressProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden border-primary/20 bg-card/80 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src={project.organizationLogo} 
                      alt={project.organization}
                      className="h-16 w-auto"
                    />
                    <div>
                      <Badge className="mb-2">In Progress</Badge>
                      <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
                      <p className="text-muted-foreground text-lg">{project.organization}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Project Diagram */}
                  <div className="w-full">
                    <img 
                      src={project.projectImage} 
                      alt="Project Architecture Diagram"
                      className="w-full h-auto rounded-lg border border-border"
                    />
                  </div>

                  {/* Project Description */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-primary">Project Overview</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    
                    <h4 className="text-lg font-semibold text-primary">Technical Architecture</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.technicalDetails}
                    </p>
                  </div>

                  {/* Supervisor Information */}
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-primary mb-3">Project Supervision</h4>
                    <div className="flex items-center gap-3 mb-3">
                      <h5 className="font-medium text-foreground">{project.supervisor.name}</h5>
                      <Button variant="ghost" size="sm" asChild>
                        <a 
                          href={project.supervisor.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          <ExternalLink className="h-4 w-4" />
                          LinkedIn
                        </a>
                      </Button>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.supervisor.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Completed Projects */}
        {activeTab === 'completed' && (
          <div className="text-center py-20">
            <div className="max-w-md mx-auto">
              <h3 className="text-xl font-semibold text-muted-foreground mb-4">
                No completed projects yet
              </h3>
              <p className="text-muted-foreground">
                Stay tuned for updates as I complete my ongoing projects!
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
