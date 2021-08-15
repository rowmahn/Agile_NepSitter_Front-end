import React, { Component } from 'react'
import { Rate } from 'antd';
import axios  from 'axios';
import '../../../style/workerprofile.css'

export default class Employerveiw extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
    
            config: {
                headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
            },
            worker:{},
            id:this.props.match.params.id,
            }
        }



        componentDidMount(){
            console.log(this.state.id)
            axios.get('http://localhost:90/showworker/details/'+this.state.id)
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
                        <img src={'http://localhost:90/images/'+this.state.worker.Image} alt={"Image of "+ this.state.worker.fname}/>
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
        </div>
                
            </div>
                
            </div>
        )
    }
}



