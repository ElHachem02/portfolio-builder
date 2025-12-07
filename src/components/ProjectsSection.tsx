import { ExternalLink, Github, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Computer Vision for Autonomous Cars",
    description: "Semantic Segmentation and Depth Estimation project for autonomous vehicles. Implemented DeepLabV3+ with multi-task learning for dense prediction tasks.",
    tags: ["Computer Vision", "Deep Learning", "Autonomous Cars", "PyTorch"],
    link: null,
    isPrivate: true,
  },
  {
    title: "3D Object Detection from LiDAR Point Clouds",
    description: "Built a 2-stage object detector for autonomous vehicles using LiDAR point clouds. Implemented Region Proposal Network and Refinement Network.",
    tags: ["LiDAR", "3D Object Detection", "Point Clouds", "Autonomous Cars"],
    link: null,
    isPrivate: true,
  },
  {
    title: "Aircraft Engine Anomaly Detection",
    description: "Production-scale computer vision pipeline for Fortune 500 aviation client. Built end-to-end anomaly detection system processing 10k+ aircraft images, achieving 95%+ accuracy.",
    tags: ["Production ML", "Computer Vision", "MLOps", "Fortune 500"],
    link: "https://github.com/",
    isPrivate: false,
  },
  {
    title: "Swiss Legal Documents RAG System",
    description: "Enterprise-grade RAG pipeline processing 50k+ legal documents for professional legal research. Built hybrid retrieval system with ColBERT embeddings.",
    tags: ["Production RAG", "Legal Tech", "ColBERT", "Enterprise Scale"],
    link: null,
    isPrivate: true,
  },
  {
    title: "LLM Security & Watermarking",
    description: "Advanced research on Large Language Model security, implementing watermarking schemes, attack methods, and content filtering using CLIP embeddings.",
    tags: ["AI Safety", "LLM Security", "CLIP", "Research"],
    link: null,
    isPrivate: true,
  },
  {
    title: "Big Data Technologies",
    description: "Comprehensive implementation of big data technologies including S3, DynamoDB, HDFS, and Spark for scalable data processing and analytics.",
    tags: ["Spark", "HDFS", "S3", "DynamoDB"],
    link: "https://github.com/",
    isPrivate: false,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title text-center">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group card-gradient rounded-2xl p-6 border border-border hover:border-primary/50 hover:glow-box transition-all duration-300 flex flex-col"
            >
              <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-auto">
                {project.isPrivate ? (
                  <Button variant="outline" size="sm" disabled className="w-full opacity-50">
                    <Lock className="w-4 h-4 mr-2" />
                    Private Repository
                  </Button>
                ) : (
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View on GitHub
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
