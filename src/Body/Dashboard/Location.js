import React, { Component } from 'react';
import '../../style/style.css'
import GoogleMap  from './components/GoogleMap'


class Location extends Component {


  render() {
    return (
    
      <div >
           <div className="loco">Location At google Map</div>
        <GoogleMap/>
     
      </div>
    );
  }
}

export default Location;