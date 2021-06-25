import React from 'react';
import Pokemons from './Pokemons';
import '../App.css';

class EachPokemon extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <section className='pokemons'>
        {
          pokemons.map((poke) => <Pokemons key={poke.id} pokemon={poke} />)
        }
      </section>
    )
  } 
}

export default EachPokemon;
