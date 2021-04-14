import React from 'react';
import AppAbout from '../components/home/about';
import AppContact from '../components/home/contact';
import AppHomes from '../components/home/homes';
import AppFeatures from '../components/home/features';

export default function AppHome() {
    return(
        <div className="main">
            <AppHomes/>
            <AppFeatures/>
            <AppAbout/>
            <AppContact/>
        </div>
    )
}