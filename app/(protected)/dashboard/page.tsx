import FilterForm from "@/components/filter-form";
import Title from "@/components/title-page";
import { Separator } from "@/components/ui/separator";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-4 mx-5" >
      <div className="flex flex-col items-center gap-2" >
        <Title title="Dashboard de Producción" />
        <Separator />
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-4" >
        <div className="bg-red-500 w-full md:w-1/3 flex justify-center" >
          
          <FilterForm />
        </div>
        <div className="bg-blue-500 w-full md:w-2/3" >
          Gráficos
        </div>
      </div>
    </div>
  );
}