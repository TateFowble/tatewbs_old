import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/main.scss';

import MenuCard from '../../components/MenuCard';
import ContactForm from '../../components/ContactForm';

import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';


// Images
import terminal from '../../assets/icons/webdev/terminal.png';
// First 3
import car from '../../assets/icons/webdev/car.png';
import workflow from '../../assets/icons/webdev/workflow.png';
import domain from '../../assets/icons/webdev/domain.png';
// Second 3
import seo from '../../assets/icons/webdev/seo.png';
import progression from '../../assets/icons/webdev/progression.png';
import ddos from '../../assets/icons/webdev/ddos.png';
// Third 3
import server from '../../assets/icons/menu/server.png';
import customizability from '../../assets/icons/webdev/customizability.png';
import update from '../../assets/icons/menu/refresh.png';

const WebDevelopment = () => {

    const keyPoints = [
        {
            icon: car,
            title: 'Our Drive',
            paragraph: 'Aiming for success, our drive is to make your website a success!'
        },
        {
            icon: workflow,
            title: 'Workflow',
            paragraph: 'Great things take time! That\'s why we have a system that enhances time and reduces overall bugs!'
        },
        {
            icon: domain,
            title: 'Domains',
            paragraph: 'Like all web services, we offer the ability to connect your own domain or allow us to do it for you!'
        }
    ]

    const keyPoints2 = [
        {
            icon: seo,
            title: 'SEO',
            paragraph: 'Search Engine Optimization is a very important aspect of Websites, allowing people to find your website based on searched words relating to your business!'
        },
        {
            icon: progression,
            title: 'Progression',
            paragraph: 'Your idea\'s will never cease neither should your website... That\'s why we offer after production services.'
        },
        {
            icon: ddos,
            title: 'DDoS Protection',
            paragraph: 'Protection against DDoS (Distributed Denial-of-Service) attacks are divided as much as possible to keep your website up and running!'
        }
    ]

    const keyPoints3 = [
        {
            icon: server,
            title: 'Dedicated hosting',
            paragraph: 'Don\'t have a server? Don\'t worry! We host your website/webapp and all it\'s assets included with your bundle with 99% uptime!'
        },
        {
            icon: customizability,
            title: 'Customizability',
            paragraph: 'Great websites begin with a single line of code. We create admin panels that allow better customization for your website.'
        },
        {
            icon: update,
            title: 'Updates',
            paragraph: 'We are always coming up with new features, you can request a feature to be implimented for you to use!'
        }
    ]


    useEffect(() => {
        document.title = `TateWBS | Online Menu Hosting`;
    }, [])
    return (
        <div id='webdevelopment'>
            <header>
                <div className='d-flex justify-content-center'>
                    <Image src={terminal} alt='' />
                </div>
            </header>
            <main>
                <Container>
                    <div className='grid'>
                        {
                            keyPoints.map((obj, i) => {
                                return <MenuCard key={i} icon={obj.icon} title={obj.title} text={obj.paragraph} />
                            })
                        }
                    </div>
                    <p>
                        We love making websites! So lets make yours together, you come up with ideas
                        and we'll bring those ideas to life!
                        All the websites and webapps we make are our <Link to='/clients'>Client Page</Link>.
                    </p>
                    <div className='grid'>
                        {
                            keyPoints2.map((obj, i) => {
                                return <MenuCard key={i} icon={obj.icon} title={obj.title} text={obj.paragraph} />
                            })
                        }
                    {
                        keyPoints3.map((obj, i) => {
                            return <MenuCard key={i} icon={obj.icon} title={obj.title} text={obj.paragraph} />
                        })
                    }
                    </div>
                    {/* <p>
                        We carefully design your website to best fit your business.
                    </p>
                    <div className='grid'>
                    </div> */}
                </Container>
            </main>
        </div>
    )
}

export default WebDevelopment;


/*

Our website has been founded in the 1990's and has lived on ever since - Hayli

*/