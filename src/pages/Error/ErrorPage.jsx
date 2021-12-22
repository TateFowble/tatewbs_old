import React from 'react';

import { Link, useParams } from 'react-router-dom';

import './Error.scss'

// React Bootstrap 
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

// Images
import errorimage from '../../assets/images/error/404-image.png';

function Error() {
    let { error_404 } = useParams();

    let errorImage = {
        // width: '20vw'
        width: '540px'
    }
    document.title = `TateWBS | ${error_404} was not found`;
    return (
        <div id="error">
            <Container>
                <div>
                    <div className="d-flex justify-content-center">
                        <Image style={errorImage} src={errorimage} alt="404 page not found" />
                    </div>
                    <div>
                        {/* <p>404. That's an error</p> */}
                        <div className="text-break">
                            <p>The requested URL <span style={{ color: 'red' }}>/{error_404}</span> was not found on this server.</p>
                        </div>
                        <p style={{ color: '#595758'}}>Thats all we know.</p>
                    </div>
                </div>
            </Container>
            {/* <p>\(o_o)/</p> */}
            {/* <p>🤒 404 Page not found.</p>
        <p>Can't find the page you're looking for.</p>
        <p><Link to="/">Go back to the homepage</Link></p> */}
        </div>
    )
}
export default Error;