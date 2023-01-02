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
const container$$ = document.querySelector(".container")

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
            id$$.textContent = "Nº"+ " " + resul.id;
            
            const types$$ = document.createElement('div');
            
            for (const tipo of resul.types){

                const nameType$$ = document.createElement("span");
                types$$.appendChild(nameType$$);
                nameType$$.textContent = tipo.type.name + " ";
            // para poner color al contenedor
            // if (tipo === "grass") {
            
            //      nameType$$.className = "grass"
  
            //   }
            };
            // ELEMENTOS CARDBACK
            const h2$$Back = document.createElement('h2');
            h2$$Back.setAttribute("class", "h2Back")
            h2$$Back.textContent = "CardBack"
            CardBack$$.appendChild(h2$$Back)

            CardLi$$.setAttribute("class", "li");
            imageContainer$$.setAttribute("class", "imageContainer");
            types$$.setAttribute("class", "element");
            CardFront$$.setAttribute("class","front")
            CardBack$$.setAttribute("class","back")

            CardFront$$.appendChild(h2$$);
            CardFront$$.appendChild(imageContainer$$);
            imageContainer$$.appendChild(img$$);
            CardFront$$.appendChild(id$$);
            CardFront$$.appendChild(types$$);


            ol$$.appendChild(CardLi$$);
    // const li$$ = document.createElement("li");
    // const cardFront = document.createElement("div");
    // const h2$$ = document.createElement('h2');
    // const imageContainer$$ = document.createElement('div');
    // const img$$ = document.createElement('img');
    // const id$$ = document.createElement('h3');
    // const types$$ = document.createElement('div');
    // const CardBack$$ = document.createElement("div");
    // CardLi$$.setAttribute("class", "li");

    // h2$$.textContent = resul.name;
    // img$$.src = resul.sprites.other.dream_world.front_default;
    // id$$.textContent = "Nº" + resul.id;


    // //CONTROLAMOS QUE LOS POKEMON CON MÁS DE UN TYPE SEAN PINTADOS
    // for (const tipo of resul.types) {

        
    //     const nameType$$ = document.createElement("span");
    //     types$$.appendChild(nameType$$);
    //     nameType$$.textContent = tipo.type.name + " ";

    //     li$$.setAttribute("class", "li");
    //     imageContainer$$.setAttribute("class", "imageContainer");
    //     types$$.setAttribute("class", "element");
    //     nameType$$.setAttribute("class", "nameType");
    //     cardFront.setAttribute("class","cardFront")

    //     cardFront.appendChild(h2$$);
    //     cardFront.appendChild(imageContainer$$);
    //     imageContainer$$.appendChild(img$$);
    //     cardFront.appendChild(id$$);
    //     cardFront.appendChild(types$$);
    //     li$$.appendChild(cardFront);
    //     ol$$.appendChild(li$$);
    // }
    // // ELEMENTOS CARDBACK
    // const h2$$Back = document.createElement('h2');
    // h2$$Back.setAttribute("class", "h2Back")
    // h2$$Back.textContent = "CardBack"
    // CardBack$$.appendChild(h2$$Back)

    // CardLi$$.setAttribute("class", "li");
    // imageContainer$$.setAttribute("class", "imageContainer");
    // types$$.setAttribute("class", "element");
    // CardFront$$.setAttribute("class","front")
    // CardBack$$.setAttribute("class","back")

    // CardFront$$.appendChild(h2$$);
    // CardFront$$.appendChild(imageContainer$$);
    // imageContainer$$.appendChild(img$$);
    // CardFront$$.appendChild(id$$);
    // CardFront$$.appendChild(types$$);


    // ol$$.appendChild(CardLi$$);




}


// function renderBack() {

//     const li$$ = document.createElement("li");
//     const cardFront = document.createElement("div");
//     const h2$$ = document.createElement('h2');
//     const imageContainer$$ = document.createElement('div');
//     const img$$ = document.createElement('img');
//     const id$$ = document.createElement('h3');
//     const types$$ = document.createElement('div');

//     h2$$.textContent = resul.name;
//     img$$.src = resul.sprites.front_default;
//     id$$.textContent = "Nº" + resul.id;
//     for (const tipo of resul.types) {

        
//         const nameType$$ = document.createElement("span");
//         types$$.appendChild(nameType$$);
//         nameType$$.textContent = tipo.type.name + " ";

//         li$$.setAttribute("class", "li");
//         imageContainer$$.setAttribute("class", "imageContainer");
//         types$$.setAttribute("class", "element");
//         nameType$$.setAttribute("class", "nameType");
//         cardFront.setAttribute("class","cardFront")

//         cardFront.appendChild(h2$$);
//         cardFront.appendChild(imageContainer$$);
//         imageContainer$$.appendChild(img$$);
//         cardFront.appendChild(id$$);
//         cardFront.appendChild(types$$);
//         li$$.appendChild(cardFront);
//         ol$$.appendChild(li$$);
//     }

// }



function init() {
    getPokemons()
}

window.onload = init;











// function get async (e) => {
//     try {


//         response = await fetch(urlPokemon);
//         resul = await response.json();
//         disabledBtnPrevious();
//         let pokemons = getPokemons(results);
//         assignUrl(results);
//         dataPokemons(pokemons);



//     } catch (error) {

//     }
// });
// console.log( "hola" + results);


// document.addEventListener("click", async (e) => {

//     if (e.target.matches("#next")) {
//         try {
//             response = await fetch(urlNext);
//             results = await response.json();
//             enableBtnPrevious();
//             let pokemons = getPokemons(results);
//             assignUrl(results);
//             dataPokemons(pokemons);

//         } catch (error) {

//         }
//     }

//     if (e.target.matches("#previous")) {
//         try {
//             response = await fetch(urlPrevious);
//             results = await response.json();




//             enableBtnPrevious();
//             let pokemons = getPokemons(results);
//             assignUrl(results);

//             if (urlPrevious === null) {
//                 disabledBtnPrevious();
//             }
//             dataPokemons(pokemons);
//         } catch (error) {

//         }
//     }

// })

// function getPokemons(json) {
//     return json.results;
// }

// function disabledBtnPrevious() { //deshabilitar btn si no hay pagina previa
//     previous.disabled = true;
// }

// function enableBtnPrevious() { //habilitar btn si hay pagina previa
//     previous.disabled = flase;
// }

// function assignUrl(results) {
//     urlNext = results.next;
//     urlPrevious = results.previous;
// }

// function obtenerPokemones(results) {
//     return json.results;

// }
// const dataPokemons = async (pokemons) => {
//     for (const pokemon of pokemons) {


//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
//         const results = await response.json();

//         const ol$$ = document.querySelector("#pokedex");
//         const container$$ = document.querySelector(".container")


//         const li$$ = document.createElement("li");

//         const h2$$ = document.createElement('h2');
//         h2$$.textContent = results.name;

//         const imageContainer$$ = document.createElement('div');

//         const img$$ = document.createElement('img');
//         img$$.src = results.sprites.other.dream_world.front_default;

//         const id$$ = document.createElement('h3');
//         id$$.textContent = "Nº" + results.id;



//         const types$$ = document.createElement('div');

//         for (const tipo of results.types) {

//             const nameType$$ = document.createElement("span");
//             types$$.appendChild(nameType$$);
//             nameType$$.textContent = tipo.type.name + " ";
//             nameType$$.createElement
//             li$$.setAttribute("class", "li");
//             imageContainer$$.setAttribute("class", "imageContainer");
//             types$$.setAttribute("class", "element");
//             nameType$$.setAttribute("class", "nameType");

//             li$$.appendChild(h2$$);
//             li$$.appendChild(imageContainer$$);
//             imageContainer$$.appendChild(img$$);
//             li$$.appendChild(id$$);
//             li$$.appendChild(types$$);


//             ol$$.appendChild(li$$);
//         }




//     };
// }

// const getPokemons = async (url) => { //peticion

//     try {
//         const response = await fetch(url);
//         const results = await response.json();
//         console.log(results)

//         dataPokemons(results.results)
//     } catch (error) {

//         console.log(error)
//         console.log("Algo falló en la petición :(");

//     }

// }

// const dataPokemons = async (pokemons) => {
//     try {

//         for (let i = 1; i <= 150; i++) {

//             let id = i;
//             const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
//             const resul = await resp.json();

//             console.log(resul);


//             const ol$$ = document.querySelector("#pokedex");
//             const container$$ = document.querySelector(".container")


//             const li$$ = document.createElement("li");

//             const h2$$ = document.createElement('h2');
//             h2$$.textContent = resul.name;

//             const imageContainer$$ = document.createElement('div');

//             const img$$ = document.createElement('img');
//             img$$.src = resul.sprites.other.dream_world.front_default;

//             const id$$ = document.createElement('h3');
//             id$$.textContent = "Nº" + resul.id;



//             const types$$ = document.createElement('div');

//             for (const tipo of resul.types){

//                 const nameType$$ = document.createElement("span");
//                 types$$.appendChild(nameType$$);
//                 nameType$$.textContent = tipo.type.name + " ";
//                 nameType$$.createElement
//             // para poner color al contenedor
//             // if (tipo === "grass") {

//             //      nameType$$.className = "grass"

//             //   }

//             };



//             li$$.setAttribute("class", "li");
//             imageContainer$$.setAttribute("class", "imageContainer");
//             types$$.setAttribute("class", "element");
//             //nameType$$.setAttribute("class", "nameType");

//             li$$.appendChild(h2$$);
//             li$$.appendChild(imageContainer$$);
//             imageContainer$$.appendChild(img$$);
//             li$$.appendChild(id$$);
//             li$$.appendChild(types$$);


//             ol$$.appendChild(li$$);
//         }
//     } catch (error) {

//         console.log(error)
//     }

// }