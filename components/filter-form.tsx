import CardModel from "./subcomponents/card-models";
import CardProduct from "./subcomponents/card-selection";
import { Button } from "@/components/ui/button";
import CardStores from "./subcomponents/card-stores";

interface FilterFormProps {
  setIsLoading: (loading: boolean) => void;
}

export default function FilterForm({ setIsLoading }: FilterFormProps) {
  return (
    <div className="flex flex-col gap-4">
    <CardModel />
    <CardStores />
    <CardProduct />
    <div className="flex flex-row justify-center gap-4">
      <Button variant="outline">Cancelar</Button>
      <Button onClick={() => setIsLoading(true)}>Crear Pronóstico</Button>
    </div>
    </div>
  );
}