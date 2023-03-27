import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Chart from './Chart';
import reportWebVitals from './reportWebVitals';
import Grid from './Grid';
import Schedule from './Schedule';
import { Gauge } from './Gauge';
import ComboBox from './ComboBox';
import { registerLicense } from '@syncfusion/ej2-base';
import DDLG from './ddlistg';
import Carousel from './Carousel';
import { Kanban } from './Kanban';
import { Breadcrumb } from './Breadcrumb';
import Treegrid from './Treegrid';
import Types from './Avatar';
import Topbar from './topbar';
import { Sidebar } from 'react-pro-sidebar';

registerLicense('Mgo+DSMBaFt/QHRqVVhkX1pGaV5FQmFJfFBmRGlZe1R0dkU3HVdTRHRcQlxiQX5Sc01gWnpfeXU=;Mgo+DSMBPh8sVXJ0S0J+XE9AdVRAQmJOYVF2R2BJflRwcF9CYkwgOX1dQl9gSX9SfkViXHddc3FWRWE=;ORg4AjUWIQA/Gnt2VVhkQlFaclxJX3xIeUx0RWFab196dFFMZF5BNQtUQF1hSn5Sd01jWHpWc3dQQmVd;OTU5MzYxQDMyMzAyZTM0MmUzMFFQK2UrclFuZVNhSFJ0Vkg3RjVOZmVmMDR2eitMSDBrbFkrV2JOVkc3bkk9;OTU5MzYyQDMyMzAyZTM0MmUzMExiTzhnSmpzbFdnaWhCdkt5OG0zWDZ2RTRmaWRKZ2o2Q2JpVE5tZ3doczA9;NRAiBiAaIQQuGjN/V0Z+WE9EaFtBVmFWf1RpR2NbfE5xflVCalhTVAciSV9jS31Td0RrWX5beHdWQ2lVUA==;OTU5MzY0QDMyMzAyZTM0MmUzMFVBZ0ZOeDc1R1ZINmRtYmt4STNyR2RGdmRRSlZOeFlibnlJbUdkQ3cyUnM9;OTU5MzY1QDMyMzAyZTM0MmUzMGtOSjVBOVhQbTJ2bVpndVNrdkVKNnBSSUNvazUzVmdJeGVYV01rMldjUEU9;Mgo+DSMBMAY9C3t2VVhkQlFaclxJX3xIeUx0RWFab196dFFMZF5BNQtUQF1hSn5Sd01jWHpWc3dTQGFd;OTU5MzY3QDMyMzAyZTM0MmUzMFdOcGwzRlFqRVhTaXZkSnArNTNFdG9CZXdZMzhNUXhIY1FYQnQ5bkRUekU9;OTU5MzY4QDMyMzAyZTM0MmUzMGN2Qk5oZmJxZ2dsWHhVNklZbG91VmZzUHVubGREZXA3anRxSkZMaGh3RlU9;OTU5MzY5QDMyMzAyZTM0MmUzMFVBZ0ZOeDc1R1ZINmRtYmt4STNyR2RGdmRRSlZOeFlibnlJbUdkQ3cyUnM9');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Sidebar/>
    <Topbar/>
    {/* <Breadcrumb/>
    <Carousel />
    <Schedule />
    <Chart />
    <Grid />
    <Treegrid/>
    <Kanban/>
    <Gauge/>
    <ComboBox/>
    <DDLG/>
    <Types/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
