import { Settings, Flower, QrCode } from "lucide-react";
import AppSettings from "./settings";
import { Utils } from "@/lib/utils";
import { Button } from "./ui/button";
import { useTheme } from "./ui/theme-provider";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
const _NavigationMenu = () => {
  return (
    <motion.nav
      initial={{ opacity: 0,}}
      animate={{ opacity: 1,}}
      transition={{ duration: 1 }}
      className="absolute right-6 z-[1000] flex justify-between w-full max-w-7xl mt-5 left-1/2 -translate-x-1/2"
    >
      <Icon />
      <div className="flex gap-2">
        <Toolkit>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "tween", stiffness: 300 }}
          >
            <Button className="rounded-3xl">
              <Flower
                className="-ms-1 me-2 opacity-60"
                size={16}
                strokeWidth={2}
                aria-hidden="true"
              />
              <span className="flex items-baseline gap-2">Guest</span>
            </Button>
          </motion.div>
        </Toolkit>
        <AppSettings>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "tween", stiffness: 300 }}
          >
            <Button className="rounded-3xl">
              <Settings
                className="-ms-1 me-2 opacity-60"
                size={16}
                strokeWidth={2}
                aria-hidden="true"
              />
              <span className="flex items-baseline gap-2">Settings</span>
            </Button>
          </motion.div>
        </AppSettings>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "tween", stiffness: 300 }}
        >
          <Button>
            <QrCode
              className="-ms-1 me-2 opacity-60"
              size={16}
              strokeWidth={2}
              aria-hidden="true"
            />
            <span className="flex items-baseline gap-2">Sign In</span>
          </Button>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default _NavigationMenu;
export const Icon = () => (
  <img
    src={"/icon.svg"}
    className="border-zinc-700/80 shadow-inner bg-black shadow-zinc-500/80 border-4 p-2 rounded-full"
  />
);

export const Toolkit = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent
          className={Utils.cn(
            "py-3 w-[20rem]",
            theme === "dark" ? "dark" : null
          )}
        >
          <div className="flex gap-3">
            <Flower
              className="mt-0.5 shrink-0 opacity-60"
              size={16}
              strokeWidth={2}
              aria-hidden="true"
            />
            <div className="space-y-1">
              <p className="text-[13px] font-medium">Guest Account Button</p>
              <p className="text-xs text-muted">
                A button for guest users to explore the platform with limited
                trial features, offering a quick and seamless experience without
                requiring a full account setup.
              </p>
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
