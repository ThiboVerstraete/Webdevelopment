let global = {
    IMAGE_COUNT: 5, // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/", // map van de figuren
    IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0, // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};


const setup = () => {
    let btnStart = document.getElementById("start");
    btnStart.addEventListener("click", start);


};

const verplaats = () => {
    let figure = document.getElementById("target");
    let playField = document.getElementById("playField");

    let maxWidth = parseFloat(getComputedStyle(playField).width);
    let left = Math.random() * maxWidth + "px";
    let maxHeight = parseFloat(getComputedStyle(playField).height);
    let top = Math.random() * maxHeight + "px";

    figure.style.setProperty("left", left);
    figure.style.setProperty("top", top);

    let image = global.IMAGE_PATH_PREFIX + Math.round(Math.random() * (global.IMAGE_COUNT-1)) + global.IMAGE_PATH_SUFFIX;
    figure.setAttribute("src", image);
}

const start = () =>{
    global.timeoutId =  setInterval(verplaats, global.MOVE_DELAY);
    let figure = document.getElementById("target");

    let txtScore = document.getElementById("score");

    figure.addEventListener("click", () => {
        let path = figure.getAttribute("src");
        if (path.localeCompare(global.IMAGE_PATH_PREFIX + "0" + global.IMAGE_PATH_SUFFIX)){
            global.score++;
            console.log(global.score);

        }
        else {
            alert("game over");
            global.score = 0;
        }
        txtScore.innerText = "aantal hits: " + global.score;
        clearInterval(global.timeoutId);
        verplaats();
        global.timeoutId =  setInterval(verplaats, global.MOVE_DELAY);
    });
}




window.addEventListener("load", setup);


