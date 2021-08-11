import { Component} from "react";


class employernav extends Component{
  logout=()=> log(
    localStorage.removeItem('token'),
    window.location.href='/',
    alert("successfully logout!!")
  )
  render(){
      return(
        <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"></link> 
            <div class="wrapper">
                <div className="sidebar col-md-3 col-sm-3">
                    <h2>NepSitter</h2>
                    <ul>
                        <li><a href="#"><i class="fas fa-home"></i>User</a></li>
                        <li><a href="/employerprofile"><i class="fas fa-user"></i>Profile</a></li>
                        <li><a href="workers"><i class="fas fa-user-md"></i>Services</a></li>
                        <li><a href="#"><i class="fas fa-address-card"></i>My Data</a></li>
                        <li><a href="#"><i class="fas fa-bell"></i>Notification</a></li>
                        <li><a href="#"><i class="fas fa-history"></i>History</a></li>
                        <li><a href="#" onClick={this.logout}><i class="fas fa-sign-out-alt"></i>Logout</a></li>
                    </ul> 
                    <div class="social_media">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                </div>
                </div>
                <div className="main_content col-md-9 col-sm-9 ">
               
                    
                            
                </div>
            </div>
        </div>
      )
    
  }
}
      


export default employernav;