import React, { Component,log } from 'react'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom'
import {Table,Button,Modal,ModalHeader, ModalBody, ModalFooter, 
    Input, FormGroup

} from 'reactstrap'
import WorkerNav from '../../../Header/Workernav'

export default class Workerdashboard extends Component {

    state = {
        isEdit:false,
        hireds : [],
        config:{
            headers:{'Authorization':'Bearer ' + localStorage.getItem('token')}
        },
        currenthired:{},
        title:'',
        issue:'',
        hireId:''
      
        
    }
    toggle = (e) => {
        this.setState({
            isEdit: !this.state.isEdit
        })
    }

    logout=()=> log(
        localStorage.removeItem('token'),
        window.location.href='/',
        alert("successfully logout!!")
      )

      componentDidMount(){

        axios.get("http://localhost:90/worker/getmybooking" ,this.state.config)
        .then((response)=>{
            
            console.log(response.data)
            this.setState({
                hireds : response.data.data
            })
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

    Savereport=(e)=>{
        e.preventDefault();
        console.log(this.state.hireId)
        axios.post('http://localhost:90/employer/report/'+this.state.hireId,this.state)
        .then(response=>{
            window.location.href='/workerdashboard'
            alert("save report your response will come soon....")

        })
        .catch(err=>{
            console.log(err)
            alert("unable to save the report")
        })

    }

    ReportInsert = (hireId) => {
        this.setState({
            currenthire: this.state.hireds.find((hf) => {
                return hf._id === hireId
            })
        }, console.log(this.state.currenthired));
        this.setState({
            hireId:hireId
        })
         this.toggle();
        }
    render() {
        if(!localStorage.getItem('token')){
            alert("unauthorized Access!!")
            return <Redirect to='/workerlogin'/>
        }
        return (
            <div>
                
            
            <div className="">
            <WorkerNav></WorkerNav>
                <h1 className="text-primary">Worker dashboard comming soon..</h1>
                <button className="btn-logout" onClick={this.logout}>Logout<ExitToAppIcon className="ml-2"/></button>
            </div>
            <div>
            <h2>Hired Details</h2>

<Table striped bordered>
<thead>
<tr>
<th>S.No</th>
<th>Location</th>
<th>Date</th>
<th>Day</th>
<th>Hours</th>
<th>Package</th>
<th>Hired By</th>

</tr>
</thead>
<tbody>
{
this.state.hireds.map((hired, i)=>{
return (

 <tr>
    <th scope="row">{i+1}</th>
    <td>{ hired.Location }</td>
    <td>{hired.Date}</td>
    <td>{hired.Day}</td>
    <td>{hired.Hours}</td>
    <td> { hired.Package}</td>
    <td> { hired.EmployerID.Fullname}</td>
    <td>
     <button
      onClick={()=>this.ReportInsert(hired._id)}
      >Report</button>
     <Link to={'timer/'+hired._id}>Start work</Link>
     <Link to={'workinghistory/'+hired._id}>Working history</Link>
   </td>
  </tr>
    )
  })
 }
</tbody>
</Table>

<Modal isOpen={this.state.isEdit} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        Report Employer
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
                        <Button color='primary' onClick={this.Savereport}>
                            Save</Button>
                    </ModalFooter>
                </Modal>
            </div>
            </div>
            
        )
    }
}
