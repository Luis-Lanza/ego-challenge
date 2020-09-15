import React from 'react';
import CarDetails from '../CarDetails/CarDetails';

// const CarDetails = () => {
//   return(
//       <p>Details</p>
//   )
// }

import './Card.css';

// class Card extends Component {
//   constructor(props) {
//     super(props) {
//       this.state = {
//         cClick = false
//       }
//     }
//   }
// }

const Card = ({ name, year, price, thumbnail }) => {
  const handleClick = (e) => {
    e.preventDefault();
    return(<CarDetails />)
  }

  return (
    <div className='Card'>
      <h2>{name}</h2>
      <p className='Text'>{year} | {price}</p>
      <img 
        alt={`${name}_photo`} 
        src={`http://challenge.agenciaego.tech${thumbnail}`}  
      />
      <p className='Button' onClick={handleClick}>Ver Modelo</p>
    </div>
  );
}

export default Card;