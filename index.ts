const ulPokemons = document.querySelector("#pokemon-list");

function fetchAndWritePokemons() {
  for (var i = 1; i < 152; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
      .then((response) => response.json())
      .catch((err) => {
        console.log(`Error: ${err}`);
      })
      .then((data) => {
        console.log(data);
        ulPokemons?.insertAdjacentHTML(
          "beforeend",
          `
          <li class="card">
              <h2 class="card-title">${data.id}. ${data.name}</h2>
              <img class="card-image" src="${data.sprites.front_default}"/>
          </li>
        `
        );
      });
  }
}

window.onload = function () {
  fetchAndWritePokemons();
};
