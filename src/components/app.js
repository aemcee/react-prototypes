import React from 'react';
import { Route } from 'react-router-dom';
import Welcome from './welcome';
import Nav from './nav';
import OurMacarons from './our_macarons';
import GiftParties from './gift_parties';
import Contacts from './contacts';


// find out why sometimes () or sometimes props
export default () => {
    return (
        <div className = 'container'>
            {/* <h1>Test Test Test Routing Test Test Test</h1> */}
            <Nav/>
            <Route exact path = '/' component = { Welcome }/>
            <Route path = '/our-macarons' component = { OurMacarons }/>
            <Route path = '/gift_parties' component = { GiftParties }/>
            <Route path = '/contacts' component = { Contacts }/>
        </div>
    )
}