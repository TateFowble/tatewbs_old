import React, { useEffect } from 'react';

import ReactRotatingText from 'react-rotating-text';

import { Parallax } from 'react-parallax';
import Container from 'react-bootstrap/Container';


import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.jpg';
import image4 from '../assets/images/image4.jpg';
import discord from '../assets/images/discord.jpg';
// components
import InfoBox from '../components/InfoBox';
import Discord from '../components/Discord';

const Home = () => {

    useEffect(() => {
        document.title = `TateWBS | Home`;
        window.scrollTo(0, 0);
    }, []);

    return (
        <div id='homepage'>
            <div>
                <Parallax
                    contentClassName='parallax-sizer d-flex align-items-center justify-content-center'
                    bgImage={image1}
                    bgImageAlt=''
                    strength={500}
                >
                    <p className='text-white fs-1'>Have <ReactRotatingText items={['an amazing site!', 'an app customers will love...', 'a site made for you :)']} /></p>
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
                    contentClassName='parallax-sizer d-flex align-items-center justify-content-center'
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
                    contentClassName='parallax-sizer d-flex align-items-center justify-content-center'
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
                    contentClassName='parallax-sizer d-flex align-items-center justify-content-center'
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
                    contentClassName='parallax-sizer'
                    bgImage={discord}
                    bgImageAlt='...'
                    strength={500}
                >
                    <Container>
                        <Discord />
                    </Container>
                </Parallax>
            </div>
        </div>
    )
}

export default Home;


/*

Contact info on homepage
for services use reds and yellows

*/


/*
Customer stars and reviews
More info on item, aka tv thing & menu thing

*/