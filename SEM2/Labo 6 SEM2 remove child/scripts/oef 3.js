const setup = () => {
    document.querySelector("#myDIV").addEventListener("click", plusnode);
}

const plusnode = (event) => {
    const nieuwelement = document.createElement("p");
    nieuwelement.appendChild(document.createTextNode("JavaScript text"));
    event.target.appendChild(nieuwelement)
}

window.addEventListener("load", setup);