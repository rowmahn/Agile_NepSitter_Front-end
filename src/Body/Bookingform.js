import { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class Bookingform extends Component{
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
                <div class="form-group">
                    <label for="LOCATION">LOCATION</label>
                    <input type="name" class="form-control" id="LOCATION" placeholder="Enter Your Detail Location"/>
                </div>
                </div> */}
                
                <div class="form-group">
                    <label for="exampleFormControlSelect1">SELECT DAY</label>
                    
                    <select class="form-control" id="exampleFormControlSelect1" >
                    <option>Sunday</option>
                    <option>Monday</option>
                    <option>Tuesday</option>
                    <option>Wednesday</option>
                    <option>Thursday</option>
                    <option>Friday</option>
                    <option>Saturday</option>
                    </select>
                </div>
                <div class="form-group">
                <label for="inputMDEx1">CHOOSE YOUR TIME</label>
                <input type="time" id="time" class="form-control"/>
                
                </div>
                <div className="bookingflex2">
                    <div class="form-group">
                    <label for="exampleFormControlSelect1">SELECT HOUR</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                    <option>1 hr</option>
                    <option>2 hr</option>
                    <option>3 hr</option>
                    <option>4 hr</option>
                    <option>5 hr</option>
                    <option>More than 5 hours</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="exampleFormControlSelect1">SELECT PACKAGE</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                    <option>HOURLY</option>
                    <option>WEEKLY</option>
                    <option>MONTHLY</option>
                    </select>
                </div>
                </div>
                
                <div class="item">
                <p>DATE</p>
                <input type="date" name="bdate" id="startdate" required/>
                <i class="fas fa-calendar-alt"></i>
                </div>
                
                {/* <div class="item">
                <p>EndDate</p>
                <input type="date" name="bdate" id="enddate" required/>
                <i class="fas fa-calendar-alt"></i>
                </div> */}
                
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">MORE INFORMATION</label>
                    <textarea class="form-control" id="Moreinfo" rows="3"></textarea>
                </div>

                <button id="registerBtn" type="submit"  class="btn btn-lg btn-info">BOOK WORKER</button> 

                </form>
               
            </div>
        )
    }
}

export default Bookingform;