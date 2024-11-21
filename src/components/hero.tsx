"use client";

import { SlideIn, TextReveal, Transition } from "./ui";
import { About } from "@/utils/interfaces";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { PageLoad } from "./ui/page-load";

export const Hero = ({ about }: { about: About }) => {
   const [hideLoader, setHideLoader] = useState(true);

   return (
      <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden ">
         {hideLoader ? (
            <PageLoad hideLoader={hideLoader} setHideLoader={setHideLoader} />
         ) : (
            <div className="px-4 md:px-8">
               <div className="flex items-center justify-center flex-col h-[90vh]">
                  <div className="py-6 flex items-center flex-col">
                     <h1 className="md:text-9xl text-4xl font-bold overflow-hidden">
                        <SlideIn>
                           MUHAMAD <br />
                           RAUL IQBAL
                        </SlideIn>
                     </h1>
                     {/* <h1 className="md:text-7xl text-3xl overflow-hidden">
                        <SlideIn></SlideIn>
                     </h1> */}
                  </div>
                  <Transition viewport={{ once: true }} className="w-full">
                     <p className="opacity-70 md:text-xl py-4 w-10/12 md:w-2/3 mx-auto flex flex-wrap justify-center gap-2">
                        {"I am a developer and designer who has a passion for building responsive, cool looking, and easy to visit website applications."
                           .split(" ")
                           .map((word, index) => (
                              <span key={index}>{word}</span>
                           ))}
                     </p>
                  </Transition>
                  <Transition viewport={{ once: true }}>
                     <Link
                        href={"#contact"}
                        className="px-5 py-3 mt-4 rounded-full border border-white/50 flex items-center gap-4 group"
                     >
                        <TextReveal>Let&apos;s talk</TextReveal>
                        <ArrowRight
                           size={20}
                           className="group-hover:rotate-90 transition-transform"
                        />
                     </Link>
                  </Transition>
               </div>
               <div className="flex justify-between">
                  <p className="text-lg font-medium">
                     BASED IN BEKASI, INDONESIA
                  </p>
                  <p className="text-lg font-medium">
                     FRONT-END DEVELOPER{" "}
                     <span className="text-slate-400">+ UI DESIGNER</span>
                  </p>
               </div>
            </div>
         )}
      </section>
   );
};
