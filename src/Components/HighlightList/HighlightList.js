import React from 'react';
import Highlight from '../Highlight/Highlight';

import './HighlightList.css';

const HighlightList = ({ model }) => {
    const { model_highlights } = model;
    return (
        <div className='Highlight-List'>
            {
                model_highlights.map( (highlight, i) => {
                    return(
                        <Highlight
                        key={i}
                        image={highlight.image}
                        content={highlight.content}
                        title={highlight.title}
                        />
                    )
                })
            }
        </div>
    )
}


export default HighlightList;