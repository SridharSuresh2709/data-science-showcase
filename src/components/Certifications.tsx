import { Award, Cloud, Rocket, Globe, Cpu } from "lucide-react";

const certifications = [
  {
    title: "Microsoft Azure Data Fundamentals (DP-900)",
    issuer: "Microsoft",
    year: "2024",
    icon: Cloud,
  },
  {
    title: "5-Day AI Agents Intensive Course",
    issuer: "Google × Kaggle",
    year: "2025",
    icon: Rocket,
  },
  {
    title: "AI Infrastructure and Operations Fundamentals",
    issuer: "NVIDIA",
    year: "2025",
    icon: Cpu,
  },
  {
    title: "Geodata Processing using AI & ML",
    issuer: "ISRO-IIRS",
    year: "2025",
    icon: Globe,
  },
];

const badges = [
  { title: "LeetCode 50+ Days Badge", platform: "LeetCode" },
  { title: "Data Navigator Badge", platform: "LeetCode" },
];

const Certifications = () => {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="mono text-primary text-sm mb-2">04. Recognition</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            Certifications & Achievements
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {certifications.map((cert, index) => (
              <div 
                key={cert.title}
                className="flex items-start gap-4 p-5 rounded-lg bg-card border border-border hover:border-primary/50 transition-all group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors shrink-0">
                  <cert.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {cert.issuer} · {cert.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            {badges.map((badge) => (
              <div 
                key={badge.title}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
              >
                <Award className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">{badge.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
