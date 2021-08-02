import React, { Component} from 'react'
import axios from 'axios';
import {Table} from 'reactstrap'

export default class VerifyEmployer extends Component {
    state = {
        employers:[],
        config:{
            headers:{'Authorization':'Bearer ' + localStorage.getItem('token')}
        },
        currentemployer:{}
      
        
    }

    componentDidMount(){

        axios.get("http://localhost:90/unapproved/employer" ,this.state.config)
        .then((response)=>{
            
            console.log(response)
            this.setState({
                employers : response.data.data
            })
        })
        .catch((err)=>{
            console.log(err.response)
        })
    
    }

    ApprovalforEmployer=(employerId)=>{
        console.log(employerId);
        // event.preventDefault();
        axios.put(`http://localhost:90/approve/employer/${employerId}`,this.state.config)
        .then((response)=>{
            console.log(response)
            window.location.href='/verifyemployer'
            alert(' Your Employer Form has been approved');
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    DeleteEmployer=(employerId)=>{
        axios.delete(`http://localhost:90/denyemployer/${employerId}`,this.state.config)
        .then((response)=>{
            window.location.href= "/verifyemployer"
            this.forceUpdate();
                alert('Employer has been Deleted ');
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }

 
    render() {
       
        return (
            <div>
            <div>
                    <h2>Employer Registration Form Details</h2>
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
<th>Approved</th>
<th>Deny</th>

</tr>
</thead>
<tbody>
  {
this.state.employers.map((employer, i)=>{
 return (
    
                     <tr>
                        <th scope="row">{i+1}</th>
                        <td>{ employer.Fullname }</td>
                        <td>{employer.Contact}</td>
                        <td>{employer.Email}</td>
                        <td>{employer.Gender}</td>
                        <td>{employer.Age}</td>
                        <td>{employer.Location}</td>
                        <td>{employer.Citizenship}</td>
                        <td><button onClick={()=>this.ApprovalforEmployer(employer._id)}>Approved</button></td>
                        <td>
                         <button onClick={()=>{
                            if(window.confirm('Are you want to remove this Employer'))
                            this.DeleteEmployer(employer._id)}} class="ml-2">Deny</button>            
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