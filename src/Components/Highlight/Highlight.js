import React from 'react';

import './Highlight.css';


const Highlight = ({ title, content, image }) => {
    return(
        <div>
            <div>
                <img 
                    alt={title}
                    src={`https://challenge.agenciaego.tech${image}`}
                />
            </div>
            <div>
                <p className='Text-Style'>{title}</p>
                <p>{content}</p>
            </div>
            
        </div>
    )
}

export default Highlight;