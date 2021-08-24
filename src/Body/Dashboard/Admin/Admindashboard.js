import React, { Component } from 'react'
import '../../../style/admindashboard.css'
import {
    Button,Collapse,
    Navbar,
    NavbarBrand,
    UncontrolledDropdown,
    Jumbotron,
  } from 'reactstrap';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import "../../../style/verifyemployer.css"
import VerifyWorker from './VerifyWorker'
import VerifyEmployer from './VerifyEmployer'


export default class AdminDashboard extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            //  admin:{}
        }
    }

    handleLogout=(event)=>{
      
      localStorage.removeItem('token');
      window.location.href='/'
    }
    


    render() {
        return (
     <div>

     

<nav class="navbar navbar-inverse">
  <div class="container-fluid" id="containerr">
    <div class="navbar-header">
      <a class="navbar-brand" href="/admin/dashboard">NepSitter</a>
    </div>

    <p >Admin Dashboard</p>
    
    <ul class="nav navbar-nav navbar-right">
    <Button onClick={this.handleLogout} > Log Out</Button>
    </ul>
  </div>
</nav>

<ul class="card-wrapper">
  <li class="card">
    <img src='/worker.jpeg' alt='' href="/verifyworker"/>
    <h3><a href="/verifyworker">Verify Working Application</a></h3>
    <p>Verify Worker</p>
  </li>
  <li class="card">
    <img src='/employer.jpeg' alt=''/>
    <h3><a href="/verifyemployer">ID Verification of Employer</a></h3>
    <p>Verify Employer</p>
  </li>
  <li class="card">
    <img src='/report.png' alt=''/>
    <h3><a href="">List of Reported Users</a></h3>
    <p>Reported List</p>
  </li>
</ul>





      </div>
           
        )
    }
}

