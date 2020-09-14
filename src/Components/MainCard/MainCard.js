import React from 'react';
import Example from './Example.png';

import './MainCard.css';

const MainCard = (props) => {
    const firstCar = props.models[0];
    return(
        firstCar===undefined ?
        <p className='Text-Style-4'>Loading</p> :
        <div className='MainCard'>
            <div className=''>
                <img src={Example} alt='Thumbnail' />
            </div>
            <div className=''>
                <p className=''>{firstCar.name}</p>
                <p className='Text-Style-2'>Title</p>
                <p className=''>{console.log(firstCar)}</p>
            </div>
            <p>lorem</p>
        </div>
    )
};

export default MainCard;