const card$$ = document.querySelector(".card");

const itemPokemons = async () => {
    const res = await fetch ("https://pokeapi.co/api/v2/pokemon/");
    const resItem = await res.json();
    console.log(resItem);
}
itemPokemons();