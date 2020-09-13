import React from 'react';
import Example from './Example.png';

import './MainCard.css';

const MainCard = (props) => {
    console.log(props.models[0]);
    return(
        <div className='MainCard' >
            <div className=''>
                <img src={Example} alt='Thumbnail' />
            </div>
            <div className=''>
                <p className=''>Modelo</p>
                <p className='Text-Style-2'>Title</p>
                <p className=''>Description</p>
            </div>
                
            <p>lorem</p>
        </div>
    )
};

export default MainCard;