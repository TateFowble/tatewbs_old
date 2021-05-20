import { React } from 'react';


import Card from 'react-bootstrap/Card';



const ServicesPage = () => {
    return (
        <div>
            <div className="vertical-spacing"></div>
            <div className="mt-5 container-md d-flex justify-content-around">
                <Card>
                    <Card.Header as="h5" className="text-center">Website Making</Card.Header>
                    <Card.Body>
                        <Card.Title className="text-center">$50/hr</Card.Title>
                        <Card.Text>
                            With my 7 years of website experience,
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header as="h5" className="text-center">Online Menu Board</Card.Header>
                    <Card.Body>
                        <Card.Title className="text-center">$50/month</Card.Title>
                        <Card.Text>
                            
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header as="h5" className="text-center">Fixing Computers</Card.Header>
                    <Card.Body>
                        <Card.Title className="text-center">Send An Inquiry</Card.Title>
                        <Card.Text>
                           
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className="vertical-spacing"></div>
        </div>
    )
}

export default ServicesPage;