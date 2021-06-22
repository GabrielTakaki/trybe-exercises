import React from 'react';
import '../App.css';

class Pokemons extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div className='eachPoke'>
        <p>{pokemon.name}</p>
        <p>{pokemon.type}</p>
        <p>Average weight: {pokemon.averageWeight.value}{pokemon.averageWeight.measurementUnit}</p>
        <aside><img src={pokemon.image} alt={pokemon.name}/></aside>
      </div>
    );
  }
}

export default Pokemons;
