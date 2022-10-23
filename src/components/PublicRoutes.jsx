import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

const PublicRoutes = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <Navigation />
            <Outlet />
            <Footer />
        </>
    );
}

export default PublicRoutes;