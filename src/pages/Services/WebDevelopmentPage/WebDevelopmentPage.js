import { React } from 'react';


import Container from 'react-bootstrap/Container';



const WebDevelopmentPage = () => {
    return (
        <div>
            <div className="vertical-spacing" />
            <Container>
                <div className="text-center">
                    <h1>What all is included?</h1>
                    <p className="m-0 font-italic">
                        TateWBS works on many types of websites!
                    </p>
                    <hr />
                    <h3 className="mb-2">What TateWBS does</h3>
                    <div className="d-flex justify-content-center">
                        <ul className="text-left">
                            <li>
                                Customizable
                            </li>
                            <li>
                                Mobile Friendly
                            </li>
                            <li>
                                Works with existing Databases
                            </li>
                            <li>
                                Will make a database for you if needed
                            </li>
                            <li>
                                Frontend Development
                            </li>
                            <li>
                                Backend Development
                            </li>
                            <li>
                                DDOS Protected
                            </li>
                            <li>
                                Will stay up to date on realtime progress
                            </li>
                            <li>
                                TateWBS will build your website from scratch
                            </li>
                            <li>
                                Have your own domain
                            </li>
                            <li>
                                Free SEO
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="vertical-spacing" />

                        <h3>Why choose TateWBS</h3>

                        <h3>Where do I get started?</h3>
                    </div>
                </div>
            </Container>
            <div className="vertical-spacing" />
        </div>
    )
}

export default WebDevelopmentPage;