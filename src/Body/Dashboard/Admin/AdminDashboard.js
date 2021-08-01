import React, { Component } from 'react'
import {
    Nav,
    Container,
    Col,
    Row,
    Button,Collapse,
    Navbar,
    NavbarBrand,
    UncontrolledDropdown,
    Jumbotron,
  } from 'reactstrap';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import "../../../style/verifyemployer.css"
import VerifyWorker from './VerifyWorker'
import VerifyEmployer from './VerifyEmployer'


export default class AdminDashboard extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            //  admin:{}
        }
    }

    handleLogout=(event)=>{
      
      localStorage.removeItem('token');
      window.location.href='/'
    }
    


    render() {
        return (
     <div>

     <Navbar color="dark"  expand="md">
        <NavbarBrand href="/verifyworker">ApprovedWorker</NavbarBrand>
        <NavbarBrand href="/verifyemployer">IDVerification</NavbarBrand>
        <Collapse navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
             
            </UncontrolledDropdown>
          </Nav>
                <NavbarBrand href="/adminprofile">Profile</NavbarBrand>
                <Button onClick={this.handleLogout} > LogOut</Button>
        </Collapse>
      </Navbar>

         <Container fluid>
            <Row>
                <Col xs="6"className="welcome">
                <Jumbotron className="welcomeadmin">
                    <div ><h1><b>Welcome <p>To Admin </p>Dashboard</b></h1></div>
                    <hr />
                   
                    </Jumbotron>
                    </Col>

                    <Col xs="3" className="welcome">
                <Jumbotron>
                    <div >To verify Worker</div>
                    <hr />
                    <Button className="clickbutton" href='/verifyworker' >Click Here</Button>
                    </Jumbotron>
                    </Col> 
                    <Col xs="3" className="welcome">
                <Jumbotron>
                    <div >To verify Employer ID </div>
                    <hr />
                    <Button className="clickbutton" href='/verifyemployer' >Click Here</Button>
                    </Jumbotron>
                    </Col>
                <Col xs="10" >
            
                        <Nav >
                        <Router>
                            <Switch>
                               <Route path='/workerverification'>
                               <VerifyWorker/>
                                    
                               </Route>
                               <Route path='/employerverification'>
                                   <VerifyEmployer/>
                               </Route>
                            </Switch>
                        </Router>
                       </Nav>
                
                 </Col>
            
            </Row>
         </Container>
      </div>
           
        )
    }
}

