import {Component} from "react"
import "../../../style/verifyemployer.css"
class VerifyEmployer extends Component{


    render(){
        return(
            <div>
                <div class="center">
<h2>List of Employers to be Verified</h2>
                <div class="list" >
  <ul>
  <li>Date</li>
    <li>Full Name</li>
    <li>Contact</li>
    <li>Email</li>
    <li>Password</li>
    <li>Age</li>
    <li>Gender</li>
    <li>Location</li>
    <li>Citizenship</li>
    <li>Photo</li>
    <li>Verify</li>
    <li>Unverify</li>

    
  </ul>
  <ul>
  <li data-label="date">2021-02-04</li>
    <li data-label="date">Roman Dulal</li>
    <li data-label="shift">3465346</li>
    <li data-label="country">ergerg</li>
    <li data-label="number">6</li>
    <li data-label="reference">6</li>
    <li data-label="rate">Male</li>
    <li data-label="earning">ktm</li>
    <li data-label="earning">ktm</li>
    <li data-label="earning">ktm</li>
    <li data-label="earning"><button type="submit" name="Verify">Verify</button></li>
    <li data-label="earning"><button type="submit" name="Verify">UnVerify</button></li>
  </ul>
  <ul>
  <li data-label="date"></li>
    <li data-label="date"></li>
    <li data-label="shift"></li>
    <li data-label="country"></li>
    <li data-label="number"></li>
    <li data-label="reference"></li>
    <li data-label="rate"></li>
    <li data-label="earning"></li>
    <li data-label="earning"></li>
    <li data-label="earning"></li>
    <li data-label="earning"><button type="submit" name="Verify">Verify</button></li>
    <li data-label="earning"><button type="submit" name="Verify">UnVerify</button></li>
  </ul>
</div>

                </div>

            </div>
        )
    }
}
export default VerifyEmployer;


