"use client";

import { aiLabItems } from "@/lib/data";
import { Reveal } from "@/framer-motion/Reveal";
import { motion } from "framer-motion";
import { FlaskConical, Zap } from "lucide-react";

export default function AILab() {
  return (
    <section
      id="ai-lab"
      className="w-full bg-background section-padding py-24"
    >
      <div className="w-full max-w-6xl mx-auto">
        {/* Section label */}
        <Reveal side="up">
          <div className="section-tag mb-4">
            <span className="w-4 h-px bg-current inline-block" />
            AI Lab
          </div>
        </Reveal>

        <Reveal side="up">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
              AI tools for{" "}
              <span className="gradient-text-amber">Audit &amp; Compliance</span>
            </h2>
            <div className="flex items-center gap-1.5 shrink-0 text-xs text-foreground/40 font-medium mb-1">
              <FlaskConical size={13} />
              In development
            </div>
          </div>
        </Reveal>

        <Reveal side="up">
          <p className="text-sm sm:text-base text-foreground/50 mb-10 max-w-xl leading-relaxed">
            Ideas and tools I&apos;m building at the intersection of enterprise IT risk and generative AI.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {aiLabItems.map((item, i) => (
            <motion.div
              key={item.title}
              className="glass-card rounded-2xl p-5 border border-border/50 flex flex-col gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
            >
              {/* Status badge */}
              <div className="flex items-center justify-between">
                <span
                  className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                    item.status === "in-progress"
                      ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                      : "bg-amber-500/10 text-amber-500 border border-amber-500/20"
                  }`}
                >
                  {item.status === "in-progress" ? (
                    <>
                      <Zap size={10} />
                      In Development
                    </>
                  ) : (
                    <>
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      Planned
                    </>
                  )}
                </span>
              </div>

              {/* Title + description */}
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-foreground/50 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-border/40">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[10px] font-medium bg-foreground/5 text-foreground/45 border border-border/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
