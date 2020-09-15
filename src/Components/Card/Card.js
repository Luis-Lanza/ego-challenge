import React from 'react';

import './Card.css';

const Card = ({ name, year, price, thumbnail }) => {
  return (
    <div className='Card'>
      <h2>{name}</h2>
      <p className='Text'>{year} | {price}</p>
      <img 
        alt={`${name}_photo`} 
        src={`http://challenge.agenciaego.tech${thumbnail}`}  
      />
      <p className='Button'>Ver Modelo</p>
    </div>
  );
}

export default Card;