import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { MenuComponent, MenuItemModel, ToolbarComponent, ItemsDirective, ItemDirective, MenuAnimationSettingsModel } from '@syncfusion/ej2-react-navigations';
import { DropDownButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import { removeClass } from '@syncfusion/ej2-base';
import './toolbar-integration.css';
import * as dataSource from './menu-data.json';

function ToolbarIntegration() {
    let data = dataSource as any;
    let searchTemplate: string = '<div class="e-input-group"><input class="e-input" type="text" placeholder="Search" /><span class="e-input-group-icon em-icons e-search"></span></div>';
    let tbObj: ToolbarComponent;

    function menuTemplate(): JSX.Element {
        return (<MenuComponent id="menuele" items={data.toolbarIntegrationData} />);
    }

    function ddbTemplate(): any {
        return (<DropDownButtonComponent id="userDBtn" content='Andrew' created={onCreated} items={data.userData}></DropDownButtonComponent>);
    }

    function onCreated(): void {
        tbObj.refreshOverflow();
        removeClass([tbObj.element.querySelector('.e-shopping-cart')], 'e-icons');
    }

    return (
        <div className='control-pane'>
            <div id="menu-control" className='control-section'>
                <div className='toolbar-menu-control'>
                    <ToolbarComponent id="toolbar" ref={(scope) => { tbObj = scope; }} >
                        <ItemsDirective>
                            <ItemDirective template={menuTemplate} />
                            <ItemDirective template={searchTemplate} align='Right' />
                            <ItemDirective template={ddbTemplate} align='Right' />
                            <ItemDirective prefixIcon='em-icons e-shopping-cart' align='Right' />
                        </ItemsDirective>
                    </ToolbarComponent>
                </div>
            </div>
        </div>
    )
}
export default ToolbarIntegration;