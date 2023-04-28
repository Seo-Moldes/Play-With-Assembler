const button = document.querySelector("#button");
const input = document.querySelector("#input");

button.addEventListener("click", function () {

   let player = {Player: input.value, Score: 0};
   //Si no existe la variable
   // getItem("player") === null
   if(localStorage.hasOwnProperty("players") === false){
    //si no existe me creas el array y añades el objeto//
      let playersArr = [];
      playersArr.unshift(player);

      //la creamos
      localStorage.setItem("players", JSON.stringify(playersArr));

      //"[{Player: Seo, Score: 0}]" ¡¡String!! x el JSON.stringify
      
   } else{ //Ya está creado el array, añadimos objeto
       //"[{Player: Seo, Score: 0}]" --String
      let playersL = JSON.parse(localStorage.getItem("players"));
       //[{Player: Seo, Score: 0}] -- NO String
      
       playersL.unshift(player); //Le añadimos el objeto
       //Ahora hay que devolverlo al localstorage
       localStorage.setItem("players", JSON.stringify(playersL));

   }
})


