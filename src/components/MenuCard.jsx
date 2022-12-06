import React from 'react';

import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

const MenuCard = (props) => {
    const { icon, title, text } = props;



    return (
        <Card>
            <div className='d-flex justify-content-center'>
                <Image src={icon} alt='' />
            </div>
            <Card.Title>{title}</Card.Title>
            <div className='d-flex justify-content-center'>
                <hr />
            </div>
            <Card.Body>
                {text}
            </Card.Body>
        </Card>
    )
}

export default MenuCard;