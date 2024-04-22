import { About } from "@/components/about";
import Header from "@/components/header";
import Skills from "@/components/skills";
import { Separator } from "@/components/ui/separator";


export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <Separator className="text-white" />
      <About />
      <Separator className="text-white" />
      <Skills />
    </div>
  );
}
