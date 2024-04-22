import { About } from "@/components/pages/about";
import Contact from "@/components/pages/contact";
import Header from "@/components/pages/header";
import Projects from "@/components/pages/projects";
import Skills from "@/components/pages/skills";
import { Separator } from "@/components/ui/separator";


export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <Separator className="text-white" />
      <About />
      <Separator className="text-white" />
      <Skills />
      <Separator className="text-white" />
      <Projects />
      <Separator className="text-white" />
      <Contact />
      <Separator className="text-white" />
    </div>
  );
}
