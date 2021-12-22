import { React, useEffect } from 'react';

import anime from 'animejs';

import ContactForm from '../../../components/ContactForm/ContactForm';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';


const WebDevelopmentPage = () => {




    const animationFunc = () => {
        let animation = anime({
            targets: '.card-animation',
            translateY: -15,
            easing: 'spring(1, 100, 10, 0)',
            direction: 'alternate',
            autoplay: true,
            loop: true
        });
        return animation;
    }



    const ls = {
        backgroundColor: '#b2c1cb',
    }
    const ls2 = {
        backgroundColor: '#ccd5dc'
    }
    const ls3 = {
        backgroundColor: '#e5eaed'
    }


    let tatewbsdoes = ["Customizable", " Mobile Friendly", "Works with existing Databases", "Will make a database for you if needed", "Frontend Development", "Backend Development", "DDOS Protected", "Will stay up to date on realtime progress", "TateWBS will build your website from scratch", "Have your own domain", "SEO will be done for you"];
    
    document.title = `TateWBS | Web Development`;
    useEffect(() => {
        animationFunc();
    });
    return (
        <div>
            <div className="vertical-spacing" />
            <Container fluid={false}>
                <div className="text-center">
                    <h1>What all is included?</h1>
                    {/* <p className="m-0 font-italic">
                        TateWBS works on many types of websites!
                    </p> */}
                    <hr />
                    <div className="d-flex justify-content-around flex-column flex-lg-row">
                        <Card className="m-5 shadow" style={ls}>
                            <Card.Body>
                                <Card.Header as="h3">
                                    Starter Package
                                </Card.Header>
                                <hr />
                                <Card.Text>
                                    <ListGroup>
                                        <ListGroup.Item>HTTPS</ListGroup.Item>
                                        <ListGroup.Item>1 Database</ListGroup.Item>
                                        <ListGroup.Item>Hosted on our servers</ListGroup.Item>
                                        <ListGroup.Item>Optional: TateWBS.com subdomain</ListGroup.Item>
                                    </ListGroup>
                                    <p className="fs-5 m-2">
                                        Good for start ups
                                    </p>
                                </Card.Text>
                                <hr />
                                <Card.Text className="fs-4">
                                    $100 / mo
                                </Card.Text>
                                <Card.Text className="fs-5">
                                    <Button variant="success">Choose a pricing plan</Button>
                                    {/* $1,000 / Coding */}
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card className="card-animation m-5 shadow" style={ls2}>
                            <Card.Body>
                                <p style={{ color:'#ff003e'}}><strong>Popular!</strong></p>
                                <Card.Header as="h3">
                                    Medium Package
                                </Card.Header>
                                <hr />
                                <Card.Text>
                                    <ListGroup>
                                        <ListGroup.Item>Up to 2 Databases</ListGroup.Item>
                                        <ListGroup.Item>Hosted on our servers</ListGroup.Item>
                                        <ListGroup.Item>Optional: TateWBS subdomain</ListGroup.Item>
                                    </ListGroup>
                                    <p className="fs-5 m-2">
                                        Good for small businesses
                                    </p>
                                </Card.Text>
                                <hr />
                                <Card.Text className="fs-4">
                                    $250 / mo
                                </Card.Text>
                                <Card.Text className="fs-5">
                                     <Button variant="success">Choose a pricing plan</Button>
                                </Card.Text>
                                {/* $4,000 / Coding  */}
                            </Card.Body>
                        </Card>

                        <Card className="m-5 shadow" style={ls3}>
                            <Card.Body>
                                <Card.Header as="h3">
                                    Large Package
                                </Card.Header>
                                <hr />
                                <Card.Text>
                                    <ListGroup>
                                        <ListGroup.Item>Up to 5 Databases</ListGroup.Item>
                                        <ListGroup.Item>Hosted on our servers</ListGroup.Item>
                                    </ListGroup>
                                    <p className="fs-5 m-2">
                                        Good for growing businesses
                                    </p>
                                </Card.Text>
                                <hr />
                                <Card.Text className="fs-4">
                                    $600 / mo
                                </Card.Text>
                                <Card.Text className="fs-5">
                                     <Button variant="success">Choose a pricing plan</Button>
                                </Card.Text>
                                {/* $10,000 / Coding  */}
                            </Card.Body>
                        </Card>

                    </div>
                    <div className="mb-5 mt-5">
                        <p className="fs-5">We can make a whole new website or redesign an existing one for you</p>
                    </div>
                    <div>
                        <h3 className="mb-2">What TateWBS does</h3>
                        <div className="d-flex justify-content-center">
                            <ListGroup className="text-center">
                                
                                {
                                    tatewbsdoes.map(data => (
                                        <ListGroup.Item>
                                            {data}
                                        </ListGroup.Item>

                                    ))
                                }

                            </ListGroup>
                        </div>
                    </div>

                    <ContactForm page="Where do I get started?" />

                </div>
            </Container>
            <div className="vertical-spacing" />
        </div>
    )
}

export default WebDevelopmentPage;


// If you're interested in a custom made website or updating an existing website, email your name, number, a short description and any questions you have of what you are wanting done and we will get back with within 24 hours