"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import MultipleSelect from "@/components/multiple-select";
import axios from "axios";

export default function ItemCard() {
  const [families, setFamilies] = useState([]);
  const [items, setItems] = useState([]);
  const [selectedFamilies, setSelectedFamilies] = useState([]);

  // Obtener valores únicos de 'family' desde la API route
  useEffect(() => {
    const fetchFamilies = async () => {
      try {
        const response = await axios.get("/api/items/family");
        console.log("Families response:", response.data); // Verificar respuesta
        const familiesData = response.data.families.map((family: string) => ({
          id: family,
          value: family,
        }));
        setFamilies(familiesData);
      } catch (error) {
        console.error("Error fetching families:", error);
      }
    };

    fetchFamilies();
  }, []);

  // Obtener 'item_nbr' basados en las familias seleccionadas
  useEffect(() => {
    const fetchItems = async () => {
      if (selectedFamilies.length === 0) return;

      try {
        const response = await axios.post("/api/items/itemNbr", {
          selectedFamilies: selectedFamilies.map((family) => family.value),
        });
        console.log("Items response:", response.data); // Verificar respuesta
        const itemsData = response.data.items.map((itemNbr: string) => ({
          id: itemNbr,
          value: itemNbr,
        }));
        setItems(itemsData);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, [selectedFamilies]);

  return (
    <Card className="w-[400px]">
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4 mt-5">
            <MultipleSelect
              title="Class"
              options={families}
              isMulti={true}
              onChange={setSelectedFamilies} // Actualiza las familias seleccionadas
            />
            <MultipleSelect
              title="Items"
              options={items} // Opciones de items basadas en las familias seleccionadas
              isMulti={true}
            />
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

