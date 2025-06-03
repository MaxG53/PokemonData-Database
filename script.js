let data,pokemons;
function init(){
  $.ajaxSetup({async: false});
  
  let link = "https://cautious-space-adventure-q74799prrppqhxwjg-5500.app.github.dev/";
  let route= "/pokemon"
  pokemons = $.getJSON(link+route).responseJSON;
  
  generateCards(pokemons)


}

function generateCards(pokemonList){
  let cardPanel = document.getElementById("cardPanel");
  let build = ``;

  for(let i=0; i < pokemonList[i]; i++){
    let pokemon = pokemonList[i];
    let paddedId = String(pokemon.NameId).padStart(3, '0');
    
    build += `<div id = "card" class="col-md-2 col-sm-3">
                <div class="top-card d-flex justify-content-center">
                    <img class="pokeball-bg" src="pokeball.png" alt="">
                    <img id="photoId" src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${paddedId}.png" alt="">
                </div>`;
    build += `<div class="bottom-card">
                    <span id="NameId">${paddedId}</span>
                    <div id="Name">${pokemon.Name}</div>
                    <div class="type row">`;
    if (pokemon.Type1) build += `<div class="col" id="Type1">${pokemon.Type1}</div>`;
    if (pokemon.Type2) build += `<div class="col" id="Type2">${pokemon.Type2}</div>`;
    build +=       `</div>
                </div>
            </div>`;
  }

  cardPanel.innerHTML = build;

}

// function generateCards(pokemonList){
//   let centerpanel = document.getElementById("cardpanel");
//   let build ="";

//   for(let i=0; i<pokemonList.length; i++){
//     let pokemon = pokemonList[i];
//     // Pad is used for NameId to ensure it remains at 4 digits
//     let paddedId = String(pokemon.NameId).padStart(4, '0');
//     build += `<div class="col-md-3" id="card">`;
//     build += `<div class="top-card">`;
//     build += `<img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${paddedId}.png" alt="${pokemon.Name}">`;
//     build += `</div>`;
//     build += `<div class="bottom-card">`;
//     build += `<span id="NameId">${paddedId}</span>`;
//     build += `<div id="Name">${pokemon.Name}</div>`;
//     build += `<div class="type">`;
//     if (pokemon.Type1) build += `<span id="Type1">${pokemon.Type1}</span>`;
//     if (pokemon.Type2) build += `<span id="Type2">${pokemon.Type2}</span>`;
//     build += `</div>`;
//     build += `</div>`;
//     build += `</div>`;
//   }
//   centerpanel.innerHTML = build;
// }

// function generateCategoryCards(categoryList) {
//   let centerpanel = document.getElementById("centerpanel");
//   let build = "";

//   for (let i = 0; i < categoryList.length; i++) {
//     let pokemon = categoryList[i];
//     let paddedId = String(pokemon.NameId).padStart(4, '0');
//     build += `<div class="col-md-3 card-category">`;
//     build += `<div class="top-card">`;
//     build += `<img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${paddedId}.png" alt="${pokemon.Name}">`;
//     build += `</div>`;
//     build += `<div class="bottom-card">`;
//     build += `<span class="NameId">${paddedId}</span>`;
//     build += `<div class="Name">${pokemon.Name}</div>`;
//     build += `<div class="category">${pokemon.Category || ''}</div>`;
//     build += `</div>`;
//     build += `</div>`;
//   }
//   centerpanel.innerHTML = build;
// }

// function generateEvolutionCards(evolutionList) {
//   let centerpanel = document.getElementById("centerpanel");
//   let build = "";

//   for (let i = 0; i < evolutionList.length; i++) {
//     let pokemon = evolutionList[i];
//     let paddedId = String(pokemon.NameId).padStart(4, '0');
//     build += `<div class="col-md-3 card-evolution">`;
//     build += `<div class="top-card">`;
//     build += `<img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${paddedId}.png" alt="${pokemon.Name}">`;
//     build += `</div>`;
//     build += `<div class="bottom-card">`;
//     build += `<span class="NameId">${paddedId}</span>`;
//     build += `<div class="Name">${pokemon.Name}</div>`;
//     build += `<div class="evolution">`;
//     build += `<div>Evolves From: ${pokemon.EvolvesFrom || 'N/A'}</div>`;
//     build += `<div>Evolves To: ${pokemon.EvolvesTo || 'N/A'}</div>`;
//     build += `</div>`;
//     build += `</div>`;
//     build += `</div>`;
//   }

//   centerpanel.innerHTML = build;
// }

window.onload = init;

function filter(){
 
  console.log(`number found ${pokemonList.length}`)
  generateCards(pokemonList);
}