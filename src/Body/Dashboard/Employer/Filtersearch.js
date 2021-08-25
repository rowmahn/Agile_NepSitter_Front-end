
import { Component } from "react"
import '../../../style/filtersearch.css'
import EmpNav from '../../../Header/Employernav'
import axios from "axios";
const {REACT_APP_URL}=process.env
class Filtersearch extends Component {
    state ={
        name : "",
        location: "",
        gender : "",
        experience : "",
        rating: "",

    }
    inputhandler=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    searchData = (e)=>{
        e.preventDefault();
        axios.post(`${REACT_APP_URL}/filtersearch`, this.state)
        .then((response)=>{
            console.log(response)
            
        }
            
            
            
        )
        .catch((e)=>{
            console.log(e)
         })
    }

    render() {
        return (
            <div>
                <div>

                <EmpNav></EmpNav>

                    <div class="containers">

                        <header class="navbar">
                            <h2 title="title" class="title">Advanced Search</h2>

                        </header>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="iTitle">Name</span>
                            </div>
                            <input type="text" class="form-control" placeholder="Name" aria-label="Name" aria-describedby="Name" name="name"value={this.state.name} onChange={this.inputhandler}/>
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="iYear">Location</span>
                            </div>
                            <input type="Rating" class="form-control" placeholder="Location" aria-label="Location" aria-describedby="Location" name="location"value={this.state.location} onChange={this.inputhandler}/>
                        </div>
                        <div class="input-group mb-3">

                            <select name="gender" value={this.state.gender} onChange={this.inputhandler}>
                                <option selected>Select Gender:</option>
                                <option >Male</option>
                                <option >Female</option>
                                <option >Others</option>
                            </select>
                        </div>
                        <div class="input-group mb-3">
                            <select name="experience" value={this.state.experience} onChange={this.inputhandler}>
                                <option selected>Select Experience:</option>
                                <option>Less than 1 Year</option>
                                <option>1 Year</option>
                                <option>More than 1 Year</option>
                            </select>
                        </div>
                        <div class="input-group mb-3">
                            <select name="rating" value={this.state.rating} onChange={this.inputhandler}>
                                <option selected>Select Ratings:</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <button class="btn btn-primary search" id="search" onClick={this.searchData}>Search</button>
                    </div>

                    <div class="container mt-5 d-flex justify-content-center">
                        <div class="cards p-4 mt-3">
                            <div class="first">
                                <div class="timee d-flex flex-row align-items-center justify-content-between mt-3">
                                    <div class="d-flex align-items-center"> <i class="fa fa-clock-o clock"></i> <span class="hour ml-1">6 hrs</span> </div>
                                    <div> <span class="font-weight-bold">Rs 100</span> </div>
                                </div>
                            </div>
                            <div class="second d-flex flex-row mt-2">
                                <div class="image mr-3"> <img src="https://i.imgur.com/0LKZQYM.jpg" class="rounded-circle" width="60" /> </div>
                                <div class="">
                                    <p>Name</p>
                                    <p>Gender</p>
                                    <p>Location</p>
                                    <p>Experience</p>
                                    <div class="d-flex flex-row mb-1">
                                        <div class="ratings ml-2"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </div>
                                    </div>
                                </div>

                            </div>

                            <div class="third mt-4">
                                <button class="btn btn-success btn-block"><i class="fa fa-clock-o"></i> View Profile</button>
                                <button class="btn btn-success btn-block"><i class="fa fa-clock-o"></i> Book Now</button>

                            </div>

                        </div>
                        <div class="cards p-4 mt-3">
                            <div class="first">
                                <div class="timee d-flex flex-row align-items-center justify-content-between mt-3">
                                    <div class="d-flex align-items-center"> <i class="fa fa-clock-o clock"></i> <span class="hour ml-1">6 hrs</span> </div>
                                    <div> <span class="font-weight-bold">Rs 100</span> </div>
                                </div>
                            </div>
                            <div class="second d-flex flex-row mt-2">
                                <div class="image mr-3"> <img src="https://i.imgur.com/0LKZQYM.jpg" class="rounded-circle" width="60" /> </div>
                                <div class="">
                                    <p>Name</p>
                                    <p>Gender</p>
                                    <p>Location</p>
                                    <p>Experience</p>
                                    <div class="d-flex flex-row mb-1">
                                        <div class="ratings ml-2"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </div>
                                    </div>
                                </div>
                            </div>
                            <div class="third mt-4">
                                <button class="btn btn-success btn-block"><i class="fa fa-clock-o"></i> View Profile</button>
                                <button class="btn btn-success btn-block"><i class="fa fa-clock-o"></i> Book Now</button>
                            </div>
                        </div>
                        <div class="cards p-4 mt-3">
                            <div class="first">
                                <div class="timee d-flex flex-row align-items-center justify-content-between mt-3">
                                    <div class="d-flex align-items-center"> <i class="fa fa-clock-o clock"></i> <span class="hour ml-1">6 hrs</span> </div>
                                    <div> <span class="font-weight-bold">Rs 100</span> </div>
                                </div>
                            </div>
                            <div class="second d-flex flex-row mt-2">
                                <div class="image mr-3"> <img src="https://i.imgur.com/0LKZQYM.jpg" class="rounded-circle" width="60" /> </div>
                                <div class="">
                                    <p>Name</p>
                                    <p>Gender</p>
                                    <p>Location</p>
                                    <p>Experience</p>
                                    <div class="d-flex flex-row mb-1">
                                        <div class="ratings ml-2"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </div>
                                    </div>
                                </div>
                            </div>
                            <div class="third mt-4">
                                <button class="btn btn-success btn-block"><i class="fa fa-clock-o"></i> View Profile</button>
                                <button class="btn btn-success btn-block"><i class="fa fa-clock-o"></i> Book Now</button>
                            </div>
                        </div>
                    
                    </div>
                </div>

            </div>

        )
    }
}

export default Filtersearch;