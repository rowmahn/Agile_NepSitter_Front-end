import React, { Component , state} from 'react'
import  axios from 'axios'
import { Link } from 'react-router-dom'

export default class Workers extends Component {
    state={
        workers:[]
    }
    componentDidMount(){
        axios.get("http://localhost:90/showworkers/all")
        .then((response)=>{
            console.log(response)
            this.setState({
                workers : response.data.data,
                // userID : response.data.data.data.userID
            })
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }

    render() {
        return (
            <div>
                <div class="row">
                    {
                        this.state.workers.map((worker)=>{
                            return(
                <div class="card" style={{width: '18rem'}}>
                    <img class="card-img-top"
                     src="https://static.wikia.nocookie.net/disney/images/f/f2/Miley_Cyrus.jpg/revision/latest/top-crop/width/360/height/450?cb=20200805232558"
                    //  {"http://localhost:90/Images/"+ product.productpic} alt={product.productpic} 
                     alt="Card image cap"/>
                    <div class="card-body">
                        <p class="card-title">{worker.fname} {worker.lname}</p>
                        <div className="price">
                            
                            <p>{worker.phone} </p>
                        <p class="card-text">{Worker.address}</p>
                           <p>{worker.city}</p> 
                        
                        </div>
                        <p class="card-text">{worker.jobcategory}</p>
                    </div>
                   
                      <Link to={'/workerdetails/'+worker._id} className="btn btn-primary">Product Details</Link>
                    
                      <Link to={'/hireworker/'+worker._id} className="cart__link">
                    <button className="btn btn-danger" href='/hireworker'>Hire</button>
                    </Link>
                       
                    </div>
                    )

                })
            }
                    </div>
            </div>
        )
    }
}

