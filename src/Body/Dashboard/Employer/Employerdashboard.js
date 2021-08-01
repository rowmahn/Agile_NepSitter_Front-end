import React, { Component,log} from 'react'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {Redirect} from 'react-router-dom'
import {Table,Button,Modal,ModalHeader, ModalBody, ModalFooter, 
    Input, FormGroup

} from 'reactstrap'

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

        axios.get("http://localhost:90/getmybooking" ,this.state.config)
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
        axios.delete('http://localhost:90/cancelbooking/'+hireId,this.state.config)
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
    savereport=(e)=>{
        e.preventDefault();
        console.log(this.state.hireId)
        axios.post('localhost:90/worker/report/'+this.state.hireId,this.state)
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
        

    logout=()=> log(
        localStorage.removeItem('token'),
        window.location.href='/',
        alert("successfully logout!!")
      )
    render() {
        if(!localStorage.getItem('token')){
            alert("unauthorized Access!!")
            return <Redirect to='/login'/>
        }
        return (
            <div>
            <div className="">
                <h1 className="text-primary">Employer dashboard comming soon..</h1>
                <button className="btn-logout" id="logout" onClick={this.logout}>Logout<ExitToAppIcon className="ml-2"/></button>
            </div>
            <div>
                    <h2>My bookings</h2>

                    <Table striped bordered>
<thead>
<tr>
<th>S.No</th>
<th>Location</th>
<th>Date</th>
<th>Day</th>
<th>Hours</th>
<th>Package</th>

</tr>
</thead>
<tbody>
  {
this.state.hires.map((hire, i)=>{
 return (
    
                     <tr>
                        <th scope="row">{i+1}</th>
                        <td>{ hire.Location }</td>
                        <td>{hire.Date}</td>
                        <td>{hire.Day}</td>
                        <td>{hire.Hours}</td>
                        <td> { hire.Package}</td>
                        <td><button onClick={()=>{
                if(window.confirm('Are you sure to delete this Booking Form'))
                        this.handleDelete(hire._id)}} class="ml-2">Delete</button>            
                         
                         <Link to={'/updatehireworker/'+hire._id} className="btn btn-primary" >Update</Link>
                         <button onClick={()=>this.Reportinsert(hire._id)}>Report</button>
                         
                       </td>
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
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input name='issue' type='text'
                            placeholder="Issue"
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