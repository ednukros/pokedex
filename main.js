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

const getPokemons = async () => {
  response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=15`
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
  img$$.setAttribute("class","imgFront")
  img$$.src = resul.sprites.other.dream_world.front_default;

  const id$$ = document.createElement("h3");
  id$$.textContent = "Nº" + " " + resul.id;

  const types$$ = document.createElement("div");

  for (const tipo of resul.types) {
    const nameType$$ = document.createElement("span");
    types$$.appendChild(nameType$$);
    nameType$$.textContent = tipo.type.name + " ";

    if (tipo.type.name === "grass") {
      nameType$$.style.backgroundColor = "#4A9681";
    }
    if (tipo.type.name === "electric") {
      nameType$$.style.backgroundColor = "#FFEA70";
    }
    if (tipo.type.name === "normal") {
      nameType$$.style.backgroundColor = "#B09398";
    }
    if (tipo.type.name === "fire") {
      nameType$$.style.backgroundColor = "#FF675C";
    }
    if (tipo.type.name === "water") {
      nameType$$.style.backgroundColor = "#0596C7";
    }
    if (tipo.type.name === "ice") {
      nameType$$.style.backgroundColor = "#AFEAFD";
    }
    if (tipo.type.name === "rock") {
      nameType$$.style.backgroundColor = "#999799";
    }
    if (tipo.type.name === "flying") {
      nameType$$.style.backgroundColor = "#7AE7C7";
    }
    if (tipo.type.name === "bug") {
      nameType$$.style.backgroundColor = "#A2FAA3";
    }
    if (tipo.type.name === "poison") {
      nameType$$.style.backgroundColor = "#795663";
    }
    if (tipo.type.name === "ground") {
      nameType$$.style.backgroundColor = "#D2B074";
    }
    if (tipo.type.name === "dragon") {
      nameType$$.style.backgroundColor = "#DA627D";
    }
    if (tipo.type.name === "steel") {
      nameType$$.style.backgroundColor = "#1D8A99";
    }
    if (tipo.type.name === "fighting") {
      nameType$$.style.backgroundColor = "#2F2F2F";
    }
    if (tipo.type.name === "psychic") {
      nameType$$.style.backgroundColor = "#FFC6D9";
    }
    if (tipo.type.name === "ghost") {
      nameType$$.style.backgroundColor = "#561D25";
    }
    if (tipo.type.name === "fairy") {
      nameType$$.style.backgroundColor = "#e589a8";
    }
  }

  // ELEMENTOS CARDBACK
  const h2$$Back = document.createElement("h2");
  h2$$Back.setAttribute("class", "h2Back");
  h2$$Back.textContent = "CardBack";
  cardBack$$.appendChild(h2$$Back);

  const heightWeight$$ = document.createElement("span");
  heightWeight$$.setAttribute("class","heightWeight")
  cardBack$$.appendChild(heightWeight$$);

  const height$$ = document.createElement("p");
  height$$.textContent ="Altura" + " " + resul.height;
  heightWeight$$.appendChild(height$$);
  const weight$$ = document.createElement("p");
  weight$$.textContent ="Peso" + " " + resul.weight;
  heightWeight$$.appendChild(weight$$);
  
  const experience$$ = document.createElement("p");
  experience$$.textContent = "Experience" + " " + resul.base_experience;
  cardBack$$.appendChild(experience$$);

  const hp$$ = document.createElement("p");
  hp$$.textContent = "Hp" + resul.stats[0].base_stat;
  cardBack$$.appendChild(hp$$);

  const attack$$ = document.createElement("p");
  attack$$.textContent = "Ataque" + " " + resul.stats[1].base_stat;
  cardBack$$.appendChild(attack$$);

  const especialAttack$$ = document.createElement("p");
  especialAttack$$.textContent = "Ataque especial" + " " + resul.stats[4].base_stat;
  cardBack$$.appendChild(especialAttack$$);

  const defense$$ = document.createElement("p");
  defense$$.textContent = "Defensa" + " " + resul.stats[2].base_stat;
  cardBack$$.appendChild(defense$$); 

  const especialDefense$$ = document.createElement("p");
  especialDefense$$.textContent = "Defensa especial" + " " + resul.stats[3].base_stat;
  cardBack$$.appendChild(especialDefense$$); 
  
  const speed$$ = document.createElement("p");
  speed$$.textContent = "Velocidad" + " " + resul.stats[5].base_stat;
  cardBack$$.appendChild(speed$$);



  







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
