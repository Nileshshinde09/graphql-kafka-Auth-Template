import { Settings } from "lucide-react";
import AppSettings from "./settings";
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "./ui/animated-grid-pattern";
const _NavigationMenu = () => {
  return (
    <div className="absolute right-6 z-[999]">
      <AppSettings>
        <Settings className="my-3 cursor-pointer hover:spin-in-12 hover:text-slate-500 transform hover:rotate-90 transition duration-300" />
      </AppSettings>
    </div>
    
  );
};

export default _NavigationMenu;
