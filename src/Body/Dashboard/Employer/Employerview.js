import React, { Component } from 'react'
import ReactStars from "react-rating-stars-component";
import axios  from 'axios';
import Rate from 'antd'
import '../../../style/workerprofile.css'
import EmpNav from "../../../Header/Employernav"
const {REACT_APP_URL}=process.env

export default class Employerveiw extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
    
            config: {
                headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
            },
            worker:{},
            id:this.props.match.params.id,
            feedback:"",
            rating:""
            }
        }

        ratingChanged = (newRating) => {
            console.log(newRating);
            this.setState({
                rating:newRating
            })
          };

        componentDidMount(){
            console.log(this.state.id)
            axios.get(`${REACT_APP_URL}/showworker/details/`+this.state.id)
            .then((response)=>{
                console.log(response)
                this.setState({

                    worker:response.data.data
                }
                )
            })
            .catch((err)=>{
                console.log(err)
            })
        }

        insertfeedback=(e)=>{
            e.preventDefault()
            console.log(this.state)
            axios.post(`${REACT_APP_URL}/worker/feedback/`+this.state.id,this.state,this.state.config)
            .then(result=>{
                window.location.href='/employerdashboard'
                alert("feedback and rating inserted successfully")
            })
            .catch(err=>{
                console.log(err)
            })
          }




    render() {
        return (
            <div>
                <EmpNav></EmpNav>
                 <div>

                <div class="container emp-profile">
                    <form method="post">
                    <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                        <img src={`${REACT_APP_URL}/images/`+this.state.worker.Image} alt={"Image of "+ this.state.worker.fname}/>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="profile-head">
                                    <h5>
                                    {this.state.worker.fname}{this.state.worker.lname}
                                    </h5>
                                    <h6>
                                        Babysitter Since 2016                                  </h6>
                                        
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
                            <a>{this.state.worker.jobcategory}</a><br/>
                            

                            <p>AVAILABILITY</p>
                            <a >Morning:  </a><a >{this.state.worker.availabilityMorning}</a> <br/>
                            <a >Evening:  </a><a >{this.state.worker.availabilityEvening}</a> <br/>
                            <a >Night:  </a><a >{this.state.worker.availabilityNight}</a> <br/>
                            <a >Afternoon:  </a><a >{this.state.worker.availabilityAfternoon}</a> <br/>
                        
                            
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
                                                <p>{this.state.worker.fname}{this.state.worker.lname}</p>
                                            </div>
                                        </div>
                                        
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{this.state.worker.email}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Gender</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{this.state.worker.gender}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{this.state.worker.phone}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Profession</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Worker</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Address</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{this.state.worker.address}</p>
                                            </div>
                                        </div>
                                        
                            </div>
                        </div>
                    </div>
                </div>
            </form>     
            


    

            <form>    
            <div className="ratings">
            Rate this Worker : 
            <ReactStars
    count={5}
    onChange={this.ratingChanged}
    size={24}
    activeColor="#ffd700"
   />
   </div>

	<div class="row">    
      <div >    
      <h4>FEED BACK FORM</h4>    
      </div>    
      <div class="col-75">    
        <textarea id="subject" name="feedback" placeholder="Write something.." 
        value={this.state.feedback} onChange={(event)=>{this.setState({feedback: event.target.value})}} ></textarea>    
      </div>   

    </div> 	  


      <input type="submit" value="Submit"
       onClick={this.insertfeedback} />    

  </form>        
                
        </div>
                
            </div>
                
            </div>
        )
    }
}



