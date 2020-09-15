import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import Description from '../Description/Description';
// import FeatureNav from '../FeatureNav/FeatureNav';
import Feature from '../Feature/Feature'
import Highlight from '../Highlight/Highlight';

import './CarDetails.css';

class CarDetails extends Component {
    constructor() {
      super();
      this.state = {
        model: [],
      };
    }
    
    componentDidMount() {
        fetch("https://challenge.agenciaego.tech/models/1", {
          requireHeader: ["origin", "x-requested-with"]
        })
          .then(response => response.json())
          .then(data => {
            console.log(data);
            this.setState({ model: data });
          });
      }
  
    render() {
        const { model } = this.state;
        return(
        <div>
            <Navigation />
            <Description model={model}/>
            <Feature model={model}/>
            {/* <FeatureNav model={model}/> */}
            <Highlight model={model}/>
        </div>
    )
    }   
}

export default CarDetails;