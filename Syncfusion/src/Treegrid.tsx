import React from 'react';
import { TreeGridComponent, ColumnsDirective, ColumnDirective,Inject, Page, Edit, EditSettingsModel, Toolbar, CommandColumn } from '@syncfusion/ej2-react-treegrid';
import { summaryData } from './data';
import './App.css';
import DialogFormTemplate from './dialogTemplate';

function Treegrid() {
    const editOptions: any = {  allowAdding: true, allowEditing: true, allowDeleting: true, mode:"Dialog", template: dialogTemplate};
    const toolbarSettings: any = ["Add", "Edit", "Delete", "Update", "Cancel"];
    function dialogTemplate(props: any)
    {
        return(<DialogFormTemplate {...props} />);
    }

return (
        <TreeGridComponent dataSource={summaryData} childMapping="subtasks" treeColumnIndex={1} editSettings={editOptions} toolbar={toolbarSettings} allowPaging={true} pageSettings={{pageSize: 5}}>
                    <center><h1>TreeGrid</h1></center>
        <Inject services={[Page, Edit, Toolbar]} />                   
            <ColumnsDirective>
                <ColumnDirective field="taskID" headerText="Task ID" width='90' textAlign="Right" isPrimaryKey={true}></ColumnDirective>
                <ColumnDirective field="taskName" headerText="Task Name"></ColumnDirective>
                <ColumnDirective field="startDate" headerText="Start Date" format="yMd" type="date"></ColumnDirective>
                <ColumnDirective field="priority" headerText="Priority" editType="dropdownedit"></ColumnDirective>
            </ColumnsDirective>
        </TreeGridComponent>
        
    );
}

export default Treegrid;