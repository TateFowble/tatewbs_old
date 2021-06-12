import { React } from 'react';


import Card from 'react-bootstrap/Card';



const ServicesPage = () => {
    return (
        <div>
            <div className="vertical-spacing"></div>
            <div className="mt-5 fluid-container container-xxl">
                <div className="container-lg d-flex justify-content-around text-center">
                    <Card>
                        <Card.Header bg="light">Website Redesign</Card.Header>
                        <Card.Body>
                            <Card.Text>We understand</Card.Text>
                           <button className="btn btn-lg btn-block btn-outline-primary" type="button">Get a Quote Today</button> 
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className="vertical-spacing"></div>
        </div>
    )
}

export default ServicesPage;