import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Sparkles, Send, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import DarkModeToggle from "./DarkModeToggle";

const navItems = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "workflow", label: "Approach" },
  { id: "skills", label: "Skills" },
  { id: "tech-stack", label: "Tech Stack" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return false;

    const headerHeight = 80;
    const top = el.getBoundingClientRect().top + window.scrollY - headerHeight;
    window.scrollTo({ top, behavior: "smooth" });
    return true;
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Intersection / active section detector
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setOpen(false);
    if (scrollToSection(id)) return;
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (location.pathname !== "/" || !location.hash) return;
    const id = decodeURIComponent(location.hash.replace("#", ""));
    const timer = window.setTimeout(() => {
      scrollToSection(id);
    }, 50);
    return () => window.clearTimeout(timer);
  }, [location.pathname, location.hash]);

  return (
    <header className="fixed inset-x-0 top-0 z-[9990] transition-all duration-300 py-3 md:py-4 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div
          className={`flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full transition-all duration-300 ${
            scrolled
              ? "bg-background/85 dark:bg-card/85 backdrop-blur-xl border border-border/80 shadow-lg shadow-black/5"
              : "bg-background/40 dark:bg-card/40 backdrop-blur-md border border-border/40"
          }`}
        >
          {/* Logo */}
          <a
            href="/"
            onClick={handleLogoClick}
            className="flex items-center gap-2 group cursor-pointer select-none"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-cyan-500 via-indigo-500 to-amber-500 p-0.5 shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-background dark:bg-slate-950 rounded-full flex items-center justify-center">
                <span className="font-bold text-xs bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                  ND
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base tracking-tight text-foreground font-display flex items-center gap-1">
                Nathnael <span className="text-cyan-500 font-mono text-sm">.me</span>
              </span>
              <span className="text-[10px] text-muted-foreground font-mono leading-none -mt-0.5 hidden sm:inline">
                Analytics & Insights
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-muted/50 dark:bg-slate-900/60 p-1 rounded-full border border-border/50">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-foreground font-bold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-background dark:bg-card rounded-full shadow-sm border border-border/60"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action buttons */}
          <div className="flex items-center gap-3">
            <DarkModeToggle />

            <button
              onClick={() => handleNavClick("contact")}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20 hover:opacity-95 hover:scale-105 active:scale-95 transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Let's Connect</span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="lg:hidden p-2 rounded-full bg-muted/60 dark:bg-slate-800/80 border border-border/60 text-foreground"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9995]"
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 350, damping: 32 }}
              className="fixed inset-y-0 right-0 w-72 bg-card/95 backdrop-blur-2xl border-l border-border/80 z-[9999] flex flex-col justify-between p-6 shadow-2xl"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-border/60">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-cyan-500" />
                    <span className="font-bold font-display text-lg">Navigation</span>
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    className="p-2 rounded-full bg-muted text-foreground"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="py-6 flex flex-col gap-2">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`text-left px-4 py-3 rounded-xl font-medium text-sm transition-all flex items-center justify-between ${
                        activeSection === item.id
                          ? "bg-cyan-500/10 text-cyan-500 font-semibold border border-cyan-500/20"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      <span>{item.label}</span>
                      {activeSection === item.id && (
                        <span className="w-2 h-2 rounded-full bg-cyan-500" />
                      )}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="pt-6 border-t border-border/60 flex flex-col gap-3">
                <button
                  onClick={() => handleNavClick("contact")}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-bold text-sm shadow-lg shadow-cyan-500/20"
                >
                  <Send className="w-4 h-4" />
                  <span>Get in Touch</span>
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
