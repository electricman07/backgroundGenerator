var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector("button");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, "
	+ color1.value 
	+ ", "
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}

function generateRandomColor() {
	var randomColor1 = Math.floor(Math.random()*16777215).toString(16);
	var randomColor2 = Math.floor(Math.random()*16777215).toString(16);
	color1 = body.style.background = 
	"linear-gradient(to right, #" 
	+ randomColor1 
	+ ", #" 
	+ randomColor2 
	+ ")";

	setGradient();
	color1.setAttribute("value", randomColor1)
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", generateRandomColor);

setGradient();