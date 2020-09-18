import React, { Component } from 'react';
import Description from '../Description/Description';
import FeatureNav from '../FeatureNav/FeatureNav';
import HighlightList from '../HighlightList/HighlightList';

import './CarDetails.css';

class CarDetails extends Component {
    constructor() {
      super();
      this.state = {
        model: [],
      };
    }

    async getData() {
      try {
        const response = await fetch(
          `https://challenge.agenciaego.tech/models/${this.props.match.params.id}`, {
        requireHeader: ["origin", "x-requested-with"]
        });
        const data = await response.json();
        console.log(data);
        return this.setState({ model: data })
      } 
      catch (err) {
        console.error(err)
      }
    }
    
    componentDidMount() {
      this.getData();
    }

    // componentDidMount() {
    //     fetch(`https://challenge.agenciaego.tech/models/${this.props.match.params.id}`, {
    //       requireHeader: ["origin", "x-requested-with"]
    //     })
    //       .then(response => response.json())
    //       .then(data => {
    //         console.log(data);
    //         this.setState({ model: data });
    //       });
    //   }
  
    render() {
        const { model } = this.state;
        if (model && model.model_features) {
          return(
            <div>
              <Description model={model}/>
              <FeatureNav model={model}/>
              <HighlightList model={model} />
            </div>
        )}  else return null;
    }   
}

export default CarDetails;