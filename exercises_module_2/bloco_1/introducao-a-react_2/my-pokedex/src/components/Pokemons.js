import React from 'react';
import '../App.css';

class Pokemons extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div className='eachPoke'>
        <main className='infos'>
          <p>{pokemon.name}</p>
          <p>{pokemon.type}</p>
          <p>Average weight: {pokemon.averageWeight.value}{pokemon.averageWeight.measurementUnit}</p>
        </main>  
        <img src={pokemon.image} alt={pokemon.name}/>
      </div>
    );
  }
}

export default Pokemons;
