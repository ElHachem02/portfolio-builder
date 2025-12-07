const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-title">About Me</h2>
        <div className="card-gradient rounded-2xl p-8 border border-border glow-box">
          <p className="text-muted-foreground leading-relaxed text-lg mb-6">
            Data Scientist & Software Engineer with expertise in building production-grade ML systems 
            and scalable distributed software. Currently pursuing MSc in Data Science at ETH Zürich 
            while conducting research on diffusion language models at IBM Research. Strong foundation 
            in systems engineering, quantitative methods, and applied machine learning from experience 
            at leading tech and finance firms.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Specialized in high-performance computing, low-latency systems, and end-to-end ML pipelines 
            spanning LLMs, agentic workflows, and quantitative analysis. Passionate about building 
            robust, scalable systems that bridge theoretical research with production deployment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
