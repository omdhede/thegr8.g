"use client";

import React, { useEffect, useRef, useState } from "react";
import CLOUDS from "vanta/src/vanta.clouds";
import * as THREE from "three";
import { Reveal } from "@/framer-motion/Reveal";
import TypewriterComponent from "typewriter-effect";
import { ArrowDown, Download } from "lucide-react";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";

export default function Header() {
  const [vantaEffect, setVantaEffect] = useState<ReturnType<typeof CLOUDS> | null>(null);
  const vantaRef = useRef<HTMLDivElement>(null);
  const { ref } = useSectionInView("Home", 0.5);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        CLOUDS({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="w-full" ref={ref} id="home">
      <div
        className="relative bg-[#0B0C10] min-h-screen w-full"
        ref={vantaRef}
      >
        {/* Subtle gradient at bottom so sections below blend in */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 min-h-screen w-full flex flex-col justify-center section-padding pt-20">
          <div className="max-w-4xl flex flex-col gap-y-5">

            {/* Status badge */}
            <Reveal side="down">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-black/20 backdrop-blur-sm w-fit">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-medium text-white/80 tracking-wide">
                  Exploring AI, automation & tech
                </span>
              </div>
            </Reveal>

            {/* Greeting */}
            <Reveal side="up">
              <span className="text-base sm:text-lg font-medium text-blue-300 tracking-wide drop-shadow-sm">
                Hello, I&apos;m
              </span>
            </Reveal>

            {/* Name */}
            <Reveal side="up">
              <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight text-white leading-none drop-shadow-lg">
                Om Dhede.
              </h1>
            </Reveal>

            {/* Typewriter role */}
            <Reveal side="up">
              <div className="flex items-center gap-2 text-xl sm:text-2xl lg:text-3xl font-semibold text-white/70">
                <span className="text-white/40">/</span>
                <TypewriterComponent
                  options={{
                    strings: [
                      "IT Risk Analyst.",
                      "IT Developer Consultant.",
                      "Audit Automation Engineer.",
                      "Enterprise AI Builder.",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 35,
                    delay: 55,
                  }}
                />
              </div>
            </Reveal>

            {/* Sub-tagline */}
            <Reveal side="up">
              <p className="text-xs sm:text-sm text-white/50 tracking-widest uppercase font-medium">
                Enterprise IT Risk &nbsp;·&nbsp; AI-Powered Automation &nbsp;·&nbsp; Technology Consulting
              </p>
            </Reveal>

            {/* CTAs */}
            <Reveal side="up">
              <div className="flex flex-wrap items-center gap-3 mt-2">
                <Link href="#projects">
                  <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-blue-600/30">
                    View My Work
                    <ArrowDown size={15} />
                  </button>
                </Link>
                <Link href="/cv.pdf" target="_blank">
                  <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/25 bg-black/20 hover:bg-black/35 text-white text-sm font-semibold backdrop-blur-sm transition-all duration-200">
                    Resume
                    <Download size={15} />
                  </button>
                </Link>
                <Link href="#contact">
                  <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/25 bg-black/20 hover:bg-black/35 text-white text-sm font-medium backdrop-blur-sm transition-all duration-200">
                    Contact Me
                  </button>
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40">
            <span className="text-xs text-white tracking-widest uppercase">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-white to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
