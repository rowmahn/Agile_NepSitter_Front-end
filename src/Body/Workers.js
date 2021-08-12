import React, { Component , state} from 'react'
import  axios from 'axios'
import { Link } from 'react-router-dom'
import { FormGroup } from 'react-bootstrap'
import '../style/suggestion.css'
export default class Workers extends Component {
    state={
        workers:[],
        search:'',
        suggestions:[]
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
    onChangeHandler=(search)=>{
        // let matches=[]
        // let currentworkers=this.state.workers
        
        // if(search.lenght>0){
        //     matches=currentworkers.filter(currentworker=>{
        //         const regex= new RegExp(`${search}`,"gi")
        //         return currentworkers.fname.matches(regex)
        //     })
            
        // }
        // console.log("matches",matches)
        // this.setState({
        //     suggestion:matches
        // })
        // console.log(search)
        this.setState({
            search:search
        })
        console.log(this.state.search)
        axios.get('http://localhost:90/search/'+search)
            .then(result=>{
             this.setState({
                 suggestions:result.data.data
             })
             console.log(this.state.suggestions)
            })
            .catch(err=>{
              console.log(err)
               
            })

    }
    fetchworker=(query,e)=>{
        // e.preventDefault();
        axios.get('http://localhost:90/search/'+query)
        .then(result=>{
         console.log(result)
        })
        .catch(err=>{
          console.log(err)
           
        })
      }

    render() {
        return (
            <div>
                <div className="row">
                <div className="container">
                <form  className="inline searchform ">
                    <FormGroup>
                    <input className="autocomplete-input col-6 " type="text" 
                    name="Search"
                      placeholder="Search"
                      aria-label="Search "
                      value={this.state.search}
                      onChange=
                      {(event)=>{this.onChangeHandler(event.target.value)}}
                    />
                    
                    </FormGroup>
                    </form>
                    {this.state.suggestions && this.state.suggestions.map((suggestion,i)=>
                        <div className="container card">
                        <div className="row card-body" style={{cursor: "pointer"}}>
                        <div className="col justify-content-md-center ">{suggestion.fname}</div>
                        <div className="col justify-content-md-center ">{suggestion.lname}</div>
                        <div className="col justify-content-md-center ">{suggestion.email}</div>
                        <div className="col justify-content-md-center ">{suggestion.phone}</div>
                        <div className="col justify-content-md-center ">{suggestion.address}</div>
                        </div>

                        </div>
                        
                        )}
                </div>
                </div>

                <div className="row">
                    {
                        this.state.workers.map((worker)=>{
                            return(
                <div className="card" style={{width: '18rem'}}>
                    <img className="card-img-top"
                     src="https://static.wikia.nocookie.net/disney/images/f/f2/Miley_Cyrus.jpg/revision/latest/top-crop/width/360/height/450?cb=20200805232558"
                    //  {"http://localhost:90/Images/"+ product.productpic} alt={product.productpic} 
                     alt="Card image cap"/>
                    <div className="card-body">
                        <p className="card-title">{worker.fname} {worker.lname}</p>
                        <div className="price">
                            
                            <p>{worker.phone} </p>
                        <p className="card-text">{Worker.address}</p>
                           <p>{worker.city}</p> 
                        
                        </div>
                        <p className="card-text">{worker.jobcategory}</p>
                    </div>
                   
                      <Link to={'/workerdetails/'+worker._id} className="btn btn-primary">Worker Details</Link>
                    
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

