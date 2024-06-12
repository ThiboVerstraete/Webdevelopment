const setup = () => {
    let li = document.querySelectorAll("li");
    let body = document.querySelector("body");

    for (let i = 0; i < li.length; i++) {
        li[i].classList.add("listitem");
    }
    let style = document.createElement("style");
    let styleCode = document.createTextNode(".listitem { color: red; }");
    style.appendChild(styleCode);
    body.appendChild(style);

    let foto = document.createElement("img");
    foto.setAttribute("src", "images/Moedkip.png");
    body.appendChild(foto);
}
window.addEventListener("load", setup);