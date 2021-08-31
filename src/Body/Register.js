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
        
        FullnameError : '',
        ContactError: '',
        EmailError : '',
        PasswordError : ''
    }
    inputhandler=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleValidation = () => {
       let FullnameError = '';
       let ContactError= '';
       let EmailError = '';
       let PasswordError = '';
        if (!this.state.Fullname) {
            FullnameError = 'Full Name cannot be Empty';
        } else if (!this.state.Email) {
            EmailError = 'Email cannot be Empty';
        } else if (!this.state.Email.includes('@')) {
            EmailError = 'Invalid Email Address';
        } else if (!this.state.Password) {
            PasswordError = 'Password cannot be Empty';
        } else if (!this.state.Contact) {
            ContactError = 'Contact cannot be Empty';
        } if (FullnameError || ContactError || EmailError  ||  PasswordError) {
            this.setState({
                FullnameError,
                ContactError,
                EmailError,
                PasswordError
            })
            return false;
        }
        return true;
    };

    sendUserData = (e)=>{
        e.preventDefault();
        const isValid = this.handleValidation();
        if (isValid){
         axios.post("http://localhost:90/employer/register", this.state)
        .then((response)=>{
            window.location.href="/login"
        }     
        )
        .catch((e)=>{
            console.log(e)
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
                        {/* <p class="text-center">Get started with your free account</p> */}
                        {/* <div class="details1">
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
                        </p> */}
                        <form id="registerForm" onSubmit={this.sendUserData}>
					<div class="col-sm-12">
						<div class="row">
                        <div class="form-group">
                                        <div class="cols-sm-10">
                                        <span style={{ color: "red" }}>{this.state.FullnameError}</span>
                                            <div class="input-group">
                                                
                                                <span class="input-group-addon"></span>
                                                <input type="text" class="form-control" name="Fullname" id="Fullname" placeholder="Enter your Username" value={this.state.Fullname}
                            onChange={this.inputhandler}/>
                            
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
                                            <div class="input-group">
                                                <span class="input-group-addon"></span>
                                                <input type="password" class="form-control" name="Password" id="Password" placeholder="Enter your Password" value={this.state.Password}
                            onChange={this.inputhandler}/>
                            <span style={{ color: "red" }}>{this.state.PasswordError}</span>
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
							<textarea placeholder="Enter Address Here.." rows="1" class="form-control" name="Location" id="Location"
                            value={this.state.Location} onChange={this.inputhandler}></textarea>
						</div>	
						<div class="row">
							<div class="col-sm-6 form-group">
								<input type="number" name="Age" id= "Age" placeholder="Your Age " class="form-control" value={this.state.Age}
                            onChange={this.inputhandler}/>
							</div>		
							<div class="col-sm-6 form-group">
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
						<input type="text" name="Contact" id= "Contact" placeholder="Enter Phone Number Here.." class="form-control" value={this.state.Contact}
                            onChange={this.inputhandler}/>
                            <span style={{ color: "red" }}>{this.state.ContactError}</span>
					</div>		
				               
                    <div class="form-group">
                    <label class="col-md-4 control-label" for="filebutton">UPLOAD YOUR CITIZENSHIP Number :</label>
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