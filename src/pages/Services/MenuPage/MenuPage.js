import { React } from 'react';
import { Container } from 'react-bootstrap';


import menuimage from '../../../assets/images/services/menu.jpg';
import menuimage1 from '../../../assets/images/services/menu-hosting/menuimage.png';
import menuimage2 from '../../../assets/images/services/menu-hosting/menuimage2.png';


import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';







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
                            <ul className="text-left">
                                <li>Ease of access &amp; use for your customers</li>
                                <li>Potential growth for your restaurant</li>
                                <li>Better look for your online presence</li>
                                <li>It draws more attention to your business</li>
                                <li>You can have seperate sections for different reasons, aka sorted allergies, food types, sections...</li>
                                <li>Images for every menu item for customer convience</li>
                            </ul>

                        </div>
                    </div>
                    <hr />
                    <div className="mt-5 mb-5">
                        <p className="fs-2 font-weight-bold m-0">How do I get an online menu?!</p>
                        <p className="font-italic mb-5">
                            Email
                         {/* Email or fill in the form below! */}
                         </p>
                         <p className="fs-3">info@tatewbs.com</p>
                         {/* <p>or</p>
                        <Form>
                            <Form.Group>
                                <Form.Label>
                                </Form.Label>
                            </Form.Group>
                        </Form> */}
                    </div>

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