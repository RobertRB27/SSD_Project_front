import { BarChartProduct } from "./subcomponents/bar-chart";
import { InteractiveChart } from "./subcomponents/interactive-chart";
import { LineChartCity } from "./subcomponents/line-chart";
import PieChartStore from "./subcomponents/pie-chart";



export default function ChartGrid() {
  return (
    <div className="flex flex-col gap-4 justify-center">
        <div className="flex flex-row gap-5 justify-center">
        <PieChartStore />
        <BarChartProduct  />
        <LineChartCity />
        </div>
        <div className="gap ">
            <InteractiveChart />
        </div>
    </div>
  );
}