import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SidebarTrigger } from "@/components/ui/sidebar";
import  ModelCard  from '@/components/card-model'
import { Separator } from "@/components/ui/separator"
import ItemCard from "@/components/card-items-class";

export default async function Home() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <div className="w-full">
          <SidebarTrigger />     
          <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-5">
            Dashboard de Producción
          </h2>
          <Separator className="my-2 mb-5" />
          <ModelCard />
          <div className="mt-5">
          <ItemCard />
          </div>
    </div>
  );
}
