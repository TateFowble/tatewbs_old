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
                            <Card.Title className="color-success">$1000 plus $100/month</Card.Title>
                            <ul className="list-group"> 
                                <li className="list-group-item">1 to 2 page website</li>
                                <li className="list-group-item">United States Hosting</li>
                                <li className="list-group-item">Free TateWBS.com subdomain</li>
                                <li className="list-group-item">DDOS Protected</li>
                                <li className="list-group-item">Ecrypted Data</li>
                                <li className="list-group-item">Website isn't private on github</li>
                                <li className="list-group-item">Will have TateWBS logo at bottom of page</li>
                            </ul>
                            <hr />
                           <button className="btn btn-lg btn-block btn-outline-primary" type="button">More Info</button> 
                        </Card.Body>
                    </Card>

                    <Card className="mb-5">
                        <Card.Header className="fs-3">Premium</Card.Header>
                        <Card.Body>
                            <Card.Title className="color-success">$1000 plus $100/month</Card.Title>
                            <ul className="list-group">
                                <li className="list-group-item">1 to 2 page website</li>
                                <li className="list-group-item">United States Hosting</li>
                                <li className="list-group-item">Free TateWBS.com subdomain</li>
                                <li className="list-group-item">DDOS Protected</li>
                                <li className="list-group-item">Ecrypted Data</li>
                                <li className="list-group-item">Website isn't private on github</li>
                                <li className="list-group-item">Will have TateWBS logo at bottom of page</li>
                            </ul>
                            <hr />
                            <button className="btn btn-lg btn-block btn-outline-primary" type="button">More Info</button>
                        </Card.Body>
                    </Card>

                    <Card className="mb-5">
                        <Card.Header className="fs-3">???</Card.Header>
                        <Card.Body>
                            <Card.Title className="color-success">$1000 plus $100/month</Card.Title>
                            <ul className="list-group">
                                <li className="list-group-item">1 to 2 page website</li>
                                <li className="list-group-item">United States Hosting</li>
                                <li className="list-group-item">Free TateWBS.com subdomain</li>
                                <li className="list-group-item">DDOS Protected</li>
                                <li className="list-group-item">Ecrypted Data</li>
                                <li className="list-group-item">Website isn't private on github</li>
                                <li className="list-group-item">Will have TateWBS logo at bottom of page</li>
                            </ul>
                            <hr />
                            <button className="btn btn-lg btn-block btn-outline-primary" type="button">Apply for a spot</button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className="vertical-spacing"></div>
        </div>
    )
}

export default ServicesPage;