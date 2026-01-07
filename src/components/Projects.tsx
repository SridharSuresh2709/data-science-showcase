import { ExternalLink, Brain, Music, TrendingUp, Wheat } from "lucide-react";
import { Badge } from "./ui/badge";

const projects = [
  {
    title: "Personalized Memory Assistant System",
    subtitle: "AI Agent with Persistent Memory",
    description: "Built a ChatGPT-like personalized AI agent with persistent long-term memory and session awareness. Implemented confidence-based memory storage, decay, promotion, and conflict resolution using ChromaDB.",
    tech: ["Python", "ChromaDB", "Ollama", "LLM"],
    icon: Brain,
    highlight: "Agentic Workflow",
    date: "Oct 2025",
  },
  {
    title: "SpoMoodAgent",
    subtitle: "Kaggle × Google AI Agents Course",
    description: "Developed an AI agent to infer user mood from Spotify listening patterns. Generated personalized music insights and playlist recommendations using Gemini API and Google-ADK.",
    tech: ["Google-ADK", "Python", "Gemini API", "Spotify"],
    icon: Music,
    highlight: "Mood Inference",
    date: "Nov 2025",
  },
  {
    title: "Amazon ML Challenge 2025",
    subtitle: "Competitive Machine Learning",
    description: "Ranked 501 out of 10,000+ participants with SMAPE score of 49.58%. Processed 50,000+ e-commerce product records using ensemble modeling techniques.",
    tech: ["XGBoost", "LightGBM", "CatBoost", "Python"],
    icon: TrendingUp,
    highlight: "Top 5% Rank",
    date: "Oct 2025",
  },
  {
    title: "AgriConnect",
    subtitle: "Agriculture Platform Prototype",
    description: "Architected platform connecting 100+ farmers with AI-driven decision support. Led a team of 4 developers in a 24-hour hackathon at UVCE.",
    tech: ["React.js", "Node.js", "ML Integration", "Full Stack"],
    icon: Wheat,
    highlight: "Hackathon Winner",
    date: "Aug 2025",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="mono text-primary text-sm mb-2">02. Featured Work</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            Projects
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <article 
                key={project.title}
                className="group gradient-border p-6 glow-card cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="mono text-xs">
                    {project.highlight}
                  </Badge>
                </div>
                
                <h4 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-3">{project.subtitle}</p>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="mono text-xs text-primary/80 bg-primary/5 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
