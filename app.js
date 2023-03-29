

const API_BASE = "https://rickandmortyapi.com/api";
const API_CHARACTERS = "https://rickandmortyapi.com/api/character";
const llamadaaApi = fetch(API_CHARACTERS);

llamadaaApi
    .then((data) => {
    	return data.json();
    })
    .then((data) => {
     const $section = document.getElementById("section");
     const characters = data.results;
     console.log(characters[0]);

     
     for(let i = 0; i <characters.length; i++) {
        $section.innerHTML += `
        <div class="card">
            <img class="img-article" src=${characters[i].image} alt="Imagen del personaje">
            <div class="div-texto-card">
              <h3 class="h3-js">${characters[i].name}</h3>
              <p class="p-js">${characters[i].species}</p>
              <p class="p-js">${characters[i].status}</p>
            </div>
        </div>`;
     }
    })
    .catch((err) => {
    	console.log(err);
    });