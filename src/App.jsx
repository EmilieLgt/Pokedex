import PokemonCard from "./components/PokemonCard";
import { useState } from "react";
import NavBar from "./components/NavBar"


function App() {

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

  /* const previousBtn = document.querySelector =".btnPrecedent"
  */ 
  const next = () => {setPokemonIndex((prevIndex) => (prevIndex === pokemonList.length - 1 ? 0 : prevIndex + 1));
};
  const last = () => {
  setPokemonIndex((prevIndex) => (prevIndex === 0 ? pokemonList.length - 1 : prevIndex - 1));
};
  
  return (
    <div>
      <NavBar last={last} next={next}></NavBar>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} ></PokemonCard>
      
    </div>
  );
  
}




export default App;
