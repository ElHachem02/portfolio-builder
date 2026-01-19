import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Visiting Researcher",
    company: "IBM Research Zürich",
    period: "Sep 2025 – Feb 2026",
    reference: "https://docling-project.github.io/docling/"
  },
  {
    title: "Full Stack Engineer",
    company: "Scalera",
    period: "Sep 2024 – Sep 2025",
    reference: "https://www.scalera.ai/en/%C3%BCber-uns"
  },
  {
    title: "Researcher",
    company: "Mobiliar lab ETH Zürich",
    period: "Aug 2024 – Mar 2025",
    reference: "https://mobiliarlab.ethz.ch/"
  },
  {
    title: "Data Scientist",
    company: "VIUN",
    period: "Mar 2024 – Jul 2024",
    reference: "https://www.viun.tech/"
  },
  {
    title: "Software Engineer",
    company: "Lombard Odier Investment Managers",
    period: "Jun 2023 – Sep 2023",
    reference: "https://am.lombardodier.com/fr/home.html"
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
              <a
                key={index}
                href={exp.reference}
                target="_blank"
                rel="noopener noreferrer"
                className="relative card-gradient rounded-xl p-6 border border-border ml-4 hover:glow-box transition-all duration-300 cursor-pointer block"
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
              </a>
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
