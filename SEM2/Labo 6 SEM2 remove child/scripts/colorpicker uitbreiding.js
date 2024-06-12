const setup = () => {
    const sliders = document.getElementsByClassName("slider");

    for(let i = 0; i < sliders.length; i++){
        sliders[i].addEventListener("input", update)
    }

    const btnSaveColor = document.getElementById("btnopslaan");
    btnSaveColor.addEventListener("click", MakeColorSquare);

    update();
}

const update = () => {
    const colorBox = document.getElementById("txtviewcolors");
    const sliders = document.getElementsByClassName("slider");
    const labels = document.getElementsByClassName("label");

    let value = [];
    for(let i = 0; i < sliders.length; i++){
        labels[i].innerHTML = (sliders[i].value * 2.55).toFixed(0);
    }
    colorBox.style.backgroundColor = "rgb(" + (sliders[0].value * 2.55) + ", " + (sliders[1].value * 2.55) + ", " + (sliders[2].value * 2.55) + ")";
}

const MakeColorSquare = () =>{
    const sliders = document.getElementsByClassName("slider");
    const ValueRed = sliders[0].value * 2.55;
    const ValueGreen = sliders[1].value * 2.55;
    const ValueBlue = sliders[2].value * 2.55;

    let divelement = document.createElement("div");
    divelement.classList.add("colorbox")
    divelement.addEventListener('click', updateColor);
    divelement.setAttribute("data-red", ValueRed.toString());
    divelement.setAttribute("data-green", ValueGreen.toString());
    divelement.setAttribute("data-blue", ValueBlue.toString());
    divelement.style.backgroundColor = "rgb(" + ValueRed + ", " + ValueGreen + ", " + ValueBlue + ")";
    divelement.style.width = "100px";
    divelement.style.height = "100px";
    divelement.style.display = "inline-block";
    divelement.style.marginLeft = "15px"

    let btnelement = document.createElement("button");
    btnelement.addEventListener('click', deleteColor);
    let btnTekstNode = document.createTextNode("X");
    divelement.appendChild(btnelement);
    btnelement.appendChild(btnTekstNode);

    document.querySelector("#colorssaved").appendChild(divelement);
}

const updateColor = (event) => {
    const colorBox = document.getElementById("txtviewcolors");
    const sliders = document.getElementsByClassName("slider");
    const labels = document.getElementsByClassName("label");

    const ValueRed = event.target.getAttribute("data-red");
    const ValueGreen = event.target.getAttribute("data-green");
    const ValueBlue = event.target.getAttribute("data-blue");

    for(let i = 0; i < sliders.length; i++){
        labels[i].removeChild(labels[i].childNodes[0]);
    }

    labels[0].appendChild(document.createTextNode(Math.round(ValueRed)));
    labels[1].appendChild(document.createTextNode(Math.round(ValueGreen)));
    labels[2].appendChild(document.createTextNode(Math.round(ValueBlue)));

    sliders[0].value = ValueRed / 2.55;
    sliders[1].value = ValueGreen / 2.55;
    sliders[2].value = ValueBlue / 2.55;

    colorBox.style.backgroundColor = "rgb(" + ValueRed + ", " + ValueGreen + ", " + ValueBlue + ")";

}

const deleteColor = (event) => {
    event.target.parentElement.remove();
}

window.addEventListener("load", setup);