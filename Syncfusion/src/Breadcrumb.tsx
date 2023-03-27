import React from 'react';
import './App.css';
import { BreadcrumbComponent, BreadcrumbItemDirective, BreadcrumbItemsDirective } from '@syncfusion/ej2-react-navigations';
import Chart from './Chart';

export class Breadcrumb extends React.Component {

          
  render() {
    return (
      <BreadcrumbComponent >
      <center><h1>Breadcrumb</h1></center>
        <BreadcrumbItemsDirective>
        <BreadcrumbItemDirective iconCss="e-icons e-home" url="https://ej2.syncfusion.com/home/react.html#platform"/>
            <BreadcrumbItemDirective text="Breadcrumb" url='https://ej2.syncfusion.com/react/documentation/breadcrumb/getting-started'></BreadcrumbItemDirective>
            <BreadcrumbItemDirective text="Icons" url='https://ej2.syncfusion.com/react/documentation/breadcrumb/icons'></BreadcrumbItemDirective>
            <BreadcrumbItemDirective text="Navigations" url='https://ej2.syncfusion.com/react/documentation/breadcrumb/navigation'></BreadcrumbItemDirective>
            <BreadcrumbItemDirective text="Overflow" url='https://ej2.syncfusion.com/react/documentation/breadcrumb/overflow-mode'></BreadcrumbItemDirective>
        </BreadcrumbItemsDirective> 
      </BreadcrumbComponent>
      
    );
  }
}

