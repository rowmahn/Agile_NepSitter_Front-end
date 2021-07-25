import { Component } from "react";

import React from 'react';
import { NavLink } from "react-router-dom";


import {
 
  Button,  Menu, Dropdown,
  
} from 'antd';

import "antd/dist/antd.css";



class Header extends Component {
  state = {

    worker:[],
    Search: ''
  }
 
  render() {


    const menu = (
      <Menu>
        <Menu.Item>
          <NavLink target="_blank" rel="noopener noreferrer" to="">
            Baby Sitter
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink target="_blank" rel="noopener noreferrer" to="">
            Pet Sitter
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink target="_blank" rel="noopener noreferrer" to="">
            House Sitter
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink target="_blank" rel="noopener noreferrer" to="">
            Nanny
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink target="_blank" rel="noopener noreferrer" to="">
            Senior Care
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink target="_blank" rel="noopener noreferrer" to="">
            Granny Storytime
          </NavLink>
        </Menu.Item>
      </Menu>
    );

    return (
      <div>
            //         <div className='header' class="header fixed-top">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"></link>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"></link>               <div></div>

          <nav class="navbar navbar-expand-lg navbar-light ">
            <div class="container-fluid">
              <NavLink class="navbar-brand" to="/">NepSitter</NavLink>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" navbar-fixed-top>
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <NavLink class="nav-link " aria-current="page" to="/">Home</NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink class="nav-link " aria-current="page" to="/applyforjob">Apply for Job</NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink class="nav-link " aria-current="page" to="/workers">Show workers</NavLink>
                  </li>
                  <Dropdown overlay={menu} className="service" placement="bottomRight" arrow>
                    <Button>Our Services</Button>
                  </Dropdown>

                </ul>
                <div class="navbar-nav">
                
                  <div class="navbar-nav">

                    <li class="nav-item">
                      <NavLink class="nav-link " aria-current="page" to="/register">Signup</NavLink>
                    </li>
                    <NavLink class="nav-link " to="">||</NavLink>
                    <li class="nav-item">
                      <NavLink class="nav-link " aria-current="page" to="/login">Login</NavLink>
                    </li>

                  </div>
                </div>
              </div>
            </div>
          </nav>

        </div>

      </div>


    );
  };


}
//     render(){
//       return(

//         <div className='header'class="header fixed-top"> 
//         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"></link>
//                  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"></link>
//                <div>
//                <nav class="navbar navbar-expand-lg navbar-light ">
//                   <div class="container-fluid">
//                     <a class="navbar-brand" href="/">NepSitter</a>
//                     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"navbar-fixed-top>
//                       <span class="navbar-toggler-icon"></span>
//                     </button>
//                     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//                       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//                         <li class="nav-item">
//                           <a class="nav-link " aria-current="page" href="/">Home</a>
//                         </li>
//                         <li class="nav-item">
//                           <a class="nav-link " aria-current="page" href="#">Apply for Job</a>
//                         </li>
//                         <li class="nav-item">
//                           <a class="nav-link " aria-current="page" href="/register">Our Services</a>
//                         </li>

//                       </ul>
//                       <div class="navbar-nav">
//                       <li class="nav-item">
//                           <a class="nav-link " aria-current="page" href="/register">Signup</a>
//                         </li>
//                         <a class="nav-link ">||</a>
//                         <li class="nav-item">
//                           <a class="nav-link " aria-current="page" href="#">Login</a>
//                         </li>
//                       </div>
//                     </div>
//                   </div>
//                 </nav>
//                </div>

//             </div>






//         )
// }







export default Header;