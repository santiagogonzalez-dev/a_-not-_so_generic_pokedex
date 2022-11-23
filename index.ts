const pokedex = document.querySelector("#pokemon-list");

var key = "myPokemonList";

function fetchPokemons() {
  console.log(`Fetching the pokemon list and saving it locally`);
  fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}

function getPokemons(key: string): JSON {
  let getPokemonList: string | null = sessionStorage.getItem(key);
  if (getPokemonList !== null) {
    return JSON.parse(getPokemonList);
  } else {
    return fetchPokemons(key);
  }
}

window.onload = function () {
  let pokemon_list: JSON = getPokemons(key);
  console.log(pokemon_list);
};
