import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



const Error  = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate(-1);
    })
    return 'Redirecting...';
}

export default Error;