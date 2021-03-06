import { Component } from "react"
import '../style/applyforjob.css'
import axios from 'axios'
const { REACT_APP_URL } = process.env
class Applyforjob extends Component {

  state = {
    fname: "",
    lname: "",
    bdate: "",
    phone: "",
    email: "",
    password: "",
    address: "",
    city: "",
    district: "",
    yourself: "",
    experience: "",
    gender: "",
    province: "",
    study: "",
    status: "",
    smoke: "",
    drink: "",
    jobcategory: [],
    availabilityMorning: "",
    availabilityAfternoon: "",
    availabilityEvening: "",
    availabilityNight: "",
    msg: "",



    fnameError : '',
    lnameError: '',
    bdateError : '',
    phoneError: '',
    emailError : '',
    passwordError:'',
    addressError:'',
    cityError:'',
    districtError:'',
    yourselfError : '',
    experienceError: '',
    genderError : '',
    provinceError : '',
    studyError:'',
    statusError:'',
    smokeError:'',
    drinkError:'',
    jobcategoryError: ''

  }

  onChange = (e) => {
    const re = /^[A-Za-z]+$/;
    if (e.target.value === "" || re.test(e.target.value))
    this.setState({
        [e.target.name]:e.target.value
    })
  };

  handleValidation = () => {
    let fnameError = '';
    let lnameError= '';
    let bdateError = '';
    let phoneError = '';
    let emailError = '';
    let passwordError='';
    let addressError ='';
    let cityError='';
    let districtError='';
    let yourselfError='';
    let experienceError= '';
    let genderError ='';
    let provinceError='';
    let studyError= '';
    let statusError='';
    let smokeError ='';
    let drinkError='';
    let jobcategoryError='';
     if (!this.state.fname) {
         fnameError = 'First Name cannot be Empty';
     } else if (!this.state.lname) {
         lnameError = 'Last Name cannot be Empty';
     } else if (!this.state.bdate) {
         bdateError = 'Birth Date cannot be Empty';
     } else if (!this.state.phone) {
      phoneError = 'Phone Number cannot be Empty';
     } else if (!this.state.email) {
      emailError = 'Email cannot be Empty';
     } else if (!this.state.email.includes('@')) {
      emailError = 'Invalid Email Address';
     } else if (!this.state.password) {
      passwordError = 'Password cannot be Empty';
     } else if (!this.state.address) {
         addressError = 'Address cannot be Empty';
     } else if (!this.state.city) {
         cityError = 'City cannot be Empty';
     } else if (!this.state.district) {
         districtError = 'District cannot be Empty';
     } else if (!this.state.yourself) {
      yourselfError = 'Yourself cannot be Empty';
     } else if (!this.state.experience) {
      experienceError = 'Experience cannot be Empty';
     } else if (!this.state.gender) {
      genderError = 'Select your Gender';
     } else if (!this.state.province) {
      provinceError = 'Select your Province';
     } else if (!this.state.study) {
         studyError = 'Select Your Study';
     } else if (!this.state.status) {
         statusError = 'Select Your Martial status';
     } else if (!this.state.smoke) {
         smokeError = 'provide your Smoke details';
     } else if (!this.state.drink) {
      drinkError = 'Select option of Drink is Required';
     } else if (!this.state.jobcategory) {
      jobcategoryError = 'You must Select the Job Category';
     } if (fnameError||lnameError||bdateError||phoneError||emailError||passwordError||addressError||cityError||
      districtError||yourselfError||experienceError||genderError||provinceError||studyError||statusError||
      smokeError||drinkError||jobcategoryError) {
         this.setState({
          fnameError,
          lnameError,
          bdateError,
          phoneError,
          emailError,
          passwordError,
          addressError,
          cityError,
          districtError,
          yourselfError,
          experienceError,
          genderError,
          provinceError,
          studyError,
          statusError,
          smokeError,
          drinkError,
          jobcategoryError,
         })
         return false;
     }
     return true;
 };

  inputValue = (e) =>
    this.setState({
      [e.target.name]: e.target.value
    })
  applyforjobdata = (e) => {
    // console.log(this.state.experience)
   
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
      yourself: this.state.yourself,
      experience: this.state.experience,
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

    const isValid = this.handleValidation();
        if (isValid){
    axios.post(`${ REACT_APP_URL }/applyforjob`, data)
      //console.log("dfmv")
      .then(response => {
        console.log(response)
        // alert("Your application has been submitted! We will verify and inform via email!")
        // window.location.href = '/workerlogin'

        this.setState({
          msg: response.data.message
      })

      })
      .catch(err => {
        // console.log({ err })
        if (err.response?.data?.errors) {

            this.setState({


                msg: err.response.data.errors.map(x => x.msg).join('<br/>')


            })
        }

    })
    }
  }
  render() {
    return (
      <div>
        <div>
          <div class="testbox">
            <form action="/" className="form1">
              <div class="banner">
                <h1>Worker's Job Application Form</h1>
                
              </div>
              <div class="item">
              <span style={{ color: "red" }} dangerouslySetInnerHTML={{ __html: this.state.msg }}></span>
                <p>Name</p>
                <span style={{ color: "red" }}>{this.state.fnameError}</span>
                <span  style={{ color: "red" }}>{this.state.lnameError}</span>
                <div class="name-item">
                
                  <input type="text" name="fname" id="fname" placeholder="First" value={this.state.fname} onChange={this.onChange} />
                  
                  <input type="text" name="lname" id="lname" placeholder="Last" value={this.state.lname} onChange={this.onChange} />
                </div>
              </div>
              <div class="item">
              <span style={{ color: "red" }}>{this.state.bdateError}</span>
                <p>Birth Date</p>
                <input type="date" name="bdate" id="bdate" value={this.state.bdate} onChange={(event) => { this.setState({ bdate: event.target.value }) }} required />
                <i class="fas fa-calendar-alt"></i>
              </div>
              <div class="question">
              <span style={{ color: "red" }}>{this.state.genderError}</span>
                <p>Gender</p>
                <div class="question-answer" id="gender" onChange={this.inputValue} >
                  <input type="radio" value="male" id="radio_16" name="gender" />
                  <label for="radio_16" class="radio"><span>Male</span></label>
                  <input type="radio" value="female" id="radio_17" name="gender" />
                  <label for="radio_17" class="radio"><span>Female</span></label>
                  <input type="radio" value="others" id="radio_18" name="gender" />
                  <label for="radio_18" class="radio"><span>Others</span></label>
                </div>
              </div>
              <div class="item">
              <span style={{ color: "red" }}>{this.state.phoneError}</span>
                <p>Phone</p>
                <input type="number" name="phone" id="phone" value={this.state.phone} onChange={(event) => { this.setState({ phone: event.target.value }) }} required />
              </div>
              <div class="item">
              <span style={{ color: "red" }}>{this.state.emailError}</span>
                <p>Email</p>
                <input type="text" name="email" id="email" value={this.state.email} onChange={(event) => { this.setState({ email: event.target.value }) }} required />
              </div>
              <div class="item">
              <span style={{ color: "red" }}>{this.state.passwordError}</span>
                <p>Password</p>
                <input type="password" name="password" id="password" value={this.state.password} onChange={(event) => { this.setState({ password: event.target.value }) }} required />
              </div>
              <div class="item">
                <p>Confirm Password</p>
                <input type="password" name="cpassword" required />
              </div>
              <div class="item">
              <span style={{ color: "red" }}>{this.state.addressError}</span>
                <p>Address</p>
                <input type="text" name="address" id="address" placeholder="Street address" value={this.state.address} onChange={(event) => { this.setState({ address: event.target.value }) }} />

                <div class="city-item">
                <span style={{ color: "red" }}>{this.state.cityError}</span>
                  <input type="text" name="city" id="city" placeholder="City" value={this.state.city} onChange={this.onChange} />
                  <span style={{ color: "red" }}>{this.state.districtError}</span>
                  <input type="text" name="district" id="district" placeholder="District" value={this.state.district} onChange={this.onChange} />

                  <select name='province' id="province" onChange={(event) => { this.setState({ province: event.target.value }) }} value={this.state.province}>
                  <span style={{ color: "red" }}>{this.state.provinceError}</span>
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
              <div class="question" id="question" onChange={this.inputValue}>
              <span style={{ color: "red" }}>{this.state.studyError}</span>
                <p>Do you study?</p>
                <div class="question-answer">
                  <input type="radio" value="yes" id="radio_3" name="study" />
                  <label for="radio_3" class="radio"><span>Yes</span></label>
                  <input type="radio" value="no" id="radio_4" name="study" />
                  <label for="radio_4" class="radio"><span>No</span></label>
                </div>
              </div>
              <div class="question" id="status" onChange={this.inputValue}>
              <span style={{ color: "red" }}>{this.state.statusError}</span>
                <p>Martial Status</p>
                <div class="question-answer">
                  <input type="radio" value="single" id="single" name="status" />
                  <label for="single" class="radio"><span>Single</span></label>
                  <input type="radio" value="married" id="married" name="status" />
                  <label for="married" class="radio"><span>Married</span></label>
                  <input type="radio" value="other" id="other" name="status" />
                  <label for="married" class="radio"><span>Other</span></label>
                </div>
              </div>
              <div class="question" id="question" onChange={this.inputValue}>
              <span style={{ color: "red" }}>{this.state.smokeError}</span>
                <p>Do you smoke?</p>
                <div class="question-answer">
                  <input type="radio" value="yes" id="radio_5" name="smoke" />
                  <label for="radio_5" class="radio"><span>Yes</span></label>
                  <input type="radio" value="no" id="radio_6" name="smoke" />
                  <label for="radio_6" class="radio"><span>No</span></label>
                </div>
              </div>
              <div class="question" id="drink" onChange={this.inputValue}>
              <span style={{ color: "red" }}>{this.state.drinkError}</span>
                <p>Do you drink?</p>
                <div class="question-answer">
                  <input type="radio" value="yes" id="radio_7" name="drink" />
                  <label for="radio_7" class="radio"><span>Yes</span></label>
                  <input type="radio" value="no" id="radio_8" name="drink" />
                  <label for="radio_8" class="radio"><span>No</span></label>
                  <input type="radio" value="every once in a while" id="once" name="drink" />
                  <label for="once" class="radio"><span>Every once in a while</span></label>
                </div>
              </div>
              <div class="input-group mb-3">
              <span style={{ color: "red" }}>{this.state.experienceError}</span>
                <select name="experience" value={this.state.experience} onChange={this.inputValue}>
                  <option selected>Select Experience:</option>
                  <option>Less than 1 Year</option>
                  <option>No Experience</option>
                  <option>More than 1 Year</option>
                </select>
              </div>
              <div class="item">
              <span style={{ color: "red" }}>{this.state.yourselfError}</span>
                <p>Please describe yourself</p>
                <textarea rows="3" value={this.state.yourself} id="yourself" onChange={(event) => { this.setState({ yourself: event.target.value }) }}></textarea>
              </div>
              <div class="question">
              <span style={{ color: "red" }}>{this.state.jobcategoryError}</span>
                <p>Job Categories Checklist:<span class="required">*</span></p>
                <small>Please choose post/s of your interest: </small>
                <div class="question-answer checkbox-item" onClick={this.inputValue} value={this.state.value} >
                  <div >
                    <input type="checkbox" value="Baby Sitting" id="check_1" name="jobcategory" required />
                    <label for="check_1" class="checks"><span>Baby Sitting</span></label>
                  </div>
                  <div >
                    <input type="checkbox" value="Pet Sitting" id="check_2" name="jobcategory" required />
                    <label for="check_2" class="checks"><span>Pet Sitting</span></label>
                  </div>
                  <div >
                    <input type="checkbox" value="House Sitting" id="check_3" name="jobcategory" required />
                    <label for="check_3" class="checks"><span>House Sitting</span></label>
                  </div>
                  <div>
                    <input type="checkbox" value="Nanny" id="check_4" name="jobcategory" required />
                    <label for="check_4" class="checks"><span>Nanny</span></label>
                  </div>
                  <div >
                    <input type="checkbox" value="Senior Care" id="check_5" name="jobcategory" required />
                    <label for="check_5" class="checks"><span>Senior Care</span></label>
                  </div>
                  <div>
                    <input type="checkbox" value="Granny Storytime" id="check_6" name="jobcategory" required />
                    <label for="check_6" class="checks"><span>Granny Storytime</span></label>
                  </div>
                </div></div>
              <p></p>
              <div class="question" onClick={this.inputValue} value={this.state.value}>
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
                      <td><input type="checkbox" value="Sunday" id="check_7" name="availabilityMorning" /></td>
                      <td><input type="checkbox" value="Monday" id="check_7" name="availabilityMorning" /></td>
                      <td><input type="checkbox" value="Tuesday" id="check_7" name="availabilityMorning" /></td>
                      <td><input type="checkbox" value="Wednesday" id="check_7" name="availabilityMorning" /></td>
                      <td><input type="checkbox" value="Thursday" id="check_7" name="availabilityMorning" /></td>
                      <td><input type="checkbox" value="Friday" id="check_7" name="availabilityMorning" /></td>
                      <td><input type="checkbox" value="Saturday" id="check_7" name="availabilityMorning" /></td>
                    </tr>
                    <tr>
                      <td class="first-col"><b>Afternoon: 12PM - 6 PM</b></td>
                      <td><input type="checkbox" value="Sunday" id="check_7" name="availabilityAfternoon" /></td>
                      <td><input type="checkbox" value="Monday" id="check_7" name="availabilityAfternoon" /></td>
                      <td><input type="checkbox" value="Tuesday" id="check_7" name="availabilityAfternoon" /></td>
                      <td><input type="checkbox" value="Wednesday" id="check_7" name="availabilityAfternoon" /></td>
                      <td><input type="checkbox" value="Thurday" id="check_7" name="availabilityAfternoon" /></td>
                      <td><input type="checkbox" value="Friday" id="check_7" name="availabilityAfternoon" /></td>
                      <td><input type="checkbox" value="Saturday" id="check_7" name="availabilityAfternoon" /></td>
                    </tr>
                    <tr>
                      <td class="first-col"><b>Evening: 6PM - 12 AM</b> </td>
                      <td><input type="checkbox" value="Sunday" id="check_7" name="availabilityEvening" /></td>
                      <td><input type="checkbox" value="Monday" id="check_7" name="availabilityEvening" /></td>
                      <td><input type="checkbox" value="Tuesday" id="check_7" name="availabilityEvening" /></td>
                      <td><input type="checkbox" value="Wednesday" id="check_7" name="availabilityEvening" /></td>
                      <td><input type="checkbox" value="Thursday" id="check_7" name="availabilityEvening" /></td>
                      <td><input type="checkbox" value="Friday" id="check_7" name="availabilityEvening" /></td>
                      <td><input type="checkbox" value="Saturday" id="check_7" name="availabilityEvening" /></td>
                    </tr>
                    <tr>
                      <td class="first-col"><b>Night: 12 AM - 6AM</b></td>
                      <td><input type="checkbox" value="Sunday" id="check_7" name="availabilityNight" /></td>
                      <td><input type="checkbox" value="Monday" id="check_7" name="availabilityNight" /></td>
                      <td><input type="checkbox" value="Tuesday" id="check_7" name="availabilityNight" /></td>
                      <td><input type="checkbox" value="Wednesday" id="check_7" name="availabilityNight" /></td>
                      <td><input type="checkbox" value="Thursday" id="check_7" name="availabilityNight" /></td>
                      <td><input type="checkbox" value="Friday" id="check_7" name="availabilityNight" /></td>
                      <td><input type="checkbox" value="Saturday" id="check_7" name="availabilityNight" /></td>
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