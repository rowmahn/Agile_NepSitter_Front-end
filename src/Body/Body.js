import { Component } from "react";
import { Container,Row,Col } from "react-bootstrap";
import Home from './Home'
//import Register from "./Register";
//import Login from "./Login";
import { Route } from "react-router-dom";
import Applyforjob from "./Applyforjob";


class Body extends Component{
    render(){
        return(
            <Container fluid>
                <Row>
                    <Col>
                    
                    
                    <Route path="/" exact component={Home}/>
                    <Route path="/applyforjob" exact component={Applyforjob}/>
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default Body;