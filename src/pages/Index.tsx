import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import TechStack from "@/components/TechStack";
import AnimatedBackground from "@/components/AnimatedBackground";
import CursorEffect from "@/components/CursorEffect";
import DarkModeToggle from "@/components/DarkModeToggle";
import ScrollProgress from "@/components/ScrollProgress";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Header />
      <AnimatedBackground />
      <CursorEffect />
      <DarkModeToggle />
      <Hero />
      <About />
      <Skills />
      <Education />
  <Projects />
  <TechStack />
  <Contact />
    </div>
  );
};

export default Index;
