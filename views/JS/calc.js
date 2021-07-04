function calcula() {

    //Soma Crédito
    var credito = document.getElementsByClassName("credit")
    var arrayC = []
    var arrayCredito = []


    for (i = 0; i < credito.length; i++) {

        arrayC.push(credito[i].innerHTML)
        arrayCredito.push(parseInt(arrayC[i]))

    }

    var creditoTotal = arrayCredito.reduce(function (a, b) {
        return a + b
    }, 0)




    //Soma Debito
    var debito = document.getElementsByClassName("debit")
    var arrayD = []
    var arrayDebito = []


    for (i = 0; i < debito.length; i++) {

        arrayD.push(debito[i].innerHTML)
        arrayDebito.push(parseInt(arrayD[i]))

    }

    var debitoTotal = arrayDebito.reduce(function (a, b) {
        return a + b
    }, 0)

    const somaDebito = document.getElementById("somad")

    somaDebito.innerText += debitoTotal




    //Soma Patrimônio Liquido

    var PL = document.getElementsByClassName("pl")
    var arraypl = []
    var arrayPL = []


    for (i = 0; i < PL.length; i++) {

        arraypl.push(PL[i].innerHTML)
        arrayPL.push(parseInt(arraypl[i]))

    }

    var PLTotal = arrayPL.reduce(function (a, b) {
        return a + b
    }, 0)


    const somaPL = document.getElementById("somapl")

    somaPL.innerText += PLTotal

    //Mostra total de Crédito
    const somaCredito = document.getElementById("somac")

    somaCredito.innerText += creditoTotal + PLTotal

    //Mostra o total do Balanço
    var balanco = document.getElementById("balanco")

    balanco.innerText += PLTotal + creditoTotal - debitoTotal
}