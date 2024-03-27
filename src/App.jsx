import PokemonCard from "./components/PokemonCard";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";

function App() {
  useEffect(
    () =>  {
      alert("hello pokemon trainer 🤓")
    }, 
    []
 );

 //  const [prevItems, setPrevItems] = useState(items);
  // if (items !== prevItems) {
  //   setPrevItems(items);
  //   setSelection(null);
  // } }
  // // ...

  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

  const [pokemonIndex, setPokemonIndex] = useState(0);
  const afficherPokemon = (index) => {
    setPokemonIndex(index);
    if (index==3) {alert("pika pikachu !!!")}
  };


  /*
  const afficherPokemon = (pokemon) => {
        setPokemonIndex(pokemon);
  };
  /* const next = () => {setPokemonIndex((prevIndex) => (prevIndex === pokemonList.length - 1 ? 0
  : prevIndex + 1)); };
  const last = () => {setPokemonIndex((prevIndex) => (prevIndex === 0 ? pokemonList.length - 1 : prevIndex - 1));}; */

  return (
    <div>
      <NavBar pokemons={pokemonList} afficherPokemon={afficherPokemon}></NavBar>
      <PokemonCard pokemon={pokemonList[pokemonIndex]}></PokemonCard>
    </div>
  );
}

export default App;
