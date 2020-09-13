import React from 'react';
import Menu from '../Menu/Menu';
import Ego from './logo.svg'

import './Navigation.css';


const Navigation = () => {
    return (
        <nav className='Bar' style={{display: 'flex', justifyContent: 'space-evenly'}}>
            <img 
                src={Ego} 
                alt='ego-logo' 
                style={{alignSelf: 'flex-start'}} 
            />
            <p>Home</p>
            <p>Ficha Técnica</p>
            <Menu />
        </nav>
    );
}

export default Navigation;