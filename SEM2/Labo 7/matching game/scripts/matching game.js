let global = {
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    AANTAL_KAARTEN: 6,
    gelijkekaarten: 2,
    afbeeldingen: [],
    achterkanten: [],
    correct: 0,
    omgedraaid: [],
    niet_omgedraaid: []
}

const setup = () => {
    document.getElementById("begin").addEventListener("click", beginSpel)
}

const beginSpel = () => {
    document.getElementById("begin").style.display = "none";

    laadimg()

    for (let i = 0; i < (global.AANTAL_KAARTEN*global.gelijkekaarten); i++) {
        global.achterkanten[i].addEventListener("click",toonVoorkant);
        global.achterkanten[i].addEventListener("click",vergelijkKaarten);
    }
}

const laadimg = () => {
    let speelveld = document.getElementById("speelveld")
    let fotos = []
    let achterkanten = []
    for (let i = 0; i < global.AANTAL_KAARTEN; i++) {
        for (let j = 0; j < global.gelijkekaarten; j++) {
            let foto = document.createElement("img")
            foto.src = "images/Kaart" + (i + 1) + ".png"
            foto.style.display="none";
            foto.setAttribute("class","foto")
            fotos.push(foto)

            let achterkant = document.createElement("img")
            achterkant.src = "images/achterkant.png"
            achterkant.className = "Achterkant"
            achterkanten.push(achterkant)
        }
    }

    fotos = plaats(fotos, achterkanten);
    achterkanten = plaats(achterkanten, fotos);

    for (let i = 0; i < fotos.length; i++) {
        speelveld.append(fotos[i]);
        global.afbeeldingen[i] = fotos[i];
        speelveld.append(achterkanten[i]);
        global.achterkanten[i] = achterkanten[i];
    }
}

const plaats = (achterkanten, fotos) => {
    for (let i = 0; i < fotos.length; i++) {
        const random = Math.floor(Math.random()*(i+1));
        [fotos[i],fotos[random]] = [fotos[random],fotos[i]];
        [achterkanten[i],achterkanten[random]] = [achterkanten[random],achterkanten[i]];
    }
    return achterkanten;
}

const toonVoorkant = (event) => {
    let index = global.achterkanten.indexOf(event.target);

    global.afbeeldingen[index].style.display="block";

    global.achterkanten[index].style.display = "none";

    global.omgedraaid.push(global.afbeeldingen[index]);
}

const toonAchterkant = (image) => {
    let index = global.afbeeldingen.indexOf(image);

    global.afbeeldingen[index].style.display = "none";

    global.achterkanten[index].style.display="block";
}

const hide = (image) => {
    let index = global.afbeeldingen.indexOf(image);

    global.afbeeldingen[index].style.visibility="hidden";

    global.achterkanten[index].style.visibility="hidden";
}

const vergelijkKaarten = () => {
    let teVergelijkenKaarten = global.omgedraaid.slice(0, global.gelijkekaarten)
    let keuze1 = global.omgedraaid[0]
    let keuze2 = global.omgedraaid[1]
    let wacht = 500;
    if(teVergelijkenKaarten.length === global.gelijkekaarten){
        if(teVergelijkenKaarten[0].getAttribute("src") === teVergelijkenKaarten[1].getAttribute("src")){

            console.log("true")
            global.correct++
            keuze1.style.border="5px solid green"
            keuze2.style.border="5px solid green"
            setTimeout(()=>{
                    hide(keuze1)
                    hide(keuze2)
                    global.niet_omgedraaid[0] = global.omgedraaid[0]
                    global.niet_omgedraaid[1] = global.omgedraaid[1]
                    global.omgedraaid.splice(0,2);
                    teVergelijkenKaarten.shift();
                    teVergelijkenKaarten.shift();
                }
                ,wacht)
            if(global.correct === 6){
                setTimeout(()=>{
                    window.alert("Klaar")
                } , wacht);
            }
        }else{
            for (let i = 0; i < global.omgedraaid.length; i++) {
                global.omgedraaid[i].style.cursor="wait"
            }
            console.log("false")
            keuze1.style.border="5px solid red"
            keuze2.style.border="5px solid red"
            setTimeout( () =>{
                toonAchterkant(keuze1)
                toonAchterkant(keuze2)
                global.omgedraaid.shift();
                global.omgedraaid.shift();
                teVergelijkenKaarten.shift();
                teVergelijkenKaarten.shift();
            } , wacht)
        }
    }
}

window.addEventListener("load", setup);