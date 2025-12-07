const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", level: 95 },
      { name: "SQL", level: 90 },
      { name: "Java", level: 85 },
      { name: "C/C++", level: 85 },
      { name: "Scala", level: 80 },
      { name: "JavaScript", level: 70 },
    ],
  },
  {
    title: "Technologies & Frameworks",
    skills: [
      { name: "Git", level: 95 },
      { name: "Spark", level: 90 },
      { name: "HDFS", level: 85 },
      { name: "Docker", level: 90 },
      { name: "Linux/Unix", level: 90 },
      { name: "Kubernetes", level: 70 },
    ],
  },
  {
    title: "Software Engineering",
    skills: [
      { name: "Distributed Systems", level: 90 },
      { name: "High Performance Computing", level: 85 },
      { name: "Concurrency & Parallelism", level: 90 },
      { name: "Low-Latency Systems", level: 85 },
      { name: "Object-Oriented Design", level: 90 },
      { name: "Cloud Infrastructure", level: 75 },
    ],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      { name: "Machine Learning", level: 95 },
      { name: "Deep Learning", level: 90 },
      { name: "NLP & LLMs", level: 90 },
      { name: "Computer Vision", level: 85 },
      { name: "MLOps", level: 85 },
      { name: "Statistical Modeling", level: 90 },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title text-center">Technical Skills</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className="card-gradient rounded-2xl p-6 border border-border hover:glow-box transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-foreground mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-muted-foreground">{skill.name}</span>
                      <span className="text-xs text-primary font-mono">
                        {skill.level >= 85 ? "Advanced" : "Intermediate"}
                      </span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-bar-fill"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
