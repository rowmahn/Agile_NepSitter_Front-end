import React, { Component,log} from 'react'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {Redirect} from 'react-router-dom'
import "../../../style/verifyemployer.css"
import {Table,Button,Modal,ModalHeader, ModalBody, ModalFooter, 
    Input, FormGroup

} from 'reactstrap'
import EmpNav from '../../../Header/Employernav'
const {REACT_APP_URL}=process.env
export default class Employerdashboard extends Component {
    state = {
        isDeleted:false,
        isEdit:false,
        hires : [],
        config:{
            headers:{'Authorization':'Bearer ' + localStorage.getItem('token')}
        },
        currenthire:{},
        title:'',
        issue:'',
        hireId:''
      
        
    }
    inputhandler=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    toggle = (e) => {
        this.setState({
            isEdit: !this.state.isEdit
        })
    }

    componentDidMount(){

        axios.get(`${REACT_APP_URL}/getmybooking` ,this.state.config)
        .then((response)=>{
            
            console.log(response.data)
            this.setState({
                hires : response.data.data
            })
        })
        .catch((err)=>{
            console.log(err.response)
        })
    
    }

    handleDelete=(hireId)=>{
        axios.delete(`${REACT_APP_URL}/cancelbooking/`+hireId,this.state.config)
        .then((response)=>{
            window.location.href= "/employerdashboard"
            this.forceUpdate();
                let filtereddata = this.state.hires.filter((hire)=> {
                    if(hire._id !== hireId) {
                        hire= this.state.currenthire
                    }
                    return hire
                })  
            
                this.setState({
                    hires: filtereddata
                })
                alert('Your Hire Form has been Deleted ');
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }

    inputhandler=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    savereport=(e)=>{
        e.preventDefault();
        console.log(this.state.hireId)
        axios.post(`${REACT_APP_URL}/worker/report/`+this.state.hireId,this.state)
        .then(response=>{
            window.location.href='/employerdashboard'
            alert("save report your response will come soon....")
        })
        .catch(err=>{
            alert("unable to save the report")
        })

    }
    Reportinsert = (hireId) => {
        this.setState({
            currenthire: this.state.hires.find((hf) => {
                return hf._id === hireId
            })
        }, console.log(this.state.currenthire));
        this.setState({
            hireId:hireId
        })
         this.toggle();
        }

        
        

    // logout=()=> log(
    //     localStorage.removeItem('token'),
    //     window.location.href='/',
    //     alert("successfully logout!!")
    //   )
    render() {
        if(!localStorage.getItem('token')){
            alert("unauthorized Access!!")
            return <Redirect to='/workerlogin'/>
        }
        return (
            
            <div className="sangai">
            <div >
                <EmpNav></EmpNav>
                {/* <h1 className="text-primary">Employer dashboard comming soon..</h1> */}
                {/* <button className="btnworker" id="workers" href="/workers">Workers</button> */}
                {/* <button className="btnhire" id="hire" href="/hire">Hire</button> */}
                {/* <button className="btn-logout" id="logout" onClick={this.logout}>Logout<ExitToAppIcon className="ml-2"/></button> */}
            </div>
            <div>
            <h4>My Bookings :</h4>

                    <Table striped bordered id="employerdashboard">
<thead>
    
<tr>
<th><a4>S.No</a4></th>
<th><a4>Location</a4></th>
<th><a4>Date</a4></th>
<th><a4>Day</a4></th>
<th><a4>Hours</a4></th>
<th><a4>Package</a4></th>
<th><a4>Hired To</a4></th>
<th><a4>Contact At</a4></th>
<th><a4>Location At</a4></th>
<th><a4>Details</a4></th>
{/* <th><a4>History</a4></th> */}

</tr>
</thead>
<tbody>
  {
this.state.hires.map((hire, i)=>{
 return (
    
                     <tr>
                        <th scope="row">{i+1}</th>
                        <td><a3>{ hire.Location }</a3></td>
                        <td><a3>{hire.Date}</a3></td>
                        <td><a3>{hire.Day}</a3></td>
                        <td><a3>{hire.Hours}</a3></td>
                        <td><a3>{ hire.Package}</a3> </td>
                        <td><a3>{hire.WorkerID.fname} {hire.WorkerID.lname}</a3><br></br>
                        <Link to={'workinghistory/'+hire._id} className="btn btn-history">Working History</Link>
                        </td>
                        <td><a3>{hire.WorkerID.phone}</a3></td>
                        <td>
                        <div className="bar1">
                        <Link to={'/location'} className="btn btn-location" >{hire.WorkerID.address}</Link>
                        
                        </div>
                        </td>
                        
                        
                        <td>
                            <div className="flex">
                                <div className="bar">
                                <button onClick={()=>{
                if(window.confirm('Are you sure to delete this Booking Form'))
                        this.handleDelete(hire._id)}} class="btn btn-danger">Delete</button>            
                         
                         <Link to={'/updatehireworker/'+hire._id} className="btn btn-primary" >Update</Link>
                                </div>
                            
                         <div className="bar1">
                         <button className="btn btn-primary" onClick={()=>this.Reportinsert(hire._id)}>Report</button>
                         <Link to={'/employerview/'+hire.WorkerID._id} className="btn btn-primary" >Worker Profile</Link>
                         {/* <button className="btn btn-primary" onClick={()=>this.Workerprofile(hire._id)}>Worker Profile</button> */}
                            </div>
                            
                                </div>
                                
                         
                       </td>
                       {/* <td> */}
                       
                       {/* </td> */}
                      </tr>
                        )
                      })
                     }
              </tbody>
           </Table>

           <Modal isOpen={this.state.isEdit} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        Report Worker
                    </ModalHeader>
                    <ModalBody>         
                        <FormGroup>
                            <Input name='title' type='text'
                            placeholder="Title"
                            onChange={this.inputhandler} 
                            value={this.state.title}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input name='issue' type='text'
                            placeholder="Issue"
                            onChange={this.inputhandler} 
                            value={this.state.issue}
                             />
                        </FormGroup>    
                                                       
                    </ModalBody>  
                    <ModalFooter>
                        <Button color='primary' onClick={this.savereport}>
                            Save</Button>
                    </ModalFooter>
                </Modal>

            </div>
            </div>
        )
    }
}
