import { SidebarFooter, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { signOutAction } from '@/app/(auth)/sign-in/actions'
import { User2, ChevronUp } from "lucide-react";
import { Button } from "../ui/button";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function SidebarFoot() {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/sign-in')
  }
  
  
    return (
        <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  {data.user.email}
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
   
                <form action={signOutAction}>
                  <Button type="submit" variant={"outline"}>Cerrar Sesion</Button>
                </form>
                

              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    );
  }
  