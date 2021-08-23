import { React } from 'react';

import ContactForm from '../../../components/ContactForm/ContactForm';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const WebDevelopmentPage = () => {
    return (
        <div>
            <div className="vertical-spacing" />
            <Container>
                <div className="text-center">
                    <h1>What all is included?</h1>
                    <p className="m-0 font-italic">
                        TateWBS works on many types of websites!
                    </p>
                    <hr />
                    <div className="d-flex justify-content-even flex-column flex-md-row">
                        <Card className="m-5 p-2">
                            <Card.Header className="fs-3 text-center">Web Development</Card.Header>
                            <Card.Body>
                                <Card.Title className="color-success text-center">
                                    Starting at $1,000
                                </Card.Title>
                                <p className="fs-6">$100 / month</p>
                                <div className="text-center">
                                    <ListGroup>
                                        <ListGroup.Item>1 to 3 pages</ListGroup.Item>
                                        <ListGroup.Item></ListGroup.Item>
                                        <ListGroup.Item></ListGroup.Item>
                                        <ListGroup.Item></ListGroup.Item>
                                        <ListGroup.Item>Will help you grow as business</ListGroup.Item>
                                    </ListGroup>
                                </div>
                            </Card.Body>
                        </Card>

                        <Card className="m-5 p-2">
                            <Card.Header className="fs-3 text-center">Website Resdesign</Card.Header>
                            <Card.Body>
                                <Card.Title className="color-success text-center">Looking for a price? Each job is different
                                </Card.Title>
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

                                <ListGroup.Item>
                                    Customizable
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    Mobile Friendly
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    Works with existing Databases
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    Will make a database for you if needed
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    Frontend Development
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    Backend Development
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    DDOS Protected
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    Will stay up to date on realtime progress
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    TateWBS will build your website from scratch
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    Have your own domain
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    SEO will be done for you
                                </ListGroup.Item>

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