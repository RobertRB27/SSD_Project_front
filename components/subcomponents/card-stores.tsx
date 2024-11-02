import { Card, CardContent } from "@/components/ui/card";
import MultipleSelect from "@/components/subcomponents/multiple-select";
import { models } from '@/data/data';


export default function CardStores() {
  return (
    <Card className="w-[350px] md:w-[400px]" >
        <CardContent>
        <form>
          <div className="grid w-full items-center gap-4 mt-5">
            <MultipleSelect options={models} title="Ciudad" isMulti={true} placeholder="Selecciona una ciudad"/>

            <MultipleSelect options={models} title="Locales" isMulti={false} placeholder="Selecciona los locales"/>

          </div>
        </form>
      </CardContent>
   
    </Card>
  );
}