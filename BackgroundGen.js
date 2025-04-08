let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
debugger;



function setGradient(){
    body.style.background = "linear-gradient(to left, "+color1.value+", "+color2.value+")";
    css.textContent = body.style.background + ";";
}

var color3  = document.querySelector(".color3");


function setLoad(){
    var random  = body.style.background = "#"+ Math.floor(Math.random()* 0xFFFFFF).toString(16)
    color3.value = random;

}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

window.addEventListener("load", setLoad);