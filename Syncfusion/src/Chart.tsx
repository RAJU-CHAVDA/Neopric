import * as React from 'react';
import { render } from '@testing-library/react';
import {ChartComponent,SeriesDirective,ColumnSeries,Legend,SeriesCollectionDirective,
Category, Tooltip, Inject, } from '@syncfusion/ej2-react-charts';

export let data1: Object[] = [
     {x: '2014', y: 111.1 },
     {x: '2015', y: 127.3 },
     {x: '2016', y: 143.5 },
     {x: '2017', y: 159.7 },
]

export default class chart extends React.Component<any,any> {
        render(){
        
            return (
                <div>
                    <center><h1>Chart</h1></center>
                    <ChartComponent
                    id='chart'
                    primaryXAxis={{
                        valueType: 'Category',
                        isIndexed: true
                    }}
                    tooltip={{enable:true}}
                    >
                    <Inject services={[ColumnSeries,Category,Legend,Tooltip]}/>
                    <SeriesCollectionDirective>
                            <SeriesDirective dataSource={data1} xName='x' yName='y' name='New Chart' type='Column'/>
                        </SeriesCollectionDirective>  

                    </ChartComponent>
                </div>
            )


        }

}