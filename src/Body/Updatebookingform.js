import { Component } from "react";
import axios from "axios";
const {REACT_APP_URL}=process.env
export default class Updatebookingform extends Component{
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
        id:this.props.match.params.id,
        msg:""
        
            }
        
        
        inputhandler=(e)=>{
        this.setState({
         [e.target.name]:e.target.value
             })
            }
            componentDidMount(){

                axios.get(`${REACT_APP_URL}/getsinglebooking/`+this.state.id )
                .then((response)=>{
                    
                    console.log(response)
                    this.setState({
                        Location: response.data.booking.Location,
                        Day: response.data.booking.Day,
                        Date: response.data.booking.Date,
                        Sift: response.data.booking.Sift,
                        Time: response.data.booking.Time,
                        Hours: response.data.booking.Hours,
                        Package: response.data.booking.Package
                    })
                })
                .catch((err)=>{
                    console.log(err.response)
                })
            
            }
            updatehire=(e)=>{
                e.preventDefault();
                axios.put(`${REACT_APP_URL}/updatebooking/`+this.state.id,this.state,this.state.config)
        
                .then((response)=>{
                    console.log(response)
                    // this.setState({
                    //     msg : response
                    //     // Location: "",
                    //     // Day: "",
                    //     // date:"",
                    //     // Shift: "",
                    //     // Hours: "",
                    //     // Package : ""
                    // })
                    alert("update successfull")
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
            <div>
                <div class="container66">              
                <form className="hireform">
                <h2> UPDATE BOOKING FORM</h2>
               
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

                <button id="registerBtn" type="submit"  class="btn btn-lg btn-info" onClick={this.updatehire}>Update Booking</button> 

                </form>
               
            </div>

            </div>
        )
            
        
    }}