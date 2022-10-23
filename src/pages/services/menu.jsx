import React, { useEffect } from 'react';
import '../../styles/main.scss';

import restaurant from '../../assets/images/restaurant.png';
import menuimage from '../../assets/images/onlinemenu.png';

import ContactForm from '../../components/ContactForm';
import ReactRotatingText from 'react-rotating-text';

import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';



const Menu = () => {



    const keyPoints = [
        'Ease of access &amp; use for your customers',
        'Potential growth for your restaurant',
        'Better look for your online presence',
        'It draws more attention to your business',
        'You can have seperate sections for different reasons, aka sorted allergies, food types, categories...',
        'mages for every menu item for customer convience',
        'Updates frequently'
    ]

    useEffect(() => {
        document.title = `TateWBS | Online Menu Hosting`;
    }, [])
    return (
        <div id='menu'>
            <header>
                <Container>
                    <div className='d-flex justify-content-end align-items-center'>
                        <h1>The Web Menu for businesses</h1>
                    </div>
                </Container>
            </header>
            <main>
                <Container>
                    <ListGroup className='text-center'>
                        {keyPoints.map((item) => <ListGroup.Item>{item}</ListGroup.Item>)}
                    </ListGroup>
                </Container>
            </main>
        </div>
    )
}
/* input and image1

also describe
How its benefits your business, adding convience and allowing it to be put on the internet for more potential customers to see
It draws more attention to your business
You can have seperate sections for different reasons, aka sorted allergies, food types, sections...
adds to your business's internet look
Images for every menu item for Customers convience */


/*
 <Container>
                <div className='text-center'>
                    <h1>What is <u>Menu Hosting</u>?</h1>
                    <hr />
                    <div className='mb-5'>
                        <p>
                            <em>
                                Menu Hosting allows you to turn your phyiscal menu into an virtual menu for customers to use
                            </em>
                        </p>
                    </div>

                    <p className='fs-3 font-weight-bold'>Turn this</p>
                    <img src={menuimage} alt='Loading' className='shadow img-fluid mb-5' />

                    <p className='fs-3 font-weight-bold'>Into this</p>
                    <img src={menuimage1} alt='Loading' className='img-fluid' />
                    <img src={menuimage2} alt='Loading' className='img-fluid mb-5' />

                    <p className='fs-2'>You can check out a <a href='https://menu.tatewbs.com' target='_blank' rel='noreferrer'>Live Demo Here</a></p>

                    <hr />
                    <div className='mt-5 mb-5'>
                        <p className='fs-2'><strong>How does putting your menu online benefit your business?</strong></p>
                        <div>
                            <p>Sometimes trying new things can be a struggle, thats why we will do it for you!</p>
                            <p>By going with our online menu's not only do you get style, but also better functionality as a restaurant</p>

                            <p className='mt-4'>Here are some key points:</p>
                            <ListGroup className='text-center'>
                                <ListGroup.Item>Ease of access &amp; use for your customers</ListGroup.Item>
                                <ListGroup.Item>Potential growth for your restaurant</ListGroup.Item>
                                <ListGroup.Item>Better look for your online presence</ListGroup.Item>
                                <ListGroup.Item>It draws more attention to your business</ListGroup.Item>
                                <ListGroup.Item>You can have seperate sections for different reasons, aka sorted allergies, food types, categories...</ListGroup.Item>
                                <ListGroup.Item>Images for every menu item for customer convience</ListGroup.Item>
                                <ListGroup.Item>Updates frequently</ListGroup.Item>
                            </ListGroup>
                            <h4 className='mt-4'>Everything is custom coded, if you need something different then we got you!</h4>
                        </div>
                    </div>
                    <hr />
                    <ContactForm
                        page='menu'
                        info='How do I get an online menu?!'
                    />
                </div >
            </Container >
*/



export default Menu;