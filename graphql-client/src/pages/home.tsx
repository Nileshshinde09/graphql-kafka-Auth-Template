import React from "react";
import {
  AnimatedBeam,
  BoxRevealHeroSection,
  HeroSectionCardHoverEffect,
  MorphingText,
} from "@/components";
import { Separator } from "@/components/ui/separator";
import WordRotate from "@/components/ui/word-rotate";
const Home = () => {
  return (
    <section className="h-screen w-full">
      <div className="flex justify-center items-center space-x-10">
        <BoxRevealHeroSection />
        {/* bg-black dark:bg-white */}
        <div className="border-black rounded-2xl px-3 py-6 w-[40rem]">
          <MorphingText className="dark:text-gray-200 text-black text-[1rem] -mt-10 " />
          <AnimatedBeam className="mx-auto" />
        </div>
      </div>
      <Separator className="borde max-w-7xl mx-auto mt-4" />
      <div className="max-w-7xl border-4 dark:border-gray-500 border-black rounded-2xl mx-auto bg-black/60">
        <WordRotate
          className="text-4xl text-center font-bold text-black dark:text-white"
          words={["Our Services", "Auth Templates"]}
        />
        <HeroSectionCardHoverEffect />
      </div>
    </section>
  );
};

export default Home;
