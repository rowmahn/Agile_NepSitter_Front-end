import { Component } from "react";

export default class Updatebookingform extends Component{
    render(){
        return(
            <div>
                <div class="container66">              
                <form className="hireform">
                <h2> UPDATE BOOKING FORM</h2>
               
                 <div class="form-group">
                    <label for="LOCATION">LOCATION</label>
                    <input type="text" name="Location" class="form-control" id="location" placeholder="Enter Your Detail Location"
                    />
                </div>
                
                
                <div class="form-group">
                    <label for="exampleFormControlSelect1" >SELECT DAY</label>
                    
                    <select class="form-control" id="day"  name="Day"  >
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
                <input name="Time" type="time" id="time" class="form-control" />
                
                </div>
                <div className="bookingflex2">
                    <div class="form-group">
                    <label for="exampleFormControlSelect1">hours</label>
                    <select class="form-control" id="exampleFormControlSelect1" name="Hours" >
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
                    <select class="form-control" name="Package" id="package">
                    <option selected= {this.state.Package === "Hourly"}>HOURLY</option>
                    <option selected={this.state.Package === "Weekly"}>WEEKLY</option>
                    <option selected={this.state.Package === "Monthly"}>MONTHLY</option>
                    </select>
                </div>
                </div>
                
                <div class="item">
                <p>DATE</p>
                <input type="date" name="Date" id="date"  required/>
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

                <button id="registerBtn" type="submit"  class="btn btn-lg btn-info" >BOOK WORKER</button> 

                </form>
               
            </div>

            </div>
        )
            
        
    }}