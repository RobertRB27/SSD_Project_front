"use client";
import FilterForm from "@/components/filter-form";
import Title from "@/components/title-page";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import ItemTable from "@/components/table/items-table";
import { Items } from "@/components/table/columns";  // Asegúrate de importar correctamente el tipo

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(false);
  const [predictions, setPredictions] = useState<Items[] | null>(null);

  return (
    <div className="flex flex-col gap-4 mx-5">
      <div className="flex flex-col items-center gap-2 mt-5">
        <Title title="Dashboard de Producción" />
        <Separator />
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <div className="w-full md:w-1/3 flex justify-center">
          <FilterForm setIsLoading={setIsLoading} setPredictions={setPredictions} />
        </div>
        <div className="w-full md:w-2/3">
          {isLoading ? (
            <div className="w-full space-y-4 mt-[50%]">
              <Progress value={43} className="w-full" />
              <p className="text-center text-muted-foreground">
                Generando pronóstico...
              </p>
            </div>
          ) : predictions ? (
            <ItemTable data={predictions} />
          ) : null}
        </div>
      </div>
    </div>
  );
}
