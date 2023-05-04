
const inputName = document.querySelector("#input");
const buttonStart = document.querySelector("#button");
const mainPageForm = document.querySelector("#formMainPage");
const initGamePage = document.querySelector("#initGameDiv");
const gameStart = document.querySelector("#divGame");
const buttonPage3 = document.querySelector("#buttonPage3");
const initGame = document.querySelector("#init");
const divInitGame = document.querySelector("#divInitGame");
const divForm = document.querySelector("#divForm");
const count10 = document.querySelector("#countDown");
const gameDiv = document.querySelector("#divGame");
const li = document.querySelector("#li");
const finalPage = document.querySelector("#finalPage");

mainPageForm.classList.add("visible");
divForm.classList.add("visible");

//UPLOAD SCORES TO LOCAL STORAGE

buttonStart.addEventListener("click", function (event) {
    //evita que el formulario se envíe y cause errores al desaparecer
    event.preventDefault();

    divForm.classList.remove("visible");
     gameDiv.style.display = "grid";
    initGamePage.classList.add("visible");

const players = {Name: inputName.value, Score: clickCount };

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

//COUNT

let count = 10;


  initGame.addEventListener("click", function() {

     initGamePage.classList.remove("hidden");
     divInitGame.classList.add("visible");

     
     count10.textContent = count;

     const countDown = setInterval(function() {

        count --;

        count10.textContent = count;
        
        if(count === 0) {

          finalPage.classList.add("visible");
          divInitGame.classList.remove("hidden");

            count10.textContent = "Time`s up";
           pararIntervalo(countDown);
           
        }

     }, 1000);

  });

  function pararIntervalo (interval) {

    clearInterval(interval);
  };

  //CLICK COUNT
  let clickCount = 0;

  buttonPage3.addEventListener("click", function() {

    clickCount++;

    li.textContent = clickCount;

    console.log(clickCount);
    
  });

 


















