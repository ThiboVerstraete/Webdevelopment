const setup = () => {
}

const output = () => {
    let roker = document.getElementById("chkroker");
    let ned = document.getElementById("ned");
    let fr = document.getElementById("fr");
    let eng = document.getElementById("eng");
    let buurlanden = document.getElementById("ddlfavorietebuurland");
    let eten = document.getElementById("lstbestelling").selectedOptions;

    let taal;
    let isroker;
    let favoriete;
    let bestelling = "";

    if (roker.checked){
        isroker = "een";
    }
    else{
        isroker = "geen";
    }

    if (ned.checked){
        taal = "nl";
    } else if (fr.checked){
        taal = "fr";
    } else if (eng.checked){
        taal = "eng";
    }

    favoriete = buurlanden.value;

    for (var i = 0; i < eten.length; i++){
        var item = eten[i];
        bestelling += ` ${item.text}`;
    }

    console.log(`is ${isroker} roker`);
    console.log(`moedertaal is ${taal}`);
    console.log(`favoriete buurland is ${favoriete}`);
    console.log(`bestelling bestaat uit${bestelling}`);
}

let btn = document.getElementById("resultaat");

window.addEventListener("load", setup);
btn.addEventListener("click", output);