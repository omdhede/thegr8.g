"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navPages } from "@/lib/nav-pages";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNavClick = (name: typeof navPages[number]["name"], id: string) => {
    setActiveSection(name);
    setTimeOfLastClick(Date.now());
    setMenuOpen(false);
  };

  return (
    <>
      {/* ── Desktop nav ─────────────────────────────────────────── */}
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-[999] hidden md:flex items-center justify-between px-6 lg:px-10 xl:px-16 h-16 transition-all duration-300",
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm"
            : "bg-transparent"
        )}
      >
        {/* Logo */}
        <Link
          href="#home"
          onClick={() => handleNavClick("Home", "#home")}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white font-bold text-sm">
            OD
          </div>
          <span className="font-semibold text-sm tracking-tight text-foreground/80 group-hover:text-foreground transition-colors">
            Om Dhede
          </span>
        </Link>

        {/* Center pill nav */}
        <nav className="absolute left-1/2 -translate-x-1/2">
          <ul className="flex items-center gap-1 px-2 py-1.5 rounded-full border border-border/50 bg-background/60 backdrop-blur-md shadow-sm">
            {navPages.map((link) => (
              <li key={link.id} className="relative">
                <Link
                  href={link.id}
                  onClick={() => handleNavClick(link.name, link.id)}
                  className={clsx(
                    "relative flex items-center px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-150 whitespace-nowrap",
                    activeSection === link.name
                      ? "text-foreground"
                      : "text-foreground/50 hover:text-foreground/80"
                  )}
                >
                  {activeSection === link.name && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-foreground/10 dark:bg-white/10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="#contact"
            onClick={() => handleNavClick("Contact", "#contact")}
            className="hidden lg:flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium bg-blue-600 hover:bg-blue-500 text-white transition-colors duration-200"
          >
            Get in Touch
          </Link>
        </div>
      </header>

      {/* ── Mobile nav bar ──────────────────────────────────────── */}
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-[999] flex md:hidden items-center justify-between px-5 h-14 transition-all duration-300",
          scrolled || menuOpen
            ? "bg-background/90 backdrop-blur-xl border-b border-border/50"
            : "bg-transparent"
        )}
      >
        {/* Mobile Logo */}
        <Link
          href="#home"
          onClick={() => handleNavClick("Home", "#home")}
          className="flex items-center gap-2"
        >
          <div className="w-7 h-7 rounded-md bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white font-bold text-xs">
            OD
          </div>
          <span className="font-semibold text-sm text-foreground/80">Om Dhede</span>
        </Link>

        {/* Mobile right: theme + hamburger */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex items-center justify-center w-9 h-9 rounded-full border border-border/50 bg-background/50 text-foreground/70 hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X size={17} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu size={17} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      {/* ── Mobile slide-down menu ───────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-14 left-0 right-0 z-[998] md:hidden bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-xl"
          >
            <nav className="px-5 py-4">
              <ul className="flex flex-col gap-1">
                {navPages.map((link, i) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.2 }}
                  >
                    <Link
                      href={link.id}
                      onClick={() => handleNavClick(link.name, link.id)}
                      className={clsx(
                        "flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-150",
                        activeSection === link.name
                          ? "bg-foreground/10 text-foreground"
                          : "text-foreground/60 hover:text-foreground hover:bg-foreground/5"
                      )}
                    >
                      <span>{link.name}</span>
                      {activeSection === link.name && (
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      )}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-4 pt-4 border-t border-border/40">
                <Link
                  href="#contact"
                  onClick={() => handleNavClick("Contact", "#contact")}
                  className="flex items-center justify-center w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors duration-200"
                >
                  Get in Touch
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop overlay for mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[997] md:hidden"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
