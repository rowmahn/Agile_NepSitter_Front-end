import { Component } from "react";
import axios from 'axios';
import '../style/Regestration.css'
const {REACT_APP_URL}=process.env
class Workerlogin extends Component{

    state={

        email: "",
        password : "",
        checkuser: false,
        msg: "",
    }

    loginworker=(e)=>{

        e.preventDefault();
        const data ={
            email: this.state.email,
            password: this.state.password
        }

        axios.post(`${REACT_APP_URL}/Worker/login`,data)
        .then((response)=>{
            console.log(response)
            localStorage.setItem('token', response.data.token)
            alert("Worker Login Sucessfull")
            window.location.href="/workerdashboard"
            this.setState({
                checkuser:true,
                msg:response.data.message
             
            })
            })
            .catch(err=>{
               console.log(err.message)
               alert("Unauthorized Worker")
                    this.setState({
                        msg : err.message
                    })
                
            
            })
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
                        <form>
					<div class="col-sm-12">
						<div class="row">
                        <div class="form-group">
                                        <div class="cols-sm-10">
                                            <div class="input-group">
                                                <span class="input-group-addon"></span>
                                                <input type="text" class="form-control" name="email" id="username" placeholder="Enter your Username"
                                                value={this.state.email} onChange={(event)=>{this.setState({email: event.target.value})}}  />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <div class="cols-sm-10">
                                            <div class="input-group">
                                                <span class="input-group-addon"></span>
                                                <input type="password" class="form-control" name="password" id="password" placeholder="Enter your Password"
                                                value={this.state.password} onChange={(event)=>{this.setState({password: event.target.value})}} />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    </div>
                                    <div class="d-flex justify-content-center">
					<a href="#">Forgot your password?</a>
				</div>
                                    <p class="divider-text"> </p>
					<button type="button" class="btn btn-lg btn-info" onClick= {this.loginworker}>Login as Worker</button>
                    <p class="divider-text">                           
                        </p>
                        <a href="/login">Click here for Login as Employer</a>
                        <p class="divider-text">
                            
                        </p>	
                        
                        <div class="d-flex justify-content-center links">
                            
					Don't have an account? --
                    <a href="/register"> Sign Up as Employer </a> -- OR --
                    <a href="#"> Sign Up as Worker</a> 
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
export default Workerlogin;