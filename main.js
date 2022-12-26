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

function drawPokemon() {
    const h2$$ = document.createElement('h2');
    const imageContainer$$ = document.createElement('div');
    const img$$ = document.createElement('img');
    const id$$ = document.createElement('h3');
    const types$$ = document.createElement('div');
    const nameType$$ = document.createElement('span');

    imageContainer$$.setAttribute("class","imageContainer");
    types$$.setAttribute("class","element");
    nameType$$.setAttribute("class","nameType");

    card$$.appendChild(h2$$);
    card$$.appendChild(imageContainer$$);
    imageContainer$$.appendChild(img$$);
    card$$.appendChild(id$$);
    card$$.appendChild(types$$);
    types$$.appendChild(nameType$$);  

    h2$$.textContent = pokemons
    
}
drawPokemon();