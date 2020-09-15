import React from 'react';
import Card from '../Card/Card';

import './CardList.css';


const CardList = ({ models }) => {
    return (    
        <div className='Card-List'>
            {
                models.map( (car, i) => {
                    return (
                        <Card
                            key={i}
                            id={car.id}
                            name={car.name}
                            segment={car.segment}
                            price={car.price}
                            year={car.year}
                            thumbnail={car.thumbnail}
                            photo={car.photo}
                        />
                    )
                })
            }
        </div>
    );
}

export default CardList;