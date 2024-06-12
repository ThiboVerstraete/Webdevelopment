let global ={
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    AANTAL_KAARTEN: 6,
    AANTAL_DEZELFDE: 2,
    IS_BUSY: false
};

const setup = () => {
    let playfield = document.getElementById("playField");

    let kolommen = "";
    for (let i = 0; i < global.AANTAL_HORIZONTAAL; i++) {
        kolommen += "150px "
    }
    let rijen = "";
    for (let i = 0; i < global.AANTAL_VERTICAAL; i++) {
        rijen += "150px "
    }
    playfield.style.gridTemplateColumns = kolommen;
    playfield.style.gridTemplateRows = rijen;

    playfield.addEventListener("click", check);

    let kaarten = [];
    let orders = [];

    for (let i = 0; i < global.AANTAL_KAARTEN*global.AANTAL_DEZELFDE; i++) {
        //let order = Math.round(Math.random() * global.AANTAL_KAARTEN*global.AANTAL_DEZELFDE);
        orders.push(i);
    }
    console.log(orders)

    for (let i = 1; i < global.AANTAL_KAARTEN+1; i++) {
        for (let j = 0; j < global.AANTAL_DEZELFDE; j++) {
            let kaart = document.createElement("img");
            kaart.setAttribute("src", "images/achterkant.png");
            kaart.setAttribute("alt", "kaart");
            kaart.setAttribute("class", "kaart");

            kaart.addEventListener("click", () => {
                kaart.setAttribute("src", "images/kaart" + i + ".png");
                kaart.setAttribute("class", "omgedraaid");
            });

            let order = Math.round(Math.random() * (orders.length-1));
            console.log(order + " " + orders.length);
            kaart.style.order = orders[order];
            console.log(kaart.getAttribute("style"));
            if (order === orders.length){
                orders.pop();
            }
            else {
                orders.splice(order, 1);
            }
            kaarten.push(kaart);
        }
    }
    console.log(orders)

    for (let i = 0; i < kaarten.length; i++) {
        playfield.appendChild(kaarten[i]);
    }

}

const check = () =>{
    let playfield = document.getElementById("playField");
    let omgedraaiden = document.getElementsByClassName("omgedraaid");
    if (omgedraaiden.length === global.AANTAL_DEZELFDE){
        console.log("ye");
        let aantalGelijk = 0;
        for (let i = 0; i < global.AANTAL_DEZELFDE; i++) {
            for (let j = 0; j < global.AANTAL_DEZELFDE; j++) {
                let gelijk = isGelijk(omgedraaiden[i].getAttribute("src"), omgedraaiden[j].getAttribute("src"));
                if (gelijk){
                    aantalGelijk++;
                }
            }
        }
        if((aantalGelijk/ global.AANTAL_DEZELFDE) === global.AANTAL_DEZELFDE){
            for (let i = 0; i < omgedraaiden.length; i++) {
                omgedraaiden[i].style.borderColor = "green";
                playfield.style.cursor = "wait";
            }
            setTimeout(verwijder, 1000);
        }
        else {
            for (let i = 0; i < omgedraaiden.length; i++) {
                omgedraaiden[i].style.borderColor = "red";
                playfield.style.cursor = "wait";
            }
            setTimeout(terugDraaien.bind(null,global.AANTAL_DEZELFDE), 1000);
        }
    }
    else if (omgedraaiden.length > global.AANTAL_DEZELFDE){
            terugDraaien(omgedraaiden.length);
    }
}

const isGelijk = (waarde1, waarde2) =>{
    return waarde1 === waarde2;
}

const terugDraaien = (aantal) =>{
    let playfield = document.getElementById("playField");
    let omgedraaiden = document.getElementsByClassName("omgedraaid");
    for (let i = 0; i < aantal; i++) {
        omgedraaiden[0].style.borderColor = "#333333"
        playfield.style.cursor = "default";
        omgedraaiden[0].setAttribute("src", "images/achterkant.png");
        omgedraaiden[0].setAttribute("class", "kaart");

    }
    if (!global.IS_BUSY){
        playfield.addEventListener("click", check);
    }
}

const verwijder = () =>{
    let playfield = document.getElementById("playField");
    let omgedraaiden = document.getElementsByClassName("omgedraaid");
    console.log(omgedraaiden[0]);
    for (let i = 0; i < global.AANTAL_DEZELFDE; i++) {
        playfield.style.cursor = "default";
        let div = document.createElement("div");
        div.setAttribute("style", omgedraaiden[0].getAttribute("style") +"");
        playfield.appendChild(div);
        playfield.removeChild(omgedraaiden[0]);

    }
}



window.addEventListener("load", setup);