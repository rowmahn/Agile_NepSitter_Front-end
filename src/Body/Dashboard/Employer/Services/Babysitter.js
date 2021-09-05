import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import EmpNav from "../../../../Header/Employernav"
import "../../../../style/recommendation.css"
const {REACT_APP_URL}=process.env
export default class Babysitter extends Component {
    state={
        service:this.props.match.params.service,
        workers:[],
        search:'',
        suggestions:[]
    }
    onChangeHandler=(search)=>{
       
        this.setState({
            search:search
        })
        console.log(this.state.search)
        axios.get(`${REACT_APP_URL}/searchlocation/`+search)
            .then(result=>{
             this.setState({
                 suggestions:result.data.data
             })
             console.log(this.state.suggestions)
            })
            .catch(err=>{
              console.log(err)
               
            })

    }
    componentDidMount(){
        axios.get(`${REACT_APP_URL}/getrecomendation/`+this.state.service)
        .then(result=>{
            console.log(result)
            this.setState({
                workers:result.data.data
            })
        })
        .catch(Err=>{
            console.log(Err)
        })
    }
    render() {
        return (
            <div>
                <div class="sidebar1">
		            <h2>Recommendation</h2>
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
                        <div class="image mr-3"> <img src={`${REACT_APP_URL}/images/`+worker.image} placeholder={'Image of '+ worker.fname}class="rounded-circle" width="60" /> </div>
                        <div class="">
                                    <p>{worker.fname} {worker.lname}</p>
                                    <p>{worker.gender}</p>
                                    <p>{worker.address}</p>
                                    <p>{worker.experience}</p>
                                    <p>{worker.jobcategory}</p>
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
                        })}
                    
                    </div> 
                <div>
                    <EmpNav></EmpNav>
  
                </div>
                <h7>SEARCH FOR BABYSITTERS</h7>
                <div class="col-md-4 col-md-offset-3">  
                
                <div class="row">

                <form role="form" id="form-buscar">
                <div class="form-group">
                <div class="input-group">
                    
                <input className="autocomplete-input col-6 " type="text" 
                    name="Search"
                      placeholder="Search by Location"
                      aria-label="Search "
                      value={this.state.search}
                      onChange=
                      {(event)=>{this.onChangeHandler(event.target.value)}}
                    />
               
                </div>
                </div>
                </form>
                </div>            
                </div>
            
            
  <div className="container">
  {
    this.state.suggestions.map((suggestion)=>{
        return(
                <div class="cards p-4 mt-3">
                            <div class="first">
                                <div class="timee d-flex flex-row align-items-center justify-content-between mt-3">
                                    <div class="d-flex align-items-center"> <i class="fa fa-clock-o clock"></i> <span class="hour ml-1">6 hrs</span> </div>
                                    <div> <span class="font-weight-bold">Rs 100</span> </div>
                                </div>
                            </div>
                            <div class="second d-flex flex-row mt-2">
                                <div class="image mr-3"> <img src={`${REACT_APP_URL}/images/`+suggestion.image} placeholder={'Image of '+ suggestion.fname} class="rounded-circle" width="60" /> </div>
                                <div class="">
                                    <p>{suggestion.fname} {suggestion.lname}</p>
                                    <p>{suggestion.gender}</p>
                                    <p>{suggestion.address}</p>
                                    <p>{suggestion.experience}</p>
                                    <div class="d-flex flex-row mb-1">
                                        <div class="ratings ml-2"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </div>
                                    </div>
                                </div>

                            </div>

                            <div class="third mt-4">
                            <Link to={'/workerdetails/'+suggestion._id} className="btn btn-primary">Worker Details</Link>
                    
                            <Link to={'/hireworker/'+suggestion._id} className="cart__link">
                          <button className="btn btn-danger" href='/hireworker'>Hire</button>
                          </Link>

                            </div>

                        </div>
        )})}
                        </div>
                <div>
                
                </div>


                
                  
            </div>
            
        )
    }
}
