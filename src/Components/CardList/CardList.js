import React from 'react';
import Card from '../Card/Card';

import './CardList.css';


const CardList = ({ models }) => {
    return (    
        <div className='Card-List'>
            <p>Done</p>
            {console.log(models)}
            {
                models.map( i => {
                    return (
                        <Card
                            key={i}
                            id={models[i].id}
                            name={models[i].name}
                            segment={models[i].segment}
                            year={models[i].year}
                            thumbnail={models[i].thumbnail}
                            photo={models[i].photo}
                        />
                    )
                })
            }
        </div>
    );
}

export default CardList;