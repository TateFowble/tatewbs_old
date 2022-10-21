import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.scss';


import navicon from '../assets/icons/navigation.svg';
import logo from '../assets/images/logo.png';

// react-bootstrap imports
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Navigation = () => {
    const [show, setShow] = useState(false);
    return (
        <Nav
            id='nav'
            expand={false}>
            <div
                onClick={() => setShow(!show)}>
                <Image
                    src={navicon}
                />
            </div>
            <Navbar.Offcanvas
                id='navcanvas'
                show={show}
                placement='end'
            >
                <Offcanvas.Header>
                    <Offcanvas.Title>
                        <Image src={logo} width='100%' />
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav
                        className='d-flex flex-column align-items-start p-3'
                        onClick={() => setShow(!show)}
                    >
                        <Nav.Link as={Link} to='/'>Back to home</Nav.Link>
                        <Nav.Link as={Link} to='/clients'>Meet our Clients</Nav.Link>
                        <Nav.Link as={Link} to='/services'>{!true ? 'Review the Services' : 'What we do'}</Nav.Link>
                        {/* <Nav.Link as={Link} to='/'>{true ? 'How we do it' : 'What we do'}</Nav.Link> */}
                        <Nav.Link href='http://discord.tatewbs.com' target='_blank' rel='noreferrer'>Join the discord!</Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Nav>
    )
}

export default Navigation;


/*
<Navbar id='nav' collapseOnSelect expand='md' sticky='top' style={{ padding: '1.5em' }}>
            <Image src={logo} alt='logo' width='170em' />
            <Container fluid={false}>
                <Navbar.Brand as={Link} to='/' className='p-2 text-white'>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='me-auto'>
                        <Nav.Link as={Link} to='/' className='text-white'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/services' className='text-white'>Services</Nav.Link>
                        <Nav.Link as={Link} to='/customers' className='text-white'>Customers</Nav.Link>
                        <Nav.Link href='http://discord.tatewbs.com' target='_blank' rel='noreferrer' className='text-white'>Discord</Nav.Link>
                        <NavDropdown title='Extras' id='navbarScrollingDropdown'>
                            <NavDropdown.Item href='http://youtube.tatewbs.com' target='_blank'>YouTube</NavDropdown.Item>
                            <NavDropdown.Item href='http://instagram.tatewbs.com' target='_blank'>Instagram</NavDropdown.Item>
                            <NavDropdown.Item href='http://twitch.tatewbs.com' target='_blank'>Twitch</NavDropdown.Item>
                        </NavDropdown>
                    </Nav >
                    <Nav className='float-end'>
                        <Nav.Link>Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse >
            </Container >
        </Navbar >

*/