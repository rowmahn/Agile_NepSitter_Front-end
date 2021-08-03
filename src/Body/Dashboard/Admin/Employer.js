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

        axios.get("http://localhost:90/viewemployers/employer" ,this.state.config)
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

    DeleteEmployer=(empid)=>{
        axios.delete(`http://localhost:90/viewemployers/delete/${empid}`,this.state.config)
        .then((response)=>{
            window.location.href= "/viewemployers"
            this.forceUpdate();
                alert('Employer deleted!!!');
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
                        <td>
                         <button onClick={()=>{
                            if(window.confirm('Are you want to delete this Employer'))
                            this.DeleteEmployer(employer._id)}} class="ml-2">Delete User</button>            
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