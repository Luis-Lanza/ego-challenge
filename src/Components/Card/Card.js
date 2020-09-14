import React from 'react';
import Example from './Example.png';

import './Card.css';

const Card = ({ id, name, year, price }) => {
  return (
    <div className='Card'>
      <img alt='Example' src={Example}/>
      <h2>{name}</h2>
      <p>{year}</p>
      <p>{price}</p>
    </div>
  );
}

export default Card;