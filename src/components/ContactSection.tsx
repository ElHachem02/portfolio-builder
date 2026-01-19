import { Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="section-title">Get In Touch</h2>

        <p className="text-muted-foreground mb-8 text-lg">
          I'm always open to discussing new opportunities, interesting projects,
          or collaborations. Feel free to reach out!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="rounded-full px-8" asChild>
            <a href="mailto:peterelhachem02@gmail.com">
              <Mail className="w-5 h-5 mr-2" />
              Email Me
            </a>
          </Button>

          <Button variant="outline" size="lg" className="rounded-full px-8" asChild>
            <a href="https://linkedin.com/in/pelhachem/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
          </Button>

          <Button variant="outline" size="lg" className="rounded-full px-8" asChild>
            <a href="https://github.com/ElHachem02" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
