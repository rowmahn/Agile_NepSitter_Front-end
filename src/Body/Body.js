import { Component } from "react";
import { Container,Row,Col } from "react-bootstrap";
import Home from './Home'
import Register from "./Register";
import { Route } from "react-router-dom";
import Applyforjob from "./Applyforjob";
import Login from "./Login";
import Workerlogin from "./Workerlogin";
import Employerdashboard from "./Dashboard/Employer/Employerdashboard";
import Workerdashboard from "./Dashboard/Worker/Workerdashboard";
import Bookingform from "./Bookingform";
import Workerdetails from "./Workerdetails";
import Workers from "./Workers";
import Updatebookingform from "./Updatebookingform";
import Employer from "./Dashboard/Admin/Employer"
//import Timer from "./Dashboard/Employer/Timer";

import AdminDashboard from "./Dashboard/Admin/AdminDashboard";
import VerifyEmployer from "./Dashboard/Admin/VerifyEmployer";
import VerifyWorker from "./Dashboard/Admin/VerifyWorker";

class Body extends Component{
    render(){
        return(
            <Container fluid>
                <Row>
                    <Col>
                    <Route path="/workers" exact component={Workers}/>
                    <Route path="/workerdetails/:id" exact component={Workerdetails}/>
                    <Route path="/register" exact component={Register}/>
                    <Route path="/login" exact component={Login}/>
                    <Route path="/workerlogin" exact component={Workerlogin}/>
                    <Route path="/hireworker/:wid" exact component={Bookingform}/>
                    <Route path="/updatehireworker/:id" exact component={Updatebookingform}/>
                    <Route path="/" exact component={Home}/>
                    <Route path="/employerdashboard" exact component={Employerdashboard}/>
                    <Route path="/workerdashboard" exact component={Workerdashboard}/>
                    <Route path="/applyforjob" exact component={Applyforjob}/>
                    <Route path="/admin/admindashboard" exact component={AdminDashboard}/>
                    <Route path="/verifyemployer" exact component={VerifyEmployer}/>
                    <Route path="/verifyworker" exact component={VerifyWorker}/>
                    <Route path="/viewemployers" exact component={Employer}/>


                    </Col>
                </Row>
            </Container>
        )
    }

}

export default Body;