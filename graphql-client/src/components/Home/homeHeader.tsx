import { ArrowRightIcon } from "lucide-react";
import AnimatedShinyText from "../ui/animated-shiny-text";
import { cn } from "@/lib/utils";
import { NeonGradientCard } from "../ui/neon-gradient-card";
import { motion } from "framer-motion";

const HomeHeader = () => {
  return (
    <motion.div
      className="h-fit"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
    >
      <IntroButton />
      <IntroTitle />
      <IntroImage />
    </motion.div>
  );
};

export default HomeHeader;

export const IntroButton = () => (
  <motion.div
    className="flex h-fit mt-32 mb-2 mx-auto items-center justify-center"
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: false }}
    transition={{ duration: 0.8, delay: 0.2 }}
  >
    <motion.div
      className={cn(
        "group rounded-full border border-black/5 bg-neutral-600 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-400 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out text-white hover:text-neutral-900 hover:duration-300 hover:dark:text-neutral-400">
        <span>✨ Introducing SAuth</span>
        <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedShinyText>
    </motion.div>
  </motion.div>
);

export const IntroTitle = () => (
  <>
    <motion.h2
      className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-5 relative z-20 font-bold tracking-tight"
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      SAuth The safer fast and secure <br/>web auth solutions
    </motion.h2>
    <motion.p
      className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      Get the best advices from our experts, including expert artists, painters,
      marathon enthusiasts and RDX, totally free.
    </motion.p>
  </>
);

export const IntroImage = () => (
  <motion.div
    className="w-full max-w-6xl mx-auto my-20"
    initial={{ scale: 0.9, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    viewport={{ once: false }}
    transition={{ duration: 0.8, delay: 0.8 }}
  >
    <NeonGradientCard className="hover:scale-[1.02] transition-transform duration-500">
      <img src="/Home/home-img.webp" className="rounded-xl w-fit mx-auto" />
    </NeonGradientCard>
  </motion.div>
);
