import React, { Component} from 'react'
import axios from 'axios';
import {Table} from 'reactstrap'
import "../../../style/verify.css"
const {REACT_APP_URL}=process.env
export default class VerifyWorker extends Component {
    state = {
        workers:[],
        verifiedworkers:[],
        config:{
            headers:{'Authorization':'Bearer ' + localStorage.getItem('token')}
        },
        currentworker:{}
      
        
    }

    componentDidMount(){

        axios.get(`${REACT_APP_URL}/unapproved` ,this.state.config)
        .then((response)=>{
            
            console.log(response)
            this.setState({
                workers : response.data.data
            })
        })
        .catch((err)=>{
            console.log(err.response)
        })
    
        axios.get(`${REACT_APP_URL}/approved` ,this.state.config)
        .then((response)=>{
            
            console.log(response)
            this.setState({
                verifiedworkers : response.data.data
            })
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }

    handleApproval=(workerId)=>{
        console.log(workerId);
        // event.preventDefault();
        axios.put(`${REACT_APP_URL}/approveworker/${workerId}`,this.state.config)
        .then((response)=>{
            console.log(response.data)
            window.location.href='/verifyworker'
            alert(' Your worker Form has been approved');
        })
    }

    WorkerDelete=(workerId)=>{
        axios.delete(`${REACT_APP_URL}/denyworker/${workerId}`,this.state.config)
        .then((response)=>{
            window.location.href= "/verifyworker"
            this.forceUpdate();
                // let filtereddata = this.state.workers.filter((worker)=> {
                //     if(worker._id !== workerId) {
                //         worker= this.state.currentworker
                //     }
                //     return worker
                // })  
            
                // this.setState({
                //     workers: filtereddata
                // })
                alert('Your Worker Form has been Deleted ');
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }

 
    render() {
       
        return (
            <div>
            <div className="container-fluid1">
                    <h3>Request for JOB as Worker</h3>
<Table striped bordered>
<thead>
<tr>
<th>S.No</th>
<th>Fname</th>
<th>Lname</th>
<th>Phone</th>
<th>Email</th>
<th>Gender</th>
<th>Approved</th>
<th>Deny</th>

</tr>
</thead>
<tbody>
  {
this.state.workers.map((worker, i)=>{
 return (
    
                     <tr>
                        <th scope="row">{i+1}</th>
                        <td>{ worker.fname }</td>
                        <td>{worker.lname}</td>
                        <td>{worker.phone}</td>
                        <td>{worker.email}</td>
                        <td>{worker.gender}</td>
                        <td><button onClick={()=>this.handleApproval(worker._id)}>Approved</button></td>
                        <td>
                         <button onClick={()=>{
                            if(window.confirm('Are you sure to Reject this Applied form'))
                            this.WorkerDelete(worker._id)}} class="ml-2">Deny</button>            
                        </td>
                      </tr>
                        )
                      })
                     }
              </tbody>
           </Table>


           <h2>Verified Worker</h2>
           <Table striped bordered>
<thead>
<tr>
<th>S.No</th>
<th>Fname</th>
<th>Lname</th>
<th>Phone</th>
<th>Email</th>
<th>Gender</th>
<th>Approved</th>
<th>Deny</th>

</tr>
</thead>
<tbody>
  {
this.state.verifiedworkers.map((verifiedworker, i)=>{
 return (
    
                     <tr>
                        <th scope="row">{i+1}</th>
                        <td>{verifiedworker.fname }</td>
                        <td>{verifiedworker.lname}</td>
                        <td>{verifiedworker.phone}</td>
                        <td>{verifiedworker.email}</td>
                        <td>{verifiedworker.gender}</td>
                        <td>
                         <button onClick={()=>{
                            if(window.confirm('Are you sure to delete this worker'))
                            this.WorkerDelete(verifiedworker._id)}} class="ml-2">Delete</button>            
                        </td>
                      </tr>
                        )
                      })
                     }
              </tbody>
           </Table>


            </div>
            </div>
        )
    }
}