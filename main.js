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
    `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=15`
  );
  results = await response.json();

  console.log(results.results);

  for (let i = 1; i < results.results.length; i++) {
    //results.results.length esto es igual que i<= 15;

    resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    resul = await resp.json();
    console.log(resul);
    renderFront(resul);
  }
};

function renderFront(resul) {
  const container$$ = document.querySelector(".container");
  const ol$$ = document.querySelector("#pokedex");

  const cardLi$$ = document.createElement("li");

  const cardFront$$ = document.createElement("div");
  cardLi$$.appendChild(cardFront$$);
  const cardBack$$ = document.createElement("div");
  cardLi$$.appendChild(cardBack$$);
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

    if (tipo.type.name === "grass") {
        
        nameType$$.style.background = "#4A9681"

      }
  }

  // ELEMENTOS CARDBACK
  const h2$$Back = document.createElement("h2");
  h2$$Back.setAttribute("class", "h2Back");
  h2$$Back.textContent = "CardBack";
  cardBack$$.appendChild(h2$$Back);

  const height$$ = document.createElement("p")
  height$$.textContent = "Altura"+ "" + resul.height;
  cardBack$$.appendChild(height$$)


  cardLi$$.setAttribute("class", "li");
  imageContainer$$.setAttribute("class", "imageContainer");
  types$$.setAttribute("class", "element");
  cardFront$$.setAttribute("class", "front");
  cardBack$$.setAttribute("class", "back");

  cardFront$$.appendChild(h2$$);
  cardFront$$.appendChild(imageContainer$$);
  imageContainer$$.appendChild(img$$);
  cardFront$$.appendChild(id$$);
  cardFront$$.appendChild(types$$);

  ol$$.appendChild(cardLi$$);
}

function init() {
  getPokemons();
}

window.onload = init;
