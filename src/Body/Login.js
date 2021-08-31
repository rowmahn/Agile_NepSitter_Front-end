import React, { Component} from "react";
import axios from 'axios';
import '../style/Regestration.css'
import '../style/style.css';
import '../style/form.css';

const {REACT_APP_URL}=process.env
class Login extends Component{

    state={

        Email: "",
        Password : "",
        checkuser: false,
        msg: "",

        EmailError : '',
        PasswordError : ''
    }


    handleValidation = () => {
        let EmailError = '';
        let PasswordError = '';
         if (!this.state.Email) {
             EmailError = 'Email cannot be Empty';
         } else if (!this.state.Email.includes('@')) {
             EmailError = 'Invalid Email Address';
         } else if (!this.state.Password) {
             PasswordError = 'Password cannot be Empty';
         } if (EmailError  ||  PasswordError) {
             this.setState({
                 EmailError,
                 PasswordError
             })
             return false;
         }
         return true;
     };


    loginuser=(e)=>{

        e.preventDefault();
        const data ={
            Email: this.state.Email,
            Password: this.state.Password
        }
        const isValid = this.handleValidation();
        if (isValid){
        axios.post(`${REACT_APP_URL}/user/login`,data)
        .then((response)=>{
            // alert("Login Sucessfull")
                // console.log(response)
            window.location.href="/employerdashboard"
            localStorage.setItem('token', response.data.token)
            
           
            
            this.setState({
                checkuser:true,
                msg:response.data.message
             
            })
            })
            .catch(err=>{
                console.log(err.response.data.message)
               
                    this.setState({
                        msg : err.response.data.message
                    })
                
            
            })
        }
    }
    render(){

       
        return(
    
    <div>
        <div>
                {/* <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/> */}
                    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
                    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>


                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css"/>


                    <div class="container667">

                    <div class="card bg-light">
                    <article class="card-body mx-auto" >
                    <span style={{color:"red"}} dangerouslySetInnerHTML={{__html : this.state.msg}}></span>
                        <h4 class="card-title mt-3 text-center">LOGIN FORM</h4>
                        <div class="details1">
                        <div class="links1 ">
                            <div class="facebook">
                            <i class="fab fa-facebook-square"><span>Login with Facebook</span></i>
                            </div>
                            <div class="google">
                            <i class="fab fa-google-plus-square"><span>Login with Google</span></i>
                            </div>
                        </div>
                        </div>
                        <p class="divider-text">
                            <span class="bg-light">OR</span>
                        </p>
                        <form id="loginForm">
					<div class="col-sm-12">
						<div class="row">
                        <div class="form-group">
                                        <div class="cols-sm-10">
                                        <span style={{ color: "red" }}>{this.state.EmailError}</span>
                                            <div class="input-group">
                                                <span class="input-group-addon"></span>
                                                <input type="text" class="form-control" name="Email" id="Email" placeholder="Enter your Username"
                                                value={this.state.Email} onChange={(event)=>{this.setState({Email: event.target.value})}}  />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <div class="cols-sm-10">
                                        <span style={{ color: "red" }}>{this.state.PasswordError}</span>
                                            <div class="input-group">
                                                <span class="input-group-addon"></span>
                                                <input type="password" class="form-control" name="Password" id="Password" placeholder="Enter your Password"
                                                value={this.state.Password} onChange={(event)=>{this.setState({Password: event.target.value})}} />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    </div>
                                    <div class="d-flex justify-content-center">
					<a href="#">Forgot your password?</a>
				</div>
                                    <p class="divider-text"> </p>
					<button type="button" class="btn btn-lg btn-info" id="loginBtn" onClick= {this.loginuser}>Login as Employer</button>
                    <p class="divider-text">                           
                        </p>
                        <a href="/workerlogin">Click here for Login as worker</a>
                        <p class="divider-text">
                            
                        </p>	
                        
                        <div class="d-flex justify-content-center links">
                            
					<h33>Don't have an account?</h33>
                    <a href="/register"> Sign Up as Employer </a> 
                    <a href="/applyforjob"> Sign Up as Worker</a> 
				</div>			
					</div>
				</form> 
                    </article>
                    </div> 

                    </div> 



            </div>

    </div>
        )
    }
}
export default Login;