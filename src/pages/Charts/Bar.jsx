import React from 'react';
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, Inject, DataLabel, Legend, Tooltip, ColumnSeries, Category } from "@syncfusion/ej2-react-charts";
import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from "../../data/dummy";
import { useStateContext } from '../../contexts/ContextProvider';

import { ChartHeader } from '../../components';


const Bar = () => {
    const { currentMode } = useStateContext();

    return (
        <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl' >
            <ChartHeader category="Bar" title="Job Title Counts" />
            <div className='w-full' >
        <ChartComponent
            id='charts'
            primaryXAxis={barPrimaryXAxis}
            primaryYAxis={barPrimaryYAxis}
            chartArea={{ border: { width: 0 } }}
            tooltip={{enable: true}}
            background={currentMode === 'Dark' ? '#33373e' : 'white'}
            legendSettings={{ background: 'white' }}
        >
            <Inject services={[ ColumnSeries, DataLabel, Category, Legend, Tooltip]} />
            <SeriesCollectionDirective>
                {barCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
            </SeriesCollectionDirective>
                </ChartComponent>
            </div>
        </div>
    )
}

export default Bar;