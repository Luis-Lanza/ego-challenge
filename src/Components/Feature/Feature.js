import React from 'react';

import './Feature.css';


const Feature = ({ name, description, photo }) => {
    return(
        <div>
            <img 
                alt={`${name}_photo`}
                src={`https://challenge.agenciaego.tech${photo}`}
            />
            <p>{name}</p>
            <p>{description}</p>
        </div>
    );
}

export default Feature;