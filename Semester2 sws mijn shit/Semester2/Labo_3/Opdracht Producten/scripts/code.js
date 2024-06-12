const setup = () => {
let btnHerbereken = document.getElementById("btnHerberekenen");
btnHerbereken.addEventListener("click", herbereken);
}

const herbereken = () => {
    let aantal = document.getElementsByClassName("aantal");
    let subtotaal = document.getElementsByClassName("subtotaal");
    let btw = document.getElementsByClassName("btw");
    let prijs = document.getElementsByClassName("prijs");
    let totaal = document.getElementById("totaal");

    let prijs1 = parseFloat(prijs[0].innerText);
    let prijs2 = parseFloat(prijs[1].innerText);
    let prijs3 = parseFloat(prijs[2].innerText);
    let btw1 = parseFloat(btw[0].innerText);
    btw1 = btw1/100 + 1;
    let btw2 = parseFloat(btw[1].innerText);
    btw2 = btw2/100 + 1;
    let btw3 = parseFloat(btw[2].innerText);
    btw3 = btw3/100 + 1;


    subtotaal[0].innerText = (prijs1 * aantal[0].value * btw1).toFixed(2) + " Eur";
    subtotaal[1].innerText = (prijs2 * aantal[1].value * btw2).toFixed(2) + " Eur";
    subtotaal[2].innerText = (prijs3 * aantal[2].value * btw3).toFixed(2) + " Eur";
    totaal.innerText = (parseFloat(subtotaal[0].innerText) + parseFloat(subtotaal[1].innerText) + parseFloat(subtotaal[2].innerText)).toFixed(2) + " Eur";

}

window.addEventListener("load", setup);