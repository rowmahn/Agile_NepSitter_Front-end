import React, { Component } from 'react'
import EmpNav from "../../../../Header/Employernav"
import "../../../../style/recommendation.css"


export default class Nanny extends Component {
    render() {
        return (
            <div>
                 <div class="sidebar1">
		            <h2>Recommendation</h2>
                <div class="card">
                <img src="" alt="Avatar" />
                <div class="container">
                    <b>Priyanka Chopra</b>
                    <p>Babysitter</p>
                </div>
                </div> 
                    
                    </div> 
                <div>
                    <EmpNav></EmpNav>
  
                </div>
                <h7>SEARCH FOR NANNY</h7>
                <div class="col-md-4 col-md-offset-3">  
                
                <div class="row">

                <form role="form" id="form-buscar">
                <div class="form-group">
                <div class="input-group">
                    
                <input id="1" class="form-control" type="text" name="search" placeholder="Search with location" required/>
                <span class="input-group-btn">
                <button class="btn btn-success" type="submit">
                <i class="glyphicon glyphicon-search" aria-hidden="true"></i> Search
                </button>
                </span>
                </div>
                </div>
                </form>
                </div>            
                </div>
            
            
  <div className="container">

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
                <div>
                
                </div>
            </div>
        )
    }
}
