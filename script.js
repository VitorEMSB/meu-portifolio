let divPlay = document.getElementById("play");
let divPlayP = document.querySelector("#play p");

divPlay.addEventListener("click", () => {
    let frasesLetreiro = document.querySelectorAll("#conteudoEntradaLetreiro p");    
    for(frase of frasesLetreiro) {
        if(frase.classList.value == "") {    
            frase.classList.add("letreiro");
            divPlayP.innerText = "OFF";
            divPlay.style.boxShadow = "1px 10px 10px rgb(255, 74, 74)"; 
            frase.style.transition = "0.5s"; 
        } else if(frase.classList.value == "letreiro") {
            frase.classList.remove("letreiro");
            divPlayP.innerText = "ON";
            divPlay.style.boxShadow = "1px 10px 10px rgb(104, 255, 139)";
            frase.style.transition = "0.5s"; 
        }
    }
});


