
import { MonthFromTime } from "es-abstract";
import React,{Component} from "react"
import '../../../style/payment.css'

class Payment extends Component{
state = {
    
          currentDateTime: Date().toLocaleString(),
          
    
        }
    
      


render(){
    return(
        <div>
            <div>
            <table class="body-wrap" id="wtable">
            <tbody><tr>
                <td></td>
                <td class="container" width="1000">
                    <div class="content">
                        <table class="main" width="100%" cellpadding="0" cellspacing="0" id="main1">
                            <tbody><tr>
                                <td class="content-wrap aligncenter">
                                    <table width="100%" cellpadding="0" cellspacing="0">
                                        <tbody><tr>
                                            <td class="content-block">
                                                <h2>Payment Summary</h2> June
                                                
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="content-block">
                                                <table class="invoice">
                                                    <tbody><tr>
                                                    <td>Date: { this.state.currentDateTime }</td>
                                                        
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <table class="invoice-items" cellpadding="0" cellspacing="0">
                                                                <tbody><tr>
                                                                    <td>Payment To</td>
                                                                    <td class="alignright">Worker Name</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Email</td>
                                                                    <td class="alignright">Worker Email</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Total Hour: </td>
                                                                    <td class="alignright">120</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Rate per hour</td>
                                                                    <td class="alignright">100</td>
                                                                </tr>
                                                                <tr class="total">
                                                                    <td class="alignright" width="80%">Total: </td>
                                                                    <td class="alignright">Rs 12,000</td>
                                                                </tr>
                                                            </tbody></table>

                                                            
                                                        </td>
                                                    </tr>
                                                    Choose Your Payment Method
                                                    <div class="row justify-content-center mb-4 radio-group">
                        <div class="col-sm-3 col-5">
                            <div class='radio selected mx-auto' data-value="dk"> <img class="fit-image" src="https://www.gadgetbytenepal.com/wp-content/uploads/2018/02/eSewa-Digital-Wallet-Nepal.jpeg" width="105px" height="55px"/> </div>
                        </div>
                        <div class="col-sm-3 col-5">
                            <div class='radio mx-auto' data-value="visa"> <img class="fit-image" src="https://i.imgur.com/OdxcctP.jpg" width="105px" height="55px"/> </div>
                        </div>
                        <div class="col-sm-3 col-5">
                            <div class='radio mx-auto' data-value="master"> <img class="fit-image" src="https://i.imgur.com/WIAP9Ku.jpg" width="105px" height="55px"/> </div>
                        </div>
                        <div class="col-sm-3 col-5">
                            <div class='radio mx-auto' data-value="paypal"> <img class="fit-image" src="https://i.imgur.com/cMk1MtK.jpg" width="105px" height="55px"/> </div>
                        </div> 
                    </div>
                                                </tbody></table>
                                                <button type="submit" name="pay" class="btn btn-outline-success" id="paynow">Pay Now</button>
                                            </td>
                                        </tr>
                                        
                                    </tbody></table>
                                </td>
                            </tr>
                        </tbody></table>
                        </div>
                </td>
                <td></td>
            </tr>
        </tbody></table>
           
            </div>
            
        </div>
    )
}
}

export default Payment;