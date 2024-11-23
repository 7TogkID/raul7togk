import React from "react";
import Parallax from "./ui/Parallax";
import { SectionHeading } from "./ui/Typography";
import { SlideIn } from "./ui/Transition";

export default function About() {
   return (
      <section className="px-4 md:px-8 relative">
         <span className="blob absolute top-[20%] left-0 w-1/3 h-5/6 blur-[100px] -z-10" />
         <div className="flex justify-center my-8">
            <SectionHeading className="text-center">
               <SlideIn className="text-white/40">MORE ABOUT</SlideIn>
               <br />
               <SlideIn>RAUL IQBAL</SlideIn>
            </SectionHeading>
         </div>
         <Parallax background="/images/me.jpg" />
         <div className="flex flex-col justify-center my-10 max-w-[60rem]  mx-auto">
            <p className="text-3xl font-bold tracking-wide leading-relaxed uppercase text-center   font-inter-thin">
               I&apos;M AN FRONT-END DEVELOPER AND UI/UX DESIGNER. MY PASSION IS
               BUILDING RESPONSIVE WEBSITE APPLICATIONS THAT LOOK COOL AND ARE
               EASY FOR USERS TO VISIT.
            </p>

            <p className="mt-10 text-2xl text-white/40 tracking-wide leading-relaxed  text-center font-inter-thin">
               I&apos;m a Front-End Developer who allows me to bring my creative
               vision to life. I love finding <i>“unexpected solutions”</i> and
               believe that with the right perspective, design can enhance the
               human experience.
            </p>
         </div>
      </section>
   );
}
