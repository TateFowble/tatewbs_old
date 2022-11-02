import React, { useEffect } from 'react';

import anime from 'animejs';

import ContactForm from '../../components/ContactForm';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

import { Parallax, ParallaxBanner } from 'react-scroll-parallax';


const WebDevelopment = () => {

    let tatewbsdoes = ['Customizable', ' Mobile Friendly', 'Works with existing Databases', 'Will make a database for you if needed', 'Frontend Development', 'Backend Development', 'DDOS Protected', 'Will stay up to date on realtime progress', 'TateWBS will build your website from scratch', 'Have your own domain', 'SEO will be done for you'];

    useEffect(() => {
        document.title = `TateWBS | Web Development`;
        window.scrollTo(0, 0);
    }, []);
    return (
        <div id='webdevelopment'>
            <div style={{ height: '65vh' }} />
            ---
            <Parallax speed={50} translateX={['0px', '150px']}>
                <div>
                    <h1>some content</h1>
                </div>
            </Parallax>
            <ParallaxBanner
                layers={[{
                    image: 'https://react-scroll-parallax.damnthat.tv/img/banner.jpg',
                    speed: -15
                }]}
                style={{ height: '100vh' }}
            />
        </div>
    )
}

export default WebDevelopment;