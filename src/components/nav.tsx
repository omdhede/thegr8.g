"use client";

import React from "react";
import { motion } from "framer-motion";
import { navPages } from "@/lib/nav-pages";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu";
import { Separator } from "@/components/ui/separator"


export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <header className="z-[999] relative flex flex-row items-center justify-center">
      <motion.div
        className="hidden sm:block sm:fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="hidden sm:flex sm:fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {navPages.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.id}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                  {
                    "text-black font-semibold  dark:text-gray-200":
                      activeSection === link.name,
                  }
                )}
                href={link.id}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-slate-300 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>

      <NavigationMenu className="fixed flex flex-col items-center justify-center top-4 sm:hidden">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger></NavigationMenuTrigger>
            <NavigationMenuContent className="w-[14rem]">

              {navPages.map((link) => (
                <motion.li
                  className="h-3/4 flex flex-col px-6 pt-2 items-center justify-center relative"
                  key={link.id}
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  <NavigationMenuLink
                    className={clsx(
                      "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                      {
                        "text-black font-semibold  dark:text-gray-200 bg-slate-500 bg-opacity-55 rounded-lg":
                          activeSection === link.name,
                      }
                    )}
                    href={link.id}
                    onClick={() => {
                      setActiveSection(link.name);
                      setTimeOfLastClick(Date.now());
                    }}
                  >
                    <span className="flex flex-col items-center justify-center">
                      {link.name}
                    </span>
                    
                  </NavigationMenuLink>
                  <Separator className="mt-2"/>
                </motion.li>
              ))}

            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
