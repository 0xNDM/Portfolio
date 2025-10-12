import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { toast } from "@/components/ui/sonner";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import handyImg from "@/assets/Images/Handy.png";
import ttsImg from "@/assets/Images/TTS.jpg";

const projects = [
  {
    title: "Handy | AI Powered telegram bot",
    description: "An AI powered bot that can help you with your daily tasks.",
    tags: ["Telegram", "AI", "Bot"],
    gradient: "from-indigo-500 to-purple-500",
    demo: "https://t.me/ZeDS_Bot",
    img: handyImg,
  },
  {
    title: "TTS Project",
    description: "A Text-to-Speech application with advanced voice synthesis capabilities.",
    tags: ["Audio", "Synthesis", "TTS"],
    gradient: "from-orange-400 to-rose-400",
    demo: "#",
    img: ttsImg,
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
                  <div className={`flex flex-col md:flex-row items-center md:items-start gap-6`}>
                    {project.img && (
                      <div className={`flex-shrink-0 ${index % 2 === 0 ? '' : 'md:order-last'}`}>
                        <div className="rounded-3xl p-1 bg-gradient-to-br from-primary/40 via-secondary/30 to-accent/20 hover:from-primary/60 hover:via-secondary/40 transition-all">
                            <div className="relative bg-card/60 backdrop-blur-md rounded-2xl p-3 w-56 h-40 flex items-center justify-center overflow-hidden">
                              <motion.img
                                src={project.img}
                                alt={project.title}
                                className="w-full h-full object-cover rounded-md"
                                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                                style={{ transformOrigin: index % 2 === 0 ? 'left center' : 'right center' }}
                              />
                              {/* subtle decorative overlay (shimmer) */}
                              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.00)_0%,rgba(255,255,255,0.06)_50%,rgba(255,255,255,0.00)_100%)] opacity-0 group-hover:opacity-30 transition-opacity duration-700" />
                              {/* skew mask */}
                              <div className="pointer-events-none absolute -inset-4 transform -skew-x-3 bg-gradient-to-r from-transparent via-white/2 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-700" />
                            </div>
                          </div>
                      </div>
                    )}

                    <div className="flex-1 text-left">
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
                        {project.demo && project.demo !== "#" ? (
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <Button size="sm" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Live Demo
                              </Button>
                            </a>
                          </motion.div>
                        ) : (
                          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <Button size="sm" variant="outline" className="border-primary/50">Details</Button>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        {/* Special styled Coming Soon card: replicate and enhance */}
        <div className="container mx-auto px-4 mt-10">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden relative bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 p-8">
              <div className="absolute inset-0 bg-[radial-gradient(closest-side,rgba(255,255,255,0.04),transparent)] animate-pulse opacity-20" />
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                <div className="w-36 h-36 rounded-full bg-white/5 flex items-center justify-center p-2">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center pulse-glow">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  </div>
                </div>
                <div className="flex-1 text-white">
                  <h3 className="text-3xl md:text-4xl font-bold mb-2">Coming Soon</h3>
                  <p className="mb-4 opacity-90">Something amazing is brewing — this project will showcase cutting-edge technology and innovative solutions. Sign up to get an early look or join the waitlist.</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1">
                      <input id="coming-email" type="email" placeholder="Your email" className="w-full px-4 py-2 rounded-md text-black" />
                    </div>
                    <div className="flex-shrink-0">
                      <button onClick={() => {
                        const v = (document.getElementById('coming-email') as HTMLInputElement)?.value;
                        if (!v) {
                          toast.error('Please enter a valid email');
                          return;
                        }
                        // persist to localStorage
                        try {
                          const key = 'waitlist_emails';
                          const existing = JSON.parse(localStorage.getItem(key) || '[]');
                          if (!existing.includes(v)) existing.push(v);
                          localStorage.setItem(key, JSON.stringify(existing));
                          toast.success('Thanks! We will notify ' + v);
                        } catch (e) {
                          console.error(e);
                          toast('Saved to waitlist');
                        }
                      }} className="bg-white text-black font-semibold px-4 py-2 rounded-md">Notify Me</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Back to top button */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top" className="fixed bottom-6 right-6 z-50 bg-primary/90 text-primary-foreground p-3 rounded-full shadow-lg hover:scale-105 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3.293 9.293a1 1 0 011.414 0L10 14.586l5.293-5.293a1 1 0 011.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z" clipRule="evenodd"/></svg>
        </button>
      </div>
    </section>
  );
};

export default Projects;
