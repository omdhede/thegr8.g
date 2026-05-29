import { About } from "@/components/pages/about";
import Contact from "@/components/pages/contact";
import Header from "@/components/pages/header";
import Projects from "@/components/pages/projects";
import Skills from "@/components/pages/skills";
import Experience from "@/components/pages/experience";
import AILab from "@/components/pages/ai-lab";

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <AILab />
      <Contact />
    </main>
  );
}
