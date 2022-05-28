import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Category, Legend, Tooltip, RangeColorSettingDirective, RangeColorSettingsDirective } from '@syncfusion/ej2-react-charts';
import { colorMappingData, ColorMappingPrimaryXAxis, ColorMappingPrimaryYAxis, rangeColorMapping } from './../../data/dummy';
import { Header } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';

const ColorMapping = () => {
  const { currentMode } = useStateContext();
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category='Area' title='Inflation Rate in Percentage' />
      <ChartComponent
      id='charts'
      primaryXAxis={ColorMappingPrimaryXAxis}
      primaryYAxis={ColorMappingPrimaryYAxis}
      chartArea={{border: {width: 0}}}
      tooltip={{enable: true}}
      background={currentMode === 'Dark' ? '#33373E' : '#FFFFFF'}
      legendSettings={{ mode: "Range", background: 'white' }}
    >
      <Inject services={[ColumnSeries, Legend, Tooltip, Category ]} />
      <SeriesCollectionDirective>
        <SeriesDirective 
          dataSource={colorMappingData[0]}
          name='USA'
          xName='x'
          yName='y'
          type='Column'
          cornerRadius={{
            topLeft: 10,
            topRight: 10
          }}
        />
      </SeriesCollectionDirective>
      <RangeColorSettingsDirective>
        {rangeColorMapping.map((item, index) => <RangeColorSettingDirective key={index} {...item} />)}
      </RangeColorSettingsDirective>
    </ChartComponent>
    </div>
  )
}

export default ColorMapping;