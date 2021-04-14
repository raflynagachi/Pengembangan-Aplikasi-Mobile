import React from 'react';
import AppAbout from '../components/home/about';
import Appkomen from '../components/home/komen';
import AppHomes from '../components/home/homes';
import AppFeatures from '../components/home/features';
import AppBaruu from '../components/home/navbaru';

export default function AppHome() {
    return(
        <div className="main">
            <AppHomes/>
            <AppFeatures/>
            <AppAbout/>
            <AppBaruu/>
            <Appkomen/>
        </div>
    )
}