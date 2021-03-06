import React from 'react';
import {AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, PieSeries} from '@syncfusion/ej2-react-charts';
import { pieChartData } from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";

const Pie = () => {
  const { currentMode } = useStateContext();
  return (
    <AccumulationChartComponent
        id="chart-pie"
        height="full"
        tooltip={{ enable: true }}
        background={currentMode === "Dark" ? "#33373E" : "#FFFFFF"}
        legendSettings={{ background: "white" }}
      >
        <Inject services={[PieSeries]} />
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective 
            dataSource={pieChartData}
            name='Sale'
            xName="x"
            yName="y"
            innerRadius="40%"
            startAngle={0}
            endAngle={360}
            radius='70%'
            explode
            explodeOffset="10%"
            explodeIndex={2}
            dataLabel={{
              visible: true,
              name: 'text',
              position: 'Inside',
              font: {
                fontWeight: '600',
                color: '#fff'
              }
            }}
          />
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
  )
}

export default Pie