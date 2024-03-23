const setup = () => {
const paragraaf = document.querySelector("p");
    paragraaf.removeChild(paragraaf.childNodes[0]);
    paragraaf.appendChild(document.createTextNode("Good Job!"));
}

window.addEventListener("load", setup);