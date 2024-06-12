const setup = () => {
    let tekst = "onoorbaar";
    let startzoeken = 0;
    let stopzoeken = 3;

    while (startzoeken < tekst.length){
        console.log(tekst.substring(startzoeken, stopzoeken));
        startzoeken = startzoeken + 3;
        stopzoeken = stopzoeken + 3;
    }
}
window.addEventListener("load", setup);