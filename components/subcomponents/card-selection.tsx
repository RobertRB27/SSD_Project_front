"use client";
import { Card, CardContent } from "@/components/ui/card";
import MultipleSelectSync, { Option } from "@/components/subcomponents/multiple-select-sync";
import { families, products } from '@/data/data';
import { useState } from "react";

interface CardProductProps {
  setSelectedProducts: (products: number[]) => void;
}

export default function CardProduct({ setSelectedProducts }: CardProductProps) {
  const [selectedFamilies, setSelectedFamilies] = useState<Option[]>([]);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFamilyChange = (selected: Option | Option[]) => {
    const selectedArray = Array.isArray(selected) ? selected : [selected];
    setSelectedFamilies(selectedArray);

    // Si no hay familias seleccionadas, muestra todos los productos
    if (!selectedArray.length) {
      setFilteredProducts(products);
      return;
    }

    // Filtra productos en base a las familias seleccionadas
    const filtered = products.filter(product => 
      selectedArray.some(family => family.id === product.family)
    );
    setFilteredProducts(filtered);
  };

  const handleProductChange = (selected: Option | Option[]) => {
    const selectedProducts = Array.isArray(selected) ? selected : [selected];
    setSelectedProducts(selectedProducts.map(product => Number(product.id)));
  };

  return (
    <Card className="w-[350px] md:w-[400px]">
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4 mt-5">
            <MultipleSelectSync 
              options={families.map(family => ({ id: family.value, value: family.label }))} 
              title="Familia de Productos" 
              isMulti={false} 
              onChange={handleFamilyChange} 
              placeholder="Selecciona la familia"
            />
            <MultipleSelectSync 
              options={filteredProducts.map(product => ({ id: product.id, value: product.label }))}  // Usa `id` de productos
              title="Productos" 
              isMulti={true} 
              placeholder="Selecciona los productos"
              onChange={handleProductChange}
            />
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

