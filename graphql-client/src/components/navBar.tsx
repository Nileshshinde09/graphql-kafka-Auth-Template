import { Settings } from "lucide-react";
import AppSettings from "./settings";
const _NavigationMenu = () => {
  return (
    <div className="absolute right-6">
      <AppSettings>
        <Settings className="cursor-pointer hover:spin-in-12 hover:text-slate-500 transform hover:rotate-90 transition duration-300" />
      </AppSettings>
    </div>
  );
};

export default _NavigationMenu;
