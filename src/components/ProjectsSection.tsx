
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
      title: "Text2SQL Pipeline Development",
      organization: "Qatar Computing Research Institute (QCRI) - Hamad Bin Khalifa University",
      organizationLogo: "/lovable-uploads/9c94f0a0-c8f8-455b-9b6c-1595a33420d6.png",
      projectImage: "/lovable-uploads/3cd83883-be22-4d7c-869c-4c2cebb26baa.png",
      description: "This project develops a Text2SQL pipeline that generates NL, SQL, and answer triplets using both GPT-based and template-driven methods. A paraphrasing module ensures the creation of diverse yet accurate queries, while a closeness checker filters out ones that are either too similar or that alter meaning. The system is then tested on a dataset of questions, analyzed for performance across models, refined iteratively, and ultimately positioned for a research paper.",
      technicalDetails: "The pipeline consists of multiple components: an R.Table starting point that generates NL+SQL+GT triplets using two methods (GPT4o-based generation and template-based generation), followed by NLQ paraphrasing using LLM, a Standard Text2SQL processing stage, and a closeness/readability checker that filters similar queries and ensures semantic consistency before producing the final output for research analysis.",
      supervisor: {
        name: "Dr. Michaël Aupetit & Shahmeer Ahmad",
        linkedin: "https://www.linkedin.com/in/micha%C3%ABl-aupetit-1a70592/",
        linkedin2: "https://www.linkedin.com/in/shahmeer99/",
        description: "Research conducted under the mentorship of Dr. Michaël Aupetit at Qatar Computing Research Institute (QCRI) and Shahmeer Ahmad. The project focuses on advancing natural language to SQL translation capabilities through innovative pipeline design and comprehensive evaluation methodologies."
      },
      tags: ["NLP", "Text2SQL", "GPT-4", "Pipeline Development", "Research", "LLM", "Data Generation", "SQL"]
    }
  ];

  const completedProjects = [
    {
      title: "Contributing to HCT-QA: A Benchmark for Question Answering on Human-Centric Tables [Experiment, Analysis & Benchmark]",
      organization: "Qatar Computing Research Institute (QCRI) - Hamad Bin Khalifa University",
      organizationLogo: "/lovable-uploads/0c9530a6-8407-4b3e-a292-c72db84a7a58.png",
      projectImage: "/lovable-uploads/3cd83883-be22-4d7c-869c-4c2cebb26baa.png",
      description: "I built a Python pipeline that generates the full HCT Q&A benchmark. It takes table patterns, produces synthetic tables, converts them into HCT views, and automatically generates SQL queries with natural language questions and answers. The pipeline outputs CSV, HTML, JSON, and optional images, all controlled by configs with reproducible seeds. It's simple to run stage-by-stage or end-to-end through a CLI, and I designed it mainly for benchmarking NL-to-SQL models and analyzing table reasoning.",
      technicalDetails: "The pipeline architecture consists of multiple stages: table pattern analysis, synthetic data generation using configurable templates, HCT view conversion with semantic layer mapping, automated SQL query generation with corresponding natural language questions, and multi-format output generation (CSV, HTML, JSON, images). The system uses reproducible random seeds for consistent benchmarking, modular CLI interface for flexible execution, and comprehensive configuration management for customizable pipeline behavior.",
      supervisor: {
        name: "Shahmeer Ahmad & Dr. Michaël Aupetit",
        linkedin: "https://www.linkedin.com/in/shahmeer99/",
        linkedin2: "https://www.linkedin.com/in/micha%C3%ABl-aupetit-1a70592/",
        description: "Research conducted under the mentorship of Shahmeer Ahmad and Dr. Michaël Aupetit at Qatar Computing Research Institute (QCRI). Both mentors work at QCRI and provided guidance on benchmark development, natural language processing, and table reasoning methodologies."
      },
      paperLink: "https://www.researchgate.net/publication/391283032_HCT-QA_A_Benchmark_for_Question_Answering_on_Human-Centric_Tables",
      videoLink: "https://www.youtube.com/watch?v=M8ph71nZ6UI&ab_channel=KasifCareer",
      tags: ["Python", "NLP", "Benchmark Development", "SQL Generation", "Table Reasoning", "Research", "Pipeline Architecture", "CLI Tools"]
    },
    {
      title: "Real-Time Classroom Monitoring Using Vision-Based AI Models",
      organization: "Edgage - Qatar Science and Technology Park (QSTP)",
      organizationLogo: "/lovable-uploads/dee2527c-6d4a-42e7-8991-395487fc7c93.png",
      projectImage: "/lovable-uploads/5f841d15-7930-4d3a-8779-14a669a404f3.png",
      description: "Built three computer vision models for real-time use in smart classrooms: Student Attention Detection (identifies focused vs. distracted students using facial orientation and gaze tracking), Engagement Detection (classifies engagement levels using transfer learning with fine-tuned VGG16 on the DAiSEE dataset), and Mood Detection (detects emotional states like happy, confused, bored via facial expression recognition using FER datasets).",
      technicalDetails: "Successfully implemented the full AI pipeline, from dataset curation and training to model optimization and deployment strategy. The engagement detection model uses VGG16 architecture with transfer learning on the DAiSEE dataset. The system processes input video clips through convolutional layers, feature extraction, flattening, and dense layers for classification. Achieved cost-efficient deployment through model quantization and optimization for real-time performance in classroom environments.",
      supervisor: {
        name: "Qatar Science & Technology Park (QSTP)",
        linkedin: "https://www.linkedin.com/company/qatar-science-&-technology-park/posts/?feedView=all",
        description: "Completed work as an AI/ML developer at Edgage, a startup based at Qatar Science and Technology Park. The project was supervised by QSTP, successfully bridging AI research and real-world deployment to empower educators with advanced computer vision technology."
      },
      tags: ["Computer Vision", "TensorFlow", "VGG16", "CNNs", "DAiSEE", "FER2013", "OpenCV", "Model Optimization", "Real-time AI"]
    }
  ];

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
              Completed Projects (2)
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
                      {project.supervisor.linkedin2 && (
                        <Button variant="ghost" size="sm" asChild>
                          <a 
                            href={project.supervisor.linkedin2} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-1"
                          >
                            <ExternalLink className="h-4 w-4" />
                            LinkedIn 2
                          </a>
                        </Button>
                      )}
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
          <div className="space-y-8">
            {completedProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden border-primary/20 bg-card/80 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src={project.organizationLogo} 
                      alt={project.organization}
                      className="h-16 w-auto"
                    />
                    <div>
                      <Badge variant="secondary" className="mb-2">Completed</Badge>
                      <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
                      <p className="text-muted-foreground text-lg">{project.organization}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Project Images */}
                  <div className="space-y-4">
                    <div className="w-full">
                      <img 
                        src="/lovable-uploads/a65d719d-1652-4cdf-bf17-f9c32bb22c11.png" 
                        alt="HCT-QA Research Paper"
                        className="w-full h-auto rounded-lg border border-border"
                      />
                    </div>
                    <div className="w-full">
                      <img 
                        src="/lovable-uploads/ff5e12c0-d30c-42d4-b72f-a93875220bc9.png" 
                        alt="HCT-QA Table Interface"
                        className="w-full h-auto rounded-lg border border-border"
                      />
                    </div>
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
                       {(project.supervisor as any).linkedin2 && (
                        <Button variant="ghost" size="sm" asChild>
                          <a 
                            href={(project.supervisor as any).linkedin2} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-1"
                          >
                            <ExternalLink className="h-4 w-4" />
                            LinkedIn 2
                          </a>
                        </Button>
                      )}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.supervisor.description}
                    </p>
                   </div>

                   {/* Paper Link and Video */}
                   {((project as any).paperLink || (project as any).videoLink) && (
                     <div className="space-y-4">
                       <h4 className="text-lg font-semibold text-primary">Resources</h4>
                       <div className="flex flex-wrap gap-4">
                         {(project as any).paperLink && (
                           <Button variant="outline" size="sm" asChild>
                             <a 
                               href={(project as any).paperLink} 
                               target="_blank" 
                               rel="noopener noreferrer"
                               className="flex items-center gap-2"
                             >
                               <ExternalLink className="h-4 w-4" />
                               Research Paper
                             </a>
                           </Button>
                         )}
                         {(project as any).videoLink && (
                           <div className="w-full">
                             <div className="aspect-video w-full max-w-2xl">
                               <iframe
                                 src={`https://www.youtube.com/embed/${(project as any).videoLink.split('v=')[1]?.split('&')[0]}`}
                                 title="Project Video"
                                 className="w-full h-full rounded-lg"
                                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                 allowFullScreen
                               />
                             </div>
                           </div>
                         )}
                       </div>
                     </div>
                   )}

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
      </div>
    </section>
  );
};

export default ProjectsSection;
