import { Component } from "react";
import '../style/Regestration.css';

class Register extends Component{
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
                                                <input type="text" class="form-control" name="email" id="email" placeholder="Enter your Email" />
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
                                    <div class="form-group">
                                        <div class="cols-sm-10">
                                            <div class="input-group">
                                                <span class="input-group-addon"></span>
                                                <input type="password" class="form-control" name="confirm" id="confirm" placeholder="Confirm your Password" />
                                            </div>
                                        </div>
                                    </div>
						</div>					
						<div class="form-group">
							<textarea placeholder="Enter Address Here.." rows="3" class="form-control"></textarea>
						</div>	
						<div class="row">
							<div class="col-sm-6 form-group">
								<input type="number" placeholder="Your Age " class="form-control"/>
							</div>		
							<div class="col-sm-6 form-group">
								<select id="inputState" class="form-control" >
                                    <option selected>Select Gender</option>
                                    <option> Male</option>
                                    <option> Female</option>
                                    <option> Others</option>
                                  </select>
							</div>	
						</div>						
					<div class="form-group">
						<input type="text" placeholder="Enter Phone Number Here.." class="form-control"/>
					</div>		
				               
                    <div class="form-group">
                    <label class="col-md-4 control-label" for="filebutton">UPLOAD YOUR CITIZENSHIP :</label>
                    <div class="col-md-4">
                        <input name="filebutton" class="input-file" id="filebutton" type="file"/>
                    </div>
                    </div>
					<button type="button" class="btn btn-lg btn-info">Submit For Registration</button>					
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