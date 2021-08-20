
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


           </div>
       </div>
    )
}
}

export default Filtersearch;