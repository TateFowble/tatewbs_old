import { React } from 'react';

import ContactForm from '../../../components/ContactForm/ContactForm';

import menuimage from '../../../assets/images/services/menu.jpg';
import menuimage1 from '../../../assets/images/services/menu-hosting/menuimage.png';
import menuimage2 from '../../../assets/images/services/menu-hosting/menuimage2.png';


import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';






const MenuPage = () => {
    return (
        <div>
            <div className="vertical-spacing" />
            <Container>
                <div className="text-center">
                    <h2>What is <u>Menu Hosting</u>?</h2>
                    <hr />
                    <div className="mb-5">
                        <p>
                            <em>
                                Menu Hosting allows you to turn your phyiscal menu into an virtual menu for customers to use
                            </em>
                        </p>
                    </div>

                    <p className="fs-3 font-weight-bold">Turn this</p>
                    <img src={menuimage} alt="Loading" className="img-fluid mb-5" />

                    <p className="fs-3 font-weight-bold">Into this</p>
                    <img src={menuimage1} alt="Loading" className="img-fluid" />
                    <img src={menuimage2} alt="Loading" className="img-fluid mb-5" />

                    <p class="fs-2">You can check out a <a href="https://menu.tatewbs.com" target="_blank" rel="noreferer">Live Demo Here</a></p>

                    <hr />
                    <div className="mt-5 mb-5">
                        <p className="fs-2"><strong>How does putting your menu online benefit your business?</strong></p>
                        <div>
                            <p>Sometimes trying new things can be a struggle, thats why we will do it for you!</p>
                            <p>By going with our online menu's not only do you get style, but also better functionality as a restaurant</p>

                            <p className="mt-4">Here are some key points:</p>
                            <ListGroup className="text-center">
                                <ListGroup.Item>Ease of access &amp; use for your customers</ListGroup.Item>
                                <ListGroup.Item>Potential growth for your restaurant</ListGroup.Item>
                                <ListGroup.Item>Better look for your online presence</ListGroup.Item>
                                <ListGroup.Item>It draws more attention to your business</ListGroup.Item>
                                <ListGroup.Item>You can have seperate sections for different reasons, aka sorted allergies, food types, sections...</ListGroup.Item>
                                <ListGroup.Item>Images for every menu item for customer convience</ListGroup.Item>
                            </ListGroup>
                        </div>
                        </div>
                        <hr />
                        <ContactForm page="How do I get an online menu?!" />
                    </div>
            </Container>
                <div className="vertical-spacing" />
        </div>
            )
}
            {/* input and image1

also describe
How its benefits your business, adding convience and allowing it to be put on the internet for more potential customers to see
It draws more attention to your business
You can have seperate sections for different reasons, aka sorted allergies, food types, sections...
adds to your business's internet look
Images for every menu item for Customers convience */}

            export default MenuPage;