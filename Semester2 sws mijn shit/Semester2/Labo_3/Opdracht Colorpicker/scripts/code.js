const setup = () => {
	let sliders = document.getElementsByClassName("slider");
	// we moeten zowel op het input als het change event reageren,
	// zie http://stackoverflow.com/questions/18544890

	for (let i = 0; i < sliders.length; i++) {
		sliders[i].addEventListener("change", update);
		sliders[i].addEventListener("input", update);
	}

	// maak het blokje rood
	update();
}

const update = () => {
	let colorDemos= document.getElementsByClassName("colorDemo");
	let sliders = document.getElementsByClassName("slider");
	let valueRed = parseInt(sliders[0].value);
	let valueGreen = parseInt(sliders[1].value);
	let valueBlue = parseInt(sliders[2].value);
	let test = 10;
	let red = document.getElementById("red");
	let green = document.getElementById("green");
	let blue = document.getElementById("blue");

	red.innerText = valueRed;
	green.innerText = valueGreen;
	blue.innerText = valueBlue;


	colorDemos[0].style.backgroundColor = "rgb(" + valueRed + "," + valueGreen + ", " + valueBlue + ")";
}

window.addEventListener("load", setup);