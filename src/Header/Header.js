import { Component } from "react";

import React from 'react';
import { NavLink } from "react-router-dom";


import {
    Button,
    Menu,
    Dropdown

  } from 'antd';
  import "antd/dist/antd.css";



class Header extends Component{
 
  render(){
    const menu = (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="">
            Baby Sitter
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="">
            Pet Sitter
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="">
            House Sitter
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="">
            Nanny
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="">
            Senior Care
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="">
            Granny Storytime
          </a>
        </Menu.Item>
      </Menu>
    );
    if(localStorage.getItem('token'))
    {
      var nav=
      <div>  
      </div>
    }else{
      
var nav=<div>
   <nav class="navbar navbar-expand-lg navbar-light ">
              <div class="container-fluid">
                <a class="navbar-brand" href="/">NepSitter</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"navbar-fixed-top>
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    
                  <li class="nav-item">
                      <a class="nav-link " aria-current="page" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link " aria-current="page" href="/applyforjob">Apply for Job</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link " aria-current="page" href="/applyforjob">Entertainment </a>
                    </li>
                    
                    <Dropdown overlay={menu} className="service" placement="bottomRight" arrow>
                     <Button>Our Services</Button>
                     </Dropdown>
                    
                  </ul>
                  <div class="navbar-nav">
                
                     <div class="navbar-nav">
                       <li class="nav-item">
                           <a class="nav-link " aria-current="page" href="/register">Signup</a>
                         </li>
                         <a class="nav-link ">||</a>
                         <li class="nav-item">
                           <a class="nav-link " aria-current="page" href="/login">Login</a>
                         </li>
                         
                      </div>
                  </div>
                </div>
              </div>
            
          </nav>

</div>
    }



     

 return (
          <div>
            <div className='header'class="header fixed-top"> 
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"></link>
                 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"></link>               <div></div>
                 {nav}
             
        </div>
            
      </div>


    );
  };


}


export default Header;