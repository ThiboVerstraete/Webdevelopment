const setup = () => {
    let btnSubmit = document.getElementById("ingeven");
    btnSubmit.addEventListener("click", toon,)
}

const toon = () =>{
    let roker = document.getElementById("roker").checked;
    if (roker){
        console.log("is een roker");
    }
    else {
        console.log("is geen roker");
    }

    let taal = document.getElementsByName("moedertaal");
    for (let i = 0; i < taal.length; i++) {
        if (taal[i].checked){
            console.log("de moedertaal is: " + taal[i].value);
        }
    }

    let buur = document.getElementById("buur");
    console.log("favoriete buurland is " + buur[buur.options.selectedIndex].text);

    let bestelling = document.getElementById("bestelling").options;
    let stringBestelling = "bestelling bestaat uit"
    for (let i = 0; i < bestelling.length; i++) {
        if (bestelling[i].selected){
            stringBestelling += " " + bestelling[i].text;
        }
    }
    console.log(stringBestelling);


}

window.addEventListener("load", setup);