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
  response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=15`
  );
  results = await response.json();

  

  for (let i = 1; i < results.results.length; i++) {
    //results.results.length esto es igual que i<= 150;

    resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    resul = await resp.json();
    
    renderFront();
  }
  
}
// function filter(){

//   const values = Object.entries(resp.json.name);
//   console.log(values.filter(resu => resu.name === "bulbasaur"));
// }

// const inputSearch$$ = document.querySelector(".inputSearch");
// const btnSearch$$ = document.querySelector(".btnSearch");

// btnSearch$$.addEventListener("click", search);



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

  //Creación de circulo detrás imagen
  const circle$$ = document.createElement("div");
  circle$$.setAttribute("id", "circle");
  cardFront$$.appendChild(circle$$);

  const imageContainer$$ = document.createElement("div");
  const img$$ = document.createElement("img");
  img$$.setAttribute("class", "imgFront")
  img$$.src = resul.sprites.other.dream_world.front_default;

  const id$$ = document.createElement("h3");
  id$$.textContent = "#" + resul.id; //nuevo

  const types$$ = document.createElement("div");


  types$$.setAttribute("id", "typeDiv");

  for (const tipo of resul.types) {
    const nameType$$ = document.createElement("span");
    nameType$$.setAttribute("id", "nameType");
    types$$.appendChild(nameType$$);
    nameType$$.textContent = tipo.type.name;


    if (tipo.type.name === "grass") {
      nameType$$.style.backgroundColor = "#4A9681";
      cardBack$$.style.backgroundColor = "#4A9681"
    }
    if (tipo.type.name === "electric") {
      nameType$$.style.backgroundColor = "#FFEA70";
      cardBack$$.style.backgroundColor = "#FFEA70";
    }
    if (tipo.type.name === "normal") {
      nameType$$.style.backgroundColor = "#d8a3ac";
      cardBack$$.style.backgroundColor = "#d8a3ac";

    }
    if (tipo.type.name === "fire") {
      nameType$$.style.backgroundColor = "#FF675C";
      cardBack$$.style.backgroundColor = "#FF675C";

    }
    if (tipo.type.name === "water") {
      nameType$$.style.backgroundColor = "#0596C7";
      cardBack$$.style.backgroundColor = "#0596C7";
    }
    if (tipo.type.name === "ice") {
      nameType$$.style.backgroundColor = "#AFEAFD";
      cardBack$$.style.backgroundColor = "#AFEAFD";
    }
    if (tipo.type.name === "rock") {
      nameType$$.style.backgroundColor = "#999799";
      cardBack$$.style.backgroundColor = "#999799";
    }
    if (tipo.type.name === "flying") {
      nameType$$.style.backgroundColor = "#7AE7C7";
      cardBack$$.style.backgroundColor = "#7AE7C7";
    }

    if (tipo.type.name === "bug") {
      nameType$$.style.backgroundColor = "#A2FAA3";
      cardBack$$.style.backgroundColor = "#A2FAA3";
    }
    if (tipo.type.name === "poison") {
      nameType$$.style.backgroundColor = "#7e54c7";
      cardBack$$.style.backgroundColor = "#7e54c7";
    }
    if (tipo.type.name === "ground") {
      nameType$$.style.backgroundColor = "#d86c00";
      cardBack$$.style.backgroundColor = "#d86c00";
    }
    if (tipo.type.name === "dragon") {
      nameType$$.style.backgroundColor = "#DA627D";
      cardBack$$.style.backgroundColor = "#DA627D";
    }
    if (tipo.type.name === "steel") {
      nameType$$.style.backgroundColor = "#1D8A99";
      cardBack$$.style.backgroundColor = "#1D8A99";
    }
    if (tipo.type.name === "fighting") {
      nameType$$.style.backgroundColor = "#2F2F2F";
      cardBack$$.style.backgroundColor = "#2F2F2F";
    }
    if (tipo.type.name === "psychic") {
      nameType$$.style.backgroundColor = "#FFC6D9";
      cardBack$$.style.backgroundColor = "#FFC6D9";
    }
    if (tipo.type.name === "ghost") {
      nameType$$.style.backgroundColor = "#561D25";
      cardBack$$.style.backgroundColor = "#561D25";
    }
    if (tipo.type.name === "fairy") {
      nameType$$.style.backgroundColor = "#e589a8";
      cardBack$$.style.backgroundColor = "#e589a8";
    }
  };

  // ELEMENTOS CARDBACK
  const h2$$Back = document.createElement("h2");
  h2$$Back.setAttribute("class", "h2Back");
  h2$$Back.textContent = "#" + resul.id;
  cardBack$$.appendChild(h2$$Back);

  const heightWeight$$ = document.createElement("span");
  heightWeight$$.setAttribute("class", "heightWeight")
  cardBack$$.appendChild(heightWeight$$);

  const height$$ = document.createElement("p");
  height$$.textContent = "Altura" + " " + resul.height;
  heightWeight$$.appendChild(height$$);
  const weight$$ = document.createElement("p");
  weight$$.textContent = "Peso" + " " + resul.weight;
  heightWeight$$.appendChild(weight$$);

  const experience$$ = document.createElement("span");
  experience$$.setAttribute("class", "experience")
  cardBack$$.appendChild(experience$$);

  const experienceText$$ = document.createElement("p");
  experienceText$$.textContent = "Experiencia "
  experience$$.appendChild(experienceText$$);
  const experienceResul$$ = document.createElement("p");
  experienceResul$$.textContent = resul.base_experience;
  experience$$.appendChild(experienceResul$$);


  const hp$$ = document.createElement("span");
  hp$$.setAttribute("class", "hp")
  cardBack$$.appendChild(hp$$);
  const hpText$$ = document.createElement("p");
  hpText$$.textContent = "Hp"
  hp$$.appendChild(hpText$$);
  const hpResul$$ = document.createElement("p");
  hpResul$$.textContent = resul.stats[0].base_stat;
  hp$$.appendChild(hpResul$$);

  const attack$$ = document.createElement("span");
  attack$$.setAttribute("class", "hp")
  cardBack$$.appendChild(attack$$);
  const attackText$$ = document.createElement("p");
  attackText$$.textContent = "Ataque";
  attack$$.appendChild(attackText$$);
  const attackResul$$ = document.createElement("p");
  attackResul$$.textContent = resul.stats[1].base_stat;
  attack$$.appendChild(attackResul$$);

  const especialAttack$$ = document.createElement("span");
  especialAttack$$.setAttribute("class", "hp")
  cardBack$$.appendChild(especialAttack$$);
  const especialAttackText$$ = document.createElement("p");
  especialAttackText$$.textContent = "Ataq. Especial"
  especialAttack$$.appendChild(especialAttackText$$);
  const especialAttackResul$$ = document.createElement("p");
  especialAttackResul$$.textContent = resul.stats[4].base_stat;
  especialAttack$$.appendChild(especialAttackResul$$);

  const defense$$ = document.createElement("span");
  defense$$.setAttribute("class", "hp");
  cardBack$$.appendChild(defense$$);
  const defenseText$$ = document.createElement("p");
  defenseText$$.textContent = "Defensa";
  defense$$.appendChild(defenseText$$);
  const defenseTextResul$$ = document.createElement("p");
  defenseTextResul$$.textContent = resul.stats[2].base_stat;
  defense$$.appendChild(defenseTextResul$$);

  const especialDefense$$ = document.createElement("span");
  especialDefense$$.setAttribute("class", "hp");
  cardBack$$.appendChild(especialDefense$$);
  const especialDefenseText$$ = document.createElement("p");
  especialDefenseText$$.textContent = "Def.Especial";
  especialDefense$$.appendChild(especialDefenseText$$);
  const especialDefenseResul$$ = document.createElement("p");
  especialDefenseResul$$.textContent = resul.stats[3].base_stat;
  especialDefense$$.appendChild(especialDefenseResul$$);

  const speed$$ = document.createElement("span");
  speed$$.setAttribute("class", "hp");
  cardBack$$.appendChild(speed$$);
  const speedText$$ = document.createElement("p");
  speedText$$.textContent = "Velocidad";
  speed$$.appendChild(speedText$$);
  const speedResul$$ = document.createElement("p");
  speedResul$$.textContent = resul.stats[5].base_stat;
  speed$$.appendChild(speedResul$$);

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
};





function init() {
  getPokemons();
};

window.onload = init;