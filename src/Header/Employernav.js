import { Component,log} from "react";
import '../style/nav.css'
import {
  Button,
  Menu,
  Dropdown

} from 'antd';
import { DownOutlined } from '@ant-design/icons';

class employernav extends Component{


  
  logout=()=> log(
    localStorage.removeItem('token'),
    window.location.href='/',
    alert("successfully logout!!")
  )

  render(){

    const menu = (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="/babysitter">
            Baby Sitter
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="/petsitter">
            Pet Sitter
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="/housesitter">
            House Sitter
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="/nanny">
            Nanny
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="/seniorcare">
            Senior Care
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="/grannystorytime">
            Granny Storytime
          </a>
        </Menu.Item>
      </Menu>
    );
      return(
        <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"></link> 
            <div class="wrapper">
                <div className="sidebar col-md-3 col-sm-3">
                    <h2>NepSitter</h2>
                    <ul>
                        <li><a href="/employerdashboard"><i class="fas fa-home"></i>Employer Dashboard</a></li>
                        <li><a href="/employerprofile"><i class="fas fa-user"></i>Profile</a></li>
                        {/* <li><a href="workers"><i class="fas fa-user-md"></i>Services</a></li> */}
                        <div className="services">
                        <Dropdown overlay={menu} className="service" placement="bottomRight" arrow>
                     <Button><a><i class="fas fa-user-md"></i> Our Services</a></Button>
                     </Dropdown>
                        </div>
                        
                        <li><a href="#"><i class="fas fa-address-card"></i>My Data</a></li>
                        <li><a href="/filtersearch"><i class="fas fa-search"></i>Advanced Search</a></li>
                        <li><a href="#"><i class="fas fa-bell"></i>Notification</a></li>
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