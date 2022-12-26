const card$$ = document.querySelector(".card");

const itemsPokemons = async () => {
    const res = await fetch ("https://pokeapi.co/api/v2/pokemon/");
    const resItems = await res.json();
    console.log(resItems);
}
itemsPokemons();