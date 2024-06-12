

const storeSliderValues = () => {
    localStorage.setItem("slider_red", document.getElementById("sldRed").value);
    localStorage.setItem("slider_green", document.getElementById("sldGreen").value);
    localStorage.setItem("slider_blue", document.getElementById("sldBlue").value);
};

const restoreSliderValues = () => {
    document.getElementById("sldRed").value = localStorage.getItem("slider_red");
    document.getElementById("sldGreen").value = localStorage.getItem("slider_green");
    document.getElementById("sldBlue").value = localStorage.getItem("slider_blue");
};

const storeSwatches = () => {
    // bouw een array met kleurinfo objecten
    let swatches = [];
    let storedSwatches = document.getElementsByClassName("swatch");

    for (let i = 1; i < storedSwatches.length; i++) {
        let swatch = {
            red: storedSwatches[i].getAttribute("data-red"),
            green: storedSwatches[i].getAttribute("data-green"),
            blue: storedSwatches[i].getAttribute("data-blue")
        }
        swatches.push(swatch);
    }

    let swatchesJSON = JSON.stringify(swatches);

    console.log(swatches);
    console.log(swatchesJSON);
    localStorage.setItem("swatches", swatchesJSON);
};

const restoreSwatches = () => {
    let swatches = JSON.parse(localStorage.getItem("swatches"));
    console.log(swatches);
    console.log(swatches[1].red);
    for (let i = 0; i < swatches.length; i++) {
        addSwatchComponent(swatches[i].red, swatches[i].green, swatches[i].blue);
    }
};
