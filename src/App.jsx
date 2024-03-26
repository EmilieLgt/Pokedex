import PokemonCard from "./components/PokemonCard";
import { useState } from "react";


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

  const next = () => {setPokemonIndex((prevIndex) => (prevIndex === pokemonList.length - 1 ? 0 : prevIndex + 1));
};
  const last = () => {
  setPokemonIndex((prevIndex) => (prevIndex === 0 ? pokemonList.length - 1 : prevIndex - 1));
};
  
  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} ></PokemonCard>
      <button onClick={last}>Précédent</button>
      <button onClick={next}>Suivant</button>
    </div>
  );
  
}




export default App;
