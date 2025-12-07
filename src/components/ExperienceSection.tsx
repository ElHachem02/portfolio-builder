import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Visiting Researcher",
    company: "IBM Research Zürich",
    period: "Sep 2025 – Feb 2026",
  },
  {
    title: "Machine Learning Engineer",
    company: "Julius Baer",
    period: "Feb 2025 – Aug 2025",
  },
  {
    title: "Teaching Assistant & Researcher",
    company: "ETH Zürich",
    period: "Aug 2024 – Aug 2025",
  },
  {
    title: "Data Scientist",
    company: "PSI Paul Scherrer Institute",
    period: "Sep 2024 – Jan 2025",
  },
  {
    title: "Software Engineer",
    company: "Axpo Group",
    period: "Feb 2024 – Aug 2024",
  },
  {
    title: "Machine Learning Engineer",
    company: "Keyvian",
    period: "Aug 2023 – Sep 2023",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-title">Professional Experience</h2>
        
        <div className="relative pl-8">
          <div className="timeline-line" />
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative card-gradient rounded-xl p-6 border border-border ml-4 hover:glow-box transition-all duration-300"
              >
                <div className="absolute -left-8 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                    <p className="text-primary flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-sm text-muted-foreground font-mono">
                    {exp.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-block card-gradient rounded-full px-6 py-3 border border-primary/30">
            <span className="text-primary font-semibold">2+ Years in AI and Software Engineering</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
