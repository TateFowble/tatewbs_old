import React, { useEffect } from 'react';
import Card from '../components/Card';

const Project = () => {

    const sites = [
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
        },
        {
            name: 'El Maya',
            url: 'https://menu.elmayamx.com',
            description: 'A Mexican restraunt menu that introduces new foods and styles',
            image: ''
        },
        {
            name: 'Overlook',
            url: 'https://overlook.tatewbs.com',
            description: 'By the lake location with the best burgers and fries around',
            image: ''
        },
    ];


    useEffect(() => {
        document.title = `TateWBS | Meet our Clients`;
    }, []);
    return (
        <div id='projects' className='d-flex flex-column' style={{ gap: '2em' }}>
            <div className='m-5 d-flex justify-content-center'>
                <h1>Meet our Clients</h1>
            </div>
            {
                sites.map((obj, i) => {
                    return (
                        <Card
                            key={i}
                            index={i}
                            name={obj.name}
                            url={obj.url}
                            description={obj.description}
                            image={obj.image}

                        />
                    )
                })
            }
        </div>
    )
}

export default Project;




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