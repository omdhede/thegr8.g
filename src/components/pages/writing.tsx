"use client";

import { writings } from "@/lib/data";
import { Reveal } from "@/framer-motion/Reveal";
import { motion } from "framer-motion";
import { Clock, ArrowUpRight } from "lucide-react";

export default function Writing() {
  return (
    <section
      id="writing"
      className="w-full bg-background section-padding py-24"
    >
      <div className="w-full max-w-6xl mx-auto">
        {/* Section label */}
        <Reveal side="up">
          <div className="section-tag mb-4">
            <span className="w-4 h-px bg-current inline-block" />
            Writing
          </div>
        </Reveal>

        <Reveal side="up">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
              Thoughts on{" "}
              <span className="gradient-text">AI &amp; Audit</span>
            </h2>
            <span className="text-xs text-foreground/35 font-medium shrink-0 mb-1">Articles coming soon</span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {writings.map((post, i) => (
            <motion.div
              key={post.title}
              className="group glass-card rounded-2xl p-6 border border-border/50 flex flex-col gap-4 cursor-default"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
            >
              {/* Coming soon badge */}
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-foreground/5 text-foreground/35 border border-border/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/20" />
                  Coming Soon
                </span>
                <ArrowUpRight size={14} className="text-foreground/20 group-hover:text-foreground/40 transition-colors" />
              </div>

              {/* Title + description */}
              <div>
                <h3 className="text-base font-semibold text-foreground mb-2 leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-foreground/55 leading-relaxed">
                  {post.description}
                </p>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between mt-auto pt-3 border-t border-border/40">
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-medium tag-blue"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-xs text-foreground/35 shrink-0">
                  <Clock size={11} />
                  {post.readTime}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
