import { motion } from "framer-motion";
import { Users, TrendingDown, Target, Workflow } from "lucide-react";

const metrics = [
  {
    icon: Users,
    value: "1,749+",
    label: "Students Analyzed",
    description: "University-wide exit exam & CGPA study across 18 departments.",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    icon: TrendingDown,
    value: "80%",
    label: "CTR & Reach Gaps Discovered",
    description: "Identified multi-year marketing efficiency decay for ProGear.",
    gradient: "from-amber-500 to-rose-600",
  },
  {
    icon: Target,
    value: "0.56",
    label: "Correlation Discovered",
    description: "Quantified link between GPA and national exit exam performance.",
    gradient: "from-indigo-500 to-violet-600",
  },
  {
    icon: Workflow,
    value: "100%",
    label: "Reproducible Pipelines",
    description: "Clean SQL models, Pandas scripts, and Power BI dashboards.",
    gradient: "from-emerald-500 to-teal-600",
  },
];

const MetricsBanner = () => {
  return (
    <section id="metrics" className="py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative p-6 rounded-2xl bg-card/60 backdrop-blur-xl border border-border/80 hover:border-cyan-500/50 shadow-lg shadow-black/5 transition-all duration-300 overflow-hidden"
              >
                {/* Background accent glow */}
                <div
                  className={`absolute -right-10 -bottom-10 w-32 h-32 rounded-full bg-gradient-to-br ${item.gradient} opacity-10 group-hover:opacity-20 blur-2xl transition-opacity`}
                />

                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-br ${item.gradient} text-white shadow-md`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-widest">
                      METRIC 0{index + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className={`text-3xl sm:text-4xl font-black font-display bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent mb-1`}>
                      {item.value}
                    </h3>
                    <p className="text-sm font-bold text-foreground mb-1">
                      {item.label}
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MetricsBanner;
