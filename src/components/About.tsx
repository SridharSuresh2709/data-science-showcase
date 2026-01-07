import { GraduationCap, Trophy, Code2 } from "lucide-react";

const About = () => {
  const highlights = [
    { icon: GraduationCap, label: "CGPA", value: "9.15/10" },
    { icon: Trophy, label: "Amazon ML Rank", value: "501/10K+" },
    { icon: Code2, label: "LeetCode", value: "50+ Days" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="mono text-primary text-sm mb-2">01. About Me</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-8">
            Who I Am
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a final-year <span className="text-foreground font-medium">Data Science Engineering</span> student 
                at RNS Institute of Technology, Bangalore. I specialize in building machine learning models 
                and AI-powered applications that create real-world impact.
              </p>
              <p>
                My journey in data science began with a fascination for how algorithms can learn patterns 
                and make predictions. Today, I focus on designing <span className="text-primary">intelligent agents</span>, 
                optimizing ensemble models, and architecting end-to-end data solutions.
              </p>
              <p>
                Whether it's ranking in the top 5% at Amazon ML Challenge, building AI agents with 
                persistent memory, or leading hackathon teams—I thrive on solving complex problems 
                with elegant, data-driven solutions.
              </p>
            </div>
            
            <div className="space-y-4">
              {highlights.map((item, index) => (
                <div 
                  key={item.label}
                  className="gradient-border p-4 glow-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                      <p className="font-semibold text-lg">{item.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
