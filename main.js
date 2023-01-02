//DECLARAMOS LAS VARIABLES QUE UTILIZAREMOS
let urlPrevious;
let urlNext;
let response;
let results;
let resp;
let resul;

const typeColors = {
    electric: '#FFEA70',
    normal: '#B09398',
    fire: '#FF675C',
    water: '#0596C7',
    ice: '#AFEAFD',
    rock: '#999799',
    flying: '#7AE7C7',
    grass: '#4A9681',
    psychic: '#FFC6D9',
    ghost: '#561D25',
    bug: '#A2FAA3',
    poison: '#795663',
    ground: '#D2B074',
    dragon: '#DA627D',
    steel: '#1D8A99',
    fighting: '#2F2F2F',
    default: '',
};










//SELECCIONAMOS ELEMENTOS HTML 
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");
const ol$$ = document.querySelector("#pokedex");
const container$$ = document.querySelector(".container")




const getPokemons = async () => {

    response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150`)
    results = await response.json();

    console.log(results.results);

    for (let i = 1; i < results.results.length; i++) { //results.results.length esto es igual que i<= 150;

        resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        resul = await resp.json();
        console.log(resul)
        renderFront();


    }
}

function renderFront() {


    const container$$ = document.querySelector(".container");
    const ol$$ = document.querySelector("#pokedex");

    const CardLi$$ = document.createElement("li");

    const CardFront$$ = document.createElement("div");
    CardLi$$.appendChild(CardFront$$);
    const CardBack$$ = document.createElement("div");
    CardLi$$.appendChild(CardBack$$);
    // ELEMENTOS CARDFRONT
    const h2$$ = document.createElement('h2');
    h2$$.textContent = resul.name;

    const imageContainer$$ = document.createElement('div');
    const img$$ = document.createElement('img');
    img$$.src = resul.sprites.other.dream_world.front_default;

    const id$$ = document.createElement('h3');
    id$$.textContent = "Nº" + " " + resul.id;

    const types$$ = document.createElement('div');


    for (const tipo of resul.types) {

        const nameType$$ = document.createElement("span");
        types$$.appendChild(nameType$$);
        nameType$$.textContent = tipo.type.name + " ";

        if (tipo.type.name === 'grass') {

            nameType$$.style.backgroundColor = '#4A9681';

        }
        if (tipo.type.name === 'electric') {

            nameType$$.style.backgroundColor = '#FFEA70';

        }
        if (tipo.type.name === 'normal') {

            nameType$$.style.backgroundColor = '#B09398';
    
        }
        if (tipo.type.name === 'fire') {

            nameType$$.style.backgroundColor = '#FF675C';
    
        }
        if (tipo.type.name === 'water') {

            nameType$$.style.backgroundColor = '#0596C7';
    
        }
        if (tipo.type.name === 'ice') {

            nameType$$.style.backgroundColor = '#AFEAFD';
    
        }
        if (tipo.type.name === 'rock') {

            nameType$$.style.backgroundColor = '#999799';
    
        }
        if (tipo.type.name === 'flying') {

            nameType$$.style.backgroundColor =  '#7AE7C7';
    
        }
        if (tipo.type.name === 'bug') {

            nameType$$.style.backgroundColor =  '#A2FAA3';
    
        }
        if (tipo.type.name === 'poison') {

            nameType$$.style.backgroundColor =  '#795663';
    
        }
        if (tipo.type.name === 'ground') {

            nameType$$.style.backgroundColor =  '#D2B074';
    
        }
        if (tipo.type.name === 'dragon') {

            nameType$$.style.backgroundColor =  '#DA627D';
    
        }
        if (tipo.type.name === 'steel') {

            nameType$$.style.backgroundColor =  '#1D8A99';
    
        }
        if (tipo.type.name === 'fighting') {

            nameType$$.style.backgroundColor =  '#2F2F2F';
    
        }
        if (tipo.type.name === 'psychic') {

            nameType$$.style.backgroundColor =  '#FFC6D9';
    
        }
        if (tipo.type.name === 'ghost') {

            nameType$$.style.backgroundColor =  '#561D25';
    
        }
        if (tipo.type.name === 'fairy') {

            nameType$$.style.backgroundColor =  '#e589a8';
    
        }
        
        
       
    
    }
   
 
   // ELEMENTOS CARDBACK
const h2$$Back = document.createElement('h2');
h2$$Back.setAttribute("class", "h2Back")
h2$$Back.textContent = "CardBack"
CardBack$$.appendChild(h2$$Back)

CardLi$$.setAttribute("class", "li");
imageContainer$$.setAttribute("class", "imageContainer");
types$$.setAttribute("class", "element");
CardFront$$.setAttribute("class", "front")
CardBack$$.setAttribute("class", "back")

CardFront$$.appendChild(h2$$);
CardFront$$.appendChild(imageContainer$$);
imageContainer$$.appendChild(img$$);
CardFront$$.appendChild(id$$);
CardFront$$.appendChild(types$$);


ol$$.appendChild(CardLi$$);
    
};











function init() {
    getPokemons()
}

window.onload = init;











