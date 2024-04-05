let global = {
    IMAGE_COUNT: 5, // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/", // map van de figuren
    IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0, // aantal hits
    timoutid: 0 // id van de timeout timer, zodat we die kunnen annuleren
};

var taskid = 0;
var imagesArray = [];

const setup = () => {
    let klikt = document.getElementById("klik");
    klikt.addEventListener("click", startSpel);

    for (var i = 0; i < global.IMAGE_COUNT; i++){
        imagesArray.push(global.IMAGE_PATH_PREFIX + i + global.IMAGE_PATH_SUFFIX);
    }
};

const startSpel = () => {
    let icoon = document.getElementById("icoon");

    taskid = setInterval(randomizor, global.MOVE_DELAY);

    icoon.addEventListener("click",  checker);
}

const randomizor = () => {
    let icoon = document.getElementById("icoon");

    let links = 10 + Math.random()*800 - 48;
    let boven = 10 + Math.random()*600 - 48;
    let willekeurigeafbeelding = Math.floor(Math.random()*5);

    icoon.style.left = links + "px";
    icoon.style.top = boven + "px";

    icoon.src = imagesArray[willekeurigeafbeelding];
}

const checker = () => {
    let icoon = document.getElementById("icoon");

    // Get the file name part of the URL
    let icoonFileName = icoon.src.split('/').pop();
    let imagesArrayFileName = imagesArray[0].split('/').pop();

    console.log(icoonFileName);
    console.log(imagesArrayFileName);

    if (icoonFileName === imagesArrayFileName) {
        window.alert("GAME OVER");
    } else {
        clearInterval(taskid);
        taskid = setInterval(randomizor, global.MOVE_DELAY);
        icoon.addEventListener("click", randomizor);
        icoon.addEventListener("click", pluspunt);
    }
}

const pluspunt = () => {
    var aantalhits = document.getElementById("hits");

    global.score++;
    aantalhits.innerHTML = global.score;
}

window.addEventListener("load", setup);