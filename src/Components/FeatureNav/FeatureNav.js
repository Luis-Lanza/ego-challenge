import React from 'react';
import Feature from '../Feature/Feature';

import './FeatureNav.css';


const FeatureNav = ({ model }) => {
    const { model_features } = model;
    return (
        <div className='Card-List'>
            {
                model_features.map( (feature, i) => {
                    return (
                        <Feature
                            key={i}
                            name={feature.name}
                            description={feature.description}
                            photo={feature.photo}
                        />
                    )
                })
            }
        </div>
    );
}

export default FeatureNav;