"use client";
import { Card, CardContent } from "@/components/ui/card";
import MultipleSelectSync, { Option } from "@/components/subcomponents/multiple-select-sync";
import { cities, stores } from '@/data/data';
import { useState } from "react";

interface CardStoresProps {
  setSelectedStores: (stores: number[]) => void;
}

export default function CardStores({ setSelectedStores }: CardStoresProps) {
  const [selectedCities, setSelectedCities] = useState<Option[]>([]);
  const [filteredStores, setFilteredStores] = useState(stores);

  const handleCityChange = (selected: Option | Option[]) => {
    const selectedArray = Array.isArray(selected) ? selected : [selected];
    setSelectedCities(selectedArray);

    // Si no hay ciudades seleccionadas, muestra todas las tiendas
    if (!selectedArray.length) {
      setFilteredStores(stores);
      return;
    }

    // Filtra tiendas en base a las ciudades seleccionadas
    const filtered = stores.filter(store => 
      selectedArray.some(city => city.id === store.city)
    );
    setFilteredStores(filtered);
  };

  const handleStoreChange = (selected: Option | Option[]) => {
    const selectedStores = Array.isArray(selected) ? selected : [selected];
    setSelectedStores(selectedStores.map(store => Number(store.id)));
  };

  return (
    <Card className="w-[350px] md:w-[400px]">
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4 mt-5">
            <MultipleSelectSync 
              options={cities} 
              title="Ciudad" 
              isMulti={true} 
              onChange={handleCityChange} 
              placeholder="Selecciona una ciudad" 
            />
            <MultipleSelectSync 
              options={filteredStores.map(store => ({ id: store.id, value: store.label }))} 
              title="Locales" 
              isMulti={true} 
              placeholder="Selecciona los locales" 
              onChange={handleStoreChange} 
            />
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
