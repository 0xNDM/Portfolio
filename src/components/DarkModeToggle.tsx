import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle dark mode"
      className="p-2 rounded-full bg-muted/80 dark:bg-slate-800/80 hover:bg-muted border border-border/60 text-foreground transition-all duration-200 hover:scale-105 active:scale-95 flex items-center justify-center"
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-amber-500" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-cyan-400" />
    </button>
  );
};

export default DarkModeToggle;
