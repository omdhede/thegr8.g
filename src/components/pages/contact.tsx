"use client";

import { useSectionInView } from "@/lib/hooks";
import { Reveal } from "@/framer-motion/Reveal";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  const { ref } = useSectionInView("Contact", 0.4);

  return (
    <section
      id="contact"
      ref={ref}
      className="w-full min-h-screen bg-background section-padding py-24 flex items-center"
    >
      <div className="w-full max-w-3xl mx-auto text-center flex flex-col items-center gap-8">
        {/* Section label */}
        <Reveal side="up">
          <div className="section-tag">
            <span className="w-4 h-px bg-current inline-block" />
            Contact
          </div>
        </Reveal>

        {/* Heading */}
        <Reveal side="up">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
            Let&apos;s talk{" "}
            <span className="gradient-text">audit, AI,</span>
            <br />
            or both.
          </h2>
        </Reveal>

        {/* Sub-text */}
        <Reveal side="up">
          <p className="text-base sm:text-lg text-foreground/55 leading-relaxed max-w-lg">
            I&apos;m open to IT Developer Consultant, AI Automation, and Risk Technology roles.
            Whether it&apos;s enterprise consulting, AI tooling, or full-stack development — reach out.
          </p>
        </Reveal>

        {/* Email CTA */}
        <Reveal side="up">
          <Link
            href="mailto:omdhede@gmail.com"
            className="flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base transition-all duration-200 hover:shadow-xl hover:shadow-blue-600/25"
          >
            <Mail size={18} />
            omdhede@gmail.com
          </Link>
        </Reveal>

        {/* Social links */}
        <Reveal side="up">
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/omdhede"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-border/50 text-sm font-medium text-foreground/60 hover:text-foreground hover:border-border transition-colors duration-150"
            >
              <Github size={15} />
              GitHub
            </Link>
            <Link
              href="https://linkedin.com/in/omdhede"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-border/50 text-sm font-medium text-foreground/60 hover:text-foreground hover:border-border transition-colors duration-150"
            >
              <Linkedin size={15} />
              LinkedIn
            </Link>
          </div>
        </Reveal>

        {/* Location + availability */}
        <Reveal side="up">
          <div className="flex flex-col sm:flex-row items-center gap-3 text-sm text-foreground/35">
            <div className="flex items-center gap-1.5">
              <MapPin size={13} />
              Pune, Maharashtra, India
            </div>
            <span className="hidden sm:block">·</span>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for new opportunities
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
