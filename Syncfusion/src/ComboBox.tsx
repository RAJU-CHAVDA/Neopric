import React from 'react';
import {ComboBoxComponent} from '@syncfusion/ej2-react-dropdowns';
import {employees} from './data';
import './App.css';

function ComboBox() {
  const divStyle = {
    margin: 100,
    width: 250
  }
  const customItems =(props:any) =>{
    return(
      <div>
        <img className='empImg' 
        src={'https://ej2.syncfusion.com/react/demos/src/combo-box/Employees/'+ props.EmployeeID + '.png'} alt=''/>
        <div className='ename'>{props.Name}</div>
        <div className='ejob'>{props.Designation}</div>
      </div>
    );
  }
  const customHeader=(props:any) =>{
    return(
      <div className='header'>
        <span>Photo</span>
        <span className='columnHeader'>Employee Info</span>
      </div>
    )
  }
  const customFooter=(props:any) =>{
    return(
      <div className='footer'>
        Add new items <span className='e-icons plus'></span>
      </div>
    )
  }
  return (
    <div style={divStyle}>
      <center><h1>ComboBox</h1></center>
      <ComboBoxComponent dataSource={employees} placeholder="Select a name" itemTemplate={customItems} headerTemplate={customHeader}
      footerTemplate={customFooter} noRecordsTemplate="No records available !!!"
      fields={{value:"EmployeeID", text:"Name"}}></ComboBoxComponent>
    </div>
  );
}

export default ComboBox;