import React, { Component } from 'react'
import { Link } from "react-router-dom"
import '../../../style/workinghistory.css'
import axios from "axios"
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import EventBusyIcon from '@material-ui/icons/EventBusy';
const {REACT_APP_URL}=process.env
export default class Workerworkhistory extends Component {
    state={
        works:[],
        hid:this.props.match.params.hid,
        config:{
          headers:{'Authorization':'Bearer ' + localStorage.getItem('token')}
      }
      }
      componentDidMount(){
        axios.get(`${REACT_APP_URL}/getworkinghistory/`+this.state.hid)
        .then(responce=>{
          console.log(responce)
          this.setState({
            works:responce.data.data
          })
        })
        .catch(err=>{
          console.log(err)
        })
      }
    render() {
        return (
            <div>
            <div class="center">
            <h2>Working History</h2>
                            <div class="list" >
              <ul>
                <li>Date</li>
                <li>Hour Tracked</li>
                <li>Rate per hour</li>
                <li>Earning</li>
                <li>Paid</li>
              </ul>
              {
                this.state.works.map((work)=>{
                    return(
              <ul>
                <li data-label="date">{work.CreatedAt}</li>
                <li data-label="shift">{work.Workinghours}</li>
                <li data-label="country">100</li>
                <li data-label="number">{work.Workinghours*100}</li>
                {work.paid===false?
                    <li><EventBusyIcon/></li>:
                    <li><EventAvailableIcon/></li>
                }
              
               
              </ul>
                    )})
                    }
            </div>
            
                            </div>
            </div>
        )
    }
}
