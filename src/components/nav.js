import React from 'react';
import { Link } from 'react-router-dom';

// whats the difference from using Link vs { Link }

export default () => {
    return (
        <ul className = 'nav nav-tabs mt-3'>
            <li className = 'nav-item'>
                <Link to = '/' className = 'nav-link'>Welcome</Link>
            </li>
            <li className = 'nav-item'>
                <Link to = '/our-macarons' className = 'nav-link'>Our Macarons</Link>
            </li>
            <li className = 'nav-item'>
                <Link to = '/gift_parties' className = 'nav-link'>Gift Parties</Link>
            </li>
            <li className = 'nav-item'>
                <Link to = '/contacts' className = 'nav-link'>Contacts</Link>
            </li>
        </ul>
    )
}