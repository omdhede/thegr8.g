"use client";

import { useSectionInView } from "@/lib/hooks";
import { projects } from "@/lib/data";
import { Reveal } from "@/framer-motion/Reveal";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type GroupKey = "all" | "ai-audit" | "fullstack" | "ml";

const FILTERS: { key: GroupKey; label: string; accent: string }[] = [
  { key: "all", label: "All Projects", accent: "text-foreground/70" },
  { key: "ai-audit", label: "AI & Audit", accent: "text-amber-500" },
  { key: "fullstack", label: "Full-Stack", accent: "text-blue-400" },
  { key: "ml", label: "ML & Data", accent: "text-violet-400" },
];

const GROUP_STYLES: Record<string, { tag: string; glow: string }> = {
  "ai-audit": {
    tag: "tag-amber",
    glow: "hover:shadow-amber-500/10",
  },
  fullstack: {
    tag: "tag-blue",
    glow: "hover:shadow-blue-500/10",
  },
  ml: {
    tag: "tag-violet",
    glow: "hover:shadow-violet-500/10",
  },
};

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.2);
  const [activeFilter, setActiveFilter] = useState<GroupKey>("all");

  const filtered = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.group === activeFilter);

  return (
    <section
      id="projects"
      ref={ref}
      className="w-full min-h-screen bg-background section-padding py-24"
    >
      <div className="w-full max-w-6xl mx-auto">
        {/* Section label */}
        <Reveal side="up">
          <div className="section-tag mb-4">
            <span className="w-4 h-px bg-current inline-block" />
            Projects
          </div>
        </Reveal>

        <Reveal side="up">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
              What I&apos;ve{" "}
              <span className="gradient-text">built</span>
            </h2>
            <span className="text-sm text-foreground/40 font-medium">
              {projects.length} projects
            </span>
          </div>
        </Reveal>

        {/* Filter tabs */}
        <Reveal side="up">
          <div className="flex flex-wrap gap-2 mb-8">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-150 ${
                  activeFilter === f.key
                    ? "bg-foreground/10 border-foreground/20 text-foreground"
                    : "border-border/50 text-foreground/45 hover:text-foreground/70 hover:border-border"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {filtered.map((project, i) => {
            const style = GROUP_STYLES[project.group] ?? GROUP_STYLES.fullstack;
            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: i * 0.06, duration: 0.35 }}
                className={`group glass-card rounded-2xl p-5 border border-border/50 flex flex-col gap-4 hover:shadow-xl ${style.glow} transition-all duration-300`}
              >
                {/* Top row */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex flex-col gap-1.5">
                    {project.featured && (
                      <span className="text-[10px] font-bold tracking-widest uppercase text-amber-500/80">
                        ★ Featured
                      </span>
                    )}
                    <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${style.tag} w-fit`}>
                      {project.category}
                    </span>
                  </div>
                  <span className="text-xs text-foreground/30 font-medium shrink-0 mt-0.5">
                    {project.year}
                  </span>
                </div>

                {/* Title & tagline */}
                <div>
                  <h3 className="text-base font-semibold text-foreground leading-snug mb-1.5">
                    {project.title}
                  </h3>
                  <p className="text-sm text-foreground/55 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Metrics */}
                {project.metrics.length > 0 && (
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-border/40">
                    {project.metrics.map((m) => (
                      <div key={m.label} className="flex flex-col gap-0.5">
                        <span className="text-xs sm:text-sm font-bold text-foreground">
                          {m.value}
                        </span>
                        <span className="text-[10px] text-foreground/40 leading-tight">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Stack */}
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-medium bg-foreground/5 text-foreground/50 border border-border/40"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 4 && (
                    <span className="px-2 py-0.5 rounded text-[11px] font-medium text-foreground/35">
                      +{project.stack.length - 4}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 mt-auto pt-2 border-t border-border/40">
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      className="flex items-center gap-1.5 text-xs text-foreground/50 hover:text-foreground font-medium transition-colors duration-150"
                    >
                      <Github size={13} />
                      GitHub
                    </Link>
                  )}
                  {project.live && (
                    <Link
                      href={project.live}
                      target="_blank"
                      className="flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 font-medium transition-colors duration-150 ml-auto"
                    >
                      Live Demo
                      <ExternalLink size={12} />
                    </Link>
                  )}
                  {!project.live && (
                    <span className="ml-auto flex items-center gap-1 text-xs text-foreground/25">
                      <ArrowUpRight size={12} />
                      Private / WIP
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
