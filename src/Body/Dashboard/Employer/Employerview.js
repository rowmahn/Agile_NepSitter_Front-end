import React, { Component } from 'react'
import { Rate } from 'antd';
import '../../../style/workerprofile.css'
import '../../../style/feedback.css'



export default class Employerveiw extends Component {
    render() {
        return (
            <div>
                 <div>
                <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
                <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>


                <div class="container emp-profile">
                    <form method="post">
                    <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                            <img src="https://cdn.britannica.com/61/217461-050-93A0E3CB/Israeli-Gal-Gadot-2019.jpg" alt=""/>
                            <div class="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="profile-head">
                                    <h5>
                                        Gal Gadot
                                    </h5>
                                    <h6>
                                        Babysitter Since 2016                                  </h6>
                                        <Rate allowHalf defaultValue={4.5} />
                                    <p class="proile-rating">RATING : <span>4.5/5</span></p>
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                  
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-work">    
                            <p>SERVICES</p>
                            <a href="">Babysitter</a><br/>
                            <a href="">Care taker</a><br/>

                            <p>AVAILABILITY</p>
                            <a href="">SUNDAY</a><br/>
                            <a href="">TUESDAY</a><br/>
                            
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="tab-content profile-tab" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Username</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Gal123</p>
                                            </div>
                                        </div>
                                        
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>galgadot2020@gmail.com</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Gender</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Female</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>9876543210</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Profession</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Student</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Address</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>In the heart of Aatish Raj Shrestha</p>
                                            </div>
                                        </div>
                                                    
                            </div>
                        </div>
                    </div>
                </div>
            </form>  

            Rate this Worker : 
            <Rate allowHalf defaultValue={4.5} />

            <form>    
		 
	<div class="row">    
      <div >    
      <h4>FEED BACK FORM</h4>    
      </div>    
      <div class="col-75">    
        <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>    
      </div>   
       
    </div> 	  
      
        
      <input type="submit" value="Submit"/>    
     
  </form>        
        </div>
        
                
            </div>
            
                
            </div>
        )
    }
}
