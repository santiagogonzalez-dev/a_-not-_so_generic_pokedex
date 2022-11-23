const pokedex = document.querySelector("#pokemon-list");

var key = "myPokemonList";

function fetchAPI(key: string) {
  // I'm using sessionStorage so that we only ping the PokéAPI only once per tab
  // open, and the storage persist during refreshes which is what we want, after
  // closing the tab it will be deleted.
  if (sessionStorage.getItem(key) !== null) {
    // If the Pokémon list is present in sessionStorage we do nothing
    console.log(`Found the pokemon list in the browser storage`);
    return sessionStorage.getItem(key);
  }

  // If the Pokémon list is not present in sessionStorage we fetch it
  console.log(`Fetching the pokemon list and saving it locally`);
  return fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
    .then((response) => response.json())
    .then((json) => {
      sessionStorage.setItem(key, JSON.stringify(json));
      return sessionStorage.getItem(key);
    });
}

window.onload = function () {
  let pokemon_list = fetchAPI(key);
  console.log(pokemon_list);
};
