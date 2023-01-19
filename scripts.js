var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById("gradient");
var btn1 = document.querySelector('.btn1');


function randomBackgroundGenerator() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i=0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
}
	return color;

}

function initialColor() {
	bg1 = randomBackgroundGenerator();
	bg2 = randomBackgroundGenerator();
	body.style.background = "linear-gradient(to right, " + bg1 + ", " + bg2 + ")";
	css.textContent = body.style.background + ";";
	color1.value = bg1;
	color2.value = bg2;
}

function setGradient() {

	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

btn1.addEventListener("click", initialColor);

initialColor();