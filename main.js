//DECLARAMOS LAS VARIABLES QUE UTILIZAREMOS
let urlPrevious;
let urlNext;
let response;
let results;
let resp;
let resul;

//SELECCIONAMOS ELEMENTOS HTML
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");
const ol$$ = document.querySelector("#pokedex");
const container$$ = document.querySelector(".container");

const typeColors = {
  electric: "#FFEA70",
  normal: "#B09398",
  fire: "#FF675C",
  water: "#0596C7",
  ice: "#AFEAFD",
  rock: "#999799",
  flying: "#7AE7C7",
  grass: "#4A9681",
  psychic: "#FFC6D9",
  ghost: "#561D25",
  bug: "#A2FAA3",
  poison: "#795663",
  ground: "#D2B074",
  dragon: "#DA627D",
  steel: "#1D8A99",
  fighting: "#2F2F2F",
  default: "",
};

const getPokemons = async () => {
  response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150`
  );
  results = await response.json();

  console.log(results.results);

  for (let i = 1; i < results.results.length; i++) {
    //results.results.length esto es igual que i<= 150;

    resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    resul = await resp.json();
    console.log(resul);
    renderFront();
  }
};

function renderFront() {
  const container$$ = document.querySelector(".container");
  const ol$$ = document.querySelector("#pokedex");

  const CardLi$$ = document.createElement("li");

  const CardFront$$ = document.createElement("div");
  CardLi$$.appendChild(CardFront$$);
  const CardBack$$ = document.createElement("div");
  CardLi$$.appendChild(CardBack$$);
  // ELEMENTOS CARDFRONT
  const h2$$ = document.createElement("h2");
  h2$$.textContent = resul.name;

  const imageContainer$$ = document.createElement("div");
  const img$$ = document.createElement("img");
  img$$.src = resul.sprites.other.dream_world.front_default;

  const id$$ = document.createElement("h3");
  id$$.textContent = "Nº" + " " + resul.id;

  const types$$ = document.createElement("div");

  for (const tipo of resul.types) {
    const nameType$$ = document.createElement("span");
    types$$.appendChild(nameType$$);
    nameType$$.textContent = tipo.type.name + " ";
    // para poner color al contenedor
    // if (tipo === "grass") {

    //      nameType$$.className = "grass"

    //   }
  }
  // ELEMENTOS CARDBACK
  const h2$$Back = document.createElement("h2");
  h2$$Back.setAttribute("class", "h2Back");
  h2$$Back.textContent = "CardBack";
  CardBack$$.appendChild(h2$$Back);

  CardLi$$.setAttribute("class", "li");
  imageContainer$$.setAttribute("class", "imageContainer");
  types$$.setAttribute("class", "element");
  CardFront$$.setAttribute("class", "front");
  CardBack$$.setAttribute("class", "back");

  CardFront$$.appendChild(h2$$);
  CardFront$$.appendChild(imageContainer$$);
  imageContainer$$.appendChild(img$$);
  CardFront$$.appendChild(id$$);
  CardFront$$.appendChild(types$$);

  ol$$.appendChild(CardLi$$);
}

function init() {
  getPokemons(urlPokemon);
}

window.onload = init;
