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
const {REACT_APP_URL}=process.env

export default class WorkerProfile extends Component {


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
              image : e.target.files[0]
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
            data.append('image',this.state.image)
            axios.put(`${REACT_APP_URL}/worker/upprofilepic`,data,this.state.config)
            .then(result=>{
                window.location.href='/workerprofile'
                alert("image updated successfully")
            })
            .catch(err=>{
                console.log(err)
            })
          }

          componentDidMount(){
              
            
            axios.get(`${REACT_APP_URL}/getworker/profile`,this.state.config)
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
            
            axios.put(`${REACT_APP_URL}/worker/updateprofile`,this.state.worker,config)
            .then((response)=>{
                window.location.href="/workerprofile"
                console.log(response)
            
                alert('Worker updated');
    
            })
            .catch(err=>{
                alert('Worker unable to update!!')
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
            <WorkerNav></WorkerNav>
            <div class="container emp-profile">
                <form method="post">
                <div class="row">
                <div class="col-md-4">
                
                    <div class="profile-img">
                        <img src={`${REACT_APP_URL}/images/`+this.state.worker.image} alt={"Image of "+ this.state.worker.fname}/>
                        <form onSubmit={this.updateprofilepic}>
                        <div class="file btn btn-lg btn-primary">
                            Change Photo
                            <input type="file" name="image" onChange={this.filehandler}/>
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
                <Button onClick={this.userEdit}>Edit</Button>
                    <button  className="profile-save-btn" name="mt-4" onClick={this.updateprofilepic} >Save Image</button>
                </div>
                
            </div>
            <div class="row">

                <div class="col-md-8">
                    <div class="tab-content profile-tab" id="myTabContent">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div class="row">
                                        <div class="col-md-6">
                                            <label>Badge</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>{this.state.worker.badge}</p>
                                        </div>
                                    </div>

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
                                            <label>Experience</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>{this.state.worker.experience}</p>
                                        </div>
                                    </div>

                                    


                        </div>

                        
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