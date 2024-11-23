import About from "@/components/About";
import Header from "@/components/Header";
import { Hero } from "@/components/Hero";
import Projects from "@/components/Project";
import { ScrollText } from "@/components/ScrollText";
import { PROJECTS, SOCIAL_MEDIA } from "@/utils/data";

export default function Home() {
   return (
      <>
         <Header social={SOCIAL_MEDIA} />
         <Hero />
         <ScrollText />
         <Projects data={PROJECTS} />
         <About />
         <div className="h-screen"></div>
      </>
   );
}
