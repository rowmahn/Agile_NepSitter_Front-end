import { Component,state, sendUserData,fileHandler } from "react";
import axios from "axios";
import '../style/Regestration.css';
import { message } from "antd";

class Register extends Component{
    state ={
        Fullname : "",
        Contact: "",
        Email : "",
        Password : "",
        Age: "",
        Gender: "",
        Location : "",
        Citizenship: ""
    }

    sendUserData = (e)=>{
        e.preventDefault();
        const data = {
            Fullname : this.state.Fullname,
            Contact : this.state.Contact,
            Email : this.state.Email,
            Password : this.state.Password,
            Age : this.state.Age,
            Gender : this.state.Gender,
            Location : this.state.Location,
            Citizenship : this.state.Citizenship

        }

       
        console.log(data)
        axios.post("http://localhost:90/employer/register", data)
        .then(
            window.location.href="/login",
            console.log("aatish")
            
        )
        .catch(
            console.log("error")
        )
    }
    fileHandler = (e) =>{
        this.setState({
            Citizenship : e.target.files[0]
        })
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
                        <form onSubmit={this.sendUserData}>
					<div class="col-sm-12">
						<div class="row">
                        <div class="form-group">
                                        <div class="cols-sm-10">
                                            <div class="input-group">
                                                <span class="input-group-addon"></span>
                                                <input type="text" class="form-control" name="Fullname" id="username" placeholder="Enter your Username" value={this.state.Fullname}
                            onChange={(event)=>{this.setState({Fullname: event.target.value})}}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="cols-sm-10">
                                            <div class="input-group">
                                                <span class="input-group-addon"></span>
                                                <input type="text" class="form-control" name="Email" id="email" placeholder="Enter your Email" value={this.state.Email}
                            onChange={(event)=>{this.setState({Email: event.target.value})}} />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="cols-sm-10">
                                            <div class="input-group">
                                                <span class="input-group-addon"></span>
                                                <input type="password" class="form-control" name="Password" id="password" placeholder="Enter your Password" value={this.state.Password}
                            onChange={(event)=>{this.setState({Password: event.target.value})}}/>
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
							<textarea placeholder="Enter Address Here.." rows="3" class="form-control"></textarea>
						</div>	
						<div class="row">
							<div class="col-sm-6 form-group">
								<input type="number" name="Age" placeholder="Your Age " class="form-control" value={this.state.Age}
                            onChange={(event)=>{this.setState({Age: event.target.value})}}/>
							</div>		
							<div class="col-sm-6 form-group">
								<select name="Gender" id="inputState" class="form-control" value={this.state.Gender}
                            onChange={(event)=>{this.setState({Gender: event.target.value})}} >
                                    <option selected>Select Gender</option>
                                    <option> Male</option>
                                    <option> Female</option>
                                    <option> Others</option>
                                  </select>
							</div>	
						</div>						
					<div class="form-group">
						<input type="text" name="Contact" placeholder="Enter Phone Number Here.." class="form-control" value={this.state.Contact}
                            onChange={(event)=>{this.setState({Contact: event.target.value})}}/>
					</div>		
				               
                    <div class="form-group">
                    <label class="col-md-4 control-label" for="filebutton">UPLOAD YOUR CITIZENSHIP :</label>
                    <div class="col-md-4">
                        <input name="filebutton" class="input-file" id="filebutton" type="file" onChange={this.fileHandler}/>
                    </div>
                    </div>
					<button type="submit" class="btn btn-lg btn-info">Submit For Registration</button>					
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