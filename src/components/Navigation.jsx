import React from 'react';
import '../styles/main.scss';

import { Link } from 'react-router-dom';

import logo from '../assets/images/logo.png';

// react-bootstrap imports
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand='md' sticky='top' variant='dark' style={{ padding: '1.5em' }}>
            <Container fluid={false}>
                <Navbar.Brand as={Link} to='/' className='p-2 text-white'>
                    <Image src={logo} alt='logo' width='110vw' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='me-auto'>
                        <Nav.Link as={Link} to='/' className='text-white'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/services' className='text-white'>Services</Nav.Link>
                        <Nav.Link as={Link} to='/projects' className='text-white'>Projects</Nav.Link>
                        <Nav.Link href='http://discord.tatewbs.com' target='_blank' rel='noreferrer' className='text-white'>Discord</Nav.Link>
                        {/* <NavDropdown title='Extras' id='navbarScrollingDropdown'>
                            <NavDropdown.Item href='http://youtube.tatewbs.com' target='_blank'>YouTube</NavDropdown.Item>
                            <NavDropdown.Item href='http://instagram.tatewbs.com' target='_blank'>Instagram</NavDropdown.Item>
                            <NavDropdown.Item href='http://twitch.tatewbs.com' target='_blank'>Twitch</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    {/* <Nav className='float-end'>
                        <Nav.Link>Login</Nav.Link>
                    </Nav> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;