import './App.css';
import React from 'react';
import EachPokemon from './components/EachPokemon';
import Pokemons from './components/Pokemons';
import info from './data';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currPokemon: 0
    }
    this.nextPokemons = this.nextPokemons.bind(this)
  }

  nextPokemons(numberOfPokemons) {
    this.setState( prevState => ({
      currPokemon: (prevState.currPokemon + 1) % numberOfPokemons,
    }));
    console.log(this)
  }

  render() {
    return (
      <section className='pokemons'>
        <EachPokemon pokemons={ info } />
      </section>
    );
  }
}

export default App;
