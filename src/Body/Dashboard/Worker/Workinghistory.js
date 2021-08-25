import axios from "axios"
import {Component} from "react"
import { Link } from "react-router-dom"
import '../../../style/workinghistory.css'
const {REACT_APP_URL}=process.env
class Workinghistory extends Component{
state={
  works:[],
  hid:this.props.match.params.hid,
  config:{
    headers:{'Authorization':'Bearer ' + localStorage.getItem('token')}
}
}
componentDidMount(){
  axios.get(`${REACT_APP_URL}/getworkinghour/`+this.state.hid)
  .then(responce=>{
    console.log(responce)
    this.setState({
      works:responce.data.data
    })
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
  {
    this.state.works.map((work)=>{
        return(
  <ul>
    <li data-label="date">{work.CreatedAt}</li>
    <li data-label="shift">{work.Workinghours}</li>
    <li data-label="country">100</li>
    <li data-label="number">{work.Workinghours*100}</li>
    <Link data-label="reference" className="btn btn-warning" to={'/khalti/'+work.Workinghours}>Pay now</Link>
   
  </ul>
        )})
        }
</div>

                </div>

            </div>
        )
    }
}
export default Workinghistory;