import { React } from 'react';


import Card from 'react-bootstrap/Card';



const ServicesPage = () => {
    return (
        <div>
            <div className="vertical-spacing"></div>
            <div className="mt-5 fluid-container container-xxl">
                <div className="d-flex justify-content-around flex-column flex-md-row text-center">
                    <Card className="mb-5">
                        <Card.Header className="fs-3">Budget</Card.Header>
                        <Card.Body>
                            <Card.Title className="color-success">$500 to $9,999 plus $100/month</Card.Title>
                            <button className="btn btn-lg btn-block btn-outline-primary mt-3 mb-3" type="button">More Info</button>
                            <ul className="list-group"> 
                                <li className="list-group-item">1 to 2 page website</li>
                                <li className="list-group-item">United States Hosting</li>
                                <li className="list-group-item">Free TateWBS.com subdomain</li>
                                <li className="list-group-item">DDOS Protected</li>
                                <li className="list-group-item">Ecrypted Data</li>
                                <li className="list-group-item">Website isn't private on github</li>
                                <li className="list-group-item">1 Free TateWBS endorsement</li>
                            </ul>
                        </Card.Body>
                    </Card>

                    <Card className="mb-5">
                        <Card.Header className="fs-3">Premium</Card.Header>
                        <Card.Body>
                            <Card.Title className="color-success">$10,000 plus $500/month</Card.Title>
                            <button className="btn btn-lg btn-block btn-outline-primary mt-3 mb-3" type="button">More Info</button>
                            <ul className="list-group">
                                <li className="list-group-item">1 to 10 page website</li>
                                <li className="list-group-item">United States Hosting</li>
                                <li className="list-group-item">1 Free TateWBS.com subdomain</li>
                                <li className="list-group-item">1 Free available domain</li>
                                <li className="list-group-item">DDOS Protected</li>
                                <li className="list-group-item">Ecrypted Data</li>
                                <li className="list-group-item">Website is private on github</li>
                                <li className="list-group-item">1 Free TateWBS endorsement</li>
                            </ul>
                        </Card.Body>
                    </Card>

                    <Card className="mb-5">
                        <Card.Header className="fs-3">TateWBS</Card.Header>
                        <Card.Body>
                            <Card.Title className="color-success">$20,000 plus $1,000/month</Card.Title>
                            <button className="btn btn-lg btn-block btn-outline-primary mt-3 mb-3" type="button">Apply for a spot</button>
                            <ul className="list-group">
                                <li className="list-group-item">10+ page website</li>
                                <li className="list-group-item">United States Hosting</li>
                                <li className="list-group-item">Free TateWBS.com subdomain</li>
                                <li className="list-group-item">Up to 3 available domains</li>
                                <li className="list-group-item">DDOS Protected</li>
                                <li className="list-group-item">Ecrypted Data</li>
                                <li className="list-group-item">Website is private on github</li>
                                <li className="list-group-item">1 Free TateWBS endorsement</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className="vertical-spacing"></div>
        </div>
    )
}

export default ServicesPage;