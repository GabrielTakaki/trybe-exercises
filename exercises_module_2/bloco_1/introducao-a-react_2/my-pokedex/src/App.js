import './App.css';
import React from 'react';
import Pokemons from './components/Pokemons';
import info from './data';

class App extends React.Component {
  render() {
    return (
      <section className='pokemons'>
        {
          info.map((poke) => <Pokemons pokemon={poke} />)
        }
      </section>
    );
  }
}

export default App;
