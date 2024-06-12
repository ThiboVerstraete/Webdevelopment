const setup = () => {
    let pElement = document.getElementById("txtOutput");
    let btnWijzig = document.getElementById("Wijzigbtn");
    const wijzig = ()=> {
        pElement.innerHTML='Welkom';
    }
    btnWijzig.addEventListener('click', wijzig);
}
window.addEventListener("load", setup);