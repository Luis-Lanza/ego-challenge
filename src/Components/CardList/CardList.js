import React from 'react';
import Card from '../Card/Card';

import './CardList.css';


const CardList = ({ models }) => {
    return (    
        <div className='Card-List'>
            {
                models.map( i => {
                    return (
                        <Card
                            key={i}
                            id={i.id}
                            name={i.name}
                            segment={i.segment}
                            year={i.year}
                            thumbnail={i.thumbnail}
                            photo={i.photo}
                        />
                    )
                })
            }
        </div>
    );
}

export default CardList;