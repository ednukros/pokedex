//Recuperar la lista con el id "podekex" y almacenarla en una variable.

let urlPokemon = `https://pokeapi.co/api/v2/pokemon/`;

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

const getPokemons = async (url) => { //peticion

    try {
        const response = await fetch(url);
        const results = await response.json();
        console.log(results)

        dataPokemons(results.results)
    } catch (error) {

        console.log(error)
        console.log("Algo falló en la petición :(");

    }

}

const dataPokemons = async () => {
    try {

        for (let i = 1; i <= 5; i++) {

            let id = i;
            const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const resul = await resp.json();

            console.log(resul);

           
            const ol$$ = document.querySelector("#pokedex");
            const container$$ = document.querySelector(".container")

            
            const li$$ = document.createElement("li");
            
            const h2$$ = document.createElement('h2');
            h2$$.textContent = resul.name;

            const imageContainer$$ = document.createElement('div');

            const img$$ = document.createElement('img');
            img$$.src = resul.sprites.other.dream_world.front_default;

            const id$$ = document.createElement('h3');
            id$$.textContent = "Nº" + resul.id;



            const types$$ = document.createElement('div');
            
            for (const tipo of resul.types){

                const nameType$$ = document.createElement("span");
                types$$.appendChild(nameType$$);
                nameType$$.textContent = tipo.type.name + " ";
                nameType$$.createElement
            // para poner color al contenedor
            // if (tipo === "grass") {
            
            //      nameType$$.className = "grass"
  
            //   }

            };


            
            li$$.setAttribute("class", "li");
            imageContainer$$.setAttribute("class", "imageContainer");
            types$$.setAttribute("class", "element");
            //nameType$$.setAttribute("class", "nameType");

            li$$.appendChild(h2$$);
            li$$.appendChild(imageContainer$$);
            imageContainer$$.appendChild(img$$);
            li$$.appendChild(id$$);
            li$$.appendChild(types$$);


            ol$$.appendChild(li$$);
        }
    } catch (error) {

        console.log(error)
    }

}

function init() {
    getPokemons(urlPokemon)
}

window.onload = init;



