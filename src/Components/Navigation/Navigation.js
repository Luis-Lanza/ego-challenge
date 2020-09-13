import React from 'react';
import Menu from '../Menu/Menu';
import Ego from './logo.svg'

import './Navigation.css';


const Navigation = () => {
    return (
        <nav className='Bar Text-Style-4' style={{display: 'flex', justifyContent: 'space-evenly'}}>
            <img 
                src={Ego} 
                alt='ego-logo' 
                style={{alignSelf: 'flex-start'}} 
            />
            <p>Modelos</p>
            <p>Ficha de Modelo</p>
            <Menu />
        </nav>
    );
}

export default Navigation;