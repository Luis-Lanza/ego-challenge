import React from 'react';
import Example from './Example.png';

import './MainCard.css';

const MainCard = () => {
    return(
        <div className='MainCard'>
            <div className=''>
                <img src={Example} alt='Thumbnail' />
            </div>
            <div className=''>
                <p className=''>Model</p>
                <p className='Text-Style-2'>Title</p>
                <p className=''>lorem</p>
            </div>
        </div>
    )
};

export default MainCard;