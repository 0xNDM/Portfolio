import Header from "@/components/Header";
import AnimatedBackground from "@/components/AnimatedBackground";
import CursorEffect from "@/components/CursorEffect";
import DarkModeToggle from "@/components/DarkModeToggle";
import ScrollProgress from "@/components/ScrollProgress";
import { Button } from "@/components/ui/button";
import ywhImg from "@/assets/Images/ywh.png";
import ywhImg2 from "@/assets/Images/ywh-2.png";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectYWH = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Header />
      <AnimatedBackground />
      <CursorEffect />
      <DarkModeToggle />

      <main className="container mx-auto px-4 pt-32 pb-16 max-w-5xl">
        <div className="flex items-center gap-3 mb-6">
          <Link to="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back home
          </Link>
        </div>

        <div className="mb-6">
          <p className="text-sm uppercase tracking-[0.2em] text-primary/80 font-semibold">Featured Project</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-3">YouTube Watch-History Analysis</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            An end-to-end analysis of personal YouTube watch history to uncover habits, viewing trends, and content preferences. Includes parsing raw takeout data, cleaning timestamps, classifying channels, and building visuals that highlight engagement patterns.
          </p>
        </div>

        <div className="mt-10 space-y-6">
          <h2 className="text-2xl font-semibold">Visual walkthrough</h2>
          <div className="space-y-6">
            <div className="rounded-3xl overflow-hidden bg-card/60 border border-border/70 shadow-2xl">
              <img
                src={ywhImg}
                alt="YouTube Watch-History overview"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-3xl overflow-hidden bg-card/60 border border-border/70 shadow-2xl">
              <img
                src={ywhImg2}
                alt="YouTube Watch-History deep dive"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Button asChild variant="outline">
            <a href="https://github.com/0xNDM/YooTube_Watch-history_Analysis" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" /> Github — Python + SQL repo for collection, cleaning, analysis, and EDA
            </a>
          </Button>
        </div>

        <div className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold">YooTube_Watch-history_Analysis</h2>
          <p className="text-muted-foreground">
            I cleaned, enriched, and anonymized my personal YouTube watch history from two accounts to tell a data story for 2025. The workflow turns raw Google Takeout exports into analysis-ready, anonymized tables and activity scores.
          </p>

          <div className="grid gap-6 md:grid-cols-2 bg-card/50 border border-border/60 rounded-2xl p-6 shadow-md">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Data sources</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Google Takeout watch history exports for each account</li>
                <li>YouTube Data API v3 for titles, channels, durations, categories, views, and likes</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Highlights</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Collection and merge of multi-account histories</li>
                <li>Cleaning, timestamp normalization, and anonymization</li>
                <li>Activity scoring with daily watch hours and frequency</li>
              </ul>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Processing steps</h3>
            <ol className="list-decimal list-inside text-muted-foreground space-y-1">
              <li>Collect: Parse Takeout JSON and fetch metadata via YouTube Data API (cached).</li>
              <li>Combine: Merge per-account tables into one timeline with account tags.</li>
              <li>Clean & Filter: Standardize timestamps, remove livestreams/outliers, keep 2025 watches.</li>
              <li>Normalize Time: Convert to SQL-friendly datetimes and floor to the nearest hour.</li>
              <li>Anonymize: Replace identifiers with generated IDs and mask non-top channels.</li>
              <li>Validate Quality: Drop rows with missing channel or duration info.</li>
              <li>Enrich: Add hour buckets, day-of-week labels, and content types (short vs long).</li>
              <li>Score Activity: Compute daily watch hours, frequency, and percentile-capped scores.</li>
            </ol>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Methodological notes</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Removed/private videos are excluded when fields are missing.</li>
              <li>Watch history captures start times only; offline downloads help reduce duration bias.</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button asChild variant="outline">
            <a href="https://github.com/0xNDM/YooTube_Watch-history_Analysis" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" /> View repo & procedures
            </a>
          </Button>
          <Button asChild>
            <Link to="/projects/ywh" aria-current="page">You are here</Link>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default ProjectYWH;
