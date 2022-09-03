import React, { useState } from 'react';
// import { db } from '../../firebase';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';



const ContactForm = (props) => {
    let page = props.page;
    let offcialEmail = "info@tatewbs.com";

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [businessName, setBusinessName] = useState("");
    const [notes, setNotes] = useState("");



    const theDate = () => {
        var mydate = new Date();
        var curr_date = mydate.getDate();
        var curr_month = mydate.getMonth() + 1;
        var curr_year = mydate.getFullYear();

        var mydatestr = ' ' + curr_month + '/' +
            curr_date + '/' +
            curr_year + ' ' +
            mydate.getHours() + ':' +
            mydate.getMinutes() + ':' +
            mydate.getSeconds()
        return mydatestr;
    }
    let dateToString = theDate().toString();


    const [formWorked, setFormWorked] = useState();

    const formNotifier = (formWorked) => {
        switch (formWorked) {
            case true:
                return (
                    <Alert variant="success">
                        Your form went through, we will email you soon!
                    </Alert>
                );
            case false:
                return (
                    <Alert variant="danger">
                        Your form ran into an issue. Please notify {offcialEmail}
                    </Alert>
                );
            default:
                return ('');
        }
    }

    const handleSubmit = event => {

        event.preventDefault();

        // db.collection("contact").doc(businessName)
        //     .set({
        //         name: name,
        //         email: email,
        //         phone: phone,
        //         businessName: businessName,
        //         notes: notes,
        //         date: dateToString
        //     })
        //     .then(() => {
        //         setEmail("");
        //         setName("");
        //         setPhone("");
        //         setBusinessName("");
        //         setNotes("");
        //         return setFormWorked(true);
        //     })
        //     .catch((err) => {
        //         alert(err.message);
        //         return setFormWorked(false);
        //     })

    };


    return (
        // <div className="mt-5 mb-5">
        //     <p className="fs-2 font-weight-bold m-0">{page}</p>
        //     <p className="font-italic mb-5">
        //         Email or fill in the form below!
        //     </p>
        //     <p className="fs-3"><u>info@tatewbs.com</u></p>
        //     <hr className="mb-5 mt-4" />
        //     <Form onSubmit={handleSubmit}>
        //         <Form.Group className="mb-4">
        //             <Row>
        //                 <Col>
        //                     <Form.Control
        //                         type="text"
        //                         placeholder="Name*"
        //                         value={name}
        //                         onChange={((event) => setName(event.target.value))} 
        //                         required
        //                         />
        //                 </Col>
        //                 <Col>
        //                     <Form.Control
        //                         type="text"
        //                         placeholder="Email*"
        //                         value={email}
        //                         onChange={((event) => setEmail(event.target.value))} 
        //                         required
        //                         />
        //                 </Col>
        //             </Row>
        //         </Form.Group>
        //         <Form.Group className="mb-4">
        //             <Row>
        //                 <Col>
        //                     <Form.Control
        //                         type="text"
        //                         placeholder="Business Name*"
        //                         value={businessName}
        //                         onChange={((event) => setBusinessName(event.target.value))} 
        //                         required
        //                         />
        //                 </Col>
        //                 <Col>
        //                     <Form.Control
        //                         type="text"
        //                         placeholder="Phone"
        //                         value={phone}
        //                         onChange={((event) => setPhone(event.target.value))}
        //                         required
        //                     />
        //                 </Col>
        //             </Row>
        //         </Form.Group>
        //         <Form.Group className="mb-4">
        //             <Row>
        //                 <Col>
        //                     <Form.Control
        //                         as="textarea"
        //                         rows={4}
        //                         placeholder="Notes"
        //                         value={notes}
        //                         onChange={((event) => setNotes(event.target.value))} />
        //                 </Col>
        //             </Row>
        //         </Form.Group>
        //         <Button type="submit">Submit</Button>
        //     </Form>
        //     <div className="mt-3">
        //         {formNotifier(formWorked)}
        //     </div>
        // </div>
    <></>
        );
}
// Hello, my name is _____ and I am needing to talk about a(n) ______ for my business _______.


export default ContactForm;