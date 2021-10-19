import React from 'react';
import './Navigation.scss';

import { Link } from 'react-router-dom';

// import logo from '../../assets/images/logo21.png';

// react-bootstrap imports
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function Navigation() {
    return (
        <Navbar collapseOnSelect expand="md" fixed="top" variant="dark">
            <Navbar.Brand as={Link} to="/" className="p-2 text-white">TateWBS</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/" className="text-white">Home</Nav.Link>
                    <Nav.Link as={Link} to="/services" className="text-white">Services</Nav.Link>
                    <Nav.Link as={Link} to="/projects" className="text-white" disabled>Projects</Nav.Link>
                    <Nav.Link href="http://discord.tatewbs.com" target="_blank" rel="noreferrer" className="text-white">Discord</Nav.Link>
                    <NavDropdown title="Extras" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="http://youtube.tatewbs.com" target="_blank">YouTube</NavDropdown.Item>
                        <NavDropdown.Item href="http://instagram.tatewbs.com" target="_blank">Instagram</NavDropdown.Item>
                        <NavDropdown.Item href="http://twitch.tatewbs.com" target="_blank">Twitch</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="https://www.starworksmc.us" target="_blank">StarWorksMC</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;