import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Database, Smartphone, Zap, Globe } from "lucide-react";

const skills = [
  { name: 'Python', description: 'Python and libraries for web, data and automation.' },
  { name: 'Django', description: 'Full-stack web apps with Django and REST APIs.' },
  { name: 'Flask', description: 'Lightweight services and APIs using Flask.' },
  { name: 'NumPy', description: 'Numerical computing and data analysis with NumPy.' },
  { name: 'Selenium', description: 'Automated testing and browser automation with Selenium.' },
  { name: 'Blockchain', description: 'Research, testing and tooling for blockchain systems.' },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Skills & Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My expertise spans Python development, web frameworks like Django & Flask, data tooling such as NumPy, automated testing with Selenium, and blockchain research and tooling.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">{skill.name}</h3>
                <p className="text-muted-foreground">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
