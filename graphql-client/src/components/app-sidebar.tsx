import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Utils } from "@/lib/utils";

const AppSidebar = ({
  className,
  headerBG,
  bodyBG,
}: {
  className?: string;
  headerBG?: string;
  bodyBG?: string;
}): React.ReactNode => {
  return (
    <Sidebar className={Utils.cn("", className)}>
      <SidebarHeader className={Utils.cn("", headerBG)} />
      <SidebarContent className={Utils.cn("", bodyBG)}>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};

export default AppSidebar;
