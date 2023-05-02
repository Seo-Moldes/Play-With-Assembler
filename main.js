
const inputName = document.querySelector("#input");
const buttonStart = document.querySelector("#button")
const mainPageForm = document.querySelector("#formMainPage");
const initGamePage = document.querySelector("#initGameDiv");
const gameStart = document.querySelector("#divGame");
const buttonPage3 = document.querySelector("#buttonPage3");
const initGame = document.querySelector("#init");
const divInitGame = document.querySelector("#divInitGame");
const divForm = document.querySelector("#divForm");

mainPageForm.classList.add("visible");
divForm.classList.add("visible");

//UPLOAD SCORES TO LOCAL STORAGE

buttonStart.addEventListener("click", function (event) {
    //evita que el formulario se envíe y cause errores al desaparecer
    event.preventDefault();

    divForm.classList.remove("hidden");
    mainPageForm.classList.remove("hidden");
    initGamePage.classList.add("visible");

const players = {Name: inputName.value, Score: 0};

if(localStorage.hasOwnProperty("players") === false ) {


    const arrayPlayer = [];

    arrayPlayer.unshift(players);
    
    localStorage.setItem("players", JSON.stringify(arrayPlayer));

} else {

const playersLocal = JSON.parse(localStorage.getItem("players")); 

playersLocal.unshift(players);

localStorage.setItem("players", JSON.stringify(playersLocal));

}

});


  initGame.addEventListener("click", function() {

     initGamePage.classList.remove("hidden");
     divInitGame.classList.add("visible");

     let contador = 10;

     

  });


















