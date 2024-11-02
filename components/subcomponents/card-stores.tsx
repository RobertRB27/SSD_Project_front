"use client";

import { Card, CardContent } from "@/components/ui/card";
import MultipleSelectSync, { Option }from "@/components/subcomponents/multiple-select-sync";

import { cities, stores } from '@/data/data';
import { useState } from "react";




export default function CardStores() {

  const [selectedCities, setSelectedCities] = useState<Option[]>([]);
  const [filteredStores, setFilteredStores] = useState(stores);

  // Mapear las tiendas al formato esperado por MultipleSelectSync
  const mappedStores: Option[] = filteredStores.map(store => ({
    id: store.id,
    value: store.label  // Asumiendo que quieres usar el campo 'label' como valor mostrado
  }));

  const handleCityChange = (selected: Option | Option[]) => {
    // Asegurarnos de que siempre trabajamos con un array
    const selectedArray = Array.isArray(selected) ? selected : [selected];
    setSelectedCities(selectedArray);
    
    // Si no hay ciudades seleccionadas, mostrar todas las tiendas
    if (!selectedArray.length) {
      setFilteredStores(stores);
      return;
    }

    // Filtrar tiendas que estén en cualquiera de las ciudades seleccionadas
    const filteredStores = stores.filter(store => 
      selectedArray.some(city => city.id === store.city)
    );
    setFilteredStores(filteredStores);
  };


  return (
    <Card className="w-[350px] md:w-[400px]" >
        <CardContent>
        <form>
          <div className="grid w-full items-center gap-4 mt-5">
            <MultipleSelectSync options={cities} title="Ciudad" isMulti={true} onChange={handleCityChange} placeholder="Selecciona una ciudad"/>

            <MultipleSelectSync options={mappedStores} title="Locales" isMulti={true} placeholder="Selecciona los locales"/>

          </div>
        </form>
      </CardContent>
   
    </Card>
  );
}
