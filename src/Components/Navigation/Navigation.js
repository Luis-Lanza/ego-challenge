import React from 'react';
import Menu from '../Menu/Menu';
import Ego from './logo.svg'
import { Link } from 'react-router-dom';

import './Navigation.css';


const Navigation = () => {
    return (
        <nav className='Bar Text-Style-4' style={{display: 'flex', justifyContent: 'space-evenly'}}>
            <Link to='/'>
                <img 
                    src={Ego} 
                    alt='ego-logo' 
                    style={{alignSelf: 'flex-start'}} 
                />
            </Link>
            <Link to='/'>
                <p>Modelos</p>
            </Link>
            <p>Ficha de Modelo</p>
            <Menu />
        </nav>
    );
}

export default Navigation;