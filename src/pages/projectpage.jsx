import React from 'react';


import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

// images
import tatewbsImage from '../assets/images/tatewbs.png';

const ProjectPage = () => {

    let sites = [
        {
            siteName: 'TateWBS',
            siteURL: 'https://www.tatewbs.com',
            siteDescription: 'This is the site you\'re currently on',
            siteImage: tatewbsImage
        },
        {
            siteName: 'StarWorksMC',
            siteURL: 'https://www.starworksmc.us',
            siteDescription: 'A Minecraft Network Website that includes multiple servers and api\'s integrated into it',
            siteImage: ''
        },
        {
            siteName: 'ActuallyArcher',
            siteURL: 'https://www.actuallyarcher.com',
            siteDescription: 'An eCommerce site',
            siteImage: ''
        },
        {
            siteName: 'El Maya',
            siteURL: 'https://menu.elmayamx.com',
            siteDescription: 'A mexican restaurant menu',
            siteImage: ''
        },
        {
            siteName: 'FoamTech',
            siteURL: 'https://foamtech.tatewbs.com',
            siteDescription: 'FoamTechInc Web app',
            siteImage: ''
        }
    ]

    const siteArr = (name, url, description, image) => {
        return (
            <div className='m-5 w-100 shadow'>
                <a href={url} target='_blank' rel='noreferrer'>
                    <Card className='bg-dark text-white'>
                        <Card.Img src={image || ``} alt='' height='200px' />
                        <Card.ImgOverlay className='text-center'>
                            <Card.Title className='mb-5'>{name}</Card.Title>
                            <Card.Text>{description}</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </a>
            </div>
        );
    }

    document.title = `TateWBS | Projects`;
    return (
        <Container fluid={true}>
            <div className='d-flex flex-wrap flex-row'>
                {
                    sites.map((obj, i) => {
                        let siteName = obj.siteName;
                        let siteURL = obj.siteURL;
                        let siteDescription = obj.siteDescription;
                        let siteImage = obj.siteImage;
                        return siteArr(siteName, siteURL, siteDescription, siteImage);
                    })
                }
            </div>
        </Container>
    )
}

export default ProjectPage;