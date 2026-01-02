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
            A 2025 data story built from two YouTube accounts (Main + Educational). I cleaned, enriched, and anonymized Google Takeout history, pulled full metadata via the YouTube Data API, and scored daily activity to reveal how, when, and what I watched.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 bg-card/50 border border-border/60 rounded-2xl p-4 md:p-6 shadow-md">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground uppercase tracking-[0.15em]">Scope</p>
            <p className="text-lg font-semibold">2025 Personal YouTube watch history</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground uppercase tracking-[0.15em]">Stack</p>
            <p className="text-lg font-semibold">Python, pandas, YouTube Data API, SQL, calplot, Power BI</p>
          </div>
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
            A reproducible workflow that turns raw Google Takeout exports into anonymized, analysis-ready tables plus daily activity scores. Two accounts are merged, enriched with YouTube Data API v3 metadata, and scored to surface viewing habits without leaking sensitive identifiers.
          </p>

          <div className="grid gap-6 md:grid-cols-2 bg-card/50 border border-border/60 rounded-2xl p-6 shadow-md">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Data sources</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Google Takeout watch history exports per account</li>
                <li>YouTube Data API v3 for titles, channels, durations, categories, views, and likes</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">What you get</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Anonymized, timestamp-normalized watch tables for 2025</li>
                <li>Daily activity scores (70% hours, 30% frequency, percentile-capped)</li>
                <li>Intermediate checkpoints for transparency</li>
              </ul>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Workflow at a glance</h3>
            <ol className="list-decimal list-inside text-muted-foreground space-y-1">
              <li>Collect: Parse Takeout JSON and fetch metadata via YouTube Data API, caching responses.</li>
              <li>Combine: Build per-account tables, tag each row, and merge into one timeline.</li>
              <li>Clean & Filter: Standardize timestamps, drop livestreams/outliers, keep 2025 watches.</li>
              <li>Normalize Time: Convert to SQL-friendly datetimes and floor to the nearest hour.</li>
              <li>Anonymize: Replace video IDs/URLs with generated IDs and mask non-top channels.</li>
              <li>Validate Quality: Exclude rows missing channel or duration info (e.g., removed/private).</li>
              <li>Enrich: Add local hour buckets, day-of-week labels, and short vs long-form tags.</li>
              <li>Score Activity: Compute daily hours + frequency with percentile caps to tame extremes.</li>
            </ol>
          </div>

          <div className="grid gap-4 md:grid-cols-2 bg-card/40 border border-border/50 rounded-2xl p-6 shadow-sm">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Quickstart (rerun or adapt)</h3>
              <ol className="list-decimal list-inside text-muted-foreground space-y-1">
                <li>Set up a Python env (e.g., `analytics`) and install pandas, requests, python-dotenv, matplotlib, calplot.</li>
                <li>Add a `.env` with `YT_API=your_youtube_api_key`.</li>
                <li>Drop your Takeout `watch-history.json` files (per account) into the working directory.</li>
                <li>Fetch metadata once to cache titles, channels, durations, categories, views, and likes.</li>
                <li>Build per-account tables, tag, merge, dedupe non-music titles, and remove livestreams/outliers.</li>
                <li>Normalize timestamps to SQL-friendly datetimes and floor to the hour.</li>
                <li>Anonymize IDs/URLs, mask non-top channels, and drop rows lacking reliable duration/channel info.</li>
                <li>Compute daily watch hours + frequency and produce percentile-capped activity scores.</li>
              </ol>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Outputs</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Final 2025 anonymized table with local hour + day-of-week features</li>
                <li>Daily activity score table with hours, frequency, and levels</li>
                <li>Visualization-ready CSVs for dashboards/plots</li>
              </ul>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Methodological notes</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Removed/private videos (~4–26% of events) are excluded because they lack reliable metadata.</li>
              <li>Watch history logs start times only; I often download long videos for offline viewing, reducing overestimation bias.</li>
              <li>Activity score weighting: 70% daily hours, 30% frequency, with percentile caps to blunt extreme sessions.</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button asChild variant="outline">
            <a href="https://github.com/0xNDM/YooTube_Watch-history_Analysis" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" /> Github — Python + SQL repo for collection, cleaning, analysis, and EDA
            </a>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default ProjectYWH;
