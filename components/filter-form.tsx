"use client";
import { useState } from "react";
import CardModel from "./subcomponents/card-models";
import CardProduct from "./subcomponents/card-selection";
import { Button } from "@/components/ui/button";
import CardStores from "./subcomponents/card-stores";
import { months, stores, products } from '@/data/data';
import { Items } from "@/components/table/columns";

interface FilterFormProps {
  setIsLoading: (loading: boolean) => void;
  setPredictions: (predictions: Items[]) => void;
}

export default function FilterForm({ setIsLoading, setPredictions }: FilterFormProps) {
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [selectedStores, setSelectedStores] = useState<number[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  const [selectedMonths, setSelectedMonths] = useState<number[]>([]);

  const handleCreateForecast = async () => {
    const forecastData = {
      store_nbr: selectedStores,
      item_nbr: selectedProducts,
      months: selectedMonths,
      years: [2024],
      forecast_model: selectedModel,
    };

    try {
      setIsLoading(true);

      const response = await fetch("https://api-backend-production-912a.up.railway.app/predict/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(forecastData),
      });

      const result = await response.json();

      if (response.ok) {
        const formattedData = result.predictions.map((prediction: [number, number, number, number, number]) => {
          const [store_nbr, item_nbr, month, , amount] = prediction;

          const store = stores.find((s) => s.id === store_nbr)?.label || "Unknown Store";
          const name = products.find((p) => p.id === item_nbr)?.label || "Unknown Product";
          const monthName = months.find((m) => m.id === month)?.value || "Unknown Month";

          return {
            item_nbr,
            name,
            store,
            month: monthName,
            amount,
          };
        });

        setPredictions(formattedData);  // Pasar los datos formateados al componente padre
      } else {
        console.error("Error en la predicción:", result.detail);
      }
    } catch (error) {
      console.error("Error al conectar con el API:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <CardModel setSelectedModel={setSelectedModel} setSelectedMonths={setSelectedMonths} />
      <CardStores setSelectedStores={setSelectedStores} />
      <CardProduct setSelectedProducts={setSelectedProducts} />

      <div className="flex flex-row justify-center gap-4">
        <Button variant="outline">Cancelar</Button>
        <Button onClick={handleCreateForecast}>Crear Pronóstico</Button>
      </div>
    </div>
  );
}
