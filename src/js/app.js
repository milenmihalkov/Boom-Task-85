import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const pokemonCount = 10;
  // const apiUrl  = ;
  const ul =  document.querySelector("ul");
  
  

  fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${pokemonCount}`)
    .then((response) => response.json()).then(data => {

        data.results.forEach((pokemon) => {
          let listItem  =  document.createElement('li');
          listItem.innerText = pokemon.name;
          ul.appendChild(listItem);
        });
        
    });
  
});
