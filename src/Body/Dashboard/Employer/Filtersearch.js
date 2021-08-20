
import { Button } from "bootstrap";
import {Component} from "react"
import '../../../style/filtersearch.css'
class Filtersearch extends Component{


render(){
    return(
       <div>
           <div>

           

           <div class="containers">

           <header class="navbar">
  <h2 title="title" class="title">Advanced Search</h2>
  
</header>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="iTitle">Name</span>
      </div>
      <input type="text" class="form-control" placeholder="Name" aria-label="Name" aria-describedby="Name"/>
    </div>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="iYear">Location</span>
      </div>
      <input type="Rating" class="form-control" placeholder="Location" aria-label="Location" aria-describedby="Location"/>
    </div>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="director">Gender</span>
      </div>
      <input type="text" class="form-control" placeholder="Gender" aria-label="Gender" aria-describedby="Gender"/>
    </div>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="director">Experience</span>
      </div>
      <input type="text" class="form-control" placeholder="Director" aria-label="Director" aria-describedby="director"/>
    </div>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="star">Ratings</span>
      </div>
      <input type="text" class="form-control" placeholder="Please only enter one star's name" aria-label="star" aria-describedby="star"/>
    </div>
    <button class="btn btn-primary search" id="search">Search</button>
  </div>

  <div class="container mt-5 d-flex justify-content-center">
  <div class="card p-4 mt-3">
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
    <div class="card p-4 mt-3">
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