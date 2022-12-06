import React, { useState, useEffect } from 'react';
import '../../styles/main.scss';

import MenuCard from '../../components/MenuCard';
import ContactForm from '../../components/ContactForm';

import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';


// Images
import menuuu from '../../assets/icons/menu/menuuu.png';
// First 3
import dollar from '../../assets/icons/menu/dollar.svg';
import chartUp from '../../assets/icons/menu/chart-line-up.svg';
import user from '../../assets/icons/menu/user.png';
// Second 3
import scissors from '../../assets/icons/menu/scissors.svg';
import customerlove from '../../assets/icons/menu/person-hearts.svg';
import upload from '../../assets/icons/menu/upload.png';
// Third 3
import server from '../../assets/icons/menu/server.png';
import nosmartphone from '../../assets/icons/menu/no-smartphones.png';
import update from '../../assets/icons/menu/refresh.png';

const Menu = () => {

    const keyPoints = [
        {
            icon: user,
            title: 'Get your customers excited',
            paragraph: 'Allow your existing customers to enjoy the comfort of viewing your menu online without the stress of time packed, last minute calls.'
        },
        {
            icon: dollar,
            title: 'When you win, we win',
            paragraph: 'By trying our services, You are given the tools you need to have more insight into what your customers love.'
        },
        {
            icon: chartUp,
            title: 'Better your online presence',
            paragraph: 'Gain more credibility and a more professional experience with our custom layouts that are completely customized to your needs!'
        }
    ];

    const keyPoints2 = [
        {
            icon: scissors,
            title: 'We don\'t cut corners',
            paragraph: 'We double check our code leaving you with the best online menu and tools that we can for you to succeed!'
            // We team check our code leaving you with the best online menu and tools we can for you to succeed!
        },
        {
            icon: customerlove,
            title: 'More for your customers',
            paragraph: 'Create filters sorting out categories and food allergies so your customers can find what they are looking for while descovering and browsing your menu!'
        },
        {
            icon: upload,
            title: 'We allow images',
            paragraph: 'We created an image splicer that takes your raw image and converts it to a web safe format allowing speedy image load times.'
        }
    ]

    const keyPoints3 = [
        {
            icon: server,
            title: 'Dedicated hosting',
            paragraph: 'Don\'t have a server? Don\'t worry! We host your online menu and all it\'s assets included with your bundle with 99% uptime!'
            // Don\'t have an extra server laying around? Don\'t worry! We host your online menu and all it\'s assets included with your bundle with 99% uptime!
        },
        {
            icon: nosmartphone,
            title: 'Decrease miscommunication',
            paragraph: 'With our plans on adding online ordering, there will be better communication between your customers and kitchen, the customer will put their order in and your kitchen staff can read the order directly.'
        },
        {
            icon: update,
            title: 'Regular Updates',
            paragraph: 'We are always coming up with new features, you can request a feature to be implimented for you to use!'
            // With our team always coming up with new features, you can request a feature to be implimented for you to use!
        }
    ]


    useEffect(() => {
        document.title = `TateWBS | Online Menu Hosting`;
    }, [])
    return (
        <div id='menu'>
            <header>
                <div className='d-flex justify-content-center align-items-center'>
                    <Image src={menuuu} alt='' />
                </div>
            </header>
            <main>
                <Container>
                    <h2 className='text-center'><a href='https://menu.tatewbs.com' target='_blank' rel='noreferrer'>Live Example</a></h2>
                    <div className='grid'>
                        {
                            keyPoints.map((obj, i) => {
                                return <MenuCard key={i} icon={obj.icon} title={obj.title} text={obj.paragraph} />
                            })
                        }
                    </div>
                    {/* Full support &amp; security + mobile compatibility */}
                    <p>
                        With our increasing number of business, we strive to
                        create the <strong>Perfect Admin Panel</strong> making
                        your menu as painless as possible to manage and
                        with its simplistic design you can start using it
                        in the matter of minutes.
                        With <strong>Support</strong> being available
                        for all our clients, you can be worry free of any technical issues.
                    </p>
                    <div className='grid'>
                        {
                            keyPoints2.map((obj, i) => {
                                return <MenuCard key={i} icon={obj.icon} title={obj.title} text={obj.paragraph} />
                            })
                        }
                    </div>
                    <p>
                        Our menu designs are <strong>mobile compatible</strong> meaning you can view them on phones,
                        tablets, or a laptop!
                        We also include a QR code that links to your menu so you can print on
                        cards and can place on the table.
                        All of this for $150/month or about $5 a day!
                    </p>
                    <div className='grid'>
                        {
                            keyPoints3.map((obj, i) => {
                                return <MenuCard key={i} icon={obj.icon} title={obj.title} text={obj.paragraph} />
                            })
                        }
                    </div>
                </Container>
            </main>
        </div>
    )
}

{/* <ContactForm
    page='menu'
    info='How do I get an online menu?!'
/> */}

export default Menu;