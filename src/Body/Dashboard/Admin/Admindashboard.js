import React, { Component } from 'react'
import '../../../style/nav.css'
export default class Admindashboard extends Component {
    render() {
        return (
            <div>
                 <div class="wrapper">
                    <div class="sidebar">
                        <h2>NepSitter</h2>
                        <ul>
                            <li><a href="#"><i class="fas fa-home"></i>User</a></li>
                            <li><a href="#"><i class="fas fa-user"></i>Profile</a></li>
                            <li><a href="#"><i class="fas fa-user-md"></i>Services</a></li>
                            <li><a href="#"><i class="fas fa-address-card"></i>My Data</a></li>
                            <li><a href="#"><i class="fas fa-history"></i>History</a></li>
                            <li><a href="#"><i class="fas fa-sign-out-alt"></i>Logout</a></li>
                        </ul> 
                        <div class="social_media">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                    </div>
                    <div class="main_content">
                        <div class="header">Welcome!! Have a nice day.</div>  
                        <div class="info">
                                </div>
                    </div>
                </div>
            </div>
        )
    }
}
