import React from 'react';

import './Description.css';


const Description = ({ model }) => {
    const { name } = model;
    const { title } = model;
    const { description } = model;
    const { photo } = model;
    return (
        <div className='Text-Style-4' style={{display:'flex'}}>
            <div>
                <img 
                    alt={name + '_photo'}
                    src={`https://challenge.agenciaego.tech${photo}`}
                />
            </div>
            <div>
                <p>{name}</p>
                <p className='Text-Style-2'>{title}</p>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Description;