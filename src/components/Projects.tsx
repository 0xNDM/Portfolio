import { ExternalLink, ArrowUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { toast } from "@/components/ui/sonner";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import ywhAnalyzerImg from "@/assets/Images/ywh-analyzer.png";

const projects = [
  {
    title: "My YouTube Watch History Analysis",
    description: "Analyzed and visualized YouTube watch history to surface habits, trends, and content preferences.",
    tags: ["Python", "Pandas", "SQL", "Power BI"],
    gradient: "from-cyan-500 to-blue-500",
    demo: "#",
    demoPath: "/projects/ywh",
    layout: "vertical", // stack content so title/description sit below the image
  },
  {
    title: "YouTube Analyzer",
    description:
      "Discover your YouTube habits like never before! Upload your watch-history.json and get personalized insights, interactive charts, and visualizations that reveal your viewing patterns over time.",
    tags: ["Streamlit", "Pandas", "Plotly"],
    gradient: "from-rose-500 to-red-500",
    externalUrl: "https://ywh.nathnael.me/",
    repo: "https://github.com/0xNDM/YWH_Analyzer",
    layout: "vertical",
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
            A selection of recent analytics work focused on clear, decision-ready insights
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                  <div className={`flex flex-col ${project.layout === 'vertical' ? '' : 'md:flex-row'} items-start gap-6`}>
                    <div className="flex-1 text-left">
                      <div className="h-1 w-16 bg-gradient-to-r from-primary to-secondary rounded-full mb-4" />
                      <motion.div
                        animate={{ y: hoveredIndex === index ? -2 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="mb-3"
                      >
                        {project.externalUrl ? (
                          <a href={project.externalUrl} target="_blank" rel="noopener noreferrer" className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hover:opacity-90 transition">
                            {project.title}
                          </a>
                        ) : (
                          <Link to={project.demoPath || '#'} className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hover:opacity-90 transition">
                            {project.title}
                          </Link>
                        )}
                      </motion.div>
                      <p className="text-muted-foreground mb-4 bg-card/60 border border-border/60 rounded-xl p-4">
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
                        {project.externalUrl ? (
                          <>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                              <a href={project.externalUrl} target="_blank" rel="noopener noreferrer">
                                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground">
                                  <ExternalLink className="w-4 h-4 mr-2" />
                                  Launch App
                                </Button>
                              </a>
                            </motion.div>
                            {project.repo && (
                              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <a href={project.repo} target="_blank" rel="noopener noreferrer">
                                  <Button size="sm" variant="outline" className="border-primary/50">
                                    <ExternalLink className="w-4 h-4 mr-2" />
                                    GitHub Repo
                                  </Button>
                                </a>
                              </motion.div>
                            )}
                          </>
                        ) : project.demo && project.demo !== "#" ? (
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
                            <Link to={project.demoPath || '#'}>
                              <Button size="sm" variant="outline" className="border-primary/50">Project Page</Button>
                            </Link>
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
        {/* Back to top button (stylish) */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          whileHover={{ scale: 1.08, y: -4 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-primary to-secondary text-white p-3.5 rounded-full shadow-2xl hover:shadow-[0_12px_30px_rgba(0,0,0,0.35)] transform transition-all duration-300 ring-4 ring-primary/25"
        >
          <ArrowUp className="h-6 w-6" />
        </motion.button>
      </div>
    </section>
  );
};

export default Projects;
