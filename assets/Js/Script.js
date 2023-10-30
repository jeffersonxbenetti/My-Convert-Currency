const buttonConvert = document.querySelector(".button-img")
const selectTo = document.querySelector(".select-to")


function convertValues(){
    const inputValue = document.querySelector(".input-value").value
    const valueFromCurrency = document.querySelector(".currency-value-from")
    const valueToCurrency = document.querySelector(".currency-value-to")

    const dolarToday = 5.01
    const euroToday = 5.31
    const libraToday = 6.08
    const bitcoinToday = 173.411

    if(selectTo.value == "dolar"){
        valueToCurrency.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"    
        }).format(inputValue/dolarToday)
    }
    if(selectTo.value == "real"){
        valueToCurrency.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"    
        }).format(inputValue)
    }
    if(selectTo.value == "euro"){
        valueToCurrency.innerHTML = new Intl.NumberFormat("en-DE", {
            style: "currency",
            currency: "EUR"    
        }).format(inputValue/euroToday)
    }
    if(selectTo.value == "libra"){
        valueToCurrency.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"    
        }).format(inputValue/libraToday)
    }
    if(selectTo.value == "bitcoin"){
        valueToCurrency.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BTC"    
        }).format(inputValue/bitcoinToday)
    } 

    valueFromCurrency.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"    
    }).format(inputValue)
} 

function toSelect(){
    const currencyNameTo = document.querySelector(".currency-name-to")
    const imgCurrencyto = document.querySelector(".to-img")

    console.log(selectTo.value);

    if(selectTo.value == "dolar"){
        currencyNameTo.innerHTML = "Dólar Americano"
        imgCurrencyto.src = "./assets/img/USD.png"
    }
    if(selectTo.value == "real"){
        currencyNameTo.innerHTML = "Real Brasileiro"
        imgCurrencyto.src = "./assets/img/BRL.png"
    }
    if(selectTo.value == "euro"){
        currencyNameTo.innerHTML = "Euro"
        imgCurrencyto.src = "./assets/img/EUR.png"
    }
    if(selectTo.value == "libra"){
        currencyNameTo.innerHTML = "Libra Esterlina"
        imgCurrencyto.src = "./assets/img/GBP.png"
    }
    if(selectTo.value == "bitcoin"){
        currencyNameTo.innerHTML = "Bitcoin"
        imgCurrencyto.src = "./assets/img/BTC.png"
    }

    convertValues()
}

buttonConvert.addEventListener("click", convertValues)
selectTo.addEventListener("change", toSelect)
