import React from 'react';

import apiCall from './api';

const cars = [];

const data = apiCall('https://challenge.agenciaego.tech/models')
    .then(response=> console.log(response))
    .then(response => cars[response])
    .then(console.log(cars))

const Models = () => {
    return (
        <p>{console.log('mount')}</p>
    )
}

export default Models;