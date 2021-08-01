import React, { Component} from 'react'
import axios from 'axios';
import {Table} from 'reactstrap'

export default class VerifyWorker extends Component {
    state = {
        workers:[],
        config:{
            headers:{'Authorization':'Bearer ' + localStorage.getItem('token')}
        },
        currentworker:{}
      
        
    }

    componentDidMount(){

        axios.get("http://localhost:90/unapproved" ,this.state.config)
        .then((response)=>{
            
            console.log(response)
            this.setState({
                workers : response.data.data
            })
        })
        .catch((err)=>{
            console.log(err.response)
        })
    
    }

    handleApproval=(workerId)=>{
        console.log(workerId);
        // event.preventDefault();
        axios.put(`http://localhost:90/approveworker/${workerId}`,this.state.config)
        .then((response)=>{
            console.log(response.data)
            window.location.href='/verifyworker'
            alert(' Your worker Form has been approved');
        })
    }

    WorkerDelete=(workerId)=>{
        axios.delete(`http://localhost:90/denyworker/${workerId}`,this.state.config)
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
            <div>
                    <h2>JOB Applied Form Details</h2>
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

            </div>
            </div>
        )
    }
}