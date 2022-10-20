import React from 'react';

import { Parallax } from 'react-parallax';
import defaultBackgroundImage from '../assets/images/splashOfColor.jpg';

const Card = (props) => {
    const { index, name, image, url, description } = props;
    return (
        <>
            <a
                href={url}
                className='text-decoration-none'
                style={{ color: 'white' }}
                target='_blank'
                rel='noreferrer'>
                <Parallax
                    className='d-flex align-items-center'
                    style={{
                        height: '20em',
                        left: '-1px',
                        objectFit: 'cover'
                    }}
                    bgImage={image || defaultBackgroundImage}
                    bgImageAlt=''
                    strength={200}
                >
                    <div
                        className='d-inline-flex align-items-center justify-content-end card-effect'
                        style={{

                        }}>
                        <div className='m-3'>
                            <p className='fs-2'>
                                {name}
                            </p>
                            <p>{description}</p>
                        </div>
                    </div>
                </Parallax>
            </a>
        </>
    )
}

export default Card;