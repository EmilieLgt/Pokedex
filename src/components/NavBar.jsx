function NavBar ({pokemons, afficherPokemon}) {



return (
 <nav>
     {pokemons.map((pokemon, index) => (
        <button key={pokemon.name} onClick={() => {afficherPokemon(index)}}>
          {pokemon.name}
        </button>
      ))}
</nav>
) 


}


export default NavBar