import React, { Component } from 'react';

import apiCall from './api';

const cars = [];

const data = fetch("https://challenge.agenciaego.tech/models", {
    requireHeader: ["origin", "x-requested-with"]
  })
    .then(response => response.json())
    .then(data => {
      this.setState({ models: data });
    });
}

class Models extends Component {
    constructor() {
        super();
        this.state = {
            models: [],
        }
    }   

    

    return (
        <p>{console.log('data')}</p>
    )
}

export default Models;