import React, { useEffect } from 'react';


import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const ProjectPage = () => {

    let sites = [
        {
            siteName: 'TateWBS',
            siteURL: 'https://www.tatewbs.com',
            siteDescription: 'This is the site you\'re currently on'
        },
        {
            siteName: 'StarWorksMC',
            siteURL: 'https://www.starworksmc.us',
            siteDescription: 'A Minecraft Network Website that includes multiple servers and api\'s integrated into it',
        },
        {
            siteName: 'ActuallyArcher',
            siteURL: 'https://www.actuallyarcher.com',
            siteDescription: 'An eCommerce site',
        },
        {
            siteName: 'El Maya',
            siteURL: 'https://menu.elmayamx.com',
            siteDescription: 'A mexican restaurant menu',
        },
        {
            siteName: 'FoamTech',
            siteURL: 'https://foamtech.tatewbs.com',
            siteDescription: 'FoamTechInc Web app'
        }
    ]

    useEffect(() => {
        document.title = `TateWBS | Projects`;
    }, []);
    return (
        <Container fluid={true}>
            <div className='d-flex flex-wrap bf-dark'>
                {
                    sites.map((obj, i) => {
                        let name = obj.siteName;
                        let url = obj.siteURL;
                        let description = obj.siteDescription;
                        let image = obj.siteImage;
                        return (
                            <Card className='text-white' style={{ background: '' }}>
                                <a
                                    key={i}
                                    href={url}
                                    target='_blank'
                                    rel='noreferrer'>
                                    <Card.Img src={image || ``} alt='' height='200px' />
                                    <Card.ImgOverlay className='text-center'>
                                        <Card.Title className='mb-5'>{name}</Card.Title>
                                        <Card.Text>{description}</Card.Text>
                                    </Card.ImgOverlay>
                                </a>
                            </Card>
                        )
                    })
                }
            </div>
        </Container>
    )
}

export default ProjectPage;



/*

Black
Purple
Blue
Red
Gray

*/