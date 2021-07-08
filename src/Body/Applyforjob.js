import {Component} from "react"
import '../style/applyforjob.css'
import axios from 'axios'

class Applyforjob extends Component{

  state={
    fname: "",
    lname: "",
    bdate: "",
    phone: "",
    email: "",
    password:"",
    address: "",
    city: "",
    district:"",
    yourself:"",
    certificate:"",
    gender:"",
    province:"",
    study:"",
    status:"",
    smoke:"",
    drink:"",
    jobcategory:"",
    availabilityMorning:"",
    availabilityAfternoon:"",
    availabilityEvening:"",
    availabilityNight:"",

  }
  inputValue = (e)=>
    this.setState({
        [e.target.name]: e.target.value
    })
  applyforjobdata = (e)=>{
    e.preventDefault();
    const data = {
      fname: this.state.fname,
      lname: this.state.lname,
      bdate: this.state.bdate,
      phone: this.state.phone,
      email: this.state.email,
      password: this.state.password,
      address: this.state.address,
      city: this.state.city,
      district: this.state.district,
      youself: this.state.yourself,
      certificate: this.state.certificate,
      gender: this.state.gender,
      province: this.state.province,
      study: this.state.study,
      status: this.state.status,
      smoke: this.state.smoke,
      drink: this.state.drink,
      jobcategory: this.state.jobcategory,
      availabilityMorning: this.state.availabilityMorning,
      availabilityAfternoon: this.state.availabilityAfternoon,
      availabilityEvening: this.state.availabilityEvening,
      availabilityNight: this.state.availabilityNight,

      
    }

    
    axios.post("http://localhost:90/applyforjob",data)
    console.log("dfmv")
        .then(response=>{
            console.log(response)

               
        })
        .catch(err=>{
            console.log(err);
            
        })
  }
    render(){
        return(
            <div>
                <div>
                <div class="testbox">
      <form action="/" className="form1">
        <div class="banner">
          <h1>Worker's Job Application Form</h1>
        </div>
        <div class="item">
          <p>Name</p>
          <div class="name-item">
            <input type="text" name="fname" placeholder="First" value={this.state.fname} onChange={(event)=>{this.setState({fname: event.target.value})}} />
            <input type="text" name="lname" placeholder="Last" value={this.state.lname} onChange={(event)=>{this.setState({lname: event.target.value})}}/>
          </div>
        </div>
        <div class="item">
          <p>Birth Date</p>
          <input type="date" name="bdate" value={this.state.bdate} onChange={(event)=>{this.setState({bdate: event.target.value})}} required/>
          <i class="fas fa-calendar-alt"></i>
        </div>
        <div class="question">
          <p>Gender</p>
          <div class="question-answer" value={this.state.value} onChange={(event)=>{this.setState({value: event.target.value})}} >
            <input type="radio" value="male" id="radio_16" name="gender"/>
            <label for="radio_16" class="radio"><span>Male</span></label>
            <input type="radio" value="female" id="radio_17" name="gender" />
            <label for="radio_17" class="radio"><span>Female</span></label>
            <input type="radio" value="others" id="radio_18" name="gender" />
            <label for="radio_18" class="radio"><span>Others</span></label>
          </div>
        </div>
        <div class="item">
          <p>Phone</p>
          <input type="number" name="phone" value={this.state.phone} onChange={(event)=>{this.setState({phone: event.target.value})}} required/>
        </div>
        <div class="item">
          <p>Email</p>
          <input type="text" name="email" value={this.state.email} onChange={(event)=>{this.setState({email: event.target.value})}} required/>
        </div>
        <div class="item">
          <p>Password</p>
          <input type="password" name="password" value={this.state.password} onChange={(event)=>{this.setState({bdate: event.target.password})}}required/>
        </div>
        <div class="item">
          <p>Confirm Password</p>
          <input type="password" name="cpassword" required/>
        </div>
        <div class="item">
          <p>Address</p>
          <input type="text" name="address" placeholder="Street address" value={this.state.address} onChange={(event)=>{this.setState({address: event.target.value})}}/>
          
          <div class="city-item">
            <input type="text" name="city" placeholder="City" value={this.state.city} onChange={(event)=>{this.setState({city: event.target.value})}} />
            <input type="text" name="district" placeholder="District" value={this.state.district} onChange={(event)=>{this.setState({bdate: event.target.value})}}/>
            
            <select name= 'province' onChange={(event)=>{this.setState({value: event.target.value})}} value={this.state.value}>
              <option value="">Province</option>
              <option value="Province 1">Province 1</option>
              <option value="Province 2">Province 2</option>
              <option value="Bagmati Province">Bagmati Province</option>
              <option value="Gandaki Province">Gandaki Province</option>
              <option value="Lumbini Province">Lumbini Province</option>
              <option value="Karnali Province">Karnali Province</option>
              <option value="Sudurpashchim Province">Sudurpashchim Province</option>
            </select>
          </div>
        </div>
        <div class="question" onChange={this.inputValue}>
          <p>Do you study?</p>
          <div class="question-answer">
            <input type="radio" value="yes" id="radio_3" name="study"/>
            <label for="radio_3" class="radio"><span>Yes</span></label>
            <input type="radio" value="no" id="radio_4" name="study" />
            <label for="radio_4" class="radio"><span>No</span></label>
          </div>
        </div>
        <div class="question" onChange={this.inputValue}>
          <p>Martial Status</p>
          <div class="question-answer">
            <input type="radio" value="single" id="single" name="status"/>
            <label for="single" class="radio"><span>Single</span></label>
            <input type="radio" value="married" id="married" name="status" />
            <label for="married" class="radio"><span>Married</span></label>
            <input type="radio" value="other" id="other" name="status" />
            <label for="married" class="radio"><span>Other</span></label>
          </div>
        </div>
        <div class="question" onChange={this.inputValue}>
          <p>Do you smoke?</p>
          <div class="question-answer">
            <input type="radio" value="yes" id="radio_5" name="smoke"/>
            <label for="radio_5" class="radio"><span>Yes</span></label>
            <input type="radio" value="no" id="radio_6" name="smoke" />
            <label for="radio_6" class="radio"><span>No</span></label>
          </div>
        </div>
        <div class="question" onChange={this.inputValue}>
          <p>Do you drink?</p>
          <div class="question-answer">
            <input type="radio" value="yes" id="radio_7" name="drink"/>
            <label for="radio_7" class="radio"><span>Yes</span></label>
            <input type="radio" value="no" id="radio_8" name="drink" />
            <label for="radio_8" class="radio"><span>No</span></label>
            <input type="radio" value="every once in a while" id="once" name="drink" />
            <label for="once" class="radio"><span>Every once in a while</span></label>
          </div>
        </div>
        <div class="item">
          <p>Do you have any Certificates/Experience?</p>
          <textarea rows="3" value={this.state.certificate} onChange={(event)=>{this.setState({certificate: event.target.certificate})}}></textarea>
        </div>
        <div class="item">
          <p>Please describe yourself</p>
          <textarea rows="3" value={this.state.yourself} onChange={(event)=>{this.setState({yourself: event.target.value})}}></textarea>
        </div>
        <div class="question">
        <p>Job Categories Checklist:<span class="required">*</span></p>
        <small>Please choose post/s of your interest: </small>
        <div class="question-answer checkbox-item" >
          <div onSelect={this.inputValue} value={this.state.value}>
            <input type="checkbox" value="Baby Sitting" id="check_1" name="jobcategory" required/>
            <label for="check_1" class="checks"><span>Baby Sitting</span></label>
          </div>
          <div onSelect={this.inputValue} value={this.state.value}>
            <input type="checkbox" value="Pet Sitting" id="check_2" name="jobcategory" required/>
            <label for="check_2" class="checks"><span>Pet Sitting</span></label>
          </div>
          <div onSelect={this.inputValue} value={this.state.value}>
            <input type="checkbox" value="House Sitting" id="check_3" name="jobcategory" required/>
            <label for="check_3" class="checks"><span>House Sitting</span></label>
          </div>
          <div onSelect={this.inputValue} value={this.state.value}>
            <input type="checkbox" value="Nanny" id="check_4" name="jobcategory" required/>
            <label for="check_4" class="checks"><span>Nanny</span></label>
          </div>
          <div onSelect={this.inputValue} value={this.state.value}>
            <input type="checkbox" value="Senior Care" id="check_5" name="jobcategory" required/>
            <label for="check_5" class="checks"><span>Senior Care</span></label>
          </div>
          <div onSelect={this.inputValue} value={this.state.value}>
            <input type="checkbox" value="Granny Storytime" id="check_6" name="jobcategory" required/>
            <label for="check_6" class="checks"><span>Granny Storytime</span></label>
          </div> 
        </div></div>
<p></p>
        <div class="question">
        <p>Availability Checklist:<span class="required">*</span></p>
        <small>Please check as per you availability: </small>
          <table>
            <thead>
              <tr>
                <th class="first-col"></th>
                <th>Sunday</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                <th>Saturday</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="first-col"><b>Morning: 6 AM - 12 PM</b></td>
                <td><input type="checkbox" value="Sunday" id="check_7" name="availabilityMorning" onSelect={this.inputValue} /></td>
                <td><input type="checkbox" value="Monday" id="check_7" name="availabilityMorning" onSelect={this.inputValue}/></td>
                <td><input type="checkbox" value="Tuesday" id="check_7" name="availabilityMorning" onSelect={this.inputValue}/></td>
                <td><input type="checkbox" value="Wednesday" id="check_7" name="availabilityMorning"onSelect={this.inputValue} /></td>
                <td><input type="checkbox" value="Thursday" id="check_7" name="availabilityMorning" onSelect={this.inputValue}/></td>
                <td><input type="checkbox" value="Friday" id="check_7" name="availabilityMorning" onSelect={this.inputValue}/></td>
                <td><input type="checkbox" value="Saturday" id="check_7" name="availabilityMorning"onSelect={this.inputValue} /></td>
              </tr>
              <tr>
                <td class="first-col"><b>Afternoon: 12PM - 6 PM</b></td>
                <td><input type="checkbox" value="Sunday" id="check_7" name="availabilityAfternoon" onSelect={this.inputValue}/></td>
                <td><input type="checkbox" value="Monday" id="check_7" name="availabilityAfternoon" onSelect={this.inputValue}/></td>
                <td><input type="checkbox" value="Tuesday" id="check_7" name="availabilityAfternoon" onSelect={this.inputValue}/></td>
                <td><input type="checkbox" value="Wednesday" id="check_7" name="availabilityAfternoon" onSelect={this.inputValue}/></td>
                <td><input type="checkbox" value="Thurday" id="check_7" name="availabilityAfternoon" onSelect={this.inputValue}/></td>
                <td><input type="checkbox" value="Friday" id="check_7" name="availabilityAfternoon" onSelect={this.inputValue}/></td>
                <td><input type="checkbox" value="Saturday" id="check_7" name="availabilityAfternoon"onSelect={this.inputValue} /></td>
              </tr>
              <tr>
                <td class="first-col"><b>Evening: 6PM - 12 AM</b> </td>
                <td><input type="checkbox" value="Sunday" id="check_7" name="availabilityEvening" onSelect={this.inputValue}/></td>
                <td><input type="checkbox" value="Monday" id="check_7" name="availabilityEvening" onSelect={this.inputValue}/></td>
                <td><input type="checkbox" value="Tuesday" id="check_7" name="availabilityEvening" onSelect={this.inputValue}/></td>
                <td><input type="checkbox" value="Wednesday" id="check_7" name="availabilityEvening" onSelect={this.inputValue}/></td>
                <td><input type="checkbox" value="Thursday" id="check_7" name="availabilityEvening" onSelect={this.inputValue}/></td>
                <td><input type="checkbox" value="Friday" id="check_7" name="availabilityEvening" onSelect={this.inputValue}/></td>
                <td><input type="checkbox" value="Saturday" id="check_7" name="availabilityEvening" onSelect={this.inputValue}/></td>
              </tr>
              <tr>
                <td class="first-col"><b>Night: 12 AM - 6AM</b></td>
                <td><input type="checkbox" value="Sunday" id="check_7" name="availabilityNight" onSelect={this.inputValue}/></td>
                <td><input type="checkbox" value="Monday" id="check_7" name="availabilityNight" onSelect={this.inputValue}/></td>
                <td><input type="checkbox" value="Tuesday" id="check_7" name="availabilityNight" onSelect={this.inputValue}/></td>
                <td><input type="checkbox" value="Wednesday" id="check_7" name="availabilityNight" onSelect={this.inputValue}/></td>
                <td><input type="checkbox" value="Thursday" id="check_7" name="availabilityNight" onSelect={this.inputValue}/></td>
                <td><input type="checkbox" value="Friday" id="check_7" name="availabilityNight" onSelect={this.inputValue}/></td>
                <td><input type="checkbox" value="Saturday" id="check_7" name="availabilityNight" onSelect={this.inputValue}/></td>
              </tr>
             
            </tbody>
          </table>
        </div>
        <div class="btn-block">
          <button type="submit" href="/" onClick={this.applyforjobdata}>Apply</button>
        </div>
      </form>
    </div>
                </div>
            </div>
        )

    }
    
}
export default Applyforjob;