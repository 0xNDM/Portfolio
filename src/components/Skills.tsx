import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Database, Smartphone, Zap, Globe } from "lucide-react";

const skills = [
  { name: "Frontend Dev", icon: Code2, description: "React, TypeScript, Tailwind" },
  { name: "UI/UX Design", icon: Palette, description: "Figma, Adobe XD" },
  { name: "Backend", icon: Database, description: "Node.js, PostgreSQL" },
  { name: "Mobile", icon: Smartphone, description: "React Native, PWA" },
  { name: "Performance", icon: Zap, description: "Optimization, SEO" },
  { name: "Web3", icon: Globe, description: "Blockchain, Smart Contracts" },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Specialized in modern web technologies and creative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group relative p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 mb-4 rounded-2xl bg-gradient-to-br from-primary to-secondary p-[2px]"
                  >
                    <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </motion.div>
                  
                  <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-muted-foreground">{skill.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
