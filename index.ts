const pokedex = document.querySelector("#pokemon-list");

var key = "myPokemonList";

async function fetchPokemons() {
  console.log(`Fetching the pokemon list and saving it locally`);
  return await fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
    .then((response) => response.json())
    .then((data) => {
      sessionStorage.setItem(key, JSON.stringify(data));
      return data;
    })
    .catch(function (err) {
      console.log(`Error: ${err}`);
    });
}

// function insertOnList(data) {

// }

function getPokemons(key: string) {
  let getPokemonList: string | null = sessionStorage.getItem(key);
  if (getPokemonList !== null) {
    // fetchPokemons();
    console.log("It's not null");
    const pokemon = JSON.parse(getPokemonList);
    // console.log(pokemon.results[0].name);
    // console.log(pokemon.results[0]);
    fetch(pokemon.results[0].url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.name);

        pokedex!.insertAdjacentHTML(
          "beforeend",
          `
        <li class="card">
            <img class="card-image" src="${data.sprites.front_default}"/>
            <h2 class="card-title">${data.id}. ${data.name}</h2>
            <p class="card-subtitle">Type: ${data.type}</p>
        </li>
      `
        );
      });
  }
}

window.onload = function () {
  getPokemons(key);
};
