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
import Timer from "./Dashboard/Worker/Timer";
import Schedule from "./Dashboard/Worker/Schedule";
import Workinghistory from "./Dashboard/Worker/Workinghistory";
import Payment from "./Dashboard/Employer/Payment"

import AdminDashboard from "./Dashboard/Admin/AdminDashboard";
import VerifyEmployer from "./Dashboard/Admin/VerifyEmployer";
import VerifyWorker from "./Dashboard/Admin/VerifyWorker";
import EmployerProfile from "./Dashboard/Employer/Employerprofile";
import WorkerProfile from "./Dashboard/Worker/Workerprofile";
import Employerveiw from "./Dashboard/Employer/Employerview";
import khalti from "../khalti/khalti";
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
                    <Route path="/timer/:hid" exact component={Timer}/>
                    <Route path="/schedule" exact component={Schedule}/>
                    <Route path="/workinghistory/:hid" exact component={Workinghistory}/>
                    <Route path="/employerprofile" exact component={EmployerProfile}/>
                    <Route path="/workerprofile" exact component={WorkerProfile}/>
                    <Route path="/admin/admindashboard" exact component={AdminDashboard}/>
                    <Route path="/verifyemployer" exact component={VerifyEmployer}/>
                    <Route path="/verifyworker" exact component={VerifyWorker}/>
                    <Route path="/employerview" exact component={Employerveiw}/>
                    <Route path="/payment" exact component={Payment}/>
                    <Route path="/khalti/:workinghour" exact component={khalti}/>


                    </Col>
                </Row>
            </Container>
        )
    }

}

export default Body;