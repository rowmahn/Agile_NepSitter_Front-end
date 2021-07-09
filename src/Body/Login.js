import { Component } from "react";
// import '../style/login.css';
import '../style/Regestration.css'

class Login extends Component{
    render(){
        return(
    //         <div>
    //             {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/> */}
    //             <div class="center">
    //      <input type="checkbox" id="show"/>
    //      <label for="show" class="show-btn">View Form</label>
    //      <div class="container">
    //         <label for="show" class="close-btn fas fa-times" title="close"></label>
    //         <div class="text">
    //            Login Form
    //         </div>
    //         <form action="#">
    //            <div class="data">
    //               <label>Email or Phone</label>
    //               <input type="text" required/>
    //            </div>
    //            <div class="data">
    //               <label>Password</label>
    //               <input type="password" required/>
    //            </div>
    //            <div class="forgot-pass">
    //               <a href="#">Forgot Password?</a>
    //            </div>
    //            <div class="btn">
    //               <div class="inner"></div>
    //               <button type="submit">login</button>
    //            </div>
    //            <div class="signup-link">
    //               Not a member? <a href="#">Signup now</a>
    //            </div>
    //         </form>
    //      </div>
    //   </div>


    //         </div>
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
                                                <input type="text" class="form-control" name="username" id="username" placeholder="Enter your Username" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <div class="cols-sm-10">
                                            <div class="input-group">
                                                <span class="input-group-addon"></span>
                                                <input type="password" class="form-control" name="password" id="password" placeholder="Enter your Password" />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    </div>
                                    <div class="d-flex justify-content-center">
					<a href="#">Forgot your password?</a>
				</div>
                                    <p class="divider-text"> </p>
					<button type="button" class="btn btn-lg btn-info">Login as Employer</button>
                    <p class="divider-text">                           
                        </p>
                        <button type="button" class="btn btn-lg btn-info">Login as Worker</button>
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
export default Login;