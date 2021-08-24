import React, { Component } from 'react'
import KhaltiCheckout from "khalti-checkout-web";
import config from './khalticonfig';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
let checkout = new KhaltiCheckout(config);
let buttonstyle={
    backgroundColor:"purple",
    padding:"10px",
    color:"white",
    cursor:"pointer",
    fontWeight:"bold",
    border:"1px solid white"
}
let khaliti_page={
    margin:"200px",
    padding:"20px",
    backgroundImage:"linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)"
}
// let hireID = {
//     hireID: props.match.params.hireID
// };

export default class khalti extends Component {
    state={
        workinghour:this.props.match.params.workinghour,
    }
    render() {
        return (
            <div style={khaliti_page}>
        {console.log(this.state.workinghour)}
        <button onClick={()=>checkout.show({amount:10000*this.state.workinghour})} style={buttonstyle}>Pay with khalti</button>
        <ToastContainer />
        </div>
        )
    }
}
