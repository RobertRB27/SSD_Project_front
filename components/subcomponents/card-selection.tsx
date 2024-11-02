"use client";

import { Card, CardContent } from "@/components/ui/card";
import MultipleSelectSync, { Option }from "@/components/subcomponents/multiple-select-sync";

import { families, products } from '@/data/data';
import { useState } from "react";




export default function CardProduct() {

  const [selectedFamilies, setSelectedFamilies] = useState<Option[]>([]);
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Mapear las tiendas al formato esperado por MultipleSelectSync
  const mappedProducts: Option[] = filteredProducts.map(product => ({
    id: product.label,
    value: product.label  // Asumiendo que quieres usar el campo 'label' como valor mostrado
  }));

  const handleCityChange = (selected: Option | Option[]) => {
    // Asegurarnos de que siempre trabajamos con un array
    const selectedOption = selected as Option; // Tratamos selected como una única opción
    setSelectedFamilies([selectedOption]);
    
    // Si no hay selección, mostrar todos los productos
    if (!selectedOption) {
      setFilteredProducts(products);
      return;
    }

    // Filtrar productos que coincidan con la familia seleccionada
    const filteredProducts = products.filter(product => 
      selectedOption.id === product.family
    );
    setFilteredProducts(filteredProducts);
  };

  // Mapear las familias al formato esperado por MultipleSelectSync
  const mappedFamilies: Option[] = families.map(family => ({
    id: family.value,
    value: family.label
  }));

  return (
    <Card className="w-[350px] md:w-[400px]" >
        <CardContent>
        <form>
          <div className="grid w-full items-center gap-4 mt-5">
            <MultipleSelectSync options={mappedFamilies} title="Familia de Productos" isMulti={false} onChange={handleCityChange} placeholder="Selecciona las familias"/>

            <MultipleSelectSync options={mappedProducts} title="Productos" isMulti={true} placeholder="Selecciona los productos"/>

          </div>
        </form>
      </CardContent>
   
    </Card>
  );
}