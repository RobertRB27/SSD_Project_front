import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import MultipleSelect from "@/components/subcomponents/multiple-select";
import { models, months } from '@/data/data';

interface CardModelProps {
  setSelectedModel: (model: string | null) => void;
  setSelectedMonths: (months: number[]) => void;
}

export default function CardModel({ setSelectedModel, setSelectedMonths }: CardModelProps) {
  return (
    <Card className="w-[350px] md:w-[400px]">
      <CardHeader>
        <CardTitle>Crear Nuevo Pronóstico</CardTitle>
        <CardDescription>Selecciona los meses, productos y locales a incluir en el pronóstico.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Planificación</Label>
              <Input id="name" placeholder="Ingresa nuevo nombre " className="text-md"/>
            </div>
            
            <div className="flex flex-col gap-1">
              <MultipleSelect 
                options={models} 
                title="Modelo" 
                isMulti={false} 
                placeholder="Selecciona un modelo" 
                onChange={(selectedOption) => {
                  // Asegúrate de que `selectedOption` no esté `undefined` y pase el `id`
                  setSelectedModel(selectedOption ? String(selectedOption[0].id) : null);
                }}
              />
            </div>
            <div className="flex flex-row justify-start items-start">
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-red-500 mr-1" />
                <CardDescription>Solo Desicion Tree habilitado temporalmente.</CardDescription>
            </div>


            <MultipleSelect 
              options={months} 
              title="Meses" 
              isMulti={true} 
              placeholder="Selecciona los meses" 
              onChange={(selectedOptions) => setSelectedMonths(selectedOptions.map(opt => Number(opt.id)))}
            />
          </div>
        </form>
      </CardContent>
    </Card>
  );
}




