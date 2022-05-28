import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  HiloSeries,
  Tooltip,
  Zoom,
  Logarithmic,
  Crosshair,
} from "@syncfusion/ej2-react-charts";
import {
  financialChartData,
  FinancialPrimaryXAxis,
  FinancialPrimaryYAxis,
} from "./../../data/dummy";
import { Header } from "../../components";
import { useStateContext } from "../../contexts/ContextProvider";

const date1 = new Date("2017, 1, 1");

function filterValue(value) {
  if (value.x >= date1) {
    return value.x, value.high, value.low;
  }
}
const returtValue = financialChartData.filter(filterValue);

const Financial = () => {
  const { currentMode } = useStateContext();
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Area" title="Inflation Rate in Percentage" />
      <ChartComponent
        id="charts"
        primaryXAxis={FinancialPrimaryXAxis}
        primaryYAxis={FinancialPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === "Dark" ? "#33373E" : "#FFFFFF"}
        crosshair={{ enable: true, lineType: "Vertical", line: { width: 0 } }}
      >
        <Inject
          services={[
            DateTime,
            HiloSeries,
            Tooltip,
            Logarithmic,
            Crosshair,
            Zoom,
          ]}
        />
        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={returtValue}
            xName="x"
            yName="low"
            name="Apple Inc"
            type="Hilo"
            low="low"
            high="high"
          />
          )
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Financial;
