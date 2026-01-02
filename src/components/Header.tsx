import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "tech-stack", label: "Tech Stack" },
  { id: "contact", label: "Contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      // glass background toggle
      setScrolled(y > 20);
      // hide on scroll down, show on scroll up or at top
      if (y <= 50) {
        setHidden(false);
      } else if (y > lastY) {
        setHidden(true);
      } else if (y < lastY) {
        setHidden(false);
      }
      lastY = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      // calculate offset so the section is visible below the fixed header
      const headerEl = document.querySelector('header');
      const headerHeight = headerEl ? (headerEl as HTMLElement).offsetHeight : 64;
      const top = el.getBoundingClientRect().top + window.scrollY - headerHeight - 8;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const handleLogoClick = () => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    // slightly higher z-index and ensure header content has right padding on md+ to avoid overlap with fixed controls
    <header className={`fixed inset-x-0 top-0 z-[10001] transition-all duration-300 ${scrolled ? "backdrop-blur-md bg-white/60 dark:bg-black/40 border-b border-border/30" : "bg-transparent"} ${hidden ? "-translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:pr-12 lg:pr-16">
          <div className="flex items-center">
            <Link to="/" className="text-lg font-bold cursor-pointer select-none" onClick={handleLogoClick}>Nathnael</Link>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-sm font-medium text-foreground/90 hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <div className="md:hidden">
            <button onClick={() => setOpen(true)} aria-label="Open menu" className="p-2 relative z-[10001] bg-card/80 backdrop-blur-sm rounded-md border border-border/30">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/30 dark:bg-black/40 z-[10000]"
            />

            <motion.aside
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed inset-y-0 right-0 w-64 bg-card/90 dark:bg-card/90 backdrop-blur-lg border-l border-border/50 z-[10001]"
            >
            <div className="flex items-center justify-between p-4">
              <div className="text-lg font-bold">Menu</div>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2">
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="px-4 py-2 flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="text-left px-3 py-2 rounded-md hover:bg-primary/10 transition-colors font-medium"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
