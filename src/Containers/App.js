import React, { Component } from 'react';
// import CarDetails from '../Components/CarDetails/CarDetails';
// import Navigation from '../Components/Navigation/Navigation';
// import Search from '../Components/Search/Search';
// import CardList from '../Components/CardList/CardList';
// import Footer from '../Components/Footer/Footer';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Sidebar from '../Components/Sidebar/Sidebar';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      models: []
    };
  }

  // async getData() {
  //   try {
  //     const response = await fetch(
  //       "https://challenge.agenciaego.tech/models", {
  //     requireHeader: ["origin", "x-requested-with"]
  //     });
  //     const data = await response.json();
  //     console.log(data);
  //     return this.setState({ models: data })
  //   } 
  //   catch (err) {
  //     console.error(err)
  //   }
  // }
  
  // componentDidMount() {
  //   this.getData();
  // }
  
  render() {
    // const { models } = this.state;
    return (
      <Sidebar 
        height={"100vh"}
        width={300}
      >
        <p>Text 1</p>
        <p>Text 2</p>
        <p>Text 3</p>
        <p>Text 4</p>
        <p>Text 5</p>
      </Sidebar>
        // <Router>
        //   <div>
        //     <Navigation />
        //     <Switch>
        //       <Route path='/' exact>
        //         <p className='Text-Style-2'>Descubrí todos los modelos</p>
        //         <Search />
        //         <CardList models={models}/>
        //       </Route>
        //       <Route 
        //         path='/:id' 
        //         component={(props)=> <CarDetails {...props}/>}
        //       >    
        //       </Route>
        //     </Switch>
            
        //     <Footer />
        //   </div>
        // </Router>
    )
  }
}


export default App;
