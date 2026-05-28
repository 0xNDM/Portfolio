import Header from "@/components/Header";
import AnimatedBackground from "@/components/AnimatedBackground";
import CursorEffect from "@/components/CursorEffect";
import DarkModeToggle from "@/components/DarkModeToggle";
import ScrollProgress from "@/components/ScrollProgress";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const BDU = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Header />
      <AnimatedBackground />
      <CursorEffect />
      <DarkModeToggle />

      <main className="container mx-auto px-4 pt-32 pb-20 max-w-6xl min-w-[1024px]">
        <div className="flex items-center gap-3 mb-6">
          <Link
            to="/"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1" /> Back home
          </Link>
        </div>

        <section className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Analyzing Academic Outcomes: Bahir Dar University Class of 2025 Performance Dashboard
          </h1>

          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-lg text-muted-foreground mb-6">
            <span className="font-bold">"Not a single student with a CGPA above 3.5 failed the exit exam."</span>
          </p>
          <p className="text-muted-foreground">
            This project explores the academic outcomes of 1,749 undergraduate students from Bahir Dar University’s
            Class of 2025 (Regular). The goal was to uncover patterns in student performance, specifically examining the
            relationship between internal university grading (CGPA) and standardized national exit exam scores. By
            transforming raw, messy data into structured insights and an interactive dashboard, this project provides a
            clear, high-level view of university-wide academic health, departmental variations, and predictive success
            metrics.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Key Metrics Uncovered:</h2>
          <ul className="list-disc list-outside text-muted-foreground space-y-2 ml-5">
            <li>
              <span className="font-semibold text-foreground">Total Candidates Analyzed:</span> 1,749
            </li>
            <li>
              <span className="font-semibold text-foreground">University-Wide Pass Rate:</span> 96.23%
            </li>
            <li>
              <span className="font-semibold text-foreground">Average CGPA:</span> 3.26 |{" "}
              <span className="font-semibold text-foreground">Average Exit Score:</span> 71.38
            </li>
            <li>
              <span className="font-semibold text-foreground">Correlation:</span> A clear positive correlation (0.56)
              between University GPA and Exit Exam Score.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h3 className="text-xl font-bold mb-4">Interactive Dashboard</h3>
          <div className="rounded-2xl overflow-hidden border border-border/60 bg-card/40">
            <iframe
              title="BDU Class of 2025 Performance Dashboard"
              width="100%"
              height="800"
              src="https://datastudio.google.com/embed/reporting/0affad0b-507d-464c-8311-46de71af4358/page/cCHsF"
              frameBorder={0}
              style={{ border: 0 }}
              allowFullScreen
              sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
            />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Tools & Technologies Used:</h2>
          <ul className="list-disc list-outside text-muted-foreground space-y-2 ml-5">
            <li>
              <span className="font-semibold text-foreground">Data Cleaning:</span> Microsoft Excel
            </li>
            <li>
              <span className="font-semibold text-foreground">Exploratory Data Analysis (EDA):</span> SQL
            </li>
            <li>
              <span className="font-semibold text-foreground">Data Visualization & BI:</span> Looker Studio
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">The Workflow: From Raw Data to Interactive Insights</h2>

          <div className="bg-card/50 border border-border/60 rounded-2xl p-6 mb-6">
            <h3 className="text-xl font-semibold mb-2">1. Data Privacy & Anonymization (Excel)</h3>
            <p className="text-muted-foreground">
              Handling student data requires strict ethical standards. Before any analysis began, the dataset was scrubbed
              of all Personally Identifiable Information (PII). Full names, phone numbers, and other sensitive details
              were removed entirely and replaced with uniquely generated Student IDs to ensure complete privacy while
              maintaining dataset integrity.
            </p>
          </div>

          <div className="bg-card/50 border border-border/60 rounded-2xl p-6 mb-6">
            <h3 className="text-xl font-semibold mb-2">2. Data Cleaning & Feature Selection (Excel)</h3>
            <p className="text-muted-foreground">
              The raw dataset required significant cleaning to ensure the accuracy of the final analysis. I identified and
              removed incomplete records that would skew the results, clearing out 21 rows missing Exit Exam scores, 183
              rows missing CGPAs, and 18 rows missing both. I also stripped out extraneous columns, keeping only the
              variables relevant to academic performance.
            </p>
          </div>

          <div className="bg-card/50 border border-border/60 rounded-2xl p-6 mb-6">
            <h3 className="text-xl font-semibold mb-2">3. Exploratory Data Analysis (SQL)</h3>
            <p className="text-muted-foreground mb-4">
              Before building the visual dashboard, I used SQL to rigorously explore the cleaned dataset and validate my
              core hypotheses. My SQL workflow included:
            </p>
            <ul className="list-disc list-outside text-muted-foreground space-y-2 ml-5">
              <li>
                <span className="font-semibold text-foreground">High-Level Aggregations:</span> Calculating foundational
                metrics like overall candidate counts, university-wide average CGPAs, and total pass ratios (scoring &gt;= 50).
              </li>
              <li>
                <span className="font-semibold text-foreground">Demographic & Structural Segmentation:</span> Grouping the
                data to compare average scores and graduation counts across different genders, academic units, and specific
                departments.
              </li>
              <li>
                <span className="font-semibold text-foreground">Distribution Ratios:</span> Calculating specific metrics
                like the female-to-male ratio within individual academic units to understand demographic spread.
              </li>
              <li>
                <span className="font-semibold text-foreground">Statistical Validation:</span> Writing advanced mathematical
                queries to manually calculate the Pearson correlation coefficient between CGPA and Exit Exam scores,
                mathematically proving the relationship before bringing the data into visualization software.
              </li>
            </ul>
          </div>

          <div className="bg-card/50 border border-border/60 rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-2">4. Visualization & Dashboard Design (Looker Studio)</h3>
            <p className="text-muted-foreground mb-4">
              Using the insights gathered from the SQL exploration, I developed an interactive dashboard designed for both
              high-level summaries and granular, department-level exploration. The dashboard features:
            </p>
            <ul className="list-disc list-outside text-muted-foreground space-y-2 ml-5">
              <li>
                <span className="font-semibold text-foreground">Dynamic KPI Scorecards:</span> Providing immediate
                visibility into Total Candidates, Average CGPA, Average Exit Score, and overall Pass Rate.
              </li>
              <li>
                <span className="font-semibold text-foreground">Correlation Analysis:</span> A scatter plot visualizing the
                correlation between CGPA and Exit Exam scores.
              </li>
              <li>
                <span className="font-semibold text-foreground">Demographic Breakdown:</span> Donut charts for gender
                distribution and bar charts categorizing students by CGPA ranges.
              </li>
              <li>
                <span className="font-semibold text-foreground">Departmental Deep Dives:</span> Dual charts highlighting the
                top 5 performing departments by exit score alongside a "Highest Fail Rates" chart to identify areas
                needing academic intervention.
              </li>
              <li>
                <span className="font-semibold text-foreground">Interactive Filters:</span> Dropdown menus allowing users
                to filter the entire dashboard by specific Academic Units or Departments.
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-2">
          <h2 className="text-2xl font-semibold mb-4">Key Insights & Conclusion</h2>
          <p className="text-muted-foreground">
            The data tells a compelling story of academic success at BDU. The most striking insight is the absolute 100%
            pass rate for high-achieving students (CGPA 3.5–4.0). While the overall pass rate is an impressive 96.23%,
            the dashboard and initial SQL exploration successfully highlight specific departments where fail rates are
            disproportionately high. This tool doesn't just display numbers; it provides academic administrators with the
            exact, statistically backed data needed to celebrate successes and target interventions where they are needed
            most.
          </p>
        </section>
      </main>
    </div>
  );
};

export default BDU;
