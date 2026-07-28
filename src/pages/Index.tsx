import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import WorkflowSection from "@/components/WorkflowSection";
import Skills from "@/components/Skills";
import TechStack from "@/components/TechStack";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import AnimatedBackground from "@/components/AnimatedBackground";
import CursorEffect from "@/components/CursorEffect";
import ScrollProgress from "@/components/ScrollProgress";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-cyan-500/20 selection:text-cyan-400">
      <ScrollProgress />
      <Header />
      <AnimatedBackground />
      <CursorEffect />
      <main>
        <Hero />
        <Projects />
        <WorkflowSection />
        <Skills />
        <TechStack />
        <Education />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
