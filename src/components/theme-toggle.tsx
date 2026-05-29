"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className={`w-9 h-9 rounded-full border border-white/10 ${className}`} />
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={`
        flex items-center justify-center w-9 h-9 rounded-full
        border border-white/10 dark:border-white/10 dark:hover:border-white/25
        light:border-black/10 light:hover:border-black/25
        bg-white/5 hover:bg-white/10 dark:bg-white/5 dark:hover:bg-white/10
        text-foreground/70 hover:text-foreground
        transition-all duration-200
        ${className}
      `}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun size={16} strokeWidth={1.5} />
      ) : (
        <Moon size={16} strokeWidth={1.5} />
      )}
    </button>
  );
}
