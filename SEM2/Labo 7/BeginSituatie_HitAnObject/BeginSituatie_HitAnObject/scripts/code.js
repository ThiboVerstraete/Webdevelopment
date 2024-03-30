let global = {
    IMAGE_COUNT: 5, // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/", // map van de figuren
    IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0, // aantal hits
    timoutid: 0 // id van de timeout timer, zodat we die kunnen annuleren
};


const setup = () => {
    let icoon = document.getElementById("icoon");
    icoon.addEventListener("click", randomizor);

    let klikt = document.getElementById("klik");
    klikt.addEventListener("click", doealert);
};

const randomizor = () => {
    let links = Math.random()*800;
    let boven = Math.random()*600;

    this.left(links);
    this.top(boven);
}

const doealert = () => {
    window.alert("WERKT");
}

window.addEventListener("load", setup);