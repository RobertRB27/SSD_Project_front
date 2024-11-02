import { Sidebar, SidebarContent } from "@/components/ui/sidebar"
import SidebarFoot from "@/components/subcomponents/sidebar-footer"
import SidebarItem from "./subcomponents/sidebar-content"
 
export function AppSidebar() {
  return (
    <Sidebar variant="floating" collapsible="icon">
      <SidebarContent >

      <SidebarItem />
      
      </SidebarContent >
      <SidebarFoot />
    </Sidebar>
  )
}