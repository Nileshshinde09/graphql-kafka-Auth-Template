import { Button } from "@/components/ui/button";
import BoxReveal from "./ui/box-reveal";
import { Utils } from "@/lib/utils";
import { EarthLockIcon } from "lucide-react";
interface BoxRevealHeroSectionProps {
  className?: string;
}
const BoxRevealHeroSection: React.FC<BoxRevealHeroSectionProps> = ({
  className,
}): React.ReactNode => {
  return (
    <div
      className={Utils.cn(
        "size-full max-w-lg items-center justify-center overflow-hidden pt-1",
        className
      )}
    >
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <p className="text-[5rem] font-semibold flex items-center">
          SAuth
          <EarthLockIcon className=" w-[5rem] h-[5rem] text-[#8f89e6]" />
        </p>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <h2 className="mt-[.5rem] text-[2rem]">
          UI library for{" "}
          <span className="text-[#8f89e6]">Design Engineers</span>
        </h2>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <div className="mt-6 text-[1.2rem]">
          <p>
            -&gt; 20+ free and open-source animated components built with
            <span className="font-semibold text-[#8f89e6]"> React</span>,
            <span className="font-semibold text-[#8f89e6]"> Typescript</span>,
            <span className="font-semibold text-[#8f89e6]"> Tailwind CSS</span>,
            and
            <span className="font-semibold text-[#8f89e6]"> Framer Motion</span>
            . <br />
            -&gt; 100% open-source, and customizable. <br />
          </p>
        </div>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <Button className="mt-[1.6rem] bg-[#8f89e6]">Explore</Button>
      </BoxReveal>
    </div>
  );
};
export default BoxRevealHeroSection;
