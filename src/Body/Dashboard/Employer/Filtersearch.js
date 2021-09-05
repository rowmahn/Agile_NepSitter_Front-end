
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
        workers:[]
    }
    inputhandler=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    searchData = (e)=>{
        e.preventDefault();
        console.log(this.state.gender)
        axios.get(`${REACT_APP_URL}/findbygender/`+this.state.gender)
        .then((response)=>{
            this.setState({
                workers:response.data.data
            })
            console.log(this.state.workers)
            
        })
        .catch((e)=>{
            console.log(e)
        })

        axios.get(`${REACT_APP_URL}/findbyexperience/`+this.state.experience)
        .then((response)=>{
            this.setState({
                workers:response.data.data
            })
            console.log(this.state.workers)
            
        })
        .catch((e)=>{
            console.log(e)
        })
    }

    

    onChangeHandler=(name)=>{
        this.setState({
            name:name
        })
        console.log(this.state.name)
        axios.get(`${REACT_APP_URL}/search/`+name)
            .then(result=>{
             this.setState({
                 workers:result.data.data
             })
             console.log(this.state.workers)
            })
            .catch(err=>{
              console.log(err)
               
            })

    }

    onChangeHandlerLocation=(location)=>{
        this.setState({
            location:location
        })
        console.log(this.state.location)
        axios.get(`${REACT_APP_URL}/searchlocation/`+location)
            .then(result=>{
             this.setState({
                 workers:result.data.data
             })
             console.log(this.state.workers)
            })
            .catch(err=>{
              console.log(err)
               
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
                            <input type="text" class="form-control" placeholder="Name" aria-label="Name" aria-describedby="Name" name="name"value={this.state.name} onChange= {(event)=>{this.onChangeHandler(event.target.value)}}/>
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="iYear">Location</span>
                            </div>
                            <input type="Rating" class="form-control" placeholder="Location" aria-label="Location" aria-describedby="Location" name="location"value={this.state.location} onChange={(event)=>{this.onChangeHandlerLocation(event.target.value)}}/>
                        </div>
                        <div class="input-group mb-3">

                            <select name="gender" value={this.state.gender} onChange={this.inputhandler}>
                                <option selected>Select Gender:</option>
                                <option >male</option>
                                <option >female</option>
                                <option >others</option>
                            </select>
                        </div>
                        <div class="input-group mb-3">
                            <select name="experience" value={this.state.experience} onChange={this.inputhandler}>
                                <option selected>Select Experience:</option>
                                <option>Less than 1 Year</option>
                                <option>No Experience</option>
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
                    {
                        this.state.workers.map((worker)=>{
                            return(
                        <div class="cards p-4 mt-3">
                            <div class="first">
                                <div class="timee d-flex flex-row align-items-center justify-content-between mt-3">
                                    <div class="d-flex align-items-center"> <i class="fa fa-clock-o clock"></i> <span class="hour ml-1">6 hrs</span> </div>
                                    <div> <span class="font-weight-bold">Rs 100</span> </div>
                                </div>
                            </div>
                            <div class="second d-flex flex-row mt-2">
                                <div class="image mr-3"> <img  src={`${REACT_APP_URL}/images/`+worker.image} placeholder={'Image of '+ worker.fname} class="rounded-circle" width="60" /> </div>
                                <div class="">
                                    <p>{worker.fname} {worker.lname}</p>
                                    <p>{worker.gender}</p>
                                    <p>{worker.address}</p>
                                    <p>{worker.experience}</p>
                                    <div class="d-flex flex-row mb-1">
                                        <div class="ratings ml-2"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </div>
                                    </div>
                                </div>

                            </div>

                            <div class="third mt-4">
                            <Link to={'/workerdetails/'+worker._id} className="btn btn-primary">Worker Details</Link>
                    
                            <Link to={'/hireworker/'+worker._id} className="cart__link">
                          <button className="btn btn-danger" href='/hireworker'>Hire</button>
                          </Link>

                            </div>

                        </div>
                            )
                        })
                    }
                        
                        
                    
                    </div>
                </div>

            </div>

        )
    }
}

export default Filtersearch;