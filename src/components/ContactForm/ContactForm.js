import React, { useState } from 'react';
import db  from '../../firebase';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




const ContactForm = (props) => {
    let page = props.page;

const data = {

};

    const handleSubmit = event => {

        event.preventDefault();

        // console.log(data)

        db.collection("application")
            .add({
                data
            })
            .then(() => {
                alert('Form has been submitted!');
                window.location.reload();
            })
            .catch((err) => {
                alert(err.message);
            })

    };


    return (
        <div className="mt-5 mb-5">
            <p className="fs-2 font-weight-bold m-0">{page}</p>
            <p className="font-italic mb-5">
                Email or fill in the form below!
            </p>
            <p className="fs-3"><u>info@tatewbs.com</u></p>
            <hr className="mb-5 mt-4" />
            <Form>
                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Control type="text" placeholder="Name" />
                        </Col>
                        <Col>
                            <Form.Control type="text" placeholder="Email" />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Control type="text" placeholder="Business Name" />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Control as="textarea" rows={4} placeholder="Notes" />
                        </Col>
                    </Row>
                </Form.Group>
                <Button type="submit">Submit</Button>
            </Form>
        </div>
    );
}
// Hello, my name is _____ and I am needing to talk about a(n) ______ for my business _______.


export default ContactForm;