import React, { Component } from 'react';
import Navigation from '../Components/Navigation/Navigation';
import Search from '../Components/Search/Search';
import CardList from '../Components/CardList/CardList';
// import MainCard from '../Components/MainCard/MainCard';
import Footer from '../Components/Footer/Footer';

import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      models: [],
    };
  }

  componentDidMount() {
    fetch("https://challenge.agenciaego.tech/models", {
      requireHeader: ["origin", "x-requested-with"]
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ models: data });
      });
  }

  render() {
    if(this.state.models.lenght === 0) {
      return <h1>Loading</h1>
    } else {
      return (
        <div>
          <Navigation />
          <p className='Text-Style-2'>Descubrí todos los modelos</p>
          <Search />
          <p className='Text-Style-4'>Loading</p> :
          <CardList models={this.state.models} />
          <Footer />
          {/* <MainCard models={models}/> */}
        </div>
      )
    }
  }
}


export default App;
