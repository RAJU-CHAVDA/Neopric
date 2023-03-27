import React from 'react';
import './App.css';
import { ScheduleComponent, Inject, Agenda, Day, Month, Week, WorkWeek, EventSettingsModel } from '@syncfusion/ej2-react-schedule';
import { DataManager,WebApiAdaptor } from '@syncfusion/ej2-data';

export default class Schedule extends React.Component {
  private localData: EventSettingsModel = {
    dataSource: [{
      EndTime: new Date(2019, 0, 11, 6, 30),
      StartTime: new Date(2019, 0, 11, 4, 0)
    }]
  };
  private remoteData = new DataManager({
    url: 'https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData', 
    adaptor: new WebApiAdaptor, 
    crossDomain: true 
  });
 
  
  render() {
    return (
      <div>
        <center><h1>Schedule</h1></center>
        <ScheduleComponent currentView='Month'>
        {/* eventSettings={{ dataSource: this.remoteData }} selectedDate={new Date(2017, 5, 5)} >  */}
          <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
        </ScheduleComponent> 
      </div>
 
      
    );
  }
}