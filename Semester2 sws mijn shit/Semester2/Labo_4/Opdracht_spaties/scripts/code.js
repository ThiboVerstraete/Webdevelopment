const setup = () => {
    let btnInput = document.getElementById("btnIngeven");

    btnInput.addEventListener("click", input);
}

const input = () =>{
    let invoer = document.getElementById("txtInput").value;
    let uitvoer = "";
    for (let i = 0; i < invoer.length; i++) {
        let toevoegen = invoer.substring(i, i+1) + " ";
        uitvoer += toevoegen;
    }
    console.log(uitvoer);
}

window.addEventListener("load", setup);