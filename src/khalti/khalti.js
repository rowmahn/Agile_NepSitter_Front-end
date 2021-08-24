import {React }from 'react'
import KhaltiCheckout from "khalti-checkout-web";
import config from './khalticonfig';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function khalti(props) {
    let checkout = new KhaltiCheckout(config);
    let buttonstyle={
        backgroundColor:"purple",
        padding:"10px",
        color:"white",
        cursor:"pointer",
        fontWeight:"bold",
        border:"1px solid white"
    }
    let hireID = {
        hireID: props.match.params.hireID
    };
    return (
        <div>
        <button onClick={()=>checkout.show({amount:1000})} style={buttonstyle}>Pay with khalti</button>
        <ToastContainer />
        </div>
    )
}
