
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
    },
    {
      title: "Swarm Drone Coordination System - Senior Development Project",
      organization: "Qatar University",
      organizationLogo: "/lovable-uploads/bc83b7d9-83e2-4a2f-9b6a-91a46d1360e6.png",
      projectImage: "/lovable-uploads/2bbc8b9d-6e62-4a17-9cdd-4e22549cecdf.png",
      description: "As part of our Senior Development Project at Qatar University, we are developing a system that enables multiple drones to coordinate in real time through a shared communication network. Using reinforcement learning, the drones autonomously avoid obstacles while staying connected as a swarm. Onboard computer vision models further allow the drones to detect and identify objects of interest in complex environments. By combining autonomous navigation, obstacle avoidance, and collaborative search, this system demonstrates strong potential for applications in surveillance, search-and-rescue, and environmental monitoring.",
      technicalDetails: "The system architecture integrates reinforcement learning algorithms for autonomous navigation and obstacle avoidance, real-time communication protocols for swarm coordination, computer vision models for object detection and identification, and distributed control systems for maintaining swarm connectivity. The drones utilize shared sensor data and collaborative decision-making algorithms to optimize search patterns and maintain formation while adapting to dynamic environmental conditions.",
      supervisor: {
        name: "Amr Mohamed",
        linkedin: "https://www.linkedin.com/in/amr-mohamed/",
        description: "Senior Development Project supervised by Amr Mohamed at Qatar University. The project focuses on advanced robotics, swarm intelligence, and autonomous systems with applications in surveillance, search-and-rescue operations, and environmental monitoring."
      },
      tags: ["Reinforcement Learning", "Swarm Intelligence", "Computer Vision", "Autonomous Navigation", "Robotics", "Object Detection", "Real-time Systems"]
    }
  ];

  const completedProjects = [
    {
      title: "Computer Interface - Smart Defence Turret",
      organization: "Qatar University",
      organizationLogo: "/lovable-uploads/bc83b7d9-83e2-4a2f-9b6a-91a46d1360e6.png",
      projectImage: "/lovable-uploads/smart-defence-turret.png",
      description: "This project integrates MATLAB and Arduino to develop an intelligent, semi-autonomous defence-turret prototype capable of detecting, tracking, and engaging moving targets. The system combines a dual-servo pan–tilt mechanism, a laser-based firing module, and a Sensor Fusion block that merges Lidar and Ultrasonic inputs to estimate obstacle distance with greater accuracy. MATLAB App Designer functions as the supervisory control interface, providing the user with sliders, toggles, real-time distance displays, and a live tracking window. User commands generated in the GUI are transmitted to the Arduino microcontroller through a serial communication link, where they are interpreted into servo angles, laser-PWM values, and mode-selection behaviours. This MATLAB × Arduino architecture enables seamless coordination between high-level decision-making and low-level hardware actuation, resulting in a functional prototype capable of both manual and automated target engagement.",
      technicalDetails: "The system architecture integrates MATLAB App Designer for supervisory control with real-time GUI elements including sliders, toggles, and distance displays. Hardware components include a dual-servo pan-tilt mechanism for precise aiming, laser-based firing module with PWM control, and Sensor Fusion combining Lidar and Ultrasonic sensors for enhanced distance estimation. Serial communication enables seamless command transmission between MATLAB and Arduino microcontroller for servo angle control and mode selection.",
      supervisor: {
        name: "Dr. Uvais Qidwai",
        linkedin: "https://www.linkedin.com/in/uvais-qidwai-b099256/",
        description: "Research conducted under the supervision of Dr. Uvais Qidwai at Qatar University. Dr. Qidwai specializes in computer vision, robotics, and embedded systems, providing expert guidance on the integration of MATLAB-based control systems with Arduino hardware."
      },
      videoLink: "https://youtube.com/shorts/k0XmWMUzhRQ?si=Gurd1tGKQm7JGFCR",
      tags: ["MATLAB", "Arduino", "Sensor Fusion", "Lidar", "Ultrasonic", "Servo Control", "Real-time Systems", "Robotics", "Computer Interface"]
    },
    {
      title: "Contributing to HCT-QA: A Benchmark for Question Answering on Human-Centric Tables [Experiment, Analysis & Benchmark]",
      organization: "Qatar Computing Research Institute (QCRI) - Hamad Bin Khalifa University",
      organizationLogo: "/lovable-uploads/0c9530a6-8407-4b3e-a292-c72db84a7a58.png",
      projectImage: "/lovable-uploads/qcri-hct-poster.png",
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
      title: "LiveKit-Powered Real-Time Classroom Monitoring with Vision-Based AI",
      organization: "Edgage - Qatar Science and Technology Park (QSTP)",
      organizationLogo: "/lovable-uploads/dee2527c-6d4a-42e7-8991-395487fc7c93.png",
      projectImage: "/lovable-uploads/e20d3d6c-84d9-4f30-9656-777647b7e511.png",
      description: "Built three computer vision models for real-time use in smart classrooms: Student Attention Detection (identifies focused vs. distracted students using facial orientation and gaze tracking), Engagement Detection (classifies engagement levels using transfer learning with fine-tuned VGG16 on the DAiSEE dataset), and Mood Detection (detects emotional states like happy, confused, bored via facial expression recognition using FER datasets). These models are being integrated with LiveKit to enable real-time video streaming and analytics in interactive classroom environments.",
      technicalDetails: "Successfully implemented the full AI pipeline, from dataset curation and training to model optimization and deployment strategy. The engagement detection model uses VGG16 architecture with transfer learning on the DAiSEE dataset. The system processes input video clips through convolutional layers, feature extraction, flattening, and dense layers for classification. Achieved cost-efficient deployment through model quantization and optimization for real-time performance in classroom environments.",
      supervisor: {
        name: "Qatar Science & Technology Park (QSTP)",
        linkedin: "https://www.linkedin.com/company/qatar-science-&-technology-park/posts/?feedView=all",
        description: "Completed work as an AI/ML developer at Edgage, a startup based at Qatar Science and Technology Park. The project was supervised by QSTP, successfully bridging AI research and real-world deployment to empower educators with advanced computer vision technology."
      },
      videoLink: "https://www.youtube.com/watch?v=1gYIlF3of7Y&ab_channel=KasifCareer",
      tags: ["Computer Vision", "TensorFlow", "VGG16", "CNNs", "DAiSEE", "FER2013", "OpenCV", "Model Optimization", "Real-time AI", "LiveKit"]
    },
    {
      title: "Modular Robotic Car with Servo Motor Control and Circuit Prototyping via Fritzing",
      organization: "Qatar University",
      organizationLogo: "/lovable-uploads/5727015a-665b-4873-abc8-1eb5cef4c229.png",
      projectImage: "/lovable-uploads/75883f7a-550e-4ec0-b9a1-2a004f0e1540.png",
      description: "The Modular Robotic Car with Servo Motor Control and Circuit Prototyping via Fritzing is a compact project that demonstrates the integration of mechanical design, electronics, and control systems. Built as a modular platform, the car allows easy customization and component swapping. A servo motor provides precise steering control, enabling accurate directional movement. The electronic circuitry is designed and visualized using Fritzing, making prototyping simple and beginner-friendly. This project serves as a hands-on introduction to robotics, circuit design, and embedded systems for students and hobbyists.",
      technicalDetails: "The robotic car features a modular design architecture with interchangeable components for easy customization. The servo motor control system provides precise steering with accurate directional movement capabilities. Circuit design and prototyping are handled through Fritzing software for visualization and component layout planning. The embedded control system integrates mechanical design with electronic components, creating a comprehensive learning platform for robotics fundamentals.",
      supervisor: {
        name: "Qatar University Engineering Department",
        linkedin: "https://www.linkedin.com/school/qatar-university/",
        description: "Project completed as part of the engineering curriculum at Qatar University. This hands-on robotics project demonstrates practical application of mechanical design, electronics, and control systems integration for educational purposes."
      },
      videoLink: "https://www.youtube.com/watch?v=dxPsMxUo0dc",
      tags: ["Robotics", "Servo Motors", "Circuit Design", "Fritzing", "Embedded Systems", "Mechanical Design", "Electronics", "Prototyping"]
    },
    {
      title: "Offline Disaster Communication Using ESP32 & LoRa",
      organization: "Qatar University",
      organizationLogo: "/lovable-uploads/ba0837ff-e774-47c6-a605-1c9662e54ac9.png",
      projectImage: "/lovable-uploads/e46ba8b8-6a71-434a-878e-10b89047df3f.png",
      description: "This project establishes a resilient, infrastructure-independent communication system tailored for disaster response scenarios. Powered by ESP32 microcontrollers and LoRa radio modules, it enables mesh-style message relay—allowing emergency messages to hop between nodes, extending communication reach even when standard networks are down. The design emphasizes robustness, portability, and low power consumption, making it ideal for deployment in areas affected by natural hazards.",
      technicalDetails: "The system utilizes ESP32 microcontrollers paired with LoRa radio modules to create a mesh networking architecture. Messages can hop between nodes to extend communication range beyond traditional limitations. The design prioritizes low power consumption for extended operation during emergencies, with robust hardware suitable for harsh environmental conditions. The mesh topology ensures redundancy and fault tolerance in critical communication scenarios.",
      supervisor: {
        name: "Qatar University Engineering Department",
        linkedin: "https://www.linkedin.com/school/qatar-university/",
        description: "IoT and mesh networking project developed at Qatar University focusing on disaster-resilient communication systems. The project demonstrates practical application of wireless communication protocols for emergency response scenarios."
      },
      videoLink: "https://www.youtube.com/watch?v=Ojc-MKK3vH0",
      githubLink: "https://github.com/kasif1234/IoT-Mesh-Networking---Disaster-Communication-System",
      tags: ["ESP32", "LoRa", "Mesh Networking", "IoT", "Disaster Communication", "Emergency Response", "Wireless Communication", "Low Power Design"]
    },
    {
      title: "Wasila – Arabic-First AI Career Agent (Fanar Hackathon Finalist)",
      organization: "Qatar Computing Research Institute (QCRI) - Hamad Bin Khalifa University",
      organizationLogo: "/lovable-uploads/59bb0f17-fb71-42ec-9417-008bfd28748b.png",
      projectImage: "/lovable-uploads/a1ea8f79-7d88-4942-826f-8c8107b1d860.png",
      description: "Wasila – Arabic-First AI Career Agent (Fanar Hackathon Finalist) is an innovative platform tailored to support Arabic speakers in exploring and advancing their careers through intuitive, culturally aware AI interaction. Leveraging the FanarTea codebase—a modular, Python-based web application with frontend and backend architecture—Wasila is built to be scalable, maintainable, and easily enhanced. Together, they represent a smart, adaptive solution bridging conversational AI design with real-world career development needs in the Arabic-speaking world.",
      technicalDetails: "Built on the FanarTea codebase, Wasila utilizes a modular Python-based web application architecture with separate frontend and backend components. The system integrates conversational AI capabilities specifically designed for Arabic language processing, cultural context awareness, and career guidance. The platform features scalable architecture for easy enhancement and maintenance, adaptive AI responses tailored to Arabic speakers' career development needs, and comprehensive backend services supporting real-time career guidance interactions.",
      supervisor: {
        name: "Fanar Hackathon - Qatar Computing Research Institute",
        linkedin: "https://www.linkedin.com/company/qatar-computing-research-institute/",
        description: "Developed as a finalist project for the Fanar Hackathon, focusing on Arabic-first AI solutions for career development. The project demonstrates innovation in culturally aware AI design and natural language processing for Arabic speakers."
      },
      githubLink: "https://github.com/MoAlthaf/FanarTea",
      tags: ["Arabic NLP", "Career AI", "Conversational AI", "Python", "Web Application", "Cultural AI", "Hackathon", "Backend Architecture"]
    },
    {
      title: "Lettuce Nutrition Classification",
      organization: "Qatar University",
      organizationLogo: "/lovable-uploads/da8216a7-1bbb-4ca4-9ef9-692c558118d3.png",
      projectImage: "/lovable-uploads/a7a6401a-59e1-4a3f-8789-f328191b1e9c.png",
      description: "This project was conducted under the Computer Vision course at Qatar University. The work focused on using segmentation and classification techniques to assess the health of lettuce plants grown in hydroponic systems. By comparing deep learning and non-deep learning methods, the study showed that applying segmentation before classification improved accuracy significantly. U-Net was selected as the best-performing segmentation model, while classification was done using methods such as YOLOv8-CLS and SIFT. The results demonstrated that integrating segmentation helps isolate relevant features and enhances model performance, highlighting the potential of computer vision for agricultural automation.",
      technicalDetails: "The project implements a comprehensive computer vision pipeline for agricultural health assessment. U-Net architecture was employed for semantic segmentation to isolate lettuce plants from background noise, followed by classification using YOLOv8-CLS for deep learning approach and SIFT for traditional computer vision methods. The comparative analysis revealed that preprocessing with segmentation significantly improved classification accuracy by focusing on relevant plant features and reducing environmental interference.",
      supervisor: {
        name: "Prof. Somaya Al-maadeed",
        linkedin: "https://www.linkedin.com/in/prof-somaya-al-maadeed-988a145a/",
        description: "This research was considered for submission under the supervision of Dr. Somaya Al-Maadeed to the special session 'Advances in Computational Medical Imaging – From Deep Learning to Generative AI' at IEEE IPTA 2025 (Istanbul, Türkiye)."
      },
      paperLink: "https://drive.google.com/drive/folders/19C8q4b0w2EH6IWZHkQ_OOhlpPPPIkGhE?usp=sharing",
      tags: ["Computer Vision", "U-Net", "Segmentation", "YOLOv8", "SIFT", "Agricultural AI", "Deep Learning", "Hydroponic Systems", "Plant Health"]
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
              Projects in Progress (3)
            </Button>
            <Button
              variant={activeTab === 'completed' ? "default" : "outline"}
              onClick={() => setActiveTab('completed')}
              className="px-6"
            >
              Completed Projects (6)
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
