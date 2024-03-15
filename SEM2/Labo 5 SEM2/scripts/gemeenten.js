const setup = () => {
    let tekst;
    let gemeenten = [];

    while (tekst != "stop"){
        tekst = prompt("Geef een gemeente in, \n vul \"stop\" in om te stoppen.", "gemeente");
        if (tekst != "stop"){
            gemeenten.push(tekst);
        }
    }

    gemeenten.sort();
    let lijst = document.getElementById("gemeente");

    for (let i = 0; i < gemeenten.length; i++){
        lijst.innerHTML += "<option value=\"\">" + gemeenten[i] + "</option>";
    }

    console.log(gemeenten);
}

window.addEventListener("load", setup);