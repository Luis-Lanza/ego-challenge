import React from 'react';
import Navigation from '../Components/Navigation/Navigation';
import Search from '../Components/Search/Search';
import CardList from '../Components/CardList/CardList';
import Footer from '../Components/Footer/Footer';
import './App.css';

const App = () => {
  return (
    <div>
      <Navigation />
      <p className='Text-Style-2'>Descubrí todos los modelos</p>
      <Search />
      <CardList />
      <Footer />
    </div>
  );
};


export default App;
