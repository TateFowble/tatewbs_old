import { React, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.scss';


import { Parallax } from 'react-parallax';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

import menu from '../assets/images/menu.jpg';
import webdev from '../assets/images/webdev.jpg';
// import tv from '../../assets/images/services/tv.jpg';



// Variables
const menuHostingColorList = {
    backgroundColor: '#f6e4e4'
}
const webDev = {
    backgroundColor: '#c9c893'
}

const Services = () => {

    useEffect(() => {
        document.title = `TateWBS | Services`;
    }, []);
    return (
        <div id='services'>
            <Parallax
                className='parallax-sizer d-flex align-items-center justify-content-start'
                blur={{ min: -10, max: 15 }}
                bgImage={menu}
                bgImageAlt=''
                strength={350}>
                <Container>
                    <Row>
                        <Col>
                            <Card style={{ backgroundColor: '#f3d3d2', opacity: '0.8' }} className='m-5 p-2'>
                                <Card.Header className='fs-3 text-center'>Online Restraunt Menu</Card.Header>
                                <Card.Body>
                                    {/* <Card.Title className='color-success text-center'>$80/month Hosting</Card.Title> */}
                                    <div className='d-flex justify-content-center'>
                                        <Link to='/services/menu-hosting' className='text-decoration-none'><Button style={{ color: '#66ccff' }} className='btn mt-3 mb-3' size='lg' variant='outline-info'>More Info</Button></Link>
                                    </div>
                                    <ListGroup className='text-center'>
                                        <ListGroup.Item style={menuHostingColorList}>United States Hosting</ListGroup.Item>
                                        <ListGroup.Item style={menuHostingColorList}>All our services are DDOS Protected</ListGroup.Item>
                                        <ListGroup.Item style={menuHostingColorList}>Ecrypted Traffic for your users</ListGroup.Item>
                                        <ListGroup.Item style={menuHostingColorList}>Your project will show on our <Link to='/clients' style={{ color: '#66ccff' }}>clients page</Link></ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Parallax>

            <Parallax
                className='parallax-sizer d-flex align-items-center justify-content-center'
                blur={{ min: -10, max: 15 }}
                bgImage={webdev}
                bgImageAlt=''
                strength={350}
            >
                <Container>
                    <Row>
                        <Col>
                            <Card style={{ backgroundColor: '#c2bd62', opacity: '0.8' }} className='m-5 p-2'>
                                <Card.Header className='fs-3 text-center'>Web Development</Card.Header>
                                <Card.Body>
                                    <Card.Title className='color-success text-center'>Looking for a price? Each job is different
                                    </Card.Title>
                                    <div className='d-flex justify-content-center'>
                                        <Link to='/services/web-development' className='text-decoration-none'><Button style={{ color: '#66ccff' }} className='btn btn-lg btn-block mt-3 mb-3' variant='outline-info'>More Info</Button></Link>
                                    </div>
                                    <ListGroup className='text-center'>
                                        <ListGroup.Item style={webDev}>United States Hosting</ListGroup.Item>
                                        <ListGroup.Item style={webDev}>All our services are DDOS Protected</ListGroup.Item>
                                        <ListGroup.Item style={webDev}>Ecrypted Traffic for your users</ListGroup.Item>
                                        <ListGroup.Item style={webDev}>Custom API &amp; dedicated database (If needed)</ListGroup.Item>
                                        <ListGroup.Item style={webDev}>Your project will show on our  <Link style={{ color: '#66ccff' }} to='/clients'>clients page</Link></ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Parallax>
        </div>
    )
}

export default Services;