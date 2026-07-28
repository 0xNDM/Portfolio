import React, { useState } from "react";
import { motion } from "framer-motion";

import pythonIcon from "@/assets/Icons/python.svg";
import sqlIcon from "@/assets/Icons/SQL.svg";
import spreadsheetsIcon from "@/assets/Icons/spreadsheets.svg";
import powerBiIcon from "@/assets/Icons/power-bi.svg";
import rIcon from "@/assets/Icons/r.png";
import lookerIcon from "@/assets/Icons/Looker.svg";
import ga4Icon from "@/assets/Icons/GA4.svg";
import gtmIcon from "@/assets/Icons/GTM.svg";
import pandasIcon from "@/assets/Icons/Pandas.svg";
import numpyIcon from "@/assets/Icons/numpy.svg";
import tableauIcon from "@/assets/Icons/tableau.svg";
import seleniumIcon from "@/assets/Icons/selenium.svg";

interface TechTool {
  name: string;
  category: "Languages & Querying" | "Analytics & NLP" | "BI & Visualization" | "Tracking & Web";
  src: string;
  whiteBg?: boolean;
  proficiency: "Advanced" | "Proficient" | "Specialized";
}

const tools: TechTool[] = [
  { name: "SQL", category: "Languages & Querying", src: sqlIcon, proficiency: "Advanced" },
  { name: "Python", category: "Languages & Querying", src: pythonIcon, proficiency: "Advanced" },
  { name: "R", category: "Languages & Querying", src: rIcon, proficiency: "Proficient" },
  { name: "Pandas", category: "Analytics & NLP", src: pandasIcon, proficiency: "Advanced" },
  { name: "NumPy", category: "Analytics & NLP", src: numpyIcon, proficiency: "Advanced" },
  { name: "Selenium", category: "Analytics & NLP", src: seleniumIcon, proficiency: "Proficient" },
  { name: "Power BI", category: "BI & Visualization", src: powerBiIcon, proficiency: "Advanced" },
  { name: "Looker Studio", category: "BI & Visualization", src: lookerIcon, proficiency: "Advanced" },
  { name: "Tableau", category: "BI & Visualization", src: tableauIcon, proficiency: "Proficient" },
  { name: "Spreadsheets", category: "Languages & Querying", src: spreadsheetsIcon, proficiency: "Advanced" },
  { name: "GA4", category: "Tracking & Web", src: ga4Icon, proficiency: "Proficient" },
  { name: "GTM", category: "Tracking & Web", src: gtmIcon, proficiency: "Proficient" },
];

const categories = ["All", "Languages & Querying", "Analytics & NLP", "BI & Visualization", "Tracking & Web"] as const;

const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredTools =
    activeCategory === "All" ? tools : tools.filter((t) => t.category === activeCategory);

  return (
    <section id="tech-stack" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-xs font-mono font-bold tracking-widest text-cyan-500 uppercase px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            Tooling Matrix
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-foreground mt-4 mb-4">
            Analytics & Data Engineering Stack
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Technologies and frameworks I utilize daily to engineer pipelines, extract insights, and deliver interactive reporting.
          </p>
        </motion.div>

        {/* Category Filters */}
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

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {filteredTools.map((tool, idx) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -6, scale: 1.05 }}
              className="group relative p-6 rounded-2xl bg-card/60 backdrop-blur-xl border border-border/80 hover:border-cyan-500/50 shadow-lg flex flex-col items-center justify-center text-center transition-all duration-300"
            >
              <div className="relative w-14 h-14 mb-3 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-cyan-500/10 group-hover:bg-cyan-500/20 blur-md transition-colors" />
                <img
                  src={tool.src}
                  alt={tool.name}
                  className="relative z-10 w-10 h-10 object-contain drop-shadow-md transition-transform group-hover:scale-110"
                />
              </div>

              <span className="font-bold text-sm text-foreground mb-1 group-hover:text-cyan-500 transition-colors">
                {tool.name}
              </span>

              <span className="text-[10px] font-mono text-muted-foreground bg-muted/80 px-2 py-0.5 rounded-full border border-border/40">
                {tool.proficiency}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
