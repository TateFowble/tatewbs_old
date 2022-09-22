import React, { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Axios from 'axios';


const ContactForm = (props) => {
    const api = process.env.REACT_APP_API;
    const { page, info } = props;
    let officialEmail = 'support@tatewbs.com';

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [businessName, setBusinessName] = useState('');
    const [notes, setNotes] = useState('');

    const [formWorked, setFormWorked] = useState();

    const formNotifier = (code) => {
        switch (code) {
            case 1:
                return (
                    <Alert variant='success'>
                        Your form went through, we will contact you soon!
                    </Alert>
                );
            case 2:
                return (
                    <Alert variant='warning'>
                        We already have your form in our servers, If we did not contact you please email: <strong>{officialEmail}</strong>
                    </Alert>
                );
            case 3:
                return (
                    <Alert variant='danger'>
                        Your form ran into an issue. Please notify <strong>{officialEmail}</strong>
                    </Alert>
                );
            case 4:
                return (
                    <Alert variant='info'>
                        If your nervous, go to this service and look calm and ready to drop bombs. - The Owner
                    </Alert>
                );
            default:
                return null;
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        await Axios.post(`${api}/contact`, {
            email: email,
            name: name,
            phone: phone,
            businessName: businessName,
            notes: notes,
            page: page
        }, {
            contentType: 'application/json',
            Accept: 'application/json'
        }).then((res) => {
            console.log(res);
            if (res.status === 200) {
                setFormWorked(res.data.code);
            } else {
                setFormWorked(res.data.code);
            }
        }).catch((err) => {
            setFormWorked(3);
            console.error(err);
        })

    };


    return (
        <div className='mt-5 mb-5'>
            <p className='fs-2 font-weight-bold m-0'>{info}</p>
            <p className='font-italic mb-5'>
                Email or fill in the form below!
            </p>
            <p className='fs-3'><u>{officialEmail}</u></p>
            <hr className='mb-5 mt-4' />
            <Form onSubmit={handleSubmit}>
                <Form.Group className='mb-4'>
                    <Row>
                        <Col>
                            <Form.Control
                                type='text'
                                placeholder='Name*'
                                value={name}
                                onChange={((event) => setName(event.target.value))}
                                required
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                type='text'
                                placeholder='Email*'
                                value={email}
                                onChange={((event) => setEmail(event.target.value))}
                                required
                            />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group className='mb-4'>
                    <Row>
                        <Col>
                            <Form.Control
                                type='text'
                                placeholder='Business Name*'
                                value={businessName}
                                onChange={((event) => setBusinessName(event.target.value))}
                                required
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                type='text'
                                placeholder='Phone'
                                value={phone}
                                onChange={((event) => setPhone(event.target.value))}
                                required
                            />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group className='mb-4'>
                    <Row>
                        <Col>
                            <Form.Control
                                as='textarea'
                                rows={4}
                                placeholder='Notes'
                                value={notes}
                                onChange={((event) => setNotes(event.target.value))} />
                        </Col>
                    </Row>
                </Form.Group>
                <Button type='submit'>Submit</Button>
            </Form>
            <div className='mt-3'>
                {formNotifier(formWorked)}
            </div>
        </div>
    );
}
// Hello, my name is _____ and I am needing to talk about a(n) ______ for my business _______.


export default ContactForm;