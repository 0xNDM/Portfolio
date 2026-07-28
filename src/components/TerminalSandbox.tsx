import { useState } from "react";
import { Terminal, Play, CheckCircle2, Copy, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const codeSnippets = {
  sql: {
    filename: "progear_funnel_analysis.sql",
    language: "sql",
    code: `-- SQL Window Functions: Conversion & Drop-off Rates
WITH CampaignFunnel AS (
    SELECT 
        campaign_id,
        COUNT(DISTINCT user_id) AS total_reach,
        SUM(clicked) AS total_clicks,
        SUM(purchased) AS total_conversions
    FROM progear_marketing_logs
    GROUP BY campaign_id
)
SELECT 
    campaign_id,
    ROUND(100.0 * total_clicks / total_reach, 2) AS ctr_pct,
    ROUND(100.0 * total_conversions / total_clicks, 2) AS conversion_pct
FROM CampaignFunnel
ORDER BY conversion_pct DESC;`,
    output: `[SUCCESS] Query executed in 14ms (4 rows returned)

campaign_id | ctr_pct | conversion_pct | status
--------------------------------------------------
CAMP_2024_A | 14.82%  | 9.60%          | HIGHEST ROI
CAMP_2024_B |  8.15%  | 5.40%          | UNDERPERFORMING
CAMP_2025_A |  4.20%  | 2.10%          | NEEDS OPTIMIZATION`,
  },
  python: {
    filename: "nlp_sentiment_score.py",
    language: "python",
    code: `# Python BERT Sentiment Classifier
from transformers import pipeline
import pandas as pd

classifier = pipeline("sentiment-analysis", model="distilbert-base-uncased-finetuned-sst-2-english")

reviews = pd.read_csv("customer_reviews.csv")
reviews['sentiment'] = reviews['review_text'].apply(lambda x: classifier(x)[0]['label'])

print(reviews['sentiment'].value_counts(normalize=True))`,
    output: `[MODEL INFERENCE COMPLETE]
Processed 12,450 customer product reviews:

POSITIVE : 68.4% [Score: 0.94 avg confidence]
NEGATIVE : 21.2% [Score: 0.89 avg confidence - Key gap in sizing & returns]
NEUTRAL  : 10.4% [Score: 0.76 avg confidence]`,
  },
  json: {
    filename: "bdu_academic_kpi.json",
    language: "json",
    code: `{
  "dataset": "Bahir Dar University Class of 2025",
  "sample_size": 1749,
  "metrics": {
    "overall_pass_rate": "96.23%",
    "cgpa_exit_exam_correlation": 0.56,
    "top_performing_department": "Software Engineering",
    "intervention_triggers": ["GPA < 2.5", "Attendance < 80%"]
  }
}`,
    output: `[BI INSIGHT LOADED]
Summary metric card generated for Looker Studio dashboard.
Dataset: 1,749 students matched across 18 university departments.`,
  },
};

type SnippetKey = keyof typeof codeSnippets;

const TerminalSandbox = () => {
  const [activeTab, setActiveTab] = useState<SnippetKey>("sql");
  const [isRunning, setIsRunning] = useState(false);
  const [showOutput, setShowOutput] = useState(true);
  const [copied, setCopied] = useState(false);

  const snippet = codeSnippets[activeTab];

  const handleRun = () => {
    setIsRunning(true);
    setShowOutput(false);
    setTimeout(() => {
      setIsRunning(false);
      setShowOutput(true);
    }, 400);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(snippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-xl mx-auto rounded-2xl overflow-hidden border border-slate-700/60 bg-slate-950/90 text-slate-100 shadow-2xl shadow-cyan-950/30 font-mono text-xs">
      {/* Terminal Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-slate-400 font-sans text-xs flex items-center gap-1.5 ml-2">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>nathnael@analytics-workstation</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="p-1 rounded text-slate-400 hover:text-slate-200 transition-colors"
            title="Copy code"
          >
            {copied ? (
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-800 bg-slate-900/60 px-2 pt-2 gap-1 overflow-x-auto">
        {(Object.keys(codeSnippets) as SnippetKey[]).map((key) => {
          const item = codeSnippets[key];
          const isActive = activeTab === key;
          return (
            <button
              key={key}
              onClick={() => {
                setActiveTab(key);
                setShowOutput(true);
              }}
              className={`px-3 py-1.5 rounded-t-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                isActive
                  ? "bg-slate-950 text-cyan-400 border-t border-x border-slate-700/80 font-semibold"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
              }`}
            >
              <span className={key === "sql" ? "text-cyan-400" : key === "python" ? "text-amber-400" : "text-violet-400"}>
                ●
              </span>
              {item.filename}
            </button>
          );
        })}
      </div>

      {/* Code Area */}
      <div className="p-4 bg-slate-950 overflow-x-auto max-h-56">
        <pre className="text-slate-300 leading-relaxed font-mono">
          <code>{snippet.code}</code>
        </pre>
      </div>

      {/* Action & Output Controls */}
      <div className="flex items-center justify-between px-4 py-2 bg-slate-900/90 border-t border-slate-800">
        <button
          onClick={handleRun}
          disabled={isRunning}
          className="flex items-center gap-1.5 px-3 py-1 rounded bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white text-xs font-sans font-bold transition-all shadow-md active:scale-95 disabled:opacity-50"
        >
          <Play className="w-3 h-3 fill-current" />
          <span>{isRunning ? "Running..." : "Run Analytics"}</span>
        </button>

        <span className="text-[11px] text-slate-400 flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-cyan-400" /> Live Data Sandbox
        </span>
      </div>

      {/* Output Console */}
      <AnimatePresence mode="wait">
        {showOutput && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="p-4 bg-slate-900/80 border-t border-slate-800 text-emerald-300 font-mono text-[11px] leading-normal"
          >
            <pre className="whitespace-pre-wrap">{snippet.output}</pre>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TerminalSandbox;
