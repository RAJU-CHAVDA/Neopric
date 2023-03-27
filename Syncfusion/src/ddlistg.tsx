import React from 'react';
import {DropDownListComponent} from '@syncfusion/ej2-react-dropdowns';
import {employees, socialMedia} from './data';
import './App.css';

function DDLG() {
  const divStyle = {
    margin: 100,
    width: 250
  }

  const groupingTemplate=(props:any)=>{
    return(
      <div className='customGroup'>
        {props.Designation}
      </div>
    );
  }
  
  return (
    <div>
      <div style={divStyle}>
      <center><h1>DropDownList</h1></center>
        <DropDownListComponent 
        dataSource={employees} 
        placeholder="Select a nme"
        fields={{
          text:"Name", 
          value:"EmployeeID",
          groupBy: "Designation"
        }}
        groupTemplate={groupingTemplate}></DropDownListComponent>
      </div>
      <div style={divStyle}>
        <DropDownListComponent id="icons"
          dataSource={socialMedia}
          fields={{
            text:"SocialMedia",
            value: "Id",
            iconCss:"Class"
          }}>
        </DropDownListComponent>
      </div>
    </div>
  );
} 

export default DDLG;