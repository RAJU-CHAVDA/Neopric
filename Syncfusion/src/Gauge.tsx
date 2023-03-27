import * as React from 'react';
import { LinearGaugeComponent, ILoadedEventArgs, LinearGaugeTheme, AxesDirective, AxisDirective, Inject, PointersDirective, PointerDirective, AnnotationDirective, Annotations, AnnotationsDirective } from '@syncfusion/ej2-react-lineargauge';
import './App.css';

const SAMPLE_CSS = `
    .control-fluid {
		padding: 0px !important;
    }`;

export class Gauge extends React.Component<any,any> {

    public load(args: ILoadedEventArgs): void {

    }

    render() {
        return (
            <div className='control-pane'>
                <center><h1>Gauge</h1></center>
                <style>
                    {SAMPLE_CSS}
                </style>
                <div className='control-section'>
                    <LinearGaugeComponent load={this.load.bind(this)} background='transparent' id='gauge' orientation='Horizontal'>
                        <Inject services={[Annotations]} />
                        <AxesDirective>
                            <AxisDirective minorTicks={{ interval: 2, height: 10, color: '#9E9E9E' }} majorTicks={{ interval: 10, height: 20, color: '#9E9E9E' }} labelStyle={{ offset: 48, font: { fontFamily: 'inherit' } }}>
                                <PointersDirective>
                                    <PointerDirective value={10} placement='Near' height={15} width={15} offset={-40} markerType='Triangle'>
                                    </PointerDirective>
                                </PointersDirective>
                            </AxisDirective>
                        </AxesDirective>
                        <AnnotationsDirective>
                            <AnnotationDirective content='<div style="width: 70px;margin-top: 25%;font-size: 16px;">10 MPH</div>' axisIndex={0}
                                axisValue={10}
                                x={10} zIndex='1'
                                y={-70}>
                            </AnnotationDirective>
                        </AnnotationsDirective>
                    </LinearGaugeComponent>
                </div>
            </div>
        )
    }
}