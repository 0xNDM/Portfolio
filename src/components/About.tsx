import { Code2, Palette, Rocket, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const skills = [
  {
    icon: Code2,
    title: "Development",
    description: "Building robust applications with modern technologies and best practices",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Creating beautiful and intuitive user interfaces that users love",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimizing for speed and efficiency across all platforms",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description: "Exploring cutting-edge solutions and pushing creative boundaries",
  },
];

const About = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating exceptional digital experiences that blend creativity with functionality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-muted-foreground">{skill.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
