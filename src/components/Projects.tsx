import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    title: "AI-Powered Dashboard",
    description: "Modern analytics platform with real-time data visualization and AI insights",
    tags: ["React", "TypeScript", "AI"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack shopping experience with advanced filtering and payment integration",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Creative Portfolio",
    description: "Interactive showcase with 3D elements and smooth animations",
    tags: ["Three.js", "GSAP", "WebGL"],
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Task Management App",
    description: "Collaborative workspace with real-time updates and team features",
    tags: ["React", "Firebase", "Tailwind"],
    gradient: "from-green-500 to-emerald-500",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work showcasing innovation and creativity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <Card className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 h-full">
                {/* Gradient background on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 0.1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                
                <div className="p-6 relative z-10">
                  <motion.h3
                    className="text-2xl font-semibold mb-3"
                    animate={{ color: hoveredIndex === index ? "hsl(var(--primary))" : "hsl(var(--foreground))" }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                        whileHover={{ scale: 1.1 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="border-primary/50 hover:bg-primary/10"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button 
                        size="sm"
                        className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
