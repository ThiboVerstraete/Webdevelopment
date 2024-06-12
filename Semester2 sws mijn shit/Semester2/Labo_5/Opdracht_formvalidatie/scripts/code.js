const setup = () => {
    let btnValideer = document.getElementById("btnValideer");
    btnValideer.addEventListener("click", valideer);
}

const valideer = () =>{
    valideerVoornaam();
    valideerFamilienaam();
    valideerGeboorte();
    valideerEmail();
    valideerKinderen();
}

const valideerVoornaam = () => {
    let txtVoornaam = document.getElementById("txtVoornaam");
    let voornaam = txtVoornaam.value.trim();

    if (voornaam.length > 30){
        reportError(txtVoornaam, "max. 30 karakters");
    }
    else {
        clearError(txtVoornaam);
    }
}

const valideerFamilienaam = () => {
    let txtFamilienaam = document.getElementById("txtFamilinaam");
    let familienaam = txtFamilienaam.value.trim();

    if (familienaam.length === 0){
        reportError(txtFamilienaam, "verplicht veld");
    }
    else if (familienaam.length > 50){
        reportError(txtFamilienaam, "max. 50 karakters");
    }
    else {
        clearError(txtFamilienaam);
    }
}

const valideerGeboorte = () => {
    let txtGeboorte = document.getElementById("txtGeboorte");
    let geboorte = txtGeboorte.value.trim();

    let jaar = geboorte.substring(0, geboorte.indexOf("-"));
    console.log(jaar);
    let maand = geboorte.substring(jaar.length+1, 20).substring(0, geboorte.substring(jaar.length+1, 20).indexOf("-"));
    console.log(maand);
    let dag = geboorte.substring(jaar.length+maand.length+2, 20);
    console.log(dag)

    if (geboorte.length === 0){
        reportError(txtGeboorte, "verplicht veld");
    }
    else {
        if (jaar.length === 4){
            if (maand.length === 2){
                if (dag.length === 2){
                    if (isGetal(parseInt(jaar)) && isGetal(parseInt(maand)) && isGetal(parseInt(dag))){
                        clearError(txtGeboorte);
                    }
                    else {
                        reportError(txtGeboorte, "formaat is niet jjjj-mm-dd");
                    }

                }
                else {
                    reportError(txtGeboorte, "formaat is niet jjjj-mm-dd");
                }
            }
            else {
                reportError(txtGeboorte, "formaat is niet jjjj-mm-dd");
            }
        }
        else {
            reportError(txtGeboorte, "formaat is niet jjjj-mm-dd");
        }
    }
}

const valideerEmail = () => {
    let txtEmail = document.getElementById("txtEmail");
    let email = txtEmail.value.trim();

    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    console.log(reg.test(email));

    if (email.length === 0){
        reportError(txtEmail, "verplicht veld");
    }
    else if (!reg.test(email)){
        reportError(txtEmail, "geen geldig email adres")
    }
    else {
        clearError(txtEmail);
    }
}

const valideerKinderen = () => {
    let txtKinderen = document.getElementById("txtKinderen");
    let kinderen = parseInt(txtKinderen.value.trim());
    if (isGetal(kinderen)){

        if (kinderen < 0){
            reportError(txtKinderen, "is geen positief getal");
        }
        else if (kinderen > 99){
            reportError(txtKinderen, "te vruchtbaar");
        }
        else {
            clearError(txtKinderen);
        }
    }
    else {
        reportError(txtKinderen, "is geen getal")
    }

}

const isGetal = (tekst) => {
    return !isNaN(tekst);
}

const reportError = (element, message) =>{
    element.className = "invalid";
    element.nextElementSibling.innerHTML = message;
}

const clearError = (element) =>{
    element.className = "";
    element.nextElementSibling.innerHTML = "";
}

window.addEventListener("load", setup);