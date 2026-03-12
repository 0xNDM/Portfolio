import Header from "@/components/Header";
import AnimatedBackground from "@/components/AnimatedBackground";
import CursorEffect from "@/components/CursorEffect";
import DarkModeToggle from "@/components/DarkModeToggle";
import ScrollProgress from "@/components/ScrollProgress";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import proGearVideo from "@/assets/Videos/ProGear_Marketing_Analytics_video.mp4";

const techStack = ["SQL Server", "Python", "Transformers", "Power BI"];

const methodologyStages = [
  {
    title: "Data Sources",
    description: "Campaigns, engagement logs, customer journeys, product data, and reviews consolidated into a single analytical model.",
  },
  {
    title: "SQL Cleaning & Engineering",
    description: "Deduplication, segmentation, and feature engineering to produce trusted, analysis-ready tables.",
  },
  {
    title: "Python NLP Sentiment Modeling",
    description: "Transformer-based sentiment scoring to enrich reviews beyond star ratings.",
  },
  {
    title: "Power BI Dashboard",
    description: "Interactive views for funnel, engagement, demographic, and product performance monitoring.",
  },
  {
    title: "Business Insights",
    description: "Actionable insights, prioritization, and recommendations tied to revenue impact.",
  },
];

const insights = [
  "Conversion rate: While the 9.6% aggregate conversion rate shows strong buyer intent, the decline from 11.6% (2023) to 8.6% (2025) reveals a 25.8% erosion in sales efficiency that must be addressed through better funnel optimization.",
  "Customer engagement: Total reach and Click-Through Rate collapsed by 80% and 68% respectively over the last two years, suggesting our current content strategy is no longer resonating despite sustained financial investment.",
  "Marketing spend efficiency: Efficiency is deteriorating, with high reach not translating into proportional clicks or purchases.",
  "Customer satisfaction: Satisfaction is moderate (avg rating 3.69), with a meaningful negative sentiment share that may be suppressing conversions.",
  "Performance gaps: Gaps across products and demographics reveal clear opportunities for targeted optimization and budget reallocation.",
];

const ProGear = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Header />
      <AnimatedBackground />
      <CursorEffect />
      <DarkModeToggle />

      <main className="container mx-auto px-4 pt-32 pb-20 max-w-6xl">
        <div className="flex items-center gap-3 mb-6">
          <Link
            to="/"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1" /> Back home
          </Link>
        </div>

        <section className="mb-10">
          <p className="text-sm uppercase tracking-[0.2em] text-primary/80 font-semibold">Featured Project</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Marketing Performance & Customer Insights Analysis - ProGear Sports</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            End-to-end marketing analytics project analyzing declining engagement and conversion using SQL, Python NLP, and Power BI.
          </p>

          <div className="flex flex-wrap gap-2 mt-5">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mt-6">
            <Button asChild className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground">
              <a href="https://github.com/0xNDM/ProGear_Sports_Marketing_Analytics/tree/main" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" /> View GitHub Repo
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="/progear/Marketing_Analytics_Dashboard.pbix" download>
                <Download className="w-4 h-4 mr-2" /> Download Dynamic Dashboard (PBIX)
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="/progear/Marketing_Analytics_Report.pptx" download>
                <Download className="w-4 h-4 mr-2" /> Download Full Report (PPT)
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="/progear/Marketing_Analytics_Static_Dashboard.pdf" download="Marketing_Analytics_Static_Dashboard.pdf">
                <Download className="w-4 h-4 mr-2" /> Download Static Dashboard (PDF)
              </a>
            </Button>
          </div>
        </section>

        <section className="grid gap-10">
          <div className="grid gap-6 md:grid-cols-2 bg-card/50 border border-border/60 rounded-2xl p-6">
            <div>
              <h2 className="text-xl font-semibold mb-3">Problem Statement</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Conversion rate declined from 11.6% (2023) to 8.6% (2025), a 25.8% drop in sales efficiency</li>
                <li>Total reach dropped 80% over two years</li>
                <li>Click-Through Rate declined 68%</li>
                <li>Marketing spend is not translating into proportional conversions</li>
                <li>Customer satisfaction is moderate (Avg rating 3.69) with negative sentiment risk</li>
                <li>Product and demographic performance gaps exist</li>
                <li>Limited visibility into funnel inefficiencies</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-3">Executive Summary</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Conducted end-to-end marketing analytics across engagement, conversion, and review data</li>
                <li>Identified 25.8% erosion in conversion efficiency</li>
                <li>Detected severe engagement decline despite sustained marketing investment</li>
                <li>Applied transformer-based NLP to enhance sentiment analysis</li>
                <li>Discovered spend inefficiencies and product-level optimization opportunities</li>
                <li>Delivered prioritized, data-driven business recommendations</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Key Analytics Components</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-card/50 border border-border/60 rounded-2xl p-5">
                <p className="text-lg font-semibold">1. Marketing Campaign Performance Analysis</p>
                <p className="text-muted-foreground mt-2">
                  Evaluated reach, CTR, and conversion efficiency across channels.
                </p>
                <p className="text-muted-foreground mt-2">
                  Identified deterioration in campaign performance over time.
                </p>
              </div>
              <div className="bg-card/50 border border-border/60 rounded-2xl p-5">
                <p className="text-lg font-semibold">2. Conversion Funnel Analysis</p>
                <p className="text-muted-foreground mt-2">Tracked journey from engagement -&gt; purchase.</p>
                <p className="text-muted-foreground mt-2">
                  Identified declining funnel efficiency between 2023 and 2025.
                </p>
              </div>
              <div className="bg-card/50 border border-border/60 rounded-2xl p-5">
                <p className="text-lg font-semibold">3. Customer Segmentation</p>
                <p className="text-muted-foreground mt-2">
                  Built demographic segmentation using age groups and geography.
                </p>
                <p className="text-muted-foreground mt-2">Analyzed engagement patterns by segment.</p>
              </div>
              <div className="bg-card/50 border border-border/60 rounded-2xl p-5">
                <p className="text-lg font-semibold">4. Customer Sentiment Analysis</p>
                <p className="text-muted-foreground mt-2">
                  Used transformer NLP to analyze product reviews.
                </p>
                <p className="text-muted-foreground mt-2">
                  Identified sentiment distribution across demographics and products.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Video Demonstration</h2>
            <div className="rounded-3xl overflow-hidden bg-card/60 border border-border/70 shadow-2xl">
              <video className="w-full h-auto" controls preload="metadata">
                <source src={proGearVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Methodology</h2>
            <div className="grid gap-4 md:grid-cols-5">
              {methodologyStages.map((stage) => (
                <div key={stage.title} className="bg-card/50 border border-border/60 rounded-2xl p-4 h-full">
                  <p className="text-sm uppercase tracking-[0.15em] text-primary/70 font-semibold">{stage.title}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{stage.description}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted-foreground">Data Sources → SQL Cleaning & Engineering → Python NLP Sentiment Modeling → Power BI Dashboard → Business Insights</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">Representative SQL Transformations</h2>
            <p className="text-muted-foreground mb-4">
              Below are representative examples from a broader SQL data engineering pipeline used to clean, deduplicate, and enrich raw marketing and customer journey data.
            </p>

            <div className="grid gap-4">
              <pre className="bg-slate-950/90 text-slate-100 rounded-2xl p-4 overflow-x-auto text-sm border border-slate-800">
                <code>{`-- Retrieve customer details along with their geographic location
select c.CustomerID, c.CustomerName, c.Email, c.Gender, c.Age, g.Country, g.City,
            CASE
                when c.Age < 18 then '< 18'
                when c.Age between 18 and 30 then '18 - 30'
                when c.Age between 31 and 45 then '31 - 45'
                when c.Age between 46 and 65 then '46 - 65'
                else '65+'
            END as AgeGroup
from customers c
left join  geography g
    on c.GeographyID = g.GeographyID;`}</code>
              </pre>

              <pre className="bg-slate-950/90 text-slate-100 rounded-2xl p-4 overflow-x-auto text-sm border border-slate-800">
                <code>{`-- Remove duplicate journey records and impute missing duration
select
  JourneyID,
  CustomerID,
  ProductID,
  VisitDate,
  Stage,
  Action,
  COALESCE(Duration, Avg_duration) as Duration
from (
  select *,
    AVG(Duration) over (partition by VisitDate) as Avg_duration,
    ROW_NUMBER() over (
      PARTITION BY CustomerID, ProductID, VisitDate, Stage, Action
      ORDER BY JourneyID
    ) as row_num
  from customer_journey
) as subquery
where row_num = 1;`}</code>
              </pre>
            </div>

            <p className="text-sm text-muted-foreground mt-3">These snippets represent key components of a larger transformation workflow.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">Transformer-Based Sentiment Modeling</h2>
            <p className="text-muted-foreground mb-4">
              To move beyond star ratings, a transformer-based model was applied to review text to generate weighted sentiment scores for deeper behavioral analysis.
            </p>

            <pre className="bg-slate-950/90 text-slate-100 rounded-2xl p-4 overflow-x-auto text-sm border border-slate-800">
              <code>{`# Load data
customer_reviews_df = fetch_data_from_sql()

sentiment_model = pipeline(
    "sentiment-analysis",
    model="cardiffnlp/twitter-roberta-base-sentiment",
    top_k=None
)

weights = {"LABEL_0": -1, "LABEL_1": 0, "LABEL_2": 1}

def analyze_sentiment(text):
    result = sentiment_model(text)[0]
    weighted_score = sum(weights[d['label']] * d['score'] for d in result)
    return weighted_score`}</code>
            </pre>

            <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-3">
              <li>Converts probability outputs into continuous weighted sentiment scores</li>
              <li>Captures nuance beyond rating-based classification</li>
              <li>Enables advanced segmentation in Power BI</li>
            </ul>
            <p className="text-sm text-muted-foreground mt-3">This snippet represents a key component of the full analytics pipeline.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Key Insights</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              {insights.map((insight) => (
                <li key={insight}>{insight}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Recommendations</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="bg-card/50 border border-border/60 rounded-2xl p-5">
                <h3 className="text-lg font-semibold mb-2">Immediate Actions</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Optimize checkout experience: reduce friction steps, improve payment options, strengthen trust signals, clarify delivery and returns</li>
                  <li>Bridge the traffic gap with aggressive CTA overlays on high-performing social content to convert "Likes" into "Website Visits"</li>
                  <li>Reallocate budget away from high-reach, low-conversion items (e.g., Basketball) toward high-intent products like Ski Boots and Hockey Sticks to maximize ROI</li>
                  <li>Leverage social proof by integrating 5-star customer reviews into ad creatives to rebuild trust and interest</li>
                </ul>
              </div>
              <div className="bg-card/50 border border-border/60 rounded-2xl p-5">
                <h3 className="text-lg font-semibold mb-2">Medium-Term Optimization</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Address seasonal attrition by investigating the 48% decline in engagement from January to December and building a Q4 retention and re-engagement campaign</li>
                  <li>Improve traffic quality by tightening audience targeting on social media and reducing low-intent reach campaigns</li>
                  <li>Segment campaigns by demographics and align marketing with seasonal demand</li>
                </ul>
              </div>
              <div className="bg-card/50 border border-border/60 rounded-2xl p-5">
                <h3 className="text-lg font-semibold mb-2">Strategic Growth Initiatives</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Elevate customer experience to push rating above 4.0 for long-term conversion lift</li>
                  <li>Prioritize high-conversion, high-margin SKUs</li>
                  <li>Develop new and creative marketing campaigns to reignite engagement</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-card/50 border border-border/60 rounded-2xl p-6">
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="outline" className="whitespace-nowrap">
                <a href="/progear/Marketing_Analytics_Dashboard.pbix" download>
                  <Download className="w-4 h-4 mr-2" /> Download Dynamic Dashboard (PBIX)
                </a>
              </Button>
              <Button asChild variant="outline" className="whitespace-nowrap">
                <a href="/progear/Marketing_Analytics_Report.pptx" download>
                  <Download className="w-4 h-4 mr-2" /> Download Full Report (PPT)
                </a>
              </Button>
              <Button asChild variant="outline" className="whitespace-nowrap">
                <a href="/progear/Marketing_Analytics_Static_Dashboard.pdf" download="Marketing_Analytics_Static_Dashboard.pdf">
                  <Download className="w-4 h-4 mr-2" /> Download Static Dashboard (PDF)
                </a>
              </Button>
              <Button asChild className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground">
                <a href="https://github.com/0xNDM/ProGear_Sports_Marketing_Analytics/tree/main" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" /> View GitHub Repository
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProGear;
