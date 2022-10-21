import { React, useEffect } from 'react';

import anime from 'animejs';

import ContactForm from '../../components/ContactForm';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';


const WebDevelopment = () => {






    const ls = {
        backgroundColor: '#b2c1cb',
    }
    const ls2 = {
        backgroundColor: '#ccd5dc'
    }
    const ls3 = {
        backgroundColor: '#e5eaed'
    }


    let tatewbsdoes = ['Customizable', ' Mobile Friendly', 'Works with existing Databases', 'Will make a database for you if needed', 'Frontend Development', 'Backend Development', 'DDOS Protected', 'Will stay up to date on realtime progress', 'TateWBS will build your website from scratch', 'Have your own domain', 'SEO will be done for you'];

    useEffect(() => {
        document.title = `TateWBS | Web Development`;
    }, []);
    return (
        <Container fluid={false}>
            <div className='text-center'>
                <div className='mb-5 mt-5'>
                    <p className='fs-5'>We can make a whole new website or redesign an existing one for you</p>
                </div>
                <div>
                    <h3 className='mb-2'>What TateWBS does</h3>
                    <div className='d-flex justify-content-center'>
                        <ListGroup className='text-center'>

                            {
                                tatewbsdoes.map((data, i) => {
                                    return (
                                        <ListGroup.Item key={i}>
                                            {data}
                                        </ListGroup.Item>

                                    )
                                })
                            }

                        </ListGroup>
                    </div>
                </div>

                <ContactForm
                    page='webdeveopment'
                    info='Where do I get started?'
                />

            </div>
        </Container>
    )
}

export default WebDevelopment;