import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const NavBar = () => {
    return (
        <div className="App">
            <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="danger" variant="dark">
                <ReactBootStrap.Navbar.Brand href="#"> &nbsp;&nbsp;&nbsp;&nbsp; SEARCHMYPINCODE.IN</ReactBootStrap.Navbar.Brand>
                <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                    <ReactBootStrap.Nav className="mr-auto">
                        <Link to="/">
                            <ReactBootStrap.Nav.Link href="/">Home</ReactBootStrap.Nav.Link>
                        </Link>
                        <Link to="/">
                            <ReactBootStrap.Nav.Link href="#pricing">About</ReactBootStrap.Nav.Link>
                        </Link>
                        <ReactBootStrap.NavDropdown title="Pincode" id="collasible-nav-dropdown">
                            <ReactBootStrap.NavDropdown.Item href="#a">Search By State</ReactBootStrap.NavDropdown.Item>
                            <ReactBootStrap.NavDropdown.Divider />
                            <ReactBootStrap.NavDropdown.Item href="#">Search By District</ReactBootStrap.NavDropdown.Item>
                        </ReactBootStrap.NavDropdown>
                    </ReactBootStrap.Nav>
                    <ReactBootStrap.Nav>
                        <Link to="/about">
                            <ReactBootStrap.Nav.Link href="/about">About</ReactBootStrap.Nav.Link>
                        </Link>
                    </ReactBootStrap.Nav>
                </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Navbar>

        </div>
    )
}

export default NavBar;