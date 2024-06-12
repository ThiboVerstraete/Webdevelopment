const setup = () => {
    let p = document.querySelectorAll("p");
    let textNode = document.createTextNode("Good job!");
    console.log(textNode);
    p[0].innerText = ""
    p[0].appendChild(textNode);
}
window.addEventListener("load", setup);