import React from 'react';
import Example from './Example.png';

import './Card.css';

const Card = () => {
  return (
    <div className='Card'>
      <img alt='Example' src={Example}/>
      <h2>Modelo</h2>
      <p>Año</p>
      <p>Precio</p>
    </div>
  );
}

export default Card;