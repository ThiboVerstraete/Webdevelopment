const setup = () => {
    let today = new Date();
    let verjaardag = new Date(2004, 1, 29);
    let aantalseconden = (today.getTime() - verjaardag.getTime()) / 1000;
    console.log(today.toString())
    console.log(verjaardag.toString());
    console.log(aantalseconden);
}
window.addEventListener("load", setup);