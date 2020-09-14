import React, { Component } from 'react';
import Navigation from '../Components/Navigation/Navigation';
import Search from '../Components/Search/Search';
import CardList from '../Components/CardList/CardList';
// import MainCard from '../Components/MainCard/MainCard';
import Footer from '../Components/Footer/Footer';
// import data from '../api/data.js';

import './App.css';

// const models = data;

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
        console.log(data);
        this.setState({ models: data });
      });
  }

  render() {
    const { models } = this.state;
      return (
        <div>
          <Navigation />
          <p className='Text-Style-2'>Descubrí todos los modelos</p>
          <Search />
          <CardList models={models}/>
          <Footer />
          {/* <MainCard /> */}
        </div>
      )
  }
}


export default App;
