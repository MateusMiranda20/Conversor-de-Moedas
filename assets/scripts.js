const button = document.getElementById("button-converter")
const select = document.getElementById("trocaDeValores")



const conversao = async () => {

    const inputValue = document.getElementById('input-valor').value
    const realBrasileiro = document.getElementById('valorBrasil')
    const convertion = document.getElementById('valorDolar')

    //async await => so pode usar dentro de uma função 
    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(resposta => resposta.json())
    
    const bitcoin = data.BTCBRL.high
    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high

    console.log(data)

    realBrasileiro.innerHTML = new Intl.NumberFormat("pt-BR",
        { style: "currency", currency: "BRL" }
    ).format(inputValue);

    if (select.value === "US$ Dólar Americano") {
        convertion.innerHTML = new Intl.NumberFormat("en-US",
        { style: "currency", currency: "USD" }
        ).format(inputValue / dolar);
    }


    if (select.value === "€ Euro") {
        convertion.innerHTML = new Intl.NumberFormat("de-DE",
        { style: "currency", currency: "EUR" }
        ).format(inputValue / euro);
    }

    else if (select.value === "Bitcoin") {
        convertion.innerHTML = new Intl.NumberFormat("en-US",
        { style: "currency", currency: "BTC" }
        ).format(inputValue / bitcoin);
    }
}

 trocaDeMoeda = () => {
    const name = document.getElementById("trocaNome")
    const imagens = document.getElementById("imgTroca")
    
    if (select.value === "US$ Dólar Americano" ) {
        name.innerHTML = "US$ Dólar Americano"
        imagens.src = "/img/Estados-unidos.png"
    }
    if (select.value === "€ Euro") {
        name.innerHTML = "€ Euro"
        imagens.src = "/img/Euro.png"
    }
    else if (select.value === "Bitcoin") {
        name.innerHTML = "Bitcoin"
        imagens.src = "/img/Bitcon.png"
    }

    conversao()
}

button.addEventListener('click', conversao)
select.addEventListener("change", trocaDeMoeda)