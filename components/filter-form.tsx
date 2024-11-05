"use client";
import { useState } from "react";
import CardModel from "./subcomponents/card-models";
import CardProduct from "./subcomponents/card-selection";
import { Button } from "@/components/ui/button";
import CardStores from "./subcomponents/card-stores";

interface FilterFormProps {
  setIsLoading: (loading: boolean) => void;
}

export default function FilterForm({ setIsLoading }: FilterFormProps) {
  // Estados para capturar los datos de entrada
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [selectedStores, setSelectedStores] = useState<number[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  const [selectedMonths, setSelectedMonths] = useState<number[]>([]);

  // Función para manejar el envío de la solicitud
  const handleCreateForecast = async () => {
    const forecastData = {
      store_nbr: selectedStores,
      item_nbr: selectedProducts,
      months: selectedMonths,
      years: 2024,
      forecast_model: selectedModel,
    };

    try {
      setIsLoading(true); // Simula la carga

      // Enviar datos al API
      const response = await fetch("https://api-backend-production-912a.up.railway.app/predict/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(forecastData),
      });

      const result = await response.json();

      // Manejo de la respuesta
      if (response.ok) {
        console.log("Predicciones recibidas:", result.predictions);
        // Aquí puedes pasar los datos a un componente que muestre las gráficas o resultados
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