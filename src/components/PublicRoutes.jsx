import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

const PublicRoutes = () => {

    return (
        <>
        <Navigation />
            <Outlet />
        <Footer />
        </>
    );
}

export default PublicRoutes;