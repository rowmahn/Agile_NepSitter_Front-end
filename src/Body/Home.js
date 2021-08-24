import React, { Component } from "react"
import image3 from './../assets/image/3.jpg'
import roman from './../assets/image/roman.jpg'
import aatish from './../assets/image/aatish.jpg'
import aklesh from './../assets/image/aklesh.jpg'
import dipak from './../assets/image/dipak.jpg'
import thilen from './../assets/image/thilen.jpg'

import '../style/style.css';
import '../style/form.css';



export default class Home extends Component{
    render(){
        return(
           
            <div className="homepage">
                <img src={image3} class="d-block w-100" alt="..."></img>
                {/* <div className="container1">
                <h2>HOW IT WORKS</h2>
                <div className="d-flex">
                    <div className="p-2 flex-fill"><h3>1. SEARCH</h3>
                    </div>
                    <div className="p-2 flex-fill"><h3>2. CONNECT</h3>
                    </div>
                    <div className="p-2 flex-fill"><h3>3. BOOK</h3>
                    </div>
                </div>
                </div>         */}

<div class="container3">
                        <section class="mb-4">
                            <h2 class="h1-responsive font-weight-bold text-center">About Us</h2>
                            <p class="text-center w-responsive mx-auto"><label> We are the student of Softwarica College from Coventry University. This is our final project for Agile Development
                                We are all together five members. All of are hard working and focused to complete this project with strong dedication.
                                To be successful, you have to use each day as an opportunity to improve, to be better, to get a little bit closer to your goals. It might sound like a lot of work—and with a busy schedule, next to impossible.
                                 But the best part is, the more you accomplish, the more you’ll want to do, the higher you’ll want to reach. 
                                 So as long as you have the hunger for success, you will always have the power within you to achieve it.</label></p>

                            <div class="row">
                                <div class="col-md-9 mb-md-0 mb-5">
                                    
                                    
                                </div>

                                
                            </div>
                        </section>



     
                        
                    </div>

                <div className="container">
                
                            <section id="team" class="team">

                <div  data-aos="fade-up">

                    <header class="section-header">
                    <h2>Our Team</h2>
                    {/* <p>Our hard working team</p> */}
                    </header>

                    <div class="row gy-4">

                    <div class="col-lg-4 col-md-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                        <div class="member">
                        <div class="member-img">
                            <img src={aatish} class="img-fluid" alt=""/>
                            <div class="social">
                            <a href=""><i class="bi bi-twitter"></i></a>
                            <a href=""><i class="bi bi-facebook"></i></a>
                            <a href=""><i class="bi bi-instagram"></i></a>
                            <a href=""><i class="bi bi-linkedin"></i></a>
                            </div>
                        </div>
                        <div class="member-info">
                            <h4>Aatish Raj Shrestha</h4>
                            <span>Development Team</span>
                            <p>Hero</p>
                        </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                        <div class="member">
                        <div class="member-img">
                            <img src={aklesh} class="img-fluid" alt=""/>
                            <div class="social">
                            <a href=""><i class="bi bi-twitter"></i></a>
                            <a href=""><i class="bi bi-facebook"></i></a>
                            <a href=""><i class="bi bi-instagram"></i></a>
                            <a href=""><i class="bi bi-linkedin"></i></a>
                            </div>
                        </div>
                        <div class="member-info">
                            <h4>Akhlesh Kumar Yadhav</h4>
                            <span>Development Team</span>
                            <p>Side Hero</p>
                        </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
                        <div class="member">
                        <div class="member-img">
                            <img src={dipak}class="img-fluid" alt=""/>
                            <div class="social">
                            <a href=""><i class="bi bi-twitter"></i></a>
                            <a href=""><i class="bi bi-facebook"></i></a>
                            <a href=""><i class="bi bi-instagram"></i></a>
                            <a href=""><i class="bi bi-linkedin"></i></a>
                            </div>
                        </div>
                        <div class="member-info">
                            <h4>Dipak Das</h4>
                            <span>Scrum Master</span>
                            <p>Joker</p>
                        </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
                        <div class="member">
                        <div class="member-img">
                            <img src={roman} class="img-fluid" alt=""/>
                            <div class="social">
                            <a href=""><i class="bi bi-twitter"></i></a>
                            <a href=""><i class="bi bi-facebook"></i></a>
                            <a href=""><i class="bi bi-instagram"></i></a>
                            <a href=""><i class="bi bi-linkedin"></i></a>
                            </div>
                        </div>
                        <div class="member-info">
                            <h4>Roman Dulal</h4>
                            <span>Development Team</span>
                            <p>Side Hero</p>
                        </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
                        <div class="member">
                        <div class="member-img">
                            <img src={thilen} class="img-fluid" alt=""/>
                            <div class="social">
                            <a href=""><i class="bi bi-twitter"></i></a>
                            <a href=""><i class="bi bi-facebook"></i></a>
                            <a href=""><i class="bi bi-instagram"></i></a>
                            <a href=""><i class="bi bi-linkedin"></i></a>
                            </div>
                        </div>
                        <div class="member-info">
                            <h4>Thilen Lama</h4>
                            <span>Development Team</span>
                            <p>Villian</p>
                        </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
                        <div class="member">
                        <div class="member-img">
                            <img src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg" class="img-fluid" alt=""/>
                            <div class="social">
                            <a href=""><i class="bi bi-twitter"></i></a>
                            <a href=""><i class="bi bi-facebook"></i></a>
                            <a href=""><i class="bi bi-instagram"></i></a>
                            <a href=""><i class="bi bi-linkedin"></i></a>
                            </div>
                        </div>
                        <div class="member-info">
                            <h4>Partik Bhusal</h4>
                            <span>Product Owner</span>
                            <p>Director</p>
                        </div>
                        </div>
                    </div>

                    </div>

                </div>

                </section>
                
                </div>
                

                <div class="container3">
                        <section class="mb-4">
                            <h2 class="h1-responsive font-weight-bold text-center">Contact Us</h2>
                            <p class="text-center w-responsive mx-auto"><label>Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                            a matter of hours to help you.</label></p>

                            <div class="row">
                                <div class="col-md-9 mb-md-0 mb-5">
                                    <form id="contactform">

                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="md-form mb-0">
                                                    <input type="text" name="name" placeholder="Your name" class="form-control"/>
                                                    <label for="name"></label>
                                                </div>
                                                
                                            </div>

                                            <div class="col-md-6">
                                                <div class="md-form mb-0">
                                                    <input type="text" name="email" placeholder="Your Email" class="form-control"/>
                                                    <label for="email"></label>
                                                </div>
                                                
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="md-form mb-0">
                                                    <input type="text" name="subject" placeholder="Subject" class="form-control"/>
                                                    <label for="subject"></label>
                                                </div>
                                                
                                            </div>
                                            
                                        </div>

                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="md-form">
                                                    <textarea type="text" name="message" rows="3" class="form-control md-textarea" placeholder="Your Message"></textarea>
                                                    
                                                    
                                                </div>
                                                
                                            </div>
                                            
                                        </div>

                                        <div class="text-center text-md-left">
                                            <button class="btn btn-primary" type="submit">Submit</button>
                                            
                                        </div>
                                        
                                    </form>
                                    
                                </div>

                                <div class="col-md-3 text-center text-primary">
                                    <ul class="list-unstyled mb-0">
                                        <li><i class="fas fa-map-marker-alt fa-2x"></i>
                                            <p class="text-dark"><label>NewRoad, Kathmandu</label></p></li>

                                        <li><i class="fas fa-phone mt-4 fa-2x"></i>
                                            <p class="text-dark"><label>9803592385, 01-42489897</label></p></li>

                                        <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                                            <p class="text-dark"><label>agilecops@gmail.com</label></p></li>
                                        
                                    </ul>
                                    
                                </div>
                                
                            </div>
                        </section>



     
                        
                    </div>

                    



                </div>
                        
            
            
        )

    }
}

