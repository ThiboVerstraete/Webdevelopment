    tafelArray = []

    const setup = () => {
        bestaandeStorage()
        document.getElementById("submit").addEventListener("click", slaOp)
    }

    const bestaandeStorage = () => {
        let storage = localStorage.getItem("Tafels")
        let tafels = JSON.parse(storage)
        if (tafels !== null && tafelArray !== null){
            for (let i = 0; i < tafels.length; i++){
                if (tafels[i] !== null){
                    tafelArray.push(tafels[i])
                    maakAan(tafels[i].getal, tafels[i].tijd)
                }
            }
        }
    }

    const slaOp = () => {
        let getal = document.getElementById("input").value
        maakAan(getal, gettijd())
        let eentafel = {
            title: "Tafel van " + getal,
            getal: getal,
            tijd: gettijd()
        }

        tafelArray.push(eentafel)
        let tafelJSON = JSON.stringify(tafelArray)
        localStorage.setItem("Tafels", tafelJSON)
    }

    const maakAan = (getal, tijd) => {
        let tafels = document.getElementById("tafels")
        console.log(getal)

        let card = document.createElement("div")
        card.classList.add("card")

        let cardheader = document.createElement("p")
        cardheader.classList.add("hoofd")

        cardheader.innerHTML = "Tafel van " + getal + " aangemaakt op: " + tijd
        console.log("Tafel van " + getal + " aangemaakt op: " + tijd)

        card.append(cardheader)

        for (var i = 1; i <= 10; i++){
            rij = document.createElement("p")
            let tafeluitkomst = getal * i
            let zin = getal + " x " + i + " = " + tafeluitkomst

            rij.classList.add("tabelkleuren")
            rij.append(zin)

            console.log(zin)

            card.append(rij)
        }

        tafels.append(card)

        getal.innerHTML = ""
    }

    const gettijd = () => {
        let tijd = new Date()
        return tijd.getHours() + ":" + tijd.getMinutes() + ":" + tijd.getSeconds()
    }

    window.addEventListener("load", setup);