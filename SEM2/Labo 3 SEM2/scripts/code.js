const setup = () => {
	let sliders = document.getElementsByClassName("slider");

	// we moeten zowel op het input als het change event reageren,
	// zie http://stackoverflow.com/questions/18544890
	sliders[0].addEventListener("change", update);
	sliders[0].addEventListener("input", update);

	sliders[1].addEventListener("change", update);
	sliders[1].addEventListener("input", update);

	sliders[2].addEventListener("change", update);
	sliders[2].addEventListener("input", update);
}

const update = () => {
	let sliders = document.getElementsByClassName("slider");
	let value0 = sliders[0].value;
	let value1 = sliders[1].value;
	let value2 = sliders[2].value;

	let toongetal = document.getElementsByClassName("number");
	toongetal[0].innerHTML = "red: " + value0;
	toongetal[1].innerHTML = "green: " + value1;
	toongetal[2].innerHTML = "blue: " + value2;

	let colorDemos=document.getElementsByClassName("colorDemo")

	colorDemos[0].style.backgroundColor= "rgb("+ value0 + "," + value1 + "," + value2 + ") ";

	console.log("de waarde van de slider is momenteel : " + value0 + "," + value1 + "," + value2);
}

window.addEventListener("load", setup);