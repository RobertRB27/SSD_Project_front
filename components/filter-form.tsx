import CardModel from "./subcomponents/card-models";
import CardSelection from "./subcomponents/card-selection";
import { Button } from "@/components/ui/button";
import CardStores from "./subcomponents/card-stores";


export default function FilterForm() {
  return (
    <div className="flex flex-col gap-4">
    <CardModel />
    <CardStores />
    <CardSelection />
    <div className="flex flex-row justify-center gap-4">
      <Button variant="outline">Cancelar</Button>
      <Button>Crear Pronóstico</Button>
    </div>
    </div>
  );
}