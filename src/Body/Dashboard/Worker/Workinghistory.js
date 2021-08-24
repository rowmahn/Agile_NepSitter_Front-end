import axios from "axios"
import {Component} from "react"
import '../../../style/workinghistory.css'

class Workinghistory extends Component{
state={
  works:[],
  hireID:this.props.match.params.hireID,
  config:{
    headers:{'Authorization':'Bearer ' + localStorage.getItem('token')}
}
}
componentDidMount(){
  axios.get('htttp://localhost:90/getworkinghistory/'+this.state.hireID)
  .then(responce=>{
    console.log(responce)
  })
  .catch(err=>{
    console.log(err)
  })
}
    render(){
        return(
            <div>
                <div class="center">
<h2>Working History</h2>
                <div class="list" >
  <ul>
    <li>Date</li>
    <li>Hour Tracked</li>
    <li>Rate per hour</li>
    <li>Earning</li>
    <li>Action</li>
  </ul>
  <ul>
    <li data-label="date">2021-02-04</li>
    <li data-label="shift">1</li>
    <li data-label="country">100</li>
    <li data-label="number">400</li>
    <li data-label="reference" className="btn btn-warning">Pay now</li>
   
  </ul>
 
</div>

                </div>

            </div>
        )
    }
}
export default Workinghistory;