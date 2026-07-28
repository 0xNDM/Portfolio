import { motion } from "framer-motion";
import { GraduationCap, Award, ExternalLink, CheckCircle2, BookOpen, ShieldCheck } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-mono font-bold tracking-widest text-cyan-500 uppercase px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            Academic & Professional Background
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-foreground mt-4 mb-4">
            Education & Certifications
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            A strong quantitative foundation in economics paired with industry-verified data analytics certification.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Academic Degree Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative p-8 rounded-3xl bg-card/60 backdrop-blur-xl border border-border/80 hover:border-cyan-500/50 shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3.5 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <span className="text-xs font-mono text-cyan-500 font-bold px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                  DEGREE
                </span>
              </div>

              <h3 className="text-2xl font-bold font-display text-foreground mb-1 group-hover:text-cyan-500 transition-colors">
                BA in Economics
              </h3>
              <p className="text-sm font-semibold text-muted-foreground mb-4 font-mono">
                Bahir Dar University
              </p>

              <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                Specialized in econometrics, statistical modeling, data collection methodologies, and quantitative economic policy evaluation.
              </p>

              <div className="space-y-2 pt-4 border-t border-border/60">
                <div className="flex items-center gap-2 text-xs font-medium text-foreground/90">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                  <span>Econometric Modeling & Micro/Macro Analysis</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-foreground/90">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                  <span>Quantitative Data Collection & Survey Sampling</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-foreground/90">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                  <span>Statistical Software & Empirical Research</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Professional Credential Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="group relative p-8 rounded-3xl bg-card/60 backdrop-blur-xl border border-border/80 hover:border-indigo-500/50 shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3.5 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-lg">
                  <Award className="w-7 h-7" />
                </div>
                <span className="text-xs font-mono text-indigo-400 font-bold px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                  VERIFIED CREDENTIAL
                </span>
              </div>

              <h3 className="text-2xl font-bold font-display text-foreground mb-1 group-hover:text-indigo-400 transition-colors">
                Google Data Analytics Professional
              </h3>
              <p className="text-sm font-semibold text-muted-foreground mb-4 font-mono">
                Google & Coursera · Credly Badge
              </p>

              <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                8-course intensive program covering data cleaning, SQL query optimization, R programming, Tableau visualization, and case study execution.
              </p>

              <div className="space-y-2 pt-4 border-t border-border/60 mb-8">
                <div className="flex items-center gap-2 text-xs font-medium text-foreground/90">
                  <ShieldCheck className="w-4 h-4 text-indigo-400" />
                  <span>Verified Credly Digital Badge</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-foreground/90">
                  <ShieldCheck className="w-4 h-4 text-indigo-400" />
                  <span>Hands-on SQL, R, and Tableau Capstone</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-foreground/90">
                  <ShieldCheck className="w-4 h-4 text-indigo-400" />
                  <span>Structured Problem Solving & Stakeholder Storytelling</span>
                </div>
              </div>
            </div>

            <a
              href="https://www.credly.com/badges/32376f86-62aa-4e01-b6ea-8daf88ea65ec/public_url"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold text-xs shadow-md shadow-indigo-500/20 transition-all hover:scale-[1.02]"
            >
              <span>Verify Credential on Credly</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
