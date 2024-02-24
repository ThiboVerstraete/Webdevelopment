const setup = () => {
    window.alert("Dit is een mededeling");
    let confirm = window.confirm("Weet u het zeker?");
    console.log(confirm);
    let prompt = window.prompt("Wat is uw naam?", "Onbekend");
    console.log(prompt);
}
window.addEventListener("load", setup);