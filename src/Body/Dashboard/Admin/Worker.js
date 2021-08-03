import React, { Component} from 'react'
import axios from 'axios';
import {Table} from 'reactstrap'

export default class Worker extends Component {
    state = {
        workers:[],
        config:{
            headers:{'Authorization':'Bearer ' + localStorage.getItem('token')}
        },
        currentworkers:{}
      
        
    }

    componentDidMount(){

        axios.get("http://localhost:90/viewworkers" ,this.state.config)
        .then((response)=>{
            
            console.log(response)
            this.setState({
                worker : response.data.data
            })
        })
        .catch((err)=>{
            console.log(err.response)
        })
    
    }

    DeleteWorker=(empid)=>{
        axios.delete(`http://localhost:90/viewroekrs/delete/${wid}`,this.state.config)
        .then((response)=>{
            window.location.href= "/viewworkers"
            this.forceUpdate();
                alert('Worker deleted!!!');
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }

 
    render() {
       
        return (
            <div>
            <div>
                    <h2>Current Employer List</h2>
<Table striped bordered>
<thead>
<tr>
<th>S.No</th>
<th>Fullname</th>
<th>Contact</th>
<th>Email</th>
<th>Gender</th>
<th>Age</th>
<th>Location</th>
<th>CitizenshipNo</th>
<th>Delete User</th>

</tr>
</thead>
<tbody>
  {
this.state.workers.map((worker, i)=>{
 return (
    
                     <tr>
                        <th scope="row">{i+1}</th>
                        <td>{ worker.Fullname }</td>
                        <td>{worker.Contact}</td>
                        <td>{worker.Email}</td>
                        <td>{worker.Gender}</td>
                        <td>{worker.Age}</td>
                        <td>{worker.Location}</td>
                        <td>{worker.Citizenship}</td>
                        <td>
                         <button onClick={()=>{
                            if(window.confirm('Are you want to delete this Worker'))
                            this.DeleteWorker(worker._id)}} class="ml-2">Delete User</button>            
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