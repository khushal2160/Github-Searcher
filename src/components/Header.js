import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default class Header extends Component{

    onLogin(){
        this.props.onLogin();
    }

    onLogout(){
        this.props.onLogout();
    }

    render(){
        let token = this.props.accessToken;
        if(token)
        {
            token = <Nav.Link href="#" onClick={this.onLogout.bind(this)}>Logout</Nav.Link>;
        }
        else
        {
            token = <Nav.Link href="#" onClick={this.onLogin.bind(this)}>Login</Nav.Link>;
        }
        return(
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#">Github Searcher</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    {token}
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
        );
    }
}