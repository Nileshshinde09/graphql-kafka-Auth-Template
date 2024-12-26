import React from "react";
import { AnimatedBeam, BoxRevealHeroSection, MorphingText } from "@/components";
const Home = () => {
  return (
    <div className="h-screen w-full">
      <div className="flex justify-center items-center space-x-10 mx-20">
        <BoxRevealHeroSection />
        <div className="bg-black hover:scale-[1.03] transition dark:bg-white border-4 border-[#5046e6] rounded-2xl px-3 py-6 w-[40rem]">
          <MorphingText className="text-white dark:text-black text-[1rem] -mt-10 " />
          <AnimatedBeam className="mx-auto"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
