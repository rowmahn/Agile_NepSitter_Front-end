import React, { Component } from 'react'
import { 
    Container,
    Form,
    Col,
    Button,Modal,
    ModalHeader, 
    ModalBody, 
    ModalFooter, 
    Input, 
    FormGroup,
    Label
 } from 'reactstrap';

import '../../../style/employerprofile.css'
import axios from 'axios';
import { ThumbUpSharp } from '@material-ui/icons';
import EmpNav from '../../../Header/Employernav'

export default class Employerprofile extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
            isEdit:false,
            config: {
                headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
            },
            employer:{},

            // Fullname:'',
            // Email:'',
            // Contact:'',
            // Image:'',
            // Location:'',
            // Age:'',
            // Gender:'',
            // Citizenship:''
            }
        }


        filehandler=(e)=>{
            this.setState({
              Image : e.target.files[0]
          })
          }

        //   inputhandler=(e)=>{
        //     this.setState({
        //      [e.target.name]:e.target.value
        //          })
        //         }

        userEdit = (e) => {
            this.setState({
                isEdit: !this.state.isEdit
            })
        }


        updateprofile=(e)=>{
            e.preventDefault()
            const data =new FormData()
            data.append('Image',this.state.Image)
            axios.put('http://localhost:90/employer/upprofilepic',data,this.state.config)
            .then(result=>{
                window.location.href='/employerprofile'
                alert("image updated successfully")
            })
            .catch(err=>{
                console.log(err)
            })
          }

          componentDidMount(){
            axios.get('http://localhost:90/employer/profile',this.state.config)
            .then((response)=>{
                console.log(response)
                this.setState({

                    employer:response.data.data
                    // Fullname:response.data.data.Fullname,
                    // Email:response.data.data.Email,
                    // Gender:response.data.data.Gender,
                    // Location:response.data.data.Location,
                    // Age:response.data.data.Age,
                    // Citizenship:response.data.data.Citizenship,
                    // Contact:response.data.data.Contact,
                    // Image:response.data.data.Image
                }
                )
            })
            .catch((err)=>{
                console.log(err)
            })
        }


        handleUpdate=(event)=>{
            event.preventDefault();
            const config= {
                headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
            }
            
           
            axios.put(`http://localhost:90/employer/updateprofile`,this.state.employer,config)

            
            .then((response)=>{
                window.location.href="/employerprofile"
                console.log(this.response)
                // this.setState({
                //     isEdit: !this.state.isEdit
                // })
                alert('user updated');
    
            })
        }



    handleUserChange = (e) => {
        this.setState({
            employer: { ...this.state.employer, [e.target.name]: e.target.value }
        });
    };


    // inputhandler=(e)=>{
    //     this.setState({
    //      [e.target.name]:e.target.value
    //          })
    //         }
    
    render() {
        
        return (
            <React.Fragment>
            <div>
            <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
            <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
            <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

            <EmpNav></EmpNav>
            <div class="container emp-profile">
                <form method="post">
                <div class="row">
                <div class="col-md-4">
                
                    <div class="profile-img">
                        <img src={'http://localhost:90/images/'+this.state.employer.Image} alt={"Image of "+ this.state.employer.Fullname}/>
                        <form onSubmit={this.updateprofile}>
                        <div class="file btn btn-lg btn-primary">
                            Change Photo
                            <input type="file" name="Image" onChange={this.filehandler}/>
                        </div>
                        
                        </form>
                    </div>
                    
                </div>
                <div class="col-md-6">
                    <div class="profile-head">
                                <h5>
                                    {this.state.employer.Fullname}
                                </h5>
                                <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                                
                            </ul>

                    </div>
                </div>
                <div class="col-md-2">
                    <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                    <button  className="profile-save-btn" name="mt-4" onClick={this.updateprofilepic} >Save Image</button>
                </div>
                
            </div>
            <div class="row">

                <div class="col-md-8">
                    <div class="tab-content profile-tab" id="myTabContent">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Username</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>{this.state.employer.Fullname}</p>
                                        </div>
                                    </div>
                                    
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Email</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>{this.state.employer.Email}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Gender</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>{this.state.employer.Gender}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Phone</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>{this.state.employer.Contact}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Profession</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>Student</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Address</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>{this.state.employer.Location}</p>
                                        </div>
                                    </div>

                                    


                        </div>

                        <Button onClick={this.userEdit}>Edit</Button>
                    </div>
                </div>
            </div>
        </form>           
        </div>
        </div>


        <Modal isOpen={this.state.isEdit} toggle={this.userEdit}>
                    <ModalHeader toggle={this.userEdit}>
                        Edit User
                    </ModalHeader>
                    <ModalBody>        
                        <FormGroup>
                            <Input name='Fullname' type='text' placeholder="enter Your Name"
                                value={this.state.employer.Fullname} 
                                onChange={this.handleUserChange} />
                        </FormGroup>
                        <FormGroup>
                            {/* <Input name='Gender' type='text'
                                value={this.state.employer.Gender} 
                                onChange={this.handleUserChange}/> */}
                <select name='Gender' type='text' value={this.state.employer.Gender} 
                                onChange={this.handleUserChange}>
                <option selected={this.state.employer.Gender === "Male"}>Male</option>
                <option selected={this.state.employer.Gender === "Female"}>Female</option>
                <option selected={this.state.employer.Gender === "Others"}>Others</option>
                </select>
            
                        </FormGroup>
                        <FormGroup>
                            <Input name='Contact' type='text'
                                value={this.state.employer.Contact} 
                                onChange={this.handleUserChange}/>
                        </FormGroup>   
                        <FormGroup>
                            <Input name='Location' type='text'
                                value={this.state.employer.Location} 
                                onChange={this.handleUserChange}/>
                        </FormGroup>     
                                
                    </ModalBody>  
                    <ModalFooter>
                        <Button color='primary' onClick={(event)=>this.handleUpdate(event)}>
                            Save Changes</Button>
                    </ModalFooter>
                </Modal>



        </React.Fragment>
        )
     }
}