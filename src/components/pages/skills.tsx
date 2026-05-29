"use client";

import { useSectionInView } from "@/lib/hooks";
import { skillGroups, certifications } from "@/lib/data";
import { Reveal } from "@/framer-motion/Reveal";
import { motion } from "framer-motion";
import { CheckCircle2, Clock } from "lucide-react";

const COLOR_MAP: Record<string, string> = {
  amber: "tag-amber",
  blue: "tag-blue",
  violet: "tag-violet",
  cyan: "tag-cyan",
  emerald: "tag-emerald",
  orange: "tag-orange",
  pink: "tag-pink",
};

const HEADER_COLOR_MAP: Record<string, string> = {
  amber: "text-amber-500",
  blue: "text-blue-400",
  violet: "text-violet-400",
  cyan: "text-cyan-400",
  emerald: "text-emerald-400",
  orange: "text-orange-400",
  pink: "text-pink-400",
};

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.3);

  return (
    <section
      id="skills"
      ref={ref}
      className="w-full min-h-screen bg-background section-padding py-24"
    >
      <div className="w-full max-w-6xl mx-auto">
        {/* Section label */}
        <Reveal side="up">
          <div className="section-tag mb-4">
            <span className="w-4 h-px bg-current inline-block" />
            Skills
          </div>
        </Reveal>

        <Reveal side="up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-12 leading-tight">
            Technical{" "}
            <span className="gradient-text">expertise</span>
          </h2>
        </Reveal>

        {/* Skill groups grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 mb-16">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              className="glass-card rounded-2xl p-5 border border-border/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
            >
              <h3 className={`text-sm font-bold mb-3 tracking-tight ${HEADER_COLOR_MAP[group.color]}`}>
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-2.5 py-1 rounded-full text-xs font-medium ${COLOR_MAP[group.color]}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <Reveal side="up">
          <div className="section-tag mb-4">
            <span className="w-4 h-px bg-current inline-block" />
            Certifications
          </div>
        </Reveal>

        <Reveal side="up">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-8">
            Credentials &amp;{" "}
            <span className="gradient-text-amber">Learning</span>
          </h3>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              className="glass-card rounded-xl px-5 py-4 border border-border/50 flex items-start gap-3"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.35 }}
            >
              <div className="mt-0.5 shrink-0">
                {cert.status === "Completed" ? (
                  <CheckCircle2 size={16} className="text-emerald-400" />
                ) : (
                  <Clock size={16} className="text-amber-400" />
                )}
              </div>
              <div className="flex flex-col gap-0.5 min-w-0">
                <span className="text-sm font-medium text-foreground leading-snug">
                  {cert.name}
                </span>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs text-foreground/45">{cert.issuer}</span>
                  <span className="text-xs text-foreground/30">·</span>
                  <span
                    className={`text-xs font-medium ${
                      cert.status === "Completed"
                        ? "text-emerald-400"
                        : "text-amber-400"
                    }`}
                  >
                    {cert.status === "Completed" ? cert.date : `${cert.status} · ${cert.date}`}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
