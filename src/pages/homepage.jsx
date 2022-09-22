import React, { useEffect } from 'react';

// Libraries
// https://animejs.com/documentation/

import ReactRotatingText from 'react-rotating-text';
// https://www.npmjs.com/package/react-rotating-text

import { Parallax } from 'react-parallax';
// https://www.npmjs.com/package/react-parallax

// images
// import reactjs from '../../assets/images/reactjs.png';
// import angularjs from '../../assets/images/angularjs.png';
// import nodejs from '../../assets/images/nodejs.png';
// import mysql from '../../assets/images/mysql.png';
// import mongodb from '../../assets/images/mongodb.png';
// import python from '../../assets/images/python.png';

import image1 from '../assets/images/homepage/image1.jpg';
import image2 from '../assets/images/homepage/image2.jpg';
import image3 from '../assets/images/homepage/image3.jpg';
import image4 from '../assets/images/homepage/image4.jpg';
import discord from '../assets/images/homepage/discord.jpg';
// components
// import AnimeText from '../components//AnimeText';
import InfoBox from '../components/InfoBox';

// bootstrap

function Homepage() {
    document.title = `TateWBS | Home`;
    useEffect(() => {

    }, []);

    return (
        <div id='homepage'>
            <div>
                <Parallax
                    className='fluid-container d-flex align-items-center justify-content-center'
                    style={{ minHeight: '69vh' }}
                    // blur={1}
                    bgImage={image1}
                    bgImageAlt='...'
                    strength={500}
                >
                    <p className='text-white text-center fs-1'>Have <ReactRotatingText items={['an amazing site!', 'an app customers will love...', 'a site made for you :)']} /></p>
                </Parallax>
                <InfoBox
                    header={
                        'Why choose TateWBS?'
                    }
                    text={
                        'Bring your ideas to life with TateWBS! We offer efficient code with fast results for you and your business.'
                    }
                    borderColor={
                        '#b144ff'
                    }
                />
            </div>
            <div>
                <Parallax
                    className='fluid-container d-flex align-items-center justify-content-center'
                    style={{ minHeight: '40em' }}
                    // blur={1}
                    bgImage={image2}
                    bgImageAlt='...'
                    strength={500}
                />
                <InfoBox
                    header={
                        'Have TateWBS deal with your tech needs!'
                    }
                    text={
                        'Our whole job description is tech! So why not let us take care of it for you.'
                    }
                    borderColor={
                        '#ffff20'
                    }
                />
            </div>
            <div>
                <Parallax
                    className='fluid-container d-flex align-items-center justify-content-center'
                    style={{ minHeight: '40em' }}
                    // blur={1}
                    bgImage={image3}
                    bgImageAlt='...'
                    strength={500}
                />
            </div>
            <div>
                <InfoBox
                    header={
                        'What is SEO and how does it help me?'
                    }
                    text={
                        'SEO or Search Engine optimization helps your website get seen by your potential clients!'
                    }
                    borderColor={
                        '#eedbcc'
                    }
                />
                <Parallax
                    className='fluid-container d-flex align-items-center justify-content-center'
                    style={{ minHeight: '40em' }}
                    // blur={1}
                    bgImage={image4}
                    bgImageAlt='...'
                    strength={500}
                />
            </div>
            <div>
                <InfoBox
                    header={
                        'Need support or have something to offer? Join the growing community on discord'
                    }
                    text={
                        'Click on the connect button below on the discord widget!'
                    }
                    borderColor={
                        '#7fb3e4'
                    }
                />
                <Parallax
                    style={{ minHeight: '40em' }}
                    // blur={1}
                    bgImage={discord}
                    bgImageAlt='...'
                    strength={500}
                >
                    <div className='container mt-5'>
                        <div className='d-flex justify-content-around'>
                            <iframe
                                src='https://discord.com/widget?id=839274694511427655&theme=dark'
                                width='350'
                                height='500'
                                allowtransparency='true'
                                frameBorder='0'
                                sandbox='allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts'
                                title='discord'
                            ></iframe>
                        </div>
                    </div>
                </Parallax>
            </div>
        </div>
    )
}

export default Homepage;


/*

Contact info on homepage
for services use reds and yellows

*/


/*
Customer stars and reviews
More info on item, aka tv thing & menu thing

*/