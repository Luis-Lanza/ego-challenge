import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';



const Card = ({ name, id, year, price, thumbnail }) => {
  return (
    <div className='Card'>
      <h2>{name}</h2>
      <p className='Text'>{year} | {price}</p>
      <img 
        alt={`${name}_photo`} 
        src={`http://challenge.agenciaego.tech${thumbnail}`}  
      />
      <Link to={`${id}`}>
        <p className='Button'>Ver Modelo</p>
      </Link>
    </div>
  );
}

export default Card;