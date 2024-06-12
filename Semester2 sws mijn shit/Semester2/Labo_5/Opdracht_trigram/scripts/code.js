const setup = () => {
    let string = "onoorbaar";

    for (let i = 0; i < string.length-2; i++) {
        console.log(string.slice(i, i+3));
    }
}
window.addEventListener("load", setup);