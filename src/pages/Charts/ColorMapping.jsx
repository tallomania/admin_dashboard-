import React from 'react';
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, Inject, RangeColorSettingsDirective, RangeColorSettingDirective, Legend, Tooltip, ColumnSeries, Category } from "@syncfusion/ej2-react-charts";
import { colorMappingData, rangeColorMapping, ColorMappingPrimaryXAxis, ColorMappingPrimaryYAxis } from "../../data/dummy";
import { useStateContext } from '../../contexts/ContextProvider';

import { ChartHeader } from '../../components';


const ColorMapping = () => {
    const { currentMode } = useStateContext();

    return (
        <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl' >
            <ChartHeader category="Color Mapping" title="UK Climate - Weather By Month" />
            <div className='w-full' >
                <ChartComponent
                    id='charts'
                    primaryXAxis={ColorMappingPrimaryXAxis}
                    primaryYAxis={ColorMappingPrimaryYAxis}
                    chartArea={{ border: { width: 0 } }}
                    tooltip={{ enable: true }}
                    background={currentMode === 'Dark' ? '#2d3a52' : 'white'}
                    legendSettings={{ background: 'white' }}
                >
                    <Inject services={[ColumnSeries, Category, Legend, Tooltip]} />
                    <SeriesCollectionDirective>
                        <SeriesDirective
                            dataSource={colorMappingData[0]}
                            name='UK'
                            xName='x'
                            yName='y'
                            type='Column'
                            cornerRadius={{
                                topLeft: 10,
                                topRight: 10,
                            }}
                        />
                    </SeriesCollectionDirective>
                    <RangeColorSettingsDirective>
                        {rangeColorMapping.map((item, index) => <RangeColorSettingDirective key={index} {...item} />)}
                    </RangeColorSettingsDirective>
                </ChartComponent>
            </div>
        </div>
    )
};

export default ColorMapping;