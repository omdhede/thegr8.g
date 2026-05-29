"use client";

import { Reveal } from "@/framer-motion/Reveal";
import { useSectionInView } from "@/lib/hooks";
import { experience } from "@/lib/data";
import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.3);

  return (
    <section
      id="experience"
      ref={ref}
      className="w-full min-h-screen bg-background section-padding py-24 flex items-center"
    >
      <div className="w-full max-w-4xl mx-auto">
        {/* Section label */}
        <Reveal side="up">
          <div className="section-tag mb-4">
            <span className="w-4 h-px bg-current inline-block" />
            Experience
          </div>
        </Reveal>

        <Reveal side="up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-12 leading-tight">
            Where I&apos;ve{" "}
            <span className="gradient-text">worked</span>
          </h2>
        </Reveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-5 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/60 via-border/50 to-transparent" />

          <div className="flex flex-col gap-10">
            {experience.map((job, i) => (
              <motion.div
                key={`${job.company}-${i}`}
                className="relative pl-12 sm:pl-14"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 top-1.5 w-8 sm:w-10 h-8 sm:h-10 rounded-full border-2 flex items-center justify-center text-xs font-bold ${
                    job.current
                      ? "border-blue-500 bg-blue-500/15 text-blue-400"
                      : "border-border bg-background text-foreground/40"
                  }`}
                >
                  {job.current ? (
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  ) : (
                    <span className="w-2 h-2 rounded-full bg-foreground/20" />
                  )}
                </div>

                {/* Card */}
                <div className="glass-card rounded-2xl p-5 sm:p-6 border border-border/50">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-base sm:text-lg font-semibold text-foreground">
                          {job.role}
                        </h3>
                        {job.current && (
                          <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-blue-500/15 text-blue-400 border border-blue-500/25">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-medium text-foreground/60 mt-0.5">
                        {job.company}
                      </p>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1 shrink-0">
                      <div className="flex items-center gap-1.5 text-xs text-foreground/45">
                        <Calendar size={11} />
                        {job.period}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-foreground/45">
                        <MapPin size={11} />
                        {job.location}
                      </div>
                    </div>
                  </div>

                  {/* Type badge */}
                  <span className="inline-block px-2 py-0.5 rounded text-xs font-medium bg-foreground/5 text-foreground/50 border border-border/40 mb-4">
                    {job.type}
                  </span>

                  {/* Highlights */}
                  <ul className="flex flex-col gap-2">
                    {job.highlights.map((h, hi) => (
                      <li key={hi} className="flex items-start gap-2.5 text-sm text-foreground/65 leading-relaxed">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-500/60 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-border/40">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-xs font-medium tag-amber"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
