import React, { Component,log } from 'react'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Route, Redirect, BrowserRouter } from "react-router-dom";

import WorkerProfile from './WorkerProfile';
import workersidebar from './workersidebar';
export default class Workerdashboard extends Component {
    logout=()=> log(
        localStorage.removeItem('token'),
        window.location.href='/',
        alert("successfully logout!!")
      )
    render() {
        return (
            <BrowserRouter>
             <div>
           <workersidebar/>
            </div>
            </BrowserRouter>
           
        )
    }
}
