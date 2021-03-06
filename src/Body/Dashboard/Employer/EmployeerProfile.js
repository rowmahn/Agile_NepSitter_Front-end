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
import { Rate } from 'antd';
import '../../../style/employerprofile.css'
import axios from 'axios';
import { ThumbUpSharp } from '@material-ui/icons';
import EmpNav from '../../../Header/Employernav'
const {REACT_APP_URL}=process.env

export default class EmployeerProfile extends Component {


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
            axios.put(`${REACT_APP_URL}/employer/upprofilepic`,data,this.state.config)
            .then(result=>{
                window.location.href='/employerprofile'
                alert("image updated successfully")
            })
            .catch(err=>{
                console.log(err)
            })
          }

          componentDidMount(){
            axios.get(`${REACT_APP_URL}/employer/profile`,this.state.config)
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
            
           
            axios.put(`${REACT_APP_URL}/employer/updateprofile`,this.state.employer,config)

            
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

            <EmpNav></EmpNav>
            <div class="container emp-profile">
                <form method="post">
                <div class="row">
                <div class="col-md-4">
                
                    <div class="profile-img">
                        <img src={`${REACT_APP_URL}/images/`+this.state.employer.Image} alt={"Image of "+ this.state.employer.Fullname}/>
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
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">YOUR DETAILS</a>

                                    
                                </li>
                                
                                
                            </ul>
                            <div className="userprofile"><div class="row">
                                        <div class="col-md-6">
                                            <label>USERNAME</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>{this.state.employer.Fullname}</p>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>EMAIL</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>{this.state.employer.Email}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>GENDER</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>{this.state.employer.Gender}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>CONTACT NUMBER</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>{this.state.employer.Contact}</p>
                                        </div>
                                    </div>
                                
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>ADDRESS</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>{this.state.employer.Location}</p>
                                        </div>
                                    </div>
 </div>
                            
                    </div>
                </div>
                <div class="col-md-2">
                <Button onClick={this.userEdit}>Edit</Button>
                    <button  className="profile-save-btn" name="mt-4" onClick={this.updateprofile} >Save Image</button>
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