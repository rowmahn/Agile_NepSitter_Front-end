import { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import '../style/bookingform.css';
import axios from 'axios'

class Bookingform extends Component{
    state={

Location: "",
Day: "",
Date: "",
Sift:"",
Time:"",
Hours:"",
Package:"",
config : {
    headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
},
wid:this.props.match.params.wid,
msg:""

    }


inputhandler=(e)=>{
this.setState({
 [e.target.name]:e.target.value
     })
    }

    sethire=(e)=>{
        e.preventDefault();
        
        
        axios.post('http://localhost:90/hireworker/'+this.state.wid,this.state,this.state.config)
        
        .then((response)=>{
            console.log(response)
            this.setState({
                msg : response
                // Location: "",
                // Day: "",
                // date:"",
                // Shift: "",
                // Hours: "",
                // Package : ""
            })
            alert("Booked sucessfully")
            window.location.href="/employerdashboard"
            
            })
            .catch(err=>{
                    this.setState({
                        msg : err.response
                    })
                
            
            })
    }


        

    render(){
        return(
            <div class="container66">              
                <form className="hireform">
                <h2> BOOKING FORM</h2>
                {/* <div className="bookingflex">
                    <div class="form-group">
                    <label for="EMPLOYER NAME">EMPLOYER NAME</label>
                    <input type="name" class="form-control" id="EMPLOYER NAME" placeholder="Enter full name"/>
                </div>
                <div class="form-group">
                    <label for="ADDRESS">ADDRESS</label>
                    <input type="name" class="form-control" id="ADDRESS" placeholder="Enter Your Address"/>
                </div>
                </div>
                <div className="bookingflex"><div class="form-group">
                    <label for="EMPLOYER NAME">CONTACT NO.</label>
                    <input type="number" class="form-control" id="CONTACT NO" placeholder="Enter Your Contact number"/>
                </div>
                 */}
                 <div class="form-group">
                    <label for="LOCATION">LOCATION</label>
                    <input type="text" name="Location" class="form-control" id="location" placeholder="Enter Your Detail Location"
                    value={this.state.Location} onChange={this.inputhandler}/>
                </div>
                
                
                <div class="form-group">
                    <label for="exampleFormControlSelect1" >SELECT DAY</label>
                    
                    <select class="form-control" id="day"  name="Day"  value={this.state.Day} onChange={this.inputhandler}>
                    <option selected={this.state.Day === "Sunday"}>Sunday</option>
                    <option selected={this.state.Day === "Monday"}>Monday</option>
                    <option selected={this.state.Day === "Tuesday"}>Tuesday</option>
                    <option selected={this.state.Day === "Wednesday"}>Wednesday</option>
                    <option selected={this.state.Day === "Thrusday"}>Thursday</option>
                    <option selected={this.state.Day === "Friday"}>Friday</option>
                    <option selected={this.state.Day === "Saturday"}>Saturday</option>
                    </select>
                </div>
                <div class="form-group">
                <label for="inputMDEx1">CHOOSE YOUR TIME</label>
                <input name="Time" type="time" id="time" class="form-control" value={this.state.Time} onChange={this.inputhandler}/>
                
                </div>
                <div className="bookingflex2">
                    <div class="form-group">
                    <label for="exampleFormControlSelect1">hours</label>
                    <select class="form-control" id="exampleFormControlSelect1" name="Hours" value={this.state.Hours} onChange={this.inputhandler}>
                    <option selected={this.state.Hours === "1"}>1 hr</option>
                    <option selected={this.state.Hours === "2"}>2 hr</option>
                    <option selected={this.state.Hours === "3"}>3 hr</option>
                    <option selected={this.state.Hours === "4"}>4 hr</option>
                    <option selected={this.state.Hours === "5"}>5 hr</option>
                    {/* <option selected={this.state.Hours === "1"}>More than 5 hours</option> */}
                    </select>
                </div>

                <div class="form-group">
                    <label for="exampleFormControlSelect1">SELECT PACKAGE</label>
                    <select class="form-control" name="Package" id="package" value={this.state.Package} onChange={this.inputhandler}>
                    <option selected= {this.state.Package === "Hourly"}>HOURLY</option>
                    <option selected={this.state.Package === "Weekly"}>WEEKLY</option>
                    <option selected={this.state.Package === "Monthly"}>MONTHLY</option>
                    </select>
                </div>
                </div>
                
                <div class="item">
                <p>DATE</p>
                <input type="date" name="Date" id="date" value={this.state.Date} onChange={this.inputhandler} required/>
                <i class="fas fa-calendar-alt"></i>
                </div>
                
                {/* <div class="item">
                <p>EndDate</p>
                <input type="date" name="bdate" id="enddate" required/>
                <i class="fas fa-calendar-alt"></i>
                </div> */}
                
                {/* <div class="form-group">
                    <label for="exampleFormControlTextarea1">MORE INFORMATION</label>
                    <textarea class="form-control" id="Moreinfo" rows="3"></textarea>
                </div> */}

                <button id="registerBtn" type="submit"  class="btn btn-lg btn-info" onClick={this.sethire}>BOOK WORKER</button> 

                </form>
               
            </div>
        )
    }
}

export default Bookingform;