//Recuperar la lista con el id "podekex" y almacenarla en una variable.

let urlPokemon = `https://pokeapi.co/api/v2/pokemon/`;

const getPokemons = async (url) => { //peticion


    // try {
        const response = await fetch(url);
        const results = await response.json();
        console.log(results)

        dataPokemons(results.results)
    // } catch (error) {

    //     console.log(error)
    //     console.log("Algo falló en la petición :(");

    // }

<<<<<<< HEAD




}
const dataPokemons = async () => {
    // try {

        

        for (let i = 1; i <= 5; i++) {

            let id = i;
            const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            // const resp = await fetch(urlPokemon + i); 
            const resul = await resp.json();


            console.log(resul)

           
            const ol$$ = document.querySelector("#pokedex");
            const container$$ = document.querySelector(".container")


            
            
            const li$$ = document.createElement("li");
            
            const h2$$ = document.createElement('h2');
            h2$$.textContent = resul.name;
            const imageContainer$$ = document.createElement('div');
            const img$$ = document.createElement('img');
            img$$.src = "resul.sprites.back_default";
            const id$$ = document.createElement('h3');
            id$$.textContent = resul.id;
            const types$$ = document.createElement('div');
            const nameType0$$ = document.createElement('span');
            nameType0$$.textContent = resul.types[0].type.name+ " ";
            const nameType1$$ = document.createElement('span');
            nameType1$$.textContent = resul.types[1].type.name;

            li$$.setAttribute("class", "li");
            imageContainer$$.setAttribute("class", "imageContainer");
            types$$.setAttribute("class", "element");
            //nameType$$.setAttribute("class", "nameType");

            li$$.appendChild(h2$$);
            li$$.appendChild(imageContainer$$);
            imageContainer$$.appendChild(img$$);
            li$$.appendChild(id$$);
            li$$.appendChild(types$$);
            types$$.appendChild(nameType0$$);
            types$$.appendChild(nameType1$$);
            ol$$.appendChild(li$$);
        }
    // } catch (error) {

    //     console.log(error)
    // }

}




function init() {
    getPokemons(urlPokemon)
}

window.onload = init;
=======
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
>>>>>>> b8b55f334892adbefe0c1020a3b7cf1ba21cd737
