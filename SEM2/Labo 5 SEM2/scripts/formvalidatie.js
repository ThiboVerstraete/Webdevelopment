const setup = () => {
    let valideer = document.getElementById("btnvalideer")
    valideer.addEventListener("click", voorwaarden)
}

const voorwaarden = () => {
    let niet_geldig = 0;
    niet_geldig += voornaam();
    niet_geldig += achternaam();
    niet_geldig += geboortedatum();
    niet_geldig += email();
    niet_geldig += aantalkinderen();

    if (niet_geldig === 0){
        alert("correct");
    }
}

const voornaam = () => {
    let vn = document.getElementById("vn");
    let error = document.getElementById("errorvoornaam");

    if (vn.length > 30){
        reportError(vn, error, "max. 30 karakters");
        return 1;
    } else{
        clearError(vn, error);
        return 0;
    }
}

const achternaam = () => {
    let fn = document.getElementById("fn");
    let error = document.getElementById("errorachternaam")

    if (fn === ""){
        reportError(fn, error, "verplicht veld");
        return 1;
    } else if(fn.length > 50) {
        reportError(fn, error, "max. 50 karakters");
        return 1
    } else{
        clearError(fn, error);
        return 0;
    }
}

const geboortedatum = () => {
    let geboortedatum = document.getElementById("geboortedatum");
    let error = document.getElementById("errorgeboortedatum");
    let [jaar, maand, dag] = geboortedatum.value.split("-");


    if(geboortedatum === ""){
        reportError(geboortedatum, error, "verplicht veld");
        return 1;
    }
    else if(!isGetal(jaar) || !isGetal(maand) || !isGetal(dag)){
        reportError(geboortedatum, error, "formaat is niet jjjj-mm-dd");
        return 1;
    }
    else if(jaar.length !== 4 || maand.length !== 2 || dag.length !== 2){
        reportError(geboortedatum, error, "formaat is niet jjjj-mm-dd");
        return 1;
    }
    else if(!geboortedatum.match(/^\d{4}-\d{2}-\d{2}$/)){
        reportError(geboortedatum, error, "formaat is niet jjjj-mm-dd");
        return 1;
    }
    else{
        clearError(geboortedatum, error);
        return 0;
    }
}

const email = () => {
    let email = document.getElementById("email");
    let error = document.getElementById("erroremail");

    if (email === ""){
        reportError(email, error, "verplicht veld");
        return 1;
    } else if (email.indexOf("@") === -1){
        reportError(email, error, "geen geldig email adres");
        return 1;
    } else if (isEmailValid(email)){
        reportError(email, error, "geen geldig email adres")
    } else{
        clearError(email, error);
        return 0;
    }
}

const aantalkinderen = () => {
    let aantalkinderen = document.getElementById("aantalkinderen");
    let error = document.getElementById("erroraantalkinderen");

    if (isGetal(aantalkinderen)){
        reportError(aantalkinderen, error, "is geen positief getal");
        return 1;
    } else if (aantalkinderen < 0){
        reportError(aantalkinderen, error, "is geen positief getal");
        return 1;
    } else if (aantalkinderen > 99){
        reportError(aantalkinderen, error, "is te vruchtbaar")
    } else{
        clearError(aantalkinderen, error);
        return 0;
    }
}

const isGetal = (tekst) => {
    return !isNaN(tekst);
}

const isEmailValid = (email) =>{
    let emailRegex = /^.+\@.+\..+$/;
    return emailRegex.test(email);
}

const reportError = (element, errElement, message) =>{
    element.className="validatie";
    errElement.textContent = message;
}

const clearError = (element, errElement) =>{
    element.className="";
    errElement.innerHTML = "";
}

window.addEventListener("load", setup);