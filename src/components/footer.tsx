import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { navPages } from "@/lib/nav-pages";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-background border-t border-border/40">
      <div className="section-padding py-10 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-start">
          {/* Left: identity */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white font-bold text-xs">
                OD
              </div>
              <span className="font-semibold text-sm text-foreground">Om Dhede</span>
            </div>
            <p className="text-xs text-foreground/40 leading-relaxed max-w-[200px]">
              IT Risk & Technology Consulting Analyst · AI Automation Builder
            </p>
          </div>

          {/* Center: nav links */}
          <nav className="flex flex-col gap-1.5">
            <span className="text-xs font-semibold text-foreground/30 uppercase tracking-widest mb-1">
              Navigation
            </span>
            {navPages.map((page) => (
              <Link
                key={page.id}
                href={page.id}
                className="text-sm text-foreground/50 hover:text-foreground transition-colors duration-150 w-fit"
              >
                {page.name}
              </Link>
            ))}
          </nav>

          {/* Right: socials */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold text-foreground/30 uppercase tracking-widest">
              Connect
            </span>
            <div className="flex items-center gap-3">
              <Link
                href="https://github.com/omdhede"
                target="_blank"
                className="flex items-center justify-center w-8 h-8 rounded-lg border border-border/50 text-foreground/50 hover:text-foreground hover:border-border transition-all duration-150"
                aria-label="GitHub"
              >
                <Github size={14} />
              </Link>
              <Link
                href="https://linkedin.com/in/omdhede"
                target="_blank"
                className="flex items-center justify-center w-8 h-8 rounded-lg border border-border/50 text-foreground/50 hover:text-foreground hover:border-border transition-all duration-150"
                aria-label="LinkedIn"
              >
                <Linkedin size={14} />
              </Link>
              <Link
                href="mailto:omdhede@gmail.com"
                className="flex items-center justify-center w-8 h-8 rounded-lg border border-border/50 text-foreground/50 hover:text-foreground hover:border-border transition-all duration-150"
                aria-label="Email"
              >
                <Mail size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-5 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="text-xs text-foreground/30">
            © {year} Om Dhede. All rights reserved.
          </span>
          <span className="text-xs text-foreground/20">
            Built with Next.js · Deployed on Vercel
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
