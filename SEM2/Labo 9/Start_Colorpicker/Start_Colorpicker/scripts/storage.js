const storeSliderValues = () => {
    localStorage.setItem("rood", document.getElementById("sldRed").value)
    localStorage.setItem("groen", document.getElementById("sldGreen").value)
    localStorage.setItem("blauw", document.getElementById("sldBlue").value)
};

const restoreSliderValues = () => {
    document.getElementById("sldRed").value = localStorage.getItem("rood")
    document.getElementById("sldGreen").value = localStorage.getItem("groen")
    document.getElementById("sldBlue").value = localStorage.getItem("blauw")
};

const storeSwatches = () => {
    let swatches = [];
    let stored = document.getElementsByClassName("swatch");

    for (let i = 1; i < stored.length; i++) {
        let swatch = {
            red: stored[i].getAttribute("data-red"),
            green: stored[i].getAttribute("data-green"),
            blue: stored[i].getAttribute("data-blue")
        }
        swatches.push(swatch);
    }

    let swatchesJSON = JSON.stringify(swatches);

    localStorage.setItem("swatches", swatchesJSON);
};

const restoreSwatches = () => {
    let swatches = JSON.parse(localStorage.getItem("swatches"))
    for (let i = 0; i < swatches.length; i++){
        addSwatchComponent(swatches[i].red, swatches[i].green, swatches[i].blue)
    }
};
