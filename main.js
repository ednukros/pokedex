const card$$ = document.querySelector(".card");



function fetchPokemon(){

    fetch('https://pokeapi.co/api/v2/pokemon/')
    .then((response) => {
        return response.json();
    })
    .then((myJson) => {
        console.log(myJson);
    });


}

fetchPokemon();