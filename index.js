var ulPokemons = document.querySelector("#pokemon-list");
function fetchAndWritePokemons() {
    for (var i = 1; i < 152; i++) {
        fetch("https://pokeapi.co/api/v2/pokemon/".concat(i, "/"))
            .then(function (response) { return response.json(); })["catch"](function (err) {
            console.log("Error: ".concat(err));
        })
            .then(function (data) {
            console.log(data);
            ulPokemons === null || ulPokemons === void 0 ? void 0 : ulPokemons.insertAdjacentHTML("beforeend", "\n          <li class=\"card\">\n              <h2 class=\"card-title\">".concat(data.id, ". ").concat(data.name, "</h2>\n              <img class=\"card-image\" src=\"").concat(data.sprites.front_default, "\"/>\n          </li>\n        "));
        });
    }
}
window.onload = function () {
    fetchAndWritePokemons();
};
