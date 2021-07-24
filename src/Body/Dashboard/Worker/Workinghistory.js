import {Component} from "react"
import '../../../style/workinghistory.css'
class Workinghistory extends Component{


    render(){
        return(
            <div>
                <div class="center">
<h2>Working History</h2>
                <div class="list" >
  <ul>
    <li>Date</li>
    <li>Shift</li>
    <li>Employer</li>
    <li>Hour Assigned</li>
    <li>Hour Tracked</li>
    <li>Rate per hour</li>
    <li>Earning</li>
    
  </ul>
  <ul>
    <li data-label="date">2021-02-04</li>
    <li data-label="shift">Morning</li>
    <li data-label="country">Ram</li>
    <li data-label="number">6</li>
    <li data-label="reference">6</li>
    <li data-label="rate">Rs 100</li>
    <li data-label="earning">Rs 600</li>
  </ul>
  <ul>
    <li data-label="date">2021-02-04</li>
    <li data-label="shift">Morning</li>
    <li data-label="country">Ram</li>
    <li data-label="number">6</li>
    <li data-label="reference">6</li>
    <li data-label="rate">Rs 100</li>
    <li data-label="earning">Rs 600</li>
  </ul>
  
</div>

                </div>

            </div>
        )
    }
}
export default Workinghistory;