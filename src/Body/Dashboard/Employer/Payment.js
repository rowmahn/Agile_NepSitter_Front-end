import React from 'react'
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
export default function Payment() {
    const [product] = React.useState({
        name: "Tesla Roadster",
        price: 64998.67,
        description: "Cool car"
      })
      async function handleToken(token, addresses) {
        const response = await axios.post(
          "http://localhost:90/checkout",
          { token, product }
        );
        const { status } = response.data;
        console.log("Response:", response.data);
        if (status === "success") {
          toast("Success! Check email for details", { type: "success" });
        } else {
          toast("Something went wrong", { type: "error" });
        }
      }
    return (
        <div>
            <StripeCheckout
            token={handleToken}
            stripeKey="pk_test_51JQEfuSC8kT63K4cSRCGFtd4Zh2jmRZbNixzyxXsawIdLyzinKC8tiL3bECh1JTRnLPC6wq6z4zvhMOyIo3vnkAK00mTU5Ze61"></StripeCheckout>
        </div>
    )
}
