import { motion } from "framer-motion";
import { Database, Cpu, PieChart, Lightbulb, ArrowRight } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Data Ingestion & SQL Engineering",
    description: "Cleaning messy datasets, handling duplicates, building CTEs, window functions, and structured database models.",
    tools: ["SQL Server", "Python", "Pandas"],
    icon: Database,
    color: "from-cyan-500 to-blue-500",
  },
  {
    step: "02",
    title: "NLP & Statistical Analysis",
    description: "Uncovering correlation patterns and running Transformer-based NLP sentiment classifiers on unstructured feedback.",
    tools: ["HuggingFace", "Scikit-Learn", "R"],
    icon: Cpu,
    color: "from-violet-500 to-purple-600",
  },
  {
    step: "03",
    title: "Executive Dashboarding",
    description: "Designing interactive visual storytelling interfaces in Power BI, Looker Studio, and custom web apps.",
    tools: ["Power BI", "Looker Studio", "Plotly"],
    icon: PieChart,
    color: "from-amber-500 to-orange-500",
  },
  {
    step: "04",
    title: "Strategic Decision Readout",
    description: "Formulating clear, prioritized business recommendations tied directly to conversion, retention, and revenue impact.",
    tools: ["KPI Modeling", "Funnel Insights"],
    icon: Lightbulb,
    color: "from-emerald-500 to-teal-500",
  },
];

const WorkflowSection = () => {
  return (
    <section id="workflow" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-mono font-bold tracking-widest text-cyan-500 uppercase px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            End-to-End Analytics Workflow
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-foreground mt-4 mb-4">
            How I Transform Raw Data Into Action
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            A structured, repeatable methodology designed to guarantee data integrity, surface hidden patterns, and deliver executive clarity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative p-6 rounded-2xl bg-card/60 backdrop-blur-xl border border-border/80 hover:border-cyan-500/50 shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} text-white shadow-md`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-2xl font-black font-mono text-muted-foreground/30 group-hover:text-cyan-500/50 transition-colors">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-display text-foreground mb-2 group-hover:text-cyan-500 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Tool Pills */}
                <div className="pt-4 border-t border-border/60 flex flex-wrap gap-1.5">
                  {item.tools.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md bg-muted text-[10px] font-mono text-foreground/80 font-medium"
                    >
                      {t}
                    </span>
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

export default WorkflowSection;
