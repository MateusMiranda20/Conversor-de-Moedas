const button = document.getElementById('button-converter')

const dolar = 5.2

const conversao = () => {
const inputValue = document.getElementById('input-valor').value
const realBrasileiro = document.getElementById('valorBrasil')
const dolarAmericano = document.getElementById('valorDolar')

realBrasileiro.innerHTML = inputValue
dolarAmericano.innerHTML = inputValue / dolar
}

button.addEventListener('click', conversao)