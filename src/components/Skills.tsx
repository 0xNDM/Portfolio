import { motion } from "framer-motion";
import { Database, Table, BarChart3, Terminal, Sparkles, Layers, Cpu, Compass } from "lucide-react";

const skillCategories = [
  {
    title: "SQL & Data Engineering",
    icon: Database,
    color: "from-cyan-500 to-blue-500",
    skills: [
      { name: "Complex CTEs & Subqueries", desc: "Building modular, readable, and high-performance SQL models." },
      { name: "Window Functions", desc: "OVER(), PARTITION BY, DENSE_RANK(), lead/lag trend analytics." },
      { name: "Query Optimization", desc: "Indexing, execution plan tuning, and deduplication workflows." },
    ],
  },
  {
    title: "Python & R Data Science",
    icon: Terminal,
    color: "from-amber-500 to-orange-500",
    skills: [
      { name: "Pandas & NumPy", desc: "Exploratory data analysis, matrix transformations, and cleaning." },
      { name: "NLP Sentiment Models", desc: "HuggingFace Transformers, DistilBERT classification, and text mining." },
      { name: "Statistical Modeling", desc: "Hypothesis testing, regression analysis, and tidyverse R tooling." },
    ],
  },
  {
    title: "BI & Data Storytelling",
    icon: BarChart3,
    color: "from-indigo-500 to-violet-500",
    skills: [
      { name: "Power BI & DAX", desc: "Interactive dashboards, calculated metrics, and star schema modeling." },
      { name: "Looker Studio", desc: "Stakeholder reporting, cross-department metrics, and live KPI feeds." },
      { name: "Plotly & Streamlit", desc: "Building custom interactive web applications for analytical tools." },
    ],
  },
  {
    title: "Business Strategy & Web Tracking",
    icon: Compass,
    color: "from-emerald-500 to-teal-500",
    skills: [
      { name: "Conversion Funnel Analysis", desc: "Mapping user drop-offs, reach erosion, and ROI optimization." },
      { name: "Google Analytics 4 & GTM", desc: "Event tracking, custom dimensions, and user behavior tagging." },
      { name: "Executive Readouts", desc: "Translating raw metrics into clear action plans for decision-makers." },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-mono font-bold tracking-widest text-cyan-500 uppercase px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            Core Competencies
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-foreground mt-4 mb-4">
            Technical Expertise & Analytical Capabilities
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            From low-level data manipulation to high-level executive reporting — here is how I add quantitative value at every stage.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative p-8 rounded-3xl bg-card/60 backdrop-blur-xl border border-border/80 hover:border-cyan-500/50 shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-2xl bg-gradient-to-br ${cat.color} text-white shadow-lg`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-foreground group-hover:text-cyan-500 transition-colors">
                    {cat.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {cat.skills.map((s) => (
                    <div
                      key={s.name}
                      className="p-4 rounded-xl bg-background/50 border border-border/50 hover:border-cyan-500/30 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-sm text-foreground">{s.name}</span>
                        <Sparkles className="w-3.5 h-3.5 text-cyan-500/60" />
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  ))}
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
