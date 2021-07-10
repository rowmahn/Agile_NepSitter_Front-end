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

class Body extends Component{
    render(){
        return(
            <Container fluid>
                <Row>
                    <Col>


                    <Route path="/register" exact component={Register}/>
                    <Route path="/login" exact component={Login}/>
                    <Route path="/workerlogin" exact component={Workerlogin}/>
                    <Route path="/" exact component={Home}/>
                    <Route path="/employerdashboard" exact component={Employerdashboard}/>
                    <Route path="/workerdashboard" exact component={Workerdashboard}/>
                    <Route path="/applyforjob" exact component={Applyforjob}/>

                    </Col>
                </Row>
            </Container>
        )
    }

}

export default Body;