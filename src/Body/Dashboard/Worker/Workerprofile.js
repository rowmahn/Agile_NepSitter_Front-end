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
import WorkerNav from '../../../Header/Workernav'

export default class Workerprofile extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
            isEdit:false,
            config: {
                headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
            },
            worker:{},

            }
        }


        filehandler=(e)=>{
            this.setState({
              Image : e.target.files[0]
          })
          }

        userEdit = (e) => {
            this.setState({
                isEdit: !this.state.isEdit
            })
        }


        updateprofilepic=(e)=>{
            e.preventDefault()
            const data =new FormData()
            data.append('Image',this.state.Image)
            axios.put('http://localhost:90/worker/profilepic',data,this.state.config)
            .then(result=>{
                window.location.href='/workerprofile'
                alert("image updated successfully")
            })
            .catch(err=>{
                console.log(err)
            })
          }

          componentDidMount(){
            axios.get('http://localhost:90/worker/profile',this.state.config)
            .then((response)=>{
                console.log(response)
                this.setState({

                    worker:response.data.data
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
            axios.put(`http://localhost:90/worker/updateprofile`,this.state.employer,config)
            .then((response)=>{
                window.location.href="/workerprofile"
                console.log(this.response)
            
                alert('Worker updated');
    
            })
        }



    handleUserChange = (e) => {
        this.setState({
            worker: { ...this.state.worker, [e.target.name]: e.target.value }
        });
    };
    
    render() {
        
        return (
            <React.Fragment>
            <div>
            <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
            <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
            <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            <WorkerNav></WorkerNav>
            <div class="container emp-profile">
                <form method="post">
                <div class="row">
                <div class="col-md-4">
                
                    <div class="profile-img">
                        <img src={'http://localhost:90/images/'+this.state.worker.Image} alt={"Image of "+ this.state.worker.fname}/>
                        <form onSubmit={this.updateprofilepic}>
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
                                    {this.state.worker.fname}
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
                    <button  className="profile-save-btn" name="mt-4" onClick={this.updateprofile} >Save Image</button>
                </div>
                
            </div>
            <div class="row">

                <div class="col-md-8">
                    <div class="tab-content profile-tab" id="myTabContent">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Fname</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>{this.state.worker.fname}</p>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Lname</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>{this.state.worker.lname}</p>
                                        </div>
                                    </div>
                                    
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Email</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>{this.state.worker.email}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Gender</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>{this.state.worker.gender}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Phone</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>{this.state.worker.phone}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Profession</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>Worker</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Certificate</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>{this.state.worker.certificate}</p>
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
                            <Input name='fname' type='text' placeholder="enter Your fname"
                                value={this.state.worker.fname} 
                                onChange={this.handleUserChange} />
                        </FormGroup>

                        <FormGroup>
                            <Input name='lname' type='text' placeholder="enter Your lname"
                                value={this.state.worker.lname} 
                                onChange={this.handleUserChange} />
                        </FormGroup>
                        <FormGroup>
                           <select name='gender' type='text' value={this.state.worker.gender} 
                                onChange={this.handleUserChange}>
                                <option selected={this.state.worker.gender === "Male"}>Male</option>
                                <option selected={this.state.worker.gender === "Female"}>Female</option>
                                <option selected={this.state.worker.gender === "Others"}>Others</option>
                           </select>
            
                        </FormGroup>
                        <FormGroup>
                            <Input name='phone' type='text'
                                value={this.state.worker.phone} 
                                onChange={this.handleUserChange}/>
                        </FormGroup>   
                        <FormGroup>
                            <Input name='certificate' type='text'
                                value={this.state.worker.certificate} 
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