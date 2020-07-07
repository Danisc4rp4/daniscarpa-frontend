import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
import { history } from '../../redux/helpers/history';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Register from '../Register/Register';
import { alertActions } from '../../redux/actions/alert.actions';

import './BootstrapNavbar.css';

const mapStateToProps = state => {
    const { alert } = state;
    return { alert };
};

const mapDispatchToProps = {
    clearAlerts: alertActions.clear
}

class BootstrapNavbar extends React.Component{
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        });
    }

    render(){
        const { alert } = this.props;
        return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                        {/* {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        } */}
                        <Router history={history}>
                            <Navbar bg="light" variant="light" expand="lg" sticky="top">
                                <Navbar.Brand href="#home">Daniscarpa</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <Nav.Link href="/login">Login</Nav.Link>
                                    <Nav.Link href="/register">Register</Nav.Link>
                                    <Nav.Link href="https://github.com/Danisc4rp4">GitHub</Nav.Link>
                                    {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown> */}
                                    </Nav>
                                    <Form id="Search" inline>
                                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                    <Button id="Search">Search</Button>
                                    </Form>
                                </Navbar.Collapse>
                            </Navbar>
                            <br />
                            <Switch>
                                <Route exact path="/">
                                    <Home />
                                </Route>
                                <Route exact path="/login">
                                    <Login />
                                </Route>
                                <Route exact path="/register">
                                    <Register />
                                </Route>
                                <Redirect from="*" to="/" />
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        )  
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BootstrapNavbar);