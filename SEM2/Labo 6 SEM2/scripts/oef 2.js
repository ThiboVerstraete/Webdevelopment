const setup = () => {
    const li = document.querySelectorAll("li");

    for (let i = 0; i < li.length; i++){
        li[i].setAttribute("class", "listitem");

    }

    const andereFoto = document.createElement("img");
    andereFoto.setAttribute("src", "./images/IDK.jpg");
    andereFoto.setAttribute("class", "selfie");
    document.body.appendChild(andereFoto);
}

window.addEventListener("load", setup);