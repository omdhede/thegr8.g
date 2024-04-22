import React from "react";
import { RiJavascriptFill, RiReactjsFill, RiFlutterFill } from "react-icons/ri";
import { BiLogoTypescript, BiLogoTailwindCss } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";


export const webSkills = [
  {
    icon: React.createElement(RiJavascriptFill, { className: "text-yellow-400 bg-black rounded-lg", size: 40 }),
    name: "JavaScript",
  },
  {
    icon: React.createElement(BiLogoTypescript, { className: "text-blue-500 bg-black rounded-lg", size: 40 }),
    name: "TypeScript",
  },
  {
    icon: React.createElement(RiReactjsFill, { className: "text-cyan-400 bg-black rounded-lg", size: 40 }),
    name: "React.JS",
  },
  {
    icon: React.createElement(SiNextdotjs, { className: "text-white bg-black rounded-xl", size: 40 }),
    name: "Next 14",
  },
  {
    icon: React.createElement(BiLogoTailwindCss, { className: "text-cyan-500 bg-black rounded-lg", size: 40 }),
    name: "TailwindCSS",
  },
  {
    icon: React.createElement(SiShadcnui, { className: "text-black bg-white p-2 rounded-lg", size: 40 }),
    name: "shadcn-ui",
  },
  {
    icon: React.createElement(TbBrandFramerMotion, { className: "text-black bg-white p-2 rounded-lg", size: 40 }),
    name: "Framer Motion",
  },
] as const;
