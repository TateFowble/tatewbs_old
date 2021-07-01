import { React } from 'react';


// libraries
import { Parallax } from 'react-parallax';

// react-bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';


// images
import menu from '../../assets/images/services/menu.jpg';
import webdev from '../../assets/images/services/webdev.jpg';
import tv from '../../assets/images/services/tv.jpg';



// Variables
const parallaxHeight = '75vh';

const ServicesPage = () => {
    return (
        <div>
            <h1 className="text-center m-5">Services</h1>
            <div>
                <Parallax
                    className="fluid-container d-flex align-items-center justify-content-start"
                    style={{ minHeight: parallaxHeight }}
                    blur={{ min: -10, max: 15 }}
                    bgImage={menu}
                    bgImageAlt="..."
                    strength={350}
                >
                    <Container>
                        <Row>
                            <Col>
                                <Card className="m-5 p-2">
                                    <Card.Header className="fs-3 text-center">Online Restraunt Menu</Card.Header>
                                    <Card.Body>
                                        <Card.Title className="color-success text-center">$80/month Hosting</Card.Title>
                                        <Button className="btn btn-lg btn-block btn-outline-primary mt-3 mb-3" variant="button">More Info</Button>
                                        <ListGroup>
                                            <ListGroup.Item>Free TateWBS.com subdomain &amp; domain</ListGroup.Item>
                                            <ListGroup.Item>1 online menu</ListGroup.Item>
                                            <ListGroup.Item>United States Hosting</ListGroup.Item>
                                            <ListGroup.Item>DDOS Protected</ListGroup.Item>
                                            <ListGroup.Item>Ecrypted Data</ListGroup.Item>
                                            <ListGroup.Item>1 Free TateWBS endorsement</ListGroup.Item>
                                            {/* <ListGroup.Item></ListGroup.Item> */}
                                        </ListGroup>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Parallax>
            </div>

            <div class="vertical-spacing" />

            <div>
                <Parallax
                    className="fluid-container d-flex align-items-center justify-content-center"
                    style={{ minHeight: parallaxHeight }}
                    blur={{ min: -10, max: 15 }}
                    bgImage={webdev}
                    bgImageAlt="..."
                    strength={350}
                >
                    <Container>
                        <Row>
                            <Col>
                                <Card className="m-5 p-2">
                                    <Card.Header className="fs-3 text-center">Web Development</Card.Header>
                                    <Card.Body>
                                        <Card.Title className="color-success text-center">Looking for a price? Each job is different
                                        </Card.Title>
                                        <Button className="btn btn-lg btn-block btn-outline-primary mt-3 mb-3" variant="button">More Info</Button>
                                        <ListGroup>
                                            <ListGroup.Item>United States Hosting</ListGroup.Item>
                                            <ListGroup.Item>DDOS Protected</ListGroup.Item>
                                            <ListGroup.Item>Encrypted Data</ListGroup.Item>
                                            {/* <ListGroup.Item></ListGroup.Item> */}
                                        </ListGroup>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Parallax>
            </div>

            <div className="vertical-spacing" />

            <div>
                <Parallax
                    className="fluid-container d-flex align-items-center justify-content-end"
                    style={{ minHeight: parallaxHeight }}
                    blur={{ min: 15, max: -10 }}
                    bgImage={tv}
                    bgImageAlt="..."
                    strength={350}
                >
                    <Container>
                        <Row>
                            <Col>
                                <Card className="m-5 p-2">
                                    <Card.Header className="fs-3 text-center">Local Content Hosting</Card.Header>
                                    <Card.Body>
                                        <div className="mt-2">
                                            <p>This allows your business to run local ads and/or local content</p>
                                        </div>
                                        <Card.Title className="color-success text-center">$35/month</Card.Title>
                                        <Button className="btn btn-lg btn-block btn-outline-primary mt-3 mb-3" variant="button">More Info</Button>
                                        <ListGroup>
                                            <ListGroup.Item>1 Computer for 1 TV/Monitor</ListGroup.Item>
                                            {/* <ListGroup.Item></ListGroup.Item> */}
                                        </ListGroup>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Parallax>
            </div>

            <div className="vertical-spacing"></div>

        </div>
    )
}

export default ServicesPage;

/*
Web building
Be on a team
No looking for a website



Individual Businesses
Larger Companies
*/