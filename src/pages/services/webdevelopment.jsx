import React, { useEffect } from 'react';

import anime from 'animejs';

import ContactForm from '../../components/ContactForm';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';



const WebDevelopment = () => {

    let tatewbsdoes = ['Customizable', ' Mobile Friendly', 'Works with existing Databases', 'Will make a database for you if needed', 'Frontend Development', 'Backend Development', 'DDOS Protected', 'Will stay up to date on realtime progress', 'TateWBS will build your website from scratch', 'Have your own domain', 'SEO will be done for you'];

    useEffect(() => {
        document.title = `TateWBS | Web Development`;
    }, []);
    return (
        <div id='webdevelopment'>

        </div>
    )
}

export default WebDevelopment;