const setup = () => {
    let btnKlik = document.getElementById("btnKlik");
    btnKlik.addEventListener("click", toevoegen);
}
const toevoegen = () =>{
    let div = document.getElementById("myDIV");
    let p = document.createElement("p");
    let textNode = document.createTextNode("Some text");
    p.appendChild(textNode);
    div.appendChild(p);
}
window.addEventListener("load", setup);