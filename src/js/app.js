import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const apiUrl  = 'https://pokeapi.co/api/v2/pokemon';
  const ul      =  document.querySelector("ul");
  
  
async function getData(){

}
  fetch(apiUrl)
    .then(response => {

        let data = response.json();

        for(let i = 0; i<data.length; i++){
          let listItem  =  document.createElement('li');
          ul.appendChild(listItem);
        }
        console.log(data);

    })
    .catch(error => {
        console.log(error);
    });
  
});
