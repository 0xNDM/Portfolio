import { ArrowDown, Github, Linkedin, Mail, Sparkles, Award, ExternalLink, Database, BarChart3, ChevronRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profilePhoto from "@/assets/Images/photo.jpg";
import { motion } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const ref = useRef(null);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-[90vh] pt-32 pb-20 flex items-center justify-center overflow-hidden"
    >
      {/* Subtle background ambient blur */}
      <div className="absolute inset-0 z-0 opacity-15 dark:opacity-25 pointer-events-none">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover object-center filter blur-2xl scale-110"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/80 to-background z-0 pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Profile Photo Avatar & Status Badge */}
          <div className="relative mb-6 group cursor-pointer">
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-amber-500 blur-md opacity-70 group-hover:opacity-100 transition duration-500 animate-pulse-slow" />
            <img
              src={profilePhoto}
              alt="Nathnael Dagnaw"
              className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-background shadow-2xl transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 right-0 p-1.5 rounded-full bg-slate-950 border-2 border-background shadow-md">
              <span className="block w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
            </div>
          </div>

          {/* Status Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card/80 backdrop-blur-md border border-cyan-500/30 text-cyan-500 dark:text-cyan-400 text-xs font-semibold shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>Available for Analytics & Data Roles</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-display text-foreground max-w-4xl leading-[1.1] mb-6">
            Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-indigo-500 to-amber-400 bg-clip-text text-transparent">Nathnael Dagnaw</span>.
            <span className="block text-foreground/90 text-2xl sm:text-4xl lg:text-5xl font-bold mt-3">
              Turning Complex Data Into Actionable Insights.
            </span>
          </h1>

          {/* Sub-headline / Value Proposition */}
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed font-sans">
            I help organizations turn messy data into clear, actionable insights. From building robust pipelines to designing thoughtful visuals, I make sure every dataset tells a story you can trust and act on.
          </p>

          {/* Skill Feature Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10 text-xs font-medium">
            <span className="px-3.5 py-1.5 rounded-full bg-card/80 border border-border/80 text-foreground flex items-center gap-2 shadow-sm">
              <Database className="w-3.5 h-3.5 text-cyan-500" /> SQL & Python Analytics
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-card/80 border border-border/80 text-foreground flex items-center gap-2 shadow-sm">
              <BarChart3 className="w-3.5 h-3.5 text-indigo-500" /> Power BI & Looker Dashboards
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-card/80 border border-border/80 text-foreground flex items-center gap-2 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" /> NLP & Sentiment Modeling
            </span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all"
            >
              <span>Explore Featured Work</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="https://www.credly.com/badges/32376f86-62aa-4e01-b6ea-8daf88ea65ec/public_url"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-card/80 hover:bg-card border border-border/80 text-foreground font-semibold text-sm hover:border-cyan-500/50 transition-all shadow-sm"
            >
              <Award className="w-4 h-4 text-cyan-500" />
              <span>Google Credential</span>
              <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />
            </a>
          </div>

          {/* Social Links Row */}
          <div className="flex items-center gap-3 mt-10">
            <a
              href="https://www.linkedin.com/in/nathnaeldagnaw/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-full bg-card/60 hover:bg-cyan-500/10 border border-border/60 hover:border-cyan-500/50 text-foreground hover:text-cyan-500 transition-all shadow-sm"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/0xNDM/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 rounded-full bg-card/60 hover:bg-indigo-500/10 border border-border/60 hover:border-indigo-500/50 text-foreground hover:text-indigo-500 transition-all shadow-sm"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:hello@nathnael.me"
              aria-label="Email"
              className="p-3 rounded-full bg-card/60 hover:bg-amber-500/10 border border-border/60 hover:border-amber-500/50 text-foreground hover:text-amber-500 transition-all shadow-sm"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
