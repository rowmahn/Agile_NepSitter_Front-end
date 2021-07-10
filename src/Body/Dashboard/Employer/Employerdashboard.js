import React, { Component,log } from 'react'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import {Redirect} from 'react-router-dom'

export default class Employerdashboard extends Component {
    logout=()=> log(
        localStorage.removeItem('token'),
        window.location.href='/',
        alert("successfully logout!!")
      )
    render() {
        if(!localStorage.getItem('token')){
            alert("unauthorized Access!!")
            return <Redirect to='/login'/>
        }
        return (
            <div className="">
                <h1 className="text-primary">Employer dashboard comming soon..</h1>
                <button className="btn-logout" onClick={this.logout}>Logout<ExitToAppIcon className="ml-2"/></button>
            </div>
        )
    }
}
