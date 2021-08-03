import { React } from 'react';


import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';


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
                    <div>
                        <Card className="m-5 p-2">
                            <Card.Header className="fs-3 text-center">Web Development</Card.Header>
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
                            <ul className="text-left fs-5">
                                <li>
                                    Customizable
                                </li>
                                <li>
                                    Mobile Friendly
                                </li>
                                <li>
                                    Works with existing Databases
                                </li>
                                <li>
                                    Will make a database for you if needed
                                </li>
                                <li>
                                    Frontend Development
                                </li>
                                <li>
                                    Backend Development
                                </li>
                                <li>
                                    DDOS Protected
                                </li>
                                <li>
                                    Will stay up to date on realtime progress
                                </li>
                                <li>
                                    TateWBS will build your website from scratch
                                </li>
                                <li>
                                    Have your own domain
                                </li>
                                <li>
                                    Free SEO
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="vertical-spacing" />

                    <div className="mt-5 mb-5">
                        <h3 className="fs-2 font-weight-bold m-0">Where do I get started?</h3>
                        <p className="font-italic mb-5">
                            {/* Email or fill in the form below! */}
                        </p>
                        <p className="fs-5 font-weight-bold">If you're interested in a custom made website or updating an existing website, email your name, number, a short description and any questions you have of what you are wanting done and we will get back with within 24 hours</p>
                        <p className="fs-3 font-weight-bold">info@tatewbs.com</p>
                    </div>
                </div>
            </Container>
            <div className="vertical-spacing" />
        </div>
    )
}

export default WebDevelopmentPage;