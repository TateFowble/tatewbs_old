import React, { useEffect } from 'react';


import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';


const ProjectPage = () => {

    let sites = [
        {
            name: 'StarWorksMC',
            url: 'https://www.starworksmc.us',
            description: 'A Minecraft network that connects Java based code into web based code to interact with the network',
            image: 'https://www.starworksmc.us/static/media/village-closeup.e7be0e165efcab0e732d.png'
        },
        {
            name: 'ActuallyArcher',
            url: 'https://www.actuallyarcher.com',
            description: 'An upscale boutique for women who desire classy office clothing and jewelery',
            image: ''
        },
        {
            name: 'FoamTech',
            url: 'https://foamtech.tatewbs.com',
            description: 'A web app that allows Foam Tech Employees to calculate and print reports based on their product load',
            image: ''
        }
    ];
    let menuSites = [
        {
            name: 'El Maya',
            url: 'https://menu.elmayamx.com',
            description: 'A Mexican restraunt menu that introduces new foods and styles',
            image: ''
        },
    ];


    const colorPallete = () => {
        // let result = Math.floor((Math.random() * 10) + 1);
        let result = 1;
        let colorAndBackground;
        switch (result) {
            case 1:
                colorAndBackground = {
                    color: 'green',
                    background: 'purple'
                }
                console.log('dsadsa');
                return colorAndBackground;
        }

    }

    useEffect(() => {
        document.title = `TateWBS | Projects`;
    }, []);
    return (
        <Container id='project'>
            <div className='d-flex flex-md-row flex-column flex-wrap'>
                {
                    sites.map((obj, i) => {
                        // console.log(obj);
                        let name = obj.name;
                        let url = obj.url;
                        let description = obj.description;
                        let image = obj.image;
                        return (
                            <Card
                                className='m-4 align-self-center'
                                style={{ minHeight: '16em', maxHeight: '100%', minWidth: '100%', maxWidth: '18em' }}
                                key={i}>
                                <a href={url} rel='no-referrer' target='_blank'>
                                    <Card.Img src={image || ''} alt='' style={{ width: '100%' }} />
                                    <Card.ImgOverlay>
                                        <Card.Title>{name}</Card.Title>
                                        <Card.Body>{description}</Card.Body>
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
                            <Card className='text-white' width='500px' style={{ background: '' }}>
                                <a
                                    key={i}
                                    href={url}
                                    target='_blank'
                                    rel='noreferrer'>
                                    <Card.Img src={``} alt='' height='200px' />
                                    <Card.ImgOverlay className='text-center'>
                                        <Card.Title className='mb-5'>{name}</Card.Title>
                                        <Card.Text>{description}</Card.Text>
                                    </Card.ImgOverlay>
                                </a>
                            </Card>

Black
Purple
Blue
Red
Gray

*/