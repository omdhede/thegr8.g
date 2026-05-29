"use client";

import { Reveal } from "@/framer-motion/Reveal";
import { useSectionInView } from "@/lib/hooks";
import { stats } from "@/lib/data";
import { motion } from "framer-motion";

export const About = () => {
  const { ref } = useSectionInView("About", 0.4);

  return (
    <section
      id="about"
      ref={ref}
      className="w-full min-h-screen bg-background section-padding py-24 flex items-center"
    >
      <div className="w-full max-w-6xl mx-auto">
        {/* Section label */}
        <Reveal side="up">
          <div className="section-tag mb-4">
            <span className="w-4 h-px bg-current inline-block" />
            About
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: narrative */}
          <div className="flex flex-col gap-6">
            <Reveal side="left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
                Enterprise IT Auditor.{" "}
                <span className="gradient-text">AI Builder.</span>
              </h2>
            </Reveal>

            <Reveal side="left">
              <p className="text-base sm:text-lg text-foreground/70 leading-relaxed">
                I&apos;m an IT Risk & Technology Consulting Analyst at{" "}
                <span className="text-foreground font-medium">BSR & Co. LLP (KPMG India)</span>,
                where I execute SOX-compliant ITGC, ITAC, and IPE testing across 14+ enterprise client
                engagements in BFSI, Manufacturing, and IT/SaaS.
              </p>
            </Reveal>

            <Reveal side="left">
              <p className="text-base sm:text-lg text-foreground/70 leading-relaxed">
                What makes my profile rare: I don&apos;t just understand the controls — I build the
                AI tools to automate them. From FastAPI audit evidence analyzers to RAG pipelines over
                COBIT 2019 documents, my engineering work is{" "}
                <span className="text-foreground font-medium">grounded in real enterprise audit practice</span>.
              </p>
            </Reveal>

            <Reveal side="left">
              <p className="text-base sm:text-lg text-foreground/70 leading-relaxed">
                B.Tech in AI & Data Science from VIIT Pune (CGPA: 8.5/10). CISA in progress.
                AWS Cloud Practitioner certified. Previously a Machine Learning Intern at IBM.
              </p>
            </Reveal>

            {/* Cert badges */}
            <Reveal side="left">
              <div className="flex flex-wrap gap-2 mt-1">
                {["KPMG Analyst", "AWS Certified", "CISA (In Progress)", "B.Tech AI & DS"].map((badge) => (
                  <span
                    key={badge}
                    className="px-3 py-1 rounded-full border border-border text-xs font-medium text-foreground/60"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right: stats grid */}
          <div className="grid grid-cols-2 gap-4 lg:gap-5">
            {stats.map((stat, i) => (
              <Reveal side="right" key={stat.label}>
                <motion.div
                  className="glass-card rounded-2xl p-6 flex flex-col gap-1 border border-border/50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                >
                  <span className="text-3xl sm:text-4xl font-bold gradient-text">
                    {stat.value}
                  </span>
                  <span className="text-sm text-foreground/55 font-medium leading-tight">
                    {stat.label}
                  </span>
                </motion.div>
              </Reveal>
            ))}

            {/* Extra card: location */}
            <Reveal side="right">
              <div className="glass-card rounded-2xl p-6 col-span-2 flex flex-col gap-1 border border-border/50">
                <span className="text-sm font-semibold text-foreground/80">Based in</span>
                <span className="text-xl sm:text-2xl font-bold text-foreground">
                  Pune, Maharashtra
                </span>
                <span className="text-sm text-foreground/45 mt-0.5">India · Open to remote & hybrid</span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
