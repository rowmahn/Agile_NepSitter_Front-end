import { Component,state, sendUserData,filehandler ,inputhandler} from "react";
import axios from "axios";
import '../style/style.css';
import '../style/Regestration.css';
import '../style/form.css';
import { message } from "antd";
const {REACT_APP_URL}=process.env
class Register extends Component{
    state ={
        Fullname : "",
        Contact: "",
        Email : "",
        Password : "",
        Age: "",
        Gender: "",
        Location : "",
        Citizenship: "",
        msg: "",
                
        FullnameError : '',
        ContactError: '',
        EmailError : '',
        PasswordError : '',
        AgeError:'',
        GenderError:'',
        LocationError:'',
        CitizenshipError:''
    }

    inputhandler=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    filehandler=(e)=>{
      this.setState({
        image : e.target.files[0]
    })
    }

    onChange = (e) => {
        const re = /^[A-Za-z]+$/;
        if (e.target.value === "" || re.test(e.target.value))
        this.setState({
            [e.target.name]:e.target.value
        })
      };

    

    handleValidation = () => {
       let FullnameError = '';
       let ContactError= '';
       let EmailError = '';
       let PasswordError = '';
       let AgeError='';
       let GenderError='';
       let LocationError='';
       let CitizenshipError= '';
        if (!this.state.Fullname) {
            FullnameError = 'Full Name cannot be Empty';
        } else if (!this.state.Email) {
            EmailError = 'Email cannot be Empty';
        } else if (!this.state.Email.includes('@')) {
            EmailError = 'Invalid Email Address';
        } else if (!this.state.Password) {
            PasswordError = 'Password cannot be Empty';
        } else if (!this.state.Location) {
            LocationError = 'Location cannot be Empty';
        } else if (!this.state.Age) {
            AgeError = 'Age cannot be Empty';
        } else if (!this.state.Gender) {
            GenderError = 'You Must Select Gender';
        } else if (!this.state.Contact) {
            ContactError = 'Contact cannot be Empty';
        } else if (!this.state.Citizenship) {
            CitizenshipError = 'Citizenship cannot be Empty';
        } if (FullnameError || ContactError || EmailError  ||  PasswordError||AgeError||
            GenderError||LocationError||CitizenshipError) {
            this.setState({
                FullnameError,
                ContactError,
                EmailError,
                PasswordError,
                AgeError,
                GenderError,
                LocationError,
                CitizenshipError
            })
            return false;
        }
        return true;
    };

    sendUserData = (e)=>{
        e.preventDefault();
        // const data = {
        //     Fullname : this.state.Fullname,
        //     Contact : this.state.Contact,
        //     Email : this.state.Email,
        //     Password : this.state.Password,
        //     Age : this.state.Age,
        //     Gender : this.state.Gender,
        //     Location : this.state.Location,
        //     Citizenship : this.state.Citizenship

        // }

       
        // console.log(data)
        // const data =new FormData()

        //   data.append('Fullname',this.state.Fullname)
        //   data.append('Gender',this.state.Gender)
        //   data.append('Contact',this.state.Contact)
        //   data.append('Age',this.state.Age)
        //   data.append('Password',this.state.Password)
        //   data.append('Email',this.state.Email)
        //   data.append('Location',this.state.Location)
        //   data.append('Citizenship',this.state.Citizenship)
        //   console.log(data)
        const isValid = this.handleValidation();
        if (isValid){
        axios.post(`${REACT_APP_URL}/employer/register`, this.state)
        .then((response)=>{
            console.log(response)
            alert("Form will be Approved soon")
            window.location.href="/login"
            this.setState({
                msg: response.data.message
            })
            
        }   
        )
        .catch(err => {
            console.log({ err })
            if (err.response?.data?.errors) {

                this.setState({


                    msg: err.response.data.errors.map(x => x.msg).join('<br/>')


                })
            }

        })

     }
    }

    

    render(){
        return(

            <div>
                {/* <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/> */}
                    {/* <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
                    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>


                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css"/> */}


                    <div class="container667">

                    <div class="card bg-light">
                    <article class="card-body mx-auto" >
                        <h4 class="card-title mt-3 text-center">EMPLOYER REGISTRATION FORM</h4>
                        <p class="text-center">Get started with your free account</p>
                        <div class="details1">
                        <div class="links1 ">
                            <div class="facebook">
                            <i class="fab fa-facebook-square"><span>Signup with Facebook</span></i>
                            </div>
                            <div class="google">
                            <i class="fab fa-google-plus-square"><span>Signup with Google</span></i>
                            </div>
                        </div>
                        </div>
                        <p class="divider-text">
                            <span class="bg-light">OR</span>
                        </p>
                        <form id="registerForm" onSubmit={this.sendUserData}>
					<div class="col-sm-12">
						<div class="row">
                        <div class="form-group">
                                        <div class="cols-sm-10">
                                        <span style={{ color: "red" }} dangerouslySetInnerHTML={{ __html: this.state.msg }}></span>
                                        <span style={{ color: "red" }}>{this.state.FullnameError}</span>
                                            <div class="input-group">
                                                <span class="input-group-addon"></span>
                                                <input type="text" class="form-control" name="Fullname" id="Fullname" placeholder="Enter your Username" value={this.state.Fullname}
                            onChange={this.onChange}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="cols-sm-10">
                                        <span style={{ color: "red" }}>{this.state.EmailError}</span>
                                            <div class="input-group">
                                                <span class="input-group-addon"></span>
                                                <input type="text" class="form-control" name="Email" id="Email" placeholder="Enter your Email" value={this.state.Email}
                            onChange={this.inputhandler} />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="cols-sm-10">
                                        <span style={{ color: "red" }}>{this.state.PasswordError}</span>
                                            <div class="input-group">
                                                <span class="input-group-addon"></span>
                                                <input type="password" class="form-control" name="Password" id="Password" placeholder="Enter your Password" value={this.state.Password}
                            onChange={this.inputhandler}/>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div class="form-group">
                                        <div class="cols-sm-10">
                                            <div class="input-group">
                                                <span class="input-group-addon"></span>
                                                <input type="password" class="form-control" name="confirm" id="confirm" placeholder="Confirm your Password" value={this.state.Password}
                            onChange={(event)=>{this.setState({Password: event.target.value})}}/>
                                            </div>
                                        </div>
                                    </div> */}
						</div>					
						<div class="form-group">
                        <span style={{ color: "red" }}>{this.state.LocationError}</span>
							<textarea placeholder="Enter Address Here.." rows="3" class="form-control" name="Location" id="Location"
                            value={this.state.Location} onChange={this.inputhandler}></textarea>
						</div>	
						<div class="row">
							<div class="col-sm-6 form-group">
                            <span style={{ color: "red" }}>{this.state.AgeError}</span>
								<input type="number" name="Age" id= "Age" placeholder="Your Age " class="form-control" value={this.state.Age}
                            onChange={this.inputhandler}/>
							</div>		
							<div class="col-sm-6 form-group">
                            <span style={{ color: "red" }}>{this.state.GenderError}</span>
								<select name="Gender" id="Gender" class="form-control" value={this.state.Gender}
                            onChange={this.inputhandler} >
                                    <option selected>Select Gender</option>
                                    <option> Male</option>
                                    <option> Female</option>
                                    <option> Others</option>
                                  </select>
							</div>	
						</div>						
					<div class="form-group">
                    <span style={{ color: "red" }}>{this.state.ContactError}</span>
						<input type="number" name="Contact" id= "Contact" placeholder="Enter Phone Number Here.." class="form-control" value={this.state.Contact}
                            onChange={this.inputhandler}/>
					</div>		
				               
                    <div class="form-group">
                    <label class="col-md-4 control-label" for="filebutton">UPLOAD YOUR CITIZENSHIP Number :</label>
                    <span style={{ color: "red" }}>{this.state.CitizenshipError}</span>
                    <div class="col-md-4">
                    <input type="number" name="Citizenship" id="Citizenship" placeholder="Enter Citizenship Number Here.." class="form-control" value={this.state.Citizenship}
                    onChange={this.inputhandler}/>
                    </div>
                    </div>
					<button id="registerBtn" type="submit"  class="btn btn-lg btn-info">Submit For Registration</button>					
					</div>
				</form> 
                    </article>
                    </div> 

                    </div> 



            </div>
        )
            
        
    }

}

export default Register;