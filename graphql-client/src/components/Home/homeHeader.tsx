import { ArrowRightIcon, Signature } from "lucide-react";
import AnimatedShinyText from "../ui/animated-shiny-text";
import { cn } from "@/lib/utils";
import { NeonGradientCard } from "../ui/neon-gradient-card";
import { motion } from "framer-motion";
import { useTheme } from "../ui/theme-provider";
// import { FiSlack } from "react-icons/fi";
const HomeHeader = () => {
  return (
    <motion.div
      className="h-fit relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
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
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.2 }}
  >
    <motion.div
      className={cn(
        "h-12 flex items-center  group rounded-full border-4 shadow-inner hover:shadow-none shadow-neutral-400 dark:shadow-neutral-900 border-black/5 bg-neutral-950 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-zinc-300 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out text-white hover:text-neutral-900 hover:duration-300 hover:dark:text-neutral-400">
        <div className="flex gap-1">
          <Signature />
          <span>Introducing SAuth</span>
        </div>
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
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      SAuth The safer fast and secure <br />
      web auth solutions
    </motion.h2>
    <motion.p
      className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      Get the best advices from our experts, including expert artists, painters,
      marathon enthusiasts and RDX, totally free.
    </motion.p>
  </>
);

export const IntroImage = () => {
  const { theme } = useTheme();
  return (
    <motion.div
      className={cn(
        "w-full max-w-6xl mx-auto my-20 border-2 border-zinc-400/70 rounded-[2.1rem]",
        theme == "dark" ? "border-zinc-700" : null
      )}
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      <NeonGradientCard className="hover:scale-[1.02]  transition-transform duration-500"></NeonGradientCard>
      <div
        className={cn(
          "p-5 bg-zinc-800 rounded-[2rem]",
          theme === "light" ? "bg-zinc-300" : null
        )}
      >
        <div
          className={cn(
            "p-5 bg-black rounded-[2rem] overflow-hidden",
            theme === "light" ? "p-0" : null
          )}
        >
          <img
            src={"/home/code-w.png"}
            className="w-fit rounded-[1.7rem] mx-auto z-0"
          />
        </div>
      </div>
          {/* <FiSlack size={30} className={cn("absolute z-20 bottom-14 left-1/2 -translate-x-1/2",theme === "light" ? "text-zinc-400" : "text-zinc-950 rounded-full")}/> */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 max-w-6xl mx-auto bg-gradient-to-t via-background from-white dark:from-black" />
    </motion.div>
  );
};
