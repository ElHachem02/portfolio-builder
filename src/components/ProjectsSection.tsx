import { ExternalLink, Github, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Were2go: deployed app",
    description: "Built and deployed a social app that finds all available events in Toronto, so that you to connect and see where your friends are going. \nManaged to get 200 active users.",
    tags: ["Typescript", "App development", "Entrepreneurship", "React-Native"],
    link: "https://apps.apple.com/ch/app/wertogo/id6751991624?l=en-GB",
    isPrivate: false,
  },
  {
    title: "Docling",
    description: "Finetuned GraniteDocling vision model and implemented 2 stage pipeline that preprocesses documents by running a layout model to extract bounding boxes, guiding the VLM for better extraction of information",
    tags: ["Computer Vision", "Research", "MLOps", "Software Engineering"],
    link: "https://github.com/docling-project/docling",
    isPrivate: false,
  },
  {
    title: "Computer Vision for Autonomous Cars",
    description: "Semantic Segmentation and Depth Estimation project for autonomous vehicles. Implemented DeepLabV3+ with multi-task learning for dense prediction tasks.",
    tags: ["Computer Vision", "Deep Learning", "Autonomous Cars", "PyTorch"],
    link: "https://github.com/ElHachem02/cvaiac2024",
    isPrivate: false,
  },
  {
    title: "IEEE published paper",
    description: "Designed an experiment to measure cognitive load of participants while reading several articles. Feature engineered and trained classical machine learning models to predict cognitive load from EEG signals. The goal is to use this prediciton to personalise education.",
    tags: ["Research", "Neuroscience", "Feature Engineering", "Classical Machine Learning"],
    link: "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=11045966",
    isPrivate: false,
  },
  {
    title: "Optiver x Google hackathon",
    description: "In a Google Developer Club’s Hackaton, my team and I used Data Science techniques in order to implement the best financial model that predicts Tesla’s stock volatility on Optiver’s simulation. We ranked 1st between 210 students.",
    tags: ["Hackathon", "Time Series", "Option prediction", "Linear models"],
    link: null,
    isPrivate: true,
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
