import { Mail, Linkedin, Github, MapPin, Download } from "lucide-react";
import { Button } from "./ui/button";
import resumeFile from "../assests/resume.pdf";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Gradient orbs */}
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-[100px]" />
      
      <div className="container px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="mono text-primary text-sm mb-2">05. What's Next?</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Get In Touch
          </h3>
          
          <p className="text-muted-foreground mb-8 leading-relaxed">
            I'm currently looking for internship opportunities where I can apply my data science 
            and AI skills to solve meaningful problems. Whether you have a question, an opportunity, 
            or just want to connect—my inbox is always open.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="gap-2 w-full sm:w-auto" asChild>
              <a href="mailto:sridharsuresh32@gmail.com">
                <Mail className="w-4 h-4" />
                Say Hello
              </a>
            </Button>

            <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto" asChild>
              <a href={resumeFile} download="Sridhar_Resume.pdf">
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </Button>
            
            <div className="flex items-center gap-3">
              <a 
                href="https://www.linkedin.com/in/sridhar-s-5a2433283/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors hover:text-primary"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/SridharSuresh2709" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors hover:text-primary"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
            <MapPin className="w-4 h-4" />
            <span>Bangalore, India</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
