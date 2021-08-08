import React, { Component } from 'react'
import { Rate } from 'antd';
import '../../../style/employerprofile.css'
import axios from 'axios'

export default class EmployerProfile extends Component {
    state={
        config:{
            headers:{'Authorization':'Bearer ' + localStorage.getItem('token')}
        },
        Fullname:'',
        Email:'',
        Contact:'',
        Image:'',
        Location:'',
        Age:'',
        Gender:'',
        Citizenship:''
    }
    componentDidMount(){
        axios.get('http://localhost:90/employer/profile',this.state.config)
        .then((response)=>{
            console.log(response)
            this.setState({
                Fullname:response.data.data.Fullname,
                Email:response.data.data.Email,
                Gender:response.data.data.Gender,
                Location:response.data.data.Location,
                Age:response.data.data.Age,
                Citizenship:response.data.data.Citizenship,
                Contact:response.data.data.Contact
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
            <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
            <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
            <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>


            <div class="container emp-profile">
                <form method="post">
                <div class="row">
                <div class="col-md-4">
                    <div class="profile-img">
                        <img src="https://pbs.twimg.com/media/ESL7yc8WkAAkUT1.jpg" alt=""/>
                        <div class="file btn btn-lg btn-primary">
                            Change Photo
                            <input type="file" name="file"/>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="profile-head">
                                <h5>
                                    {this.state.Fullname}
                                </h5>
                                <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                                
                            </ul>

                    </div>
                </div>
                <div class="col-md-2">
                    <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                </div>
            </div>
            <div class="row">

                <div class="col-md-8">
                    <div class="tab-content profile-tab" id="myTabContent">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Username</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>{this.state.Fullname}</p>
                                        </div>
                                    </div>
                                    
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Email</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>{this.state.Email}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Gender</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>{this.state.Gender}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Phone</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>{this.state.Contact}</p>
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
                                            <p>{this.state.Location}</p>
                                        </div>
                                    </div>



                        </div>
                    </div>
                </div>
            </div>
        </form>           
    </div>
            
        </div>
        )
    }
}
