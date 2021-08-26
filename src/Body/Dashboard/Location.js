import React, { Component } from 'react';
import '../../style/style.css'
import {Redirect} from 'react-router-dom'
import GoogleMap  from './components/GoogleMap'


class Location extends Component {


  render() {
    if(!localStorage.getItem('token')){
      alert("unauthorized Access!!")
      return <Redirect to='/workerlogin'/>
  }
    return (
    
      <div >
        
           <div className="loco">
           <GoogleMap/>
           </div>
         
     
      </div>
    );
  }
}

export default Location;