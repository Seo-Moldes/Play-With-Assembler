const inputName = document.querySelector("#input");
const buttonStart = document.querySelector("#buttonStart");

buttonStart.addEventListener("click", function() {

let player = {Name: inputName.value, Score: 0};

if(localStorage.hasOwnProperty("player") === false) {

let arrayPlayers = [];

arrayPlayers.unshift(player);

localStorage.setItem("player", JSON.stringify(arrayPlayers));

}else {

   let playerLS = JSON.parse(localStorage.getItem("player"));
    
   playerLS.unshift(player);

   localStorage.setItem("player", JSON.stringify(playerLS));
    
}

})

