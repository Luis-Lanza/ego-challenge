import React from 'react';
import Feature from '../Feature/Feature';

import './FeatureNav.css';


const FeatureNav = ({ model }) => {
    return (
        <div>
            <Feature model={model} />
        </div>
    );
}

export default FeatureNav;