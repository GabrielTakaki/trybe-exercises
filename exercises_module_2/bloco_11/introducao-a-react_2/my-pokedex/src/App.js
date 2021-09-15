import './App.css';
import React from 'react';
import Pokemon from './components/Pokemon';
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
        <Pokemon pokemons={ info } />
      </section>
    );
  }
}

export default App;
