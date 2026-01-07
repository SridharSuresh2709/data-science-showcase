import { Database, Brain, BarChart3, Server } from "lucide-react";

const skillCategories = [
  {
    title: "Data Science",
    icon: Database,
    skills: ["Python", "SQL", "R", "Pandas", "NumPy", "Statistical Analysis", "Feature Engineering"],
  },
  {
    title: "AI & Agents",
    icon: Brain,
    skills: ["XGBoost", "LightGBM", "CatBoost", "Deep Learning", "PyTorch", "Computer Vision", "Google-ADK", "LLMs"],
  },
  {
    title: "Visualization",
    icon: BarChart3,
    skills: ["Matplotlib", "Seaborn", "Tableau", "Power BI", "Data Storytelling"],
  },
  {
    title: "Backend & Cloud",
    icon: Server,
    skills: ["React.js", "Node.js", "MySQL", "MongoDB", "AWS Fundamentals"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative bg-secondary/30">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="mono text-primary text-sm mb-2">03. Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            Skills & Technologies
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <div 
                key={category.title}
                className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-semibold">{category.title}</h4>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
