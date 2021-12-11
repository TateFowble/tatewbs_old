import React from 'react';


import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

// images
import tatewbsImage from '../../assets/images/projects/tatewbs.png';

const ProjectPage = () => {

    let sites = [
        {
            siteName: "TateWBS",
            siteURL: "https://www.tatewbs.com",
            siteDescription: "This is the site you're currently on",
            siteImage: tatewbsImage
        },
        {
            siteName: "StarWorksMC",
            siteURL: "https://www.starworksmc.us",
            siteDescription: "A Minecraft Network Website that includes multiple servers and api's integrated into it",
            siteImage: ''
        },
        {
            siteName: "ActuallyArcher",
            siteURL: "https://www.actuallyarcher.com",
            siteDescription: "An eCommerce site",
            siteImage: ''
        },
        {
            siteName: "El Maya",
            siteURL: "https://www.elmayamx.com",
            siteDescription: "A mexican restaurant menu",
            siteImage: ''
        }
    ]

    const siteArr = (name, url, description, image) => {
        return (
            <div className="m-5 w-100">
                <a href={url} target="_blank" rel="noreferrer">
                    <Card className="bg-dark text-white">
                        <Card.Img src={image || ``} alt="" width="100%" height="200px" />
                        <Card.ImgOverlay className="text-center">
                            <Card.Title className="mb-5">{name}</Card.Title>
                            <Card.Text>{description}</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </a>
            </div>
        );
    }


    return (
        <Container fluid={true}>
            <div className="d-flex flex-wrap flex-row">
                {
                    sites.map(i => {
                        let siteName = i.siteName;
                        let siteURL = i.siteURL;
                        let siteDescription = i.siteDescription;
                        let siteImage = i.siteImage;
                        return siteArr(siteName, siteURL, siteDescription, siteImage);
                    })
                }
            </div>
        </Container>
    )
}

export default ProjectPage;