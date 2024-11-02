import { Card, CardContent } from "@/components/ui/card";
import MultipleSelect from "@/components/subcomponents/multiple-select";
import { models, months } from '@/data/data';


export default function CardSelection() {
  return (
    <Card className="w-[350px] md:w-[400px]" >
        <CardContent>
        <form>
          <div className="grid w-full items-center gap-4 mt-5">

            <MultipleSelect options={models} title="Familia de productos" isMulti={false} placeholder="Selecciona las familias"/>

            <MultipleSelect options={models} title="Productos" isMulti={true} placeholder="Selecciona los productos"/>

          </div>
        </form>
      </CardContent>
   
    </Card>
  );
}