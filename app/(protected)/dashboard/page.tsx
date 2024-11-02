"use client";
import ChartGrid from "@/components/charts-grid";
import FilterForm from "@/components/filter-form";
import Title from "@/components/title-page";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(false);
  const [showChart, setShowChart] = useState(false);

  useEffect(() => {
    if (isLoading) {
      // Simulamos un delay de 2 segundos
      const timer = setTimeout(() => {
        setIsLoading(false);
        setShowChart(true); 
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <div className="flex flex-col gap-4 mx-5" >
      <div className="flex flex-col items-center gap-2 mt-5" >
        <Title title="Dashboard de Producción" />
        <Separator />
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <div className="w-full md:w-1/3 flex justify-center">
          <FilterForm setIsLoading={setIsLoading} />
        </div>
        <div className="w-full md:w-2/3">
          {isLoading ? (
            <div className="w-full space-y-4">
              <Progress value={23} className="w-full" />
              <p className="text-center text-muted-foreground">
                Generando pronóstico...
              </p>
            </div>
          ) : showChart ? (
            <ChartGrid />
          ) : null}
        </div>
      </div>
    </div>
  );
}