import { useState } from "react";
import { ExternalLink, Github, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import dashboardOverviewImg from "@/assets/Images/dashboard_overview.png";
import bduImg from "@/assets/Images/BDU Class of 2025.png";
import ywhImg from "@/assets/Images/ywh.png";
import ywhAnalyzerImg from "@/assets/Images/ywh-analyzer.png";

interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: "Marketing Analytics" | "Academic BI" | "Interactive Apps";
  description: string;
  tags: string[];
  insightBadges: { label: string; bg: string }[];
  gradient: string;
  image: string;
  imageAlt: string;
  demoPath?: string;
  externalUrl?: string;
  repo?: string;
}

const projects: ProjectItem[] = [
  {
    id: "progear",
    title: "ProGear Sports — Marketing Analytics & NLP Insights",
    subtitle: "End-to-End Marketing Funnel & Customer Sentiment Analysis",
    category: "Marketing Analytics",
    description:
      "Analyzed declining engagement & conversion efficiency using SQL Server, Python HuggingFace Transformers, and Power BI dashboards. Uncovered an 80% CTR decay and 25.8% sales erosion.",
    tags: ["SQL Server", "Python", "Transformers", "Power BI", "Data Modeling"],
    insightBadges: [
      { label: "80% CTR Erosion Uncovered", bg: "bg-rose-500/10 text-rose-400 border-rose-500/20" },
      { label: "BERT NLP Sentiment", bg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" },
      { label: "9.6% Funnel Conversion", bg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" },
    ],
    gradient: "from-cyan-500 via-blue-600 to-indigo-600",
    image: dashboardOverviewImg,
    imageAlt: "ProGear Marketing Analytics Dashboard",
    demoPath: "/progear",
    repo: "https://github.com/0xNDM/ProGear_Sports_Marketing_Analytics/tree/main",
  },
  {
    id: "bdu",
    title: "BDU Class of 2025 — Academic Outcome Intelligence",
    subtitle: "University-Wide Exit Exam & CGPA Analytics Dashboard",
    category: "Academic BI",
    description:
      "Comprehensive analysis of 1,749 graduating students across 18 academic departments linking cumulative GPA with national exit examination results in Looker Studio.",
    tags: ["Excel", "Looker Studio", "Data Wrangling", "Business Intelligence"],
    insightBadges: [
      { label: "0.56 Correlation Discovered", bg: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20" },
      { label: "96.23% Pass Rate", bg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" },
      { label: "1,749 Students Tracked", bg: "bg-amber-500/10 text-amber-400 border-amber-500/20" },
    ],
    gradient: "from-indigo-500 via-purple-600 to-violet-600",
    image: bduImg,
    imageAlt: "Bahir Dar University Academic Dashboard Banner",
    demoPath: "/bdu",
  },
  {
    id: "ywh-analyzer",
    title: "YouTube Watch History Analyzer",
    subtitle: "Interactive Personal Behavioral Data Web App",
    category: "Interactive Apps",
    description:
      "A web application built in Streamlit and Plotly that processes watch-history JSON exports to deliver personalized habit trends, category distributions, and time-series heatmaps.",
    tags: ["Streamlit", "Python", "Pandas", "Plotly", "Data Analysis"],
    insightBadges: [
      { label: "Interactive Web App", bg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" },
      { label: "JSON Data Parser", bg: "bg-violet-500/10 text-violet-400 border-violet-500/20" },
      { label: "Streamlit Cloud Live", bg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" },
    ],
    gradient: "from-rose-500 via-pink-600 to-red-600",
    image: ywhAnalyzerImg,
    imageAlt: "YouTube Watch History Analyzer Streamlit Interface",
    externalUrl: "https://ywh.nathnael.me/",
    repo: "https://github.com/0xNDM/YWH_Analyzer",
  },
  {
    id: "ywh-analysis",
    title: "Personal Digital Habit Exploration — YouTube Study",
    subtitle: "In-Depth Exploratory Analysis & Power BI Visuals",
    category: "Marketing Analytics",
    description:
      "Comprehensive statistical breakdown of multi-year personal media consumption history using Python data cleaning and interactive Power BI report views.",
    tags: ["Python", "Pandas", "SQL", "Power BI"],
    insightBadges: [
      { label: "Multi-Year History", bg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" },
      { label: "Habit Clustering", bg: "bg-amber-500/10 text-amber-400 border-amber-500/20" },
    ],
    gradient: "from-cyan-500 via-teal-600 to-emerald-600",
    image: ywhImg,
    imageAlt: "YouTube Watch History Analysis Report",
    demoPath: "/projects/ywh",
  },
];

const categories = ["All", "Marketing Analytics", "Academic BI", "Interactive Apps"] as const;

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-xs font-mono font-bold tracking-widest text-cyan-500 uppercase px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            Selected Work
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-foreground mt-4 mb-4">
            Featured Analytics & BI Case Studies
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Explore end-to-end data projects delivering high-impact metrics, SQL feature engineering, NLP sentiment modeling, and executive BI dashboards.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold font-mono transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20 scale-105"
                    : "bg-card/60 hover:bg-card border border-border/80 text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const isExternal = Boolean(project.externalUrl);
              const targetUrl = project.externalUrl || project.demoPath || "#";

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group relative rounded-3xl bg-card/60 backdrop-blur-xl border border-border/80 hover:border-cyan-500/50 shadow-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-cyan-950/20"
                >
                  <div>
                    {/* Top Image Preview Link Container */}
                    {isExternal ? (
                      <a
                        href={targetUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block relative aspect-[16/9] w-full overflow-hidden bg-slate-950 border-b border-border/60 group/img cursor-pointer"
                      >
                        <img
                          src={project.image}
                          alt=""
                          className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-110"
                        />
                        <img
                          src={project.image}
                          alt={project.imageAlt}
                          className="relative z-10 w-full h-full object-contain p-4 transition-transform duration-500 group-hover/img:scale-105"
                        />
                      </a>
                    ) : (
                      <Link
                        to={targetUrl}
                        className="block relative aspect-[16/9] w-full overflow-hidden bg-slate-950 border-b border-border/60 group/img cursor-pointer"
                      >
                        <img
                          src={project.image}
                          alt=""
                          className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-110"
                        />
                        <img
                          src={project.image}
                          alt={project.imageAlt}
                          className="relative z-10 w-full h-full object-contain p-4 transition-transform duration-500 group-hover/img:scale-105"
                        />
                      </Link>
                    )}

                    {/* Body Content */}
                    <div className="p-6 sm:p-8">
                      {/* Insight Badges */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.insightBadges.map((badge, idx) => (
                          <span
                            key={idx}
                            className={`px-2.5 py-1 rounded-md border text-[11px] font-mono font-semibold ${badge.bg}`}
                          >
                            {badge.label}
                          </span>
                        ))}
                      </div>

                      {/* Clickable Title */}
                      <h3 className="text-xl sm:text-2xl font-bold font-display text-foreground mb-2 transition-colors">
                        {isExternal ? (
                          <a
                            href={targetUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-cyan-500 transition-colors"
                          >
                            {project.title}
                          </a>
                        ) : (
                          <Link to={targetUrl} className="hover:text-cyan-500 transition-colors">
                            {project.title}
                          </Link>
                        )}
                      </h3>

                      <p className="text-xs font-mono text-muted-foreground mb-4">
                        {project.subtitle}
                      </p>

                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-md bg-muted/80 text-foreground/90 font-mono text-[11px] font-medium border border-border/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer Action Links */}
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0 flex flex-wrap items-center justify-between gap-3 border-t border-border/40 mt-auto">
                    {isExternal ? (
                      <a
                        href={targetUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-xs shadow-md shadow-cyan-500/20 transition-all hover:scale-105"
                      >
                        <span>Launch App</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <Link
                        to={targetUrl}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-xs shadow-md shadow-cyan-500/20 transition-all hover:scale-105"
                      >
                        <span>Read Case Study</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    )}

                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-card hover:bg-muted border border-border/80 text-foreground font-mono text-xs font-semibold hover:border-cyan-500/50 transition-all"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Code Repo</span>
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
