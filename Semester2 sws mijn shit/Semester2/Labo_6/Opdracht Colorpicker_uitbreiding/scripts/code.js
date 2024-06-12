const setup = () => {
	let sliders = document.getElementsByClassName("slider");
	let btnSave = document.getElementById("btnSave");

	for (let i = 0; i < sliders.length; i++) {
		sliders[i].addEventListener("change", updateNotSaved);
		sliders[i].addEventListener("input", updateNotSaved);
	}

	let valueRed = parseInt(sliders[0].value);
	let valueGreen = parseInt(sliders[1].value);
	let valueBlue = parseInt(sliders[2].value);

	// maak het blokje rood
	update(valueRed, valueGreen, valueBlue);

	btnSave.addEventListener("click", save);

}

const update = (valueRed, valueGreen, valueBlue) => {
	let colorDemo= document.querySelector(".colorDemo");
	let red = document.getElementById("red");
	let green = document.getElementById("green");
	let blue = document.getElementById("blue");

	red.innerText = valueRed;
	green.innerText = valueGreen;
	blue.innerText = valueBlue;

	let sliders = document.getElementsByClassName("slider");
	sliders[0].value = valueRed;
	sliders[1].value = valueGreen;
	sliders[2].value = valueBlue;

	colorDemo.style.backgroundColor = "rgb(" + valueRed + "," + valueGreen + ", " + valueBlue + ")";
}

const updateNotSaved = () =>{
	let colorDemos= document.getElementsByClassName("colorDemo");
	let sliders = document.getElementsByClassName("slider");
	let valueRed = parseInt(sliders[0].value);
	let valueGreen = parseInt(sliders[1].value);
	let valueBlue = parseInt(sliders[2].value);
	update(valueRed, valueGreen, valueBlue);
}


const save = () =>{
	let sliders = document.getElementsByClassName("slider");
	let saves = document.getElementById("saves");
	let valueRed = parseInt(sliders[0].value);
	let valueGreen = parseInt(sliders[1].value);
	let valueBlue = parseInt(sliders[2].value);

	let div = document.getElementById("saves");
	let savedColor = document.createElement("div");
	savedColor.setAttribute("class", "colorDemo");

	saves.appendChild(savedColor);
	let colorDemos = document.getElementsByClassName("colorDemo");
	colorDemos[colorDemos.length-1].style.backgroundColor = "rgb(" + valueRed + "," + valueGreen + ", " + valueBlue + ")";

	savedColor.addEventListener("click", update.bind(null, valueRed, valueGreen, valueBlue));

	let remove = document.createElement("input");
	remove.setAttribute("type", "button");
	remove.setAttribute("value", "X");
	remove.setAttribute("class", "btnRemove");
	remove.addEventListener("click", () => {
		savedColor.remove();
	});
	savedColor.appendChild(remove);
}

window.addEventListener("load", setup);