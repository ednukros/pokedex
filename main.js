const card$$ = document.querySelector(".card");

function itemsFetch (id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
     .then(res => res.json())
     .then(pokemons => console.log(pokemons))
}
1

function itemFetch (number){
    for (let i = 1; i <= number; i++) {
    itemsFetch(i);
    }
}
itemFetch(10);
