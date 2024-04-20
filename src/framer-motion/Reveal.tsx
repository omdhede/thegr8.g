"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  side: string;
}

export const Reveal = ({ children, width = "fit-content", side }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isMobile = typeof window !== 'undefined' ? window.innerWidth <= 768 : false;

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  if (side === "up") {
    return (
      <div ref={ref} style={{ position: "relative", width, overflow: isMobile ? 'hidden' : 'visible' }}>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          {children}
        </motion.div>
      </div>
    );
  }

  if (side === "left") {
    return (
      <div ref={ref} style={{ position: "relative", width, overflow: isMobile ? 'hidden' : 'visible' }}>
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.75, delay: 0.25 }}
        >
          {children}
        </motion.div>
      </div>
    );
  }

  if (side === "right") {
    return (
      <div ref={ref} style={{ position: "relative", width, overflow: isMobile ? 'hidden' : 'visible' }}>
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 75 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.75, delay: 0.25 }}
        >
          {children}
        </motion.div>
      </div>
    );
  }
  if (side === "down") {
    return (
      <div ref={ref} style={{ position: "relative", width, overflow: isMobile ? 'hidden' : 'visible' }}>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.75, delay: 0.25 }}
        >
          {children}
        </motion.div>
      </div>
    );
  }
};
